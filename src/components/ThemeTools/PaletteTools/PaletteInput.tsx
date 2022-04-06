import React, { useCallback } from "react"
import ColorInput from "src/components/ColorInput"
import { useDispatch } from "react-redux"
import { setThemeOption, removeThemeOption } from "src/state/actions"
import { Grid, Typography, Button } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { useThemeValue, useThemeValueInfo } from "src/state/selectors"

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

export default function PaletteInput({ label, path }) {
  const classes = useStyles()
  const themeValueInfo = useThemeValueInfo(path)
  const dispatch = useDispatch()

  const handleColorChange = useCallback(
    color => dispatch(setThemeOption(path, color)),
    [dispatch]
  )

  const handleReset = useCallback(() => dispatch(removeThemeOption(path)), [
    dispatch,
  ])

  return (
    <Grid container justifyContent="space-between" alignItems="flex-end">
      <Grid item>
        <ColorInput
          label={label}
          color={themeValueInfo.value}
          onColorChange={handleColorChange}
        />
      </Grid>
      <Grid item>
        <Button
          size="small"
          disabled={!themeValueInfo.modifiedByUser}
          classes={{
            root: classes.resetButton,
            disabled: classes.disabledButton,
          }}
          onClick={handleReset}
        >
          {themeValueInfo.modifiedByUser ? "Reset" : "auto"}
        </Button>
      </Grid>
    </Grid>
  );
}
