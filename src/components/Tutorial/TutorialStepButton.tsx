import React, { useCallback } from "react"
import { RootState } from "src/state/types"
import { useSelector, useDispatch } from "react-redux"
import {
  incrementTutorialStep,
  decrementTutorialStep,
  toggleTutorial,
} from "src/state/actions"
import Button from "@material-ui/core/Button"
import stepList from "./Steps"

const TutorialStepButton = ({ variant }) => {
  const tutorialStep = useSelector((state: RootState) => state.tutorialStep)
  const dispatch = useDispatch()

  const handleNext = useCallback(() => {
    dispatch(incrementTutorialStep())
  }, [dispatch])

  const handlePrev = useCallback(() => {
    dispatch(decrementTutorialStep())
  }, [dispatch])

  const handleClose = useCallback(() => {
    dispatch(toggleTutorial())
  }, [dispatch])

  if (variant === "next" && tutorialStep === stepList.length - 1) {
    return <Button onClick={handleClose}>Finish</Button>
  }

  return (
    <Button
      disabled={
        (variant === "prev" && tutorialStep === 0) ||
        (variant === "next" && tutorialStep === stepList.length - 1)
      }
      onClick={
        variant === "next"
          ? handleNext
          : variant === "prev"
          ? handlePrev
          : undefined
      }
    >
      {variant === "next" && "Next"}
      {variant === "prev" && "Prev"}
    </Button>
  )
}

export default TutorialStepButton
