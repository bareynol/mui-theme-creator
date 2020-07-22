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
import ColorInput from "src/components/ColorInput"
import PaletteInput from "./PaletteInput"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      textTransform: "capitalize",
    },
    accordionSummary: {
      justifyContent: "space-between",
    },
    accordionDetails: {
      flexDirection: "column",
      "&> *": {
        marginBottom: theme.spacing(2),
      },
    },
    thumbnailContainer: {
      display: "flex",
    },
    colorThumbnail: {
      height: "100%",
      width: 15,
      marginLeft: 4,
      border: "1px solid grey",
    },
  })
)

interface PaletteSubTypeProps {
  title: string
  getThemeValue: Function
  paletteValues: [string, string][] // [name, path]
}

export default function PaletteSubType({
  title,
  getThemeValue,
  paletteValues,
}: PaletteSubTypeProps) {
  const classes = useStyles()
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          classes={{ content: classes.accordionSummary }}
        >
          <Typography className={classes.title} variant="body2">
            {title}
          </Typography>
          <div className={classes.thumbnailContainer}>
            {paletteValues.map(([name, path]) => (
              <div
                key={name}
                className={classes.colorThumbnail}
                style={{ backgroundColor: getThemeValue(path).value }}
              />
            ))}
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          {paletteValues.map(([name, path]) => (
            <PaletteInput
              key={`${title}-${name}`}
              label={name}
              getThemeValue={getThemeValue}
              path={path}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  )
}
