import { EditorStateOptions, EditorState } from "./types"
import { useDispatch } from "react-redux"
import { useCallback } from "react"

export const updateEditorState = (editorState: EditorStateOptions) => ({
  type: "UPDATE_EDITOR_STATE",
  editorState,
})

export const useUpdateEditorState = () => {
  const dispatch = useDispatch()
  return useCallback(
    (editorState: EditorStateOptions) =>
      dispatch(updateEditorState(editorState)),
    [dispatch]
  )
}

export const updateVersionStates = (nextVersionId: number) => (
  dispatch,
  getState
) => {
  const { initialVersion, lastVersion, currentVersion } = getState().editor

  console.log("updateVersionStates", {
    nextVersionId,
    initialVersion,
    lastVersion,
    currentVersion,
  })
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
