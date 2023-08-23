import React from "react";

import Members from "../components/Members";
import NewSideBar from "../components/NewSideBar";

const Home = () => {
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
            <Members />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
