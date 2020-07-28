import React from "react"
import {
  Accordion,
  AccordionSummary,
  Typography,
  makeStyles,
  createStyles,
  AccordionDetails,
  Theme,
  Divider,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import TypographySampleArea from "./TypographySampleArea"
import TypographyInput from "./TypographyInput/TypographyInput"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordionDetails: {
      flexDirection: "column",
      "&> *": {
        marginBottom: theme.spacing(2),
      },
    },
  })
)

const defaultGlobalProperties = [
  "htmlFontSize",
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
]

function TypographyGlobals() {
  const classes = useStyles()
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <TypographySampleArea
          variant="body1"
          bgText="Base Typography"
          paperText="Styles"
        />
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {defaultGlobalProperties.map(property => (
          <div key={`base-text-${property}`}>
            <TypographyInput
              label={property}
              variantPath="typography"
              property={property}
            />
            <Divider style={{ marginBottom: 0 }} />
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

export default TypographyGlobals
