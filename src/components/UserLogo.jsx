import React from "react";
import firas from "../img/FIRAS.png";
import appelvideo from "../img/appelvideo.png";
import appel from "../img/appel.png";

const UserLogo = () => {
  const handleAppelVideoClick = () => {
    console.log("Appel Video clicked");
  };

  const handleAppelClick = () => {
    console.log("Appel clicked");
  };

  return (
    <div className="user1">
      <div
        className="user2"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <img className="userimg" src={firas} alt="" />
        <span className="username">Firas Kacem</span>
        <div className="call" style={{ alignItems: "center" }}>
          <a href="#" onClick={handleAppelVideoClick}>
            <img className="appelvideo" src={appelvideo} alt="Appel Video" />
          </a>
          <a href="#" onClick={handleAppelClick}>
            <img className="appel" src={appel} alt="Appel" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserLogo;
