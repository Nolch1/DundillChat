import React from "react";

import RoomsCo from "../components/RoomsCo";

const Rooms = () => {
  return (
    <div className="myapp">
      <div className="container-fluid">
        <div className="row">
          <div
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              paddingLeft: 60,
            }}
            className="bigcontainer "
          >
            <RoomsCo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
