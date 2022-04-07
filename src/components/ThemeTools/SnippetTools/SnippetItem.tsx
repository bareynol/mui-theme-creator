import AddIcon from "@mui/icons-material/Add"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import RemoveIcon from "@mui/icons-material/Remove"
import { Accordion, AccordionSummary, Link, Tooltip, Typography } from "@mui/material"
import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeThemeOptions, setThemeOptions } from "src/state/actions"
import { RootState } from "src/state/types"
import { getByPath } from "src/utils"
import { ThemeValueChangeEvent } from "../events"
import { SnippetModification } from "./types"

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

interface SnippetItemProps {
  snippet: SnippetModification
}

const SnippetItem = ({ snippet }: SnippetItemProps) => {
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
  const toolTipContent = info ? (
    <div>
      <div>{info}</div>
      {docs && (
        <Link href={docs} target="_blank" rel="noreferrer" underline="hover">{`Theme ${title} Docs`}</Link>
      )}
    </div>
  ) : '';

  return (
    <Accordion
      disabled={isSnippetIncluded}
      onClick={isSnippetIncluded ? handleRemoveSnippet : handleAddSnippet}
    >
      <AccordionSummary>
        {isSnippetIncluded ? <RemoveIcon /> : <AddIcon />}
        <Typography variant="body2" sx={{
          ml: 1,
          flexGrow: 1,
        }}>
          {title}
        </Typography>
        {info && (
          <Tooltip title={toolTipContent} arrow>
            <InfoOutlinedIcon />
          </Tooltip>
        )}
      </AccordionSummary>
    </Accordion>
  )
}

export default SnippetItem
