import React, { useEffect, useState, useCallback, useRef } from "react"

import { files } from "../../muiTypeStrings"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/types"
import { Button } from "@material-ui/core"
import { saveEditorCode } from "src/state/actions"
import monokai from "src/monaco-themes/monokai"

const defaultCode = `
import {ThemeOptions} from 'muiTypes'
const theme: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9",
    },
  },
}
`

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

  useEffect(() => {
    const monaco = require("monaco-editor")

    editor.current = makeEditor(themeInput)

    editor.current.addAction({
      id: "save-editor-contents",
      label: "Save Editor Theme Contents",
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S],
      contextMenuGroupId: "navigation",
      contextMenuOrder: 1,
      run: onSaveCode,
    })

    // const cursorPositionBinding = editor.onDidChangeCursorPosition(event => {
    //   console.log(
    //     "cursor position changed",
    //     event.position,
    //     event.secondaryPositions
    //   )
    // })

    const cursorSelectionBinding = editor.current.onDidChangeCursorSelection(
      event => {
        console.log("cursor selection changed", event.selection)
        preventSelectTopReadOnlyLines(event, editor.current)
        preventSelectBottomReadOnlyLines(event, editor.current)
      }
    )

    const keyDownBinding = editor.current.onKeyDown(event => {
      // disallow backspace on read-only lines
      preventBackspaceReadOnlyLines(event, editor.current, monaco)
      preventDeleteReadOnlyLines(event, editor.current, monaco)

      if (
        event.shiftKey &&
        event.keyCode === monaco.KeyCode.US_CLOSE_SQUARE_BRACKET
      ) {
        console.log(
          "close bracket pressed",
          countUnclosedBrackets(editor.current.getValue())
        )
        if (countUnclosedBrackets(editor.current.getValue()) <= 0) {
          console.log("preventing close bracket")
          event.preventDefault()
          event.stopPropagation()
        }
      }
    })

    window.addEventListener("resize", resizeEditor)

    return () => {
      console.log("MonacoThemeCodeEditor unmounted")
      window.removeEventListener("redize", resizeEditor)
      // cursorPositionBinding?.dispose()
      cursorSelectionBinding.dispose()
      keyDownBinding.dispose()
      editor.current?.dispose()
      // remove the code editor from the container div
      let containerEl = document.getElementById("container")
      while (containerEl?.firstChild) {
        containerEl?.removeChild(containerEl?.firstChild)
      }
    }
  }, [])

  const resizeEditor = () => editor?.current?.layout()

  useEffect(() => {
    const model = editor?.current?.getModel()
    model?.pushEditOperations(
      [],
      [{ range: model.getFullModelRange(), text: themeInput }]
    )
  }, [themeInput])

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

  return (
    <>
      <div id="container" style={{ height: "100%", width: "100%" }} />
    </>
  )
}

const makeEditor = (code: string) => {
  const monaco = require("monaco-editor")

  monaco.editor.defineTheme("monokai", monokai)

  const editor = monaco.editor.create(document.getElementById("container"), {
    value: code,
    selectOnLineNumbers: true,
    scrollBeyondLastLine: false,
    theme: "vs-dark",
    language: "typescript",
    minimap: { enabled: false },
    matchBrackets: "never",
    lineNumbersMinChars: 3,
    fontSize: 12,
    automaticLayout: true,
    wordWrap: "on",
    model:
      monaco.editor.getModel(monaco.Uri.parse("file:///main.tsx")) ||
      monaco.editor.createModel(
        code,
        "typescript",
        monaco.Uri.parse("file:///main.tsx")
      ),
  })
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
  })

  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES6,
    allowNonTsExtensions: true,
    suppressExcessPropertyErrors: true,
  })

  monaco.languages.registerDocumentFormattingEditProvider("typescript", {
    async provideDocumentFormattingEdits(model, options, token) {
      const prettier = await import("prettier/standalone")
      const babel = await import("prettier/parser-babel")
      const text = prettier
        .format(model.getValue(), {
          parser: "babel",
          plugins: [babel],
          singleQuote: true,
        })
        .replace(/[\r\n]+$/, "") // remove new line at end of prettier format

      return [
        {
          range: model.getFullModelRange(),
          text,
        },
      ]
    },
  })

  // load the MUI types into the code editor language library
  for (const fileName in files) {
    const fakePath = `file:///node_modules/${fileName}`

    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      files[fileName],
      fakePath
    )
  }

  // return a created editor instance
  return editor
}

const preventSelectTopReadOnlyLines = (event, editor) => {
  if (event.selection.startLineNumber <= 2) {
    editor.setSelection({
      startLineNumber: 3,
      startColumn: 0,
      endLineNumber: 3,
      endColumn: 0,
    })
  }
}

const preventSelectBottomReadOnlyLines = (event, editor) => {
  // disallow selecting last line
  const lastLineNum = editor.getModel().getLineCount()
  if (event.selection.endLineNumber === lastLineNum) {
    const startLineNumber = Math.min(
      event.selection.startLineNumber,
      lastLineNum - 1
    )
    editor.setSelection({
      startLineNumber: startLineNumber,
      startColumn:
        startLineNumber === lastLineNum - 1
          ? editor.getModel().getLineLength(lastLineNum - 1) + 1
          : event.selection.startColumn,
      endLineNumber: lastLineNum - 1,
      endColumn: editor.getModel().getLineLength(lastLineNum - 1) + 1,
    })
  }
}

const preventBackspaceReadOnlyLines = (event, editor, monaco) => {
  if (event.keyCode === monaco.KeyCode.Backspace) {
    const position = editor.getPosition()
    if (
      position.lineNumber <= 2 ||
      (position.lineNumber === 3 && position.column <= 3)
    ) {
      event.stopPropagation()
    }
  }
}

const preventDeleteReadOnlyLines = (event, editor, monaco) => {
  if (event.keyCode === monaco.KeyCode.Delete) {
    console.log("delete key")
    const position = editor.getPosition()
    const lastLineNum = editor.getModel().getLineCount()
    console.log(position.lineNumber, lastLineNum)
    if (position.lineNumber === lastLineNum - 1) {
      const lineLength = editor.getModel().getLineLength(position.lineNumber)
      console.log(position.column, lineLength)
      if (position.column > lineLength) {
        console.log("preventing delete")
        event.stopPropagation()
      }
    }
  }
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
