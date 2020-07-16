import { RootState } from "src/state/types"
import { PaletteType } from "@material-ui/core"
import JSON5 from "json5"

const defaultTheme = {
  palette: {
    type: "light" as PaletteType,
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
}

const initialState: RootState = {
  currentTheme: defaultTheme,
  themeInput: JSON5.stringify(defaultTheme, null, 2),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_THEME_INPUT":
      return {
        ...state,
        themeInput: action.input,
      }
    case "UPDATE_THEME":
      return {
        ...state,
        currentTheme: action.theme,
      }
    default:
      return state
  }
}
