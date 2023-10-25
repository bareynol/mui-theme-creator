import Card, { CardProps } from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import React from "react"
import TutorialStepButton from "./TutorialStepButton"

interface Props extends CardProps {
  title: string;
}
const TutorialCard = ({ title, ...props }: Props) => {
  return (
    <Card {...props} sx={{ maxWidth: 750 }}>
      <CardContent>
        <Typography variant="h4">{title}</Typography>
      </CardContent>
      <CardContent>{props.children}</CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "space-between" }}>
        <TutorialStepButton variant="prev" />
        <TutorialStepButton variant="next" />
      </CardActions>
    </Card>
  )
}

export default TutorialCard
