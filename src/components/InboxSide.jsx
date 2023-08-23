import React from "react";

import Inboxsearch from "./Inboxsearch";
import InboxOld from "./InboxOld";

const InboxSide = () => {
  return (
    <div>
      <div style={{ position: "sticky", top: 0, zIndex: 1, width:300}}>
        <Inboxsearch />
      </div>
      <div style={{  height: "calc(100vh - 60px)" }}>
        <InboxOld />
      </div>
    </div>
  );
};

export default InboxSide;
