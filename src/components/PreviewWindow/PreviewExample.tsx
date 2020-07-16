import React from "react"
import {
  Container,
  Typography,
  makeStyles,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Link,
  AppBar,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core"
import AppBarExample from "src/components/Examples/AppBar"
import DefaultExample from "./DefaultExample"
import SignUpExample from "./SignUpExample"
import DashboardExample from "./DashboardExample"
import BlogExample from "./BlogExample"
import PricingExample from "./PricingExample"
import CheckoutExample from "./CheckoutExample"

const useStyles = makeStyles(theme => ({
  letterBox: {
    backgroundColor: "#000",
    width: "100%",
    paddingTop: 64,
    paddingBottom: 64,
  },
  previewArea: {
    backgroundColor: theme.palette.background.default,
    width: `calc(100% - 32px)`,
    maxWidth: 1000,
    height: 700,
    overflowY: "auto",
    margin: "auto",
  },
}))

const PreviewWrapper = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Preview
      </Typography>
      <div className={classes.letterBox}>
        <Paper elevation={10} className={classes.previewArea}>
          {children}
        </Paper>
      </div>
    </>
  )
}

interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

const PreviewExample = () => {
  const classes = useStyles()
  const [tabIndex, setTabIndex] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newTabIndex: number) => {
    setTabIndex(newTabIndex)
  }

  return (
    <PreviewWrapper>
      <AppBarExample />
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={tabIndex}
          onChange={handleChange}
          aria-label="preview-window-tabs"
        >
          <Tab label="Default" />
          <Tab label="Sign Up Example" />
          <Tab label="Dashboard Example" />
          <Tab label="Blog Example" />
          <Tab label="Pricing Example" />
          <Tab label="Checkout Example" />
        </Tabs>
      </AppBar>
      {/* <Container style={{ paddingTop: 16, paddingBottom: 16 }}> */}
      <TabPanel value={tabIndex} index={0}>
        <DefaultExample />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <SignUpExample />
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <DashboardExample />
      </TabPanel>
      <TabPanel value={tabIndex} index={3}>
        <BlogExample />
      </TabPanel>
      <TabPanel value={tabIndex} index={4}>
        <PricingExample />
      </TabPanel>
      <TabPanel value={tabIndex} index={5}>
        <CheckoutExample />
      </TabPanel>
      {/* </Container> */}
    </PreviewWrapper>
  )
}

export default PreviewExample
