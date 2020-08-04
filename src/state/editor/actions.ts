import { EditorStateOptions } from "./types"
import { useDispatch } from "react-redux"
import { useCallback } from "react"
import JSON5 from "json5"
import { Dispatch } from "redux"

/**
 * Save the code coming from the monaco-editor
 * strip the code of extra items, then parse
 * it into an object
 * @param code string - raw code output
 */
export const saveEditorToTheme = (code: string) => {
  // remove "use strict" and "exports" line
  const codeLines = code.split("\n").slice(2)

  // editor disables editing this line, so it should always
  // be the initial declaration of the themeObject.
  // replace with open bracket to ready for JSON parsing
  codeLines[0] = "{" // editor disables editing this line
  let numUnclosedBrackets = 1
  let currentLine = 1

  while (numUnclosedBrackets > 0 && currentLine < codeLines.length) {
    for (let i = 0; i < codeLines[currentLine].length; i++) {
      const char = codeLines[currentLine][i]
      if (char === "{") {
        numUnclosedBrackets++
      } else if (char === "}") {
        numUnclosedBrackets--
      }
    }
    currentLine++
  }

  codeLines[currentLine - 1] = "}" //editor disables editing this line

  const objectCodeLines = codeLines.splice(0, currentLine).join("\n")
  const objectCode = parseThemeString(objectCodeLines)
  console.log("objectCode", objectCodeLines, objectCode)
  return { type: "SAVE_THEME_INPUT", updatedThemeOptions: objectCode }
}

const parseThemeString = (input: string) => {
  try {
    return JSON5.parse(input)
  } catch (err) {
    console.log("Error while parsing theme string", err)
    throw err
  }
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
