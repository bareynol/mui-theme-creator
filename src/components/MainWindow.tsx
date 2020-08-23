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
  IconButton,
  Hidden,
} from "@material-ui/core"
import MuiComponentSamples from "src/components/MuiComponentSamples"
import PreviewWindow from "src/components/PreviewWindow"
import SavedThemes from "src/components/SavedThemes/SavedThemes"
import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "src/state/actions"
import { RootState } from "src/state/types"
import MaterialUiIcon from "mdi-material-ui/MaterialUi"
import BrushIcon from "@material-ui/icons/Brush"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainWindow: {
      overflowY: "auto",
      height: "100%",
    },
    navAppBar: {
      justifyContent: "space-between",
      flexDirection: "row",
    },
    componentsTabRoot: {
      backgroundColor: "#fff", // ensures transparent colors show properly
    },
    tabs: {
      flexGrow: 1,
    },
    tabFlexContainer: {
      justifyContent: "center",
    },
  })
)

export const previewTabId = "preview-tab"
export const componentsTabId = "components-tab"
export const savedThemesTabId = "saved-themes-tab"

const MainWindow = () => {
  const classes = useStyles()
  const activeTab = useSelector((state: RootState) => state.activeTab)
  const dispatch = useDispatch()
  const setTab = React.useCallback(value => dispatch(setActiveTab(value)), [
    dispatch,
  ])

  return (
    <>
      <AppBar position="sticky" color="default" className={classes.navAppBar}>
        <Hidden lgUp>
          <IconButton
            onClick={() => dispatch({ type: "TOGGLE_COMPONENT_NAV" })}
          >
            <MaterialUiIcon />
          </IconButton>
        </Hidden>
        <Tabs
          value={activeTab}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          onChange={(event, value) => setTab(value)}
          classes={{
            root: classes.tabs,
            flexContainer: classes.tabFlexContainer,
          }}
        >
          <Tab label="Preview" value="preview" id={previewTabId} />
          <Tab label="Components" value="components" id={componentsTabId} />
          <Tab label="Saved Themes" value="saved" id={savedThemesTabId} />
        </Tabs>
        <Hidden smUp>
          <IconButton onClick={() => dispatch({ type: "TOGGLE_THEME_CONFIG" })}>
            <BrushIcon />
          </IconButton>
        </Hidden>
      </AppBar>
      <div className={classes.mainWindow}>
        {activeTab === "preview" && <PreviewWindow />}

        {activeTab === "components" && (
          <div className={classes.componentsTabRoot}>
            <ThemeWrapper>
              <MuiComponentSamples />
            </ThemeWrapper>
          </div>
        )}

        {activeTab === "saved" && <SavedThemes />}
      </div>
    </>
  )
}

export default MainWindow
