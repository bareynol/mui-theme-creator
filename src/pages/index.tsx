import React from "react"

import { makeStyles } from "@material-ui/core"

import ComponentNavDrawer from "src/components/ComponentNavDrawer"
import Header from "src/components/Header"
import Layout from "src/components/Layout"
import MainWindow from "src/components/MainWindow"
import SmallScreenWarning from "src/components/SmallScreenWarning"
import ThemeConfigDrawer from "src/components/ThemeConfigDrawer"
import Tutorial from "src/components/Tutorial"
import ErrorBoundary from "src/components/ErrorBoundary"

const useStyles = makeStyles(theme => ({
  appRoot: {
    display: "flex",
    height: "100vh",
  },
  headerNavAndMain: {
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
    minHeight: 0,
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
      <div className={classes.appRoot}>
        <ErrorBoundary>
          <div className={classes.headerNavAndMain}>
            <Header className={classes.header} />

            <div className={classes.navAndMain}>
              <ComponentNavDrawer />

              <main className={classes.main}>
                <MainWindow />
              </main>
            </div>
          </div>

          <ThemeConfigDrawer />
        </ErrorBoundary>
      </div>
      <SmallScreenWarning />
      <Tutorial />
    </Layout>
  )
}

export default IndexPage
