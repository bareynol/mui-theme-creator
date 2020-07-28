import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core"
import muiVersion from "src/muiVersion"

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.fontSize,
  },
  version: {
    fontSize: theme.typography.caption.fontSize,
    lineHeight: theme.typography.caption.fontSize,
    fontWeight: 700,
  },
}))

const Header = ({ siteTitle, className }) => {
  const classes = useStyles()
  return (
    <header>
      <AppBar position="fixed" color="default" className={className}>
        <Toolbar>
          <div>
            <Typography variant="h6" className={classes.title}>
              {siteTitle}
            </Typography>
            <Typography
              variant="caption"
              color="primary"
              className={classes.version}
            >
              {`Supporting @material-ui/core ${muiVersion}`}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
