import React from 'react';
import logo from '../asset/images/Logo_large.png';

function Nav() {
  return (
    <nav id="nav row">
      <img src={logo} alt="Logo" className="column medium-1" />
      <ul>
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
    </nav>
  );
}

export default Nav;
