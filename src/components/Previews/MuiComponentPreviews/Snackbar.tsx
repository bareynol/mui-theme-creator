import React from "react"
import Button from "@material-ui/core/Button"
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles"
import SnackbarContent from "@material-ui/core/SnackbarContent"
import { IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 600,
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
)

export default function SnackbarExample() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SnackbarContent message="I love snacks." action={action} />
      <SnackbarContent
        message={
          "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
        }
        action={
          <IconButton size="small" aria-label="close" color="inherit">
            <CloseIcon />
          </IconButton>
        }
      />
      <SnackbarContent
        message="I love candy. I love cookies. I love cupcakes."
        action={action}
      />
      <SnackbarContent
        message={
          "I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate."
        }
        action={action}
      />
    </div>
  )
}
