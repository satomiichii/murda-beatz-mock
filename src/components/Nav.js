import React, { useState } from 'react';
import logo from '../asset/images/Logo_large.png';

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="nav-menu">
        <ul className="menu-items" id={showMenu ? 'hidden' : ''}>
          <li>
            <a href="#">RELEASES</a>
          </li>
          <li>
            <a href="#">TOUR</a>
          </li>
          <li>
            <a href="#">VIDEOS</a>
          </li>
          <li>
            <a href="#">STORE</a>
          </li>
          <li>
            <a href="#">PHOTOS</a>
          </li>
          <li>
            <a href="#">SUBSCRIBE</a>
          </li>
        </ul>
        <button
          className="menu-icon dark"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
    </nav>
  );
}

export default Nav;
