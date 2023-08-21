import React from "react";
import Navbar from "./Navbar";

import AllRooms from "./AllRooms";

const RoomsCo = () => {
  return (
    <div
      className="members-container"
      style={{ borderRadius: "30px", overflow: "hidden" }}
    >
      <div className="members">
        <Navbar title="Rooms" />
        <AllRooms />
      </div>
    </div>
  );
};

export default RoomsCo;
