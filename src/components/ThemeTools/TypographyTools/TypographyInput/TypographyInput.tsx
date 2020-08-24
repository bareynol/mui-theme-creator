import React, { useCallback } from "react"
import { useDispatch } from "react-redux"
import { setThemeOption, removeThemeOption } from "src/state/actions"
import { Grid, Button, makeStyles, createStyles } from "@material-ui/core"
import { useThemeValueInfo } from "src/state/selectors"
import FontWeightInput from "./FontWeightInput"
import FontSizeInput from "./FontSizeInput"
import FontFamilyInput from "./FontFamilyInput"
import LineHeightInput from "./LineHeightInput"
import LetterSpacingInput from "./LetterSpacingInput"
import { ThemeValueChangeEvent } from "../../events"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    resetButton: {
      textTransform: "capitalize",
    },
    disabledButton: {
      fontStyle: "italic",
    },
    inputContainer: {
      flex: 1,
    },
  })
)

export default function TypographyInput({ label, variantPath, property }) {
  const classes = useStyles()
  const path = `${variantPath}.${property}`
  const themeValueInfo = useThemeValueInfo(path)
  const dispatch = useDispatch()

  const handleValueChange = useCallback(
    (event, value) => {
      dispatch(setThemeOption(path, value))
      document.dispatchEvent(ThemeValueChangeEvent())
    },
    [dispatch]
  )

  const handleReset = useCallback(() => dispatch(removeThemeOption(path)), [
    dispatch,
  ])

  return (
    <Grid container justify="space-between" alignItems="baseline">
      <Grid item className={classes.inputContainer}>
        <TypographyPropertyInput
          property={property}
          value={themeValueInfo.value}
          onChange={handleValueChange}
        />
      </Grid>
      <Grid item>
        <Button
          size="small"
          disabled={!themeValueInfo.modifiedByUser}
          classes={{
            root: classes.resetButton,
            disabled: classes.disabledButton,
          }}
          onClick={handleReset}
        >
          {themeValueInfo.modifiedByUser ? "Reset" : "auto"}
        </Button>
      </Grid>
    </Grid>
  )
}

function TypographyPropertyInput({ property, ...props }) {
  switch (property) {
    case "fontFamily":
      return <FontFamilyInput {...props} />
    case "htmlFontSize":
    case "fontSize":
      return <FontSizeInput {...props} property={property} />
    case "fontWeight":
    case "fontWeightLight":
    case "fontWeightMedium":
    case "fontWeightRegular":
    case "fontWeightBold":
      return <FontWeightInput {...props} property={property} />
    case "letterSpacing":
      return <LetterSpacingInput {...props} />
    case "lineHeight":
      return <LineHeightInput {...props} />
    default:
      return <div></div>
  }
}
