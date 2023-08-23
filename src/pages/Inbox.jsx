import React from "react";

import InboxCo from "../components/InboxCo";

const Inbox = () => {
  return (
    <div className="myapp">
      <div className="container-fluid">
        <div className="row">
          <div
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              paddingLeft: 60,
            }}
            className="bigcontainer"
          >
            <InboxCo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
