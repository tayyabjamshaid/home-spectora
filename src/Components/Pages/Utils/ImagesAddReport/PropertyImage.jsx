import React, { useState, useEffect } from "react";
import Home from "../../../../Assets/images/home.jpg";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
const PropertyImage = () => {
  const [selectedImageOne, setSelectedImageOne] = useState(null);
  useEffect(() => {
    let label = document.querySelector(".propertyImageLabel");
    let mainDiv = document.querySelector(".mainDivProperty");
    let removeFlex = document.querySelector(".handleImgProperty");

    if (selectedImageOne == null) {
      label.style.color = "#b8cbd7";
      mainDiv.style.display = "flex";
      mainDiv.style.justifyContent = "center";
      mainDiv.style.alignItems = "center";
      label.style.top = "158px";
    } else {
      label.style.color = "white";
      removeFlex.classList.remove("mainDiv");
      label.style.top = "158px";
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
        <div className="handleImgProperty mainDivProperty">
          {selectedImageOne ? (
            <img
              src={URL.createObjectURL(selectedImageOne)}
              alt="avatar"
              className="propertyImage"
            />
          ) : (
            <img src={Home} alt="avatar" className="propertyImage" />
          )}
        </div>
        <label for="img" id="propertyImageLabel" className="propertyImageLabel">
          <PhotoCameraIcon style={{ "paddingRight": "5px" }} /> Add Image
        </label>
      </div>
    </div>
  );
};

export default PropertyImage;
