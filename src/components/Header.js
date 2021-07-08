import React from 'react';
import main_pic from '../asset/images/header_pic.png';
import arrows from '../asset/images/arrows.png';

function Header({ onClickScroll }) {
  console.log(onClickScroll);
  return (
    <section id="header">
      <div className="row align-bottom align-center">
        <div className="column medium-order-1 small-order-3 medium-4 small-11 title">
          <p>CHECK OUT ON SPLICE</p>
          <div>MURDA BEATZ' QUARANTINE KIT SAMPLE PACK</div>
          <div className="btn-container-header">
            <button className="btn-black" onClick={onClickScroll}>
              LISTEN NOW
            </button>
          </div>
        </div>
        <div className="column medium-order-2 small-order-1 medium-4 small-10 main-pic">
          <img src={main_pic} alt="Main" />
        </div>
        <div className="column medium-order-3 small-order-2 medium-1 small-3 arrow">
          <img src={arrows} alt="arrows" />
        </div>
      </div>
    </section>
  );
}

export default Header;
