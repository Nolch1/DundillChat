import React, { useState } from "react";
import stylus from "../img/stylus.png";
import plus from "../img/plus.png";
import turnOnImage from "../img/on.png";
import turnOffImage from "../img/off.png";

const Roomeditor = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPrivateRoomOn, setIsPrivateRoomOn] = useState(true);

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };

  const togglePrivateRoom = () => {
    setIsPrivateRoomOn(!isPrivateRoomOn);
  };

  const inputStyle = {
    borderRadius: "10px",
    background: "#FFF",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    padding: "16px",
    width: "200px",
    height: "50px",
    marginTop: "20px",
  };
  const handlePlusClick = () => {
    // Your logic for handling the "plus" image click goes here
    console.log("Plus image clicked!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginTop: "-80px",
        marginBottom: "-60px",
      }}
    >
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ marginRight: "20px" }}>
            <div
              style={{
                backgroundColor: "red",
                width: "150px",
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              ) : (
                <p></p>
              )}
            </div>
            <label
              htmlFor="image-upload"
              className="edit-icon-label"
              style={{ marginLeft: "40px" }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                  cursor: "pointer",
                  verticalAlign: "middle",
                  marginTop: "-30px",
                  marginLeft: "20px",
                }}
              >
                <img
                  src={stylus}
                  style={{ height: "10px", width: "10px" }}
                  alt="Edit Icon"
                />
              </div>
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="titre">Project Name</span>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span>Add members</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              className="form-control"
              style={inputStyle}
              placeholder="Member name"
            />
            <a href="#" onClick={handlePlusClick}>
              <img src={plus} className="roomplus" alt="Add Member" />
            </a>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
          >
            <span>Private Room</span>
            <img
              src={isPrivateRoomOn ? turnOnImage : turnOffImage}
              alt={isPrivateRoomOn ? "Turn On" : "Turn Off"}
              onClick={togglePrivateRoom}
              style={{
                marginLeft: "150px",
                cursor: "pointer",
                height: "30px",
                width: "60px",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              borderRadius: "12px",
              background: "#F70349",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              padding: "16px",
              width: "100px",
              height: "50px",
              color: "#FFF",
              fontFamily: "Montserrat",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              cursor: "pointer",
              marginTop: "20px",
              marginLeft: "100px",
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Roomeditor;
