import React, { useEffect } from "react"
import {
  Hidden,
  Dialog,
  Typography,
  DialogContent,
  Slide,
  makeStyles,
  Theme,
  createStyles,
  Button,
  darken,
} from "@material-ui/core"
import { TransitionProps } from "@material-ui/core/transitions/transition"
import hereBeDragonsImage from "src/images/herebedragons.webp"
import { loadFonts } from "src/state/actions"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/types"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialogPaper: {
      backgroundColor: darken(theme.palette.error.dark, 0.5),
    },
    dialogContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    exitButtonArea: {
      textAlign: "center",
      marginBottom: 32,
      "& > *": {
        fontFamily: '"Press Start 2P"',
      },
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
  const warningSeen = useSelector((state: RootState) => state.mobileWarningSeen)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch({ type: "WARNING_SCREEN_SEEN" })
  }

  useEffect(() => {
    loadFonts(["Press Start 2P"])
  }, [])

  return (
    <Hidden smUp>
      <Dialog
        fullScreen
        open={!warningSeen}
        onClose={handleClose}
        TransitionComponent={Transition}
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogContent className={classes.dialogContent}>
          <Typography variant="h5">Material-UI Theme Creator</Typography>
          <Typography variant="h6">You are using a small screen</Typography>
          <div>
            <Typography align="center" paragraph>
              This is a developer tool, designed for use on large screens
            </Typography>
            <Typography align="center">
              You will likely have issues viewing content or using the tools.
            </Typography>
          </div>
          <img
            src={hereBeDragonsImage}
            alt="Here Be Dragons... (for small screens)"
            width="75%"
          />
          <div className={classes.exitButtonArea}>
            <Typography align="center">Warning to all who enter</Typography>
            <Button variant="outlined" onClick={handleClose}>
              Here be dragons
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Hidden>
  )
}

export default SmallScreenWarning
