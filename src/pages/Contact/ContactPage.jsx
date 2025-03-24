import React from "react";
import "./ContactPage.css";
import FirstSecontion from "./Sections/FirstSecontion";
import SecondSection from "./Sections/SecondSection";
import ThirdSection from "./Sections/ThirdSection";
import FourthSection from "./Sections/FourthSection";
import ContactUs from "./ContactUs";

function ContactPage() {
  return (
    <div className="contact-page-container">
      <FirstSecontion />
      {/* 
      <SecondSection />
      <ThirdSection />
      <FourthSection /> */}

      <ContactUs />
      {/* <FourthSection /> */}
    </div>
  );
}

export default ContactPage;
