import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Assets/css/Templates.css";
import Modal from "react-bootstrap/Modal";

import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Templates = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const navigate = useNavigate();
  const openExistingTemplates = () => {
    navigate("/templateCenter");
  };
  const goToExisting = () => {
    navigate("/templateCenter");
  };
  const goToScratch = () => {
    navigate("/scratchTemplate");
  };

  return (
    <div className="handleBackground">
      <div className="parentButton">
        <button className="templateCenter" onClick={openExistingTemplates}>
          Template Center
        </button>
        <button className="createTemplate" onClick={handleShow}>
          Create Template
        </button>
        <Modal show={show} onHide={handleClose} className="modal">
          <Modal.Header className="modalHeaderFlex">
            <Modal.Title>Choose Template</Modal.Title>
            <span onClick={handleClose}>
              <CancelOutlinedIcon />
            </span>
          </Modal.Header>
          <Modal.Body>
            Choose template formate , we allow you to make your own template
            from Scratch or use as default
            <div className="modalButtons">
              <button className="modalBtnChild" onClick={goToScratch}>
                <input type="radio" className="radio" />
                Create Template from Scratch
              </button>
              <button
                className="modalBtnChild giveMargin"
                onClick={goToExisting}
              >
                <input type="radio" className="radio" />
                Choose from default Template
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Templates;
