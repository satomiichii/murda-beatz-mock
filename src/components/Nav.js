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
            <a href="#releases">RELEASES</a>
          </li>
          <li>
            <a href="#tour">TOUR</a>
          </li>
          <li>
            <a href="#videos">VIDEOS</a>
          </li>
          <li>
            <a href="#store">STORE</a>
          </li>
          <li>
            <a href="#photos">PHOTOS</a>
          </li>
          <li>
            <a href="#subcribe">SUBSCRIBE</a>
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
