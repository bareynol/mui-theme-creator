import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { Box, Button, Card, ThemeOptions, Typography } from "@mui/material";
import moment from "moment";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadSavedTheme, removeSavedTheme } from "src/state/actions";
import { RootState } from "src/state/types";
import ThemeThumbnail from "../ThemeThumbnail";
import DeleteThemeButton from "./DeleteThemeButton";
import RenameThemeButton from "./RenameThemeButton";

interface Props {
  name: string
  themeId: string
  lastUpdated: string
  themeOptions: ThemeOptions
}
function SavedThemeItem({ name, themeId, lastUpdated, ...thumbnailProps }: Props) {

  const dispatch = useDispatch()

  const handleLoadTheme = useCallback(
    event => {
      event.stopPropagation()
      dispatch(loadSavedTheme(themeId))
    },
    [dispatch]
  )

  const handleRemoveTheme = useCallback(
    event => {
      event.stopPropagation()
      dispatch(removeSavedTheme(themeId))
    },
    [dispatch]
  )

  const loadedThemeId = useSelector((state: RootState) => state.themeId)

  return (
    <Box sx={{
      position: "relative",
      "&:hover > .MuiBox-root:last-child": {
        display: "flex",
      },
    }} onClick={handleLoadTheme}>
      <Card sx={themeId === loadedThemeId ? {
        backgroundColor: "#9e9e9e",
        color: "#000",
      } : null}>
        <Box sx={{ mx: 2 }}>
          <Typography variant="subtitle1" align="center">
            {name}
          </Typography>
          <ThemeThumbnail {...thumbnailProps} />
          <Typography
            variant="caption"
            component="p"
            align="center"
          >{`Last Updated: ${moment(lastUpdated).fromNow()}`}</Typography>
        </Box>
      </Card>
      <Box sx={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backdropFilter: "blur(2px) saturate(30%) brightness(40%)",
        alignItems: "center",
        justifyContent: "center",
        display: "none",
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "baseline",
        }}>
          <Button
            size="large"
            disabled={themeId === loadedThemeId}
            startIcon={<SwapHorizIcon />}
            onClick={handleLoadTheme}
          >
            Load
          </Button>
          <RenameThemeButton themeId={themeId} defaultName={name} />
          <DeleteThemeButton
            themeId={themeId}
            themeName={name}
            disabled={themeId === loadedThemeId}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default SavedThemeItem
