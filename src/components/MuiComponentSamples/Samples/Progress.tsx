import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box, Button, Fab, LinearProgress,
  LinearProgressProps, Typography
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import React from "react";

export default function ProgressExample() {
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const timer = React.useRef<number>()

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current)
    }
  }, [])

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false)
      setLoading(true)
      timer.current = window.setTimeout(() => {
        setSuccess(true)
        setLoading(false)
      }, 2000)
    }
  }

  return (
    <>
      <Typography variant="h6">Circular</Typography>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        "& > * + *": {
          ml: 2,
        },
      }}>
        <CircularProgress />
        <CircularProgress color="secondary" />
        <Box sx={{
          m: 1,
          position: "relative",
        }}>
          <Fab
            aria-label="save"
            color="primary"
            sx={success ? {
              bgcolor: green[500],
              "&:hover": {
                bgcolor: green[700],
              },
            } : {}}
            onClick={handleButtonClick}
          >
            {success ? <CheckIcon /> : <SaveIcon />}
          </Fab>
          {loading && (
            <CircularProgress size={68} sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
            }} />
          )}
        </Box>
        <Box sx={{
          m: 1,
          position: "relative",
        }}>
          <Button
            variant="contained"
            color="primary"
            sx={success ? {
              bgcolor: green[500],
              "&:hover": {
                bgcolor: green[700],
              },
            } : {}}
            disabled={loading}
            onClick={handleButtonClick}
          >
            Accept terms
          </Button>
          {loading && (
            <CircularProgress size={24} sx={{
              color: green[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: '-12px',
              marginLeft: '-12px',
            }} />
          )}
        </Box>
      </Box>

      <Typography variant="h6">Linear</Typography>
      <Box sx={{
        width: 1,
        "& > * + *": {
          mt: 2,
        },
      }}>
        <LinearProgress />
        <LinearProgress color="secondary" />
        <LinearBuffer />
        <LinearWithValueLabel />
      </Box>
    </>
  )
}

function LinearBuffer() {
  const [progress, setProgress] = React.useState(0)
  const [buffer, setBuffer] = React.useState(10)

  const progressRef = React.useRef(() => { })
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
