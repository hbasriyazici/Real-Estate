import React from 'react';
import { Link } from 'react-router-dom';
import './School.scss';
import school from './school.jpg';

const School = () => {
  return ( 
  <>
    <div className="container mb-4 mt-3">
      <div className="row">
        <div className="col-lg-12">
          <div className="back-arrow mt-3">
            <Link className="router" to={`/`}><h4 className="arrow"> <i className="fas fa-chevron-left"></i>  Back</h4></Link>
          </div>
          <div className="page-title mb-3">
            <h1 className="title-text">
              University Registrations
            </h1>
          </div>
        </div>
        <div className="content-wrapper mt-3 mb-3">
          <div className="col-lg-6">
            <div className="page-image-wrapper">
              <img src={school} alt="kyiv" className="page-image"/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <p className="content-text">
              Due to the lack of direct communication about university enrollments, we witnessed that companies made unusual profits over students and some of them stopped communicating the next day.  We help students with registration and guidance for the low prices.
              </p>
              <p className="content-text contact-link">
                <Link className="router" to={`/contact`}>Contact us</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </>
  )
}

export default School