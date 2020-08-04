import { RootState } from "src/state/types"
import { PaletteType, createMuiTheme, ThemeOptions } from "@material-ui/core"
import JSON5 from "json5"
import { generateThemeId } from "src/utils"
import editorReducer, {
  initialState as editorInitialState,
} from "./editor/reducers"

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

const wrapCode = code =>
  `import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOptions: ThemeOptions = ${code};`

const initialState: RootState = {
  themeId: defaultThemeId,
  themeInput: wrapCode(JSON5.stringify(defaultThemeOptions, null, 2)), // the current state of the code editor input
  // themeInput: defaultThemeInput,
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
  editor: {
    ...editorInitialState,
    themeInput: wrapCode(JSON5.stringify(defaultThemeOptions, null, 2)),
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "persist/REHYDRATE":
      if (action.payload != null) {
        return {
          ...state,
          themeObject: createMuiTheme(action.payload.themeOptions),
          themeInput: wrapCode(
            JSON5.stringify(action.payload.themeOptions, null, 2)
          ),
        }
      }
      return state
    case "UPDATE_THEME_INPUT":
      return {
        ...state,
        themeInput: action.input,
      }
    case "SAVE_THEME_INPUT":
      console.log("SAVE_THEME_INPUT", action)
      return {
        ...state,
        // themeInput: wrapCode(
        //   JSON5.stringify(action.updatedThemeOptions, null, 2)
        // ),
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
        themeInput: wrapCode(action.updatedThemeInput),
        editor: {
          ...state.editor,
          themeInput: wrapCode(action.updatedThemeInput),
        },
      }
    case "ADD_NEW_THEME":
      const newThemeId = generateThemeId(state)
      const newThemeOptions = action.themeOptions || defaultThemeOptions
      return {
        ...state,
        themeId: newThemeId,
        themeInput: wrapCode(JSON5.stringify(newThemeOptions, null, 2)),
        ...onThemeOptionsUpdate(
          state,
          newThemeOptions,
          newThemeId,
          action.name
        ),
        editor: {
          ...state.editor,
          themeInput: wrapCode(JSON5.stringify(newThemeOptions, null, 2)),
        },
      }
    case "LOAD_THEME":
      return {
        ...state,
        themeId: action.themeId,
        themeInput: wrapCode(
          JSON5.stringify(
            state.savedThemes[action.themeId].themeOptions,
            null,
            2
          )
        ),
        themeOptions: state.savedThemes[action.themeId].themeOptions,
        themeObject: createMuiTheme(
          state.savedThemes[action.themeId].themeOptions
        ),
        editor: {
          ...state.editor,
          themeInput: wrapCode(
            JSON5.stringify(
              state.savedThemes[action.themeId].themeOptions,
              null,
              2
            )
          ),
        },
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
      return { ...state, editor: editorReducer(state.editor, action) }
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
