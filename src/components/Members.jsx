import React from 'react';
import Navbar from './Navbar';
import SearchBySort from './SearchBySort';
import AllMembers from './AllMembers';

const Members = () => {
  return (
    <div className='members-container' style={{ borderRadius: '30px', overflow: 'hidden' }}>
      <div className='members'>
        <Navbar />
        <SearchBySort />
        <AllMembers />
      </div>
    </div>
  );
};

export default Members;
