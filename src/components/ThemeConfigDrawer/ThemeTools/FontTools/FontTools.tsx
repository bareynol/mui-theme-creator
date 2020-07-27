import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import Typography from "@material-ui/core/Typography"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import {
  Card,
  CardHeader,
  CardContent,
  Chip,
  makeStyles,
  Theme,
  createStyles,
  Link,
  TextField,
} from "@material-ui/core"
import AddFont from "./AddFont"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loadedFontTitle: {
      paddingBottom: theme.spacing(1),
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

  return (
    <>
      <Card>
        <CardHeader
          title="Loaded Fonts"
          titleTypographyProps={{ variant: "body2" }}
          className={classes.loadedFontTitle}
        />
        <CardContent className={classes.loadedFontContent}>
          {[...loadedFonts].map(font => (
            <Chip
              label={font}
              key={font}
              size="small"
              style={{ fontFamily: font }}
            />
          ))}
        </CardContent>
      </Card>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            variant="body2"
            style={{ display: "flex", alignItems: "center" }}
          >
            <AddIcon style={{ marginRight: 8 }} />
            Add Fonts
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ flexDirection: "column" }}>
          <AddFont />
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default FontTools
