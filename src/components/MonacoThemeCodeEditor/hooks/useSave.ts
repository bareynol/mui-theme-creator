import { useEffect, useCallback } from "react"
import * as monaco from "monaco-editor"
import { EditorRefType } from "../types"
// custom theme config
import { useDispatch, useSelector } from "react-redux"
import { updateEditorState } from "src/state/editor/actions"
import { saveEditorToTheme } from "src/state/editor/actions"

async function formatAndValidateInput(
  editorRef: EditorRefType,
  formatOnSave: boolean
) {
  const monaco = require("monaco-editor")

  // use prettier to auto format the code
  if (formatOnSave) {
    try {
      await editorRef.current?.getAction("editor.action.formatDocument").run()
    } catch (err) {
      console.log("error formatting document", err)
    }
  }

  // get the JS output of the typescript inside the code editor
  const model = editorRef.current?.getModel()
  if (!model) return [null, null, null]
  const worker = await monaco.languages.typescript.getTypeScriptWorker()
  const proxy = await worker(model.uri)

  // get the current semantic errors, and the emitted output
  return await Promise.all([
    proxy.getSemanticDiagnostics(model.uri.toString()),
    proxy.getSyntacticDiagnostics(model.uri.toString()),
    proxy.getEmitOutput(model.uri.toString()),
  ])
}

export default function useSave(editorRef: EditorRefType) {
  const formatOnSave = useSelector(
    (state: RootState) => state.editor.formatOnSave
  )
  const dispatch = useDispatch()
  const handleSave = useCallback(async () => {
    // clear existing errors first
    dispatch(updateEditorState({ errors: [] }))
    const [
      semanticDiagnostics,
      syntacticDiagnostics,
      emittedOutput,
    ] = await formatAndValidateInput(editorRef, formatOnSave)

    console.log({ semanticDiagnostics, syntacticDiagnostics, emittedOutput })
    // if there are semantic errors, prevent saving, else save to redux store
    const errors = [...syntacticDiagnostics, ...semanticDiagnostics]
    if (errors.length > 0) {
      // handle errors
      dispatch(
        updateEditorState({
          errors,
        })
      )
    } else {
      dispatch(saveEditorToTheme(emittedOutput.outputFiles[0].text))
      // update the saved version
      dispatch(
        updateEditorState({
          savedVersion: editorRef.current
            ?.getModel()
            ?.getAlternativeVersionId(),
        })
      )
    }
  }, [dispatch, formatOnSave])

  useSaveKey(editorRef, handleSave)

  return handleSave
}

export const useSaveKey = (editorRef: EditorRefType, onSave: Function) => {
  useEffect(() => {
    // save key action in the monaco editor
    const actionBinding = editorRef.current?.addAction({
      id: "save-editor-contents",
      label: "Save Editor Theme Contents",
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S],
      contextMenuGroupId: "navigation",
      contextMenuOrder: 1,
      run: () => onSave(),
    })

    // global save key listener
    const handleGlobalSave = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.code == "KeyS") {
        event.preventDefault()
        console.log("global save")
        onSave()
      }
    }
    window.addEventListener("keydown", handleGlobalSave)

    return () => {
      actionBinding?.dispose()
      window.removeEventListener("keydown", handleGlobalSave)
    }
  }, [onSave])
}
