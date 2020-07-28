import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Slider from "@material-ui/core/Slider"

const supportedFontSizeTypes = ["rem", "em", "px", "pt"]
const fontSizeSliderProps = {
  px: { min: 5, max: 200 },
  pt: { min: 5, max: 200 },
  em: { min: 0.5, max: 10, step: 0.1 },
  rem: { min: 0.5, max: 10, step: 0.1 },
}

const getFontSizeUnit = value => {
  if (typeof value === "string") {
    if (value.endsWith("pt")) {
      return "pt"
    } else if (value.endsWith("rem")) {
      return "rem"
    } else if (value.endsWith("em")) {
      return "em"
    }
  }
  return "px"
}

const getFontSizeValue = (value, fontSizeUnit) => {
  return typeof value === "string"
    ? parseFloat(value.substring(0, value.lastIndexOf(fontSizeUnit)))
    : value
}

const titles = { fontSize: "Font Size", htmlFontSize: "HTML Font Size" }

function FontSizeInput({ value, onChange, property }) {
  const [fontSizeUnit, setFontSizeUnit] = useState(getFontSizeUnit(value))
  const [displayValue, setDisplayValue] = useState(
    getFontSizeValue(value, fontSizeUnit)
  )

  useEffect(() => {
    const unit = getFontSizeUnit(value)
    setFontSizeUnit(unit)
    setDisplayValue(getFontSizeValue(value, unit))
  }, [value])

  return (
    <>
      <Grid container justify="space-between" alignItems="baseline">
        <Grid item>
          <Typography variant="caption" color="textSecondary">
            {titles[property]}
          </Typography>
        </Grid>
        <Grid item>
          <Typography display="inline" style={{ marginRight: 8 }}>
            {displayValue}
          </Typography>
          <Select
            value={fontSizeUnit}
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
        {...fontSizeSliderProps[fontSizeUnit]}
        onChange={(event, newDisplayValue) => setDisplayValue(newDisplayValue)}
        onChangeCommitted={(event, newValue) =>
          onChange(
            event,
            fontSizeUnit === "px" ? newValue : `${newValue}${fontSizeUnit}`
          )
        }
      />
    </>
  )
}

export default FontSizeInput
