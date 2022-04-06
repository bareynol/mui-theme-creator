import React, { useEffect, useCallback } from "react"
import Backdrop from "@mui/material/Backdrop"
import Button from "@mui/material/Button"
import Portal from "@mui/material/Portal"
import Typography from "@mui/material/Typography"
import { Theme } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import CloseIcon from "@mui/icons-material/Close"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/types"
import {
  setActiveTab,
  resetTutorialStep,
  toggleTutorial,
} from "src/state/actions"

import stepList from "./Steps"
import TutorialStepButton from "./TutorialStepButton"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 5000,
      position: "relative",
    },
    title: {
      position: "absolute",
      top: 0,
      textAlign: "center",
      display: "flex",
      alignItems: "baseline",
      "& > *": {
        margin: `0 ${theme.spacing()}`,
      },
    },
    closeButton: {
      position: "absolute",
      top: 0,
      right: 0,
      fontSize: "1.5rem",
    },
    closeIcon: {
      fontSize: "2rem",
    },
  })
)

export const TutorialContent = () => {
  const classes = useStyles()
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
      <div className={classes.root}>
        <Backdrop open>
          <div className={classes.title}>
            <TutorialStepButton variant="prev" />
            <Typography variant="h3">Tutorial</Typography>
            <Typography>{`(${step + 1}/${stepList.length})`}</Typography>
            <TutorialStepButton variant="next" />
          </div>

          <Button
            onClick={handleClose}
            endIcon={<CloseIcon className={classes.closeIcon} />}
            className={classes.closeButton}
          >
            Close
          </Button>
          <CurrentStep />
        </Backdrop>
      </div>
    </Portal>
  )
}

const Tutorial = () => {
  const open = useSelector((state: RootState) => state.tutorialOpen)
  return open ? <TutorialContent /> : null
}

export default Tutorial
