import React, { useState } from "react";
import stylus from "../img/stylus.png"; // Make sure the path is correct

const MemberEditor = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(imageFile));
  };
  const sectionStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "20px",
  };

  const labelStyle = {
    color: "#9A9A9A",
    fontFamily: "Montserrat",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    marginRight: "16px",
  };

  const inputStyle = {
    borderRadius: "10px",
    background: "#FFF",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    padding: "16px",
    width: "200px",
    height: "50px",
  };
  const containerStyle = {
    borderRadius: "10px",
    background: "#FFF",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    height: "100vh",
    marginBottom: "-100px",
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Image Container */}
        <div>
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

          {/* Edit Icon */}
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
                src={stylus} // Make sure 'stylus' is correctly defined
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

        {/* Second Flex Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "60px",
            marginRight: "140px",
          }}
        >
          {/* Project Name */}
          <span className="titre"> Name</span>
          <span className="rolem">add a role</span>
          {/* The 'titre' class should be defined */}
        </div>
      </div>
      <div className="name-input" style={sectionStyle}>
        <div>
          <span style={labelStyle}>Name</span>
          <input type="text" className="form-control" style={inputStyle} />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <span style={labelStyle}>Full Name</span>
          <input type="text" className="form-control" style={inputStyle} />
        </div>
      </div>
      <div className="name-input" style={sectionStyle}>
        <div>
          <span style={labelStyle}>E-mail Address</span>
          <input type="email" className="form-control" style={inputStyle} />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <span style={labelStyle}>Phone Number</span>
          <input type="tel" className="form-control" style={inputStyle} />
        </div>
      </div>
      <div className="name-input aa" style={sectionStyle}>
        <div>
          <span style={labelStyle}>Password</span>
          <input type="password" className="form-control" style={inputStyle} />
        </div>
      </div>
      <button
        type="submit"
        style={{
          borderRadius: "12px",
          background: "#F70349",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          padding: "16px",
          width: "200px",
          height: "50px",
          color: "#FFF",
          fontFamily: "Montserrat",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          cursor: "pointer",
        }}
      >
        Add a member
      </button>
    </div>
  );
};

export default MemberEditor;
