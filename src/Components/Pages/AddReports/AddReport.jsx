import React from "react";
import "../../../Assets/css/AddReport.css";

import StepperReport from "./Stepper";
export default function AddReport() {
  return (
    <>
      <div className="stepperParent">
        <div className="addReportHeadingParentDiv">
          <div className="addReportHeadingChild">
            <h4 className="addReportBigHeading">Add Details</h4>
            <span className="addReportSmallHeading">Add new report</span>
          </div>
        </div>
        <StepperReport />
      </div>
    </>
  );
}
