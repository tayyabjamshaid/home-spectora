import React, { useState } from "react";
import Man from "../../../Assets/images/imgMan.jpg";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="uploadImgDiv">
      <input
        type="file"
        id="img"
        style={{ "display": "none" }}
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      {selectedImage ? (
        <img
          src={URL.createObjectURL(selectedImage)}
          className="rounded-circle sd"
          alt="avatar"
          width="150"
          height="150"
        />
      ) : (
        <img
          src={Man}
          className="rounded-circle sd"
          alt="avatar"
          width="150"
          height="150"
        />
      )}

      <label for="img" className="label">
        <SaveAltIcon /> Upload Image
      </label>
    </div>
  );
};

export default UploadAndDisplayImage;
