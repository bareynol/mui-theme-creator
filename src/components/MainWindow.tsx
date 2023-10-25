import BrushIcon from "@mui/icons-material/Brush";
import { AppBar, Box, Hidden, IconButton, Tab, Tabs } from "@mui/material";
import MaterialUiIcon from "mdi-material-ui/MaterialUi";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MuiComponentSamples from "src/components/MuiComponentSamples";
import PreviewWindow from "src/components/PreviewWindow";
import SavedThemes from "src/components/SavedThemes/SavedThemes";
import ThemeWrapper from "src/components/ThemeWrapper";
import { setActiveTab } from "src/state/actions";
import { RootState } from "src/state/types";

export const previewTabId = "preview-tab"
export const componentsTabId = "components-tab"
export const savedThemesTabId = "saved-themes-tab"

const tabStyle = {
  minWidth: { sm: 160 }
};

const MainWindow = () => {
  const activeTab = useSelector((state: RootState) => state.activeTab)
  const dispatch = useDispatch()
  const setTab = React.useCallback(value => dispatch(setActiveTab(value)), [
    dispatch,
  ])

  return <>
    <AppBar position="sticky" color="default" sx={{
      justifyContent: "space-between",
      flexDirection: "row",
    }}>
      <Hidden lgUp>
        <IconButton onClick={() => dispatch({ type: "TOGGLE_COMPONENT_NAV" })} size="large">
          <MaterialUiIcon />
        </IconButton>
      </Hidden>
      <Tabs
        value={activeTab}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        onChange={(event, value) => setTab(value)}
        sx={{
          flexGrow: 1,
          '& .MuiTabs-flexContainer': {
            justifyContent: "center",
          },
        }}
      >
        <Tab label="Preview" value="preview" id={previewTabId} sx={tabStyle} />
        <Tab label="Components" value="components" id={componentsTabId} sx={tabStyle} />
        <Tab label="Saved Themes" value="saved" id={savedThemesTabId} sx={tabStyle} />
      </Tabs>
      <Hidden smUp>
        <IconButton onClick={() => dispatch({ type: "TOGGLE_THEME_CONFIG" })} size="large">
          <BrushIcon />
        </IconButton>
      </Hidden>
    </AppBar>
    <Box sx={{  overflowY: "auto", height: 1 }}>
      {activeTab === "preview" && <PreviewWindow />}

      {activeTab === "components" && (
        <Box sx={{ bgcolor: '#fff' }}>
          <ThemeWrapper>
            <MuiComponentSamples />
          </ThemeWrapper>
        </Box>
      )}

      {activeTab === "saved" && <SavedThemes />}
    </Box>
  </>;
}

export default MainWindow
