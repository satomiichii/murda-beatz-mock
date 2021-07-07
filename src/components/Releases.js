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
          <div className="colmuns medium-4 small-12">
            <img src={music_1} alt="music_1" />
          </div>
          <div className="colmuns medium-2 small-12">
            <img src={music_2} alt="music_2" />
          </div>
          <div className="colmuns medium-2 small-12">
            <img src={music_3} alt="music_3" />
          </div>
          <div className="colmuns medium-2 small-12">
            <img src={music_4} alt="music_4" />
          </div>
          <div className="colmuns medium-2 small-12">
            <img src={music_5} alt="music_5" />
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
