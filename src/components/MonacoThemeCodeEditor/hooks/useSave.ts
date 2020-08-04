import { useEffect, useCallback } from "react"
import * as monaco from "monaco-editor"
import { files as muiTypeFiles } from "src/muiTypeStrings"
import { EditorRefType, MutableEditorRefType } from "../types"
// custom theme config
import monokai from "src/monaco-themes/monokai"
import { useDispatch } from "react-redux"
import { updateEditorState } from "src/state/editor/actions"
import { saveEditorCode } from "src/state/actions"

export default function useSave(editorRef: EditorRefType) {
  const dispatch = useDispatch()
  const handleSave = useCallback(async () => {
    const [
      semanticDiagnostics,
      syntacticDiagnostics,
      emittedOutput,
    ] = await formatAndValidateInput(editorRef)
    console.log({ semanticDiagnostics, syntacticDiagnostics, emittedOutput })
    // if there are semantic errors, prevent saving, else save to redux store
    if (semanticDiagnostics.length > 0) {
      // handle errors
    } else if (syntacticDiagnostics.length > 0) {
      // handle errors
    } else {
      dispatch(saveEditorCode(emittedOutput.outputFiles[0].text))
      // update the saved version
      dispatch(
        updateEditorState({
          savedVersion: editorRef.current
            ?.getModel()
            ?.getAlternativeVersionId(),
        })
      )
    }
  }, [dispatch])

  useSaveKey(editorRef, handleSave)

  return handleSave
}

export const useSaveKey = (editorRef: EditorRefType, onSave: Function) => {
  useEffect(() => {
    const actionBinding = editorRef.current?.addAction({
      id: "save-editor-contents",
      label: "Save Editor Theme Contents",
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S],
      contextMenuGroupId: "navigation",
      contextMenuOrder: 1,
      run: () => onSave(),
    })

    return () => actionBinding?.dispose()
  }, [onSave])
}

async function formatAndValidateInput(editorRef: EditorRefType) {
  const monaco = require("monaco-editor")

  // use prettier to auto format the code
  try {
    await editorRef.current?.getAction("editor.action.formatDocument").run()
  } catch (err) {
    console.log("error formatting document", err)
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
