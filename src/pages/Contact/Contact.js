import React from 'react';
import '../AnaSayfa/AnaSayfa.css';


const Contact = () => {
    return (
        <section class="Material-contact-section section-padding section-dark">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mb-5 text-center wow animated fadeInLeft" data-wow-delay=".2s">
                        <h1 class="section-title">Bize Ulaşın</h1>
                    </div>
                    <div class="col-md-6 mt-3 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                        
                        <div class="find-widget mb-2">
                        <h3>Adres</h3>
                        <p>4435 Berkshire Circle Knoxville Sokak No:35 İstanbul</p>
                        </div>
                        <div class="find-widget mb-5 mt-5">
                        <h3>Telefon</h3>
                        <p>0(537)1234567</p>
                        </div>
                    </div>
                    <div class="col-md-6 wow animated fadeInRight" data-wow-delay=".2s">
                        
                        <form class="shake" method="post" id="contactForm" name="contact-form" data-toggle="validator">
                        
                            <div class="form-group label-floating">
                                <label class="control-label" for="name">İsim</label>
                                <input class="form-control" id="name" type="text" name="name" required data-error="Please enter your name"></input>
                                <div class="help-block with-errors"></div>
                            </div>
                            
                            <div class="form-group label-floating">
                                <label class="control-label" for="email">Email</label>
                                <input class="form-control" id="email" type="email" name="email" required data-error="Please enter your Email"></input>
                                <div class="help-block with-errors"></div>
                            </div>
                            
                            <div class="form-group label-floating">
                                <label class="control-label">Konu</label>
                                <input class="form-control" id="msg_subject" type="text" name="subject" required data-error="Please enter your message subject"></input>
                                <div class="help-block with-errors"></div>
                            </div>
                        
                            <div class="form-group label-floating">
                                <label for="message" class="control-label">Mesajınız</label>
                                <textarea class="form-control" rows="3" id="message" name="message" required data-error="Write your message"></textarea>
                                <div class="help-block with-errors"></div>
                            </div>
                    
                            <div class="form-submit mt-5">
                                <button class="btn btn-success" type="submit" id="form-submit"><i class="material-icons mdi mdi-message-outline"></i>Mesajı Gönder</button>
                                <div id="msgSubmit" class="h3 text-center hidden"></div>
                                <div class="clearfix"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;