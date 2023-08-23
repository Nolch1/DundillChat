import React from "react";
import upl from "../img/upl.png";
import sendbtn from "../img/sendbtn.png";

const UserInput = () => {
  const handleUplClick = () => {
    // Code to execute when the upl image is clicked
    console.log("Upl image clicked!");
  };

  const handleSendClick = () => {
    // Code to execute when the sendbtn image is clicked
    console.log("Send button clicked!");
  };

  return (
    <div className="allinput" style={{ marginRight: 80 }}>
      <div
        className="input"
        style={{
          borderRadius: "20px",
          background: "#EDEDED",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          width: "1000px",
        }}
      >
        <input type="text" placeholder="Type something ..." />
        <div className="send">
          <img
            src={upl}
            alt=""
            onClick={handleUplClick}
            style={{ cursor: "pointer" }}
          />
          <input type="file" style={{ display: "none" }} id="file" />
        </div>
      </div>
      <img
        src={sendbtn}
        alt="Send"
        onClick={handleSendClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default UserInput;
