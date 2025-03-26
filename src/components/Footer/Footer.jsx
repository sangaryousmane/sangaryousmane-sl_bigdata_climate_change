import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import FIRST from "../../Images/med1.jpg";
import EVENT1 from "../../Images/med2.jpg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">⬡</span>
            <span className="logo-text">Big Data Climate Change</span>
          </div>
          <p className="footer-description">
            Harnessing the Power of Data to Combat Climate Change
          </p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/share/1DTyfFnWHT/?mibextid=LQQJ4d"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/raisinglazarusnonprofit/profilecard/?igsh=MTJlaTd0N202ajFs"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone />
              <span>+232 88315154</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>bigdata@climatechange.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Freetown, Sierra Leone</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3>Pages</h3>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/research">Research</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a
                href="https://wa.me/+23288315154?text=Hello,%20I'm%20interested%20in%20getting%20started!"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__donate-button"
              >Predict</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Popular Posts</h3>
          <div className="popular-posts">
            <div className="post">
              <img src={EVENT1} alt="Blog post" />
              <div className="post-info">
                <h4>
                  Utilizing Big Data to Predict Climate Patterns and Mitigate
                  Risks
                </h4>
                <span className="post-date">October 27, 2024</span>
              </div>
            </div>
            <div className="post">
              <img src={FIRST} alt="Blog post" />
              <div className="post-info">
                <h4>
                  How Data Analytics is Transforming Climate Change Research
                </h4>
                <span className="post-date">October 19, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Big Data Climate Change</p>
        <div className="footer-bottom-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="/">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
