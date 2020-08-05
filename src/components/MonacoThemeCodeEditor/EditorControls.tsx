import React from "react"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import DownloadIcon from "@material-ui/icons/GetApp"
import SaveIcon from "@material-ui/icons/Save"
import RedoIcon from "@material-ui/icons/Redo"
import UndoIcon from "@material-ui/icons/Undo"
import Typography from "@material-ui/core/Typography"
import Tooltip from "@material-ui/core/Tooltip"
import {
  IconButton,
  makeStyles,
  createStyles,
  Theme,
  Divider,
} from "@material-ui/core"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import { useCanSave } from "src/state/selectors"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingRight: theme.spacing(),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
)

function EditorControls({ onRedo, onUndo, onSave }) {
  const classes = useStyles()
  const canUndo = useSelector((state: RootState) => state.editor.canUndo)
  const canRedo = useSelector((state: RootState) => state.editor.canRedo)
  const canSave = useCanSave()
  return (
    <div className={classes.root}>
      <div style={{ display: "flex" }}>
        <Tooltip title="Download theme.js">
          <IconButton color="primary">
            <DownloadIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Copy theme code">
          <IconButton color="secondary">
            <FileCopyIcon />
          </IconButton>
        </Tooltip>
        <Divider orientation="vertical" flexItem />
        <Tooltip title="Undo (Ctrl + Z)">
          <span>
            <IconButton disabled={!canUndo} onClick={onUndo}>
              <UndoIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Redo (Ctrl + Y)">
          <span>
            <IconButton disabled={!canRedo} onClick={onRedo}>
              <RedoIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Save Changes (Ctrl + S)">
          <span>
            <IconButton disabled={!canSave} onClick={onSave}>
              <SaveIcon />
            </IconButton>
          </span>
        </Tooltip>
      </div>
      <Typography
        variant="body2"
        color={canSave ? "textPrimary" : "textSecondary"}
        display="inline"
      >
        {canSave ? "* Unsaved Changes" : "All changes saved"}
      </Typography>

      {/* <div>
        <Typography display="inline">Theme Editor</Typography>
        <Tooltip title="Download theme.js">
          <IconButton>
            <DownloadIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Copy theme code">
          <IconButton>
            <FileCopyIcon />
          </IconButton>
        </Tooltip>
      </div> */}
    </div>
  )
}

export default EditorControls
