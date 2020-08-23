import React from "react"
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardContent,
  Link,
  Box,
  Tooltip,
  Divider,
  BottomNavigationAction,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core"
import BuildIcon from "@material-ui/icons/Build"
import StarIcon from "@material-ui/icons/Star"
import PaletteIcon from "@material-ui/icons/Palette"
import FontIcon from "@material-ui/icons/FontDownload"
import TypographyIcon from "@material-ui/icons/TextFields"
import wrapTooltip from "../wrapTooltip"
import { TutorialLink } from "src/components/Tutorial/TutorialButton"

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
    fontWeight: theme.typography.fontWeightLight,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  cardActions: {
    justifyContent: "flex-end",
    display: "flex",
    "&> *": {
      marginLeft: theme.spacing(),
    },
  },
}))

const WrappedTypography = wrapTooltip(Typography, "Typography")

const DefaultExample = () => {
  const classes = useStyles()
  return (
    <Box p={3}>
      <Typography paragraph>
        <TutorialLink>Check out the Tutorial!</TutorialLink>
      </Typography>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} md={6}>
          <FeatureCard
            icon={<BuildIcon color="primary" />}
            title="Editor Usage"
          >
            <List>
              <ListItem>
                <Typography variant="h6">Theme Tools</Typography>
              </ListItem>
              <ThemeToolUsageListItem label="Palette" icon={<PaletteIcon />}>
                <>
                  {` Configure palette options like `}
                  <Typography color="primary" variant="body2" component="span">
                    {"primary, "}
                  </Typography>
                  <Typography
                    color="secondary"
                    variant="body2"
                    component="span"
                  >
                    {"secondary, "}
                  </Typography>
                  {"and surface colors"}
                </>
              </ThemeToolUsageListItem>
              <ThemeToolUsageListItem label="Fonts" icon={<FontIcon />}>
                <>
                  {` Add `}
                  <Link
                    href="https://fonts.google.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`Google Fonts`}
                  </Link>
                  {` to use on typography elements on this page`}
                </>
              </ThemeToolUsageListItem>
              <ThemeToolUsageListItem
                label="Typography"
                icon={<TypographyIcon />}
              >
                {` Configure typography options like font sizes and font families`}
              </ThemeToolUsageListItem>

              <Divider />

              <ListItem>
                <Typography variant="h6">Tabs</Typography>
              </ListItem>
              <TabUsageListItem label="Preview">
                View your theme on various website samples and templates. Hover
                over components for information about them
              </TabUsageListItem>
              <TabUsageListItem label="Components">
                View your theme on all of the Material-UI components. Use the
                drawer on the left of the screen to navigate to components.
              </TabUsageListItem>
              <TabUsageListItem label="Saved Themes">
                Switch between multiple saved themes or checkout templates
              </TabUsageListItem>
            </List>
          </FeatureCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <FeatureCard title="Features" icon={<StarIcon color="primary" />}>
            <List>
              <ListItem>
                <Link
                  variant="h6"
                  href="https://microsoft.github.io/monaco-editor/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Monaco Editor
                </Link>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="body2">
                    Intellisense loaded with Material-UI{" "}
                    <code>ThemeOptions</code> type data. Press Ctrl + Space for
                    code suggestions
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <Typography variant="h6">Saved Themes</Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2">
                  Themes are saved in your browser's <code>localStorage</code>{" "}
                  so that they'll persist between visits to this site.
                </Typography>
              </ListItem>
              <ListItem>
                <Link
                  href="https://github.com/typekit/webfontloader"
                  target="_blank"
                  rel="noreferrer"
                  variant="h6"
                >
                  Web Font Loader
                </Link>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="body2" paragraph>
                    Google Fonts loaded through the Web Font Loader package so
                    you can preview your theme with a variety of fonts.
                  </Typography>
                  <Typography variant="body2">
                    Add fonts by entering the name of the font on the Font Tools
                    tab in the bottom right corner
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <Typography variant="h6">Snippets</Typography>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography variant="body2" paragraph>
                    Add global styles or default options with various built in
                    snippets
                  </Typography>
                  <Typography variant="body2">
                    Got any useful theme snippets that you think others could
                    use? Open an issue on Gitlab!
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </FeatureCard>
        </Grid>
      </Grid>
      {/* <Tooltip title={`<Fab color="secondary">`} arrow>
        <Fab aria-label="FAB Preview" className={classes.fab} color="secondary">
          <AddIcon />
        </Fab>
      </Tooltip> */}
    </Box>
  )
}

export default DefaultExample

const FeatureCard = ({ icon, title, children }) => (
  <Card>
    <CardContent>
      <Grid container spacing={1} alignItems="center">
        <Grid item>{icon}</Grid>
        <Grid item>
          <Tooltip
            title={`<Typography color="textPrimary" variant="h5">`}
            placement="left"
            arrow
          >
            <Typography variant="h5">{title}</Typography>
          </Tooltip>
        </Grid>
      </Grid>
    </CardContent>
    <Divider />
    {children}
  </Card>
)

const ThemeToolUsageListItem = ({ label, icon, children }) => (
  <ListItem>
    <ListItemIcon>
      <BottomNavigationAction
        label={label}
        icon={icon}
        showLabel
        style={{
          color: "inherit",
          padding: 0,
          paddingRight: 4,
          minWidth: 70,
        }}
      />
    </ListItemIcon>
    <ListItemText>
      <Typography variant="body2">{children}</Typography>
    </ListItemText>
  </ListItem>
)

const TabUsageListItem = ({ label, children }) => (
  <ListItem>
    <ListItemIcon>
      <Typography
        variant="overline"
        color="primary"
        style={{
          paddingRight: 4,
          minWidth: 110,
          textAlign: "center",
        }}
      >
        {label}
      </Typography>
    </ListItemIcon>
    <ListItemText>
      <Typography variant="body2">{children}</Typography>
    </ListItemText>
  </ListItem>
)
