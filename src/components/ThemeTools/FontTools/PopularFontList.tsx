import React, { useState, useCallback, useEffect } from "react"
import Typography from "@material-ui/core/Typography"
import { useDispatch, useSelector } from "react-redux"
import { addFonts } from "src/state/actions"
import { Chip, Grid } from "@material-ui/core"
import { RootState } from "src/state/types"
import AddIcon from "@material-ui/icons/Add"

const defaultFonts = [
  "Lato",
  "Lora",
  "Montserrat",
  "Oswald",
  "PT Sans",
  "Raleway",
  "Slabo 27px",
  "Source Sans Pro",
]

function PopularFontList() {
  const dispatch = useDispatch()
  const loadedFonts = useSelector((state: RootState) => state.loadedFonts)
  const [fontShortList, setFontShortList] = useState(defaultFonts)

  useEffect(() => {
    const fonts = [...defaultFonts]
    // reduce defaultFonts to only fonts not already loaded

    setFontShortList(
      fonts.reduce(
        (fontList: string[], font: string) =>
          loadedFonts.has(font) ? fontList : [...fontList, font],
        []
      )
    )
  }, [loadedFonts])

  const handleDefaultFontClick = useCallback(
    fontName => {
      dispatch(addFonts([fontName]))
      const index = fontShortList.indexOf(fontName)
      setFontShortList([
        ...fontShortList.slice(0, index),
        ...fontShortList.slice(index + 1),
      ])
    },
    [dispatch, fontShortList]
  )

  return fontShortList.length ? (
    <Grid container spacing={1}>
      {fontShortList.map(font => (
        <Grid item key={font}>
          <Chip
            label={font}
            icon={<AddIcon />}
            onClick={() => handleDefaultFontClick(font)}
          />
        </Grid>
      ))}
    </Grid>
  ) : null
}

export default PopularFontList
