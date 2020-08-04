export type EditorState = {
  themeInput: string
  initialVersion: number
  lastVersion: number
  currentVersion: number
  savedVersion: number
  canUndo: boolean
  canRedo: boolean
  canSave: boolean
}

export type EditorStateOptions = Partial<EditorState>
