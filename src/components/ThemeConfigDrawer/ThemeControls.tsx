import React, { useCallback } from "react"
import {
  ListSubheader,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Switch,
  ListItemIcon,
  Checkbox,
  FormControlLabel,
  Theme,
  createMuiTheme,
  ThemeOptions,
} from "@material-ui/core"
import NestedListItem from "../NestedListItem"
import ThemeTypeInput from "./PaletteTools/ThemeTypeInput"
import ColorInput from "../ColorInput"
import { RootState } from "src/state/types"
import { useSelector } from "react-redux"
import { resolvePath } from "src/utils"
import AutoSetInput from "./AutoSetInput"
import ColorInputListItem from "./PaletteTools/ColorInputListItem"
import PaletteTools from "./PaletteTools/PaletteTools"

export default function ThemeControls() {
  // the object that's being piped into createMuiTheme by the ThemeWrapper
  const savedThemeObject: ThemeOptions = useSelector(
    (state: RootState) => state.themeObject
  )

  // a Theme object created using the configs
  const fullMuiTheme: Theme = createMuiTheme(savedThemeObject)

  // get the value of a key path in the currently shown theme
  const getThemeValue = useCallback(
    (path: string) => {
      const valFromSaved: any = resolvePath(savedThemeObject, path)
      if (valFromSaved !== undefined) {
        return {
          modifiedByUser: true,
          value: valFromSaved,
        }
      }
      return {
        modifiedByUser: false,
        value: resolvePath(fullMuiTheme, path),
      }
    },
    [savedThemeObject, fullMuiTheme]
  )

  return (
    <>
      <PaletteTools getThemeValue={getThemeValue} />
      {/* <NestedListItem primary="Palette">
        <List disablePadding>
          <ThemeTypeInput />
          <NestedListItem primary="Background">
            <List disablePadding>
              <ColorInputListItem
                label="Default"
                themeValue={getThemeValue("palette.background.default")}
              />
              <ColorInputListItem
                label="Paper"
                themeValue={getThemeValue("palette.background.paper")}
              />
            </List>
          </NestedListItem>
          <NestedListItem primary="Primary">
            <List disablePadding>
              <ColorInputListItem
                label="Main"
                themeValue={getThemeValue("palette.primary.main")}
              />
              <ColorInputListItem
                label="Light"
                themeValue={getThemeValue("palette.primary.light")}
                showAuto
              />
              <ColorInputListItem
                label="Dark"
                themeValue={getThemeValue("palette.primary.dark")}
                showAuto
              />
              <ColorInputListItem
                label="Contrast Text"
                themeValue={getThemeValue("palette.primary.contrastText")}
                showAuto
              />
            </List>
          </NestedListItem>
          <NestedListItem primary="Secondary">
            <List disablePadding>
              <ColorInputListItem
                label="Main"
                themeValue={getThemeValue("palette.secondary.main")}
              />
              <ColorInputListItem
                label="Light"
                themeValue={getThemeValue("palette.secondary.light")}
                showAuto
              />
              <ColorInputListItem
                label="Dark"
                themeValue={getThemeValue("palette.secondary.dark")}
                showAuto
              />
              <ColorInputListItem
                label="Contrast Text"
                themeValue={getThemeValue("palette.secondary.contrastText")}
                showAuto
              />
            </List>
          </NestedListItem>
        </List>
      </NestedListItem> */}
    </>
  )
}

// const ColorInputListItem = ({ label, themeValue, showAuto = false }) => {
//   const auto = showAuto && !themeValue.modifiedByUser
//   return (
//     <ListItem>
//       {showAuto && (
//         <AutoSetInput
//           autoValue={auto}
//           onAutoSet={() => {}}
//           onAutoRemoved={() => {}}
//         />
//       )}
//       {/* {showAuto && (
//         <ListItemIcon>
//           <div
//             style={{
//               marginLeft: -11,
//               marginRight: 16,
//               display: "inline-flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Checkbox color="default" checked={auto} />
//             <Typography
//               variant="caption"
//               color="textSecondary"
//               style={{ position: "absolute", bottom: 0 }}
//             >
//               Auto
//             </Typography>
//           </div>
//         </ListItemIcon>
//       )} */}
//       <ListItemText inset={!showAuto} primary={label} />
//       <ListItemSecondaryAction>
//         <ColorInput color={themeValue.value} />
//       </ListItemSecondaryAction>
//     </ListItem>
//   )
// }
