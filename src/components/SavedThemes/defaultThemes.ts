import { NewSavedTheme } from "src/state/types"

const defaultThemeList: Omit<NewSavedTheme, "lastUpdated">[] = [
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
      typography: {
        fontFamily: "Open Sans",
        h1: {
          fontFamily: "Ubuntu Mono",
        },
        h2: {
          fontFamily: "Ubuntu Mono",
        },
        h3: {
          fontFamily: "Ubuntu Mono",
        },
        h4: {
          fontFamily: "Ubuntu Mono",
        },
        h6: {
          fontFamily: "Ubuntu Mono",
        },
        h5: {
          fontFamily: "Ubuntu Mono",
        },
        subtitle1: {
          fontFamily: "Ubuntu Mono",
        },
        subtitle2: {
          fontFamily: "Ubuntu Mono",
        },
        button: {
          fontFamily: "Ubuntu Mono",
          fontWeight: 900,
        },
        overline: {
          fontFamily: "Ubuntu Mono",
        },
      },
    },
    fonts: ["Open Sans", "Ubuntu Mono"],
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
  {
    name: "Red Rover",
    themeOptions: {
      palette: {
        type: "dark",
        primary: {
          main: "#ff8f00",
        },
        secondary: {
          main: "#f50057",
        },
        background: {
          default: "#310000",
          paper: "#731010",
        },
      },
      typography: {
        fontFamily: "Do Hyeon",
      },
      shape: {
        borderRadius: 16,
      },
    },
    fonts: ["Roboto", "Do Hyeon"],
  },
  {
    name: "Comic Book",
    themeOptions: {
      palette: {
        type: "dark",
        primary: {
          main: "#bd0707",
        },
        secondary: {
          main: "#ffc510",
        },
        background: {
          default: "#4c69f6",
          paper: "#4c94f6",
        },
      },
      typography: {
        body1: {
          fontFamily: "Roboto",
        },
        fontFamily: "Bangers",
        caption: {
          fontFamily: "Do Hyeon",
        },
        overline: {
          fontFamily: "Do Hyeon",
        },
        body2: {
          fontFamily: "Roboto",
        },
      },
    },
    fonts: ["Bangers", "Do Hyeon", "Roboto"],
  },
]

export default defaultThemeList
