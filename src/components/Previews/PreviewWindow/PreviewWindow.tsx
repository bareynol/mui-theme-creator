import React from "react"
import {
  makeStyles,
  Paper,
  AppBar,
  Tabs,
  Tab,
  Tooltip,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core"
import AppBarExample from "src/components/Previews/MuiComponentPreviews/AppBar"
import DefaultExample from "./DefaultExample"
import SignUpExample from "./SignUpExample"
import DashboardExample from "./DashboardExample"
import BlogExample from "./BlogExample"
import PricingExample from "./PricingExample"
import CheckoutExample from "./CheckoutExample"
import Alert from "@material-ui/lab/Alert"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import ThemeWrapper from "src/components/ThemeWrapper"
import SmartphoneIcon from "@material-ui/icons/Smartphone"
import TabletIcon from "@material-ui/icons/TabletAndroid"
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows"
import PreviewWrapper from "./PreviewWrapper"

const useStyles = makeStyles(theme => ({}))

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
            value={tabIndex}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            aria-label="preview-window-tabs"
          >
            <Tab label="Instructions" />
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
