import React, { useState, useEffect } from "react";
import Instragram from "../../../../Assets/images/instragram.png";

import SaveAltIcon from "@mui/icons-material/SaveAlt";

const UploadAndDisplayImageOne = () => {
  const [selectedImageOne, setSelectedImageOne] = useState(null);
  useEffect(() => {
    let label = document.querySelector(".addReportImageLabel");
    let mainDiv = document.querySelector(".mainDiv");
    let removeFlex = document.querySelector(".handleImg");

    if (selectedImageOne == null) {
      label.style.color = "#b8cbd7";
      mainDiv.style.display = "flex";
      mainDiv.style.justifyContent = "center";
      mainDiv.style.alignItems = "center";
      label.style.top = "81px";
    } else {
      label.style.color = "white";
      removeFlex.classList.remove("mainDiv");
      label.style.top = "92px";
    }
  }, [selectedImageOne]);
  return (
    <div>
      <input
        type="file"
        id="img"
        style={{ "display": "none" }}
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImageOne(event.target.files[0]);
        }}
      />
      <div style={{ "position": "relative" }}>
        <div className="handleImg mainDiv">
          {selectedImageOne ? (
            <img
              src={URL.createObjectURL(selectedImageOne)}
              alt="avatar"
              className="imgg"
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
          for="img"
          id="addReportImageLabel"
          className="addReportImageLabel"
        >
          <SaveAltIcon /> Upload Image
        </label>
      </div>
    </div>
  );
};

export default UploadAndDisplayImageOne;
