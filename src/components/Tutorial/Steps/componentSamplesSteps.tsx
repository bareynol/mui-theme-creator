import React from "react"

import { componentsTabId } from "src/components/MainWindow"
import { componentNavDrawerId } from "src/components/ComponentNavDrawer"

import TutorialTooltip from "../TutorialTooltip"
import Typography from "@material-ui/core/Typography"

import { useSwitchToTab } from "./hooks"

const ComponentsTabTutorialStep = () => {
  useSwitchToTab("components")
  return (
    <>
      <TutorialTooltip anchorId={componentsTabId} placement="bottom">
        <Typography variant="h5">This is the Components Tab</Typography>
        <Typography>View your theme on the Material-UI components</Typography>
      </TutorialTooltip>
      <TutorialTooltip anchorId={componentNavDrawerId} placement="right">
        Click a component name to navigate to it
      </TutorialTooltip>
    </>
  )
}

export default [ComponentsTabTutorialStep]
