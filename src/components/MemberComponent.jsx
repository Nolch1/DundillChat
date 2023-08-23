import React from "react";
import ProNavbar from "./ProNavbar";
import MemberEditor from "./Membereditor";

const MemberComponent = () => {
  return (
    <div
      className="members-container"
      style={{ borderRadius: "30px", overflow: "hidden" }}
    >
      <div className="members">
        <ProNavbar title="Add a Member" />
        <MemberEditor />
      </div>
    </div>
  );
};

export default MemberComponent;
