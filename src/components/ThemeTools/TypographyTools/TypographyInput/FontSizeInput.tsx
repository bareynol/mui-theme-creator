import Grid from "@mui/material/Grid"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import Slider from "@mui/material/Slider"
import Typography from "@mui/material/Typography"
import React, { SyntheticEvent, useEffect, useState } from "react"

const supportedFontSizeTypes = ["rem", "em", "px", "pt"]
const fontSizeSliderProps: Record<string, object> = {
  px: { min: 5, max: 200 },
  pt: { min: 5, max: 200 },
  em: { min: 0.5, max: 10, step: 0.1 },
  rem: { min: 0.5, max: 10, step: 0.1 },
}

const getFontSizeUnit = (value: string | number) => {
  if (typeof value === "string") {
    if (value.endsWith("pt")) {
      return "pt"
    } else if (value.endsWith("rem")) {
      return "rem"
    } else if (value.endsWith("em")) {
      return "em"
    } else {
      return undefined
    }
  }
  return "px"
}

const getFontSizeValue = (value: number | string, fontSizeUnit?: string) => {
  if (fontSizeUnit == undefined) {
    return 0
  }
  return typeof value === "string"
    ? parseFloat(value.substring(0, value.lastIndexOf(fontSizeUnit)))
    : value
}

const titles: Record<string, string> = {
  fontSize: "Font Size",
  htmlFontSize: "HTML Font Size",
}

interface Props {
  value: number | string;
  onChange: (event: Event | SyntheticEvent<Element, Event> | SelectChangeEvent<string>, value: number | string) => void;
  property: string;
}
function FontSizeInput({ value, onChange, property }: Props) {
  const [fontSizeUnit, setFontSizeUnit] = useState<string | undefined>(
    getFontSizeUnit(value)
  )
  const [displayValue, setDisplayValue] = useState<number>(
    getFontSizeValue(value, fontSizeUnit)
  )

  useEffect(() => {
    const unit = getFontSizeUnit(value)
    setFontSizeUnit(unit)
    setDisplayValue(getFontSizeValue(value, unit))
  }, [value])

  const disabled = fontSizeUnit == null
  const sliderProps = disabled ? {} : fontSizeSliderProps[fontSizeUnit!]

  return <>
    <Grid container justifyContent="space-between" alignItems="baseline">
      <Grid item>
        <Typography variant="caption" color="textSecondary">
          {titles[property]}
        </Typography>
      </Grid>
      <Grid item>
        {!disabled && (
          <Typography display="inline" sx={{ mr: 1 }}>
            {displayValue}
          </Typography>
        )}
        <Select
          disabled={disabled}
          value={fontSizeUnit || ""}
          variant="standard"
          onChange={event => {
            setFontSizeUnit(event.target.value)
            onChange(
              event,
              event.target.value === "px"
                ? displayValue
                : `${displayValue}${event.target.value}`
            )
          }}
          margin="dense"
        >
          {supportedFontSizeTypes.map(t => (
            <MenuItem key={t} value={t}>
              {t}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
    <Slider
      value={displayValue}
      disabled={disabled}
      {...sliderProps}
      onChange={(event, newDisplayValue) => {
        const newVal = Array.isArray(newDisplayValue) ? newDisplayValue[0] : newDisplayValue;
        setDisplayValue(newVal)
      }}
      onChangeCommitted={(event, newValue) => {
        const newVal = Array.isArray(newValue) ? newValue[0] : newValue;

        onChange(
          event,
          fontSizeUnit === "px" ? newVal : `${newVal}${fontSizeUnit}`
        )
      }
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

export default FontSizeInput
