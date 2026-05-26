import React from 'react';
import '../Portfolio.css';
import SectionTag from '../shared/sectiontag';

export default function About() {
  return (
    <section id="about">
      <SectionTag>About</SectionTag>
      <h2 className="section-heading reveal">Crafting interfaces<br />that scale and perform</h2>
      <div className="about-grid">
        <div className="about-body reveal">
          <p>
            I'm a <strong>Software Engineer</strong> with 5+ years of experience building
            high-performance, scalable web applications — from large-scale community platforms serving
            half a million users to enterprise multilingual content systems used by global organisations.
          </p>
          <p>
            My core work lives at the intersection of <strong>React.js, Node.js, and GraphQL</strong>.
            I've led platform modernisation initiatives, migrating legacy FreeMarker-based systems to
            modern React architectures — achieving measurable performance gains and dramatically improved
            developer velocity.
          </p>
          <p>
            I thrive in agile environments, working closely with product managers, designers, and backend
            engineers to ship features that are both technically sound and meaningfully user-facing.
          </p>
        </div>
        <div className="about-aside reveal">
          <ul className="detail-list">
            {[
              {
                key: "Location",
                val: "Hyderabad, India",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                ),
              },
              {
                key: "Current role",
                val: "Software Engineer @ ITD Tech",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                    <line x1="12" y1="12" x2="12" y2="12.01"/>
                    <path d="M2 12s4 4 10 4 10-4 10-4"/>
                  </svg>
                ),
              },
              {
                key: "Client",
                val: "Microsoft, USA",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
              },
              {
                key: "Availability",
                val: "Open to opportunities",
                accent: true,
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
              },
              {
                key: "Email",
                val: <a href="mailto:aaki.manideep2@gmail.com">aaki.manideep2@gmail.com</a>,
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <polyline points="2,4 12,13 22,4"/>
                  </svg>
                ),
              },
              // {
              //   key: "Phone",
              //   val: "+91 XXXXXXXXXX",
              //   icon: (
              //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              //       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
              //     </svg>
              //   ),
              // },
            ].map(({ key, val, accent, icon }) => (
              <li key={key} className="detail-item">
                <span className="detail-key">
                  <span className="detail-icon">{icon}</span>
                  {key}
                </span>
                <span className={`detail-val${accent ? " accent" : ""}`}>{val}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}