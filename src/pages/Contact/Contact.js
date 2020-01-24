import React from 'react';
import '../AnaSayfa/AnaSayfa.css';


const Contact = () => {
    return (
        <section className="Material-contact-section section-padding section-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5 text-center">
                        <h1 className="contact section-title">Contact</h1>
                    </div>
                    <div className="col-md-12">
                        <div className="form-wrapper">
                            <form className="shake" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                            
                                <div className="form-group label-floating">
                                    <label className="control-label" for="name">Name</label>
                                    <input className="form-control" id="name" type="text" name="name" required data-error="Please enter your name"></input>
                                    <div className="help-block with-errors"></div>
                                </div>
                                
                                <div className="form-group label-floating">
                                    <label className="control-label" for="email">Email</label>
                                    <input className="form-control" id="email" type="email" name="email" required data-error="Please enter your Email"></input>
                                    <div className="help-block with-errors"></div>
                                </div>
                                
                                <div className="form-group label-floating">
                                    <label className="control-label">Subject</label>
                                    <input className="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject"></input>
                                    <div className="help-block with-errors"></div>
                                </div>
                            
                                <div className="form-group label-floating">
                                    <label for="message" className="control-label">Your Message</label>
                                    <textarea className="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                        
                                <div className="form-submit mt-5 text-center">
                                    <button className="btn btn-success" type="submit" id="form-submit"><i className="material-icons mdi mdi-message-outline"></i>Send</button>
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                    <div className="clearfix"></div>
                                </div>
                            </form>
                        </div> 
                    </div>
                    <div className="col-md-12 mt-3">
                        
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
        </section>
    )
}

export default Contact;