import { createSelector } from "reselect"
import { resolvePath } from "src/utils"
import { RootState } from "./types"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { ThemeOptions, Theme } from "@material-ui/core"

/**
 * Return the value of in the theme at the specified path,
 * and whether that value is set by the user or is default
 * @param path
 * @param themeOptions
 * @param themeObject
 */
const getThemeValueInfo = (
  path: string,
  themeOptions: ThemeOptions,
  themeObject: Theme
) => {
  const valFromSaved: any = resolvePath(themeOptions, path)
  return {
    modifiedByUser: valFromSaved !== undefined,
    value: resolvePath(themeObject, path),
  }
}

const makeThemeValueInfoSelector = () =>
  createSelector(
    (_, path: string) => path,
    (state: RootState) => state.themeOptions,
    (state: RootState) => state.themeObject,
    getThemeValueInfo
  )

/**
 * Return the value of in the theme at the specified path,
 * and whether that value is set by the user or is default
 * @param path
 */
export const useThemeValueInfo = (path: string) => {
  const selectThemeValue = useMemo(makeThemeValueInfoSelector, [])

  return useSelector((state: RootState) => selectThemeValue(state, path))
}

/**
 * Return the value of a generated theme at the specified path
 * @param path
 */
export const useThemeValue = (path: string) => useThemeValueInfo(path).value

/**
 * Return whether the code editor has unsaved changes
 */
export const useCanSave = () =>
  useSelector(
    (state: RootState) =>
      state.editor.savedVersion !== state.editor.currentVersion
  )
