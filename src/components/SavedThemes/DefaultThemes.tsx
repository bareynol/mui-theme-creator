import React from "react"
import { Grid, Typography } from "@material-ui/core"
import ThemeThumbnail from "./ThemeThumbnail"

function DefaultThemes() {
  return (
    <div>
      <Typography variant="h4">Default Themes</Typography>
      <Grid container spacing={4} wrap="wrap">
        {defaultThemeList.map(t => (
          <Grid item key={t.title}>
            <ThemeThumbnail themeOptions={t.themeOptions} />
            <Typography>{t.title}</Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default DefaultThemes

const defaultThemeList = [
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
]
