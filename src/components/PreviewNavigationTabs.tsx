import React from "react"
import ThemeWrapper from "src/components/ThemeWrapper"
import {
  Container,
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Theme,
  createStyles,
} from "@material-ui/core"
import MuiComponentSamples from "src/components/MuiComponentSamples"
import PreviewWindow from "src/components/PreviewWindow"
import SavedThemes from "src/components/SavedThemes/SavedThemes"
import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "src/state/actions"
import { RootState } from "src/state/types"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    previewTabsRoot: {
      flex: 1,
      height: "100%",
      width: "calc(100% - 400px)",
    },
    mainWindow: {
      height: "calc(100vh - 64px - 48px)", // full height minus the size of the tab toolbar
      overflowY: "auto",
    },
    componentsTabRoot: {
      backgroundColor: "#fff", // ensures transparent colors show properly
    },
  })
)

export const previewTabId = "preview-tab"
export const componentsTabId = "components-tab"
export const savedThemesTabId = "saved-themes-tab"

const PreviewNavigationTabs = () => {
  const classes = useStyles()
  const activeTab = useSelector((state: RootState) => state.activeTab)
  const dispatch = useDispatch()
  const setTab = React.useCallback(value => dispatch(setActiveTab(value)), [
    dispatch,
  ])

  return (
    <div className={classes.previewTabsRoot}>
      <AppBar position="sticky" color="default">
        <Tabs
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
          centered
          onChange={(event, value) => setTab(value)}
        >
          <Tab label="Preview" value="preview" id={previewTabId} />
          <Tab label="Components" value="components" id={componentsTabId} />
          <Tab label="Saved Themes" value="saved" id={savedThemesTabId} />
        </Tabs>
      </AppBar>
      <div className={classes.mainWindow}>
        {activeTab === "preview" && <PreviewWindow />}

        {activeTab === "components" && (
          <div className={classes.componentsTabRoot}>
            <ThemeWrapper>
              <Container maxWidth="md">
                <MuiComponentSamples />
              </Container>
            </ThemeWrapper>
          </div>
        )}

        {activeTab === "saved" && (
          <Container>
            <SavedThemes />
          </Container>
        )}
      </div>
    </div>
  )
}

export default PreviewNavigationTabs
