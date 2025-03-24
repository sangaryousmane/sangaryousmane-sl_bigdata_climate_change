import React from "react";
import "./ThirdSection.css";

const ThirdSection = () => {
  return (
    <div className="contact-third-section">
      <div className="contact-third-container">
        <div className="contact-third-upper-container">
          <h2>Have Any Questions?</h2>
          <h4>
            We’re here to help make a difference together! Whether you have
            questions about our projects get int touch with us
          </h4>
        </div>
        <div className="contact-third-lower-container">
          <div className="form-container">
            <form action="#" method="#">
              <input
                type="text"
                name="Name"
                id="name-field"
                placeholder="Name"
              />
              <input
                type="text"
                name="Lastname"
                id="surname-field"
                placeholder="Lastname"
              />
              <input
                type="email"
                name="Email"
                id="email-field"
                placeholder="Email"
              />
              <select name="subject" id="select-field">
                <option value="Subject ">Subject</option>
                <option value="Subject 1 ">Donation</option>
                <option value="Subject 2">Get in touch</option>
                <option value="Subject 3">Become partener</option>
                <option value="Subject 4">Other</option>
              </select>
              <textarea placeholder="Message" />
              <button type="submit" id="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
