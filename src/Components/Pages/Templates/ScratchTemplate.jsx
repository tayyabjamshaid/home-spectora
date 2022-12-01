import React, { useState } from "react";
import "../../../Assets/css/ScratchTemplate.css";
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MyEditor from "../Utils/DescriptionEditor";
export default function ScratchTemplate() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const goBack = () => {
    navigate("/templates");
    // history.replace("/templates");
  };
  const openDescription = () => {
    setOpen(true);
  };
  return (
    <div className="parentScratch">
      <div className="handleArrow" onClick={goBack}>
        <BsArrowLeft />
      </div>
      <div className="headingParentScratch">
        <div className="dialogBoxScratch">
          <span style={{ "fontWeight": "bold" }}>Template Name</span>
          <span>
            <AddCircleOutlineIcon />
          </span>
        </div>
        <button className="buttonHeadingScratch">Save & Use</button>
      </div>
      <div className="parentBodyScratch">
        <div className="addSection">
          <div className="section">
            <span style={{ "fontWeight": "bold" }}>Sections</span>
            <span>
              {" "}
              <AddCircleOutlineIcon />
            </span>
          </div>
        </div>
        <div className="addNarativesParent">
          <div className="addNaratives">
            <div className="component">
              <span style={{ "fontWeight": "bold" }}>Components</span>
              <span>
                {" "}
                <AddCircleOutlineIcon />
              </span>
            </div>
            <div className="narratives">
              <div className="narrativesHeading">Inspection Method</div>
              <div className="addDescriptionParent">
                <div className="addDescriptionHeading">
                  <span>Narratives</span>
                  <span onClick={openDescription}>
                    <AddCircleOutlineIcon />
                  </span>
                </div>
                <div className="addDescriptionBody">
                  {open == true && <MyEditor />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
