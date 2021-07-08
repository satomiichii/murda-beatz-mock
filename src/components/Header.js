import React from 'react';
import main_pic from '../asset/images/header_pic.png';

function Header({ onClickScroll }) {
  console.log(onClickScroll);
  return (
    <section id="header">
      <div className="row align-bottom align-center">
        <div className="column medium-order-1 small-order-3 medium-4 small-12 title">
          <p>CHECK OUT ON SPLICE</p>
          <div>MURDA BEATZ' QUARANTINE KIT SAMPLE PACK</div>
          <button
            type="button"
            className="success button"
            onClick={onClickScroll}
          >
            LISTEN NOW
          </button>
        </div>
        <div className="column medium-order-2 small-order-1 medium-4 small-12 main-pic">
          <img src={main_pic} alt="Main" />
        </div>
        <div className="column medium-order-3 small-order-2 medium-1 small-12 arrow">
          arrow
        </div>
      </div>
    </section>
  );
}

export default Header;
