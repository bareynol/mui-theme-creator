import toolPanelSteps from "./toolPanelSteps"
import codeEditorSteps from "./codeEditorSteps"
import previewWindowSteps from "./previewWindowSteps"
import componentSamplesSteps from "./componentSamplesSteps"
import savedThemesSteps from "./savedThemesSteps"

export default [
  ...previewWindowSteps,
  ...componentSamplesSteps,
  ...savedThemesSteps,
  ...toolPanelSteps,
  ...codeEditorSteps,
]
