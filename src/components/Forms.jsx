import React, { useState } from "react";
import group from "../img/Group.png";
import Inbox from "../img/Inbox.png";
import Vector from "../img/Vector.png";
import Room from "../img/Room.png";
import rectangle from "../img/rectangle.png";
import { Link, useLocation } from "react-router-dom";

const Forms = () => {
  const [activeButton, setActiveButton] = useState(null);

  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="d-flex justify-content-center flex-wrap">
      <ul className="nav nav-pills flex-column">
        <li
          className={`nav-item text-white fs-4 my-1 ${
            location.pathname === "/Home" ? "active" : ""
          }`}
        >
          <Link
            to="/Home"
            className="nav-link text-white fs-5"
            aria-current="page"
          >
            <img
              src={rectangle}
              className="rectanglestyle"
              alt="Rectangle Image"
              style={{
                filter:
                  location.pathname === "/Home"
                    ? "grayscale(0%)"
                    : "grayscale(100%)",
                marginLeft: "-5px",
              }}
            />
            <img
              src={group}
              className={`bi image-container me-2 ${
                location.pathname === "/Home" ? "active-image" : ""
              }`}
              style={{ marginLeft: "-5px" }}
              alt="Group Icon"
            />
            <span
              className="fs-5"
              style={{
                color: location.pathname === "/Home" ? "#F70349" : "white",
                marginLeft: "20px",
              }}
            >
              People
            </span>
          </Link>
        </li>
        <li
          className={`nav-item text-white fs-4 my-1 ${
            location.pathname === "/Drive" ? "active" : ""
          }`}
        >
          <Link
            to="/Drive"
            className="nav-link text-white fs-5"
            aria-current="page"
          >
            <img
              src={rectangle}
              className="rectanglestyle"
              alt="Rectangle Image"
              style={{
                filter:
                  location.pathname === "/Drive"
                    ? "grayscale(0%)"
                    : "grayscale(100%)",
                marginLeft: "-5px",
              }}
            />
            <img
              src={Vector}
              className={`bi image-container me-2 ${
                location.pathname === "/Drive" ? "active-image" : ""
              }`}
              style={{ marginLeft: "-5px" }}
              alt="Group Icon"
            />
            <span
              className="fs-5"
              style={{
                color: location.pathname === "/Drive" ? "#F70349" : "white",
                marginLeft: "20px",
              }}
            >
              Drive
            </span>
          </Link>
        </li>
        <li
          className={`nav-item text-white fs-4 my-1 ${
            location.pathname === "/Inbox" ? "active" : ""
          }`}
        >
          <Link
            to="/Inbox"
            className="nav-link text-white fs-5"
            aria-current="page"
          >
            <img
              src={rectangle}
              className="rectanglestyle"
              alt="Rectangle Image"
              style={{
                filter:
                  location.pathname === "/Inbox"
                    ? "grayscale(0%)"
                    : "grayscale(100%)",
                marginLeft: "-5px",
              }}
            />
            <img
              src={Inbox}
              className={`bi image-container me-2 ${
                location.pathname === "/Inbox" ? "active-image" : ""
              }`}
              style={{ marginLeft: "-5px" }}
              alt="Group Icon"
            />
            <span
              className="fs-5"
              style={{
                color: location.pathname === "/Inbox" ? "#F70349" : "white",
                marginLeft: "20px",
              }}
            >
              Inbox
            </span>
          </Link>
        </li>
        <li
          className={`nav-item text-white fs-4 my-1 ${
            location.pathname === "/Rooms" ? "active" : ""
          }`}
        >
          <Link
            to="/Rooms"
            className="nav-link text-white fs-5"
            aria-current="page"
          >
            <img
              src={rectangle}
              className="rectanglestyle"
              alt="Rectangle Image"
              style={{
                filter:
                  location.pathname === "/Rooms"
                    ? "grayscale(0%)"
                    : "grayscale(100%)",
                marginLeft: "-5px",
              }}
            />
            <img
              src={Room}
              className={`bi image-container me-2 ${
                location.pathname === "/Rooms" ? "active-image" : ""
              }`}
              style={{ marginLeft: "-5px" }}
              alt="Group Icon"
            />
            <span
              className="fs-5"
              style={{
                color: location.pathname === "/Rooms" ? "#F70349" : "white",
                marginLeft: "20px",
              }}
            >
              Rooms
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Forms;
