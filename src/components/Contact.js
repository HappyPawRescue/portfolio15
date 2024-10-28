
import React from 'react';
import './Contact.css';



const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>
        
        <p>Phone: 09127768077</p>

       

          <a href="https://github.com/HappyPawRescue" target="_blank" rel="noreferrer">
      <img src="25.png" alt="GitHub" />
    </a>

    <a href="https://www.facebook.com/nin.palconit.3/" target="_blank" rel="noreferrer">
            <img src="24.png" alt="Facebook" />
          </a>
        <p>&copy; {new Date().getFullYear()} Janine Sarcia. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;

