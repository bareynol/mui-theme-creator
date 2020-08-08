import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import Typography from "@material-ui/core/Typography"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import {
  Card,
  CardContent,
  Chip,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core"
import AddFontInput from "./AddFontInput"
import PopularFontList from "./PopularFontList"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <AddFontInput />
        </AccordionSummary>
        <AccordionDetails style={{ flexDirection: "column" }}>
          <PopularFontList />
        </AccordionDetails>
      </Accordion>
      <Card>
        <CardContent>
          <Typography variant="body2">
            Current Theme Font Dependencies
          </Typography>
          <div className={classes.loadedFontContent}>
            {[...currentFonts].map(font => (
              <Chip
                label={font}
                key={font}
                size="small"
                style={{ fontFamily: font }}
              />
            ))}
          </div>
        </CardContent>
        <CardContent>
          <Typography variant="body2">Loaded Fonts</Typography>
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
        </CardContent>
      </Card>
    </>
  )
}

export default FontTools
