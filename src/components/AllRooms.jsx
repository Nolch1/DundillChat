import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { roomData } from "./roomsData";
import oO from "../img/oO.png";
const AllRooms = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 6;
  const roomsPerLine = 3;
  const indexOfLastRoom = currentPage * roomsPerPage;
  const rooms = roomData;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;

  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="row " style={{ maxHeight: "500px", overflowY: "auto" }}>
        {currentRooms.map((room, index) => (
          <div key={index} className={`col-lg-${12 / roomsPerLine} col-md-4`}>
            <div className="profile d-flex flex-column align-items-start my-3">
              <div
                style={{ width: 200 }}
                className="user d-flex flex-column align-items-start bo"
              >
                <img src={room.image} className="centeredimage" alt="" />
                <span
                  className="user text-black"
                  style={{
                    color: "black",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    marginTop: "20px",
                    marginBottom: "10px",
                  }}
                >
                  {room.name}
                </span>
                <span
                  style={{
                    color: "#9A9A9A",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                  }}
                >
                  15 december 2022
                </span>
                <span
                  style={{
                    color: "#000",
                    fontFamily: "Montserrat",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    marginTop: "30px",
                    marginBottom: "10px",
                  }}
                >
                  Team members
                </span>
                <img
                  src={oO}
                  alt=""
                  style={{
                    width: "100px",
                    height: "auto",
                    marginTop: "0px",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="fixed-pagination">
        <div className="d-flex justify-content-center mt-3">
          <ul className="pagination">
            {/* Previous page button */}
            {currentPage > 1 && (
              <li className={`page-item prev-btn`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
              </li>
            )}

            {/* Next page button */}
            <li
              className={`page-item next-btn ${
                currentPage === Math.ceil(rooms.length / roomsPerPage)
                  ? "disabled"
                  : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
