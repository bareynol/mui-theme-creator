import React, { useEffect, useState } from "react"
// import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ThemeConfigDrawer from "src/components/ThemeConfigDrawer"
import MainWindow from "src/components/MainWindow"
import Header from "src/components/Header"
import ComponentNavDrawer from "src/components/ComponentNavDrawer"
import { makeStyles } from "@material-ui/core"
import SmallScreenWarning from "src/components/SmallScreenWarning"

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  mainWindow: {
    flex: 1,
    display: "flex",
  },
  content: {
    display: "flex",
    flex: 1,
  },
  header: {
    backgroundColor: "#000000",
    [theme.breakpoints.up("md")]: {
      position: "static",
    },
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <SEO title="Material UI Theme Creator" />

      <div className={classes.container}>
        <Header className={classes.header} />
        <div className={classes.mainWindow}>
          <ComponentNavDrawer />
          <main className={classes.content}>
            <MainWindow />
          </main>
        </div>
      </div>

      <ThemeConfigDrawer />
      <SmallScreenWarning />
    </Layout>
  )
}

export default IndexPage
