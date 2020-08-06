import React from "react"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import SettingsIcon from "@material-ui/icons/Settings"
import Popover from "@material-ui/core/Popover"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import { useUpdateEditorState } from "src/state/editor/actions"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { makeStyles, Theme, createStyles } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(3),
    },
    popoverPaper: {
      // backgroundColor: theme.palette.background.default,
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

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Editor Settings</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={formatOnSave}
              onChange={() => updateEditor({ formatOnSave: !formatOnSave })}
              name="formatOnSave"
            />
          }
          label="Format Document on Save (Prettier)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={outputTypescript}
              onChange={() =>
                updateEditor({ outputTypescript: !outputTypescript })
              }
              name="formatOnSave"
            />
          }
          label="Copy Button Outputs Typescript"
        />
      </FormGroup>
    </FormControl>
  )
}
