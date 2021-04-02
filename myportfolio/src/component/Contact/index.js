import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <div>
      <div className="contact">
      <h1>Contact me!</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11205.506441721562!2d-75.6746598660279!3d45.40174463176831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce058dc231d1d5%3A0x3dfd1915488e9b06!2sFrobisher%20Ln%2C%20Ottawa%2C%20ON!5e0!3m2!1sen!2sca!4v1614662504731!5m2!1sen!2sca" 
      width="600" 
      height="450" 
      allowfullscreen="" 
      loading="lazy">
      </iframe>

      <h4>Phone Number:</h4>
      <p><b>343-999-2611</b></p><br/>

      <h4>Email:</h4>
      <p><b>nsharnadh18@gmail.com</b></p><br/>

      <h4>Address:</h4>
      <p><b>Frobisher Lane, Ottawa, Ontario</b></p>
    </div>
            
        </div>
    );
}

export default Contact;
