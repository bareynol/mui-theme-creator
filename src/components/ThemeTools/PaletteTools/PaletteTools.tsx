import React from "react"
import ThemeTypeInput from "./ThemeTypeInput"
import { Typography, AccordionSummary, Accordion } from "@material-ui/core"
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
      <Accordion>
        <AccordionSummary>
          <Typography variant="body2">Type</Typography>
          <ThemeTypeInput />
        </AccordionSummary>
      </Accordion>
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
        path="palette"
        paletteValues={[["Divider", "divider"]]}
      />
    </>
  )
}
