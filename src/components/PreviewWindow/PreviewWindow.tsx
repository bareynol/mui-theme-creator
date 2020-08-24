import React from "react"
import { AppBar, Tabs, Tab, Tooltip } from "@material-ui/core"
import AppBarExample from "src/components/MuiComponentSamples/Samples/AppBar"
import DefaultExample from "./Samples/DefaultExample"
import SignUpExample from "./Samples/SignUpExample"
import DashboardExample from "./Samples/DashboardExample"
import BlogExample from "./Samples/BlogExample"
import PricingExample from "./Samples/PricingExample"
import CheckoutExample from "./Samples/CheckoutExample"
import PreviewWrapper from "./PreviewWrapper"
import DrawerExample from "./Samples/DrawerExample"

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

export const previewNavTabsId = "preview-nav-tabs"

const PreviewWindow = () => {
  const [tabIndex, setTabIndex] = React.useState(0)
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const handleChange = (event: React.ChangeEvent<{}>, newTabIndex: number) => {
    setTabIndex(newTabIndex)
  }

  const handleOpenDrawer = () => setDrawerOpen(true)
  const handleCloseDrawer = () => setDrawerOpen(false)

  return (
    <PreviewWrapper>
      <AppBarExample onDrawerButtonClick={handleOpenDrawer} />
      <Tooltip title={`<AppBar color="primary">`} placement="left" arrow>
        <AppBar position="static" id={previewNavTabsId}>
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

      <div>
        <DrawerExample open={drawerOpen} onClose={handleCloseDrawer} />
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
    </PreviewWrapper>
  )
}

export default PreviewWindow
