import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ThemeWrapper from "src/components/ThemeWrapper"
import {
  Typography,
  AppBar,
  Toolbar,
  CssBaseline,
  Container,
  Divider,
} from "@material-ui/core"
import ThemeConfigDrawer from "src/components/ThemeConfigDrawer"
import ComponentExamples from "src/components/ComponentExamples"
import NavDrawer from "src/components/NavDrawer"
import PreviewExample from "src/components/PreviewWindow/PreviewExample"

const IndexPage = () => (
  <Layout>
    <SEO title="Material UI Theme Creator" />

    <Container maxWidth={false}>
      <PreviewExample />

      <Divider style={{ marginTop: 64, marginBottom: 64 }} />

      <ComponentExamples />
    </Container>
    <ThemeConfigDrawer />
  </Layout>
)

export default IndexPage
