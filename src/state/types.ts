import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme"
import { EditorState } from "./editor/types"

export interface RootState {
  themeId: string
  themeObject: Theme
  themeOptions: ThemeOptions
  themeInput: string
  savedThemes: Record<string, SavedTheme>
  loadedFonts: Set<string>
  editor: EditorState
}

export interface SavedTheme {
  id: string
  name: string
  themeOptions: ThemeOptions
}
