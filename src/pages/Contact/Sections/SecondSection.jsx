import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import "./SecondSection.css";

function SecondSection() {
  return (
    <div className="contact-second-section">
      <div className="second-container-contact">
        <div className="contact-second-column-container">
          <div className="address-div">
            <div className="svg-box-container-contact">
              <FaMapMarkerAlt />
            </div>
            <h3>Address</h3>
            <h4>Cook-Spoon Hill Community, Monrovia-Liberia</h4>
          </div>

          <div className="email-div">
            <div className="svg-box-container-contact">
              <MdEmail />
            </div>
            <h3>Email Us</h3>
            <h4>raisinglazarusnonprofit@gmail.com</h4>
          </div>

          <div className="call-div">
            <div className="svg-box-container-contact">
              <BsFillTelephoneFill />
            </div>
            <h3>Call Now</h3>
            <h4>0772758423</h4>
            <h4>0886399387</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
