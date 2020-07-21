import React from "react"
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      display: "flex",
      alignItems: "center",
    },
  })
)

export default function ThemeTypeInput() {
  const classes = useStyles()

  return (
    <ListItem>
      <ListItemText primary="Type" />
      <ListItemSecondaryAction className={classes.inputRoot}>
        <Typography>Light</Typography>
        <Switch />
        <Typography>Dark</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
