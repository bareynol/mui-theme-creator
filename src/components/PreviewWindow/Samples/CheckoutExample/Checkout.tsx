import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";


const steps = ["Shipping address", "Payment details", "Review your order"]

function getStepContent(step: number) {
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
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <Box sx={(theme) => ({
      width: "auto",
      mx: {
        xs: 2,
      },
      px: 2,
      [theme.breakpoints.up(600 + +theme.spacing(4).replace('px', ''))]: {
        maxWidth: 600,
        mx: "auto",
      },
    })}>
      <Paper sx={(theme) => ({
        my: 3,
        p: 2,
        [theme.breakpoints.up(600 + +theme.spacing(6).replace('px', ''))]: {
          my: 6,
          p: 3,
        },
      })}>
        <Tooltip
          title={`<Typography color="textPrimary" variant="h4">`}
          placement="top"
          arrow
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
        </Tooltip>
        <Stepper activeStep={activeStep} sx={{
          pt: 3, px: 0, pb: 5
        }}>
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
              <Box sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}>
                {activeStep !== 0 && (
                  <Tooltip title={`<Button variant="text">`} arrow>
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
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
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Tooltip>
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </Box>
  )
}
