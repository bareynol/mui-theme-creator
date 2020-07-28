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
} from "@material-ui/core"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import ThemeThumbnail from "./ThemeThumbnail"
import DefaultThemes from "./DefaultThemes"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(2),
    },
  })
)

function SavedThemes() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h4">Saved Themes</Typography>
        </CardContent>
        <CardContent>
          <Grid container spacing={2} justify="flex-start">
            <Grid
              item
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CurrentTheme />
              <Typography>Current Theme</Typography>
            </Grid>
            <Grid
              container
              wrap="nowrap"
              spacing={2}
              item
              xs={9}
              style={{ flex: 1, flexGrow: 1, overflowX: "auto" }}
              zeroMinWidth
            >
              <Grid item>
                <div
                  style={{ height: 75, width: 150, backgroundColor: "blue" }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{ height: 75, width: 150, backgroundColor: "blue" }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{ height: 75, width: 150, backgroundColor: "blue" }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{ height: 75, width: 150, backgroundColor: "blue" }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{ height: 75, width: 150, backgroundColor: "blue" }}
                />
              </Grid>
              <Grid item>
                <div
                  style={{ height: 75, width: 150, backgroundColor: "blue" }}
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <DefaultThemes />
    </div>
  )
}

export default SavedThemes

function CurrentTheme() {
  const themeOptions = useSelector((state: RootState) => state.themeOptions)
  return <ThemeThumbnail themeOptions={themeOptions} />
}
