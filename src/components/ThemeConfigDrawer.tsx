import { useMediaQuery, useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MonacoThemeCodeEditor from "src/components/MonacoThemeCodeEditor";
import { RootState } from "src/state/types";
import ThemeTools from "./ThemeTools/ThemeTools";

const drawerWidth: React.CSSProperties["width"] = 400

const ThemeConfigDrawer = () => {
  const themeId = useSelector((state: RootState) => state.themeId)
  const open = useSelector((state: RootState) => state.themeConfigOpen)
  const dispatch = useDispatch()

  const theme = useTheme()
  const permanent = useMediaQuery(theme.breakpoints.up("sm"))

  return (
    <Drawer
      variant={permanent ? "permanent" : "temporary"}
      anchor="right"
      sx={{
        width: drawerWidth,
        height: "100vh",
        maxWidth: "90vw",
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          overflowY: "visible",
          zIndex: theme.zIndex.drawer + 2,
          maxWidth: "90vw",
        }
      }}
      open={open}
      onClose={() => dispatch({ type: "TOGGLE_THEME_CONFIG" })}
    >
      <Grid
        container
        direction="column"
        wrap="nowrap"
        sx={{
          height: "100vh",
        }}
      >
        <Grid item sx={{
          flexGrow: 1,
          minHeight: "30vh",
          maxHeight: "50vh",
          height: 1,
        }}>
          {/* Use themeId as key so that editor is torn down and rebuilt with new theme */}
          <MonacoThemeCodeEditor key={themeId} />
        </Grid>

        <Grid item sx={{
          minHeight: "30vh",
          height: 1,
        }}>
          <ThemeTools />
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default ThemeConfigDrawer
