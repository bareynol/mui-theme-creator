import React from "react"
import { Grid, Theme } from "@mui/material";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import SavedThemeItem from "./SavedThemeItem/SavedThemeItem"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    savedThemeContainer: {
      margin: theme.spacing(2),
      marginTop: 0,
    },
  })
)

export const savedThemeListId = "saved-theme-list"

function SavedThemeList() {
  const classes = useStyles()
  const savedThemes = useSelector((state: RootState) => state.savedThemes)
  const sortedThemes = Object.values(savedThemes).sort((a, b) =>
    a.lastUpdated > b.lastUpdated ? -1 : a.lastUpdated < b.lastUpdated ? 1 : 0
  )

  return (
    <Grid id={savedThemeListId} container wrap="wrap" justifyContent="center">
      {sortedThemes.map(t => (
        <Grid
          item
          key={`${t.name}-${t.id}`}
          className={classes.savedThemeContainer}
        >
          <SavedThemeItem
            name={t.name}
            themeOptions={t.themeOptions}
            themeId={t.id}
            lastUpdated={t.lastUpdated}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default SavedThemeList
