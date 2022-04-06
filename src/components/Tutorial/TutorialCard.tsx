import React from "react"
import clsx from "clsx"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import { Theme } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
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
