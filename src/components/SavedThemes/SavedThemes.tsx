import React from "react"
import {
  Paper,
  Card,
  CardContent,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Button,
  Divider,
} from "@material-ui/core"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import ThemeThumbnail from "./ThemeThumbnail"
import DefaultThemes from "./DefaultThemes"
import SavedThemeItem from "./SavedThemeItem/SavedThemeItem"
import SavedThemeList from "./SavedThemeList"
import AddThemeButton from "./AddThemeButton"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(2),
    },
    addNewButtons: {
      "& > *": {
        marginRight: theme.spacing(),
      },
    },
    savedThemes: {
      marginTop: theme.spacing(4),
    },
  })
)

function SavedThemes() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="h4">Current Theme</Typography>
      <Grid
        container
        spacing={4}
        justify="flex-start"
        wrap="nowrap"
        alignItems="flex-end"
      >
        <Grid item>
          <CurrentTheme />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item style={{ width: "100%" }} zeroMinWidth>
          <Typography variant="h6" gutterBottom>
            Theme Templates
          </Typography>
          <DefaultThemes />
        </Grid>
      </Grid>

      <Divider style={{ marginTop: 64, marginBottom: 32 }} />

      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Saved Themes
          </Typography>
        </Grid>
        <Grid item>
          <AddThemeButton />
        </Grid>
      </Grid>

      <SavedThemeList />
    </div>
  )
}

export default SavedThemes

function CurrentTheme() {
  const themeOptions = useSelector((state: RootState) => state.themeOptions)
  const themeId = useSelector((state: RootState) => state.themeId)
  const themeName = useSelector(
    (state: RootState) => state.savedThemes[state.themeId].name
  )
  return (
    <SavedThemeItem
      name={themeName}
      themeOptions={themeOptions}
      themeId={themeId}
      large
    />
  )
}
