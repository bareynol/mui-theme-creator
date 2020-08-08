import { RootState } from "src/state/types"
import { createMuiTheme, ThemeOptions } from "@material-ui/core"
import { generateThemeId, isSetEq } from "src/utils"
import editorReducer, {
  initialState as editorInitialState,
} from "./editor/reducers"
import { loadFonts } from "./actions"

import { defaultThemeOptions } from "src/siteTheme"
import { TypographyOptions } from "@material-ui/core/styles/createTypography"

const defaultThemeId = generateThemeId({})

const initialState: RootState = {
  editor: editorInitialState,
  themeId: defaultThemeId,
  themeOptions: defaultThemeOptions, // the object loaded into createMuiTheme
  themeObject: createMuiTheme(defaultThemeOptions),
  savedThemes: {
    [defaultThemeId]: {
      id: defaultThemeId,
      name: "My Theme",
      themeOptions: defaultThemeOptions,
      fonts: ["Roboto"],
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
      console.log(action)
      if (action.payload != null) {
        return {
          ...state,
          themeObject: createMuiTheme(action.payload.themeOptions),
          loadedFonts: loadFontsIfRequired(
            action.payload.savedThemes[action.payload.themeId].fonts,
            state.loadedFonts
          ),
        }
      }
      return state

    case "SAVE_THEME_INPUT":
    case "UPDATE_THEME":
      return {
        ...state,
        themeOptions: action.themeOptions,
        themeObject: createMuiTheme(action.themeOptions),
        savedThemes: {
          ...state.savedThemes,
          [action.themeId]: {
            ...state.savedThemes[action.themeId],
            themeOptions: action.themeOptions,
            fonts: getFontsFromThemeOptions(
              action.themeOptions,
              state.savedThemes[action.themeId]?.fonts,
              state.loadedFonts
            ),
          },
        },
      }
    case "ADD_NEW_THEME":
      const newThemeId = generateThemeId(state)
      return {
        ...state,
        themeId: newThemeId,
        themeOptions: action.savedTheme.themeOptions,
        themeObject: createMuiTheme(action.savedTheme.themeOptions),
        savedThemes: {
          ...state.savedThemes,
          [newThemeId]: {
            id: newThemeId,
            ...action.savedTheme,
          },
        },
        fontLoaded: loadFontsIfRequired(
          action.savedTheme.fonts,
          state.loadedFonts
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
        loadedFonts: loadFontsIfRequired(
          state.savedThemes[action.themeId].fonts,
          state.loadedFonts
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

/**
 * Parse a `ThemeOptions` object to get a list of google fonts included
 * Note that the Material-UI default Theme uses Roboto as the base Font
 * @param themeOptions - the `ThemeOptions` object to parse
 * @param previousFonts - previous state of `savedThemes[id].fonts`
 * @param loadedFonts - `RootState.loadedFonts`
 *
 * @returns string[] - the google fonts included in `themeOptions`
 */
const getFontsFromThemeOptions = (
  themeOptions: ThemeOptions,
  previousFonts: string[] | undefined,
  loadedFonts: Set<string>
) => {
  const typography = themeOptions.typography as TypographyOptions | undefined

  // get all defined fonts from the themeOptions
  const fontList: string[] = [
    typography?.fontFamily || "Roboto",
    typography?.h1?.fontFamily,
    typography?.h2?.fontFamily,
    typography?.h3?.fontFamily,
    typography?.h4?.fontFamily,
    typography?.h5?.fontFamily,
    typography?.h6?.fontFamily,
    typography?.subtitle1?.fontFamily,
    typography?.subtitle2?.fontFamily,
    typography?.body1?.fontFamily,
    typography?.body2?.fontFamily,
    typography?.button?.fontFamily,
    typography?.caption?.fontFamily,
    typography?.overline?.fontFamily,
  ]
    .flatMap(x => (x == null ? [] : x?.replace(/"/g, "").split(",")))
    // .filter((x): x is string => !!x) // remove nulls and undefined items
    // .map(x => ) // strip out quotes and split by comma
    // .flat() // flatten the array if any font families had multiple specified
    .map(x => x.trim()) // trim off any white space

  console.log("fonts specified", fontList)
  const fontSet = new Set<string>()
  fontList.forEach(x => loadedFonts.has(x) && fontSet.add(x))
  console.log("fontSet of fonts specified", fontSet)
  console.log("existing theme font set:", previousFonts)

  // if new fontSet hasn't changed from the current theme fonts
  // return the original Set for redux performance
  if (previousFonts && isSetEq(new Set(previousFonts), fontSet)) {
    console.log("fontSet unchanged, skipping update")
    return previousFonts
  }

  return [...fontSet]
}

const onRemoveSavedTheme = (state: RootState, themeId: string) => {
  const newSavedThemes = { ...state.savedThemes }
  delete newSavedThemes[themeId]
  return { savedThemes: newSavedThemes }
}

function loadFontsIfRequired(fonts: string[], loadedFonts: Set<string>) {
  const fontsToLoad = fonts.filter(x => !loadedFonts.has(x))

  if (!fontsToLoad.length) return loadedFonts

  loadFonts(fontsToLoad)
  return new Set([...loadedFonts, ...fontsToLoad].sort())
}
