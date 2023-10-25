import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows"
import SmartphoneIcon from "@mui/icons-material/Smartphone"
import TabletIcon from "@mui/icons-material/TabletAndroid"
import { BottomNavigation, BottomNavigationAction, useMediaQuery, useTheme } from "@mui/material"
import React, { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPreviewSize } from "src/state/actions"
import { RootState } from "src/state/types"

export const previewSizeControlsId = "preview-size-controls"

const PreviewSizeControls = () => {
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
      sx={{
        height: "auto",
        bgcolor: 'background.default',
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 1,
        flexDirection: "column",
      }}
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
