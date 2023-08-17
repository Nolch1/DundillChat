import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import pic from "../img/pic.png";
import anotherPic from "../img/stylus.png";

const Profile = () => {
  return (
    <div className="profile d-flex flex-column align-items-center">
      <div className="logo1 d-flex justify-content-center"></div>
      <div className="user d-flex flex-column align-items-center">
        <div className="d-flex align-items-center">
          <img src={pic} className="centeredimage" alt="" />
        </div>
        <div className="d-flex align-items-center">
          <span
            className="user text-white"
            style={{
              color: "#FFF",
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              marginRight: "10px",
            }}
          >
            Chahd Bennani
          </span>
          <Link to="/BigProfile">
            {" "}
            {/* Use Link component with "to" prop */}
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "red",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                cursor: "pointer",
                verticalAlign: "middle",
              }}
            >
              <img src={anotherPic} className="centeredimage" alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
