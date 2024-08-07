import React, { useState } from 'react';
import "./NavBar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      <button className='menu-toggle' onClick={toggleMenu}>
        <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <h1 className='menus'>Home</h1>
        <h1 className='menus'>TV Shows</h1>
        <h1 className='menus'>Movies</h1>
        <h1 className='menus'>Recently Added</h1>
        <h1 className='menus'>My List</h1>
      </div>
      <div className="side_bar">
        <i className="fas fa-search side" style={{ color: '#ffffff', fontSize: 'medium' }}></i>
        <h1 className='side'>KIDS</h1>
        <h1 className='side'>DVD</h1>
        <i className="fa-solid fa-bell side" style={{ color: '#ffffff', fontSize: 'medium' }}></i>
      </div>
      <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="Netflix Avatar" />
    </div>
  );
}

export default NavBar;
