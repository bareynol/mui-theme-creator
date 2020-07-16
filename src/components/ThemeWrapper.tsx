import React, { useEffect, useState } from "react"
import { createMuiTheme, ThemeProvider, Theme } from "@material-ui/core/styles"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"

const defaultTheme = createMuiTheme()
const darkTheme = createMuiTheme({ palette: { type: "dark" } })

interface ThemeWrapperProps {
  children: React.ReactNode | React.ReactNodeArray
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const currentThemeInStore = useSelector(
    (state: RootState) => state.currentTheme
  )
  const [currentTheme, setCurrentTheme] = useState<Theme>(
    createMuiTheme(currentThemeInStore)
  )

  useEffect(() => {
    setCurrentTheme(createMuiTheme(currentThemeInStore))
  }, [currentThemeInStore])

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
}

export default ThemeWrapper
