import { Button, Grid } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import ColorInput from "src/components/ColorInput";
import { removeThemeOption, setThemeOption } from "src/state/actions";
import { useThemeValueInfo } from "src/state/selectors";

interface Props {
  label: string;
  path: string;
}
export default function PaletteInput({ label, path }: Props) {
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
          sx={{
            textTransform: "capitalize",
            '&.Mui-disabled': {
              fontStyle: "italic",
            }
          }}
          onClick={handleReset}
        >
          {themeValueInfo.modifiedByUser ? "Reset" : "auto"}
        </Button>
      </Grid>
    </Grid>
  );
}
