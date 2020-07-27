/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import NavDrawer from "src/components/NavDrawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles, ThemeProvider } from "@material-ui/core/styles"
import theme from "src/siteTheme"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import WebFont from "webfontloader"

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
  const initialFonts = [...useSelector((state: RootState) => state.loadedFonts)]
  useEffect(() => {
    if (initialFonts.length) {
      WebFont.load({
        google: {
          families: initialFonts,
        },
      })
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
