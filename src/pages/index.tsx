import React from "react"
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ThemeWrapper from "src/components/ThemeWrapper"
import { Container, Divider, Paper, makeStyles } from "@material-ui/core"
import ThemeConfigDrawer from "src/components/ThemeConfigDrawer/ThemeConfigDrawer"
import ComponentExamples from "src/components/ComponentExamples"
import PreviewWindow from "src/components/PreviewWindow"

const IndexPage = () => (
  <Layout>
    <SEO title="Material UI Theme Creator" />

    <ThemeWrapper>
      <Container
        maxWidth={false}
        style={{ height: "calc(100vh - 64px)", overflow: "auto" }}
      >
        <PreviewWindow />

        <Divider style={{ marginTop: 64, marginBottom: 64 }} />

        {/* <ComponentExamples /> */}
      </Container>
    </ThemeWrapper>

    <ThemeConfigDrawer />
  </Layout>
)

export default IndexPage
