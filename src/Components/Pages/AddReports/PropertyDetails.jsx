import React from "react";
import "../../../Assets/css/PropertyDetails.css";

import PropertyImage from "../Utils/ImagesAddReport/PropertyImage";

export default function PropertyDetails() {
  const [propertyType, setPropertyType] = React.useState("Residental");
  const [propertyStyle, setPropertyStyle] = React.useState("Colonial");
  const [constructionType, setConstructionType] = React.useState("Select");
  const [orientation, setOrientation] = React.useState("Select");
  const [occupency, setOccupency] = React.useState("Select");
  const [furnished, setFurnished] = React.useState("Select");

  const handleChange = (event, text) => {
    if (text == "propertyType") {
      setPropertyType(event.target.value);
    } else if (text == "propertyStyle") {
      setPropertyStyle(event.target.value);
    } else if (text == "constructionType") {
      setConstructionType(event.target.value);
    } else if (text == "orientation") {
      setOrientation(event.target.value);
    } else if (text == "occupency") {
      setOccupency(event.target.value);
    } else if (text == "furnished") {
      setFurnished(event.target.value);
    }
  };

  return (
    <div className="addReportBodyParentDiv">
      <div className="addReportFormDiv">
        <div className="addReportFormChildDiv handleMargin">
          <div className="handleFlex">
            <span className="addReportLabelHeading">Property Type</span>

            <select
              id="budget"
              className="customSelect"
              value={propertyType}
              onChange={(e) => {
                handleChange(e, "propertyType");
              }}
            >
              <option value="Residental" className="option">
                Residental
              </option>

              <option value="Two" className="option">
                Two
              </option>

              <option value="Three" className="option">
                Three
              </option>
            </select>
          </div>
          <div className="handleFlex">
            {" "}
            <span className="addReportLabelHeading">Property Style</span>
            <select
              className="customSelect"
              value={propertyStyle}
              onChange={(e) => {
                handleChange(e, "propertyStyle");
              }}
            >
              <option value="Colonial" className="option">
                Colonial
              </option>

              <option value="Two" className="option">
                Two
              </option>

              <option value="Three" className="option">
                Three
              </option>
            </select>
          </div>
        </div>
        <div className="addReportFormChildDiv handleMargin">
          <div className="handleFlex">
            <span className="addReportLabelHeading">Construction Type</span>

            <select
              className="customSelect"
              value={constructionType}
              onChange={(e) => {
                handleChange(e, "constructionType");
              }}
            >
              <option value="Select" className="option">
                Select
              </option>

              <option value="Two" className="option">
                Two
              </option>

              <option value="Three" className="option">
                Three
              </option>
            </select>
          </div>
          <div className="addReportForm">
            <span className="addReportLabelHeading">Year Built</span>
            <input
              type="text"
              className="inputAddReport handleInputPropertyPadding"
              placeholder="10/01/22"
            />
          </div>
        </div>
        <div className="addReportFormChildDiv handleMargin">
          <div className="addReportForm">
            <span className="addReportLabelHeading">Area</span>
            <input
              type="text"
              className="inputAddReport handleInputPropertyPadding"
              placeholder="Enter State"
            />
          </div>
          <div className="handleFlex">
            <span className="addReportLabelHeading">Orientation</span>

            <select
              className="customSelect"
              value={orientation}
              onChange={(e) => {
                handleChange(e, "orientation");
              }}
            >
              <option value="Select" className="option">
                Select
              </option>

              <option value="Two" className="option">
                Two
              </option>

              <option value="Three" className="option">
                Three
              </option>
            </select>
          </div>
        </div>
        <div className="addReportFormChildDiv handleMargin">
          <div className="handleFlex">
            <span className="addReportLabelHeading">Occupency</span>

            <select
              className="customSelect"
              value={occupency}
              onChange={(e) => {
                handleChange(e, "occupency");
              }}
            >
              <option value="Select" className="option">
                Select
              </option>

              <option value="Two" className="option">
                Two
              </option>

              <option value="Three" className="option">
                Three
              </option>
            </select>
          </div>
          <div className="handleFlex">
            {" "}
            <span className="addReportLabelHeading">Furnished</span>
            <select
              className="customSelect"
              value={furnished}
              onChange={(e) => {
                handleChange(e, "furnished");
              }}
            >
              <option value="Select" className="option">
                Select
              </option>

              <option value="Two" className="option">
                Two
              </option>

              <option value="Three" className="option">
                Three
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="addReportBoxParentDiv">
        <PropertyImage />
      </div>
    </div>
  );
}
