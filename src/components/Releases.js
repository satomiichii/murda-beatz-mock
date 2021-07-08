import React from 'react';
import music_1 from '../asset/images/music_1.png';
import music_2 from '../asset/images/music_2.png';
import music_3 from '../asset/images/music_3.png';
import music_4 from '../asset/images/music_4.png';
import music_5 from '../asset/images/music_5.png';

function Releases() {
  return (
    <section id="releases" className="section-container">
      <div className="contents-container">
        <h1 className="title-lightGray">RELEASES</h1>
        <div className="row album-container">
          <div className="colmuns medium-5 small-12 big-img">
            <div className="row">
              <div className="column medium-12 small-12">
                <img src={music_1} alt="music_1" />
              </div>
            </div>
          </div>
          <div className="column medium-5 small-12 small-img">
            <div className="row outer align-justify">
              <div className="colmuns medium-6 small-12 inner">
                <img src={music_2} alt="music_2" className="smaller-img" />
              </div>
              <div className="colmuns medium-6 small-12 inner">
                <img src={music_3} alt="music_3" className="smaller-img" />
              </div>
              <div className="colmuns medium-6 small-12 inner">
                <img src={music_4} alt="music_4" className="smaller-img" />
              </div>
              <div className="colmuns medium-6 small-12 inner">
                <img src={music_5} alt="music_5" className="smaller-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button href="#" className="btn-yellow">
            VIEW ALL RELEASES
          </button>
        </div>
      </div>
    </section>
  );
}

export default Releases;
