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
import { setThemeOption } from "src/state/actions"
import { useThemeValue } from "src/state/selectors"
import { ThemeValueChangeEvent } from "../events"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      display: "flex",
      alignItems: "center",
    },
    switchBase: {
      color: "#fff",
      // "&$checked": {
      //   color: "#212121",
      // },
      // "&$checked + $track": {
      //   backgroundColor: "#303030",
      // },
    },
    checked: {},
    track: {},
  })
)

export default function ThemeTypeInput() {
  const classes = useStyles()
  const themeIsDark = useThemeValue("palette.type") === "dark"
  const dispatch = useDispatch()

  const toggleThemeType = useCallback(() => {
    dispatch(setThemeOption("palette.type", themeIsDark ? "light" : "dark"))
    document.dispatchEvent(ThemeValueChangeEvent())
  }, [dispatch, themeIsDark])

  return (
    <div className={classes.inputRoot}>
      <Typography
        variant="body2"
        color={themeIsDark ? "textSecondary" : "textPrimary"}
      >
        Light
      </Typography>
      <Switch
        checked={themeIsDark}
        onClick={toggleThemeType}
        classes={{
          switchBase: classes.switchBase,
          checked: classes.checked,
          track: classes.track,
        }}
        color="default"
      />
      <Typography
        variant="body2"
        color={!themeIsDark ? "textSecondary" : "textPrimary"}
      >
        Dark
      </Typography>
    </div>
  )
}
