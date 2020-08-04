import { EditorState } from "./types"

const wrapCode = (code: string) =>
  `import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const themeOptions: ThemeOptions = ${code};`

export const initialState: EditorState = {
  // themeInput: wrapCode(JSON5.stringify(defaultThemeOptions, null, 2)),
  themeInput: "",
  initialVersion: 0,
  currentVersion: 0,
  lastVersion: 0,
  savedVersion: 0,
  canRedo: false,
  canUndo: false,
  canSave: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_EDITOR_STATE":
      return {
        ...state,
        ...action.editorState,
      }
    default:
      return state
  }
}
