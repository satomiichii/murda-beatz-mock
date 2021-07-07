import React from 'react';
import merch_1 from '../asset/images/merch_1.png';
import merch_2 from '../asset/images/merch_2.png';
import merch_3 from '../asset/images/merch_3.png';

function Store() {
  return (
    <section id="store" className="section-container">
      <div className="contents-container">
        <div className="title-yellow">STORE</div>
        <div className="row align-center">
          <div className="column medium-4 small-12">
            <img src={merch_1} alt="merch_1" />
            <div>BANANA SPLIT LONG SLEEVE</div>
            <div className="secondary-black">$30.00</div>
          </div>
          <div className="column medium-4 small-12">
            <img src={merch_2} alt="merch_2" />
            <div>BANANA SPLIT SHORT SLEEVE</div>
            <div className="secondary-black">$25.00</div>
          </div>
          <div className="column medium-4 small-12">
            <img src={merch_3} alt="merch_3" />
            <div>BANANA SPLIT - DIGITAL SINGLE</div>
            <div className="secondary-black">$1.29</div>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn-black">SHOP ALL</button>
        </div>
      </div>
    </section>
  );
}

export default Store;
