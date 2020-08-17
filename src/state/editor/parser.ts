import JSON5 from "json5"
import { verbose } from "src/utils"

/**
 * When the Code Editor is saved, the editor checks for errors and transpiles the code.
 * `parseThemeString` takes the output text of the emitted files from 
 * `monaco.languages.typescript.EmitOutput`, formats in, and
 * uses JSON5 to parse the string into an object.
 * 
 * 
 * The `code` parameter should look similar to the following
 * ```js
 * `"use strict";
 *  Object.defineProperty(exports, "__esModule", { value: true });
 *  exports.themeOptions = {
 *    palette: {
 *      type: 'light',
 *      primary: {
 *        main: '#3f51b5',
 *      },
 *      secondary: {
 *        main: '#f50057',
 *      },
 *    },
  * };`
```
 * @param code 
 */
export function parseEditorOutput(code: string) {
  const trimmedCode = trimCode(code)
  try {
    return JSON5.parse(trimmedCode)
  } catch (err) {
    verbose("Error while parsing theme string", err.message)
    throw err
  }
}

/**
 * Trim the unimportant lines of code from the string not relevant to the
 * theme options
 *
 * Example:
 * ```js
 * `"use strict";
 *  Object.defineProperty(exports, "__esModule", { value: true });
 *  exports.themeOptions = {
 *    palette: ...,
 *    ...
 *  };`
 * ```
 *  Becomes ->
 *
 * ```js
 * `{
 *    palette: ...,
 *    ...
 *  }`
 * ```
 * @param code
 */
export function trimCode(code: string) {
  let codeLines = code.split("\n")

  // remove top two lines
  codeLines = codeLines.slice(2)

  // replace exports.themeOptions with open bracket for object
  codeLines[0] = "{" // editor disables editing this line

  const closingLineNumber = getClosingLine(codeLines)

  const trimmedCodeLines = codeLines.splice(0, closingLineNumber)

  trimmedCodeLines[closingLineNumber - 1] = "}" // enforce that the last line is a closing bracket

  return trimmedCodeLines.join("\n") // return trimmed lines rejoined as a string
}

/**
 * Get the line number where the bracket closing the object is
 * @param trimmedCode
 */
export function getClosingLine(codeLines: string[]) {
  let numUnclosedBrackets = 1 // opening bracket
  let currentLine = 1 // skip first line

  // iterate on all lines, stop when numUnclosed brackets reaches 0
  while (numUnclosedBrackets > 0 && currentLine < codeLines.length) {
    // add or subtract to numUnclosedBrackets for each instance of "{" and "}" on this line
    for (let i = 0; i < codeLines[currentLine].length; i++) {
      const char = codeLines[currentLine][i]
      if (char === "{") {
        numUnclosedBrackets++
      } else if (char === "}") {
        numUnclosedBrackets--
      }
    }
    currentLine++
  }
  return currentLine
}
