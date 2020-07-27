import React from "react"
import {
  Accordion,
  AccordionSummary,
  Typography,
  makeStyles,
  createStyles,
  AccordionDetails,
  Theme,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ColorInput from "src/components/ColorInput"
import TransitionSampleArea from "./TransitionSampleArea"
import { useThemeValueInfo } from "src/state/selectors"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textTransform: "capitalize",
      width: 100,
    },
    accordionSummary: {
      justifyContent: "space-between",
    },
    accordionDetails: {
      flexDirection: "column",
      "&> *": {
        marginBottom: theme.spacing(2),
      },
    },
    animationContainer: {
      display: "flex",
      flex: 1,
    },
    colorThumbnail: {
      height: "100%",
      width: 15,
      marginLeft: 4,
      border: "1px solid grey",
    },
  })
)

function TransitionEasingItem({
  animate,
  animationLength,
  onAnimationEnd = null,
  variant,
}) {
  const classes = useStyles()
  const { modifiedByUser, value } = useThemeValueInfo(
    `transitions.easing.${variant}`
  )
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        classes={{ content: classes.accordionSummary }}
      >
        <Typography className={classes.title} variant="body2">
          {variant}
        </Typography>
        <div className={classes.animationContainer}>
          <TransitionSampleArea
            animationTimingFunction={value}
            animate={animate}
            animationLength={animationLength}
            onAnimationEnd={onAnimationEnd}
          />
        </div>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {/* {paletteValues.map(([name, path]) => (
          <PaletteInput
            key={`${title}-${name}`}
            label={name}
            getThemeValue={getThemeValue}
            path={path}
          />
        ))} */}
      </AccordionDetails>
    </Accordion>
  )
}

export default TransitionEasingItem
