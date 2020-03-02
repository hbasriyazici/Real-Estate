import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';
import contact from './contact-image.jpg';
import '../AnaSayfa/AnaSayfa.css';

const Contact = () => {
  return (
    <section className="Material-contact-section section-dark mt-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="back-arrow mt-3">
              <Link className="router" to={`/`}><h4 className="arrow"> <i className="fas fa-chevron-left"></i>  Back</h4></Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-image-side">
              <img src={contact} alt="" className="form-image"/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-header mb-5 text-center">
              <h1 className="contact section-title">Contact</h1>
            </div>
            <div className="form-wrapper">
              <form
                className="shake"
                method="post"
                id="contactForm"
                name="contact-form"
                data-toggle="validator">

                <div className="form-group label-floating">
                  <label className="control-label" htmlFor="name">Name</label>
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="name"
                    required
                    data-error="Please enter your name"></input>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group label-floating">
                  <label className="control-label" for="email">Email</label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    required
                    data-error="Please enter your Email"></input>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group label-floating">
                  <label className="control-label">Subject</label>
                  <input
                    className="form-control"
                    id="msg_subject"
                    type="text"
                    name="subject"
                    required
                    data-error="Please enter your message subject"></input>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-group label-floating">
                  <label for="message" className="control-label">Your Message</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    id="message"
                    name="message"
                    required
                    data-error="Write your message"></textarea>
                  <div className="help-block with-errors"></div>
                </div>

                <div className="form-submit mt-5 text-center">
                  <button className="btn btn-success" type="submit" id="form-submit">
                    <i className="material-icons mdi mdi-message-outline"></i>Send</button>
                  <div id="msgSubmit" className="h3 text-center hidden"></div>
                  <div className="clearfix"></div>
                </div>

                
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="adress-wrapper mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-3">
              <div className="adress-section text-center mt-5">
                <div className="find-widget mb-2">
                  <h3>Adress</h3>
                  <p>4435 Berkshire Circle Knoxville Sokak No:35 İstanbul</p>
                </div>
                <div className="find-widget mb-5 mt-5">
                  <h3>Phone</h3>
                  <p>0(537)1234567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;