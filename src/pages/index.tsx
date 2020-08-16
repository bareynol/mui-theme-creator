import React, { useEffect, useState } from "react"
// import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ThemeWrapper from "src/components/ThemeWrapper"
import {
  Container,
  Divider,
  Paper,
  makeStyles,
  AppBar,
  Tabs,
  Tab,
} from "@material-ui/core"
import ThemeConfigDrawer from "src/components/ThemeConfigDrawer"
import MuiComponents from "src/components/Previews/MuiComponents"
import PreviewWindow from "src/components/Previews/PreviewWindow"
// import MaterialColorPicker from "src/components/MaterialColorPicker"
import SavedThemes from "src/components/SavedThemes/SavedThemes"
import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "src/state/actions"
import { RootState } from "src/state/types"

const IndexPage = () => {
  const tab = useSelector((state: RootState) => state.activeTab)
  const dispatch = useDispatch()
  const setTab = React.useCallback(value => dispatch(setActiveTab(value)), [
    dispatch,
  ])

  return (
    <Layout>
      <SEO title="Material UI Theme Creator" />

      <div
        style={{
          flexGrow: 1,
          minWidth: 0,
        }}
      >
        <AppBar position="sticky" color="default">
          <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            centered
            onChange={(event, value) => setTab(value)}
          >
            <Tab label="Preview" value="preview" />
            <Tab label="Components" value="components" />
            <Tab label="Saved Themes" value="saved" />
          </Tabs>
        </AppBar>
        {tab === "preview" && (
          // <ThemeWrapper>
          <PreviewWindow />
          // </ThemeWrapper>
        )}

        {tab === "components" && (
          <div
            style={{
              height: "calc(100vh - 64px - 48px)",
              overflowY: "auto",
              backgroundColor: "#fff", // ensures rgba background colors work properly
            }}
          >
            <ThemeWrapper>
              <Container maxWidth="md">
                <MuiComponents />
              </Container>
            </ThemeWrapper>
          </div>
        )}

        {tab === "saved" && (
          <div
            style={{
              height: "calc(100vh - 64px - 48px)",
              overflowY: "auto",
            }}
          >
            <Container>
              <SavedThemes />
            </Container>
          </div>
        )}
      </div>
      <ThemeConfigDrawer />
    </Layout>
  )
}

export default IndexPage
