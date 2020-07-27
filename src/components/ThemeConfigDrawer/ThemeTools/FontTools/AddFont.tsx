import React, { useState, FormEvent, useCallback, useEffect } from "react"
import Typography from "@material-ui/core/Typography"
import Link from "@material-ui/core/Link"
import TextField from "@material-ui/core/TextField"
import { useDispatch, useSelector } from "react-redux"
import { addFonts } from "src/state/actions"
import { InputAdornment, CircularProgress, Chip } from "@material-ui/core"
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

function AddFont() {
  const dispatch = useDispatch()
  const loadedFonts = useSelector((state: RootState) => state.loadedFonts)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
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

  const handleAddFontName = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      event.persist()
      const fontName: string = event.target["fontname"].value
      setLoading(true)
      dispatch(addFonts([fontName])).then(loaded => {
        setLoading(false)
        if (loaded) {
          event.target["fontname"].value = ""
        } else {
          setError(true)
        }
      })
    },
    [dispatch]
  )

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

  return (
    <>
      <form onSubmit={handleAddFontName}>
        <TextField
          name="fontname"
          label="Font Name"
          error={error}
          helperText={
            error ? (
              "Error loading font"
            ) : (
              <>
                {`Enter the name of a `}
                <Link
                  href="https://fonts.google.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {`Google Font`}
                </Link>
              </>
            )
          }
          onChange={() => setError(false)}
          InputProps={{
            endAdornment: loading && (
              <InputAdornment position="end">
                <CircularProgress size="1.5rem" />
              </InputAdornment>
            ),
          }}
        />
      </form>
      {fontShortList.length ? (
        <div>
          <Typography variant="body2" style={{ marginTop: 8 }}>
            Popular Fonts
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              paddingLeft: 8,
            }}
          >
            {fontShortList.map(font => (
              <Chip
                key={font}
                label={font}
                icon={<AddIcon />}
                onClick={() => handleDefaultFontClick(font)}
                style={{ marginTop: 4 }}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  )
}

export default AddFont
