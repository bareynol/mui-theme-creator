import React, { useMemo } from "react"
import examples from "src/components/Examples"
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

const drawerWidth: React.CSSProperties["width"] = 200

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
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
  listItemText: {
    paddingLeft: theme.spacing(2),
  },
}))

const NavDrawer = () => {
  const classes = useStyles()

  const NavLink = React.forwardRef((linkProps, ref) => (
    <Link ref={ref} {...linkProps} />
  ))

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List dense>
          <ListSubheader>Components</ListSubheader>
          {examples.map(({ id, title }) => (
            <ListItem key={id} button component={NavLink} href={`#${id}`}>
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

export default NavDrawer
