import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import AddressForm from "./AddressForm"
import PaymentForm from "./PaymentForm"
import Review from "./Review"
import Tooltip from "@material-ui/core/Tooltip"

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      maxWidth: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}))

const steps = ["Shipping address", "Payment details", "Review your order"]

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />
    case 1:
      return <PaymentForm />
    case 2:
      return <Review />
    default:
      throw new Error("Unknown step")
  }
}

export default function Checkout() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}>
        <Tooltip
          title={`<Typography color="textPrimary" variant="h4">`}
          placement="top"
          arrow
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
        </Tooltip>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(label => (
            <Step key={label}>
              <Tooltip title={`<StepLabel>`} placement="top" arrow>
                <StepLabel>{label}</StepLabel>
              </Tooltip>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Tooltip
                title={`<Typography color="textPrimary" variant="h5">`}
                placement="left"
                arrow
              >
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
              </Tooltip>
              <Tooltip
                title={`<Typography color="textPrimary" variant="subtitle1">`}
                placement="left"
                arrow
              >
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </Tooltip>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Tooltip title={`<Button variant="text">`} arrow>
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  </Tooltip>
                )}
                <Tooltip
                  title={`<Button color="primary" variant="contained">`}
                  arrow
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Tooltip>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </div>
  )
}
