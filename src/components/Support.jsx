import React from 'react';
import support from "../img/Support.png";

const Support = () => {
  return (
    <div className="nav-item text-white fs-4 my-1 d-flex justify-content-center">
      <a href="#" className="nav-link text-white fs-5" aria-current="page">
        <img
          src={support}
          className="bi image-container me-md-2"
          alt="Support Icon"
          style={{ marginRight: '20px', width: '40px', height: '40px' }}
        />
        <span className="fs-5" style={{ marginLeft: '10px' }}>
          Support
        </span>
      </a>
    </div>
  );
};

export default Support;
