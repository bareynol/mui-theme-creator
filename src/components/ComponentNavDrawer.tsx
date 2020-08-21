import React from "react"
import componentSamples from "src/components/MuiComponentSamples/Samples"
import {
  Drawer,
  List,
  makeStyles,
  ListSubheader,
  ListItem,
  ListItemText,
  Toolbar,
  Link,
} from "@material-ui/core"
import { useDispatch } from "react-redux"
import { setActiveTab } from "src/state/actions"

const drawerWidth: React.CSSProperties["width"] = 200

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [theme.breakpoints.up("md")]: {
      height: "calc(100vh - 64px)",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  editorWrapper: {
    overflow: "auto",
    flexGrow: 1,
  },
  list: {
    backgroundColor: theme.palette.background.paper,
  },
  listItemText: {
    paddingLeft: theme.spacing(2),
  },
}))

export const componentNavDrawerId = "component-nav-drawer"

const ComponentNavDrawer = () => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const openComponentsTab = React.useCallback(
    () => dispatch(setActiveTab("components")),
    [dispatch]
  )

  const NavLink = React.forwardRef((linkProps, ref) => (
    <Link ref={ref} {...linkProps} color="textPrimary" />
  ))

  return (
    <Drawer
      id={componentNavDrawerId}
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      {/* <Toolbar /> */}
      <div className={classes.drawerContainer}>
        <List dense className={classes.list}>
          <ListSubheader>Components</ListSubheader>
          {componentSamples.map(({ id, title }) => (
            <ListItem
              key={id}
              button
              component={NavLink}
              href={`#${id}`}
              onClick={openComponentsTab}
            >
              <ListItemText
                primary={title}
                className={classes.listItemText}
                primaryTypographyProps={{
                  variant: "body2",
                }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  )
}

export default ComponentNavDrawer
