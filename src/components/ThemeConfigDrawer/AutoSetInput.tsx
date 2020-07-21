import React, { useCallback } from "react"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Checkbox from "@material-ui/core/Checkbox"
import Typography from "@material-ui/core/Typography"
import {
  Popover,
  IconButton,
  Paper,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import CheckIcon from "@material-ui/icons/Check"
import { useDispatch } from "react-redux"
import {
  setSavedThemeVariable,
  removeSavedThemeVariable,
} from "src/state/actions"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    error: {
      color: theme.palette.error.main,
    },
    success: {
      color: theme.palette.success.main,
    },
    popover: {
      padding: theme.spacing(2),
      paddingRight: 0,
      backgroundColor: "rgb(255, 244, 229)",
      border: "1px solid",
      borderColor: "rgb(102, 60, 0)",
      borderRight: "none",
      height: 64,
      display: "flex",
      alignItems: "center",
    },
    arrowRight: {
      width: 0,
      height: 0,
      borderTop: "32px solid transparent",
      borderBottom: "32px solid transparent",
      borderLeft: `32px solid rgb(255, 244, 229)`,
    },
  })
)

export default function AutoSetInput({ autoValue, path, getThemeValue }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const dispatch = useDispatch()

  const onAutoRemoved = useCallback(
    () => dispatch(setSavedThemeVariable(path, getThemeValue(path).value)),
    [dispatch]
  )

  const onAutoSet = useCallback(() => {
    handleClosePopover()
    dispatch(removeSavedThemeVariable(path))
  }, [dispatch])

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClosePopover = () => {
    setAnchorEl(null)
  }

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (autoValue) {
      onAutoRemoved()
    } else {
      handleOpenPopover(event)
    }
  }

  const popoverOpen = Boolean(anchorEl)

  return (
    <div>
      <ListItemIcon>
        <IconButton onClick={onClick}>
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Checkbox
              color="default"
              checked={autoValue}
              style={{ padding: 0 }}
            />
            <Typography
              variant="caption"
              color="textSecondary"
              style={{ position: "absolute", bottom: -2 }}
            >
              Auto
            </Typography>
          </div>
        </IconButton>
      </ListItemIcon>
      <Popover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "row",
            borderRadius: 0,
          },
        }}
        elevation={0}
      >
        <div className={classes.popover}>
          <Typography variant="body2" color="primary">
            Remove from theme code?
          </Typography>
          <IconButton className={classes.error} onClick={handleClosePopover}>
            <CloseIcon />
          </IconButton>
          <IconButton className={classes.success} onClick={onAutoSet}>
            <CheckIcon />
          </IconButton>
        </div>
        <div className={classes.arrowRight} />
      </Popover>
    </div>
  )
}
