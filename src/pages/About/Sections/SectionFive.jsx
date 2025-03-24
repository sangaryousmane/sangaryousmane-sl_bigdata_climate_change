import React from "react";
import {
  FaArrowRight,
  FaGraduationCap,
  FaRegSquare,
} from "react-icons/fa";
import "./SectionFive.css";

export default function SectionFive() {
  return (
    <div className="atalib">
      <div className="atalib-header">
        <h1>Advanced Flood and Wildfire Forecasting</h1>
        <p>
          Developing and deploying sophisticated models to predict and mitigate 
          the impact of floods and wildfires, safeguarding communities through 
          data-driven insights and timely early warnings.
        </p>
      </div>
      <div className="atalib-grid">
        <div className="atalib-card bootcamp">
          <div className="card-content">
            <div className="card-header">
              <span>Data Integration & Analysis</span>
              <FaArrowRight className="arrow-icon" />
            </div>
            <span>
            Combining diverse environmental datasets, including weather patterns, 
            topography, and land use, to enhance the accuracy of predictive models.
            </span>
          </div>
          <FaGraduationCap className="card-icon" />
        </div>
        <div className="atalib-card portfolly">
          <div className="card-content">
            <div className="card-header">
              <span>Predictive Modeling</span>
              <FaArrowRight className="arrow-icon" />
            </div>
            <span>
            Utilizing advanced machine learning and deep learning algorithms to forecast 
            flood and wildfire risks, enabling proactive disaster preparedness and response.
            </span>
          </div>
          <div className="portfolly-icon">p</div>
        </div>
        <div className="atalib-card builds">
          <div className="card-content">
            <div className="card-header">
              <span>Transportation</span>
              <FaArrowRight className="arrow-icon" />
            </div>
            <span>
            Implementing a user-friendly web application to disseminate timely and 
            accurate early warnings, empowering communities to take immediate action.
            </span>
          </div>
          <FaRegSquare className="card-icon" />
        </div>
      </div>
    </div>
  );
}
