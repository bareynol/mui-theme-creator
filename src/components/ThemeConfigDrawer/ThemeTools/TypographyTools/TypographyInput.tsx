import React, { useCallback, useState, useEffect } from "react"
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
  Slider,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core"
import { useThemeValueInfo } from "src/state/selectors"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    resetButton: {
      textTransform: "capitalize",
    },
    disabledButton: {
      fontStyle: "italic",
    },
    inputContainer: {
      flex: 1,
    },
  })
)

export default function TypographyInput({ label, variantPath, property }) {
  const classes = useStyles()
  const path = `${variantPath}.${property}`
  const themeValueInfo = useThemeValueInfo(path)
  const dispatch = useDispatch()

  const handleValueChange = useCallback(
    (event, value) => dispatch(setSavedThemeVariable(path, value)),
    [dispatch]
  )

  const handleReset = useCallback(
    () => dispatch(removeSavedThemeVariable(path)),
    [dispatch]
  )

  return (
    <Grid
      container
      justify="space-between"
      alignItems="baseline"
      style={{ marginBottom: 0 }}
    >
      <Grid item className={classes.inputContainer}>
        <TypographyPropertyInput
          property={property}
          value={themeValueInfo.value}
          onChange={handleValueChange}
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
  )
}

function TypographyPropertyInput({ property, ...props }) {
  switch (property) {
    case "fontSize":
      return <FontSizeInput {...props} />
    case "fontWeight":
      return <FontWeightInput {...props} />
    default:
      return <div></div>
  }
}

function FontWeightInput({ value, onChange }) {
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => setDisplayValue(value), [value])

  return (
    <>
      <Grid container justify="space-between" alignItems="baseline">
        <Grid item>
          <Typography variant="body2">Font Weight:</Typography>
        </Grid>
        <Grid item>
          <Typography display="inline">{displayValue}</Typography>
        </Grid>
      </Grid>
      <Slider
        value={displayValue}
        min={100}
        max={1000}
        step={100}
        onChange={(event, newDisplayValue) => setDisplayValue(newDisplayValue)}
        onChangeCommitted={onChange}
      />
    </>
  )
}

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

function FontSizeInput({ value, onChange }) {
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
          <Typography variant="body2">Font Size:</Typography>
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
