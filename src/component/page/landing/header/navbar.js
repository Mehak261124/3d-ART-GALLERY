import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className='header'>
        <div className="logo">Kalakriti</div>
        <div className="nav-icons">
          <div className="nav-icon">
            <FaRegHeart />
            <span>Favourites</span>
          </div>
          <div className="nav-icon">
            <CgProfile />
            <span>Profile</span>
          </div>
        </div>
      </nav>  
    </div>
  );
};

export default Navbar;