import React from "react";
import InboxSide from "./InboxSide";
import InboxMsg from "./InboxMsg";


const Inboxchat = () => {
  const containerStyle = {
    backgroundColor: "gray",
    width: "100%",
    height: "600px",
    display: "flex",
    alignItems: "stretch", // Ensure components stretch to full height
  };

  const dividerStyle = {
    width: "1px",
    backgroundColor: "black",
  };

  const flexOneStyle = {
    flex: 1, // First component takes up one-third of available space
    overflow: "auto", // Add scroll for content overflow
  };

  const flexTwoStyle = {
    flex: 2, // Second component takes up two-thirds of available space
    overflow: "auto", // Add scroll for content overflow
  };

  return (
    <div style={containerStyle}>
      <div style={flexOneStyle}>
        <InboxSide />
      </div>
      <div style={dividerStyle}></div> {/* Divider line */}
      <div style={flexTwoStyle}>
        <InboxMsg />
      </div>
    </div>
  );
};

export default Inboxchat;
