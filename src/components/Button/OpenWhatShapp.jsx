import React from "react";
import "./OpenWhatShapp.css";

function OpenWhatShapp({ text, href, onClick }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="navbar__get-started"
      onClick={onClick}
    >
      {text}
    </a>
  );
}

export default OpenWhatShapp;
