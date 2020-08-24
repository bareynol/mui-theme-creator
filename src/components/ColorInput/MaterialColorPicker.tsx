import React, { useEffect } from "react"
import * as colors from "@material-ui/core/colors"
import {
  makeStyles,
  Theme,
  createStyles,
  Tooltip,
  Collapse,
} from "@material-ui/core"

import {
  decomposeColor,
  recomposeColor,
  rgbToHex,
  hslToRgb,
} from "@material-ui/core/styles/colorManipulator"

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paletteContainer: {
      display: "flex",
      flexDirection: "row",
      height: "1.5em",
      "&$colorType": {
        alignItems: "flex-end",
      },
    },
    colorType: {},
    colorItem: {
      transition: theme.transitions.create("height"),
    },
  })
)

export default function MaterialColorPicker({ color, onChangeComplete }) {
  const [hue, setHue] = React.useState("red")
  const [shade, setShade] = React.useState<string | null>(null)
  const classes = useStyles()

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
        <div className={`${classes.paletteContainer} ${classes.colorType}`}>
          {muiHues.map(c => (
            <Tooltip
              title={c}
              placement="top"
              key={c}
              TransitionComponent={Collapse}
              arrow
            >
              <div
                style={{
                  height: hue === c ? "1.5em" : "1em",
                  width: colorTypeWidth,
                  backgroundColor: colors[c]["500"],
                }}
                className={classes.colorItem}
                onClick={() => setHue(c)}
              />
            </Tooltip>
          ))}
        </div>
        <div className={classes.paletteContainer}>
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
                className={classes.colorItem}
                onClick={() => {
                  setShade(s)
                  onChangeComplete(colors[hue ?? "red"][s])
                }}
              />
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  )
}
