import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import pic from "../img/pic.png";
import { userData } from "./membersData";


const AllMembers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 6;
  const membersPerLine = 3;

  const members = userData;

  const indexOfLastMember = currentPage * membersPerPage;

  const indexOfFirstMember = indexOfLastMember - membersPerPage;

  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(pic);
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
                <img
                
                  src={member.image}
                  className="centeredimage"
                  alt="Profile Picture"
                />
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
