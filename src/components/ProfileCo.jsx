import React from "react";
import ProNavbar from "./ProNavbar";
import Proeditor from "./Proeditor";

const ProfileCo = () => {
  return (
    <div
      className="members-container"
      style={{ borderRadius: "30px", overflow: "hidden" }}
    >
      <div className="members">
        <ProNavbar title="Profile" />
        <Proeditor />
      </div>
    </div>
  );
};

export default ProfileCo;
