import { useEffect } from "react"
import * as monaco from "monaco-editor"
import { files as muiTypeFiles } from "src/muiTypeStrings"

// custom theme config
import monokai from "src/monaco-themes/monokai"

const editorOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
  language: "typescript",
  theme: "monokai",
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

// number of lines from the top and bottom of the
// code in the editor that should be considered read only
//    first two lines consist of importing the ThemeOptions interface
//    and opening the themeOptions objects
//    last line is a bracket closing the themeOptions object
const readOnlyLines = {
  top: 3,
  bottom: 1,
}

type MutableEditorRefType = React.MutableRefObject<monaco.editor.IStandaloneCodeEditor | null>
type EditorRefType = React.RefObject<monaco.editor.IStandaloneCodeEditor>

export const useEditor = (
  editorRef: MutableEditorRefType,
  initialCode: string
) => {
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
      document.getElementById("container")!,
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
      editorRef.current?.dispose()
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

/**
 * Restricts backspace and delete on read only lines,
 * also attempts to restrict closing the themeOptions object
 * @param editorRef
 */
export const useReadOnlyLines = (editorRef: EditorRefType) => {
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
      console.log(selection, lastEditableLine, event)

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
          console.log("preventing edit")
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
            console.log("preventing backspace")
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
            console.log("preventing delete")
            event.stopPropagation()
          }
        }
      }
    }

    // set read only styles
    const lastLine = editorRef.current?.getModel()?.getLineCount() || 0
    editorRef.current?.deltaDecorations(
      [],
      [
        {
          range: new monaco.Range(1, 1, readOnlyLines.top, 50),
          options: {
            isWholeLine: true,
            inlineClassName: "readOnlyLine",
            hoverMessage: [
              {
                value: "This line is read-only",
              },
            ],
          },
        },
        {
          range: new monaco.Range(lastLine, 1, lastLine, 50),
          options: {
            isWholeLine: true,
            inlineClassName: "readOnlyLine",
            hoverMessage: [
              {
                value: "This line is read-only",
              },
            ],
          },
        },
      ]
    )

    const keyDownBinding = editorRef.current?.onKeyDown(
      (event: monaco.IKeyboardEvent) => {
        preventModifyReadOnlyLines(event)
        preventBackspaceToReadOnlyLines(event)
        preventDeleteToReadOnlyLines(event)

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
      }
    )

    return () => keyDownBinding?.dispose()
  }, [])
}

export const useUpdateOnThemeInput = (
  editorRef: EditorRefType,
  themeInput: string
) => {
  useEffect(() => {
    // push the new theme input on to the edit operations stack
    // so that undo functionality is preserved
    const model = editorRef.current?.getModel()
    model?.pushEditOperations(
      [],
      [{ range: model.getFullModelRange(), text: themeInput }],
      () => null
    )
  }, [themeInput])
}

// const countUnclosedBrackets = code => {
//   let numUnclosedBrackets = 0
//   for (let i = 0; i < code.length; i++) {
//     if (code[i] === "{") {
//       numUnclosedBrackets++
//     } else if (code[i] === "}") {
//       numUnclosedBrackets--
//     }
//   }
//   console.log("counted", numUnclosedBrackets, "unclosed brackets")
//   return numUnclosedBrackets
// }
