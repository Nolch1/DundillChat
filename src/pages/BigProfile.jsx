import React from "react";
import ProfileCo from "../components/ProfileCo";

const BigProfile = () => {
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
            className="bigcontainer"
          >
            <ProfileCo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigProfile;
