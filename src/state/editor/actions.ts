import { EditorStateOptions } from "./types"
import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { Dispatch } from "redux"
import { parseEditorOutput } from "./parser"

/**
 * Save the code coming from the monaco-editor
 * strip the code of extra items, then parse
 * it into an object
 * @param code string - raw code output
 */
export const saveEditorToTheme = (code: string) => {
  let themeOptions

  try {
    themeOptions = parseEditorOutput(code)
  } catch (err) {
    // dispatch errors to redux store
    return {
      type: "UPDATE_EDITOR_STATE",
      editorState: {
        errors: [
          {
            category: 1,
            messageText: `Error while JSON5 parsing code: ${err.message}`,
          },
        ],
      },
    }
  }
  return { type: "SAVE_THEME_INPUT", themeOptions }
}

/**
 * merge object representing editor properties on to editor state
 */
export const updateEditorState = (editorState: EditorStateOptions) => ({
  type: "UPDATE_EDITOR_STATE",
  editorState,
})

/**
 * Pre-made callback to dispatch updateEditorState
 */
export const useUpdateEditorState = () => {
  const dispatch = useDispatch()
  return useCallback(
    (editorState: EditorStateOptions) =>
      dispatch(updateEditorState(editorState)),
    [dispatch]
  )
}

/**
 * Determine status of canUndo and canRedo when the code editor's
 * version ID has changed
 * @param nextVersionId
 */
export const updateVersionStates = (nextVersionId: number) => (
  dispatch: Dispatch,
  getState: Function
) => {
  const { initialVersion, lastVersion, currentVersion } = getState().editor

  let nextState: EditorStateOptions = {}
  if (nextVersionId < currentVersion) {
    // "undo" has been applied, enable redo
    nextState = {
      canRedo: true,
      canUndo: nextVersionId !== initialVersion,
    }
  } else {
    nextState = {
      canUndo: true,
      canRedo: nextVersionId < lastVersion,
      lastVersion: Math.max(currentVersion, lastVersion),
    }
  }
  nextState.currentVersion = nextVersionId
  dispatch(updateEditorState(nextState))
}
