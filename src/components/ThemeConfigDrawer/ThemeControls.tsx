import React, {
  useCallback,
  Component,
  Props,
  ClassAttributes,
  useState,
} from "react"
import {
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Switch,
  ListItemIcon,
  Checkbox,
  FormControlLabel,
  Theme,
  createMuiTheme,
  ThemeOptions,
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  createStyles,
  Divider,
  IconTypeMap,
} from "@material-ui/core"
import NestedListItem from "../NestedListItem"
import ThemeTypeInput from "./PaletteTools/ThemeTypeInput"
import ColorInput from "../ColorInput"
import { RootState } from "src/state/types"
import { useSelector } from "react-redux"
import { resolvePath } from "src/utils"
import AutoSetInput from "./AutoSetInput"
import ColorInputListItem from "./PaletteTools/ColorInputListItem"
import PaletteTools from "./PaletteTools/PaletteTools"
import PaletteIcon from "@material-ui/icons/Palette"
import TypographyIcon from "@material-ui/icons/TextFields"
import TransitionIcon from "@material-ui/icons/ClearAll"
import SnippetsIcon from "@material-ui/icons/PlaylistAdd"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomNavBar: {
      backgroundColor: theme.palette.background.default,
      borderTop: "1px solid",
      borderTopColor: theme.palette.divider,
    },
    toolPanel: {
      backgroundColor: "#212121",
      flexGrow: 1,
      overflowY: "auto",
      overflowX: "hidden",
    },
    selected: {
      // color: "#fff",
      "&$root": {
        backgroundColor: "#212121",
      },
      "& $wrapper": {
        color: "#fff",
      },
    },
    wrapper: {
      color: theme.palette.text.disabled,
    },
    root: {},
  })
)

interface ThemeControlWindow {
  label: string
  icon: React.ReactNode
  ControlComponent: any // need to figure this out. React.FC ?
}

const controlWindows: Array<ThemeControlWindow> = [
  {
    label: "Palette",
    icon: <PaletteIcon />,
    ControlComponent: PaletteTools,
  },
  {
    label: "Typography",
    icon: <TypographyIcon />,
    ControlComponent: () => <div />,
  },
  {
    label: "Transitions",
    icon: <TransitionIcon />,
    ControlComponent: () => <div />,
  },
  {
    label: "Snippets",
    icon: <SnippetsIcon />,
    ControlComponent: () => <div />,
  },
]

export default function ThemeControls() {
  const classes = useStyles()
  const [bottomNavIndex, setBottomNavIndex] = useState(0)
  // the object that's being piped into createMuiTheme by the ThemeWrapper
  const savedThemeObject: ThemeOptions = useSelector(
    (state: RootState) => state.themeObject
  )

  // a Theme object created using the configs
  const fullMuiTheme: Theme = createMuiTheme(savedThemeObject)

  // get the value of a key path in the currently shown theme
  const getThemeValue = useCallback(
    (path: string) => {
      const valFromSaved: any = resolvePath(savedThemeObject, path)
      if (valFromSaved !== undefined) {
        return {
          modifiedByUser: true,
          value: valFromSaved,
        }
      }
      return {
        modifiedByUser: false,
        value: resolvePath(fullMuiTheme, path),
      }
    },
    [savedThemeObject, fullMuiTheme]
  )

  const bottomNavActionClasses = {
    selected: classes.selected,
    wrapper: classes.wrapper,
    root: classes.root,
  }

  const ControlWindow = controlWindows[bottomNavIndex].ControlComponent

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "auto",
      }}
    >
      <div className={classes.toolPanel}>
        <ControlWindow getThemeValue={getThemeValue} />
      </div>

      <BottomNavigation
        value={bottomNavIndex}
        showLabels
        className={classes.bottomNavBar}
        onChange={(event, newValue) => setBottomNavIndex(newValue)}
      >
        {controlWindows.map((win, index) => (
          <BottomNavigationAction
            key={`${index}-${win.label}`}
            label={win.label}
            value={index}
            icon={win.icon}
            classes={bottomNavActionClasses}
          />
        ))}
      </BottomNavigation>
    </div>
  )
}
