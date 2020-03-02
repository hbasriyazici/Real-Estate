import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
// eslint-disable-next-line
import bg from './img/bg.png';
import house from './img/house.png';
import traveller from './img/traveller.jpg';
import univ from './img/univ.png';

const Home = () => {
  return ( 
  <> 
  <div className="container mb-4">
    <div className="row">
      <div className="col-lg-12">
        <div className="hero-section mb-3">
          <h1 className="hero-title">
            Find your way in Kiev
          </h1>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="section-wrapper mt-3">
          <div className="row">
            <div className="col-lg-3">
              <Link className="router" to={`/rent`}>
                <div className="section-item">
                  <img src={house} alt="" className="section-image"/>
                  <h5 className="item-title text-light">
                    Rent a house
                  </h5>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link className="router" to={`/tour`}>
                <div className="section-item">
                  <img src={traveller} alt="" className="section-image"/>
                  <h5 className="item-title text-light">
                    City tour
                  </h5>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link className="router" to={`/school-registration`}>
                <div className="section-item">
                  <img src={univ} alt="" className="section-image"/>
                  <h5 className="item-title text-light">
                    School registrations
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="who-are-we mt-5 mb-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="paragraph">
                <h3 className="title-text">
                  Who are we?
                </h3>
                <hr/>
                <p className="paragraph-text mt-3 mb-3">
                  We are an institution that has experienced and experienced the difficulties of
                  foreigners in renting a home, finding a tour guide and university registration
                  in Kiev and synthesizing the need for help in this field. Our site serves for
                  this purpose. We do not go to the relationship section without communicating
                  with our customers and we get their problems. Our organization is a partnership
                  of Turkey and Ukraine. We communicate in 4 languages: Turkish, Ukrainian,
                  Russian and English.
                </p>
                <hr/>
                <h3 className="title-text">
                  Need help?
                  <Link className="router" to={`/contact`}> Get in touch</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  </>
  );
};


export default Home;