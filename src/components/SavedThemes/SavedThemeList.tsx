import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import { Grid } from "@material-ui/core"
import SavedThemeItem from "./SavedThemeItem/SavedThemeItem"

export const savedThemeListId = "saved-theme-list"

function SavedThemeList() {
  const savedThemes = useSelector((state: RootState) => state.savedThemes)
  const sortedThemes = Object.values(savedThemes).sort((a, b) =>
    a.lastUpdated > b.lastUpdated ? -1 : a.lastUpdated < b.lastUpdated ? 1 : 0
  )

  return (
    <Grid id={savedThemeListId} container wrap="wrap" justify="center">
      {sortedThemes.map(t => (
        <Grid
          item
          key={`${t.name}-${t.id}`}
          style={{ margin: "0 16px 16px 16px" }}
        >
          <SavedThemeItem
            name={t.name}
            themeOptions={t.themeOptions}
            themeId={t.id}
            lastUpdated={t.lastUpdated}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default SavedThemeList
