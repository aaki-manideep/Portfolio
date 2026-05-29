import { useState, useEffect, useRef } from "react";
import resume from "/src/assets/resume.pdf";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Highlights from "./components/Highlights";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./Portfolio.css";

/* ── HOOKS ── */
function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const move = (e) => { pos.current.mx = e.clientX; pos.current.my = e.clientY; };
    window.addEventListener("mousemove", move);
    let raf;
    const tick = () => {
      const p = pos.current;
      if (dotRef.current) dotRef.current.style.transform = `translate(${p.mx - 5}px,${p.my - 5}px)`;
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      if (ringRef.current) ringRef.current.style.transform = `translate(${p.rx - 18}px,${p.ry - 18}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

function MAWatermark() {
  return (
    <div className="ma-watermark" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, i) => (
        <span key={`wm-${i}`} className="ma-watermark-letter">MA</span>
      ))}
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`back-to-top${visible ? " visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}


export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <MAWatermark />
      <Cursor />
      <Navbar scrolled={scrolled} />

      <Hero />
      <hr className="full-divider" />
      <About />
      <hr className="full-divider" />
      <Skills />
      <hr className="full-divider" />
      <Highlights />
      <hr className="full-divider" />
      <Experience />
      <hr className="full-divider" />
      <Education />
      <hr className="full-divider" />
      <Contact />
      <BackToTop />

      <footer className="footer">
        <span>2026 Manideep Aaki</span>
        <span>Software Engineer · Hyderabad, India</span>
      </footer>
    </>
  );
}
 