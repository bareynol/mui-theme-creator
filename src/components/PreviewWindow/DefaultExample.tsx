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
} from "@material-ui/core"
import MuiLogo from "src/images/mui_logo.svg"

const useStyles = makeStyles(theme => ({
  logo: {
    width: 195,
    height: 175,
  },
  muiTitle: {
    textTransform: "uppercase",
    letterSpacing: ".5rem",
    fontWeight: 300,
  },
}))

const DefaultExample = () => {
  const classes = useStyles()
  return (
    <>
      <Typography>
        Modify the theme on the right side of the screen to start making changes
      </Typography>
      <Grid container>
        <Grid item>
          <Card style={{ maxWidth: 350 }}>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={MuiLogo}
                alt="Material UI Logo"
                className={classes.logo}
              />
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
            <CardActions>
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
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default DefaultExample
