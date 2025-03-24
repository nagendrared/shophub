import React, { useState } from 'react';
import './ContactPage.css';  // Importing the CSS file

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    alert('Your message has been sent!');
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <p>If you have any questions, feel free to send us a message below:</p>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Enter your name" 
              required 
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
            />
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Write your message" 
              required 
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
