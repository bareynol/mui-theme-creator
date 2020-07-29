import { RootState } from "src/state/types"
import { PaletteType, createMuiTheme, ThemeOptions } from "@material-ui/core"
import JSON5 from "json5"
import { generateThemeId } from "src/utils"

const defaultThemeOptions: ThemeOptions = {
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

const defaultThemeId = generateThemeId({})

const initialState: RootState = {
  themeId: defaultThemeId,
  themeInput: JSON5.stringify(defaultThemeOptions, null, 2), // the current state of the code editor input
  themeOptions: defaultThemeOptions, // the object loaded into createMuiTheme
  themeObject: createMuiTheme(defaultThemeOptions),
  savedThemes: {
    [defaultThemeId]: {
      id: defaultThemeId,
      name: "My Theme",
      themeOptions: defaultThemeOptions,
    },
  },
  loadedFonts: new Set(
    ["Roboto", "Open Sans", "Droid Sans", "Droid Serif"].sort()
  ),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_THEME_INPUT":
      return {
        ...state,
        themeInput: action.input,
      }
    case "SAVE_THEME_INPUT":
      return {
        ...state,
        ...onThemeOptionsUpdate(
          state,
          action.updatedThemeOptions,
          state.themeId
        ),
      }
    case "UPDATE_THEME":
      return {
        ...state,
        ...onThemeOptionsUpdate(
          state,
          action.updatedThemeOptions,
          state.themeId
        ),
        themeInput: action.updatedThemeInput,
      }
    case "ADD_NEW_THEME":
      const newThemeId = generateThemeId(state)
      const newThemeOptions = action.themeOptions || defaultThemeOptions
      return {
        ...state,
        themeId: newThemeId,
        themeInput: JSON5.stringify(newThemeOptions, null, 2),
        ...onThemeOptionsUpdate(
          state,
          newThemeOptions,
          newThemeId,
          action.name
        ),
      }
    case "LOAD_THEME":
      return {
        ...state,
        themeId: action.themeId,
        themeInput: JSON5.stringify(
          state.savedThemes[action.themeId].themeOptions,
          null,
          2
        ),
        themeOptions: state.savedThemes[action.themeId].themeOptions,
        themeObject: createMuiTheme(
          state.savedThemes[action.themeId].themeOptions
        ),
      }
    case "RENAME_THEME":
      return {
        ...state,
        savedThemes: {
          ...state.savedThemes,
          [action.themeId]: {
            ...state.savedThemes[action.themeId],
            name: action.name,
          },
        },
      }
    case "REMOVE_THEME":
      return {
        ...state,
        ...onRemoveSavedTheme(state, action.themeId),
      }
    case "FONTS_LOADED":
      const loadedFonts = new Set(
        [...state.loadedFonts, ...action.fonts].sort()
      )
      return {
        ...state,
        loadedFonts,
      }
    default:
      return state
  }
}

const onThemeOptionsUpdate = (
  state: RootState,
  themeOptions: ThemeOptions,
  themeId: string,
  name?: string
) => ({
  themeOptions: themeOptions,
  themeObject: createMuiTheme(themeOptions),
  savedThemes: {
    ...state.savedThemes,
    [themeId]: {
      ...state.savedThemes[themeId],
      id: themeId,
      name: name || state.savedThemes[themeId].name,
      themeOptions: themeOptions,
    },
  },
})

const onRemoveSavedTheme = (state: RootState, themeId: string) => {
  const newSavedThemes = { ...state.savedThemes }
  delete newSavedThemes[themeId]
  return { savedThemes: newSavedThemes }
}
