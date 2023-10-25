import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React from "react";

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
]

function valuetext(value: number) {
  return `${value}°C`
}

export default function SliderExample() {

  const [value, setValue] = React.useState<number | number[]>(30)

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>

      <Typography id="disabled-slider" gutterBottom>
        Disabled slider
      </Typography>
      <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" />

      <Typography id="discrete-slider-always" gutterBottom>
        Always visible
      </Typography>
      <Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  )
}
