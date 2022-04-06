import BuildIcon from "@mui/icons-material/Build";
import FontIcon from "@mui/icons-material/FontDownload";
import PaletteIcon from "@mui/icons-material/Palette";
import StarIcon from "@mui/icons-material/Star";
import TypographyIcon from "@mui/icons-material/TextFields";
import {
  BottomNavigationAction, Box, Card,
  CardContent, Divider, Grid, Link, List,
  ListItem,
  ListItemIcon,
  ListItemText, Tooltip, Typography
} from "@mui/material";
import React from "react";
import { TutorialLink } from "src/components/Tutorial/TutorialButton";
import wrapTooltip from "../wrapTooltip";

const WrappedTypography = wrapTooltip(Typography, "Typography")

const DefaultExample = () => {
  return (
    <Box p={3}>
      <Typography paragraph>
        <TutorialLink>Check out the Tutorial!</TutorialLink>
      </Typography>
      <Grid container spacing={2} justifyContent="center">
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
                    underline="hover">
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
                  underline="hover">
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
                  underline="hover">
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
  );
}

export default DefaultExample

interface FeatureCardProps {
  icon: React.ReactElement;
  title: string;
  children: React.ReactNode;
}
const FeatureCard = ({ icon, title, children }: FeatureCardProps) => (
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

interface ThemeToolUsageListItemProps {
  icon: React.ReactElement;
  label: string;
  children: React.ReactNode;
}
const ThemeToolUsageListItem = ({ label, icon, children }: ThemeToolUsageListItemProps) => (
  <ListItem>
    <ListItemIcon>
      <BottomNavigationAction
        label={label}
        icon={icon}
        showLabel
        sx={{
          color: "inherit",
          p: 0,
          pr: '4px',
          minWidth: 70,
        }}
      />
    </ListItemIcon>
    <ListItemText>
      <Typography variant="body2">{children}</Typography>
    </ListItemText>
  </ListItem>
)

interface TabUsageListItemProps {
  label: string;
  children: React.ReactNode;
}
const TabUsageListItem = ({ label, children }: TabUsageListItemProps) => (
  <ListItem>
    <ListItemIcon>
      <Typography
        variant="overline"
        color="primary"
        sx={{
          pr: '4px',
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
