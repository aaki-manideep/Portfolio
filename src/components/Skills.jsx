import React from 'react';
import '../Portfolio.css';
import { SKILLS } from '../data/data';
import SectionTag from '../shared/sectiontag';

export default function Skills() {
  return (
    <section id="skills">
      <SectionTag>Skills</SectionTag>
      <h2 className="section-heading reveal">Tools &amp; technologies</h2>
      <div className="skills-grid">
        {SKILLS.map((group, gi) => (
          <div key={group.title} className="skill-group reveal">
            <div className="skill-group-title">{group.title}</div>
            <hr className="skill-divider" />
            <div className="skill-tags">
              {group.items.map((item, ii) => (
                <span
                  key={`skill-${gi}-${ii}`}
                  className={`skill-tag${item.primary ? " primary" : ""}`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}