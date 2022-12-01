import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Assets/css/TemplateCenter.css";
import { BsArrowLeft } from "react-icons/bs";

import Tabs from "./Tabs";

export default function TemplateCenter() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/templates");
    // history.replace("/templates");
  };

  return (
    <div>
      <div className="handleArrow" onClick={goBack}>
        <BsArrowLeft />
      </div>
      <div className="handleBackgroundTemplateCenter">
        <div className="headingParent">
          <span className="templateHeading">Templates</span>
          <button className="templateButton">Template Editor</button>
        </div>
        <Tabs />
      </div>
    </div>
  );
}
