import React from "react"
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThemeWrapper from "src/components/ThemeWrapper"
import { Container, Divider, Paper, makeStyles } from "@material-ui/core"
import ThemeConfigDrawer from "src/components/ThemeConfigDrawer/ThemeConfigDrawer"
import ComponentExamples from "src/components/ComponentExamples"
import PreviewWindow from "src/components/PreviewWindow"
import MaterialColorPicker from "src/components/MaterialColorPicker"

const IndexPage = () => (
  <Layout>
    <SEO title="Material UI Theme Creator" />

    <ThemeWrapper>
      <div style={{ height: "calc(100vh - 64px)", overflow: "auto" }}>
        <PreviewWindow />
        <Container maxWidth={false}>
          <Divider style={{ marginTop: 64, marginBottom: 64 }} />

          {/* <ComponentExamples /> */}
        </Container>
      </div>
    </ThemeWrapper>
    <ThemeConfigDrawer />
  </Layout>
)

export default IndexPage
