import React from "react"
import { Typography, Button, Grid } from "@mui/material";

import makeStyles from '@mui/styles/makeStyles';

import componentSamples from "./Samples"

const useStyles = makeStyles(theme => ({
  sampleItem: {
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
  sampleContainer: {
    maxWidth: 1000,
    padding: theme.spacing(),
    margin: "auto",
  },
}))

const MuiComponentSamples = () => {
  const classes = useStyles()
  return (
    <div className={classes.sampleContainer}>
      <Typography variant="h4" gutterBottom>
        Material-UI Components
      </Typography>
      {componentSamples.map(({ id, title, component, docs }) => (
        <div key={id} id={id}>
          <Grid container justifyContent="space-between" alignItems="center">
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
          <div className={classes.sampleItem}>{component}</div>
        </div>
      ))}
    </div>
  );
}

export default MuiComponentSamples
