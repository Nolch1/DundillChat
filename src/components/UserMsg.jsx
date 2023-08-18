import React from "react";
import firas from "../img/FIRAS.png";
import p1 from "../img/p1.jpg";
const UserMsg = () => {
  return (
    <div>
      <span
        style={{
          color: "#9A9A9A",
          fontFamily: "Montserrat",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Wedneday 02/08/2023
      </span>
      <div className="message owner">
        <div className="messageInfo">
          <img className="imgchat" src={firas} alt="" />
          <span style={{ marginLeft: "20px", marginTop: "5px", color: "gray" }}>
            Just now
          </span>
        </div>
        <div className="messageContent">
          <p className="messagetext">Hello</p>
          <img style={{ width: "50%" }} src={p1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserMsg;
