import React from "react";
import "../../../Assets/css/CreateAgreement.css";
import MyEditor from "../Utils/DescriptionEditor";

export default function CreateAgreement() {
  return (
    // className = "createAgreementHandlePaddingAll"
    <div>
      <div className="companyProfileHeadingDiv">
        <h4 className="handleCompanyParentHeading">Settings</h4>
        <button className="companyButton">Save Changes</button>
      </div>
      <h4 className="companyHeading">New Agreements</h4>
      <div className="agreementDiv">
        <h4 className="agreementCreateHeading">Agreement Title</h4>
        <input
          type="text"
          className="agreeementInput"
          placeholder="Enter Agreement Title"
        />
      </div>
      <div className="agreementDiv">
        <h4 className="agreementCreateHeading">Agreement</h4>
        <div className="editorDiv">
          {" "}
          <MyEditor />
        </div>
      </div>
    </div>
  );
}
