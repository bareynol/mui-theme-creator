import { Button, Grid } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { removeThemeOption, setThemeOption } from "src/state/actions";
import { useThemeValueInfo } from "src/state/selectors";
import { ThemeValueChangeEvent } from "../../events";
import FontFamilyInput from "./FontFamilyInput";
import FontSizeInput from "./FontSizeInput";
import FontWeightInput from "./FontWeightInput";
import LetterSpacingInput, { InputProps } from "./LetterSpacingInput";
import LineHeightInput from "./LineHeightInput";

interface TypographyInputProps {
  variantPath: string;
  property: string;
}
export default function TypographyInput({ variantPath, property }: TypographyInputProps) {
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
    <Grid container justifyContent="space-between" alignItems="baseline">
      <Grid item sx={{ flex: 1 }}>
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
          sx={{
            textTransform: "capitalize",
            '& .Mui-disabled': {
              fontStyle: "italic"
            }
          }}
          onClick={handleReset}
        >
          {themeValueInfo.modifiedByUser ? "Reset" : "auto"}
        </Button>
      </Grid>
    </Grid>
  );
}

interface TypographyPropertyInputProps extends InputProps{
  property: string;
}
function TypographyPropertyInput({ property, ...props }: TypographyPropertyInputProps) {
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
