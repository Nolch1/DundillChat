import React, { useState } from "react";
import Navbar from "./Navbar";
import Files from "./Files";
import DriveSort from "./DriveSort";
import Drivepics from "./Drivepics";
import Drivevideos from "./Drivevideos";
import Drivedocuments from "./Drivedocuments";
import Drivesetups from "./Drivesetups";

const DriveCo = () => {
  const [drivecontent, setDriveContent] = useState("images");
  return (
    <div
      className="members-container"
      style={{ borderRadius: "30px", overflow: "hidden" }}
    >
      <div className="members">
        <Navbar title="Drive" />
      </div>
      <Files />
      <DriveSort
        drivecontent={drivecontent}
        setDriveContent={setDriveContent}
      />
      {drivecontent === "images" ? (
        <Drivepics />
      ) : drivecontent === "videos" ? (
        <Drivevideos />
      ) : drivecontent === "documents" ? (
        <Drivedocuments />
      ) : drivecontent === "setups" ? (
        <Drivesetups />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DriveCo;
