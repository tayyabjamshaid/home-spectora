import React from "react";
import "../../../Assets/css/UserProfile.css";
import UploadAndDisplayImage from "../Utils/UploadPhoto";
export default function UserProfile() {
  return (
    // className="userProfileHandlePaddingAll"
    <div>
      <div className="companyProfileHeadingDiv">
        <span className="handleCompanyParentHeading">Settings</span>
        <button className="companyButton">Save Changes</button>
      </div>
      <h4 className="companyHeading">User Profile</h4>
      <div className="parentStaffUser">
        <div className="inputFieldsPortionUser">
          <div className="fieldsPortionPartsUser labelInputFieldHandleUser">
            <span className="labelSpacingUser">First Name</span>
            <input placeholder="Enter First Name" className="inputUser" />
          </div>
          <div className="fieldsPortionPartsUser labelInputFieldHandleUser">
            <span className="labelSpacingUser">Last Name</span>
            <input placeholder="Enter Last Name" className="inputUser" />
          </div>
          <div className="fieldsPortionPartsUser labelInputFieldHandleUser">
            <span className="labelSpacingUser"> Email</span>
            <input placeholder="Enter Email" className="inputUser" />
          </div>
          <div className="fieldsPortionPartsUser labelInputFieldHandleUser">
            <span className="labelSpacingUser"> State</span>
            <input placeholder="Enter State" className="inputUser" />
          </div>
          <div className="fieldsPortionPartsUser labelInputFieldHandleUser">
            <span className="labelSpacingUser">Address </span>
            <input placeholder="Enter Address" className="inputUser" />
          </div>
        </div>
        <div className="imgPortionUser">
          <div className="imgPortionPartsUser imgBoxHandleUser">
            <span className="imgPortionHeadingUser">User Profile</span>
            <div className="boxUser">
              <UploadAndDisplayImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
