import React from "react";
import upl from "../img/upl.png";
import sendbtn from "../img/sendbtn.png";

const UserInput = () => {
  return (
    <div className="allinput">
      <div
        className="input"
        style={{
          borderRadius: "20px",
          background: "#EDEDED",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          width: "650px",
        }}
      >
        <input type="text" placeholder="Type something ..." />
        <div className="send">
          <img src={upl} alt="" />
          <input type="file" style={{ display: "none" }} id="file" />
        </div>
      </div>
      <img src={sendbtn} alt="Send" />
    </div>
  );
};

export default UserInput;
