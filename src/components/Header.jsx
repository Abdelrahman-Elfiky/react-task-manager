import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Task List</h1>
      <Link to="/profile" className="profile-icon-link">
        <FaUserCircle size={32} className="profile-icon" />
      </Link>
    </header>
  );
};

export default Header;