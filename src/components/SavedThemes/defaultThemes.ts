import { NewSavedTheme } from "src/state/types"

const defaultThemeList: NewSavedTheme[] = [
  {
    name: "Material-UI Docs - Light",
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
    fonts: ["Roboto"],
  },
  {
    name: "Material-UI Docs - Dark",
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
          default: "#212121",
          paper: "#424242",
        },
      },
    },
    fonts: ["Roboto"],
  },
  {
    name: "Hacker Theme",
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
    fonts: ["Roboto"],
  },
  {
    name: "Dark Blue",
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
    fonts: ["Roboto"],
  },
]

export default defaultThemeList
