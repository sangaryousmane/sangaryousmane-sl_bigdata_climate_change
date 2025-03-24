import React from "react";
import "./TestingSection.css";

const TestingSection = () => {
  return (
    <section className="first-section">
      <div className="background-image">
        <div className="overlay"></div>
      </div>
      <div className="content">
        <h1 className="title">
          What we're doing to help our
          <span className="title-span">Community.</span>
        </h1>
        <p className="subtitle">
          Help us grow and reach more Single Parents in need.
        </p>
        <a href="#help" className="cta-button">
          Help a Single Parent
        </a>
      </div>
    </section>
  );
};

export default TestingSection;
