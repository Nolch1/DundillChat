import React, { useState } from "react";

const SearchBySort = () => {
  const [selectedMember, setSelectedMember] = useState("All Members");
  const [selectedDepartment, setSelectedDepartment] = useState("Departement");
  const [selectedSortBy, setSelectedSortBy] = useState("All");

  return (
    <div className="navbar-container d-flex align-items-center justify-content-between flex-wrap">
      <div className="d-flex">
        <div className="navbar-item me-3">
          <select
            className="btn shad btn-secondary rounded-pill border custom-border smaller-btn"
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.target.value)}
            style={{
              width: "fit-content",
              background: "#F7034933",
              color: "#000000",
            }}
          >
            <option value="AllMembers">All Members</option>
          </select>
        </div>
        <div className="navbar-item">
          <select
            className="btn shad btn-secondary rounded-pill border custom-border smaller-btn"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            style={{
              width: "fit-content",
              background: "#FFFFFF",
              color: "#000000",
            }}
          >
            <option value="departement">Departement</option>
          </select>
        </div>
      </div>
      <div
        style={{ paddingRight: "80px" }}
        className="d-flex align-items-center"
      >
        <span className="sort-by-text me-2">Sort By</span>
        <select
          className="btn shad btn-secondary rounded-pill border custom-border smaller-btn"
          value={selectedSortBy}
          onChange={(e) => setSelectedSortBy(e.target.value)}
          style={{
            width: "fit-content",
            background: "#FFFFFF",
            color: "#000000",
          }}
        >
          <option value="All">All</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBySort;
