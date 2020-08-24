import React from "react"
import {
  makeStyles,
  Theme,
  createStyles,
  ThemeProvider,
  Typography,
  Paper,
  Grid,
} from "@material-ui/core"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sampleAreaRoot: {
      overflow: "auto",
      maxHeight: 200,
      paddingLeft: 4,
    },
    sampleAreaPaper: {
      padding: theme.spacing(0.5),
    },
    text: {
      transition: theme.transitions.create("font-size"),
    },
    smallText: {
      // used when the variant is minimized
      fontSize: "1rem",
    },
  })
)

function TypographySampleArea({
  variant,
  bgText,
  paperText,
  smallPreview,
  ...typographyProps
}) {
  const classes = useStyles()
  const themeObject = useSelector((state: RootState) => state.themeObject)
  const typographyClassName = `${typographyProps.className} ${classes.text} ${
    smallPreview ? classes.smallText : ""
  }`
  return (
    <ThemeProvider theme={themeObject}>
      <Paper
        variant="outlined"
        className={classes.sampleAreaRoot}
        style={{
          backgroundColor: themeObject.palette.background.default,
        }}
      >
        <Grid container wrap="nowrap" alignItems="baseline">
          <Grid item>
            <Typography
              variant={variant}
              {...typographyProps}
              className={typographyClassName}
            >
              {bgText}
            </Typography>
          </Grid>
          <Grid item>
            <Paper
              variant="outlined"
              square
              className={classes.sampleAreaPaper}
            >
              <Typography
                variant={variant}
                {...typographyProps}
                className={typographyClassName}
              >
                {paperText}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  )
}

export default TypographySampleArea
