import React, { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import "../../../Assets/css/Stepper.css";
import InspectorDetails from "./InspectorDetails";
import ClientInformation from "./ClientInformation";
import PropertyDetails from "./PropertyDetails";
import WeatherConditions from "./WeatherConditions";
import AgentDetails from "./AgentDetails";
import PaymentDetails from "./PaymentDetails";
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Inspector Details",
    "Client Information",
    "Property Details",
    "Weather Conditions",
    "Agent Details",
    "Payment",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <InspectorDetails />
        </>
      );

    case 1:
      return (
        <>
          <ClientInformation />
        </>
      );
    case 2:
      return (
        <>
          <PropertyDetails />
        </>
      );
    case 3:
      return (
        <>
          <WeatherConditions />
        </>
      );
    case 4:
      return (
        <>
          <AgentDetails />
        </>
      );
    case 5:
      return (
        <>
          <PaymentDetails />
        </>
      );
    default:
      return "unknown step";
  }
}

const StepperReport = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    let btn = document.querySelector(".nextButton");
    if (activeStep == 0) {
      btn.innerText = "Save Client Information";
    } else if (activeStep == 1) {
      btn.innerText = "Save Property Details";
    } else if (activeStep == 2) {
      btn.innerText = "Save Weather Details";
    } else if (activeStep == 3) {
      btn.innerText = "Save Agent Details";
    } else if (activeStep == 4) {
      btn.innerText = "Save Payment Details";
    }

    if (activeStep == 5) {
      navigate("/templates");
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <div className="stepperButtons">
            {/* <Button
              className="backButton"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              back
            </Button> */}

            <Button
              className="nextButton"
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1
                ? "Finish"
                : "Save Inspector Details"}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default StepperReport;
