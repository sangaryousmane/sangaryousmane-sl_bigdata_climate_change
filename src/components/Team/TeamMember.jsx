import React from "react";
import IMG1 from "../../Images/team2.jpg";
import IMG2 from "../../Images/img2.jpg";
import IMG3 from "../../Images/img3.jpg";
import IMG4 from "../../Images/img4.jpg";
import IMG5 from "../../Images/img5.jpg";
import MO from "../../Images/mo.jpg";
import MO1 from "../../Images/mo1.jpg";
import MO2 from "../../Images/team1.jpg";
import "./TeamMember.css";

export default function TeamMember() {
  const teamMembers = [
    {
      name: "Michael G. Siaway",
      phone: "+1 (484) 751-8401",
      role: "Founder and Executive Director, USA",
      image: IMG1,
    },
    {
      name: "Ranjit Khetriya Kumar",
      role: "Executive Director, India",
      image: IMG2,
    },

    {
      name: "Bob Nguyen",
      role: "Volunteer",
      image: IMG4,
    },
    {
      name: "Crystal Taylor Siaway",
      role: "Advisor to the board, USA",
      image: IMG5,
    },
    {
      name: "Daniel Torla",
      role: "Volunteer",
      image: IMG3,
    },
    {
      name: "Amos M . Karter",
      role: "Member of the team",
      image: MO,
    },
    {
      name: "Abraham Y. Siaway",
      role: "Member of the team",
      image: MO1,
    },
    {
      name: "Kebbeh Tokpa",
      role: "Member of the team",
      image: MO2,
    },
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <span className="subtitle">Expert Team</span>
          <h2>Meet Our Volunteer Team</h2>
          <p>
            Our success at Raising Lazarus is a result of the dedication and
            expeertise of our highly skilled team. We believe in the power of
            collaboration, and pur team comprises individuals with diverse
            backgrounds and talents, united by a shared commitment to excellence
            and customer satisfaction.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <span className="member-role">{member.role}</span>
                <h4>{member.phone}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
