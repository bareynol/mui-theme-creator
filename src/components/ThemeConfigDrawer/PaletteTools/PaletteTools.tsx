import React from "react"
import NestedListItem from "src/components/NestedListItem"
import List from "@material-ui/core/List"
import ThemeTypeInput from "./ThemeTypeInput"
import ColorInputListItem from "./ColorInputListItem"
import { Grid, Typography } from "@material-ui/core"
import PaletteSubType from "./PaletteSubType"

const paletteColorTypes = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
]

export default function PaletteTools() {
  return (
    <>
      <Grid
        container
        justify="space-between"
        alignItems="baseline"
        style={{
          paddingLeft: 16,
          paddingRight: 16,
          borderBottom: "1px solid grey",
        }}
      >
        <Grid item>
          <Typography variant="overline">Palette</Typography>
        </Grid>
        <Grid item>
          <ThemeTypeInput />
        </Grid>
      </Grid>
      <PaletteSubType
        title="Background"
        path="palette.background"
        paletteValues={[
          ["Default", "default"],
          ["Paper", "paper"],
        ]}
      />
      <PaletteSubType
        title="Text"
        path="palette.text"
        paletteValues={[
          ["Primary", "primary"],
          ["Secondary", "secondary"],
          ["Disabled", "disabled"],
          ["Hint", "hint"],
        ]}
      />
      {paletteColorTypes.map(colorType => (
        <PaletteSubType
          key={colorType}
          title={colorType}
          path={`palette.${colorType}`}
          paletteValues={[
            ["Main", `main`],
            ["Light", `light`],
            ["Dark", `dark`],
            ["Contrast Text", `contrastText`],
          ]}
        />
      ))}
      <PaletteSubType
        title="Divider"
        path="palette.divider"
        paletteValues={[["Divider", "divider"]]}
      />
    </>
  )
}
