import { Box, Collapse, Tooltip } from "@mui/material";
import * as colors from "@mui/material/colors";
import { decomposeColor, hslToRgb, recomposeColor, rgbToHex } from '@mui/material/styles';
import React, { useEffect } from "react";



const muiHues = [
  "red",
  "pink",
  "purple",
  "deepPurple",
  "indigo",
  "blue",
  "lightBlue",
  "cyan",
  "teal",
  "green",
  "lightGreen",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deepOrange",
  "brown",
  "blueGrey",
  "grey",
]

const muiShades = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "A100",
  "A200",
  "A400",
  "A700",
]

// record of {"#hexcode": ["hue", "shade"]}
// for all colors in material-ui's spec
let muiColorByHex: Record<string, [string, string]> = {}
for (let i = 0; i < muiHues.length; i++) {
  for (let j = 0; j < muiShades.length; j++) {
    muiColorByHex[colors[muiHues[i]][muiShades[j]]] = [muiHues[i], muiShades[j]]
  }
}

const paletteWidth = 400
const colorTypeWidth = paletteWidth / muiHues.length
const colorStrengthWidth = paletteWidth / muiShades.length

export default function MaterialColorPicker({ color, onChangeComplete }) {
  const [hue, setHue] = React.useState("red")
  const [shade, setShade] = React.useState<string | null>(null)

  useEffect(() => {
    // if incoming color maps to a Material UI color, change the input to match
    if (!color) return
    let hexColor

    const decomposed = decomposeColor(color)
    switch (decomposed.type) {
      case "rgba":
        hexColor = rgbToHex(
          recomposeColor({ type: "rgb", values: decomposed.values.slice(0, 3) })
        )
        break
      case "rgb":
        hexColor = rgbToHex(color)
        break
      case "hsla":
        hexColor = rgbToHex(
          hslToRgb(
            recomposeColor({
              type: "hsl",
              values: decomposed.values.slice(0, 3),
            })
          )
        )
        break
      case "hsl":
        hexColor = rgbToHex(hslToRgb(color))
        break
      default:
        hexColor = color
    }

    const mappedColor = muiColorByHex[hexColor]

    if (mappedColor) {
      setHue(mappedColor[0])
      setShade(mappedColor[1])
    }
  }, [color])

  return (
    <div>
      <div>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          height: "1.5em",
          alignItems: "flex-end",
        }}>
          {muiHues.map(c => (
            <Tooltip
              title={c}
              placement="top"
              key={c}
              TransitionComponent={Collapse}
              arrow
            >
              <Box
                style={{
                  height: hue === c ? "1.5em" : "1em",
                  width: colorTypeWidth,
                  backgroundColor: colors[c]["500"],
                }}
                sx={{ transition: (theme) => theme.transitions.create("height") }}
                onClick={() => setHue(c)}
              />
            </Tooltip>
          ))}
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          height: "1.5em",
        }}>
          {muiShades.map(s => (
            <Tooltip
              title={s}
              key={`${hue ?? "red"}-${s}`}
              placement="bottom"
              TransitionComponent={Collapse}
              arrow
            >
              <div
                style={{
                  height: shade === s ? "1.5em" : "1em",
                  width: colorStrengthWidth,
                  backgroundColor: colors[hue ?? "red"][s],
                }}
                sx={{ transition: (theme) => theme.transitions.create("height") }}
                onClick={() => {
                  setShade(s)
                  onChangeComplete(colors[hue ?? "red"][s])
                }}
              />
            </Tooltip>
          ))}
        </Box>
      </div>
    </div>
  )
}
