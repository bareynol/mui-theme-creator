import React, { useCallback, FormEvent } from "react"
import Button from "@mui/material/Button/Button"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import TextField from "@mui/material/TextField"
import DialogActions from "@mui/material/DialogActions"
import { useDispatch } from "react-redux"
import { removeSavedTheme } from "src/state/actions"
import DeleteIcon from "@mui/icons-material/Delete"
import { DialogContentText, Typography } from "@mui/material"

function DeleteThemeButton({ themeId, themeName, disabled }) {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = event => {
    event.stopPropagation()
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = useCallback(
    event => {
      event.preventDefault()
      dispatch(removeSavedTheme(themeId))
      handleClose()
    },
    [dispatch]
  )

  return (
    <>
      <Button
        size="large"
        startIcon={<DeleteIcon />}
        disabled={disabled}
        onClick={handleClickOpen}
      >
        Delete
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-theme-dialog"
        aria-describedby="alert-dialog-description"
        onClick={event => event.stopPropagation()}
      >
        <DialogTitle id="delete-theme-dialog">Delete Theme?</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-theme-description">
            {`Delete the theme `}
            <Typography color="secondary" component="span">
              {themeName}
            </Typography>
            {`? This action cannot be undone`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteThemeButton
