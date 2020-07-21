import React from "react"
import NestedListItem from "src/components/NestedListItem"
import List from "@material-ui/core/List"
import ThemeTypeInput from "./ThemeTypeInput"
import ColorInputListItem from "./ColorInputListItem"

const paletteColorTypes = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
]

export default function PaletteTools({ getThemeValue }) {
  return (
    <NestedListItem primary="Palette">
      <List disablePadding>
        <ThemeTypeInput />
        <NestedListItem primary="Background">
          <List disablePadding>
            <ColorInputListItem
              label="Default"
              getThemeValue={getThemeValue}
              path="palette.background.default"
            />
            <ColorInputListItem
              label="Paper"
              getThemeValue={getThemeValue}
              path="palette.background.paper"
            />
          </List>
        </NestedListItem>
        {paletteColorTypes.map(colorType => (
          <NestedListItem primary={colorType} key={colorType}>
            <List disablePadding>
              <ColorInputListItem
                label="Main"
                getThemeValue={getThemeValue}
                path={`palette.${colorType}.main`}
              />
              <ColorInputListItem
                label="Light"
                getThemeValue={getThemeValue}
                path={`palette.${colorType}.light`}
                showAuto
              />
              <ColorInputListItem
                label="Dark"
                getThemeValue={getThemeValue}
                path={`palette.${colorType}.dark`}
                showAuto
              />
              <ColorInputListItem
                label="Contrast Text"
                getThemeValue={getThemeValue}
                path={`palette.${colorType}.contrastText`}
                showAuto
              />
            </List>
          </NestedListItem>
        ))}
      </List>
    </NestedListItem>
  )
}
