import JSON5 from "json5"
import prettier from "prettier/standalone"
import parserBabel from "prettier/parser-babel"
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme"
import { setByPath, removeByPath, resolvePath } from "src/utils"
import { defaultTheme } from "src/siteTheme"
import WebFont from "webfontloader"

// update the input string with events from the code editor
export const updateThemeInput = (input: string) => ({
  type: "UPDATE_THEME_INPUT",
  input,
})

// Validate the code editor input, convert it to an object and replace themeOptions
export const saveThemeInput = () => (dispatch, getState) => {
  const { themeInput } = getState()
  try {
    // first automatically prettify the code for their benefit
    // save the updated code if prettifying it doesn't error out
    const prettifiedString = prettifyCode(themeInput)
    dispatch(updateThemeInput(prettifiedString))

    // parse the string into an object
    const themeOptions: ThemeOptions = parseThemeString(prettifiedString)

    // validate the object
    // const validation = ThemeTest.check({theme: themeOptions})

    // const themeObject: Theme = createMuiTheme(themeOptions)
    // console.log("muiThemeObject", muiThemeObject)

    // save the new object as the current themeOptions
    return dispatch({
      type: "SAVE_THEME_INPUT",
      updatedThemeOptions: themeOptions,
    })
  } catch (err) {
    console.log("error", err)
  }
}

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
    updatedThemeOptions,
    updatedThemeInput: JSON5.stringify(updatedThemeOptions, null, 2),
  })
}

export const setThemeOption = (path, value) => (dispatch, getState) => {
  console.log("setThemeOption", path, value)
  const updatedThemeOptions = setByPath(getState().themeOptions, path, value)
  return dispatch({
    type: "UPDATE_THEME",
    updatedThemeOptions,
    updatedThemeInput: JSON5.stringify(updatedThemeOptions, null, 2),
  })
}

/**
 * Add a new theme and switch to it
 */
export const addNewSavedTheme = (
  name: string,
  themeOptions?: ThemeOptions | null
) => ({
  type: "ADD_NEW_THEME",
  name,
  themeOptions,
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
async function loadFonts(fonts: string[]) {
  return new Promise<boolean>((resolve, reject) => {
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

const prettifyCode = (rawInput: string) => {
  try {
    return prettier.format(rawInput, {
      parser: "json5",
      plugins: [parserBabel],
    })
  } catch (err) {
    console.log("Error while prettifying code", err)
    throw err
  }
}

const parseThemeString = (input: string) => {
  try {
    return JSON5.parse(input)
  } catch (err) {
    console.log("Error while parsing theme string", err)
    throw err
  }
}
