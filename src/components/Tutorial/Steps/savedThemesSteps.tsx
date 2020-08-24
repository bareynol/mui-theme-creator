import React from "react"

import { savedThemesTabId } from "src/components/MainWindow"
import { addThemeButtonId } from "src/components/SavedThemes/AddThemeButton"
import { defaultThemesId } from "src/components/SavedThemes/DefaultThemes"
import { savedThemeListId } from "src/components/SavedThemes/SavedThemeList"

import TutorialTooltip from "../TutorialTooltip"
import Typography from "@material-ui/core/Typography"

import { useSwitchToTab } from "./hooks"

const SavedThemesTabTutorialStep = () => {
  useSwitchToTab("saved")
  return (
    <TutorialTooltip anchorId={savedThemesTabId} placement="bottom">
      <Typography variant="h5">This is the Saved Themes Tab</Typography>
    </TutorialTooltip>
  )
}

const AddNewThemesTutorialStep = () => {
  // useSwitchToTab("saved")
  return (
    <>
      <TutorialTooltip anchorId={savedThemeListId} placement="right">
        <Typography>Switch between your saved themes here.</Typography>
        <Typography>You can rename, or delete them here too</Typography>
      </TutorialTooltip>
      <TutorialTooltip anchorId={defaultThemesId} placement="bottom">
        Add sample themes here to check them out
      </TutorialTooltip>
      <TutorialTooltip anchorId={addThemeButtonId} placement="top">
        Add a new blank theme here
      </TutorialTooltip>
    </>
  )
}

export default [SavedThemesTabTutorialStep, AddNewThemesTutorialStep]
