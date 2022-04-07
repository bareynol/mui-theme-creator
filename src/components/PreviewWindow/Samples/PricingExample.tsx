import StarIcon from "@mui/icons-material/StarBorder"
import { Box } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"
import Toolbar from "@mui/material/Toolbar"
import Tooltip from "@mui/material/Tooltip"
import Typography from "@mui/material/Typography"
import React from "react"

type TierType = {
  title: string
  subheader?: string
  price: string
  description: string[]
  buttonText: string
  buttonVariant: "text" | "outlined" | "contained"
  color: "main" | "light" | "dark"
}

const tiers: TierType[] = [
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
  return (
    <React.Fragment>
      <Tooltip title={`<AppBar color="default">`} placement="bottom" arrow>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: 1, borderBottomColor: 'divider', }}
        >
          <Toolbar sx={{ flexWrap: "wrap" }}>
            <Tooltip
              title={`<Typography color="textPrimary" variant="h6">`}
              placement="left"
              arrow
            >
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
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
                  sx={{ my: 1, mx: 1.5 }}
                  underline="hover">
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
                  sx={{ my: 1, mx: 1.5 }}
                  underline="hover">
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
                  sx={{ my: 1, mx: 1.5 }}
                  underline="hover">
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
                sx={{ my: 1, mx: 1.5 }}
              >
                Login
              </Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Tooltip>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" sx={{ mt: 8, my: 0, mb: 6 }}>
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
                        sx: {
                          color: 'secondary.contrastText',
                          bgcolor: tier.color === 'main' ? 'secondary.main' : tier.color === 'light' ? 'secondary.light' : 'secondary.dark',
                        }
                      }}
                      action={tier.title === "Pro" ? <StarIcon /> : null}
                      sx={{
                        color: 'secondary.contrastText',
                        bgcolor: tier.color === 'main' ? 'secondary.main' : tier.color === 'light' ? 'secondary.light' : 'secondary.dark',
                      }}
                    />
                  </div>
                </Tooltip>
                <CardContent>
                  <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}>
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
                  </Box>
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
      <Container maxWidth="md" component="footer" sx={{
        borderTop: 1,
        mt: 8,
        py: {
          xs: 3,
          sm: 6,
        },
      }}>
        <Grid container spacing={4} justifyContent="space-evenly">
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
              <Box component="ul" sx={{
                margin: 0,
                padding: 0,
                listStyle: "none",
              }}>
                {footer.description.map(item => (
                  <li key={item}>
                    <Tooltip
                      title={`<Link color="textSecondary" variant="subtitle1">`}
                      placement="left"
                      arrow
                    >
                      <Link href="#" variant="subtitle1" color="textSecondary" underline="hover">
                        {item}
                      </Link>
                    </Tooltip>
                  </li>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
