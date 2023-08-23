import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { userData } from "./membersData";
import { Link } from "react-router-dom";
import plus from "../img/plus.png";

const AllMembers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 6;
  const membersPerLine = 3;

  const members = userData;

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  const isLastPage = currentPage === Math.ceil(members.length / membersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="row " style={{ maxHeight: "500px", overflowY: "auto" }}>
        {currentMembers.map((member, index) => (
          <div key={index} className={`col-lg-${12 / membersPerLine} col-md-4`}>
            <div className="profile d-flex flex-column align-items-start my-3">
              <div
                style={{ width: 200 }}
                className="user d-flex flex-column align-items-center bo"
              >
                <img src={member.image} className="centeredimage" alt="" />
                <span className="user text-black">{member.name}</span>
                <span className="user text-black">{member.role}</span>
                <button
                  className="btn rounded-pill border shad"
                  type="button"
                  style={{
                    width: "160px",
                    background: "#FFFFFF",
                    color: "#000000",
                  }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Add a member section on the last page */}
        {isLastPage && (
          <div className={`col-lg-${12 / membersPerLine} col-md-4`}>
            <div className="profile d-flex flex-column align-items-center my-3">
              <div
                style={{ width: 200 }}
                className="user d-flex flex-column align-items-center"
              >
                <Link to="/addmember">
                  <img
                    src={plus}
                    style={{
                      height: "100px",
                      width: "100px",
                      marginTop: "40px",
                      marginLeft: "-100px",
                    }}
                    alt="Add Member"
                  />
                </Link>
                <span
                  className="user text-black clickable-span"
                  style={{
                    color: "black",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                    marginTop: "20px",
                    marginBottom: "10px",
                    marginLeft: "-100px",
                  }}
                >
                  Add a member
                </span>
              </div>
            </div>
          </div>
        )}
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
                currentPage === Math.ceil(members.length / membersPerPage)
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

export default AllMembers;
