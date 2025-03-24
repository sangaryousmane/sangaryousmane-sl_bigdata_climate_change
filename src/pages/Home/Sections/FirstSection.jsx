import React from "react";
import { FaWallet } from "react-icons/fa";
import FIRST from "../../../Images/t1.jpg";
import "./FirstSection.css";
import IMG2 from '../../../Images/home_image.jpg';
import OpenWhatShapp from "../../../components/Button/OpenWhatShapp";
import ADAM from '../../../Images/mr_mansaray.png';

export default function FirstSection() {
  return (
    <section className="first-section">
      <div className="content-container">
        <div className="left-content">
        <h1>Big Data Analysis For Improving Climate Change Outcomes In Sierra Leone from 2024-2030</h1> 
        <p> We leverage cutting-edge big data analysis and machine learning to predict floods and wildfires with precision. 
          Our platform provides actionable insights, real-time monitoring, and early warning systems to help communities prepare and respond effectively. </p>
          <br />
          <OpenWhatShapp
            href="/predict"
            text="Predict Now"
          />
        </div>

        <div className="right-content">
          <div className="main-image-container">
            <img
              src={ADAM}
              alt="Child with backpack smiling"
              className="main-image"
            />
          </div>

          <div className="stats-card">
            <div className="stats-icon">
              <FaWallet />
            </div>
            <div className="stats-text">
              <span className="stats-number">Protect the future</span>
              <span className="stats-label">for the future</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
