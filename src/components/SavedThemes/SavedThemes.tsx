import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/state/types";
import AddThemeButton from "./AddThemeButton";
import DefaultThemesComponent from "./DefaultThemesComponent";
import SavedThemeItem from "./SavedThemeItem/SavedThemeItem";
import SavedThemeList from "./SavedThemeList";

function SavedThemes() {
  return (
    <Box sx={{ pt: 2, pl: 2 }}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h4">Current Theme</Typography>
          <CurrentTheme />
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            mb: 2,
            "& > *": {
              mt: 1,
            },
          }}>
            <AddThemeButton />
            <DefaultThemesComponent />
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem sx={{
          mx: 2,
          display: {
            xs: 'none',
            lg: 'block',
          }
        }} />

        <Grid item sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>
            Saved Themes
          </Typography>
          <SavedThemeList />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SavedThemes

export const currentThemeThumbnailId = "current-theme-thumbnail"

function CurrentTheme() {
  const themeOptions = useSelector((state: RootState) => state.themeOptions)
  const themeId = useSelector((state: RootState) => state.themeId)
  const themeName = useSelector(
    (state: RootState) => state.savedThemes[state.themeId].name
  )
  const lastUpdated = useSelector(
    (state: RootState) => state.savedThemes[state.themeId].lastUpdated
  )
  return (
    <div id={currentThemeThumbnailId}>
      <SavedThemeItem
        name={themeName}
        themeOptions={themeOptions}
        themeId={themeId}
        lastUpdated={lastUpdated}
        large
      />
    </div>
  )
}
