import React, { useState, useEffect } from "react";
import Instragram from "../../../../Assets/images/instragram.png";

import SaveAltIcon from "@mui/icons-material/SaveAlt";

const UploadAndDisplayImageTwo = () => {
  const [selectedImageTwo, setSelectedImageTwo] = useState(null);
  useEffect(() => {
    let label = document.querySelector(".addReportImageLabelTwo");
    let mainDiv = document.querySelector(".mainDivTwo");
    let removeFlex = document.querySelector(".handleImgTwo");

    if (selectedImageTwo == null) {
      label.style.color = "#b8cbd7";
      mainDiv.style.display = "flex";
      mainDiv.style.justifyContent = "center";
      mainDiv.style.alignItems = "center";
      label.style.top = "81px";
    } else {
      label.style.color = "white";
      removeFlex.classList.remove("mainDivTwo");
      label.style.top = "92px";
    }
  }, [selectedImageTwo]);
  return (
    <div>
      <input
        type="file"
        id="img2"
        style={{ "display": "none" }}
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImageTwo(event.target.files[0]);
        }}
      />
      <div style={{ "position": "relative" }}>
        <div className="handleImgTwo mainDivTwo">
          {selectedImageTwo ? (
            <img
              src={URL.createObjectURL(selectedImageTwo)}
              alt="avatar"
              className="imggTwo"
            />
          ) : (
            <img
              src={Instragram}
              alt="avatar"
              width="30"
              height="20"
              style={{ "objectFit": "contain" }}
            />
          )}
        </div>
        <label
          for="img2"
          id="addReportImageLabel"
          className="addReportImageLabelTwo"
        >
          <SaveAltIcon /> Upload Image
        </label>
      </div>
    </div>
  );
};

export default UploadAndDisplayImageTwo;
