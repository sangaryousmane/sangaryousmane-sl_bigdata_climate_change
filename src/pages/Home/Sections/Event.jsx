import React from "react";
import FIRST from "../../../Images/med.jpg";
import EVENT1 from "../../../Images/med1.jpg";
import EVENT2 from "../../../Images/women.jpg";
import "./Event.css";
import FLOOD1 from "../../../Images/flood1.jpg";
import FLOOD2 from "../../../Images/flood2.jpg";
import FLOOD3 from "../../../Images/myh.png";


export default function Event() {
  const events = [
    {
      date: "25 Nov, 2023",
      image: FLOOD1,
      title: "Data Acquisition & Analysis",
      description:
        "To gather and analyze comprehensive environmental data, including weather patterns and topographical information, for accurate flood and wildfire risk assessments.",
    },
    {
      date: "24 Jan, 2024",
      image: FLOOD2,
      title: "Predictive Model Development",
      description:
        "To develop and refine sophisticated deep learning models, capable of forecasting natural disasters, thereby enabling proactive mitigation strategies.",
    },
    {
      date: "27 Oct, 2024",
      image: FLOOD3,
      title: "Early Warning System Deployment",
      description:
        "To implement and deploy a user-friendly early warning system, delivering timely alerts to vulnerable communities, facilitating rapid and effective response.",
    },
  ];

  return (
    <section className="events-section">
      <div className="events-container">
        <div className="events-header">
          <span className="subtitle">Predictions</span>
          <h2>Upcoming Disaster Forecasts</h2>
          <p>
            Providing timely and accurate forecasts to prepare communities for 
            potential flood and wildfire events.
          </p>
        </div>
  
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-content">
                <span className="event-date">{event.date}</span>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}
