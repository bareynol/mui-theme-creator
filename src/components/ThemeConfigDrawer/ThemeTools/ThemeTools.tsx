import React, { useState } from "react"

import { makeStyles, createStyles, Theme } from "@material-ui/core"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import PaletteTools from "./PaletteTools/PaletteTools"

import TypographyTools from "./TypographyTools/TypographyTools"

import PaletteIcon from "@material-ui/icons/Palette"
import FontIcon from "@material-ui/icons/FontDownload"
import TypographyIcon from "@material-ui/icons/TextFields"
import SnippetsIcon from "@material-ui/icons/PlaylistAdd"
import ToolPanel from "./ToolPanel"
import FontTools from "./FontTools/FontTools"
import SnippetTools from "./SnippetTools"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomNavBar: {
      backgroundColor: theme.palette.background.default,
      borderTop: "1px solid",
      borderTopColor: theme.palette.divider,
      width: "calc(100% - 1px)", // to prevent scroll bar
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

const toolPanels: Array<{
  label: string
  icon: React.ReactNode
  tools: any
}> = [
  {
    label: "Palette",
    icon: <PaletteIcon />,
    tools: PaletteTools,
  },
  {
    label: "Fonts",
    icon: <FontIcon />,
    tools: FontTools,
  },
  {
    label: "Typography",
    icon: <TypographyIcon />,
    tools: TypographyTools,
  },
  {
    label: "Snippets",
    icon: <SnippetsIcon />,
    tools: SnippetTools,
  },
]

export default function ThemeTools() {
  const classes = useStyles()
  const [bottomNavIndex, setBottomNavIndex] = useState(0)

  const bottomNavActionClasses = {
    selected: classes.selected,
    wrapper: classes.wrapper,
    root: classes.root,
  }

  const currentTool = toolPanels[bottomNavIndex]

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "auto",
      }}
    >
      <ToolPanel panelTitle={currentTool.label}>
        <currentTool.tools />
      </ToolPanel>

      <BottomNavigation
        value={bottomNavIndex}
        showLabels
        className={classes.bottomNavBar}
        onChange={(event, newValue) => setBottomNavIndex(newValue)}
      >
        {toolPanels.map((win, index) => (
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
