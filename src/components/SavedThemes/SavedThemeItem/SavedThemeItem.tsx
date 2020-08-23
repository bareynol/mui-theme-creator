import React, { useCallback } from "react"
import moment from "moment"
import {
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Card,
  CardContent,
  Button,
} from "@material-ui/core"
import ThemeThumbnail from "../ThemeThumbnail"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/types"
import SwapHorizIcon from "@material-ui/icons/SwapHoriz"

import DeleteIcon from "@material-ui/icons/Delete"
import RenameThemeButton from "./RenameThemeButton"
import { loadSavedTheme, removeSavedTheme } from "src/state/actions"
import DeleteThemeButton from "./DeleteThemeButton"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      "&:hover $hoverArea": {
        display: "flex",
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      display: "none",
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
        <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={classes.content}>
            <Typography variant="subtitle1">{name}</Typography>
            <ThemeThumbnail {...thumbnailProps} />
          </div>
        </CardContent>
        <Typography
          variant="caption"
          component="p"
          align="center"
        >{`Last Updated: ${moment(lastUpdated).fromNow()}`}</Typography>
      </Card>
      <div className={classes.hoverArea}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "baseline",
          }}
        >
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
