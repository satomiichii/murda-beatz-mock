import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import video_1 from '../asset/images/video_1.png';
import video_2 from '../asset/images/video_2.png';
import prev from '../asset/images/prev.png';
import next from '../asset/images/next.png';

function Videos() {
  const [carouselOption, setCarouselOption] = useState({
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
  });
  return (
    <section id="videos" className="section-container">
      <div className="contents-container">
        <div className="title-black">VIDEOS</div>
        <OwlCarousel
          className="owl-theme video-container"
          loop
          margin={0}
          nav={true}
          items={2}
          dots={false}
          autoWidth={false}
          responsive={carouselOption}
        >
          <div className="video item">
            <img src={video_1} alt="video_1" />
            <div className="video-title-container">
              <div className="video-title primary-white">BANANA SPLIT</div>
              <div className="video-artist secondary-white">
                MURDA BEATZ (FEAT. YNW MELLY & LIL DURK)
              </div>
            </div>
          </div>
          <div className="video item">
            <img src={video_2} alt="video_2" />
            <div className="video-title-container">
              <div className="video-title primary-white">FEFE</div>
              <div className="video-artist secondary-white">
                6ix9INE, NICKI MINAJ, MURDA BEATZ
              </div>
            </div>
          </div>
          <div className="video item">
            <img src={video_1} alt="video_1" />
            <div className="video-title-container">
              <div className="video-title primary-white">BANANA SPLIT</div>
              <div className="video-artist secondary-white">
                MURDA BEATZ (FEAT. YNW MELLY & LIL DURK)
              </div>
            </div>
          </div>
          <div className="video item">
            <img src={video_2} alt="video_2" />
            <div className="video-title-container">
              <div className="video-title primary-white">FEFE</div>
              <div className="video-artist secondary-white">
                6ix9INE, NICKI MINAJ, MURDA BEATZ
              </div>
            </div>
          </div>
        </OwlCarousel>
        <div className="btn-container">
          <button className="btn-yellow">VIEW ALL VIDEOS</button>
        </div>
      </div>
    </section>
  );
}

export default Videos;
