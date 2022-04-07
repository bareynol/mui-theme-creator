import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import React from "react";
import { useThemeValue } from "src/state/selectors";
import PaletteInput from "./PaletteInput";

interface PaletteSubTypeProps {
  title: string
  path: string
  paletteValues: [string, string][] // [name, path]
}

export default function PaletteSubType({
  title,
  path,
  paletteValues,
}: PaletteSubTypeProps) {
  const themeValues = useThemeValue(path)

  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{
          '& .MuiAccordionSummary-expandIconWrapper': {
            ml: 1.5
          }
        }}>
          <Typography sx={{ textTransform: "capitalize" }} variant="body2">
            {title}
          </Typography>
          <Box sx={{
            display: "flex",
            alignSelf: "stretch",
          }}>
            {paletteValues.map(([name, subPath]) => (
              <Box
                key={name}
                sx={{
                  height: 1,
                  width: 15,
                  ml: '4px',
                  border: 1,
                  borderColor: "#808080",
                  bgcolor: themeValues?.[subPath]
                }}
              />
            ))}
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{
          flexDirection: "column",
          "&> *": {
            mb: 2,
          },
        }}>
          {paletteValues.map(([name, subPath]) => (
            <PaletteInput
              key={`${title}-${name}`}
              label={name}
              path={`${path}.${subPath}`}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  )
}
