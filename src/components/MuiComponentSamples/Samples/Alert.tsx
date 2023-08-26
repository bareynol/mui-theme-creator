import { Alert, AlertTitle, Grid } from "@mui/material"
import React from "react"

const sectionProps = {
  item: true,
  xs: 12,
  lg: 6,
  xl: 4,
  gap: 2,
  sx: { display: "flex", flexDirection: "column" },
}

const AlertExample = () => (
  <Grid container spacing={2}>
    <Grid {...sectionProps}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Grid>

    <Grid {...sectionProps}>
      <Alert severity="error" variant="outlined">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="warning" variant="outlined">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="info" variant="outlined">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="success" variant="outlined">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Grid>

    <Grid {...sectionProps}>
      <Alert severity="error" variant="filled">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="warning" variant="filled">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="info" variant="filled">
        <AlertTitle>Info</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
      <Alert severity="success" variant="filled">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Grid>
  </Grid>
)

export default AlertExample
