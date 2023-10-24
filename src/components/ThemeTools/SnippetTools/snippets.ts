import { SnippetModification } from "./types"
import { grey } from "@mui/material/colors"
import { defaultTheme } from "src/siteTheme"

const snippets: Array<SnippetModification> = [
  {
    title: "Spacing",
    info: "Change the spacing created by theme.spacing()",
    docs: "https://material-ui.com/customization/spacing/",
    configs: [{ path: "spacing", value: 8 }],
  },
  {
    title: "Right-To-Left",
    info: "Change the direction of the Material-UI components to RTL",
    docs: "https://material-ui.com/customization/spacing/",
    configs: [{ path: "direction", value: "rtl" }],
  },
  {
    title: "Border Radius",
    configs: [{ path: "shape.borderRadius", value: 4 }],
  },
  {
    title: "Set custom AppBar color (color set in code editor)",
    configs: [
      {
        path: "overrides.MuiAppBar.colorInherit",
        value: { backgroundColor: "#689f38", color: "#fff" },
      },
      { path: "props.MuiAppBar.color", value: "inherit" },
    ],
  },
  {
    title: "Set AppBar Color to Secondary",
    configs: [{ path: "props.MuiAppBar.color", value: "secondary" }],
  },
  {
    title: "Set AppBar Color to Default",
    configs: [{ path: "props.MuiAppBar.color", value: "default" }],
  },
  {
    title: "Set AppBar Color to Transparent",
    configs: [{ path: "props.MuiAppBar.color", value: "transparent" }],
  },
  {
    title: "iOS Switches",
    configs: [
      {
        path: "components.MuiSwitch",
        value: {
          styleOverrides: {
            root: {
              width: 46,
              height: 27,
              padding: 0,
              margin: 8,
            },
            switchBase: {
              padding: 1,
              "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
                transform: "translateX(16px)",
                color: "#fff",
                "& + $track": {
                  opacity: 1,
                  border: "none",
                },
              },
            },
            thumb: {
              width: 24,
              height: 24,
            },
            track: {
              borderRadius: 26 / 2,
              border: `1px solid ${grey[400]}`,
              backgroundColor: grey[50],
              opacity: 1,
              transition: defaultTheme.transitions.create([
                "background-color",
                "border",
              ]),
            },
          },
        },
      },
    ],
  },
  {
    title: "Gradient Buttons",
    configs: [
      {
        path: "components.MuiButton",
        value: {
          styleOverrides: {
            root: {
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              border: 0,
              borderRadius: 3,
              boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
              color: "white",
              height: 48,
              padding: "0 30px",
            },
          },
        },
      },
    ],
  },
  {
    title: "Disable Ripple",
    configs: [
      {
        path: "components.MuiButtonBase.defaultProps.disableRipple",
        value: true,
      },
    ],
  },
  {
    title: "Dense Lists, Tables, Menus",
    configs: [
      { path: "props.MuiList.dense", value: true },
      { path: "props.MuiMenuItem.dense", value: true },
      { path: "props.MuiTable.size", value: "small" },
    ],
  },
  {
    title: "Dense Buttons, Inputs",
    configs: [
      { path: "props.MuiButton.size", value: "small" },
      { path: "props.MuiButtonGroup.size", value: "small" },
      { path: "props.MuiCheckbox.size", value: "small" },
      { path: "props.MuiFab.size", value: "small" },
      { path: "props.MuiFormControl.margin", value: "dense" },
      { path: "props.MuiFormControl.size", value: "small" },
      { path: "props.MuiFormHelperText.margin", value: "dense" },
      { path: "props.MuiIconButton.size", value: "small" },
      { path: "props.MuiInputBase.margin", value: "dense" },
      { path: "props.MuiInputLabel.margin", value: "dense" },
      { path: "props.MuiRadio.size", value: "small" },
      { path: "props.MuiSwitch.size", value: "small" },
      { path: "props.MuiTextField.margin", value: "dense" },
      { path: "props.MuiTextField.size", value: "small" },
    ],
  },
  {
    title: "Tooltip arrows",
    configs: [{ path: "props.MuiTooltip.arrow", value: true }],
  },
]

export default snippets
