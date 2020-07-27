import React, { useCallback, useEffect } from "react"
import {
  Drawer,
  Typography,
  makeStyles,
  Grid,
  Button,
  ThemeProvider,
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  Tooltip,
  ListItemSecondaryAction,
  IconButton,
  List,
} from "@material-ui/core"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import DownloadIcon from "@material-ui/icons/GetApp"
import CodeEditor from "./CodeEditor"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "src/state/types"
import { updateThemeInput, saveThemeInput } from "src/state/actions"
import ThemeTools from "./ThemeTools/ThemeTools"

const drawerWidth: React.CSSProperties["width"] = 400

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
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

const MAC_SAVE_KEY = 19
const S_KEY = 83

const ThemeConfigDrawer = () => {
  const classes = useStyles()
  // const themeInput = useSelector((state: RootState) => state.themeInput)

  const dispatch = useDispatch()

  // const updateInput = useCallback(
  //   (editor, data, value) => {
  //     dispatch(updateThemeInput(value))
  //   },
  //   [dispatch]
  // )

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
          <CodeEditor />
        </Grid>
        <Grid item>
          <List disablePadding>
            <ListItem>
              <ListItemText
                primary="Theme Code Editor"
                secondary="Edit the code or use the controls below"
              />
              <ListItemSecondaryAction>
                <Tooltip title="Download theme.js">
                  <IconButton>
                    <DownloadIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Copy theme code">
                  <IconButton>
                    <FileCopyIcon />
                  </IconButton>
                </Tooltip>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </List>
        </Grid>
        <Grid item className={classes.controlsWrapper}>
          <ThemeTools />
        </Grid>
      </Grid>

      {/* </Grid>
        <Grid item></Grid>
      </Grid> */}
    </Drawer>
  )
}

export default ThemeConfigDrawer
