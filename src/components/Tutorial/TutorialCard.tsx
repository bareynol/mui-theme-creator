import React from "react"
import clsx from "clsx"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import { Theme, makeStyles, createStyles } from "@material-ui/core"
import TutorialStepButton from "./TutorialStepButton"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 750,
    },
    cardActions: {
      justifyContent: "space-between",
    },
  })
)

const TutorialCard = ({ title, ...props }) => {
  const classes = useStyles()
  return (
    <Card {...props} className={clsx(props.className, classes.card)}>
      <CardContent>
        <Typography variant="h4">{title}</Typography>
      </CardContent>
      <CardContent>{props.children}</CardContent>
      <Divider />
      <CardActions className={classes.cardActions}>
        <TutorialStepButton variant="prev" />
        <TutorialStepButton variant="next" />
      </CardActions>
    </Card>
  )
}

export default TutorialCard
