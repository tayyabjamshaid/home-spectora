import React from "react";
import "../../../Assets/css/CompanyProfile.css";
import UploadAndDisplayImage from "../Utils/UploadPhoto";

export default function CompanyProfile() {
  return (
    // className="companyProfileHandlePaddingAll"
    <div>
      <div className="companyProfileHeadingDiv">
        <h4 className="handleCompanyParentHeading">Settings</h4>
        <button className="companyButton">Save Changes</button>
      </div>
      <h4 className="companyHeading">Company Profile</h4>
      <div className="parentStaffCompany">
        <div className="imgPortionCompany">
          <div className="imgPortionPartsCompany imgBoxHandleCompany">
            <h4 className="imgPortionHeadingCompany">Company Profile</h4>
            <div className="boxCompany">
              <UploadAndDisplayImage />
            </div>
          </div>
          <div className="imgPortionPartsCompany labelInputHandleCompany">
            <span className="labelSpacingCompany">City</span>
            <input placeholder="Enter City" className="inputCompany" />
          </div>
          <div className="imgPortionPartsCompany labelInputHandleCompany">
            <span className="labelSpacingCompany"> Address</span>
            <input placeholder="Enter Address" className="inputCompany" />
          </div>
        </div>
        <div className="inputFieldsPortionCompany">
          <div className="fieldsPortionPartsCompany labelInputFieldHandleCompany">
            <span className="labelSpacingCompany">Name</span>
            <input placeholder="Enter Name" className="inputCompany" />
          </div>
          <div className="fieldsPortionPartsCompany labelInputFieldHandleCompany">
            <span className="labelSpacingCompany">Email</span>
            <input placeholder="Enter Email" className="inputCompany" />
          </div>
          <div className="fieldsPortionPartsCompany labelInputFieldHandleCompany">
            <span className="labelSpacingCompany"> Website</span>
            <input placeholder="Enter Website" className="inputCompany" />
          </div>
          <div className="fieldsPortionPartsCompany labelInputFieldHandleCompany">
            <span className="labelSpacingCompany"> State</span>
            <input placeholder="Enter State" className="inputCompany" />
          </div>
          <div className="fieldsPortionPartsCompany labelInputFieldHandleCompany">
            <span className="labelSpacingCompany"> Zip</span>
            <input placeholder="Enter Zip" className="inputCompany" />
          </div>
        </div>
      </div>
    </div>
  );
}
