import React, { useState } from "react"
import {
  ListItemText,
  ListItem,
  Collapse,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core"

import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      marginLeft: theme.spacing(2),
      borderLeft: "solid 2px",
      borderLeftColor: theme.palette.divider,
    },
  })
)

export default function NestedListItem({ primary, children, ...other }) {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItem {...other} button onClick={handleClick}>
        <ListItemText primary={primary} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className={classes.nested}>{children}</div>
      </Collapse>
    </>
  )
}
