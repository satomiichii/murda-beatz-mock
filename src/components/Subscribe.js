import React from 'react';
import { countries } from '../asset/countryList';

function Subscribe() {
  return (
    <section id="subscribe" className="section-container">
      <div className="subscribe-container">
        <div className="title-darkGray">SUBSCRIBE</div>
        <form onSubmit="">
          <div className="row">
            <input
              type="email"
              name="email"
              required
              placeholder="EMAIL ADDRESS"
              aria-label="Email"
              className="columns medium-5 small-12"
            />
            <select
              name="country"
              placeholder="COUNTRY"
              aria-label="Country"
              required
              className="columns medium-5 small-12"
            >
              <option className="country" value="" disabled selected>
                COUNTRY
              </option>
              {countries.map((elm) => (
                <option>{elm}</option>
              ))}
            </select>
          </div>
          <div className="secondary-white">SUBSCRIBE TO EMAILS FROM:</div>
          <div className="check-boxes">
            <div>
              <input type="checkbox" id="murdabeatz" />
              <label for="murdabeatz">MURDA BEATZ</label>
            </div>
            <div>
              <input type="checkbox" id="interscope" />
              <label for="interscope">INTERSCOPE RECORDS</label>
            </div>
            <div>
              <input type="checkbox" id="universal" />

              <label for="universal">UNIVERSAL MUSIC GROUP</label>
            </div>
          </div>

          <p className="primary-white">
            BY SUBMITTING THIS FORM, YOU AGREE TO THE
            <a href="#" className="primary-yellow">
              UNIVESAL MUSIC GROUP PRIVACY POLICY
            </a>
            .
          </p>
          <div className="submit-btn">
            <input type="submit" className="input-yellow" value="SUBMIT" />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
