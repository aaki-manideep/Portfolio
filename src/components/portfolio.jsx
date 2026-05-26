// src/Portfolio.jsx
import React from 'react';
import styles from '/src/components/portfolio.module.css';
import { resumeData } from '/src/data/data';

const Portfolio = () => {
  const { name, role, tagline, contact, summary, skills, experience, education } = resumeData;

  return (
    <div className={styles.wrapper}>
      {/* GLOBAL HEADER NAVIGATION */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>{name.split(' ')[0]}<span>.</span></div>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
        </div>
      </nav>

      {/* HERO HERO COMPONENT */}
      <header className={styles.hero}>
        <div className={styles.welcome}>Hi, my name is</div>
        <h1>{name}.</h1>
        <h2>I build scalable web solutions.</h2>
        <p className={styles.tagline}>{tagline}</p>
        <div className={styles.ctaGroup}>
          <a href={`mailto:${contact.email}`} className={styles.primaryBtn}>Get In Touch</a>
          <a href="#experience" className={styles.secondaryBtn}>View My Work</a>
        </div>
      </header>

      <div className={styles.container}>
        {/* ABOUT ME SECTION */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              {summary.map((para, i) => <p key={i}>{para}</p>)}
            </div>
            <div className={styles.quickDetails}>
              <div className={styles.detailRow}><strong>Location:</strong> {contact.location}</div>
              <div className={styles.detailRow}><strong>Email:</strong> {contact.email}</div>
              <div className={styles.detailRow}><strong>Phone:</strong> {contact.phone}</div>
            </div>
          </div>
        </section>

        {/* SKILLS CARDS GRID */}
        <section id="skills" className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <h3>{skill.category}</h3>
                <div className={styles.tagContainer}>
                  {skill.items.map((item, idx) => (
                    <span key={idx} className={styles.tag}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROFESSIONAL WORK EXPERIENCE TIMELINE */}
        <section id="experience" className={styles.section}>
          <h2 className={styles.sectionTitle}>Where I've Worked</h2>
          <div className={styles.timeline}>
            {experience.map((job, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timeHeader}>
                  <div className={styles.roleTitle}>{job.role}</div>
                  <span className={styles.tag}>{job.timeline}</span>
                </div>
                <div className={styles.companyLabel}>{job.company}</div>
                <div className={styles.metaInfo}>
                  Client: {job.client} {job.project && `| Project: ${job.project}`} {job.domain && `| Domain: ${job.domain}`}
                </div>
                <ul className={styles.bullets}>
                  {job.highlights.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ACADEMIC HISTORY SECTION */}
        <section id="education" className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.eduCard}>
            <h3>{education.degree}</h3>
            <div className={styles.eduInstitute}>{education.institution}</div>
            <div>Graduated: {education.graduated}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;