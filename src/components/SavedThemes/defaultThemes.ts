import { NewSavedTheme } from "src/state/types"

const defaultThemeList: Omit<NewSavedTheme, "lastUpdated">[] = [
  {
    name: "Material-UI Docs - Light",
    themeOptions: {
      palette: {
        mode: "light",
        primary: {
          main: "#1976d2",
        },
        secondary: {
          main: "#9c27b0",
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
        mode: "dark",
        primary: {
          main: "#90caf9",
        },
        secondary: {
          main: "#ce93d8",
        },
        background: {
          default: "#121212",
          paper: "#121212",
        },
      },
    },
    fonts: ["Roboto"],
  },
  {
    name: "Hacker Theme",
    themeOptions: {
      palette: {
        mode: "dark",
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
        mode: "dark",
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
        mode: "dark",
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
        mode: "dark",
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

const defaultThemesId = "default-themes";

export { defaultThemesId };
