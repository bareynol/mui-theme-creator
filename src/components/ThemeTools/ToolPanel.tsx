import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";

export const toolPanelId = "theme-tool-panel"

interface Props {
  panelTitle: string;
  children: React.ReactNode;
}
function ToolPanel({ panelTitle, children }: Props) {
  return (
    <Box id={toolPanelId} sx={{
      bgcolor: "#212121",
      flexGrow: 1,
      overflowX: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      <Box sx={{
        px: 2,
        borderBottom: 1,
        borderBottomColor: 'divider',
        borderTop: 1,
        borderTopColor: '#808080'
      }}>
        <Typography variant="overline">{panelTitle}</Typography>
      </Box>
      <Box sx={{
        flex: 1,
        overflowY: "auto",
        overflowX: "hidden",
      }}>{children}</Box>
    </Box>
  )
}

export default ToolPanel
