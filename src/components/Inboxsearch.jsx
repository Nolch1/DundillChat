import React from "react";
import oussema from "../img/oussema.png";

const Inboxsearch = () => {
  return (
    <div className="conversation">
      <span className="conv1">All Conversation</span>

      <div className="main12">
        <div className="main1">
          <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"></span>
            <input
              style={{ marginTop: "15px", width: 200, marginBottom: "5px" }}
              type="text"
              className="form-control cadre-container"
              placeholder="Find user"
            />
          </div>
        </div>
      </div>
      <div style={{}} className="userChat">
        <img src={oussema} alt="Oussema Amar" />
        <div className="userChatInfo">
          <span className="namest">Oussema Amar</span>
        </div>
      </div>
    </div>
  );
};

export default Inboxsearch;
