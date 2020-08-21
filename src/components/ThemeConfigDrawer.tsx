import React from "react"
import Drawer from "@material-ui/core/Drawer"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/types"
import ThemeTools from "./ThemeTools/ThemeTools"
import MonacoThemeCodeEditor from "src/components/MonacoThemeCodeEditor"

const drawerWidth: React.CSSProperties["width"] = 400

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    overflowY: "visible",
    zIndex: theme.zIndex.drawer + 2,
  },
  editorWrapper: {
    flexGrow: 1,
    minHeight: "30vh",
    maxHeight: "50vh",
    height: "100%",
  },
  controlsWrapper: {
    minHeight: "30vh",
    height: "100%",
  },
}))

const ThemeConfigDrawer = () => {
  const classes = useStyles()
  const themeId = useSelector((state: RootState) => state.themeId)

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Grid
        container
        direction="column"
        wrap="nowrap"
        style={{ height: "100vh" }}
      >
        <Grid item className={classes.editorWrapper}>
          {/* Use themeId as key so that editor is torn down and rebuilt with new theme */}
          <MonacoThemeCodeEditor key={themeId} />
        </Grid>

        <Grid item className={classes.controlsWrapper}>
          <ThemeTools />
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default ThemeConfigDrawer
