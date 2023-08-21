import React from "react";
import UserLogo from "./UserLogo";
import UserMsg from "./UserMsg";
import UserInput from "./UserInput";

const InboxMsg = () => {
  return (
    <div>
      <UserLogo />
      <div style={{ maxHeight: "453px", overflowY: "scroll", padding: 10 }}>
        <UserMsg />
        <UserMsg />
        <UserMsg />
        <UserMsg />
      </div>
      <div style={{ paddingBottom: 20 }}>
        <UserInput />
      </div>
    </div>
  );
};

export default InboxMsg;
