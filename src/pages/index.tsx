import React, { useEffect, useState } from "react"
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline"
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
import ThemeConfigDrawer from "src/components/ThemeConfigDrawer/ThemeConfigDrawer"
import ComponentExamples from "src/components/ComponentExamples"
import PreviewWindow from "src/components/PreviewWindow"
import MaterialColorPicker from "src/components/MaterialColorPicker"
import SavedThemes from "src/components/SavedThemes/SavedThemes"

const IndexPage = () => {
  const [tab, setTab] = useState("preview")

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
          <ThemeWrapper>
            <PreviewWindow />
            {/* <Container maxWidth={false}><ComponentExamples /></Container> */}
          </ThemeWrapper>
        )}

        {tab === "components" && (
          <ThemeWrapper>
            <div
              style={{
                height: "calc(100vh - 64px - 48px)",
                overflowY: "auto",
              }}
            >
              <Container maxWidth="md">
                <ComponentExamples />
              </Container>
            </div>
          </ThemeWrapper>
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
