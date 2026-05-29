import React from "react";
import "../Portfolio.css";
import { STATS } from "../data/data";

function HeroVisual() {
  const nodes = [
    { label: "React",      emoji: "⚛️",  offset: "0deg"   },
    { label: "Node.js",    emoji: "🟢",  offset: "45deg"  },
    { label: "GraphQL",    emoji: "◈",   offset: "90deg"  },
    { label: "JavaScript", emoji: "JS",  offset: "135deg" },
    { label: "Git",        emoji: "⑂",   offset: "180deg" },
    { label: "Azure",      emoji: "☁️",  offset: "225deg" },
    { label: "CSS3",       emoji: "#",   offset: "270deg" },
    { label: "Angular",    emoji: "⬡",   offset: "315deg" },
  ];

  return (
    <div className="hero-visual">
      <div className="orbit-glow" />
      <div className="orbit-track" />
      <div className="orbit-ring" />

      {/* Photo circle */}
      <div className="photo-circle">
        <span className="photo-placeholder">MA</span>
      </div>

      {/* Status badge */}
      <div className="status-badge">
        <span className="pulse-dot" />
        Open to work
      </div>

      {/* Each wrapper rotates independently, keeping its offset */}
      {nodes.map(({ label, emoji, offset }) => (
        <div
          key={label}
          className="orbit-wrapper"
          style={{ "--offset": offset }}
        >
          <div className="skill-node" data-label={label}>
            <div className="skill-node-inner">{emoji}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
 return (
    <section id="hero" className="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />

      {/* ── LEFT: text content ── */}
      <div className="hero-left-content">
        <div className="hero-eyebrow">Frontend Engineer · Hyderabad, India</div>
        <h1 className="hero-name">
          Manideep<br /><em>Aaki</em>
        </h1>
        <p className="hero-title">
          <strong>Senior Frontend Engineer</strong> — React · Node.js · GraphQL<br />
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
        </div>
      </div>

      {/* ── RIGHT: orbital visual ── */}
      <HeroVisual />

      <div className="hero-scroll">
        <span className="scroll-line" />
        Scroll
      </div>
    </section>
  );
}