import React, { useCallback, useEffect } from "react"
import {
  Drawer,
  Typography,
  makeStyles,
  createMuiTheme,
  Grid,
  Button,
  ThemeProvider,
} from "@material-ui/core"
import CodeEditor from "./CodeEditor"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/types"
import { updateThemeInput, saveThemeInput } from "src/state/actions"

const drawerWidth: React.CSSProperties["width"] = 400

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: theme.zIndex.drawer + 2,
  },
  editorWrapper: {
    overflow: "auto",
    flexGrow: 1,
  },
}))

const defaultTheme = createMuiTheme()
const MAC_SAVE_KEY = 19
const S_KEY = 83

const ThemeConfigDrawer = () => {
  const classes = useStyles()
  const themeInput = useSelector((state: RootState) => state.themeInput)

  const dispatch = useDispatch()

  const updateInput = useCallback(
    (editor, data, value) => {
      dispatch(updateThemeInput(value))
    },
    [dispatch]
  )

  const saveInput = useCallback(
    event => {
      if (
        event.keyCode == MAC_SAVE_KEY ||
        (event.ctrlKey && event.keyCode == S_KEY)
      ) {
        event.preventDefault()
        dispatch(saveThemeInput())
      }
    },
    [dispatch]
  )

  useEffect(() => {
    document.addEventListener("keydown", saveInput, false)

    return () => document.removeEventListener("keydown", saveInput, false)
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
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
          style={{ height: "100%" }}
        >
          <Grid item>
            <Typography>Edit the theme below</Typography>
          </Grid>
          <Grid item className={classes.editorWrapper}>
            <CodeEditor code={themeInput} onBeforeChange={updateInput} />
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Drawer>
    </ThemeProvider>
  )
}

export default ThemeConfigDrawer
