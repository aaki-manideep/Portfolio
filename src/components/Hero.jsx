import React from "react";
import "../Portfolio.css";
import { STATS, SKILLS, HIGHLIGHTS, EXPERIENCES } from "../data/data";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="hero-eyebrow">Software Engineer · Hyderabad, India</div>
      <h1 className="hero-name">
        Manideep<br /><em>Aaki</em>
      </h1>
      <p className="hero-title">
        <strong>Software Engineer</strong> — React · Node.js · GraphQL

        Building scalable web products for 500,000+ users
      </p>
      <div className="hero-stats">
        {STATS.map((s, i) => (
          <div key={`stat-${i}`} className="stat-item">
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="hero-cta">
        <a href="#experience" className="btn-primary">View my work ↓</a>
        <a href="mailto:aaki.manideep2@gmail.com" className="btn-ghost">Get in touch</a>
        {/* <a href={resume} target="_blank" rel="noreferrer" className="btn-ghost">Resume</a> */}
      </div>
      <div className="hero-scroll">
        <span className="scroll-line" />
        Scroll
      </div>
    </section>
  );
}