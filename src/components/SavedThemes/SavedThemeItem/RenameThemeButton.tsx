import React, { useCallback, FormEvent } from "react"
import Button from "@mui/material/Button/Button"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import TextField from "@mui/material/TextField"
import DialogActions from "@mui/material/DialogActions"
import { useDispatch } from "react-redux"
import { renameSavedTheme } from "src/state/actions"
import EditIcon from "@mui/icons-material/Edit"

function RenameThemeButton({ themeId, defaultName }) {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = event => {
    event.stopPropagation()
    setOpen(true)
  }

  const handleClose = event => {
    setOpen(false)
  }

  const handleFocus = event => event.target.select()

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      dispatch(renameSavedTheme(themeId, event.target.themeName.value))
      // handleClose(event)
    },
    [dispatch]
  )

  return (
    <>
      <Button size="large" startIcon={<EditIcon />} onClick={handleClickOpen}>
        Rename
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="rename-theme-dialog"
        onClick={event => event.stopPropagation()}
      >
        <form onSubmit={handleSubmit} autoComplete="off">
          <DialogTitle id="rename-theme-dialog">Rename Theme</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              onFocus={handleFocus}
              defaultValue={defaultName}
              margin="dense"
              name="themeName"
              label="Theme Name"
              fullWidth
              required
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary" onClick={handleClose}>
              Rename
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default RenameThemeButton
