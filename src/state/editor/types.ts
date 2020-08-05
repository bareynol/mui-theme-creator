import * as monaco from "monaco-editor"
export type EditorState = {
  themeInput: string
  initialVersion: number
  lastVersion: number
  currentVersion: number
  savedVersion: number
  canUndo: boolean
  canRedo: boolean
  canSave: boolean
  errors: monaco.languages.typescript.Diagnostic[]
}

export type EditorStateOptions = Partial<EditorState>
