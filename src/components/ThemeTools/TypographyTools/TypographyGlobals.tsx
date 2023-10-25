import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Divider } from "@mui/material";
import React from "react";
import TypographyInput from "./TypographyInput/TypographyInput";
import TypographySampleArea from "./TypographySampleArea";

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
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          position: "sticky",
          top: 0,
          bgcolor: 'background.paper',
          zIndex: (theme) => theme.zIndex.drawer + 3,
          borderBottom: 1,
          borderBottomColor: 'divider',
          '& .MuiAccordionSummary-content': {
            maxWidth: "100%",
            overflow: "auto",
          }
        }}
      >
        <TypographySampleArea
          variant="body1"
          bgText="Base Typography"
          paperText="Styles"
        />
      </AccordionSummary>
      <AccordionDetails sx={{
        flexDirection: "column",
        "&> *": {
          mb: 2,
        },
      }}>
        {defaultGlobalProperties.map(property => (
          <div key={`base-text-${property}`}>
            <TypographyInput
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
