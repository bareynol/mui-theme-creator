import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"

function LineHeightInput({ value, onChange }) {
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => setDisplayValue(value), [value])

  return (
    <>
      <Grid container justify="space-between" alignItems="baseline">
        <Grid item>
          <Typography variant="caption" color="textSecondary">
            Line Height:
          </Typography>
        </Grid>
        <Grid item>
          <Typography display="inline">{displayValue}</Typography>
        </Grid>
      </Grid>
      <Slider
        value={displayValue}
        min={0.5}
        max={3}
        step={0.01}
        onChange={(event, newDisplayValue) => setDisplayValue(newDisplayValue)}
        onChangeCommitted={onChange}
      />
    </>
  )
}

export default LineHeightInput
