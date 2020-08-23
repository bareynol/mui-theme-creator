import React from "react"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import { withStyles, Theme } from "@material-ui/core"
import TutorialStepButton from "./TutorialStepButton"
import CloseIcon from "@material-ui/icons/Close"
import { useDispatch } from "react-redux"
import { toggleTutorial } from "src/state/actions"

const TutorialTooltip = ({ anchorId, children, ...props }) =>
  document.getElementById(anchorId) && (
    <Tooltip
      {...props}
      open
      interactive
      arrow
      title={<TooltipContents>{children}</TooltipContents>}
      PopperProps={{
        anchorEl: document.getElementById(anchorId),
        disablePortal: true,
        modifiers: {
          preventOverflow: {
            boundariesElement: "viewport",
          },
        },
      }}
    >
      <div />
    </Tooltip>
  )

const TooltipContents = ({ children }) => {
  const dispatch = useDispatch()
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <IconButton
        size="small"
        onClick={() => dispatch(toggleTutorial())}
        style={{ position: "relative", right: 0, alignSelf: "flex-end" }}
      >
        <CloseIcon style={{ fontSize: "1.2em" }} />
      </IconButton>
      <div
        style={{
          paddingLeft: 16,
          paddingRight: 16,
        }}
      >
        {children}
      </div>
      <div
        style={{
          marginTop: 8,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <TutorialStepButton variant="prev" />
        <TutorialStepButton variant="next" />
      </div>
    </div>
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
