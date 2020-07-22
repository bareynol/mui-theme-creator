import { Theme, ThemeOptions } from "@material-ui/core/styles/createMuiTheme"

export interface RootState {
  themeObject: Theme
  themeOptions: ThemeOptions
  themeInput: string
}
