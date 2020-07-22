import React, { useState, useCallback, useEffect } from "react"
import { TextField, InputAdornment, Popover } from "@material-ui/core"
import { ChromePicker } from "react-color"

export default function ColorInput({ color, onColorChange }) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  // const [inputValue, setInputValue] = React.useState<string | null>("color")

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClosePopover = () => {
    setAnchorEl(null)
  }

  const handleColorChange = colorString => {
    console.log("handleColorChange", colorString)
    onColorChange(colorString)
  }

  const popoverOpen = Boolean(anchorEl)
  // console.log("colorInput", color, inputValue)
  return (
    <div>
      <TextField
        onClick={handleOpenPopover}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <div
                style={{ width: "1em", height: "1em", backgroundColor: color }}
              />
            </InputAdornment>
          ),
        }}
        InputLabelProps={{ shrink: true }}
        size="small"
        value={color}
        style={{ width: 150 }}
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
          style: {
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "row",
            borderRadius: 0,
          },
        }}
        elevation={0}
      >
        <ColorPicker color={color} onChangeComplete={handleColorChange} />
      </Popover>
    </div>
  )
}

function ColorPicker({ color, onChangeComplete }) {
  const [inputValue, setInputValue] = React.useState<string | null>("#fff")
  useEffect(() => {
    setInputValue(color)
  }, [color])

  const handleChange = (colorObject, event) => {
    if (colorObject.rgb.a === 1) {
      setInputValue(colorObject.hex)
      return colorObject.hex
    } else {
      const rgb = `rgba(${colorObject.rgb.r},${colorObject.rgb.g},${colorObject.rgb.b},${colorObject.rgb.a})`
      setInputValue(rgb)
      return rgb
    }
  }

  const handleChangeComplete = (colorObject, event) => {
    const colorString = handleChange(colorObject, event)
    onChangeComplete(colorString)
  }

  return (
    <ChromePicker
      color={inputValue}
      onChange={handleChange}
      onChangeComplete={handleChangeComplete}
    />
  )
}
