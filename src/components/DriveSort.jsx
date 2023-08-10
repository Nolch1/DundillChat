import React, { useState } from "react";

const DriveSort = () => {
  const handleClick = () => {
    console.log("photos");
  };
  const [selectedSortBy, setSelectedSortBy] = useState("All");

  return (
    <div
      style={{ height: "75px" }}
      className="navbar-container d-flex align-items-center justify-content-between flex-wrap"
    >
      <div style={{marginLeft:'-30px'}}className="d-flex">
        <div className="navbar-item me-3">
        <button className="btn blackbtn">Photos</button>
        </div>
        <div className="navbar-item me-3">
          <button className="btn blackbtn">Videos</button>
        </div>
        <div className="navbar-item me-3">
          <button className="btn blackbtn">Documents</button>
        </div>
        <div className="navbar-item me-3">
          <button className="btn blackbtn">Setups</button>
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
export default DriveSort;
