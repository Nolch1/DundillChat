import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import pic from '../img/pic.png';

const AllMembers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 6; 
  const membersPerLine = 3; 

  const members = [
    { name: 'Chahd Bennani', role: 'UI/UX design' },
    { name: 'John Doe', role: 'Frontend Developer' },
    { name: 'Jane Smith', role: 'Backend Developer' },
    { name: 'Alice Johnson', role: 'Graphic Designer' },
    { name: 'Alice Johnson', role: 'Graphic Designer' },
    { name: 'Alice Johnson', role: 'Graphic Designer' },
    { name: 'Alice Johnson', role: 'Graphic Designer' },
    { name: 'Alice Johnson', role: 'Graphic Designer' },
    { name: 'Alice Johnson', role: 'Graphic Designer' },
    
  ];


  const indexOfLastMember = currentPage * membersPerPage;
  
  const indexOfFirstMember = indexOfLastMember - membersPerPage;

  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="row justify-content-center" style={{ maxHeight: '500px', overflowY: 'auto' }}>
        {currentMembers.map((member, index) => (
          <div key={index} className={`col-lg-${12 / membersPerLine} col-md-4`}>
            <div className="profile d-flex flex-column align-items-start my-3">
              <div className="user d-flex flex-column align-items-center bo">
                <img src={pic} className="centeredimage" alt="Profile Picture" />
                <span className="user text-black">{member.name}</span>
                <span className="user text-black">{member.role}</span>
                <button
                  className="btn rounded-pill border shad"
                  type="button"
                  style={{ width: '160px', background: '#FFFFFF', color: '#000000' }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
{/* Pagination */}
<div className="d-flex justify-content-center mt-3">
  <ul className="pagination">
    {/* Previous page button */}
    {currentPage > 1 && (
      <li className={`page-item prev-btn`}>
        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </li>
    )}

    {/* Next page button */}
    <li className={`page-item next-btn ${currentPage === Math.ceil(members.length / membersPerPage) ? 'disabled' : ''}`}>
      <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </li>
  </ul>
</div>



    </div>
  );
};

export default AllMembers;
