import React from 'react';
import group from "../img/Group.png"
import Inbox from "../img/Inbox.png"
import Vector from "../img/Vector.png"
import Room from "../img/Room.png"
import rectangle from "../img/rectangle.png"

const Forms = () => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      <ul className="nav nav-pills flex-column">
        <li className="nav-item text-white fs-4 my-1">
          <a href="#" className="nav-link text-white fs-5" aria-current="page">
            <img src={rectangle} className='rectanglestyle' alt="Rectangle Image" />
            <img src={group} className="bi image-container me-2" style={{ marginLeft: '-5px' }} alt="Group Icon" />
            <span className="fs-5" style={{ color: '#F70349', marginLeft: '20px' }}>People</span>
          </a>
        </li>
        <li className="nav-item text-white fs-4 my-1">
          <a href="#" className="nav-link text-white fs-5" aria-current="page">
            <img src={Vector} className="bi image-container me-2" style={{ marginLeft: '-5px' }} alt="Vector Icon" />
            <span className="fs-5" style={{ marginLeft: '20px' }}>Drive</span>
          </a>
        </li>
        <li className="nav-item text-white fs-4 my-1">
          <a href="#" className="nav-link text-white fs-5" aria-current="page">
            <img src={Inbox} className="bi image-container me-2" style={{ marginLeft: '-5px' }} alt="Inbox Icon" />
            <span className="fs-5" style={{ marginLeft: '20px' }}>Inbox</span>
          </a>
        </li>
        <li className="nav-item text-white fs-4 my-1">
          <a href="#" className="nav-link text-white fs-5" aria-current="page">
            <img src={Room} className="bi image-container me-2" style={{ marginLeft: '-5px' }} alt="Room Icon" />
            <span className="fs-5" style={{ marginLeft: '20px' }}>Rooms</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Forms;
