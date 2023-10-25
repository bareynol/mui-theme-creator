import { SelectChangeEvent } from "@mui/material";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React, { SyntheticEvent, useEffect, useState } from "react";

const getLetterSpacingValue = (letterSpacing: string) => {
  if (
    letterSpacing == null ||
    letterSpacing.endsWith("rem") ||
    !letterSpacing.endsWith("em")
  ) {
    return undefined
  }
  return parseFloat(letterSpacing.slice(0, -2))
}

export interface InputProps {
  value: string;
  onChange: (event: Event | SyntheticEvent<Element, Event> | SelectChangeEvent<string>, value: string | number) => void;
  property?: string;
}
function LetterSpacingInput({ value, onChange }: InputProps) {
  const [displayValue, setDisplayValue] = useState<number | undefined>(
    undefined
  )

  useEffect(() => setDisplayValue(getLetterSpacingValue(value)), [value])

  const disabled = displayValue == undefined

  return <>
    <Grid container justifyContent="space-between" alignItems="baseline">
      <Grid item>
        <Typography variant="caption" color="textSecondary">
          Letter Spacing:
        </Typography>
      </Grid>
      <Grid item>
        {!disabled && (
          <Typography display="inline">{`${displayValue}em`}</Typography>
        )}
      </Grid>
    </Grid>
    <Slider
      value={disabled ? 0 : displayValue}
      disabled={disabled}
      min={-0.1}
      max={1.5}
      step={0.01}
      onChange={(event, newDisplayValue) => {
        const newVal = Array.isArray(newDisplayValue) ? newDisplayValue[0] : newDisplayValue;
        setDisplayValue(newVal)
      }}
      onChangeCommitted={(event, newValue) =>
        onChange(event, `${newValue}em`)
      }
    />
    {disabled && (
      <Typography
        color="textSecondary"
        variant="caption"
        sx={{ fontStyle: "italic" }}
      >
        Only em units supported. Use the code editor to configure other types.
      </Typography>
    )}
  </>;
}

export default LetterSpacingInput
