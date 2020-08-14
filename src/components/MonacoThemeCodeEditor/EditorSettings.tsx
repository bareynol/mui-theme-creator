import React from "react"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import SettingsIcon from "@material-ui/icons/Settings"
import Popover from "@material-ui/core/Popover"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import { useUpdateEditorState } from "src/state/editor/actions"
import Checkbox from "@material-ui/core/Checkbox"
import {
  makeStyles,
  Theme,
  createStyles,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListSubheader,
} from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3),
    },
    popoverPaper: {
      // backgroundColor: theme.palette.background.default,
    },
    settingsList: {
      minWidth: 320,
    },
  })
)

const EditorButton = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null)

  const handleOpen = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  return (
    <>
      <Tooltip title="Editor Settings">
        <IconButton onClick={handleOpen}>
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
        PaperProps={{
          className: classes.popoverPaper,
        }}
      >
        <EditorSettings />
      </Popover>
    </>
  )
}
export default EditorButton

const EditorSettings = () => {
  const classes = useStyles()
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
    <List dense className={classes.settingsList}>
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
