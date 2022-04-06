import React from "react"
import PropTypes from "prop-types"
import makeStyles from '@mui/styles/makeStyles';
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Tooltip from "@mui/material/Tooltip"

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}))

export default function BlogHeader(props) {
  const classes = useStyles()
  const { sections, title } = props

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Tooltip title={`<Button color="default" size="small">`} arrow>
          <Button size="small">Subscribe</Button>
        </Tooltip>
        <Tooltip title={`<Typography color="inherit" variant="h5">`} arrow>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            {title}
          </Typography>
        </Tooltip>
        <Tooltip title={`<IconButton color="default">`} arrow>
          <IconButton size="large">
            <SearchIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          title={`<Button color="default" variant="outlined" size="small">`}
          arrow
        >
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Tooltip>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {sections.map(section => (
          <Tooltip
            title={`<Link color="inherit" variant="body2">`}
            arrow
            key={section.title}
          >
            <Link
              color="inherit"
              noWrap
              variant="body2"
              href={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          </Tooltip>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

BlogHeader.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
}
