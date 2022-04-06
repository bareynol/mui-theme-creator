import {
  Box, Button,
  darken, Dialog, DialogContent, Hidden, Slide, SlideProps, Typography
} from "@mui/material"
import { TransitionProps } from "@mui/material/transitions/transition"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import hereBeDragonsImage from "src/images/herebedragons.webp"
import { loadFonts } from "src/state/actions"
import { RootState } from "src/state/types"

const Transition = React.forwardRef<HTMLElement, SlideProps>(function Transition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const SmallScreenWarning = () => {
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
        sx={{ bgcolor: (theme) => darken(theme.palette.error.dark, 0.5) }}
      >
        <DialogContent sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
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
          <Box sx={{
            textAlign: "center",
            marginBottom: 32,
            "& > *": {
              fontFamily: '"Press Start 2P"',
            },
          }}>
            <Typography align="center">Warning to all who enter</Typography>
            <Button variant="outlined" onClick={handleClose}>
              Here be dragons
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Hidden>
  )
}

export default SmallScreenWarning
