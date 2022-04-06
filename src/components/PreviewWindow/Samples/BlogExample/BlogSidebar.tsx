import React from "react"
import PropTypes from "prop-types"
import makeStyles from '@mui/styles/makeStyles';
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Tooltip from "@mui/material/Tooltip"

const useStyles = makeStyles(theme => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}))

export default function BlogSidebar(props) {
  const classes = useStyles()
  const { archives, description, social, title } = props

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Tooltip title={`<Typography variant="h6">`} placement="left" arrow>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
        </Tooltip>
        <Tooltip title={`<Typography variant="body1">`} placement="left" arrow>
          <Typography>{description}</Typography>
        </Tooltip>
      </Paper>
      <Tooltip title={`<Typography variant="h6">`} placement="left" arrow>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSection}
        >
          Archives
        </Typography>
      </Tooltip>
      {archives.map(archive => (
        <Tooltip
          key={archive.title}
          title={`<Link color="primary" variant="body1">`}
          placement="left"
          arrow
        >
          <Link display="block" variant="body1" href={archive.url} underline="hover">
            {archive.title}
          </Link>
        </Tooltip>
      ))}
      <Tooltip title={`<Typography variant="h6">`} placement="left" arrow>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.sidebarSection}
        >
          Social
        </Typography>
      </Tooltip>
      {social.map(network => (
        <Tooltip
          key={network.name}
          title={`<Link color="primary" variant="body1">`}
          placement="left"
          arrow
        >
          <Link display="block" variant="body1" href="#" underline="hover">
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item>
                <network.icon />
              </Grid>
              <Grid item>{network.name}</Grid>
            </Grid>
          </Link>
        </Tooltip>
      ))}
    </Grid>
  );
}

BlogSidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
}
