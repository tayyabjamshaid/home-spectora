import React from "react";

export default function ClientInformation() {
  return (
    <>
      <div className="addReportClientInformationDiv">
        <div className="addReportFormChildDiv">
          <div className="addReportForm">
            <span className="addReportLabelHeading">First Name</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="Enter First Name"
            />
          </div>
          <div className="addReportForm">
            <span className="addReportLabelHeading">Last Name</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="Enter Last Name"
            />
          </div>{" "}
          <div className="addReportForm">
            <span className="addReportLabelHeading">Email ID</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="Enter Email ID"
            />
          </div>
          <div className="addReportForm">
            <span className="addReportLabelHeading">Phone No</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="Enter Phone No"
            />
          </div>
          <div className="addReportForm">
            <span className="addReportLabelHeading">Address</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="Enter Address"
            />
          </div>{" "}
          <div className="addReportForm">
            <span className="addReportLabelHeading">City</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="Enter City"
            />
          </div>
          <div className="addReportForm">
            <span className="addReportLabelHeading">State</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="Enter State"
            />
          </div>
          <div className="addReportForm">
            <span className="addReportLabelHeading">Country</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="Enter Country"
            />
          </div>{" "}
          <div className="addReportForm">
            <span className="addReportLabelHeading">Zip Code</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="Enter Zip Code"
            />
          </div>
        </div>
      </div>
    </>
  );
}
