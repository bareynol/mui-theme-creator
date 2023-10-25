import { createTheme, ThemeOptions, Theme } from "@mui/material";

export const defaultThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5", // the default primary color
    },
    secondary: {
      main: "#f50057", // the default secondary color
    },
  },
}

export const defaultTheme: Theme = createTheme()

export const themeConfig: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  components: {
    MuiAccordion: {
      defaultProps: {
        square: true,
        TransitionProps: {
          unmountOnExit: true,
        },
      },
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 255, 255, .125)",
          boxShadow: "none",
          transition: defaultTheme.transitions.create("margin-left"),
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: "auto",
          },
          "&.Mui-disabled": {
            marginLeft: 32
          }
        },
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255, 255, 255, .125)",
          minHeight: 56,
          "&.Mui-expanded": {
            minHeight: 56
          }
        },
        content: {
          alignItems: "center",
          justifyContent: "space-between",
          "&.Mui-expanded": {
            margin: "12px 0",
          },
        },
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: "#212121",
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        docked: {
          "& .MuiPaper-root": {
            position: "static",
          },
        },
        paper: {},
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "#121212",
        },
      }
    }
  }
}

export default createTheme(themeConfig)
