import SettingsIcon from "@mui/icons-material/Settings"
import {
  List,
  ListItem, ListItemSecondaryAction, ListItemText, ListSubheader
} from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import Popover from "@mui/material/Popover"
import Tooltip from "@mui/material/Tooltip"
import React from "react"
import { useSelector } from "react-redux"
import { useUpdateEditorState } from "src/state/editor/actions"
import { RootState } from "src/state/types"


const EditorButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null)

  const handleOpen = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  return <>
    <Tooltip title="Editor Settings">
      <IconButton onClick={handleOpen} size="large">
        <SettingsIcon />
      </IconButton>
    </Tooltip>
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <EditorSettings />
    </Popover>
  </>;
}
export default EditorButton

const EditorSettings = () => {
  const formatOnSave = useSelector(
    (state: RootState) => state.editor.formatOnSave
  )
  const outputTypescript = useSelector(
    (state: RootState) => state.editor.outputTypescript
  )
  const updateEditor = useUpdateEditorState()
  const toggleFormatOnSave = () => updateEditor({ formatOnSave: !formatOnSave })
  const toggleOutputTypescript = () =>
    updateEditor({ outputTypescript: !outputTypescript })

  return (
    <List dense sx={{ minWidth: 320 }}>
      <ListSubheader>Editor Settings</ListSubheader>
      <ListItem button onClick={toggleFormatOnSave}>
        <ListItemText
          id="format-document-label"
          primary="Format Document on Save (Prettier)"
        />
        <ListItemSecondaryAction>
          <Checkbox
            checked={formatOnSave}
            onChange={toggleFormatOnSave}
            name="formatOnSave"
            inputProps={{ "aria-labelledby": "format-document-label" }}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button onClick={toggleOutputTypescript}>
        <ListItemText
          id="output-typescript-label"
          primary="Copy Button Outputs Typescript"
        />
        <ListItemSecondaryAction>
          <Checkbox
            checked={outputTypescript}
            onChange={toggleOutputTypescript}
            name="outputTypescript"
            inputProps={{ "aria-labelledby": "output-typescript-label" }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  )
}
