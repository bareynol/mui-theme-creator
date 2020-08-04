import { EditorRefType } from "../types"
import { useEffect, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  useUpdateEditorState,
  updateVersionStates,
} from "src/state/editor/actions"
import { RootState } from "src/state/types"

export default function useUndoRedo(editorRef: EditorRefType) {
  const updateEditorState = useUpdateEditorState()

  // handle initial configuration of undo/redo state properties
  useEffect(() => {
    const initialVersionId = editorRef.current
      ?.getModel()
      ?.getAlternativeVersionId()

    // sett initial versions
    console.log("initialize versions", initialVersionId)
    updateEditorState({
      initialVersion: initialVersionId,
      currentVersion: initialVersionId,
      lastVersion: initialVersionId,
      savedVersion: initialVersionId,
    })
  }, [])

  useTrackUndoRedoState(editorRef)
  return useUndoRedoHandlers(editorRef)
}

const useTrackUndoRedoState = (editorRef: EditorRefType) => {
  const dispatch = useDispatch()

  const handleContentChange = () => {
    const nextVersionId =
      editorRef.current?.getModel()?.getAlternativeVersionId() || 0

    dispatch(updateVersionStates(nextVersionId))
  }

  useEffect(() => {
    // set up event handler for editor changes
    const modelContentChangeBinding = editorRef.current?.onDidChangeModelContent(
      handleContentChange
    )

    return () => {
      modelContentChangeBinding?.dispose()
    }
  }, [])
}

const useUndoRedoHandlers = (editorRef: EditorRefType) => {
  const handleRedo = () => {
    console.log("global redo listener")
    editorRef.current?.trigger("MonacoThemeCodeEditor", "redo", null)
  }

  const handleUndo = () => {
    console.log("global undo listener")
    editorRef.current?.trigger("MonacoThemeCodeEditor", "undo", null)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey) {
      if (event.code === "KeyZ") {
        console.log("global undo listener")
        handleUndo()
      }
      if (event.code === "KeyY") {
        console.log("global redo listener")
        handleRedo()
      }
    }
  }

  // set up event listener to handle Ctrl+Z or Ctrl+Y keydowns
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // return the handlers to be used on undo/redo
  return { handleRedo, handleUndo }
}
