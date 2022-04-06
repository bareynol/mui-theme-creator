import PropTypes from "prop-types"
import React from "react"
import { AppBar, Toolbar, Typography, Link, IconButton, AppBarProps } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import muiVersion from "src/muiVersion"
import TutorialButton from "./Tutorial/TutorialButton"
import GitHubIcon from "@mui/icons-material/GitHub"

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

const Header = (props: AppBarProps) => {
  const classes = useStyles()
  return (
    <AppBar position="static" color="default" {...props}>
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
              underline="hover">
              {`@mui/material@${muiVersion}`}
            </Link>
          </Typography>
        </div>
        <div>
          <TutorialButton />
          <IconButton
            href="https://github.com/bareynol/mui-theme-creator"
            target="_blank"
            rel="noreferrer"
            size="large">
            <GitHubIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header
