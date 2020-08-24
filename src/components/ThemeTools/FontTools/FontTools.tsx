import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import Typography from "@material-ui/core/Typography"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import { Chip, makeStyles, Theme, createStyles } from "@material-ui/core"
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
