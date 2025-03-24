import React from "react";
import "./TestimonialPage.css";
import MED1 from "../../../Images/med3.jpg";
import MED2 from "../../../Images/test.jpg";
import FIRST from "../../../Images/first.jpg";

export default function TestimonialPage() {
  const testimonials = [
    {
      name: "Donald Jackman",
      role: "",
      rating: 5,
      image: MED1,
      text: "Supporting this charity has been one of the most rewarding experiences of my life. Knowing that my contributions help provide food, education, and hope to those in need fills me with gratitude. I trust their dedication and transparency and am proud to be part of this community of kindness.",
    },
    {
      name: "Jonnett Robert",
      role: "",
      rating: 4,
      image: FIRST,
      text: "I was initially looking for ways to make a real difference in people's lives, and I found it here. This charity’s impact on local families and communities is nothing short of inspiring. Their projects are thoughtfully designed to create lasting change, and I am grateful to support their work.",
    },
    {
      name: "James Washington",
      role: "",
      rating: 5,
      image: MED2,
      text: "This charity helped my family through a tough time, providing not only essentials but also encouragement and kindness. The staff and volunteers treated us with respect and made us feel valued. I am forever thankful for the hope they gave us, and I now volunteer myself to give back.",
    },
  ];

  return (
    <div className="testimonials">
      <div className="testimonials-header">
        <h2>
          Contributors <span>Testimonials</span>
        </h2>
        <h2>
          <span>Real Stories from Those Who Found Home with Us</span>
        </h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star">
                  ★
                </span>
              ))}
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
