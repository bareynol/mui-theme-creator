import React from "react"
import { Typography, Theme, Grid, Divider } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import DefaultThemes from "./DefaultThemes"
import SavedThemeItem from "./SavedThemeItem/SavedThemeItem"
import SavedThemeList from "./SavedThemeList"
import AddThemeButton from "./AddThemeButton"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    savedThemesRoot: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
    savedThemes: {
      flex: 1,
    },
    divider: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        display: "none",
      },
    },
    themeActions: {
      display: "flex",
      flexDirection: "column",
      marginBottom: theme.spacing(2),
      "& > *": {
        marginTop: theme.spacing(),
      },
    },
  })
)

function SavedThemes() {
  const classes = useStyles()
  return (
    <div className={classes.savedThemesRoot}>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h4">Current Theme</Typography>
          <CurrentTheme />
          <div className={classes.themeActions}>
            <AddThemeButton />
            <DefaultThemes />
          </div>
        </Grid>
        <Divider orientation="vertical" flexItem className={classes.divider} />

        <Grid item className={classes.savedThemes}>
          <Typography variant="h4" gutterBottom>
            Saved Themes
          </Typography>
          <SavedThemeList />
        </Grid>
      </Grid>
    </div>
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
