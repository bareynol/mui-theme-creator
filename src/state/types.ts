import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme"

export interface RootState {
  themeId: string
  themeObject: Theme
  themeOptions: ThemeOptions
  themeInput: string
  savedThemes: Record<string, SavedTheme>
  loadedFonts: Set<string>
}

export interface SavedTheme {
  id: string
  name: string
  themeOptions: ThemeOptions
}
