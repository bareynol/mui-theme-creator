import CloseIcon from "@mui/icons-material/Close"
import { Box } from "@mui/material"
import Backdrop from "@mui/material/Backdrop"
import Button from "@mui/material/Button"
import Portal from "@mui/material/Portal"
import Typography from "@mui/material/Typography"
import React, { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  resetTutorialStep, setActiveTab, toggleTutorial
} from "src/state/actions"
import { RootState } from "src/state/types"
import stepList from "./Steps"
import TutorialStepButton from "./TutorialStepButton"

export const TutorialContent = () => {
  const previewWindowTab = useSelector((state: RootState) => state.activeTab)
  const step = useSelector((state: RootState) => state.tutorialStep)
  const dispatch = useDispatch()
  const handleClose = useCallback(() => dispatch(toggleTutorial()), [dispatch])

  useEffect(function onStart() {
    return function onEnd() {
      // reset to the originally opened tab
      dispatch(setActiveTab(previewWindowTab))
      dispatch(resetTutorialStep())
    }
  }, [])

  const CurrentStep = stepList[step]
  return (
    <Portal>
      <Box sx={{
        zIndex: 5000,
        position: "relative",
      }}>
        <Backdrop open>
          <Box sx={{
            position: "absolute",
            top: 0,
            textAlign: "center",
            display: "flex",
            alignItems: "baseline",
            "& > *": {
              my: 0,
              mx: 1
            },
          }}>
            <TutorialStepButton variant="prev" />
            <Typography variant="h3">Tutorial</Typography>
            <Typography>{`(${step + 1}/${stepList.length})`}</Typography>
            <TutorialStepButton variant="next" />
          </Box>

          <Button
            onClick={handleClose}
            endIcon={<CloseIcon sx={{ fontSize: "2rem" }} />}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              fontSize: "1.5rem",
            }}
          >
            Close
          </Button>
          <CurrentStep />
        </Backdrop>
      </Box>
    </Portal>
  )
}

const Tutorial = () => {
  const open = useSelector((state: RootState) => state.tutorialOpen)
  return open ? <TutorialContent /> : null
}

export default Tutorial
