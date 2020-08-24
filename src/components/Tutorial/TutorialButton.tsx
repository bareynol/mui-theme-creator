import React, { useCallback } from "react"
import Button from "@material-ui/core/Button"
import { useDispatch } from "react-redux"
import { toggleTutorial } from "src/state/actions"
import { Link } from "@material-ui/core"

const TutorialButton = () => {
  const dispatch = useDispatch()
  const handleToggle = useCallback(() => dispatch(toggleTutorial()), [dispatch])

  return <Button onClick={handleToggle}>Tutorial</Button>
}

export default TutorialButton

export const TutorialLink = ({ children }) => {
  const dispatch = useDispatch()
  const handleToggle = useCallback(() => dispatch(toggleTutorial()), [dispatch])

  return <Link onClick={handleToggle}>{children}</Link>
}
