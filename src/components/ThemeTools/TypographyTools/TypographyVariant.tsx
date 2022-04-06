import React, { useState } from "react"
import { Accordion, AccordionSummary, AccordionDetails, Theme, Divider } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import TypographySampleArea from "./TypographySampleArea"
import { useThemeValue } from "src/state/selectors"
import TypographyInput from "./TypographyInput/TypographyInput"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordionSummary: {
      position: "sticky",
      top: 0,
      backgroundColor: theme.palette.background.paper,
      zIndex: theme.zIndex.drawer + 3,
      borderBottom: "1px solid",
      borderBottomColor: theme.palette.divider,
    },
    accordionSummaryContent: {
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

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className={classes.accordionSummary}
        classes={{ content: classes.accordionSummaryContent }}
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
            <Divider />
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

export default TypographyVariant
