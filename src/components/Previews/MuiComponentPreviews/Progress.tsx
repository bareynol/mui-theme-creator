import React from "react"
import clsx from "clsx"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import {
  Typography,
  Fab,
  Button,
  LinearProgress,
  LinearProgressProps,
  Box,
} from "@material-ui/core"
import { green } from "@material-ui/core/colors"
import CheckIcon from "@material-ui/icons/Check"
import SaveIcon from "@material-ui/icons/Save"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
    linearRoot: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
    wrapper: {
      margin: theme.spacing(1),
      position: "relative",
    },
    buttonSuccess: {
      backgroundColor: green[500],
      "&:hover": {
        backgroundColor: green[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: "absolute",
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  })
)

export default function ProgressExample() {
  const classes = useStyles()

  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const timer = React.useRef<number>()

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  })

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false)
      setLoading(true)
      timer.current = setTimeout(() => {
        setSuccess(true)
        setLoading(false)
      }, 2000)
    }
  }

  return (
    <>
      <Typography variant="h6">Circular</Typography>
      <div className={classes.root}>
        <CircularProgress />
        <CircularProgress color="secondary" />
        <div className={classes.wrapper}>
          <Fab
            aria-label="save"
            color="primary"
            className={buttonClassname}
            onClick={handleButtonClick}
          >
            {success ? <CheckIcon /> : <SaveIcon />}
          </Fab>
          {loading && (
            <CircularProgress size={68} className={classes.fabProgress} />
          )}
        </div>
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClassname}
            disabled={loading}
            onClick={handleButtonClick}
          >
            Accept terms
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </div>

      <Typography variant="h6">Linear</Typography>
      <div className={classes.linearRoot}>
        <LinearProgress />
        <LinearProgress color="secondary" />
        <LinearBuffer />
        <LinearWithValueLabel />
      </div>
    </>
  )
}

function LinearBuffer() {
  const [progress, setProgress] = React.useState(0)
  const [buffer, setBuffer] = React.useState(10)

  const progressRef = React.useRef(() => {})
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0)
        setBuffer(10)
      } else {
        const diff = Math.random() * 10
        const diff2 = Math.random() * 10
        setProgress(progress + diff)
        setBuffer(progress + diff + diff2)
      }
    }
  })

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current()
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
  )
}

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  )
}

function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      )
    }, 800)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return <LinearProgressWithLabel value={progress} />
}
