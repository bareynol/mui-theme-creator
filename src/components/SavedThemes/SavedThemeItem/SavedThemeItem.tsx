import React, { useCallback } from "react"
import moment from "moment"
import { useDispatch, useSelector } from "react-redux"

import {
  Button,
  Card,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"
import SwapHorizIcon from "@material-ui/icons/SwapHoriz"

import { loadSavedTheme, removeSavedTheme } from "src/state/actions"
import { RootState } from "src/state/types"
import ThemeThumbnail from "../ThemeThumbnail"
import DeleteThemeButton from "./DeleteThemeButton"
import RenameThemeButton from "./RenameThemeButton"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      "&:hover $hoverArea": {
        display: "flex",
      },
    },
    savedItemContent: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    loadedCard: {
      backgroundColor: "#9e9e9e",
      color: "#000",
    },
    hoverArea: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backdropFilter: "blur(2px) saturate(30%) brightness(40%)",
      alignItems: "center",
      justifyContent: "center",
      display: "none",
    },
    hoverAreaActions: {
      display: "flex",
      flexDirection: "column",
      alignItems: "baseline",
    },
  })
)

function SavedThemeItem({ name, themeId, lastUpdated, ...thumbnailProps }) {
  const classes = useStyles()

  const dispatch = useDispatch()

  const handleLoadTheme = useCallback(
    event => {
      event.stopPropagation()
      dispatch(loadSavedTheme(themeId))
    },
    [dispatch]
  )

  const handleRemoveTheme = useCallback(
    event => {
      event.stopPropagation()
      dispatch(removeSavedTheme(themeId))
    },
    [dispatch]
  )

  const loadedThemeId = useSelector((state: RootState) => state.themeId)

  return (
    <div className={classes.root} onClick={handleLoadTheme}>
      <Card
        className={`${themeId === loadedThemeId ? classes.loadedCard : ""}`}
      >
        <div className={classes.savedItemContent}>
          <Typography variant="subtitle1" align="center">
            {name}
          </Typography>
          <ThemeThumbnail {...thumbnailProps} />
          <Typography
            variant="caption"
            component="p"
            align="center"
          >{`Last Updated: ${moment(lastUpdated).fromNow()}`}</Typography>
        </div>
      </Card>
      <div className={classes.hoverArea}>
        <div className={classes.hoverAreaActions}>
          <Button
            size="large"
            disabled={themeId === loadedThemeId}
            startIcon={<SwapHorizIcon />}
            onClick={handleLoadTheme}
          >
            Load
          </Button>
          <RenameThemeButton themeId={themeId} defaultName={name} />
          <DeleteThemeButton
            themeId={themeId}
            themeName={name}
            disabled={themeId === loadedThemeId}
          />
        </div>
      </div>
    </div>
  )
}

export default SavedThemeItem
