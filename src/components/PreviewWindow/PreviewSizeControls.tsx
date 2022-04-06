import React, { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/types"
import { setPreviewSize } from "src/state/actions"

import SmartphoneIcon from "@mui/icons-material/Smartphone"
import TabletIcon from "@mui/icons-material/TabletAndroid"
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows"
import { BottomNavigation, BottomNavigationAction, Theme, useTheme, useMediaQuery } from "@mui/material";

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sizeControlRoot: {
      height: "auto",
      backgroundColor: theme.palette.background.default,
      position: "absolute",
      bottom: 0,
      left: 0,
      zIndex: 1,
      flexDirection: "column",
    },
  })
)

export const previewSizeControlsId = "preview-size-controls"

const PreviewSizeControls = () => {
  const classes = useStyles()
  const previewSize = useSelector((state: RootState) => state.previewSize)
  const dispatch = useDispatch()
  const handleOnChange = useCallback(
    (_, value) => dispatch(setPreviewSize(value)),
    [dispatch]
  )

  const theme = useTheme()
  const screenIsMdDown = useMediaQuery(theme.breakpoints.down('lg'))

  // spoof a 'xs' screen size on the preview theme
  // when the user's screen is md breakpoint and below
  useEffect(
    function previewSizeFromScreen() {
      if (screenIsMdDown) {
        handleOnChange(null, "xs")
      }
    },
    [screenIsMdDown]
  )

  return screenIsMdDown ? null : (
    <BottomNavigation
      id={previewSizeControlsId}
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

export default PreviewSizeControls
