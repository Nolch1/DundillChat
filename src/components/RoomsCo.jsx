import React from "react";
import Navbar from "./Navbar";
import RoomsSort from "./RoomsSort";
import AllRooms from "./AllRooms";

const RoomsCo = () => {
  return (
    <div
      className="members-container"
      style={{ borderRadius: "30px", overflow: "hidden" }}
    >
      <div className="members">
        <Navbar title="Rooms" />
        <RoomsSort/>
        <AllRooms/>
      </div>
    </div>
  );
};

export default RoomsCo;
