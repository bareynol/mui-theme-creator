import React from "react"
import { Accordion, AccordionSummary, AccordionDetails, Theme, Divider } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import TypographySampleArea from "./TypographySampleArea"
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

const defaultGlobalProperties = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
]

function TypographyGlobals() {
  const classes = useStyles()
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className={classes.accordionSummary}
        classes={{ content: classes.accordionSummaryContent }}
      >
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
            <Divider />
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

export default TypographyGlobals
