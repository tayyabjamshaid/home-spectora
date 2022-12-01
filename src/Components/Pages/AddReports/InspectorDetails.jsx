import React from "react";
import UploadAndDisplayImageOne from "../Utils/ImagesAddReport/UploadReportPhotoOne";
import UploadAndDisplayImageTwo from "../Utils/ImagesAddReport/UploadReportPhotoTwo";
import UploadAndDisplayImageThree from "../Utils/ImagesAddReport/UploadReportPhotoThree";
import { Box } from "@mui/material";

export default function InspectorDetails() {
  return (
    <div className="addReportBodyParentDiv">
      <div className="addReportFormDiv">
        <div className="addReportFormChildDiv">
          <div className="addReportForm">
            <span className="addReportLabelHeading">Report ID</span>

            <input type="text" className="inputAddReport" placeholder="78" />
          </div>
          <div className="addReportForm">
            <span className="addReportLabelHeading">Travel Distance</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="Enter Distance"
            />
          </div>
        </div>
        <div className="addReportFormChildDiv">
          <div className="addReportForm">
            <span className="addReportLabelHeading">Inspection Name</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="Enter Name"
            />
          </div>
          <div className="addReportForm">
            <span className="addReportLabelHeading">Inspection Address</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="Enter Address"
            />
          </div>
        </div>
        <div className="addReportFormChildDiv">
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
          </div>
        </div>
        <div className="addReportFormChildDiv">
          <div className="addReportForm">
            <span className="addReportLabelHeading">Inspection Date/Time</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="10/02/2022"
            />
          </div>
          <div className="addReportForm">
            <span className="addReportLabelHeading">Zip Code</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="Enter Zip Code"
            />
          </div>
        </div>
        <div className="addReportFormChildDiv">
          <div className="addReportForm">
            <span className="addReportLabelHeading">City</span>
            <input
              type="text"
              className="inputAddReport"
              placeholder="Enter City"
            />
          </div>
        </div>
      </div>

      <div className="addReportBoxParentDiv">
        <div className="addReportBoxHeading">
          <span>Add Property Image</span>
        </div>
        <div className="addReportBoxChildDiv">
          {/*  */}
          <div className="addReportBoxMainDiv">
            <div className="addReportBox">
              <UploadAndDisplayImageOne />
            </div>
            <span className="handleColor"> Add Front Side Image</span>
          </div>
          <div className="addReportBoxMainDiv handleInspectionDetailMargin">
            <div className="addReportBox">
              {" "}
              <UploadAndDisplayImageTwo />
            </div>
            <span className="handleColor">Add Back Side Image</span>
          </div>
        </div>
        <div className="addReportBoxHeading">
          <span>Add Inspector Image</span>
        </div>
        <div className="addReportBoxChildDiv">
          {/* <span>Add Inspector Image</span> */}
          <div className="addReportBoxMainDiv">
            <div className="addReportBox">
              <UploadAndDisplayImageThree />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
