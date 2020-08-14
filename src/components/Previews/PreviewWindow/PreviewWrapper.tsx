import React, { useCallback } from "react"
import {
  makeStyles,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Theme,
  createStyles,
} from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/types"
import ThemeWrapper from "src/components/ThemeWrapper"
import SmartphoneIcon from "@material-ui/icons/Smartphone"
import TabletIcon from "@material-ui/icons/TabletAndroid"
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows"
import { setPreviewSize } from "src/state/actions"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "calc(100vh - 64px - 48px)",
      paddingTop: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
      position: "relative",
      backgroundColor: "#212121",
    },
    letterBox: {
      backgroundColor: "#212121",
      height: "calc(100vh - 64px - 48px - 16px)",
    },
    infoAlert: {
      width: `calc(100% - 32px)`,
      maxWidth: 1000,
      margin: "auto",
      marginBottom: theme.spacing(2),
    },

    sizeControlRoot: {
      height: "auto",
      backgroundColor: theme.palette.background.default,
      position: "absolute",
      bottom: 0,
      left: 0,
      flexDirection: "column",
    },
  })
)

const useStylesInTheme = makeStyles((theme: Theme) =>
  createStyles({
    previewArea: {
      backgroundColor: theme.palette.background.default,
      width: `calc(100% - 32px)`,
      maxWidth: 1000,
      height: "calc(100% - 16px)",
      overflowY: "auto",
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

const PreviewWrapper = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.container}>
        {/* <Alert severity="info" className={classes.infoAlert}>
          Modify the theme on the right side of the screen to start making
          changes
        </Alert> */}
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

const PreviewBackground = ({ children }) => {
  const classes = useStylesInTheme()
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

const PreviewSizeControls = () => {
  const classes = useStyles()
  const previewSize = useSelector((state: RootState) => state.previewSize)
  const dispatch = useDispatch()
  const handleOnChange = useCallback(
    (_, value) => dispatch(setPreviewSize(value)),
    [dispatch]
  )
  return (
    <BottomNavigation
      value={previewSize}
      onChange={handleOnChange}
      className={classes.sizeControlRoot}
      showLabels
    >
      <BottomNavigationAction
        label="Phone"
        value="xs"
        icon={<SmartphoneIcon />}
      />
      <BottomNavigationAction label="Tablet" value="sm" icon={<TabletIcon />} />
      <BottomNavigationAction
        label="Desktop"
        value={false}
        icon={<DesktopWindowsIcon />}
      />
    </BottomNavigation>
  )
}
