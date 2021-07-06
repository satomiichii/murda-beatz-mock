import React from 'react';
import logo from '../asset/images/Logo_large.png';

function Nav() {
  return (
    <nav id="nav">
      <img
        src={logo}
        alt="Logo"
        className="column medium-1 small-3 menu-text"
      />
      <ul id="example-menu">
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
      {/* <div
        className="title-bar"
        data-responsive-toggle="example-menu"
        data-hide-for="medium"
      >
        <button
          className="menu-icon"
          type="button"
          data-toggle="example-menu"
        ></button>
      </div> */}
    </nav>
  );
}

export default Nav;
