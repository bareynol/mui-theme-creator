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
  appRoot: {
    display: "flex",
    height: "100vh",
  },
  headerAndMain: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },
  navAndMain: {
    flex: 1,
    display: "flex",
    minHeight: 0,
  },
  main: {
    minWidth: 0,
    flex: 1,
    display: "flex",
    flexDirection: "column",
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
      <div className={classes.appRoot}>
        <div className={classes.headerAndMain}>
          <Header className={classes.header} />
          <div className={classes.navAndMain}>
            <ComponentNavDrawer />
            <main className={classes.main}>
              <MainWindow />
            </main>
          </div>
        </div>

        <ThemeConfigDrawer />
      </div>
      <SmallScreenWarning />
    </Layout>
  )
}

export default IndexPage
