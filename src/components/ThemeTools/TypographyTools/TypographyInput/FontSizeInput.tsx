import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Slider from "@material-ui/core/Slider"
import { makeStyles, Theme, createStyles } from "@material-ui/core"

const supportedFontSizeTypes = ["rem", "em", "px", "pt"]
const fontSizeSliderProps: Record<string, object> = {
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
    } else {
      return undefined
    }
  }
  return "px"
}

const getFontSizeValue = (value, fontSizeUnit) => {
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    valueLabel: {
      marginRight: theme.spacing(),
    },
    disabledText: {
      fontStyle: "italic",
    },
  })
)

function FontSizeInput({ value, onChange, property }) {
  const classes = useStyles()
  const [fontSizeUnit, setFontSizeUnit] = useState<string | undefined>(
    getFontSizeUnit(value)
  )
  const [displayValue, setDisplayValue] = useState(
    getFontSizeValue(value, fontSizeUnit)
  )

  useEffect(() => {
    const unit = getFontSizeUnit(value)
    setFontSizeUnit(unit)
    setDisplayValue(getFontSizeValue(value, unit))
  }, [value])

  const disabled = fontSizeUnit == null
  const sliderProps = disabled ? {} : fontSizeSliderProps[fontSizeUnit!]

  return (
    <>
      <Grid container justify="space-between" alignItems="baseline">
        <Grid item>
          <Typography variant="caption" color="textSecondary">
            {titles[property]}
          </Typography>
        </Grid>
        <Grid item>
          {!disabled && (
            <Typography display="inline" className={classes.valueLabel}>
              {displayValue}
            </Typography>
          )}
          <Select
            disabled={disabled}
            value={fontSizeUnit || ""}
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
        onChange={(event, newDisplayValue) => setDisplayValue(newDisplayValue)}
        onChangeCommitted={(event, newValue) =>
          onChange(
            event,
            fontSizeUnit === "px" ? newValue : `${newValue}${fontSizeUnit}`
          )
        }
      />
      {disabled && (
        <Typography
          color="textSecondary"
          variant="caption"
          className={classes.disabledText}
        >
          Only em units supported. Use the code editor to configure other types.
        </Typography>
      )}
    </>
  )
}

export default FontSizeInput
