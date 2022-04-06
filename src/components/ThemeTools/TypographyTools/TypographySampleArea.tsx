import React from "react"
import { Theme, ThemeProvider, StyledEngineProvider, Typography, Paper, Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


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
    <StyledEngineProvider injectFirst>
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
    </StyledEngineProvider>
  );
}

export default TypographySampleArea
