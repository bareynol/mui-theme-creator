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
    <NestedListItem primary="Palette" openOnMount>
      <List disablePadding>
        <ThemeTypeInput getThemeValue={getThemeValue} />
        <NestedListItem primary="Background">
          <List disablePadding>
            <ColorInputListItem
              label="Default"
              getThemeValue={getThemeValue}
              path="palette.background.default"
              showAuto
            />
            <ColorInputListItem
              label="Paper"
              getThemeValue={getThemeValue}
              path="palette.background.paper"
              showAuto
            />
          </List>
        </NestedListItem>
        <NestedListItem primary="Text">
          <List disablePadding>
            <ColorInputListItem
              label="Primary"
              getThemeValue={getThemeValue}
              path={`palette.text.primary`}
              showAuto
            />
            <ColorInputListItem
              label="Secondary"
              getThemeValue={getThemeValue}
              path={`palette.text.secondary`}
              showAuto
            />
            <ColorInputListItem
              label="Disabled"
              getThemeValue={getThemeValue}
              path={`palette.text.disabled`}
              showAuto
            />
            <ColorInputListItem
              label="Hint"
              getThemeValue={getThemeValue}
              path={`palette.text.hint`}
              showAuto
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
