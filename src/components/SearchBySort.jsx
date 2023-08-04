import React, { useState } from 'react';

const SearchBySort = () => {
  const [isMembersDropdownOpen, setMembersDropdownOpen] = useState(false);
  const [isDepartmentDropdownOpen, setDepartmentDropdownOpen] = useState(false);
  const [isSortByDropdownOpen, setSortByDropdownOpen] = useState(false);

  const toggleMembersDropdown = () => {
    setMembersDropdownOpen(!isMembersDropdownOpen);
  };

  const toggleDepartmentDropdown = () => {
    setDepartmentDropdownOpen(!isDepartmentDropdownOpen);
  };

  const toggleSortByDropdown = () => {
    setSortByDropdownOpen(!isSortByDropdownOpen);
  };

  return (
    <div className="navbar-container d-flex align-items-center justify-content-between flex-wrap">
      <div className="d-flex">
        <div className="navbar-item me-3">
          <div className="dropdown">
            <button
              className="btn shad btn-secondary dropdown-toggle rounded-pill border custom-border"
              type="button"
              id="membersDropdown"
              onClick={toggleMembersDropdown}
              aria-expanded={isMembersDropdownOpen}
              style={{ background: '#F7034933', color: '#000000' }}
            >
              All Members
            </button>
            <ul className={`dropdown-menu ${isMembersDropdownOpen ? 'show' : ''}`} aria-labelledby="membersDropdown">
              <li>
                <a className="dropdown-item" href="#!">
                  All Members
                </a>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="navbar-item">
          <div className="dropdown">
            <button
              className="btn shad btn-secondary dropdown-toggle rounded-pill border custom-border"
              type="button"
              id="departmentDropdown"
              onClick={toggleDepartmentDropdown}
              aria-expanded={isDepartmentDropdownOpen}
              style={{ background: '#FFFFFF', color: '#000000' }}
            >
              Departement
            </button>
            <ul className={`dropdown-menu ${isDepartmentDropdownOpen ? 'show' : ''}`} aria-labelledby="departmentDropdown">
              <li>
                <a className="dropdown-item" href="#!">
                  Departement
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  option1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <span className="sort-by-text me-2">Sort By</span>
        <div className="dropdown">
          <button
            className="btn shad btn-secondary dropdown-toggle rounded-pill border custom-border smaller-btn"
            type="button"
            id="sortByDropdown"
            onClick={toggleSortByDropdown}
            aria-expanded={isSortByDropdownOpen}
            style={{ width:'50px', background: '#FFFFFF', color: '#000000' }}
          >
            All
          </button>
          <ul className={`dropdown-menu ${isSortByDropdownOpen ? 'show' : ''}`} aria-labelledby="sortByDropdown">
            <li>
              <a className="dropdown-item" href="#!">
                All
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default SearchBySort;
