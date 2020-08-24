import { RootState, PreviewSize } from "src/state/types"
import { createMuiTheme, ThemeOptions } from "@material-ui/core"
import { generateThemeId, isSetEq } from "src/utils"
import editorReducer, {
  initialState as editorInitialState,
} from "./editor/reducers"
import { loadFonts } from "./actions"
import deepmerge from "deepmerge"

import { defaultThemeOptions } from "src/siteTheme"
import { TypographyOptions } from "@material-ui/core/styles/createTypography"
import { BreakpointValues } from "@material-ui/core/styles/createBreakpoints"

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
      lastUpdated: new Date().toISOString(),
    },
  },
  loadedFonts: new Set(),
  activeTab: "preview",
  previewSize: false,
  tutorialStep: 0,
  tutorialOpen: false,
  componentNavOpen: false,
  themeConfigOpen: false,
  mobileWarningSeen: false,
}

const initialFonts = ["Droid Sans", "Droid Serif", "Open Sans", "Roboto"]

export default (state = initialState, action) => {
  // run editor reducers
  state = {
    ...state,
    editor: editorReducer(state.editor, action, state.savedThemes),
  }

  // on initial page load, load the initial fonts
  if (!state.loadedFonts.size) {
    state = {
      ...state,
      loadedFonts: loadFontsIfRequired(initialFonts, state.loadedFonts),
    }
  }

  switch (action.type) {
    case "persist/REHYDRATE":
      if (action.payload != null) {
        return {
          ...state,
          themeObject: createPreviewMuiTheme(
            action.payload.themeOptions,
            state.previewSize
          ),
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
        themeObject: createPreviewMuiTheme(
          action.themeOptions,
          state.previewSize
        ),
        savedThemes: {
          ...state.savedThemes,
          [state.themeId]: {
            ...state.savedThemes[state.themeId],
            themeOptions: action.themeOptions,
            fonts: getFontsFromThemeOptions(
              action.themeOptions,
              state.savedThemes[state.themeId]?.fonts,
              state.loadedFonts
            ),
            lastUpdated: new Date().toISOString(),
          },
        },
      }
    case "ADD_NEW_THEME":
      const newThemeId = generateThemeId(state)
      return {
        ...state,
        themeId: newThemeId,
        themeOptions: action.savedTheme.themeOptions,
        themeObject: createPreviewMuiTheme(
          action.savedTheme.themeOptions,
          state.previewSize
        ),
        savedThemes: {
          ...state.savedThemes,
          [newThemeId]: {
            id: newThemeId,
            ...action.savedTheme,
            lastUpdated: new Date().toISOString(),
          },
        },
        loadedFonts: loadFontsIfRequired(
          action.savedTheme.fonts,
          state.loadedFonts
        ),
      }
    case "LOAD_THEME":
      return {
        ...state,
        themeId: action.themeId,
        themeOptions: state.savedThemes[action.themeId].themeOptions,
        themeObject: createPreviewMuiTheme(
          state.savedThemes[action.themeId].themeOptions,
          state.previewSize
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
            lastUpdated: new Date().toISOString(),
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
    case "SET_PREVIEW_SIZE":
      return {
        ...state,
        previewSize: action.previewSize,
        themeObject: createPreviewMuiTheme(
          state.themeOptions,
          action.previewSize
        ),
      }
    case "INCREMENT_TUTORIAL_STEP":
      return {
        ...state,
        tutorialStep: state.tutorialStep + 1,
      }
    case "DECREMENT_TUTORIAL_STEP":
      return {
        ...state,
        tutorialStep: state.tutorialStep - 1,
      }
    case "RESET_TUTORIAL_STEP":
      return {
        ...state,
        tutorialStep: 0,
      }
    case "TOGGLE_TUTORIAL":
      return {
        ...state,
        tutorialOpen: !state.tutorialOpen,
      }
    case "TOGGLE_COMPONENT_NAV":
      return {
        ...state,
        componentNavOpen: !state.componentNavOpen,
      }
    case "TOGGLE_THEME_CONFIG":
      return {
        ...state,
        themeConfigOpen: !state.themeConfigOpen,
      }
    case "WARNING_SCREEN_SEEN":
      return {
        ...state,
        mobileWarningSeen: true,
      }
    case "RESET_SITE_DATA":
      return {
        ...initialState,
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

  const fontSet = new Set<string>()
  fontList.forEach(x => loadedFonts.has(x) && fontSet.add(x))

  // if new fontSet hasn't changed from the current theme fonts
  // return the original Set for redux performance
  if (previousFonts && isSetEq(new Set(previousFonts), fontSet)) {
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

const createPreviewMuiTheme = (
  themeOptions: ThemeOptions,
  previewSize: PreviewSize
) => {
  const spoofedBreakpoints: Record<string, BreakpointValues> = {
    xs: { xs: 0, sm: 10000, md: 10001, lg: 10002, xl: 10003 },
    sm: { xs: 0, sm: 1, md: 10001, lg: 10002, xl: 10003 },
    md: { xs: 0, sm: 1, md: 2, lg: 10002, xl: 10003 },
    lg: { xs: 0, sm: 1, md: 2, lg: 3, xl: 10003 },
    xl: { xs: 0, sm: 1, md: 2, lg: 3, xl: 4 },
  }

  if (!previewSize) return createMuiTheme(themeOptions)

  return createMuiTheme(
    deepmerge(
      { breakpoints: { values: spoofedBreakpoints[previewSize] } },
      themeOptions
    )
  )
}
