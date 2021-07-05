import React from 'react';
import photo_1 from '../asset/images/photo_1.png';
import photo_2 from '../asset/images/photo_2.png';
import photo_3 from '../asset/images/photo_3.png';
import photo_4 from '../asset/images/photo_4.png';
import photo_5 from '../asset/images/photo_5.png';
import photo_6 from '../asset/images/photo_6.png';
import photo_7 from '../asset/images/photo_7.png';
import photo_8 from '../asset/images/photo_8.png';
import photo_9 from '../asset/images/photo_9.png';
import photo_10 from '../asset/images/photo_10.png';

function Photos() {
  return (
    <section id="photos">
      <div className="title-black">PHOTOS</div>
      <div className="row align-center photo-container">
        <div className="column medium-2">
          <img src={photo_1} alt="photo_1" />
        </div>
        <div className="column medium-2">
          <img src={photo_2} alt="photo_2" />
        </div>
        <div className="column medium-2">
          <img src={photo_3} alt="photo_3" />
        </div>
        <div className="column medium-2">
          <img src={photo_4} alt="photo_4" />
        </div>
        <div className="column medium-2">
          <img src={photo_5} alt="photo_5" />
        </div>
        <div className="column medium-2">
          <img src={photo_6} alt="photo_6" />
        </div>
        <div className="column medium-2">
          <img src={photo_7} alt="photo_7" />
        </div>
        <div className="column medium-2">
          <img src={photo_8} alt="photo_8" />
        </div>
        <div className="column medium-2">
          <img src={photo_9} alt="photo_9" />
        </div>
        <div className="column medium-2">
          <img src={photo_10} alt="photo_10" />
        </div>
      </div>
      <button className="btn-yellow" href="#">
        VIEW ALL PHOTOS
      </button>
    </section>
  );
}

export default Photos;
