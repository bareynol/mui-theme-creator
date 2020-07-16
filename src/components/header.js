import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"

const Header = ({ siteTitle, className }) => (
  <header>
    <AppBar position="fixed" className={className}>
      <Toolbar>
        <Typography variant="h6">{siteTitle}</Typography>
      </Toolbar>
    </AppBar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
