import { EditorState } from "./types"
import { defaultThemeOptions } from "src/siteTheme"
import JSON5 from "json5"
import { ThemeOptions } from "@material-ui/core"
import { RootState } from "../types"

const stringify = (themeOptions: ThemeOptions) => {
  return `import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOptions: ThemeOptions = ${JSON5.stringify(
    themeOptions,
    null,
    2
  )};`
}

export const initialState: EditorState = {
  themeInput: stringify(defaultThemeOptions),
  initialVersion: 0,
  currentVersion: 0,
  lastVersion: 0,
  savedVersion: 0,
  canRedo: false,
  canUndo: false,
  errors: [],
  formatOnSave: true,
  outputTypescript: true,
}

export default (
  state = initialState,
  action,
  savedThemes: RootState["savedThemes"]
) => {
  switch (action.type) {
    case "persist/REHYDRATE":
      if (action.payload != null) {
        return {
          ...state,
          themeInput: stringify(action.payload.themeOptions),
        }
      }
    case "UPDATE_EDITOR_STATE":
      return {
        ...state,
        ...action.editorState,
      }
    case "UPDATE_THEME":
      return {
        ...state,
        themeInput: stringify(action.themeOptions),
      }
    case "ADD_NEW_THEME":
      return {
        ...state,
        themeInput: stringify(action.savedTheme.themeOptions),
      }
    case "LOAD_THEME":
      return {
        ...state,
        themeInput: stringify(savedThemes[action.themeId].themeOptions),
      }
    default:
      return state
  }
}
