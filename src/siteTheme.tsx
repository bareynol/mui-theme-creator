import {
  createMuiTheme,
  ThemeOptions,
  Theme,
  PaletteType,
} from "@material-ui/core"

export const themeConfig: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
}

export default createMuiTheme(themeConfig)

export const defaultThemeOptions: ThemeOptions = {
  palette: {
    type: "light" as PaletteType,
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
}

export const defaultTheme: Theme = createMuiTheme()
