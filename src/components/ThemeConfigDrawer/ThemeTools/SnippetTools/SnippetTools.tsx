import React, { useState } from "react"
import clsx from "clsx"
import AddIcon from "@material-ui/icons/Add"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Tooltip,
  Paper,
  Link,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Theme,
  createStyles,
  Collapse,
} from "@material-ui/core"
import { SnippetModification } from "./types"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import { resolvePath } from "src/utils"
import SnippetItem, { ExpandableSnippetItem } from "./SnippetItem"
import snippets from "./snippets"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expandIcon: {
      transition: theme.transitions.create("transform"),
      "&$expanded": {
        transform: "rotate(180deg)",
      },
    },
    expanded: {},
    nestedItem: {
      paddingLeft: theme.spacing(4),
    },
  })
)

// const baseSnippets: Array<SnippetModification> = [
//   {
//     title: "Spacing",
//     info: "Change the spacing created by theme.spacing()",
//     docs: "https://material-ui.com/customization/spacing/",
//     configs: [{ path: "spacing", value: 8 }],
//   },
//   {
//     title: "Right-To-Left",
//     info: "Change the direction of the Material-UI components to RTL",
//     docs: "https://material-ui.com/customization/spacing/",
//     configs: [{ path: "direction", value: "rtl" }],
//   },
//   {
//     title: "Border Radius",
//     configs: [{ path: "shape.borderRadius", value: 4 }],
//   },
// ]

const SnippetTools = () => {
  return (
    // <Paper>
    // {/* <List> */}
    <>
      {snippets.map(snippet => (
        <SnippetItem snippet={snippet} key={snippet.title} />
      ))}
    </>
    // {/* </List> */}
    // {/* </Paper> */}
  )
}

export default SnippetTools
