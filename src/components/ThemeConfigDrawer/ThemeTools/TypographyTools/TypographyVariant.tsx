import React, { useState } from "react"
import {
  Accordion,
  AccordionSummary,
  makeStyles,
  createStyles,
  AccordionDetails,
  Theme,
  Divider,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import TypographySampleArea from "./TypographySampleArea"
import { useThemeValue } from "src/state/selectors"
import TypographyInput from "./TypographyInput/TypographyInput"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordionSummary: {
      maxWidth: "100%",
      overflow: "auto",
    },
    accordionDetails: {
      flexDirection: "column",
      "&> *": {
        marginBottom: theme.spacing(2),
      },
    },
  })
)

const defaultVariantProperties = [
  "fontFamily",
  "fontSize",
  "fontWeight",
  "lineHeight",
  "letterSpacing",
]

function TypographyVariant({ variant, text, smallPreview = false }) {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const variantPath = `typography.${variant}`
  // const themeValue = useThemeValue(variantPath)
  // console.log(variant, modifiedByUser, value)

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        classes={{ content: classes.accordionSummary }}
      >
        <TypographySampleArea
          variant={variant}
          bgText={`${variant}.`}
          paperText={text}
          smallPreview={smallPreview && !expanded}
        />
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {defaultVariantProperties.map(property => (
          <div key={`${variant}-${property}`}>
            <TypographyInput
              label={property}
              variantPath={variantPath}
              property={property}
            />
            <Divider style={{ marginBottom: 0 }} />
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

export default TypographyVariant
