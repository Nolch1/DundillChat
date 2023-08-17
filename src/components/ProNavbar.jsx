import React from "react";

const ProNavbar = ({ title }) => {
  return (
    <div
      className="navbar-container d-flex align-items-center justify-content-between mt-4"
      style={{ paddingTop: "10px", marginBottom: "10px" }}
    >
      <div className="navbar-item people-text">{title}</div>
      <div
        style={{ paddingRight: "70px" }}
        className="d-flex align-items-center ml-auto"
      >
        <div className="cadre-container d-flex mr-3">
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            <i className="fa-regular fa-bell"></i>
          </a>
        </div>
        <div className="cadre-container d-flex">
          <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProNavbar;
