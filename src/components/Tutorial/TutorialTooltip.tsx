import React from "react"
import Tooltip from "@material-ui/core/Tooltip"
import IconButton from "@material-ui/core/IconButton"
import { withStyles, Theme, makeStyles, createStyles } from "@material-ui/core"
import TutorialStepButton from "./TutorialStepButton"
import CloseIcon from "@material-ui/icons/Close"
import { useDispatch } from "react-redux"
import { toggleTutorial } from "src/state/actions"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tutorialTooltipContentRoot: {
      display: "flex",
      flexDirection: "column",
    },
    tutorialTooltipCloseButton: {
      alignSelf: "flex-end",
      "& svg": {
        fontSize: "1.2em",
      },
    },
    tutorialTooltipActions: {
      marginTop: 8,
      display: "flex",
      justifyContent: "space-between",
    },
    tutorialTooltipContent: {
      paddingLeft: 16,
      paddingRight: 16,
    },
  })
)

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
  const classes = useStyles()
  const dispatch = useDispatch()
  return (
    <div className={classes.tutorialTooltipContentRoot}>
      <IconButton
        size="small"
        onClick={() => dispatch(toggleTutorial())}
        className={classes.tutorialTooltipCloseButton}
      >
        <CloseIcon />
      </IconButton>
      <div className={classes.tutorialTooltipContent}>{children}</div>
      <div className={classes.tutorialTooltipActions}>
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
