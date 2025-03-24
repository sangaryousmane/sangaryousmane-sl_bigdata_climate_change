import React from "react";
import volunteerPicture from "../../../Images/volunteer.png";
import "./Volunter.css";
import OpenWhatShapp from "../../../components/Button/OpenWhatShapp";

function Volunter() {
  return (
    <div className="home-seventh-section">
      <div className="seventh-container">
        <div className="tablet-sevent-item">
          <div className="seventh-first-item">
            <h1>Lets Change The World of Climate Change with Big Data</h1>
          </div>
          <div className="seventh-second-item">
            {/* <button>Become A Volunteer</button> */}

            <OpenWhatShapp
              href="https://wa.me/1234567890?text=Hello,%20I'm%20interested%20in%20getting%20started!"
              text="Become A Volunteer"
            />
          </div>
        </div>
        <div className="seventh-third-item">
          <img
            src={volunteerPicture}
            alt="volunteer picture"
            id="volunteer-pic"
          />
        </div>
      </div>
    </div>
  );
}

export default Volunter;
