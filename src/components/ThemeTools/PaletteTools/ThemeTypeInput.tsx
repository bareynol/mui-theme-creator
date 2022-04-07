import { Box, Switch, Typography } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setThemeOption } from "src/state/actions";
import { useThemeValue } from "src/state/selectors";
import { ThemeValueChangeEvent } from "../events";

export default function ThemeTypeInput() {
  const themeIsDark = useThemeValue("palette.mode") === "dark"
  const dispatch = useDispatch()

  const toggleThemeType = useCallback(() => {
    dispatch(setThemeOption("palette.mode", themeIsDark ? "light" : "dark"))
    document.dispatchEvent(ThemeValueChangeEvent())
  }, [dispatch, themeIsDark])

  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
    }}>
      <Typography
        variant="body2"
        color={themeIsDark ? "textSecondary" : "textPrimary"}
      >
        Light
      </Typography>
      <Switch
        checked={themeIsDark}
        onClick={toggleThemeType}
        sx={{ color: "#fff" }}
        color="default"
      />
      <Typography
        variant="body2"
        color={!themeIsDark ? "textSecondary" : "textPrimary"}
      >
        Dark
      </Typography>
    </Box>
  )
}
