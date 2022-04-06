import React, { useCallback } from "react"
import Button from "@mui/material/Button"
import { useDispatch } from "react-redux"
import { toggleTutorial } from "src/state/actions"
import { Link } from "@mui/material"

const TutorialButton = () => {
  const dispatch = useDispatch()
  const handleToggle = useCallback(() => dispatch(toggleTutorial()), [dispatch])

  return <Button onClick={handleToggle}>Tutorial</Button>
}

export default TutorialButton

export const TutorialLink = ({ children }) => {
  const dispatch = useDispatch()
  const handleToggle = useCallback(() => dispatch(toggleTutorial()), [dispatch])

  return <Link onClick={handleToggle} underline="hover">{children}</Link>;
}
