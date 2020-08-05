import { RootState } from "src/state/types"
import { createMuiTheme, ThemeOptions } from "@material-ui/core"
import { generateThemeId } from "src/utils"
import editorReducer, {
  initialState as editorInitialState,
} from "./editor/reducers"
import { defaultThemeOptions } from "src/siteTheme"

const defaultThemeId = generateThemeId({})

const initialState: RootState = {
  editor: editorInitialState,
  themeId: defaultThemeId,
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
  activeTab: "preview",
}

export default (state = initialState, action) => {
  state = {
    ...state,
    editor: editorReducer(state.editor, action, state.savedThemes),
  }
  switch (action.type) {
    case "persist/REHYDRATE":
      if (action.payload != null) {
        return {
          ...state,
          themeObject: createMuiTheme(action.payload.themeOptions),
        }
      }
      return state

    case "SAVE_THEME_INPUT":
    case "UPDATE_THEME":
      return {
        ...state,
        ...onThemeOptionsUpdate(state, action.themeOptions, state.themeId),
      }
    case "ADD_NEW_THEME":
      const newThemeId = generateThemeId(state)
      return {
        ...state,
        ...onThemeOptionsUpdate(
          state,
          action.themeOptions,
          newThemeId,
          action.name
        ),
      }
    case "LOAD_THEME":
      return {
        ...state,
        themeId: action.themeId,
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
    case "SET_TAB":
      return {
        ...state,
        activeTab: action.tab,
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
  themeId: themeId,
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
