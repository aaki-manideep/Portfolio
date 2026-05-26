import React from "react";
import "../Portfolio.css";
import resume from "/src/assets/resume.pdf";

export default function Navbar({ scrolled }) {
  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <a href="#hero" className="nav-logo">MA<span>.</span></a>
      <ul className="nav-links">
        {["about", "skills", "experience", "contact"].map((s) => (
          <li key={s}><a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a></li>
        ))}
      <li>
        <a 
          href={resume}
          target="_blank"
          rel="noreferrer"
          // download="Manideep_Aaki_Resume.pdf"
          className="nav-resume-btn"
        >
          Resume
        </a>
      </li>
      </ul>
      
    </nav>
  );
}