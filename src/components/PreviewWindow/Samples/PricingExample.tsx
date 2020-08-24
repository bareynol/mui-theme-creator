import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Grid from "@material-ui/core/Grid"
import StarIcon from "@material-ui/icons/StarBorder"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { darken, lighten } from "@material-ui/core/styles/colorManipulator"
import Tooltip from "@material-ui/core/Tooltip"

const useStyles = makeStyles(theme => ({
  ul: {
    margin: 0,
    padding: 0,
    listStyle: "none",
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    color: theme.palette.secondary.contrastText,
    "&$main": {
      backgroundColor: theme.palette.secondary.main,
    },
    "&$light": {
      backgroundColor: theme.palette.secondary.light,
    },
    "&$dark": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  main: {},
  dark: {},
  light: {},
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}))

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
    color: "dark",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
    color: "main",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
    color: "light",
  },
]
const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
]

export default function PricingExample() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Tooltip title={`<AppBar color="default">`} placement="bottom" arrow>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Tooltip
              title={`<Typography color="textPrimary" variant="h6">`}
              placement="left"
              arrow
            >
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                className={classes.toolbarTitle}
              >
                Company name
              </Typography>
            </Tooltip>
            <nav>
              <Tooltip
                title={`<Link color="textPrimary" variant="button">`}
                arrow
              >
                <Link
                  variant="button"
                  color="textPrimary"
                  href="#"
                  className={classes.link}
                >
                  Features
                </Link>
              </Tooltip>
              <Tooltip
                title={`<Link color="textPrimary" variant="button">`}
                arrow
              >
                <Link
                  variant="button"
                  color="textPrimary"
                  href="#"
                  className={classes.link}
                >
                  Enterprise
                </Link>
              </Tooltip>
              <Tooltip
                title={`<Link color="textPrimary" variant="button">`}
                arrow
              >
                <Link
                  variant="button"
                  color="textPrimary"
                  href="#"
                  className={classes.link}
                >
                  Support
                </Link>
              </Tooltip>
            </nav>
            <Tooltip
              title={`<Button color="primary" variant="outlined">`}
              arrow
            >
              <Button
                href="#"
                color="primary"
                variant="outlined"
                className={classes.link}
              >
                Login
              </Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Tooltip>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Tooltip
          title={`<Typography color="textPrimary" variant="h2">`}
          placement="top"
          arrow
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Pricing
          </Typography>
        </Tooltip>
        <Tooltip
          title={`<Typography color="textSecondary" variant="h5">`}
          arrow
        >
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Quickly build an effective pricing table for your potential
            customers with this layout. It&apos;s built with default Material-UI
            components with little customization.
          </Typography>
        </Tooltip>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <Tooltip title={`<CardHeader>`} arrow placement="top">
                  <div>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: "center" }}
                      subheaderTypographyProps={{
                        align: "center",
                        classes: { root: classes.cardHeader },
                      }}
                      action={tier.title === "Pro" ? <StarIcon /> : null}
                      className={`${classes.cardHeader} ${classes[tier.color]}`}
                    />
                  </div>
                </Tooltip>
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Tooltip
                      title={`<Typography color="textPrimary" variant="h3">`}
                      placement="left"
                      arrow
                    >
                      <Typography
                        component="h2"
                        variant="h3"
                        color="textPrimary"
                      >
                        ${tier.price}
                      </Typography>
                    </Tooltip>
                    <Tooltip
                      title={`<Typography color="textSecondary" variant="h6">`}
                      placement="right"
                      arrow
                    >
                      <Typography variant="h6" color="textSecondary">
                        /mo
                      </Typography>
                    </Tooltip>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Tooltip
                        key={line}
                        title={`<Typography color="textPrimary" variant="subtitle1" component="li">`}
                        placement="left"
                        arrow
                      >
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                        >
                          {line}
                        </Typography>
                      </Tooltip>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Tooltip
                    title={`<Button color="primary" variant="${tier.buttonVariant}">`}
                    arrow
                  >
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      color="primary"
                    >
                      {tier.buttonText}
                    </Button>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Tooltip
                title={`<Typography color="textPrimary" variant="h6">`}
                placement="left"
                arrow
              >
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {footer.title}
                </Typography>
              </Tooltip>
              <ul className={classes.ul}>
                {footer.description.map(item => (
                  <li key={item}>
                    <Tooltip
                      title={`<Link color="textSecondary" variant="subtitle1">`}
                      placement="left"
                      arrow
                    >
                      <Link href="#" variant="subtitle1" color="textSecondary">
                        {item}
                      </Link>
                    </Tooltip>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End footer */}
    </React.Fragment>
  )
}
