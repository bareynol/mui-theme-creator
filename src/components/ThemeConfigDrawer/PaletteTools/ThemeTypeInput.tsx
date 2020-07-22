import React, { useCallback } from "react"
import {
  makeStyles,
  Theme,
  createStyles,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Switch,
} from "@material-ui/core"
import { useDispatch } from "react-redux"
import { setSavedThemeVariable } from "src/state/actions"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      display: "flex",
      alignItems: "center",
    },
    switchBase: {
      color: "#fff",
      "&$checked": {
        color: "#212121",
      },
      "&$checked + $track": {
        backgroundColor: "#303030",
      },
    },
    checked: {},
    track: {},
  })
)

export default function ThemeTypeInput({ getThemeValue }) {
  const classes = useStyles()
  const themeIsDark = getThemeValue("palette.type").value === "dark"
  const dispatch = useDispatch()

  const toggleThemeType = useCallback(() => {
    dispatch(
      setSavedThemeVariable("palette.type", themeIsDark ? "light" : "dark")
    )
  }, [dispatch, themeIsDark])

  return (
    <ListItem>
      <ListItemText primary="Type" />
      <ListItemSecondaryAction className={classes.inputRoot}>
        <Typography>Light</Typography>
        <Switch
          checked={themeIsDark}
          onClick={toggleThemeType}
          classes={{
            switchBase: classes.switchBase,
            checked: classes.checked,
            track: classes.track,
          }}
        />
        <Typography>Dark</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
