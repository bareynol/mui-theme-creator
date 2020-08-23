import * as monaco from "monaco-editor"
export type EditorState = {
  themeInput: string
  initialVersion: number
  lastVersion: number
  currentVersion: number
  savedVersion: number
  canUndo: boolean
  canRedo: boolean
  errors: monaco.languages.typescript.Diagnostic[]
  // user modified settings
  formatOnSave: boolean
  outputTypescript: boolean
}

export type EditorStateOptions = Partial<EditorState>
