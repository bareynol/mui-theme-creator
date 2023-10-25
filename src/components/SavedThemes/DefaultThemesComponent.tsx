import { Box, Button, ButtonBase, Grid, Popover, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addNewDefaultTheme } from "../../state/actions";
import { NewSavedTheme } from "../../state/types";
import defaultThemes, { defaultThemesId } from "./DefaultThemes";
import ThemeThumbnail from "./ThemeThumbnail";

function DefaultThemesComponent() {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClickTheme = useCallback(
    (newTheme: NewSavedTheme | Omit<NewSavedTheme, "lastUpdated">) => {
      dispatch(addNewDefaultTheme(newTheme))
    },
    [dispatch]
  )

  const open = Boolean(anchorEl)
  const popoverId = open ? "default-themes-popover" : undefined

  return (
    <>
      <Button
        id={defaultThemesId}
        variant="outlined"
        onClick={handleClickButton}
      >
        Example Templates
      </Button>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{ p: 2 }}
      >
        <Grid
          container
          spacing={2}
          wrap="nowrap"
          sx={{
            flex: 1,
            flexGrow: 1,
            overflowX: "auto",
          }}
        >
          {defaultThemes.map(t => (
            <Grid item key={t.name} onClick={() => handleClickTheme(t)}>
              <ButtonBase sx={{
                display: "flex",
                flexDirection: "column",
              }}>
                <Box sx={{
                  position: "relative",
                  "&:hover > .MuiBox-root:last-child": {
                    display: "flex",
                  },
                }}>
                  <ThemeThumbnail themeOptions={t.themeOptions} />
                  <Box sx={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backdropFilter: "blur(2px) saturate(30%) brightness(40%)",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "none",
                  }}>
                    <Typography>Click to add</Typography>
                  </Box>
                </Box>

                <Typography variant="subtitle1">{t.name}</Typography>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Popover>
    </>
  )
}

export default DefaultThemesComponent
