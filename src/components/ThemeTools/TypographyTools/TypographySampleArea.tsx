import { Grid, Paper, StyledEngineProvider, Theme, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/state/types";

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme { }
}

interface Props {
  variant: "inherit" | "button" | "overline" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2";
  bgText: string;
  paperText: string;
  smallPreview?: boolean;
}
function TypographySampleArea({
  variant,
  bgText,
  paperText,
  smallPreview,
  ...typographyProps
}: Props) {
  const themeObject = useSelector((state: RootState) => state.themeObject)
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themeObject}>
        <Paper
          variant="outlined"
          sx={{
            overflow: "auto",
            maxHeight: 200,
            pl: '4px',
            bgcolor: themeObject.palette.background.default,
          }}
        >
          <Grid container wrap="nowrap" alignItems="baseline">
            <Grid item>
              <Typography
                variant={variant}
                {...typographyProps}
                sx={{
                  transition: (theme) => theme.transitions.create("font-size"),
                  fontSize: smallPreview ? "1rem" : null,
                }}
              >
                {bgText}
              </Typography>
            </Grid>
            <Grid item>
              <Paper
                variant="outlined"
                square
                sx={{ p: 0.5 }}
              >
                <Typography
                  variant={variant}
                  {...typographyProps}
                  sx={{
                    transition: (theme) => theme.transitions.create("font-size"),
                    fontSize: smallPreview ? "1rem" : null,
                  }}
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
