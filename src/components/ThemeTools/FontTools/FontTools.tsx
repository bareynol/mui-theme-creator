import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Box, Chip } from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import AddFontInput from "./AddFontInput"
import PopularFontList from "./PopularFontList"

const loadedFontContentStyle = {
  display: "flex",
  flexWrap: "wrap",
  "& > *": {
    m: 0.5,
  },
  maxHeight: 200,
  overflowY: "auto",
};

function FontTools() {
  const loadedFonts = useSelector((state: RootState) => state.loadedFonts)
  const currentFonts = useSelector(
    (state: RootState) => state.savedThemes[state.themeId].fonts
  )

  return (
    <>
      <Accordion>
        <AccordionSummary>
          <AddFontInput />
        </AccordionSummary>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body2">Popular Fonts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PopularFontList />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={currentFonts.length < 5}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '0.875rem' }}>
          {`Fonts used in current theme (${currentFonts.length})`}
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={loadedFontContentStyle}>
            {currentFonts.map(font => (
              <Chip
                label={font}
                key={font}
                size="small"
                style={{ fontFamily: font }}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontSize: '0.875rem' }}>
          {`Loaded and Available Fonts (${loadedFonts.size})`}
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={loadedFontContentStyle}>
            {[...loadedFonts].map(font => (
              <Chip
                label={font}
                key={font}
                size="small"
                style={{ fontFamily: font }}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default FontTools
