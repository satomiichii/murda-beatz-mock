import React from 'react';
import video_1 from '../asset/images/video_1.png';

function Videos() {
  return (
    <section id="videos" className="section-container">
      <div className="contents-container">
        <div className="title-black">VIDEOS</div>
        <div className="row video-container">
          <div className="column medium-9 small-11 video">
            <img src={video_1} alt="video_1" />
            <div className="video-title-container">
              <div className="video-title primary-white">BANANA SPLIT</div>
              <div className="video-artist secondary-white">
                MURDA BEATZ (FEAT. YNW MELLY & LIL DURK)
              </div>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn-yellow">VIEW ALL VIDEOS</button>
        </div>
      </div>
    </section>
  );
}

export default Videos;
