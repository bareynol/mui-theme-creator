import JSON5 from "json5"
import prettier from "prettier/standalone"
import parserBabel from "prettier/parser-babel"
import { createMuiTheme, ThemeOptions } from "@material-ui/core"

export const updateThemeInput = (input: string) => ({
  type: "UPDATE_THEME_INPUT",
  input,
})

export const saveThemeInput = () => (dispatch, getState) => {
  const { themeInput } = getState()
  // console.log("saveThemeInput", themeInput)
  try {
    const prettifiedString = prettifyCode(themeInput)
    dispatch(updateThemeInput(prettifiedString))
    const themeObject: ThemeOptions = parseThemeString(prettifiedString)
    // const validation = ThemeTest.check({theme: themeObject})
    // console.log("object validation", validation)
    const muiThemeObject = createMuiTheme(themeObject)
    // console.log("muiThemeObject", muiThemeObject)
    return dispatch({ type: "UPDATE_THEME", theme: themeObject })
  } catch (err) {
    console.log("error", err)
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
