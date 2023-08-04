import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar-container d-flex align-items-center justify-content-between my-0">
      <div className="navbar-item people-text">People</div>
      <div className="main">
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input
            type="text"
            className="form-control cadre-container"
            placeholder="Search Something"
          />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="cadre-container d-flex">
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
            <i className="fa-regular fa-bell"></i>
          </a>
        </div>
        <div className="cadre-container d-flex">
          <a href='#' style={{ color: 'inherit', textDecoration: 'none' }}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
