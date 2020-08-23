import React, { useCallback } from "react"
import clsx from "clsx"
import { SnippetModification } from "./types"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/types"
import { getByPath } from "src/utils"
import {
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Collapse,
  makeStyles,
  Theme,
  createStyles,
  Accordion,
  AccordionSummary,
  Typography,
} from "@material-ui/core"
import { useState } from "react"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { setThemeOptions, removeThemeOptions } from "src/state/actions"
import { ThemeValueChangeEvent } from "../events"

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

/**
 * Simple check of if the SnippetModification.configs are
 * set on the current theme options
 * @param configs
 */
const useIsSnippetIncluded = (configs: SnippetModification["configs"]) => {
  const themeOptions = useSelector((state: RootState) => state.themeOptions)
  for (const c in configs) {
    if (getByPath(themeOptions, configs[c].path) == null) {
      return false
    }
  }
  return true
}

const SnippetItem = ({ snippet }) => {
  const dispatch = useDispatch()
  const handleAddSnippet = useCallback(() => {
    dispatch(setThemeOptions(snippet.configs))
    document.dispatchEvent(ThemeValueChangeEvent())
  }, [dispatch])

  const handleRemoveSnippet = useCallback(() => {
    dispatch(removeThemeOptions(snippet.configs))
    document.dispatchEvent(ThemeValueChangeEvent())
  }, [dispatch])

  const isSnippetIncluded = useIsSnippetIncluded(snippet.configs)

  const { info, docs, title } = snippet
  const toolTipContent = info && (
    <div>
      <div>{info}</div>
      {docs && (
        <Link
          href={docs}
          target="_blank"
          rel="noreferrer"
        >{`Theme ${title} Docs`}</Link>
      )}
    </div>
  )
  return (
    <Accordion
      disabled={isSnippetIncluded}
      onClick={isSnippetIncluded ? handleRemoveSnippet : handleAddSnippet}
    >
      <AccordionSummary>
        {isSnippetIncluded ? <RemoveIcon /> : <AddIcon />}
        <Typography variant="body2" style={{ flexGrow: 1, marginLeft: 8 }}>
          {title}
        </Typography>
        {info && (
          <Tooltip title={toolTipContent} interactive arrow>
            <InfoOutlinedIcon />
          </Tooltip>
        )}
      </AccordionSummary>
    </Accordion>
  )
}

// const SnippetItem = ({ snippet }) => {
//   const isSnippetIncluded = useIsSnippetIncluded(snippet.configs)
//   const { info, docs, title } = snippet
//   const toolTipContent = info && (
//     <div>
//       <div>{info}</div>
//       {docs && (
//         <Link
//           href={docs}
//           target="_blank"
//           rel="noreferrer"
//         >{`Theme ${title} Docs`}</Link>
//       )}
//     </div>
//   )
//   return (
//     <ListItem>
//       <ListItemIcon>
//         <AddIcon />
//       </ListItemIcon>
//       <ListItemText>{title}</ListItemText>
//       <ListItemSecondaryAction>
//         {info && (
//           <Tooltip title={toolTipContent} interactive>
//             <InfoOutlinedIcon />
//           </Tooltip>
//         )}
//       </ListItemSecondaryAction>
//     </ListItem>
//   )
// }

export default SnippetItem

export const ExpandableSnippetItem = ({ title, info = "", docs = "" }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <ExpandMoreIcon
            className={clsx(classes.expandIcon, { [classes.expanded]: open })}
          />
        </ListItemIcon>
        <ListItemText>{title}</ListItemText>
      </ListItem>
      <Collapse in={open}>
        <div className={classes.nestedItem}>Test</div>
      </Collapse>
    </>
  )
}

/**
 * snippets to include:
 *
 * shape: {borderRadius: 4},
  mixins
  breakpoints,
  overrides,
  props,
 * */
