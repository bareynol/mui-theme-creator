import React, { useState, useEffect, useCallback } from "react"
import Backdrop from "@material-ui/core/Backdrop"
import Button from "@material-ui/core/Button"
import Portal from "@material-ui/core/Portal"
import Typography from "@material-ui/core/Typography"
import { makeStyles, Theme, createStyles } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
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
        margin: `0 ${theme.spacing()}px`,
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

const Tutorial = ({ onClose }) => {
  const classes = useStyles()
  const previewWindowTab = useSelector((state: RootState) => state.activeTab)
  const step = useSelector((state: RootState) => state.tutorialStep)
  const dispatch = useDispatch()

  useEffect(function onStart() {
    return function onEnd() {
      // reset to the originally opened tab
      dispatch(setActiveTab(previewWindowTab))
      dispatch(resetTutorialStep())
    }
  }, [])

  // Portal avoids any parent z-index issues from this component being included in the Header
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
            onClick={onClose}
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

export default Tutorial

export const TutorialButton = () => {
  const open = useSelector((state: RootState) => state.tutorialOpen)
  const dispatch = useDispatch()
  const handleToggle = useCallback(() => dispatch(toggleTutorial()), [dispatch])

  return (
    <>
      <Button onClick={handleToggle}>Tutorial</Button>
      {open && <Tutorial onClose={handleToggle} />}
    </>
  )
}
