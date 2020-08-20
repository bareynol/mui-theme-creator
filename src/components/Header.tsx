import PropTypes from "prop-types"
import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Link,
} from "@material-ui/core"
import muiVersion from "src/muiVersion"
import { TutorialButton } from "./Tutorial/Tutorial"

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
  toolbar: {
    width: "calc(100% - 400px)", // screen width minus the config drawer
    display: "flex",
    justifyContent: "space-between",
  },
}))

const Header = ({ siteTitle, className }) => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" color="default" className={className}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography variant="h6" className={classes.title}>
            {siteTitle}
          </Typography>
          <Typography variant="caption" className={classes.version}>
            {"└─ "}
            <Link
              href="https://www.npmjs.com/package/@material-ui/core"
              target="_blank"
              rel="noreferrer"
            >
              {`@material-ui/core@${muiVersion}`}
            </Link>
          </Typography>
        </div>
        <div>
          <TutorialButton />
        </div>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
