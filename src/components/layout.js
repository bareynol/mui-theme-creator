/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import NavDrawer from "src/components/NavDrawer"
import ThemeWrapper from "src/components/ThemeWrapper"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  content: {
    display: "flex",
    flexGrow: 1,
  },
  header: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbarOffset: theme.mixins.toolbar,
}))

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const classes = useStyles()

  return (
    <ThemeWrapper>
      <CssBaseline />
      <div className={classes.toolbarOffset} />
      <div className={classes.root}>
        <Header
          siteTitle={data.site.siteMetadata.title}
          className={classes.header}
        />

        <NavDrawer />
        <main className={classes.content}>{children}</main>
      </div>
      {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
    </ThemeWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
