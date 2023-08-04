import React from 'react';
import pic from "../img/pic.png";

const Profile = () => {
  return (
    <div className='profile d-flex flex-column align-items-center'>
      <div className='logo1 d-flex justify-content-center'></div>
      <div className='user d-flex flex-column align-items-center'>
        <img src={pic} className='centeredimage' alt="Profile Picture" />
        <span className='user text-white'>Chahd Bennani</span>
      </div>
    </div>
  );
};

export default Profile;
