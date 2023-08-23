import React from "react";
import ProNavbar from "./ProNavbar";
import Roomeditor from "./Roomeditor";

const RoomComponent = () => {
  return (
    <div
      className="members-container"
      style={{ borderRadius: "30px", overflow: "hidden" }}
    >
      <div className="members">
        <ProNavbar title="Create a room" />
        <Roomeditor />
      </div>
    </div>
  );
};

export default RoomComponent;
