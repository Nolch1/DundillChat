import React from "react";
import download from '../img/download.png'
const Files = () => {
  return (
 
    <div style={{height:'50px'}}className="navbar-container d-flex align-items-center justify-content-between my-0">
      <div className="navbar-item files-text">Your Recent Files</div>
      <div className="main">
       
      </div>
      <div
        style={{ paddingRight: "70px" }}
        className="d-flex align-items-center"
      >
        <div className="files-container d-flex">
        <label className="btn ">
          <input type="file" style={{ display: "none" }} />
          <img style={{paddingRight:'20px'}} className="mr-2 " src={download}/>
          <span className="uaf">Upload a file</span>
        </label>
      </div>
    </div>
    </div>
  );

};

export default Files;
