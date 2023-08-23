import React from "react";
import group from "../img/Group.png";
import Inbox from "../img/Inbox.png";
import Vector from "../img/Vector.png";
import Room from "../img/Room.png";
import support from "../img/Support.png";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo1 from "../img/logo1.png";
import anotherPic from "../img/stylus.png";
import { Link } from "react-router-dom"; // Import Link component
import pic from "../img/pic.png";

const NewSideBar = ({ children }) => {
  const menuItem = [
    {
      path: "/Home",
      name: "People",
      image2: group,
    },
    {
      path: "/Drive",
      name: "Drive",
      image2: Vector,
    },
    {
      path: "/Inbox",
      name: "Inbox",
      image2: Inbox,
    },
    {
      path: "/Rooms",
      name: "Rooms",
      image2: Room,
    },
    {
      path: "/Support",
      name: "Support",
      image2: support,
    },
  ];

  return (
    <div className="Container">
      <div className="sidebar">
        <div className="top_section">
          <img src={logo1} alt="Logo" />
          <div className="bars">
            <FaBars />
          </div>
        </div>
        <div className="userProf">
          <div className="profilePic d-flex align-items-center">
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
              <div className="profileEdit">
                <img src={anotherPic} className="centeredimage" alt="" />
              </div>
            </Link>
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className=" link"
            activeClassName="active"
          >
            <div className="icon">
              <img src={item.image2} alt="" className="fixed-image" />
            </div>
            <div className="fs-5 link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default NewSideBar;
