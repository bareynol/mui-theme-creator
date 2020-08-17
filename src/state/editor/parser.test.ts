import * as parser from "./parser"

const testCases = {
  valid: {
    input: `"use strict";
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.themeOptions = {
				palette: {
					type: 'light',
					primary: {
						main: '#3f51b5',
					},
					secondary: {
						main: '#f50057',
					},
				},
			};`,
    parseEditorOutput: {
      palette: {
        type: "light",
        primary: {
          main: "#3f51b5",
        },
        secondary: {
          main: "#f50057",
        },
      },
    },
  },
  invalidMath: {
    input: `"use strict";
			Object.defineProperty(exports, "__esModule", { value: true });
			exports.themeOptions = {
				palette: {
					type: 'light',
					primary: {
						main: '#3f51b5',
					},
					secondary: {
						main: '#f50057',
					},
				},
				overrides: {
					MuiIconButton: {
						root: {
							width: 64 * 2,
						},
					},
				},
			};`,
  },
}

describe("parseEditorOutput tests", () => {
  test("valid input returns proper object", () => {
    expect(parser.parseEditorOutput(testCases.valid.input)).toEqual(
      testCases.valid.parseEditorOutput
    )
  })

  test("Invalid math operators throws error", () => {
    expect(() => parser.parseEditorOutput(testCases.invalidMath.input)).toThrow(
      SyntaxError
    )
  })
})
