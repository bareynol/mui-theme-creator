import React from "react"

import { savedThemesTabId } from "src/components/PreviewNavigationTabs"
import { currentThemeThumbnailId } from "src/components/SavedThemes/SavedThemes"
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

const CurrentThemeTutorialStep = () => {
  useSwitchToTab("saved")
  return (
    <TutorialTooltip anchorId={currentThemeThumbnailId} placement="right">
      This is the theme you're currently editing
    </TutorialTooltip>
  )
}

const AddNewThemesTutorialStep = () => {
  useSwitchToTab("saved")
  return (
    <>
      <TutorialTooltip anchorId={defaultThemesId} placement="top">
        Add sample themes here to check them out
      </TutorialTooltip>
      <TutorialTooltip anchorId={addThemeButtonId} placement="bottom">
        Add a new blank theme here
      </TutorialTooltip>
    </>
  )
}

const SavedThemeListTutorialStep = () => {
  useSwitchToTab("saved")
  return (
    <TutorialTooltip anchorId={savedThemeListId} placement="top">
      Switch between your saved themes, rename, or delete them here
    </TutorialTooltip>
  )
}

export default [
  SavedThemesTabTutorialStep,
  CurrentThemeTutorialStep,
  AddNewThemesTutorialStep,
  SavedThemeListTutorialStep,
]
