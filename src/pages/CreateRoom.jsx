import React from "react";
import Sidebar from "../components/Sidebar";

import RoomComponent from "../components/RoomComponent";

const CreateRoom = () => {
  return (
    <div className="myapp">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 p-0 ">
            <Sidebar />
          </div>
          <div
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              paddingLeft: 60,
            }}
            className="col-lg-9 col-md-8 col-sm-12 "
          >
            <RoomComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
