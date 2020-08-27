import PropTypes from "prop-types"
import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Link,
  IconButton,
} from "@material-ui/core"
import muiVersion from "src/muiVersion"
import TutorialButton from "./Tutorial/TutorialButton"
import GitHubIcon from "@material-ui/icons/GitHub"

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
    display: "flex",
    justifyContent: "space-between",
  },
}))

const Header = ({ className }) => {
  const classes = useStyles()
  return (
    <AppBar position="static" color="default" className={className}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography variant="h6" className={classes.title}>
            Material-UI Theme Creator
          </Typography>
          <Typography variant="caption" className={classes.version}>
            {"└─ "}
            <Link
              href="https://material-ui.com/"
              target="_blank"
              rel="noreferrer"
            >
              {`@material-ui/core@${muiVersion}`}
            </Link>
          </Typography>
        </div>
        <div>
          <TutorialButton />
          <IconButton
            href="https://github.com/bareynol/mui-theme-creator"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </IconButton>
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
