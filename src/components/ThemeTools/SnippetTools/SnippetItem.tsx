import React, { useCallback } from "react"
import { SnippetModification } from "./types"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/types"
import { getByPath } from "src/utils"
import { Link, Tooltip, Theme, Accordion, AccordionSummary, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import { setThemeOptions, removeThemeOptions } from "src/state/actions"
import { ThemeValueChangeEvent } from "../events"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    snippetTitle: {
      marginLeft: theme.spacing(),
      flexGrow: 1,
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
  const classes = useStyles()
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
        <Link href={docs} target="_blank" rel="noreferrer" underline="hover">{`Theme ${title} Docs`}</Link>
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
        <Typography variant="body2" className={classes.snippetTitle}>
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

export default SnippetItem
