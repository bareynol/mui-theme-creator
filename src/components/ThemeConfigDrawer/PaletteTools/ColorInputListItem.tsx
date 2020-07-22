import React, { useCallback } from "react"
import ListItem from "@material-ui/core/ListItem"
import AutoSetInput from "../AutoSetInput"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ColorInput from "src/components/ColorInput"
import { useDispatch } from "react-redux"
import { setSavedThemeVariable } from "src/state/actions"

export default function ColorInputListItem({
  label,
  getThemeValue,
  path,
  showAuto = false,
}) {
  const themeValue = getThemeValue(path)
  const auto = showAuto && !themeValue.modifiedByUser
  const dispatch = useDispatch()

  const handleColorChange = useCallback(
    color => dispatch(setSavedThemeVariable(path, color)),
    [dispatch]
  )

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
        <ColorInput
          color={themeValue.value}
          onColorChange={handleColorChange}
        />
      </ListItemSecondaryAction>
    </ListItem>
  )
}
