import { createMuiTheme, ThemeOptions, Theme } from "@material-ui/core"

export const themeConfig: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#000000",
    },
  },
}

export default createMuiTheme(themeConfig)

export const defaultTheme: Theme = createMuiTheme()
