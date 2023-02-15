import React from 'react';
import "./Contact.css";
import ContactUsForm from './ContactUsForm';
import SocialMedia from './SocialMedia';

const Contact = () => {
  return (
     <>
     <div className="container mt-5 ">
      <div className='inner-div'>
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Hey! here you get all types of books, web designing, web developer, programming & more.
            If you have own books you can publish here by the <b>Add Books</b> option & <b>Earn</b> with me.<br/>
            So, fill this form and lets get in touch and make this project big.
          </p>

          <div className="info">
            <div className="information">
              <img src="./assets/location.png" className="icon" alt="" />
              <p>New karman tola, Ara</p>
            </div>
            <div className="information">
              <img src="./assets/email.png" className="icon" alt="" />
              <p>4kkyp4nd3y@gmail.com</p>
            </div>
            <div className="information">
              <img src="./assets/phone.png" className="icon" alt="" />
              <p>+91 8935824070</p>
            </div>
          </div>
          
          <SocialMedia />

        </div>

        <ContactUsForm />
      </div>
      </div>
    </div>
     
     </>
  )
}

export default Contact
