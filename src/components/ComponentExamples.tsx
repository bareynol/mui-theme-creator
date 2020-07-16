import React from "react"
import { Container, Typography, makeStyles } from "@material-ui/core"

import TypographyExample from "./Examples/Typography"

import examples from "./Examples"

const useStyles = makeStyles(theme => ({
  exampleItem: {
    marginBottom: theme.spacing(10),
    width: "100%",
    maxWidth: 1000,
    paddingLeft: theme.spacing(4),
    margin: "auto",
  },
  inset: {},
  anchor: {
    "&::before": {
      content: '""',
      display: "block",
      height: 64,
      marginTop: -64,
      visibility: "hidden",
    },
  },
}))

const ComponentExamples = () => {
  const classes = useStyles()
  return (
    <>
      {/* Offset for the app bar */}
      <Typography variant="h4" gutterBottom>
        Material-UI Components
      </Typography>
      {examples.map(({ id, title, component, docs }) => (
        <div key={id}>
          <Typography
            className={classes.anchor}
            variant="h5"
            id={id}
            gutterBottom
          >
            {title}
          </Typography>
          <div className={classes.exampleItem}>{component}</div>
        </div>
      ))}
    </>
  )
}

export default ComponentExamples
