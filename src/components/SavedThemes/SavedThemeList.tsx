import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "src/state/types"
import { Grid } from "@material-ui/core"
import SavedThemeItem from "./SavedThemeItem/SavedThemeItem"

function SavedThemeList() {
  const savedThemes = useSelector((state: RootState) => state.savedThemes)
  const sortedThemes = Object.values(savedThemes).sort((a, b) =>
    a.lastUpdated > b.lastUpdated ? -1 : a.lastUpdated < b.lastUpdated ? 1 : 0
  )

  return (
    <Grid container spacing={4}>
      {sortedThemes.map(t => (
        <Grid item key={`${t.name}-${t.id}`}>
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
