import React, { useCallback } from "react"
import {
  Grid,
  Typography,
  ThemeOptions,
  ButtonBase,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core"
import ThemeThumbnail from "./ThemeThumbnail"
import { useDispatch } from "react-redux"
import { addNewSavedTheme } from "src/state/actions"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonRoot: {
      display: "flex",
      flexDirection: "column",
    },
    thumbnailContainer: {
      position: "relative",
      "&:hover $hoverArea": {
        display: "flex",
      },
    },
    hoverArea: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backdropFilter: "blur(2px) saturate(30%) brightness(40%)",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      display: "none",
    },
  })
)

function DefaultThemes() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleClick = useCallback(
    (title: string, themeOptions: ThemeOptions) => {
      dispatch(addNewSavedTheme(title, themeOptions))
    },
    [dispatch]
  )

  return (
    <Grid
      container
      spacing={2}
      wrap="nowrap"
      style={{ flex: 1, flexGrow: 1, overflowX: "auto" }}
    >
      {[...defaultThemeList, ...defaultThemeList].map(t => (
        <Grid
          item
          key={t.title}
          onClick={() => handleClick(t.title, t.themeOptions)}
        >
          <ButtonBase className={classes.buttonRoot}>
            <div className={classes.thumbnailContainer}>
              <ThemeThumbnail themeOptions={t.themeOptions} />
              <div className={classes.hoverArea}>
                <Typography>Click to add</Typography>
              </div>
            </div>

            <Typography variant="subtitle1">{t.title}</Typography>
          </ButtonBase>
        </Grid>
      ))}
    </Grid>
  )
}

export default DefaultThemes

const defaultThemeList = [
  {
    title: "Material-UI Docs - Light",
    themeOptions: {
      palette: {
        type: "light",
        primary: {
          main: "#1976d2",
        },
        secondary: {
          main: "rgb(220, 0, 78)",
        },
        background: {
          default: "#fff",
          paper: "#fff",
        },
      },
    },
  },
  {
    title: "Material-UI Docs - Dark",
    themeOptions: {
      palette: {
        type: "dark",
        primary: {
          main: "#90caf9",
        },
        secondary: {
          main: "#f48fb1",
        },
        background: {
          default: "#121212",
          paper: "#424242",
        },
      },
    },
  },
  {
    title: "Hacker Theme",
    themeOptions: {
      palette: {
        type: "dark",
        primary: {
          main: "#0f0",
        },
        background: {
          default: "#111111",
          paper: "#212121",
        },
      },
    },
  },
  {
    title: "Dark Blue",
    themeOptions: {
      palette: {
        type: "dark",
        primary: {
          main: "#5893df",
        },
        secondary: {
          main: "#2ec5d3",
        },
        background: {
          default: "#192231",
          paper: "#24344d",
        },
      },
    },
  },
]
