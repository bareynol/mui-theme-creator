import React from "react"
import {
  Accordion,
  AccordionSummary,
  Typography,
  makeStyles,
  createStyles,
  AccordionDetails,
  Theme,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import TypographySampleArea from "./TypographySampleArea"

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

const typographyBaseOptions = ["htmlFontSize", "fontFamily", "fontSize", ""]

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
        {/* {paletteValues.map(([name, path]) => (
          <PaletteInput
            key={`${title}-${name}`}
            label={name}
            getThemeValue={getThemeValue}
            path={path}
          />
        ))} */}
      </AccordionDetails>
    </Accordion>
  )
}

export default TypographyGlobals
