import React from "react";
import "./FourthSection.css";

function FourthSection() {
  return (
    <div className="about-fifth-section">
      <div className="about-fifth-container">
        <div className="about-fifthSection-first-item">
          <h3>3+</h3>
          <p>Expert Volunteer</p>
        </div>
        {/* <div className="about-fifthSection-second-item">
          <h3>1026+</h3>
          <p>Happy Families</p>
        </div> */}
        <div className="about-fifthSection-third-item">
          <h3>30+</h3>
          <p>Expected contribution</p>
        </div>
        <div className="about-fifthSection-fourth-item">
          <h3>Campaign to kickoff soon!</h3>
          <p>Successful Campains</p>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
