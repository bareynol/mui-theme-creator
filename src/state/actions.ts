import JSON5 from "json5"
import prettier from "prettier/standalone"
import parserBabel from "prettier/parser-babel"
import { createMuiTheme, ThemeOptions } from "@material-ui/core"
import { setByPath, removeByPath } from "src/utils"

// update the input string with events from the code editor
export const updateThemeInput = (input: string) => ({
  type: "UPDATE_THEME_INPUT",
  input,
})

// Validate the code editor input, convert it to an object and replace themeObject
export const saveThemeInput = () => (dispatch, getState) => {
  const { themeInput } = getState()
  try {
    // first automatically prettify the code for their benefit
    // save the updated code if prettifying it doesn't error out
    const prettifiedString = prettifyCode(themeInput)
    dispatch(updateThemeInput(prettifiedString))

    // parse the string into an object
    const themeObject: ThemeOptions = parseThemeString(prettifiedString)

    // validate the object
    // const validation = ThemeTest.check({theme: themeObject})

    // const muiThemeObject = createMuiTheme(themeObject)
    // console.log("muiThemeObject", muiThemeObject)

    // save the new object as the current themeObject
    return dispatch({
      type: "SAVE_THEME_INPUT",
      updatedThemeObject: themeObject,
    })
  } catch (err) {
    console.log("error", err)
  }
}

export const removeSavedThemeVariable = path => (dispatch, getState) => {
  const updatedThemeObject = removeByPath(getState().themeObject, path)
  return dispatch({
    type: "UPDATE_THEME",
    updatedThemeObject,
    updatedThemeInput: JSON5.stringify(updatedThemeObject, null, 2),
  })
}

export const setSavedThemeVariable = (path, value) => (dispatch, getState) => {
  console.log("setSavedThemeVariable", path, value)
  const updatedThemeObject = setByPath(getState().themeObject, path, value)
  return dispatch({
    type: "UPDATE_THEME",
    updatedThemeObject,
    updatedThemeInput: JSON5.stringify(updatedThemeObject, null, 2),
  })
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
