import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ListSubheader from "@material-ui/core/ListSubheader"
import DashboardIcon from "@material-ui/icons/Dashboard"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import PeopleIcon from "@material-ui/icons/People"
import BarChartIcon from "@material-ui/icons/BarChart"
import LayersIcon from "@material-ui/icons/Layers"
import AssignmentIcon from "@material-ui/icons/Assignment"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import { makeStyles, Theme, createStyles, Toolbar } from "@material-ui/core"

const drawerWidth = 240
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerBackdrop: {
      position: "absolute",
    },
  })
)

const DrawerExample = ({ open, onClose }) => {
  const classes = useStyles()
  const drawerRef = React.useRef<HTMLElement | null>(null)

  const getParent = () => drawerRef.current?.parentElement

  return (
    <Drawer
      variant="temporary"
      open={open}
      onClose={onClose}
      ref={drawerRef}
      ModalProps={{
        container: getParent(),
        disablePortal: true,
        BackdropProps: {
          classes: { root: classes.drawerBackdrop },
        },
      }}
      style={{ position: "absolute" }}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <List>{mainListItems}</List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  )
}

export default DrawerExample

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
)

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
)
