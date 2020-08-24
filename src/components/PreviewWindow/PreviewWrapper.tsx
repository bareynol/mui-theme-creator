import React from "react"
import { makeStyles, Paper, Theme, createStyles } from "@material-ui/core"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import ThemeWrapper from "src/components/ThemeWrapper"
import PreviewSizeControls from "./PreviewSizeControls"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    previewWrapper: {
      height: "100%",
      position: "relative",
    },
    letterBox: {
      backgroundColor: "#212121",
      padding: theme.spacing(2),
      height: "100%",
    },
  })
)

/**
 * Wraps children in ThemeWrapper and creates a letterbox around the component
 */
const PreviewWrapper = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.previewWrapper}>
        <PreviewSizeControls />
        <ThemeWrapper>
          <div className={classes.letterBox}>
            <PreviewBackground>{children}</PreviewBackground>
          </div>
        </ThemeWrapper>
      </div>
    </>
  )
}

export default PreviewWrapper

const useBackgroundStyles = makeStyles((theme: Theme) =>
  createStyles({
    previewArea: {
      backgroundColor: theme.palette.background.default,
      maxWidth: 1000,
      height: "100%",
      overflowY: "scroll",
      margin: "auto",
      position: "relative", // for FAB positioning
      "&.xs": {
        maxWidth: 375,
      },
      "&.sm": {
        maxWidth: 650,
      },
      "&.md": {
        maxWidth: 1000,
      },
    },
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
  })
)

/**
 * Creates a Paper component with a backgroundColor of `palette.background.default`
 * adds 'rtl' as a className if required by the theme to enable RTL styles.
 */
const PreviewBackground = ({ children }) => {
  const classes = useBackgroundStyles()

  // if the theme has `direction` set to 'rtl', then add 'rtl' as a classname
  // to the Paper component, so that RTL styles will be enabled
  const directionIsRTL = useSelector(
    (state: RootState) => state.themeOptions.direction === "rtl"
  )
  const previewSize = useSelector((state: RootState) => state.previewSize)
  return (
    <Paper
      elevation={8}
      square
      className={`${classes.previewArea} ${previewSize || ""}`}
      dir={directionIsRTL ? "rtl" : ""}
    >
      {children}
    </Paper>
  )
}
