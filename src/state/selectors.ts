import { createSelector } from "reselect"
import { resolvePath } from "src/utils"
import { RootState } from "./types"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { ThemeOptions, Theme } from "@material-ui/core"

// return an object of the following shape:
//  {
//    modifiedByUser: whether the user has manually set that path,
//    value: value in themeOptions or themeObject
//  }
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

// hook to return an object of the following shape:
//  {
//    modifiedByUser: whether the user has manually set that path,
//    value: value in themeOptions or themeObject
//  }
export const useThemeValueInfo = (path: string) => {
  const selectThemeValue = useMemo(makeThemeValueInfoSelector, [])

  return useSelector((state: RootState) => selectThemeValue(state, path))
}

// return just the value from themeValueInfo
export const useThemeValue = (path: string) => useThemeValueInfo(path).value
