import React from "react";
import ProNavbar from "./ProNavbar";
import Inboxchat from "./Inboxchat";

const InboxCo = () => {
  return (
    <div className="members-container" >
      <ProNavbar title="Inbox" />
      <Inboxchat />
      
    </div>
  );
};

export default InboxCo;
