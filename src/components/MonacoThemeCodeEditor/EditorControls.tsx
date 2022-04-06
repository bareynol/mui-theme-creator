import FileCopyIcon from "@mui/icons-material/FileCopy"
import RedoIcon from "@mui/icons-material/Redo"
import SaveIcon from "@mui/icons-material/Save"
import UndoIcon from "@mui/icons-material/Undo"
import { Box, Divider, IconButton, Snackbar } from "@mui/material"
import Alert from '@mui/material/Alert'
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { useCanSave } from "src/state/selectors"
import { RootState } from "src/state/types"
import EditorButton from "./EditorSettings"

interface EditorControlsProps {
  onRedo: React.MouseEventHandler<HTMLButtonElement>;
  onUndo: React.MouseEventHandler<HTMLButtonElement>;
  onSave: React.MouseEventHandler<HTMLButtonElement>;
}

function EditorControls({ onRedo, onUndo, onSave }: EditorControlsProps) {
  const canUndo = useSelector((state: RootState) => state.editor.canUndo)
  const canRedo = useSelector((state: RootState) => state.editor.canRedo)
  const canSave = useCanSave()
  return (
    <Box sx={{
      paddingRight: 1,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
      <Box sx={{ display: "flex" }}>
        <EditorButton />
        <CopyButton />
        <Divider orientation="vertical" flexItem />
        <Tooltip title="Undo (Ctrl + Z)">
          <span>
            <IconButton disabled={!canUndo} onClick={onUndo} size="large">
              <UndoIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Redo (Ctrl + Y)">
          <span>
            <IconButton disabled={!canRedo} onClick={onRedo} size="large">
              <RedoIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip title="Save Changes (Ctrl + S)">
          <span>
            <IconButton disabled={!canSave} onClick={onSave} size="large">
              <SaveIcon />
            </IconButton>
          </span>
        </Tooltip>
      </Box>
      <Typography
        variant="body2"
        color={canSave ? "textPrimary" : "textSecondary"}
        display="inline"
      >
        {canSave ? "* Unsaved Changes" : "All changes saved"}
      </Typography>
    </Box>
  );
}

export default EditorControls

const CopyButton = ({ }) => {
  const themeInput = useSelector((state: RootState) => state.editor.themeInput)
  const outputTypescript = useSelector(
    (state: RootState) => state.editor.outputTypescript
  )
  const [open, setOpen] = useState(false)
  const copyToClipboard = () => {
    let codeToCopy = themeInput
    if (!outputTypescript) {
      // naively strip out typescript (first three lines)
      codeToCopy = [
        `export const themeOptions = {`,
        ...themeInput.split("\n").slice(3),
      ].join("\n")
    }
    navigator.clipboard.writeText(codeToCopy).then(() => setOpen(true))
  }

  return <>
    <Tooltip title="Copy theme code">
      <IconButton color="primary" onClick={copyToClipboard} size="large">
        <FileCopyIcon />
      </IconButton>
    </Tooltip>
    <Snackbar
      open={open}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={() => setOpen(false)}
    >
      <Alert variant="filled" severity="success">
        Copied theme code to clipboard!
      </Alert>
    </Snackbar>
  </>;
}
