import CloseIcon from "@mui/icons-material/Close";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Box, Collapse, Divider, IconButton, Snackbar } from "@mui/material";
import Alert from '@mui/material/Alert';
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/state/types";

interface EditorErrorsProps {
  editorRef: React.RefObject<any>;
}

const EditorErrors = ({ editorRef }: EditorErrorsProps) => {
  const errors = useSelector((state: RootState) => state.editor.errors)
  const [open, setOpen] = useState(true)
  const [expanded, setExpanded] = useState(errors.length < 3) // default open if 1 or 2 errors
  const handleClose = () => setOpen(false)
  const handleExpand = () => setExpanded(!expanded)
  const model = editorRef.current?.getModel()

  useEffect(() => {
    if (errors.length > 0) {
      setOpen(true)
    } else {
      setOpen(false)
    }

    if (errors.length < 3) {
      setExpanded(true)
    } else {
      setExpanded(false)
    }
  }, [errors])

  const getErrorString = (error: any) => {
    if (!error.start) {
      return error.messageText
    }
    const pos = model?.getPositionAt(error.start)
    return `Line ${pos.lineNumber}:${pos.column}. ${error.messageText.messageText ?? error.messageText
      }`
  }

  const alertIcon = (
    <IconButton
      onClick={handleExpand}
      size="small"
      sx={{
        transition: (theme) => theme.transitions.create("transform"),
        transform: expanded ? 'rotate(180deg)' : null
      }}
    >
      <ExpandLessIcon />
    </IconButton>
  )

  const alertAction = (
    <IconButton onClick={handleClose} size="small">
      <CloseIcon />
    </IconButton>
  )

  return (
    <Box sx={{
      position: "absolute",
      bottom: 0,
      width: 1,
    }}>
      <Snackbar open={open} sx={{
        position: "relative",
        bottom: 0,
      }}>
        <Alert
          severity="error"
          icon={alertIcon}
          action={alertAction}
          sx={{
            alignItems: "flex-end",
            width: 1,
            '& .MuiAlert-icon': {
              p: 0
            },
            '& .MuiAlert-message': {
              padding: "4px 0",
              flexGrow: 1,
            }
          }}
        >
          <Collapse in={expanded}>
            {errors.map(e => (
              <Box key={`${e.code}-${e.start}`} sx={{
                fontWeight: (theme) => theme.typography.fontWeightBold,
              }}>
                {getErrorString(e)}
              </Box>
            ))}
            <Divider sx={{ my: 1 }} />
          </Collapse>
          <div>{`${errors.length} errors preventing save.`}</div>
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default EditorErrors
