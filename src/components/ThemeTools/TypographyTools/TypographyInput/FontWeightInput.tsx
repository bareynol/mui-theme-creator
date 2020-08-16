import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"

const titles = {
  fontWeight: "Font Weight",
  fontWeightLight: "Font Weight Light",
  fontWeightRegular: "Font Weight Regular",
  fontWeightMedium: "Font Weight Medium",
  fontWeightBold: "Font Weight Bold",
}

function FontWeightInput({ value, onChange, property }) {
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => setDisplayValue(value), [value])

  return (
    <>
      <Grid container justify="space-between" alignItems="baseline">
        <Grid item>
          <Typography
            variant="caption"
            color="textSecondary"
          >{`${titles[property]}:`}</Typography>
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

export default FontWeightInput
