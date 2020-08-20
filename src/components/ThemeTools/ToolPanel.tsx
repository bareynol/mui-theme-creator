import React from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles, Theme, createStyles } from "@material-ui/core"

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
