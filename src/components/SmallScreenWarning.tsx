import React, { useEffect } from "react"
import {
  Hidden,
  Dialog,
  Typography,
  DialogContent,
  DialogContentText,
  Slide,
  makeStyles,
  Theme,
  createStyles,
  DialogTitle,
  Button,
  darken,
} from "@material-ui/core"
import { TransitionProps } from "@material-ui/core/transitions/transition"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import hereBeDragonsImage from "src/images/herebedragonsanimated.webp"
import { loadFonts } from "src/state/actions"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogPaper: {
      backgroundColor: darken(theme.palette.error.dark, 0.5),
    },
  })
)

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const SmallScreenWarning = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    loadFonts(["Press Start 2P"])
  }, [])

  return (
    <Hidden smUp>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle>
          Material-UI Theme Creator Small Screen Warning
        </DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <Typography align="center" paragraph>
              This is a developer tool, designed for use on large screens
            </Typography>
            <Typography align="center">
              You are viewing this on a small screen, and will likely have
              issues viewing content or using the tools.
            </Typography>
          </div>
          <img
            src={hereBeDragonsImage}
            alt="Here Be Dragons... (for small screens)"
            width="75%"
          />
          <div style={{ textAlign: "center" }}>
            <Typography
              align="center"
              style={{ fontFamily: '"Press Start 2P"' }}
            >
              Warning to all who enter
            </Typography>
            <Button
              variant="outlined"
              style={{ fontFamily: '"Press Start 2P"' }}
            >
              Here be dragons
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Hidden>
  )
}

export default SmallScreenWarning
