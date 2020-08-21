/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import ComponentNavDrawer from "src/components/ComponentNavDrawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import theme from "src/siteTheme"
import "./layout.css"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>{children}</div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
