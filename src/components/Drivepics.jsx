import React from "react";
import pan from "../img/pan.png";
import up from "../img/upload.png";
import DrivePhotos from "./DrivePhotos.json";

const Drivepics = () => {
  const pictures = DrivePhotos;

  const handleImageClick = (index) => {
    // Perform the action you want when an image is clicked, e.g., navigating to a specific page
    // You can use the history object or any navigation mechanism you have in your app
    console.log(`Image ${index} clicked`);
  };

  return (
    <div>
      <div>
        {pictures.map((picture, index) => (
          <div key={index} className="col-md-4">
            <div
              style={{ width: "100vh" }}
              className="d-flex align-items-start my-3"
            >
              <div className="user d-flex flex-column align-items-start">
                <span className="user text-black">
                  <div style={{ width: "150px" }}>{picture.name}</div>
                  <div>{picture.taille}</div>
                </span>
              </div>
              <div style={{ marginLeft: "700px" }} className="d-flex">
                <div style={{ float: "right", marginRight: "50px" }}>
                  <img
                    src={pan}
                    className="centeredimage"
                    alt="Profile Picture"
                    onClick={() => handleImageClick(index)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div style={{ float: "right" }}>
                  <img
                    src={up}
                    className="centeredimage"
                    alt="Profile Picture"
                    onClick={() => handleImageClick(index)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drivepics;
