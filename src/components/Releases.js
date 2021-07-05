import React from 'react';
import music_1 from '../asset/images/music_1.png';
import music_2 from '../asset/images/music_2.png';
import music_3 from '../asset/images/music_3.png';
import music_4 from '../asset/images/music_4.png';
import music_5 from '../asset/images/music_5.png';

function Releases() {
  return (
    <section id="releases">
      <h1 className="title-lightGray">RELEASES</h1>
      <div className="row align-center">
        <div className="column large-4">
          <img src={music_1} alt="music_1" />
        </div>
        <div className="column large-2">
          <img src={music_2} alt="music_2" />
        </div>
        <div className="column large-2">
          <img src={music_3} alt="music_3" />
        </div>
        <div className="column large-2">
          <img src={music_4} alt="music_4" />
        </div>
        <div className="column large-2">
          <img src={music_5} alt="music_5" />
        </div>
      </div>
      <button href="#" className="btn-yellow">
        VIEW ALL RELEASES
      </button>
    </section>
  );
}

export default Releases;
