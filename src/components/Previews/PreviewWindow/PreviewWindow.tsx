import React from "react"
import {
  makeStyles,
  Paper,
  AppBar,
  Tabs,
  Tab,
  Tooltip,
} from "@material-ui/core"
import AppBarExample from "src/components/Previews/MuiComponentPreviews/AppBar"
import DefaultExample from "./DefaultExample"
import SignUpExample from "./SignUpExample"
import DashboardExample from "./DashboardExample"
import BlogExample from "./BlogExample"
import PricingExample from "./PricingExample"
import CheckoutExample from "./CheckoutExample"
import Alert from "@material-ui/lab/Alert"

const useStyles = makeStyles(theme => ({
  letterBox: {
    backgroundColor: "#212121",
    paddingTop: 16,
    height: "calc(100vh - 64px - 48px)",
  },
  infoAlert: {
    width: `calc(100% - 32px)`,
    maxWidth: 1000,
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
  previewArea: {
    backgroundColor: theme.palette.background.default,
    width: `calc(100% - 32px)`,
    maxWidth: 1000,
    height: "95%",
    overflowY: "auto",
    margin: "auto",
    position: "relative", // for FAB positioning
  },
}))

const PreviewWrapper = ({ children }) => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.letterBox}>
        {/* <Alert severity="info" className={classes.infoAlert}>
          Modify the theme on the right side of the screen to start making
          changes
        </Alert> */}
        <Paper elevation={8} className={classes.previewArea}>
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

const PreviewWindow = () => {
  const classes = useStyles()
  const [tabIndex, setTabIndex] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newTabIndex: number) => {
    setTabIndex(newTabIndex)
  }

  return (
    <PreviewWrapper>
      <AppBarExample />
      <Tooltip title={`<AppBar color="primary">`} placement="left" arrow>
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={tabIndex}
            onChange={handleChange}
            aria-label="preview-window-tabs"
          >
            <Tab label="Default" />
            <Tab label="Sign Up" />
            <Tab label="Dashboard" />
            <Tab label="Blog" />
            <Tab label="Pricing" />
            <Tab label="Checkout" />
          </Tabs>
        </AppBar>
      </Tooltip>
      {/* <Container style={{ paddingTop: 16, paddingBottom: 16 }}> */}
      <div style={{ minHeight: 800 }}>
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
      </div>
      {/* </Container> */}
    </PreviewWrapper>
  )
}

export default PreviewWindow
