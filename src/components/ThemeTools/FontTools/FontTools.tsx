import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import Typography from "@mui/material/Typography"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import { Chip, Theme } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import AddFontInput from "./AddFontInput"
import PopularFontList from "./PopularFontList"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popularFontList: {
      flexDirection: "column",
    },
    loadedFontContent: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
      maxHeight: 200,
      overflowY: "auto",
    },
  })
)

function FontTools() {
  const classes = useStyles()
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
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {`Fonts used in current theme (${currentFonts.length})`}
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.loadedFontContent}>
            {currentFonts.map(font => (
              <Chip
                label={font}
                key={font}
                size="small"
                style={{ fontFamily: font }}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {`Loaded and Available Fonts (${loadedFonts.size})`}
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.loadedFontContent}>
            {[...loadedFonts].map(font => (
              <Chip
                label={font}
                key={font}
                size="small"
                style={{ fontFamily: font }}
              />
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default FontTools
