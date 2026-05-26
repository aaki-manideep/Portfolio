import React from "react";
import "../Portfolio.css";
import SectionTag from "../shared/sectiontag";
import { HIGHLIGHTS } from "../data/data";

export default function Highlights() {
  return (
    <section id="highlights">
      <SectionTag>Impact</SectionTag>
      <h2 className="section-heading reveal">Numbers that matter</h2>
      <div className="highlights-grid">
        {HIGHLIGHTS.map((h, i) => (
          <div key={`highlight-${i}`} className="highlight-card reveal">
            <div className="highlight-num">{h.num}</div>
            <div className="highlight-label">{h.label}</div>
            <div className="highlight-sub">{h.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}