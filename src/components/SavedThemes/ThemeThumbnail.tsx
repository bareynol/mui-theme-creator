import React, { useEffect, useState } from "react"
import {
  createMuiTheme,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 100,
      maxWidth: "85vw",
      width: 1600 / 9,
      position: "relative",
      "&.large": {
        height: 200,
        width: (1600 / 9) * 2,
        fontSize: 28,
        "& $fabIcon": {
          height: 36,
          width: 36,
        },
        "& $fab": {
          height: 32,
          width: 32,
          bottom: 8,
          right: 8,
        },
      },
    },
    appBar: {
      height: "15%",
      width: "100%",
      paddingLeft: 4,
      fontSize: "75%",
    },
    contentTitle: {
      fontSize: "60%",
      paddingLeft: 4,
    },
    card: {
      height: "50%",
      margin: 4,
    },
    cardHeader: {
      fontSize: "55%",
    },
    cardSubheader: {
      fontSize: "45%",
    },
    fab: {
      height: 16,
      width: 16,
      borderRadius: "50%",
      position: "absolute",
      bottom: 4,
      right: 4,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    fabIcon: {
      height: 18,
      width: 18,
    },
  })
)

function ThemeThumbnail({ themeOptions, large = false }) {
  const classes = useStyles()
  const [themeObject, setThemeObject] = useState({})

  useEffect(() => setThemeObject(createMuiTheme(themeOptions)), [themeOptions])

  const { background, primary, secondary, text } = themeObject?.palette || {}

  return (
    <div
      className={`${classes.root} ${large ? "large" : null}`}
      style={{
        backgroundColor: background?.default,
        color: text?.primary,
      }}
    >
      <div
        className={classes.appBar}
        style={{ backgroundColor: primary?.main }}
      >
        <span
          className={classes.appBarTitle}
          style={{ color: primary?.contrastText }}
        >
          Title
        </span>
      </div>
      <span className={classes.contentTitle}>Content</span>
      <div
        className={classes.card}
        style={{ backgroundColor: background?.paper }}
      >
        <div className={classes.cardHeader}>Card Header</div>
        <div
          className={classes.cardSubheader}
          style={{ color: text?.secondary }}
        >
          Card Subheader
        </div>
      </div>
      <div
        className={classes.fab}
        style={{
          backgroundColor: secondary?.main,
          color: secondary?.contrastText,
        }}
      >
        <AddIcon className={classes.fabIcon} />
      </div>
    </div>
  )
}

export default ThemeThumbnail
