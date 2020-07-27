import React, { useState, useRef, useEffect } from "react"
import TransitionEasingItem from "./TransitionEasingItem"

function TransitionTools() {
  const [animate, setAnimate] = useState(true)
  const animationLength = 2 //seconds
  const timerRef = useRef()

  const handleAnimationEnd = event => {
    console.log("animation end")
    setAnimate(false)
    timerRef.current = setTimeout(() => setAnimate(true), 1000)
  }

  useEffect(() => {
    return () => {
      console.log("clearing timeout")
      clearTimeout(timerRef.current)
    }
  }, [])
  return (
    <>
      <TransitionEasingItem
        variant="easeInOut"
        animate={animate}
        animationLength={animationLength}
        onAnimationEnd={handleAnimationEnd}
      />
      <TransitionEasingItem
        variant="easeOut"
        animate={animate}
        animationLength={animationLength}
      />
      <TransitionEasingItem
        variant="easeIn"
        animate={animate}
        animationLength={animationLength}
      />
      <TransitionEasingItem
        variant="sharp"
        animate={animate}
        animationLength={animationLength}
      />
    </>
  )
}

export default TransitionTools
