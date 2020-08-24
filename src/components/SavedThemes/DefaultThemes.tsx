import React, { useCallback } from "react"

import {
  Button,
  ButtonBase,
  createStyles,
  Grid,
  makeStyles,
  Popover,
  Theme,
  Typography,
} from "@material-ui/core"

import { useDispatch } from "react-redux"
import { addNewDefaultTheme } from "src/state/actions"
import { NewSavedTheme } from "src/state/types"
import defaultThemes from "./defaultThemes"
import ThemeThumbnail from "./ThemeThumbnail"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonRoot: {
      display: "flex",
      flexDirection: "column",
    },
    thumbnailContainer: {
      position: "relative",
      "&:hover $hoverArea": {
        display: "flex",
      },
    },
    hoverArea: {
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
    },
    templatePopover: {
      padding: theme.spacing(2),
    },
    templateContainer: {
      flex: 1,
      flexGrow: 1,
      overflowX: "auto",
    },
  })
)

export const defaultThemesId = "default-themes"

function DefaultThemes() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClickTheme = useCallback(
    (newTheme: NewSavedTheme) => {
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
        classes={{ paper: classes.templatePopover }}
      >
        <Grid
          container
          spacing={2}
          wrap="nowrap"
          className={classes.templateContainer}
        >
          {defaultThemes.map(t => (
            <Grid item key={t.name} onClick={() => handleClickTheme(t)}>
              <ButtonBase className={classes.buttonRoot}>
                <div className={classes.thumbnailContainer}>
                  <ThemeThumbnail themeOptions={t.themeOptions} />
                  <div className={classes.hoverArea}>
                    <Typography>Click to add</Typography>
                  </div>
                </div>

                <Typography variant="subtitle1">{t.name}</Typography>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Popover>
    </>
  )
}

export default DefaultThemes
