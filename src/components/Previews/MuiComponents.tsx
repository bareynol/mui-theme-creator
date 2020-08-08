import React from "react"
import { Typography, makeStyles, Button, Grid } from "@material-ui/core"

import examples from "./MuiComponentPreviews"

const useStyles = makeStyles(theme => ({
  exampleItem: {
    marginBottom: theme.spacing(10),
    width: "100%",
    maxWidth: 1000,
    paddingLeft: theme.spacing(4),
    margin: "auto",
  },
  inset: {},
  docsButton: {
    marginLeft: theme.spacing(2),
  },
}))

const ComponentExamples = () => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Material-UI Components
      </Typography>
      {examples.map(({ id, title, component, docs }) => (
        <div key={id} id={id}>
          <Grid container justify="space-between" alignItems="center">
            <Typography variant="h5" gutterBottom>
              {title}
            </Typography>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              href={docs}
              target="_blank"
              rel="noreferrer"
            >
              Docs
            </Button>
          </Grid>
          <div className={classes.exampleItem}>{component}</div>
        </div>
      ))}
    </>
  )
}

export default ComponentExamples
