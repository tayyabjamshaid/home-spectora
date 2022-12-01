import React from "react";
import "../../../Assets/css/Setting.css";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

import SettingsIcon from "@mui/icons-material/Settings";
import EastIcon from "@mui/icons-material/East";
import ConstructionIcon from "@mui/icons-material/Construction";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
export default function Setting() {
  const navigate = useNavigate();
  const goToCompanyProfile = () => {
    navigate("/companyProfile");
  };
  const goToUserProfile = () => {
    navigate("/userProfile");
  };
  const goToCreateAgreementPage = () => {
    navigate("/createAgreement");
  };
  return (
    // className = "settingHandlePaddingAll"
    <div>
      <h4 className="headingPadding">Settings</h4>
      <div className="divHeadingBox">
        <span>
          <SettingsIcon />
        </span>
        <h4 className="divHeading">Basic Settings</h4>
      </div>
      <div
        className="optionsSetting handleCompanyPadding"
        onClick={goToCompanyProfile}
      >
        <h5 className="handleFontSize">Company Profile</h5>
        <span style={{ "color": "#b8cbd8" }}>
          <EastIcon />
        </span>
      </div>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <div className="optionsSetting" onClick={goToUserProfile}>
        <h5 className="handleFontSize">User Profile</h5>
        <span style={{ "color": "#b8cbd8" }}>
          <EastIcon />
        </span>
      </div>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <div className="divHeadingBox handleToolMargin">
        <span>
          <ConstructionIcon />
        </span>
        <h4 className="divHeading">Tool Settings</h4>
      </div>
      <h4 className="agreementHeading">Agreements</h4>
      <div className="optionsSetting">
        <h5 className="handleFontSize">Home Inspection Agreement</h5>
        <div className="handleIcons">
          <span style={{ "color": "#b8cbd8" }}>
            <RemoveRedEyeIcon />
          </span>
          <span style={{ "color": "#b8cbd8", "paddingLeft": "12px" }}>
            <EditIcon />
          </span>
        </div>
      </div>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <div className="optionsSetting">
        <h5 className="handleFontSize">Home Inspection Agreement</h5>
        <div className="handleIcons">
          <span style={{ "color": "#b8cbd8" }}>
            <RemoveRedEyeIcon />
          </span>
          <span style={{ "color": "#b8cbd8", "paddingLeft": "12px" }}>
            <EditIcon />
          </span>
        </div>
      </div>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <button className="agreementButton" onClick={goToCreateAgreementPage}>
        Create New Agreement
      </button>
    </div>
  );
}
