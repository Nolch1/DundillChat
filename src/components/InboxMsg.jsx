import React, { useRef, useEffect } from "react";
import UserLogo from "./UserLogo";
import UserMsg from "./UserMsg";
import UserInput from "./UserInput";

const InboxMsg = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when the component mounts or messages change
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div>
      <UserLogo />

      <div className="scroll-container">
        <div className="scroll-content" ref={scrollContainerRef}>
          <UserMsg />
          <UserMsg />
          <UserMsg />
          <UserMsg />
        </div>

      </div>

      <UserInput />
    </div>
  );
};

export default InboxMsg;
