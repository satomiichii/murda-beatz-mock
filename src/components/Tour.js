import React from 'react';

function Tour({ anchor }) {
  return (
    <section id="tour" className="section-container">
      <div className="contents-container">
        <div className="title-black">TOUR</div>
        <div className="row align-center">
          <div className="column  row medium-5 small-12 stage line">
            <div className="column medium-5 small-12 date">
              <div className="secondary-white">JUN 6</div>
              <div>JEWEL NIGHT CLUB</div>
              <div className="primary-white-thin">LAS VEGAS, NY</div>
            </div>
            <div className="column medium-5 small-12 ticket">
              <a href="#">TICKETS</a>
              <a href="#">VIP</a>
              <a href="#">RSVP</a>
            </div>
          </div>
          <div className="column  row medium-5 small-12 stage line">
            <div className="column medium-5 small-12 date">
              <div className="secondary-white">JUN 6</div>
              <div>JEWEL NIGHT CLUB</div>
              <div className="primary-white-thin">LAS VEGAS, NY</div>
            </div>
            <div className="column medium-5 small-12 ticket">
              <a href="#">TICKETS</a>
              <a href="#">VIP</a>
              <a href="#">RSVP</a>
            </div>
          </div>
          <div className="column  row medium-5 small-12 stage line">
            <div className="column medium-5 small-12 date">
              <div className="secondary-white">JUN 6</div>
              <div>JEWEL NIGHT CLUB</div>
              <div className="primary-white-thin">LAS VEGAS, NY</div>
            </div>
            <div className="column medium-5 small-12 ticket">
              <a href="#">TICKETS</a>
              <a href="#">VIP</a>
              <a href="#">RSVP</a>
            </div>
          </div>
          <div className="column  row medium-5 small-12 stage line">
            <div className="column medium-5 small-12 date">
              <div className="secondary-white">JUN 6</div>
              <div>JEWEL NIGHT CLUB</div>
              <div className="primary-white-thin">LAS VEGAS, NY</div>
            </div>
            <div className="column medium-5 small-12 ticket">
              <a href="#">TICKETS</a>
              <a href="#">VIP</a>
              <a href="#">RSVP</a>
            </div>
          </div>
          <div id="last-line" className="column  row medium-5 small-12 stage">
            <div className="column medium-5 small-12 date">
              <div className="secondary-white">JUN 6</div>
              <div>JEWEL NIGHT CLUB</div>
              <div className="primary-white-thin">LAS VEGAS, NY</div>
            </div>
            <div className="column medium-5 small-12 ticket">
              <a href="#">TICKETS</a>
              <a href="#">VIP</a>
              <a href="#">RSVP</a>
            </div>
          </div>
          <div className="column  row medium-5 small-12 stage">
            <div className="column medium-5 small-12 date">
              <div className="secondary-white">JUN 6</div>
              <div>JEWEL NIGHT CLUB</div>
              <div className="primary-white-thin">LAS VEGAS, NY</div>
            </div>
            <div className="column medium-5 small-12 ticket">
              <a href="#">TICKETS</a>
              <a href="#">VIP</a>
              <a href="#">RSVP</a>
            </div>
          </div>
        </div>
        <div className="btn-container" ref={anchor}>
          <button href="#" className="btn-yellow">
            VIEW ALL DATES
          </button>
        </div>
      </div>
    </section>
  );
}

export default Tour;
