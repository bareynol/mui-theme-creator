import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme"
import { setByPath, removeByPath, resolvePath } from "src/utils"
import { defaultTheme, defaultThemeOptions } from "src/siteTheme"
import { NewSavedTheme, PreviewSize } from "./types"

/**
 * Remove a key/value in the theme options object by a given path.
 * Paths ending in "main" eg. "palette.primary.main" must be declared.
 * if the key path ends in "main"
 *  replace it with the default Theme value at that path
 * if the key is removed, and the containing object no longer
 * has any meaningful key/values, remove it as well
 * e.g. removing palette.background.default creates {palette: {background: {}}}
 * and should be removed to tidy the theme code
 * @param path - the path to remove from the themeOptions
 */
export const removeThemeOption = path => (dispatch, getState) => {
  let updatedThemeOptions: ThemeOptions

  // path with ".<name>" removed
  const parentPath = path.substring(0, path.lastIndexOf("."))

  // paths ending in "main" must be declared
  // replace with the value from the default Theme object
  if (path.endsWith("main")) {
    const defaultValueForPath = resolvePath(defaultTheme, path)
    updatedThemeOptions = setByPath(
      getState().themeOptions,
      path,
      defaultValueForPath
    )
  } else {
    // remove the key from the themeOptions (immutably)
    updatedThemeOptions = removeByPath(getState().themeOptions, path)

    // if the parent "directory" is empty, remove it as well
    if (
      Object.keys(resolvePath(updatedThemeOptions, parentPath)).length === 0
    ) {
      updatedThemeOptions = removeByPath(updatedThemeOptions, parentPath)
    }
  }

  return dispatch({
    type: "UPDATE_THEME",
    themeOptions: updatedThemeOptions,
  })
}

export const removeThemeOptions = (configs: { path: string; value: any }[]) => (
  dispatch,
  getState
) => {
  let updatedThemeOptions = getState().themeOptions
  configs.forEach(
    ({ path, value }) =>
      (updatedThemeOptions = removeByPath(updatedThemeOptions, path))
  )
  return dispatch({
    type: "UPDATE_THEME",
    themeOptions: updatedThemeOptions,
  })
}

export const setThemeOption = (path, value) => (dispatch, getState) => {
  const updatedThemeOptions = setByPath(getState().themeOptions, path, value)
  return dispatch({
    type: "UPDATE_THEME",
    themeOptions: updatedThemeOptions,
  })
}

export const setThemeOptions = (configs: { path: string; value: any }[]) => (
  dispatch,
  getState
) => {
  let updatedThemeOptions = getState().themeOptions
  configs.forEach(
    ({ path, value }) =>
      (updatedThemeOptions = setByPath(updatedThemeOptions, path, value))
  )
  return dispatch({
    type: "UPDATE_THEME",
    themeOptions: updatedThemeOptions,
  })
}

/**
 * Add a new theme and switch to it
 */
export const addNewSavedTheme = (name: string) => ({
  type: "ADD_NEW_THEME",
  savedTheme: {
    name,
    themeOptions: defaultThemeOptions,
    fonts: ["Roboto"],
  },
})

export const addNewDefaultTheme = (newSavedTheme: NewSavedTheme) => ({
  type: "ADD_NEW_THEME",
  savedTheme: newSavedTheme,
})

/**
 * Switch to a new theme by ID
 */
export const loadSavedTheme = (themeId: string) => ({
  type: "LOAD_THEME",
  themeId,
})

export const removeSavedTheme = (themeId: string) => (dispatch, getState) => {
  // don't remove the theme unless it is not the current theme
  if (getState().themeId === themeId) {
    return false
  }
  return dispatch({ type: "REMOVE_THEME", themeId })
}

export const renameSavedTheme = (themeId: string, name: string) => ({
  type: "RENAME_THEME",
  themeId,
  name,
})

/**
 * loads a set of passed fonts and resolves a promise
 * when the fonts load, or fail to load
 * @param fonts
 */
export async function loadFonts(fonts: string[]) {
  return new Promise<boolean>((resolve, reject) => {
    // require inline to support server side rendering
    const WebFont = require("webfontloader")
    WebFont.load({
      google: {
        families: fonts,
      },
      active: () => {
        console.log("webfonts loaded")
        resolve(true)
      },
      inactive: () => {
        console.log("webfonts could not load")
        resolve(false)
      },
    })
  })
}

/**
 * Load fonts using webfontloader, then add those fonts to the redux store
 */
export const addFonts = (fonts: string[]) => async (dispatch, getState) => {
  const fontsLoaded: boolean = await loadFonts(fonts)
  if (fontsLoaded) {
    return dispatch({
      type: "FONTS_LOADED",
      fonts,
    })
  } else {
    return false
  }
}

/**
 * Set the active tab for the editor page
 */
export const setActiveTab = (tab: string) => ({ type: "SET_TAB", tab })

/**
 * Set the active tab for the editor page
 */
export const setPreviewSize = (previewSize: PreviewSize) => ({
  type: "SET_PREVIEW_SIZE",
  previewSize,
})
