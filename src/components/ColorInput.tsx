import React from "react"
import { TextField, InputAdornment } from "@material-ui/core"

export default function ColorInput({ color }) {
  return (
    <TextField
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
  )
}
