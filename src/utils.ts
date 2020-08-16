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
export const getByPath = (
  object: object | null,
  path: string,
  defaultValue?: any
) =>
  path.split(".").reduce((o: any, p) => (o ? o[p] : defaultValue), object) ||
  defaultValue

export const removeByPath = (object, path) => {
  const prunedObject = dotProp.delete(object, path)
  const pathArray = path.split(".")
  if (pathArray.length > 1) {
    const parentPath = pathArray.slice(0, pathArray.length - 1).join(".")
    const parentObject = getByPath(prunedObject, parentPath)
    if (
      parentObject &&
      typeof parentObject === "object" &&
      Object.keys(parentObject).length === 0
    ) {
      return removeByPath(prunedObject, parentPath)
    }
  }

  return prunedObject
}

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

/**
 * Shallow comparison of sets for equality
 * @param a Set to compare
 * @param b Set to compare
 */
export function isSetEq(a: Set<any>, b: Set<any>) {
  if (a.size !== b.size) return false
  for (var x of a) if (!b.has(x)) return false

  return true
}

/**
 * Logs to console if in development mode
 * @param args parameters passed to `console.log`
 */
export function verbose(...args: any[]) {
  if (process.env.NODE_ENV === "development") {
    console.log(...args)
  }
}
