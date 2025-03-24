import React from "react";
import { Apple, Droplets, GraduationCap } from "lucide-react";
import FIRST from "../../../Images/ee.jpg";

import "./CharityPage.css";

export default function CharityPage() {
  return (
    <main className="container">
      {/* About Section */}
      <section className="about-section">
        <div className="image-container">
          <img
            src={FIRST}
            alt="Happy child playing with autumn leaves"
            className="about-image"
          />
          <div className="total-raised">
            <div className="raised-icon">$</div>
            <div>
              <p>Total Raised</p>
              <p className="raised-amount">$25000</p>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="about-label">About Us</span>
          <h2>We Can Save More Lives With Your Helping Hand.</h2>
          <p>
            We empower women and young girls live above all obstacles in the
            communities they live
          </p>
          <ul className="feature-list">
            {[
              "Education/vocational school",
              "Agriculture",
              "Transportation",
              "Feeding and providing healthy environment",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button className="more-about-btn">
            <a href="/about">About us</a>
          </button>
        </div>
      </section>
    </main>
  );
}
