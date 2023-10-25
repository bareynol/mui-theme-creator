import AddIcon from "@mui/icons-material/Add";
import { Box, createTheme, Theme, ThemeOptions } from "@mui/material";
import React, { useEffect, useState } from "react";

interface Props {
  themeOptions: ThemeOptions;
  large?: boolean;
}

function ThemeThumbnail({ themeOptions, large = false }: Props) {
  const [themeObject, setThemeObject] = useState<Theme | null>(null)

  useEffect(() => setThemeObject(createTheme(themeOptions)), [themeOptions])

  const { background, primary, secondary, text } = themeObject?.palette || {}

  return (
    <Box sx={{
      height: large ? 200 : 100,
      maxWidth: "85vw",
      width: large ? ((1600 / 9) * 2) : (1600 / 9),
      position: "relative",
      fontSize: large ? 28 : null,
      bgcolor: background?.default,
      color: text?.primary,
    }}>
      <Box
        sx={{
          height: "15%",
          width: "100%",
          pl: '4px',
          fontSize: "75%",
          bgcolor: primary?.main,
        }}
      >
        <Box component="span"
          sx={{
            color: primary?.contrastText,
          }}
        >
          Title
        </Box>
      </Box>
      <Box component="span" sx={{
        fontSize: "60%",
        pl: '4px',
      }}>Content</Box>
      <Box sx={{
          height: "50%",
          m: '4px',
          bgcolor: background?.paper,
        }}>
        <Box sx={{ fontSize: "55%" }}>Card Header</Box>
        <Box sx={{
            fontSize: "45%",
            color: text?.secondary,
          }}>
          Card Subheader
        </Box>
      </Box>
      <Box
        sx={{
          height: large ? 32 : 16,
          width: large ? 32 : 16,
          borderRadius: "50%",
          position: "absolute",
          bottom: large ? 8 : 4,
          right: large ? 8 : 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        style={{
          backgroundColor: secondary?.main,
          color: secondary?.contrastText,
        }}
      >
        <AddIcon sx={{
          height: large ? 36 : 18,
          width: large ? 36 : 18,
        }} />
      </Box>
    </Box>
  )
}

export default ThemeThumbnail
