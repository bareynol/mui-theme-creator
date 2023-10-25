import Paper from "@mui/material/Paper";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/state/types";

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

/**
 *
 * CssBa
 *
 */
const ThemeContainer = ({ children }: ThemeWrapperProps) => {
  return (
    <Paper sx={{
      bgcolor: 'background.default',
      width: "100%",
      height: "100%",
    }} elevation={0} square>
      {children}
    </Paper>
  )
}

export default ThemeWrapper
