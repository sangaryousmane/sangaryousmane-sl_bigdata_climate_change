import React from "react";

import "./About.css";
import FirstSection from './Sections/FirstSection'
import CharityPage from "../Home/Sections/CharityPage";
import FourthSection from "./Sections/FourthSection";
import Event from "../Home/Sections/Event";
import TeamMember from "../../components/Team/TeamMember";
import SectionFive from "./Sections/SectionFive";

function About() {
  return (
    <div className="about-container">
      <FirstSection />
      {/* <ThirdSection /> */}
      <SectionFive />
      {/* <TeamMember /> */}
      {/* <CharityPage /> */}
      <Event />
      <FourthSection />
    </div>
  );
}

export default About;
