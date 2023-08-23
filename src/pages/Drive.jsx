import React from "react";

import DriveCo from "../components/DriveCo";

const Drive = () => {
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
            <DriveCo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drive;
