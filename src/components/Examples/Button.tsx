import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice"
import SaveIcon from "@material-ui/icons/Save"

const useStyles = makeStyles(theme => ({
  group: {
    "& > *": {
      margin: theme.spacing(1),
    },
    marginBottom: theme.spacing(2),
  },
}))

export default function ButtonsExample() {
  const classes = useStyles()

  return (
    <div>
      <Typography variant="h6" id="contained-buttons">
        Contained Buttons
      </Typography>
      <div className={classes.group}>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </div>

      <Typography variant="h6" id="text-buttons">
        Text Buttons
      </Typography>
      <div className={classes.group}>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button color="primary" href="#text-buttons">
          Link
        </Button>
      </div>

      <Typography variant="h6" id="outlined-buttons">
        Outlined Buttons
      </Typography>
      <div className={classes.group}>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
      </div>

      <Typography variant="h6" id="buttons-with-icons">
        Buttons with icons and label
      </Typography>
      <div className={classes.group}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="default"
          startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
        <Button
          variant="contained"
          disabled
          color="secondary"
          startIcon={<KeyboardVoiceIcon />}
        >
          Talk
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </div>
    </div>
  )
}
