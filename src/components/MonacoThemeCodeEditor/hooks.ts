import { useEffect } from "react"
import * as monaco from "monaco-editor"
import { files as muiTypeFiles } from "src/muiTypeStrings"

// custom theme config
import monokai from "src/monaco-themes/monokai"

const editorOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
  language: "typescript",
  theme: "vs-dark",
  selectOnLineNumbers: true,
  scrollBeyondLastLine: false,
  minimap: { enabled: false },
  matchBrackets: "never",
  lineNumbersMinChars: 3, // if your them code is over 1000 lines, I don't know what to tell you. Wowza.
  fontSize: 12,
  // wordWrap: "on",
}

const languageDiagnosticsOptions: monaco.languages.typescript.DiagnosticsOptions = {
  noSemanticValidation: false, // expose semantic errors when parsing
  noSyntaxValidation: false, // expose syntax errors when parsing
}

const languageCompilerOptions: monaco.languages.typescript.CompilerOptions = {
  target: monaco.languages.typescript.ScriptTarget.ES5,
  allowNonTsExtensions: true,
  suppressExcessPropertyErrors: true,
}

export const useEditor = (editorRef, initialCode: string) => {
  useEffect(() => {
    // const monaco = require("monaco-editor")

    // set the editor theme
    monaco.editor.defineTheme(
      "monokai",
      monokai as monaco.editor.IStandaloneThemeData
    )

    // set language configs
    useLanguageDiagnosticOptions()
    useLanguageCompilerOptions()
    usePrettierFormatting()
    useMuiThemeTypeData()

    // create the editor
    editorRef.current = monaco.editor.create(
      document.getElementById("container"),
      {
        ...editorOptions,
        value: initialCode,
        // this will ensure the model is created only once
        model:
          monaco.editor.getModel(monaco.Uri.parse("file:///main.tsx")) ||
          monaco.editor.createModel(
            initialCode,
            "typescript",
            monaco.Uri.parse("file:///main.tsx")
          ),
      }
    )

    return () => {
      editorRef.current.dispose()
    }
  }, [])
}

const useLanguageDiagnosticOptions = () => {
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions(
    languageDiagnosticsOptions
  )
}

const useLanguageCompilerOptions = () => {
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
    languageCompilerOptions
  )
}

const usePrettierFormatting = () => {
  // Monaco editor has an "auto-format" function.
  // this tells monaco to use Prettier to format code
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
}

const useMuiThemeTypeData = () => {
  // load the MUI types into the code editor language library
  // load them under an appropriate fake path so that the editor
  // displays appropriately to the user
  //
  // see https://medium.com/@rohitghatol/web-based-ide-with-react-microsoft-monaco-editor-5ad5eaebaf92
  // for more
  for (const fileName in muiTypeFiles) {
    const fakePath = `file:///node_modules/${fileName}`

    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      muiTypeFiles[fileName],
      fakePath
    )
  }
}

export const useSaveKey = (editorRef, onSave: Function) => {
  useEffect(() => {
    const actionBinding = editorRef.current.addAction({
      id: "save-editor-contents",
      label: "Save Editor Theme Contents",
      keybindings: [monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S],
      contextMenuGroupId: "navigation",
      contextMenuOrder: 1,
      run: onSave,
    })

    return () => actionBinding.dispose()
  }, [onSave])
}

export const useReadOnlyLines = editorRef => {
  useEffect(() => {
    const setTopReadOnlyLines = event => {
      // if selection is in top two lines, move the cursor
      if (event.selection.startLineNumber <= 2) {
        editorRef.current.setSelection({
          startLineNumber: 3,
          startColumn: 0,
          endLineNumber: 3,
          endColumn: 0,
        })
      }
    }

    const setBottomReadOnlyLines = event => {
      // if the selection is on the last line, move the cursor
      const lastLineNum = editorRef.current.getModel().getLineCount()
      if (event.selection.endLineNumber === lastLineNum) {
        const startLineNumber = Math.min(
          event.selection.startLineNumber,
          lastLineNum - 1
        )
        editorRef.current.setSelection({
          startLineNumber: startLineNumber,
          startColumn:
            startLineNumber === lastLineNum - 1
              ? editorRef.current.getModel().getLineLength(lastLineNum - 1) + 1
              : event.selection.startColumn,
          endLineNumber: lastLineNum - 1,
          endColumn:
            editorRef.current.getModel().getLineLength(lastLineNum - 1) + 1,
        })
      }
    }

    // set the event binding
    const cursorSelectionBinding = editorRef.current.onDidChangeCursorSelection(
      event => {
        console.log("cursor selection changed", event.selection)
        setTopReadOnlyLines(event)
        setBottomReadOnlyLines(event)
      }
    )

    // dispose the binding on unmount
    return () => cursorSelectionBinding.dispose()
  }, [])
}

/**
 * Restricts backspace and delete on read only lines,
 * also attempts to restrict closing the themeOptions object
 * @param editorRef
 */
export const useRestrictedKeys = editorRef => {
  useEffect(() => {
    const preventBackspaceReadOnlyLines = event => {
      if (event.keyCode === monaco.KeyCode.Backspace) {
        const position = editorRef.current.getPosition()
        if (
          position.lineNumber <= 2 ||
          (position.lineNumber === 3 && position.column <= 3)
        ) {
          event.stopPropagation()
        }
      }
    }

    const preventDeleteReadOnlyLines = event => {
      if (event.keyCode === monaco.KeyCode.Delete) {
        console.log("delete key")
        const position = editorRef.current.getPosition()
        const lastLineNum = editorRef.current.getModel().getLineCount()
        console.log(position.lineNumber, lastLineNum)
        if (position.lineNumber === lastLineNum - 1) {
          const lineLength = editorRef.current
            .getModel()
            .getLineLength(position.lineNumber)
          console.log(position.column, lineLength)
          if (position.column > lineLength) {
            console.log("preventing delete")
            event.stopPropagation()
          }
        }
      }
    }
    const keyDownBinding = editorRef.current.onKeyDown(event => {
      // disallow backspace on read-only lines
      preventBackspaceReadOnlyLines(event)
      preventDeleteReadOnlyLines(event)

      // if (
      //   event.shiftKey &&
      //   event.keyCode === monaco.KeyCode.US_CLOSE_SQUARE_BRACKET
      // ) {
      //   console.log(
      //     "close bracket pressed",
      //     countUnclosedBrackets(editor.current.getValue())
      //   )
      //   if (countUnclosedBrackets(editor.current.getValue()) <= 0) {
      //     console.log("preventing close bracket")
      //     event.preventDefault()
      //     event.stopPropagation()
      //   }
      // }
    })

    return () => keyDownBinding.dispose()
  }, [])
}

export const useUpdateOnThemeInput = (editorRef, themeInput) => {
  useEffect(() => {
    // push the new theme input on to the edit operations stack
    // so that undo functionality is preserved
    const model = editorRef.current.getModel()
    model.pushEditOperations(
      [],
      [{ range: model.getFullModelRange(), text: themeInput }]
    )
  }, [themeInput])
}
