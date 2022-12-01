import React, { useState, useEffect } from "react";
import Instragram from "../../../../Assets/images/instragram.png";

import SaveAltIcon from "@mui/icons-material/SaveAlt";

const UploadAndDisplayImageThree = () => {
  const [selectedImageThree, setSelectedImageThree] = useState(null);
  useEffect(() => {
    let label = document.querySelector(".addReportImageLabelThree");
    let mainDiv = document.querySelector(".mainDivThree");
    let removeFlex = document.querySelector(".handleImgThree");

    if (selectedImageThree == null) {
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
  }, [selectedImageThree]);
  return (
    <div>
      <input
        type="file"
        id="img3"
        style={{ "display": "none" }}
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImageThree(event.target.files[0]);
        }}
      />
      <div style={{ "position": "relative" }}>
        <div className="handleImgThree mainDivThree">
          {selectedImageThree ? (
            <img
              src={URL.createObjectURL(selectedImageThree)}
              alt="avatar"
              className="imggThree"
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
          for="img3"
          id="addReportImageLabel"
          className="addReportImageLabelThree"
        >
          <SaveAltIcon /> Upload Image
        </label>
      </div>
    </div>
  );
};

export default UploadAndDisplayImageThree;
