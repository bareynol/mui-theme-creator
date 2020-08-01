import React, { useEffect, useRef } from "react"

import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/types"
import { saveEditorCode } from "src/state/actions"
import {
  useEditor,
  useSaveKey,
  useReadOnlyLines,
  useRestrictedKeys,
  useUpdateOnThemeInput,
} from "./hooks"

const MonacoThemeCodeEditor = () => {
  const themeInput = useSelector((state: RootState) => state.themeInput)
  const editor = useRef(null)
  const dispatch = useDispatch()
  const handleSaveCode = React.useCallback(
    code => {
      dispatch(saveEditorCode(code))
    },
    [dispatch]
  )

  const onSaveCode = async () => {
    const monaco = require("monaco-editor")

    try {
      await editor.current.getAction("editor.action.formatDocument").run()
    } catch (err) {
      console.log("error formatting document", err)
    }
    console.log("formatted document")
    // get the JS output of the typescript inside the code editor
    const model = editor.current.getModel()
    const worker = await monaco.languages.typescript.getTypeScriptWorker()
    const proxy = await worker(model.uri)

    // get the current semantic errors, and the emitted output
    const [
      semanticDiagnostics,
      syntacticDiagnostics,
      emittedOutput,
    ] = await Promise.all([
      proxy.getSemanticDiagnostics(model.uri.toString()),
      proxy.getSyntacticDiagnostics(model.uri.toString()),
      proxy.getEmitOutput(model.uri.toString()),
    ])

    // if there are semantic errors, prevent saving, else save to redux store
    if (semanticDiagnostics.length > 0) {
      // handle errors
    } else if (syntacticDiagnostics.length > 0) {
      // handle errors
    } else {
      handleSaveCode(emittedOutput.outputFiles[0].text)
    }

    console.log({ semanticDiagnostics, syntacticDiagnostics, emittedOutput })
  }

  useEditor(editor, themeInput)
  useSaveKey(editor, onSaveCode)
  useReadOnlyLines(editor)
  useRestrictedKeys(editor)
  useUpdateOnThemeInput(editor, themeInput)

  const resizeEditor = () => editor?.current?.layout()

  useEffect(() => {
    window.addEventListener("resize", resizeEditor)

    return () => {
      console.log("MonacoThemeCodeEditor unmounted")
      window.removeEventListener("resize", resizeEditor)

      // remove the code editor from the container div
      // let containerEl = document.getElementById("container")
      // while (containerEl?.firstChild) {
      //   containerEl?.removeChild(containerEl?.firstChild)
      // }
    }
  }, [])

  return (
    <>
      <div id="container" style={{ height: "100%", width: "100%" }} />
    </>
  )
}

const countUnclosedBrackets = code => {
  let numUnclosedBrackets = 0
  for (let i = 0; i < code.length; i++) {
    if (code[i] === "{") {
      numUnclosedBrackets++
    } else if (code[i] === "}") {
      numUnclosedBrackets--
    }
  }
  console.log("counted", numUnclosedBrackets, "unclosed brackets")
  return numUnclosedBrackets
}

export default MonacoThemeCodeEditor
