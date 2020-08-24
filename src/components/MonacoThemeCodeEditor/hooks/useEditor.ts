import { useEffect } from "react"
import * as monaco from "monaco-editor"
import { files as muiTypeFiles } from "src/muiTypeStrings"
import { EditorRefType, MutableEditorRefType } from "../types"
// custom theme config
import monokai from "src/components/MonacoThemeCodeEditor/monaco-themes/monokai"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"

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

export default function useEditor(editorRef: MutableEditorRefType) {
  const themeInput = useSelector((state: RootState) => state.editor.themeInput)
  useEffect(() => {
    // set the editor theme
    monaco.editor.defineTheme(
      "monokai",
      monokai as monaco.editor.IStandaloneThemeData
    )

    // set language configs
    setLanguageDiagnosticOptions()
    setLanguageCompilerOptions()
    setPrettierFormatting()
    setMuiThemeTypeData()

    // create the editor
    editorRef.current = monaco.editor.create(
      document.getElementById("container")!,
      {
        ...editorOptions,
        value: themeInput,
        // this will ensure the model is created only once
        model:
          monaco.editor.getModel(monaco.Uri.parse("file:///main.tsx")) ||
          monaco.editor.createModel(
            themeInput,
            "typescript",
            monaco.Uri.parse("file:///main.tsx")
          ),
      }
    )

    return () => {
      editorRef.current?.getModel()?.dispose() // clear undo/redo on unmount
      editorRef.current?.dispose()
    }
  }, [])

  useEditorResizeListener(editorRef)
}

const setLanguageDiagnosticOptions = () => {
  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions(
    languageDiagnosticsOptions
  )
}

const setLanguageCompilerOptions = () => {
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions(
    languageCompilerOptions
  )
}

const setPrettierFormatting = () => {
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

const setMuiThemeTypeData = () => {
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

export const useEditorResizeListener = (editorRef: EditorRefType) => {
  const resizeEditor = () => editorRef.current?.layout()
  useEffect(() => {
    window.addEventListener("resize", resizeEditor)
    return () => {
      window.removeEventListener("resize", resizeEditor)
    }
  }, [])
}
