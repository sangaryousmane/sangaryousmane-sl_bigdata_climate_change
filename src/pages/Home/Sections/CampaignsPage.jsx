import React from "react";
import FIRST from "../../../Images/t3.jpg";
import FloodPredict from "../../../Images/t2.jpg";
import WildfirePredict from "../../../Images/t4.jpg";
import EarlyWarning from "../../../Images/fee1.jpg";
import auth from "../../../Images/img1.jpg";
import OpenWhatShapp from "../../../components/Button/OpenWhatShapp";
import SOLARIMG from "../../../Images/solar.png";
import "./CampaignsPage.css";
import MANGROVE from "../../../Images/mangrove.png";
export default function CampaignsPage() {
  const campaigns = [
    {
      category: "Flood Prediction",
      image: FloodPredict,
      title:
        "Develop advanced models to accurately predict flood events, enabling timely evacuations and resource allocation to mitigate damage.",
    },
    {
      category: "Wildfire Prediction",
      image: FIRST,
      title:
        "Implement predictive analytics to identify wildfire risks early, facilitating rapid response and minimizing the impact on communities and ecosystems.",
    },
    {
      category: "Early Warning Systems",
      image: MANGROVE,
      title:
        "Establish robust early warning systems that deliver actionable alerts, empowering communities to prepare for and respond to impending natural disasters.",
      
    },
    {
      category: "Data Infrastructure",
      image: SOLARIMG,
      title:
        "Enhance data collection and infrastructure to improve the accuracy and reliability of climate and disaster prediction models for Sierra Leone.",
      
    },
  ];

  return (
    <div className="campaigns">
      <div className="campaigns-header">
        <span className="subtitle">Enhancing Disaster Resilience</span>
        <h2>Our Predictive Initiatives</h2>
        <p>
          Support our efforts to develop and deploy cutting-edge prediction systems for floods and wildfires. 
          Your contributions enable us to gather critical data, refine our models, and deliver timely warnings 
          that save lives and protect vulnerable communities from the devastating impacts of natural disasters.
        </p>
      </div>

      <div className="campaigns-grid">
        {campaigns.map((campaign, index) => (
          <div key={index} className="campaign-card">
            <div className="campaign-image">
              <img src={campaign.image} alt={campaign.title} />
              <span className="category-tag">{campaign.category}</span>
            </div>

            <div className="campaign-content">
              <h3>{campaign.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}