import React, { useEffect, useState } from "react"
import { ThemeProvider, StyledEngineProvider, Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import Paper from "@mui/material/Paper"


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


interface ThemeWrapperProps {
  children: React.ReactNode | React.ReactNodeArray
}

/**
 *
 * Wraps example content in the dynamically controlled theme
 * set by the theme editor sidebar
 */
const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const themeObject = useSelector((state: RootState) => state.themeObject)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themeObject}>
        <ThemeContainer>{children}</ThemeContainer>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

const useStyles = makeStyles(theme => ({
  themeContainer: {
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: "100%",
  },
}))

/**
 *
 * CssBa
 *
 */
const ThemeContainer = ({ children }: ThemeWrapperProps) => {
  const classes = useStyles()
  return (
    <Paper className={classes.themeContainer} elevation={0} square>
      {children}
    </Paper>
  )
}

export default ThemeWrapper
