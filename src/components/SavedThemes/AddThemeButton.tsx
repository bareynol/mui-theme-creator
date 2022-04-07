import React, { useCallback, FormEvent } from "react"
import Button from "@mui/material/Button/Button"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import TextField from "@mui/material/TextField"
import DialogActions from "@mui/material/DialogActions"
import { useDispatch } from "react-redux"
import { addNewSavedTheme } from "src/state/actions"

export const addThemeButtonId = "add-theme-button"

function AddThemeButton() {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleFocus = event => event.target.select()

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      dispatch(addNewSavedTheme(event.target.themeName.value))
      handleClose()
    },
    [dispatch]
  )

  return (
    <>
      <Button
        id={addThemeButtonId}
        variant="outlined"
        color="secondary"
        onClick={handleClickOpen}
      >
        Add New Theme
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="add-theme-dialog"
      >
        <form onSubmit={handleSubmit} autoComplete="off">
          <DialogTitle id="add-theme-dialog">Add New Theme</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              onFocus={handleFocus}
              defaultValue="New Theme"
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
            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default AddThemeButton
