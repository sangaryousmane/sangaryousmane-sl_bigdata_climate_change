import React from "react";
import { ArrowRight } from "lucide-react";
import FIRST from "../../Images/first.jpg";
import women from "../../Images/women.jpg";
import "./Services.css";
import FirstPage from "./FirstPage";

export default function Services() {
  const brandingServices = [
    "Flood Prediction using Historical Climate Data",
    "Wildfire Risk Assessment through Weather Patterns",
    "Real-Time Monitoring of Flood and Wildfire Occurrences",
    "Community Resilience through Early Warning Systems",
  ];

  const uxServices = [
    "Inovation",
    "Commitment",
    "Respect",
    "Integrity",
    "Excellence",
    "Team work",
  ];

  return (
    <>
      <FirstPage />
      <div className="services">
        {/* Branding Section */}
        <section className="service-section">
          <h1 className="service-title">Vision</h1>
          <h2 className="service-subtitle">
          To create a proactive and data-driven approach to disaster prediction, empowering communities to mitigate risks and respond effectively to floods and wildfires. Envision a future where advanced technology and big data analysis provide accurate, real-time predictions, enabling safer and more resilient communities.
          </h2>

          <div className="service-content">
            <div className="service-image-container">
              <img src={women} alt="Moscone Center" className="service-image" />
              {/* <div className="image-caption">Moscone Center</div> */}
            </div>

            <div className="service-description">
              <p>
                Develop and deploy advanced machine learning models to predict flood and wildfire occurrences with high accuracy.
                {/* , fostering their
                participation in the technology landscape */}
              </p>
              <p>
                 Provide real-time monitoring systems and early warning tools to help communities prepare and respond to disasters.
              </p>
              <br />
              <ul className="service-list">
                {brandingServices.map((service, index) => (
                  <li key={index}>
                    <ArrowRight className="arrow-icon" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* UX Section */}
        <section className="service-section">
          <h1 className="service-title">Progams</h1>
          <h2 className="service-subtitle"></h2>

          <div className="service-content reverse">
            <div className="service-description">
              <h3>Agriculture</h3>
              <p>
                To create sustainable and inclusive agricultural sector where
                women and girls play a central role, envision a future where
                women and girls have equal access to resources.
              </p>
              <h3>Computer Literacy</h3>
              <p>
                To build a digital inclusive world or comminuties where women
                and girls are proficient in technology.
              </p>
              <br />
              <ul className="service-list">
                {uxServices.map((service, index) => (
                  <li key={index}>
                    <ArrowRight className="arrow-icon" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-image-container">
              <img
                src={FIRST}
                alt="Alameda County Community Food Bank"
                className="service-image"
              />
            </div>
          </div>
        </section>
        {/* <Statement /> */}
      </div>
    </>
  );
}
