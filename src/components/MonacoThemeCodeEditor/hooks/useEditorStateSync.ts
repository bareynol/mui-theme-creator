import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { RootState } from "src/state/types"

import { EditorRefType } from "../types"
import { useUpdateEditorState } from "src/state/editor/actions"
import { ThemeValueChangeEvent } from "src/components/ThemeTools/events"

export default function useEditorStateSync(editorRef: EditorRefType) {
  useSyncToStore(editorRef)
  useSyncFromStore(editorRef)
  useListenForThemeChangeEvent(editorRef)
}

/**
 * ensure that when the code editor is updated,
 * the redux store themeInput is also updated
 */
const useSyncToStore = (editorRef: EditorRefType) => {
  const updateEditorState = useUpdateEditorState()

  useEffect(() => {
    const modelContentChangeBinding = editorRef.current?.onDidChangeModelContent(
      event => updateEditorState({ themeInput: editorRef.current?.getValue() })
    )

    return () => {
      modelContentChangeBinding?.dispose()
    }
  }, [])
}

/**
 * ensure that when the redux store themeInput is updated,
 * the code editor is also updated
 */
const useSyncFromStore = (editorRef: EditorRefType) => {
  const themeInput = useSelector((state: RootState) => state.editor.themeInput)
  const updateEditorState = useUpdateEditorState()
  useEffect(() => {
    const model = editorRef.current?.getModel()

    // only modify the editor if themeInput differs from editor,
    // so as to not pollute the undo/redo stack
    if (model?.getValue() !== themeInput) {
      // push the new theme input on to the edit operations stack
      // so that undo stack is preserved
      model?.pushEditOperations(
        [],
        [{ range: model.getFullModelRange(), text: themeInput }],
        () => null
      )
      // create a new undo/redo "save" point
      // model?.pushStackElement()

      // update the last saved version after update is applied
      updateEditorState({ savedVersion: model?.getAlternativeVersionId() })
    }
  }, [themeInput])
}

const useListenForThemeChangeEvent = (editorRef: EditorRefType) => {
  const onChangeEvent = () => {
    const model = editorRef.current?.getModel()
    model?.pushStackElement()
  }
  useEffect(() => {
    document.addEventListener(ThemeValueChangeEvent().type, onChangeEvent)

    return () => {
      document.removeEventListener(ThemeValueChangeEvent().type, onChangeEvent)
    }
  })
}
