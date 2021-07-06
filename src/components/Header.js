import React from 'react';
import main_pic from '../asset/images/header_pic.png';

function Header() {
  return (
    <section id="header">
      <div className="row align-bottom align-center">
        <div className="column medium-4 small-12 title">
          <p>CHECK OUT ON SPLICE</p>
          <div>MURDA BEATZ' QUARANTINE KIT SAMPLE PACK</div>
          <button className="btn-black">LISTEN NOW</button>
        </div>
        <div className="column medium-4 small-12 main-pic">
          <img src={main_pic} alt="Main" />
        </div>
        <div className="column medium-1 small-12 arrow">arrow</div>
      </div>
    </section>
  );
}

export default Header;
