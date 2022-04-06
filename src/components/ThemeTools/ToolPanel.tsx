import React from "react"
import Typography from "@mui/material/Typography"
import { Theme } from "@mui/material";

import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolPanel: {
      backgroundColor: "#212121",
      flexGrow: 1,
      overflowX: "hidden",
      display: "flex",
      flexDirection: "column",
    },
    toolPanelTitle: {
      paddingLeft: 16,
      paddingRight: 16,
      borderBottom: `1px solid ${theme.palette.divider}`,
      borderTop: "1px solid grey",
    },
    toolPanelContent: {
      flex: 1,
      overflowY: "auto",
      overflowX: "hidden",
    },
  })
)

export const toolPanelId = "theme-tool-panel"

function ToolPanel({ panelTitle, children }) {
  const classes = useStyles()
  return (
    <div id={toolPanelId} className={classes.toolPanel}>
      <div className={classes.toolPanelTitle}>
        <Typography variant="overline">{panelTitle}</Typography>
      </div>
      <div className={classes.toolPanelContent}>{children}</div>
    </div>
  )
}

export default ToolPanel
