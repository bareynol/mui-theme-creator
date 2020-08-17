import React, { useEffect, useState } from "react"
// import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ThemeConfigDrawer from "src/components/ThemeConfigDrawer"
import PreviewNavigationTabs from "src/components/PreviewNavigationTabs"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Material UI Theme Creator" />
      <PreviewNavigationTabs />
      <ThemeConfigDrawer />
    </Layout>
  )
}

export default IndexPage
