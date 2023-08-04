import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Profile from './Profile';
import Forms from './Forms';
import Support from './Support';

function Sidebar() {
  return (
    <div style={{backgroundColor:"#1E1E1E"}}className="sidebar1 col-auto min-vh-100 d-flex justify-content-between flex-column">
      <Profile />
      <Forms />
      <Support />
    </div>
  );
}

export default Sidebar;


 