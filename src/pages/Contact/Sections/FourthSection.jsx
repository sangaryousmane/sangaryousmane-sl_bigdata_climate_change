import React from "react";
import "./FourthSection.css";

function FourthSection() {
  return (
    <div className="contact-fourth-section">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/place/Monrovia,+Liberia/@6.2954454,-10.8520799,12z/data=!3m1!4b1!4m6!3m5!1s0xf09f803d4a9fcc1:0x5b6c4dd7069694af!8m2!3d6.3156068!4d-10.8073698!16zL20vMDFweHF4?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
          allowFullScreen={""}
          loading={"lazy"}
          referrerPolicy={"no-referrer-when-downgrade"}
        />
      </div>
    </div>
  );
}

export default FourthSection;
