import { Box, InputAdornment, Popover, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { ChromePicker, Color, ColorChangeHandler, HSLColor, RGBColor } from "react-color";
import { ThemeValueChangeEvent } from "src/components/ThemeTools/events";
import MaterialColorPicker from "./MaterialColorPicker";
import { colorFromString } from "./utils";

interface ColorInputProps {
  label: string;
  color: string;
  onColorChange: (color: string) => void;
}

/**
 * The base TextField input for selecting colors.
 * onClick opens a popover with components to help pick colors
 */
export default function ColorInput({ label, color, onColorChange }: ColorInputProps) {
  const [anchorEl, setAnchorEl] = React.useState<Element | null>(null)

  const handleOpenPopover = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClosePopover = () => {
    setAnchorEl(null)
    document.dispatchEvent(ThemeValueChangeEvent())
  }

  const handleColorChange = (value: string) => onColorChange(value)

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    const pastedText = event.clipboardData.getData("text")
    const color = colorFromString(pastedText)
    if (color) {
      handleColorChange(color)
    }
  }

  const popoverOpen = Boolean(anchorEl)
  return (
    <div>
      <TextField
        label={label}
        onClick={handleOpenPopover}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box
                sx={{
                  width: "1em",
                  height: "1em",
                  border: "1px solid grey",
                  bgcolor: color
                }}
              />
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ shrink: true }}
        size="small"
        value={color}
        onPaste={handlePaste}
        variant="standard"
      />
      <Popover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        PaperProps={{
          sx: {
            display: "flex",
            flexDirection: "column",
            borderRadius: 0,
            alignItems: "center",
          }
        }}
        disableAutoFocus
        disableEnforceFocus
      >
        <ColorPicker color={color} onChangeComplete={handleColorChange} />
      </Popover>
    </div>
  )
}

interface ColorObject {
  hex: string;
  hsl?: HSLColor;
  rgb: RGBColor;
}

interface ColorPickerProps {
  color: string;
  onChangeComplete: Function;
}
/**
 * Creates the ChromePicker and MaterialColorPicker and
 * handles/formats events from ChromePicker
 */
function ColorPicker({ color, onChangeComplete }: ColorPickerProps) {
  const [inputValue, setInputValue] = React.useState<Color>("#fff")
  useEffect(() => {
    setInputValue(color)
  }, [color])

  const handleChange = (colorObject: ColorObject, event?: React.ChangeEvent<HTMLInputElement>) => {
    if (colorObject.rgb.a === 1) {
      setInputValue(colorObject.hex)
      return colorObject.hex
    } else {
      const rgb = `rgba(${colorObject.rgb.r},${colorObject.rgb.g},${colorObject.rgb.b},${colorObject.rgb.a})`
      setInputValue(rgb)
      return rgb
    }
  }

  const handleChangeComplete = (colorObject: ColorObject, event: React.ChangeEvent<HTMLInputElement>) => {
    const colorString = handleChange(colorObject, event)
    onChangeComplete(colorString, null)
  }

  return (
    <>
      <MaterialColorPicker
        color={inputValue}
        onChangeComplete={onChangeComplete}
      />
      <ChromePicker
        color={inputValue}
        onChange={handleChange}
        onChangeComplete={handleChangeComplete}
      />
    </>
  )
}
