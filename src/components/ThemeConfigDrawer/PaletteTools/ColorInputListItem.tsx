import React from "react"
import ListItem from "@material-ui/core/ListItem"
import AutoSetInput from "../AutoSetInput"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ColorInput from "src/components/ColorInput"

export default function ColorInputListItem({
  label,
  getThemeValue,
  path,
  showAuto = false,
}) {
  const themeValue = getThemeValue(path)
  const auto = showAuto && !themeValue.modifiedByUser
  return (
    <ListItem>
      {showAuto && (
        <AutoSetInput
          autoValue={auto}
          path={path}
          getThemeValue={getThemeValue}
        />
      )}
      <ListItemText inset={!showAuto} primary={label} />
      <ListItemSecondaryAction>
        <ColorInput color={themeValue.value} />
      </ListItemSecondaryAction>
    </ListItem>
  )
}
