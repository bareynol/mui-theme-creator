import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Divider } from "@mui/material";
import React, { useState } from "react";
import TypographyInput from "./TypographyInput/TypographyInput";
import TypographySampleArea from "./TypographySampleArea";

const defaultVariantProperties = [
  "fontFamily",
  "fontSize",
  "fontWeight",
  "lineHeight",
  "letterSpacing",
]

interface Props {
  variant: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2"
  text: string
  smallPreview?: boolean
}
function TypographyVariant({ variant, text, smallPreview = false }: Props) {
  const [expanded, setExpanded] = useState(false)

  const variantPath = `typography.${variant}`

  return (
    <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
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
          variant={variant}
          bgText={`${variant}.`}
          paperText={text}
          smallPreview={smallPreview && !expanded}
        />
      </AccordionSummary>
      <AccordionDetails sx={{
        flexDirection: "column",
        "&> *": {
          mb: 2,
        },
      }}>
        {defaultVariantProperties.map(property => (
          <div key={`${variant}-${property}`}>
            <TypographyInput
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
