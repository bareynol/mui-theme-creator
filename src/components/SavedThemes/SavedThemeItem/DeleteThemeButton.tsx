import React, { useCallback, FormEvent } from "react"
import Button from "@material-ui/core/Button/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import TextField from "@material-ui/core/TextField"
import DialogActions from "@material-ui/core/DialogActions"
import { useDispatch } from "react-redux"
import { removeSavedTheme } from "src/state/actions"
import DeleteIcon from "@material-ui/icons/Delete"
import { DialogContentText, Typography } from "@material-ui/core"

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
