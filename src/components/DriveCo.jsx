import React from "react";
import Navbar from "./Navbar";
import Files from "./Files";
import DriveSort from "./DriveSort";
import Drivepics from "./Drivepics";

const DriveCo = () => {
  return (
    <div
      className="members-container"
      style={{ borderRadius: "30px", overflow: "hidden" }}
    >
      <div className="members">
        <Navbar title="Drive" />
      </div>
      <Files />
      <DriveSort/>
      <Drivepics/>
    </div>
  );
};

export default DriveCo;
