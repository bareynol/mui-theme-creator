import React from "react"
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Link,
  Box,
  Fab,
} from "@material-ui/core"
import MuiLogo from "src/images/mui_logo.svg"
import AddIcon from "@material-ui/icons/Add"

const useStyles = makeStyles(theme => ({
  logo: {
    width: 195,
    height: 175,
    margin: theme.spacing(2),
    marginBottom: 0,
  },
  muiTitle: {
    textTransform: "uppercase",
    letterSpacing: ".5rem",
    fontWeight: 300,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  cardActions: {
    justifyContent: "flex-end",
  },
}))

const DefaultExample = () => {
  const classes = useStyles()
  return (
    <Box p={3}>
      <Card>
        <Grid container wrap="nowrap">
          <Grid item>
            <img
              src={MuiLogo}
              alt="Material UI Logo"
              className={classes.logo}
            />
          </Grid>
          <Grid item>
            <CardContent>
              <Typography
                variant="h4"
                color="primary"
                className={classes.muiTitle}
                gutterBottom
              >
                Material-UI
              </Typography>
              <Typography variant="body2" paragraph>
                {`React components for faster and easier web development. Build your own design system, or start with Material Design.`}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button
                variant="outlined"
                color="primary"
                href="https://material-ui.com/getting-started/installation/"
                target="_blank"
                rel="noreferrer"
              >
                {`Docs`}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                href="https://material-ui.com/discover-more/backers/"
                target="_blank"
                rel="noreferrer"
              >
                Support Them
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>

      <Typography variant="h4">Theming Instructions</Typography>

      <Fab aria-label="FAB Preview" className={classes.fab} color="primary">
        <AddIcon />
      </Fab>
    </Box>
  )
}

export default DefaultExample
