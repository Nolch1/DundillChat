import React from "react";
import chahed from "../img/chahed.png";

const Proeditor = () => {
  const containerStyle = {
    borderRadius: "10px",
    background: "#FFF",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    marginBottom: "-100px",
    marginTop: "-80px",
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

  return (
    <div style={containerStyle}>
      <div className="user d-flex align-items-center">
        <div>
          <img src={chahed} className="centeredimage" alt="" />
        </div>
        <div
          className="d-flex flex-column align-items-start ml-2"
          style={{ marginLeft: "70px" }}
        >
          <span
            className="user "
            style={{
              color: "black",
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              marginRight: "16px",
            }}
          >
            Chahd Bennani
          </span>
          <span
            className="user"
            style={{
              color: "#9A9A9A",
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              marginRight: "16px",
            }}
          >
            Design Lead
          </span>
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
      <div className="name-input" style={sectionStyle}>
        <div>
          <span style={labelStyle}>Change Password</span>
          <input type="password" className="form-control" style={inputStyle} />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <span style={labelStyle}>New Password</span>
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
        Save Changes
      </button>
    </div>
  );
};

export default Proeditor;
