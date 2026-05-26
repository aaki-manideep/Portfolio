import React from 'react';
import '../Portfolio.css';
import SectionTag from '../shared/sectiontag';

// const Education = ({ education }) => {
//   return (
//     <section id="education" className={styles.section}>
//       <h2 className={styles.sectionTitle}>Education</h2>
//       <div className={styles.eduCard}>
//         <h3>{education.degree}</h3>
//         <div className={styles.eduInstitute}>{education.institution}</div>
//         <div>Graduated: {education.graduated}</div>
//       </div>
//     </section>
//   );
// };

export default function Education() {
  return (
    <section id="education">
      <SectionTag>Education</SectionTag>
      <h2 className="section-heading reveal">Background</h2>
      <div className="edu-card reveal">
        <div>
          <div className="edu-degree">Bachelor of Technology — Electronics &amp; Communication Engineering</div>
          <div className="edu-school">Malla Reddy Institution of Technology, Hyderabad, Telangana</div>
          <div className="edu-year">Graduated October 2020</div>
        </div>
        <div className="edu-badge">B.Tech</div>
      </div>
    </section>
  );
}