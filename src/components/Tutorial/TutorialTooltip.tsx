import CloseIcon from "@mui/icons-material/Close";
import { Box, Theme, TooltipProps } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import withStyles from '@mui/styles/withStyles';
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTutorial } from "src/state/actions";
import TutorialStepButton from "./TutorialStepButton";

interface TutorialTooltipProps extends TooltipProps {
  anchorId: string
}
const TutorialTooltip = ({ anchorId, children, ...props }: TutorialTooltipProps) =>
  document.getElementById(anchorId) && (
    <Tooltip
      {...props}
      open
      arrow
      title={<TooltipContents>{children}</TooltipContents>}
      PopperProps={{
        anchorEl: document.getElementById(anchorId),
        disablePortal: true,
        modifiers: [{
          name: 'preventOverflow',
          enabled: true,
          options: {
            altBoundary: true,
            tether: false,
            rootBoundary: 'viewport',
            padding: 8,
          }
        }],
      }}
    >
      <div />
    </Tooltip>
  )

interface TooltipContentsProps {
  children: React.ReactNode
}
const TooltipContents = ({ children }: TooltipContentsProps) => {
  const dispatch = useDispatch()
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
    }}>
      <IconButton
        size="small"
        onClick={() => dispatch(toggleTutorial())}
        sx={{
          alignSelf: "flex-end",
          "& svg": {
            fontSize: "1.2em",
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box sx={{ px: 2 }}>{children}</Box>
      <Box sx={{
        mt: 1,
        display: "flex",
        justifyContent: "space-between",
      }}>
        <TutorialStepButton variant="prev" />
        <TutorialStepButton variant="next" />
      </Box>
    </Box>
  )
}

export default withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.background.paper,
    fontSize: "1rem",
    maxWidth: "none",

    border: `4px solid ${theme.palette.primary.main}`,
  },
  arrow: {
    color: theme.palette.primary.main,
    fontSize: "2em",
  },
}))(TutorialTooltip)
