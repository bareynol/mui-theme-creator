import { useEffect } from "react"
import * as monaco from "monaco-editor"
import { EditorRefType } from "../types"
import { verbose } from "src/utils"

// number of lines from the top and bottom of the
// code in the editor that should be considered read only
//    first two lines consist of importing the ThemeOptions interface
//    and opening the themeOptions objects
//    last line is a bracket closing the themeOptions object
const readOnlyLines = {
  top: 3,
  bottom: 1,
}

/**
 * Restricts backspace and delete on read only lines,
 * also attempts to restrict closing the themeOptions object
 * @param editorRef
 */
export default function useReadOnlyLines(editorRef: EditorRefType) {
  // apply read only styles
  useReadOnlyStyles(editorRef)

  useEffect(() => {
    /**
     * prevent pasting, cutting, or key event that cause edits
     * on read only lines
     */
    function preventModifyReadOnlyLines(event: monaco.IKeyboardEvent) {
      const selection = editorRef.current?.getSelection()
      const lastEditableLine =
        (editorRef.current?.getModel()?.getLineCount() || 0) -
        readOnlyLines.bottom

      if (!selection || lastEditableLine < 0) return null

      if (
        selection.startLineNumber <= readOnlyLines.top ||
        selection.endLineNumber > lastEditableLine
      ) {
        const allowedKeys = [
          monaco.KeyCode.LeftArrow,
          monaco.KeyCode.RightArrow,
          monaco.KeyCode.UpArrow,
          monaco.KeyCode.DownArrow,
          monaco.KeyCode.PageUp,
          monaco.KeyCode.PageDown,
        ]
        const eventIsPaste =
          event.ctrlKey && event.keyCode === monaco.KeyCode.KEY_V
        const eventIsCut =
          event.ctrlKey && event.keyCode === monaco.KeyCode.KEY_X

        if (
          eventIsPaste ||
          eventIsCut ||
          (!event.ctrlKey && !allowedKeys.includes(event.keyCode))
        ) {
          event.preventDefault()
          event.stopPropagation()
        }
      }
    }

    /**
     * Prevent backspace on column 1 of the first editable line
     */
    function preventBackspaceToReadOnlyLines(event: monaco.IKeyboardEvent) {
      if (event.keyCode === monaco.KeyCode.Backspace) {
        const selection = editorRef.current?.getSelection()

        if (!selection) return null

        if (selection.startLineNumber === readOnlyLines.top + 1) {
          if (selection.startColumn === 1 && selection.isEmpty()) {
            verbose("preventing backspace on read-only line")
            event.stopPropagation()
          }
        }
      }
    }

    /**
     * Prevent delete key on last column of last editable line
     */
    function preventDeleteToReadOnlyLines(event: monaco.IKeyboardEvent) {
      if (event.keyCode === monaco.KeyCode.Delete) {
        const selection = editorRef.current?.getSelection()
        const lastEditableLine =
          (editorRef.current?.getModel()?.getLineCount() || 0) -
          readOnlyLines.bottom

        if (!selection || lastEditableLine < 0) return null

        if (selection.endLineNumber === lastEditableLine) {
          const lineLength =
            editorRef.current?.getModel()?.getLineLength(lastEditableLine) || 0

          if (selection.endColumn > lineLength && selection.isEmpty()) {
            verbose("preventing delete on read-only lines")
            event.stopPropagation()
          }
        }
      }
    }

    const keyDownBinding = editorRef.current?.onKeyDown(
      (event: monaco.IKeyboardEvent) => {
        preventModifyReadOnlyLines(event)
        preventBackspaceToReadOnlyLines(event)
        preventDeleteToReadOnlyLines(event)
      }
    )

    return () => keyDownBinding?.dispose()
  }, [])
}

/**
 * Add styles and hover messages to read only lines, and create
 * an event listener to ensure proper read only styles are applied
 * after the editor input updates
 * @param editorRef
 */
export const useReadOnlyStyles = (editorRef: EditorRefType) => {
  let decorationIds: string[] = [] // the IDs of decorations created

  /**
   * Add the className "readOnlyLine" (styles defined in ../editor.css)
   * to the first three lines and the last line in the editor
   */
  const applyStyles = () => {
    const lastLine = editorRef.current?.getModel()?.getLineCount() || 0

    // wipe the existing read only decorations, and add new ones
    const decorationOptions = {
      isWholeLine: true,
      inlineClassName: "readOnlyLine",
      hoverMessage: [
        {
          value: "This line is read-only",
        },
      ],
    }
    decorationIds =
      editorRef.current?.deltaDecorations(decorationIds, [
        {
          range: new monaco.Range(1, 1, readOnlyLines.top, 50),
          options: decorationOptions,
        },
        {
          range: new monaco.Range(lastLine, 1, lastLine, 50),
          options: decorationOptions,
        },
      ]) || []
  }

  useEffect(() => {
    // add the initial styles
    applyStyles()

    // when model content changes, ensure that styles are reapplied
    const modelContentChangeBinding = editorRef.current?.onDidChangeModelContent(
      applyStyles
    )

    return () => {
      editorRef.current?.deltaDecorations(decorationIds, []) // wipe any existing decorations
      modelContentChangeBinding?.dispose()
    }
  }, [])
}
