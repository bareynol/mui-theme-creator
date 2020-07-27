import React, { useRef, useEffect, useState } from "react"
import { makeStyles, Theme, createStyles, withStyles } from "@material-ui/core"

const animationLength = 2 // length of animation in seconds

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      height: 30,
    },
    box: {
      width: 30,
      height: 30,
      backgroundColor: "grey",
    },
    animatedObject: {
      animation: `forwards $fadeIn`,
    },
    "@keyframes fadeIn": {
      from: { marginLeft: "0%" },
      to: { marginLeft: "90%" },
    },
  })
)

interface TransitionSampleAreaProps {}

interface TransitionSampleAreaState {
  animate: boolean
}

function TransitionSampleArea({
  animate,
  animationTimingFunction,
  animationLength,
  onAnimationEnd,
}) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div
        style={{
          animationTimingFunction: animationTimingFunction,
          animationDuration: `${animationLength}s`,
          animationIterationCount: animate ? "infinite" : 1,
          animationPlayState: animate ? "running" : "paused",
        }}
        className={`${classes.box} ${classes.animatedObject}`}
        onAnimationIteration={onAnimationEnd}
      />
    </div>
  )
}

export default TransitionSampleArea
