import React from 'react';
import '../Portfolio.css';
import SectionTag from '../shared/sectiontag';
import ExperienceCard from './ExperienceCard';
import { EXPERIENCES } from '../data/data';

export default function Experience() {
  return (
    <section id="experience">
      <SectionTag>Experience</SectionTag>
      <h2 className="section-heading reveal">Where I've worked</h2>
      <div className="exp-cards">
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard key={`exp-${i}`} exp={exp} cardIndex={i} />
        ))}
      </div>
    </section>
  );
}