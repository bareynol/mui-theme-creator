import React from "react"
import AppBarExample from "./AppBar"
import AccordionExample from "./Accordion"
import TypographyExample from "./Typography"
import ButtonExample from "./Button"
import CheckboxesExample from "./Checkboxes"
import FabExample from "src/components/Examples/FAB"
import RadioExample from "src/components/Examples/RadioGroup"

// Alphabetically sorted list of all Material-UI component examples

// items skipped for now:
// Button Group
// Date/Time inputs
// Transfer List

export default [
  {
    id: "Accordion",
    title: "Accordion",
    component: <AccordionExample />,
    docs: "https://material-ui.com/components/accordion/",
  },
  {
    id: "Appbar",
    title: "App Bar",
    component: <AppBarExample />,
    docs: "https://material-ui.com/components/app-bar/",
  },
  {
    id: "Buttons",
    title: "Buttons",
    component: <ButtonExample />,
    docs: "https://material-ui.com/components/buttons/",
  },
  {
    id: "Checkboxes",
    title: "Checkboxes",
    component: <CheckboxesExample />,
    docs: "https://material-ui.com/components/checkboxes/",
  },
  {
    id: "FloatingActionButton",
    title: "Floating Action Button",
    component: <FabExample />,
    docs: "https://material-ui.com/components/floating-action-button/",
  },
  {
    id: "Radio",
    title: "Radio",
    component: <RadioExample />,
    docs: "https://material-ui.com/components/radio-buttons/",
  },
  {
    id: "Typography",
    title: "Typography",
    component: <TypographyExample />,
    docs: "https://material-ui.com/components/typography/",
  },
]
