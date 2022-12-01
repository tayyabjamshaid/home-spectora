import React from "react";
import "../../../Assets/css/Staff.css";
import UploadAndDisplayImage from "../Utils/UploadPhoto.jsx";

export default function AddNewStaff() {
  return (
    <>
      <div className="addNewStaffBackground">
        <div className="addNewStaffWidth">
          <span className="staffHeading">Add New Staff</span>
          <div className="parentStaff">
            <div className="imgPortion">
              <div className="imgPortionParts imgBoxHandle">
                <span className="imgPortionHeading">Add Profile Picture</span>
                <div className="box">
                  <UploadAndDisplayImage />
                </div>
              </div>
              <div className="imgPortionParts labelInputHandle">
                <span className="labelSpacing">City ,Country</span>
                <input placeholder="Enter City ,Country" className="input" />
              </div>
              <div className="imgPortionParts labelInputHandle">
                <span className="labelSpacing"> Address</span>
                <input placeholder="Enter Address" className="input" />
              </div>
            </div>
            <div className="inputFieldsPortion">
              <div className="fieldsPortionParts labelInputFieldHandle">
                <span className="labelSpacing"> First Name</span>
                <input placeholder="Enter First Name" className="input" />
              </div>
              <div className="fieldsPortionParts labelInputFieldHandle">
                <span className="labelSpacing"> Last Name</span>
                <input placeholder="Enter Last Name" className="input" />
              </div>
              <div className="fieldsPortionParts labelInputFieldHandle">
                <span className="labelSpacing"> Email</span>
                <input placeholder="Enter Email" className="input" />
              </div>
              <div className="fieldsPortionParts labelInputFieldHandle">
                <span className="labelSpacing"> Phone</span>
                <input placeholder="Enter Phone" className="input" />
              </div>
              <div className="fieldsPortionParts labelInputFieldHandle">
                <span className="labelSpacing"> State</span>
                <input placeholder="Enter State" className="input" />
              </div>
            </div>
          </div>
          <div className="buttonParent">
            <button className="cancelbutton">Cancel</button>
            <button className="addNewStaffButton">Add New Staff</button>
          </div>
        </div>
      </div>
    </>
  );
}
