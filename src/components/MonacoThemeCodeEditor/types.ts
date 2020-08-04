import * as monaco from "monaco-editor"

export type MutableEditorRefType = React.MutableRefObject<monaco.editor.IStandaloneCodeEditor | null>
export type EditorRefType = React.RefObject<monaco.editor.IStandaloneCodeEditor>
