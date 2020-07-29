import dotProp from "dot-prop-immutable"
import { RootState } from "./state/types"
/**
 * Get an nested value from an object by a string path
 * e.g. resolvePath({a: {b: {c : 5}}}, 'a.b.c') would return 5
 *
 * @param {object} object - an object with nested key value pairs to access
 * @param {string} path   - a key path to access nested values
 * @param {*} defaultValue - optional default value if path not found
 */
export const resolvePath = (
  object: object | null,
  path: string,
  defaultValue?: any
) => path.split(".").reduce((o: any, p) => (o ? o[p] : defaultValue), object)

export const removeByPath = (object, path) => dotProp.delete(object, path)

export const setByPath = (object, path, value) =>
  dotProp.set(object, path, value)

/**
 * Generate an id for a saved theme, ensuring that it does not collide with
 * one already in the store
 */
export const generateThemeId = (savedThemes: RootState["savedThemes"]) => {
  // generate a long string of characters
  const genString = () =>
    ["", "", ""].reduce(
      (str, _) => (str += Math.random().toString(36).substring(2, 15)),
      ""
    )

  let id
  do {
    id = genString()
  } while (savedThemes.hasOwnProperty(id))

  return id
}
