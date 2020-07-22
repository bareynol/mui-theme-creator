import React, { useCallback } from "react"
import ColorInput from "src/components/ColorInput"
import { useDispatch } from "react-redux"
import {
  setSavedThemeVariable,
  removeSavedThemeVariable,
} from "src/state/actions"
import {
  Grid,
  Typography,
  Button,
  makeStyles,
  createStyles,
} from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    resetButton: {
      textTransform: "capitalize",
    },
    disabledButton: {
      fontStyle: "italic",
    },
  })
)

export default function PaletteInput({ label, getThemeValue, path }) {
  const classes = useStyles()
  const themeValue = getThemeValue(path)
  // const auto = showAuto && !themeValue.modifiedByUser
  const dispatch = useDispatch()

  const handleColorChange = useCallback(
    color => dispatch(setSavedThemeVariable(path, color)),
    [dispatch]
  )

  const handleReset = useCallback(
    () => dispatch(removeSavedThemeVariable(path)),
    [dispatch]
  )

  return (
    <Grid container justify="space-between" alignItems="flex-end">
      <Grid item>
        <ColorInput
          label={label}
          color={themeValue.value}
          onColorChange={handleColorChange}
        />
      </Grid>
      <Grid item>
        <Button
          size="small"
          disabled={!themeValue.modifiedByUser}
          classes={{
            root: classes.resetButton,
            disabled: classes.disabledButton,
          }}
          onClick={handleReset}
        >
          {themeValue.modifiedByUser ? "Reset" : "auto"}
        </Button>
      </Grid>
    </Grid>
  )
}
