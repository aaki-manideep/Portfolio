import React from "react";
import "../Portfolio.css";
import SectionTag from "../shared/sectiontag";
import { useState, useRef } from "react";
import { EXPERIENCES } from "../data/data";

export default function ExperienceCard({ exp, cardIndex }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);

  const toggle = () => setOpen((o) => !o);

  function getDuration(startDate) {
    const start = new Date(startDate);
    const now = new Date();

    const totalMonths =
      (now.getFullYear() - start.getFullYear()) * 12 +
      (now.getMonth() - start.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) return `${months} mos`;
    if (months === 0) return `${years} yr${years > 1 ? "s" : ""}`;
    return `${years} yr${years > 1 ? "s" : ""} ${months} mos`;
  }

  return (
    <div className="reveal exp-card-wrapper">
      <div className={`exp-card${open ? " exp-card--open" : ""}`}>

        {/* ── HEADER — always visible ── */}
        <button className="exp-card-header" onClick={toggle} aria-expanded={open}>

        <div className="exp-card-meta">
          <span className="exp-card-period">{exp.period}<br />{getDuration(exp.time)}</span>
          <span className="exp-card-company">{exp.company}</span>
        </div>

        <div className="exp-card-summary">
          <div className="exp-card-role">{exp.role}</div>
          <div className="exp-card-project">
              {exp.project}
              <span className="exp-card-client"> · {exp.client}</span>
          </div>
          {/* preview: first 3 stack tags */}
          <div className="exp-card-stack-preview">
              {exp.stack.slice(0, 3).map((s, si) => (
                <span key={`preview-${cardIndex}-${si}`} className="exp-stack-tag">{s}</span>
            ))}
            {exp.stack.length > 3 && (
              <span className="exp-stack-more">+{exp.stack.length - 3} more</span>
            )}
          </div>
        </div>

          <span className="exp-card-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>

      </button>

        {/* ── BODY — inline style drives the open/close ── */}
        <div
          ref={bodyRef}
          className="exp-card-body"
          style={{
            maxHeight: open ? `${bodyRef.current?.scrollHeight || 1000}px` : "0px",
            overflow: "hidden",
            transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
        <div className="exp-card-divider" />
        <ul className="exp-bullets">
          {exp.bullets.map((b, i) => (
              <li key={`bullet-${cardIndex}-${i}`}>{b}</li>
          ))}
        </ul>
        <div className="exp-stack exp-stack--full">
            {exp.stack.map((s, si) => (
              <span key={`stack-${cardIndex}-${si}`}>{s}</span>
            ))}
        </div>
        </div>

      </div>
    </div>
  );
}