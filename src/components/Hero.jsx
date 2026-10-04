import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "120px 5% 80px" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <div className="grid-bg" />
        <div className="blob" style={{ width: 500, height: 500, background: "#7c3aed", top: -100, left: -100, animationDelay: "0s" }} />
        <div className="blob" style={{ width: 400, height: 400, background: "#2563eb", bottom: -100, right: -50, animationDelay: "-3s" }} />
        <div className="blob" style={{ width: 300, height: 300, background: "#a855f7", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDelay: "-6s" }} />
      </div>

      <div className="rg-hero" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", maxWidth: 1200, width: "100%", position: "relative", zIndex: 1 }}>
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <motion.div className="avail-badge" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ marginBottom: 28 }}>
            <span className="avail-dot" />
            Available for Freelance Work
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
            style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(40px,5vw,72px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 8 }}
          >
            Muhammad<br />
            <span className="grad-text" style={{ backgroundSize: "200%", animation: "gradShift 4s ease-in-out infinite" }}>Imran</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            style={{ fontFamily: "'DM Mono',monospace", fontSize: 18, color: "var(--purple3)", marginBottom: 20, minHeight: 28 }}
          >
            <TypeAnimation sequence={["Full Stack Developer", 2000, "MERN Stack Engineer", 2000, "React.js Developer", 2000, "Node.js Developer", 2000, "Problem Solver", 2000]}
              wrapper="span" speed={50} repeat={Infinity}
            />
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            style={{ fontSize: 16, color: "var(--text2)", lineHeight: 1.75, maxWidth: 480, marginBottom: 40 }}
          >
            I'm a passionate MERN Stack Developer focused on building scalable, responsive, and modern web applications. I enjoy solving real-world problems through clean code and continuously learning new technologies.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary">View Projects →</a>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary">View Resume</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} style={{ display: "flex", gap: 12, marginTop: 36 }}>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-link" title="GitHub"><FiGithub /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-link" title="LinkedIn"><FiLinkedin /></a>
            <a href={`mailto:${personalInfo.email}`} className="social-link" title="Email"><FiMail /></a>
          </motion.div>
        </motion.div>

        {/* Right - Profile */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative" }}>
            {/* Spinning ring */}
            <div className="hero-circle" style={{ width: 320, height: 320, borderRadius: "50%", padding: 3, position: "relative" }}>
              <div style={{ position: "absolute", inset: -2, borderRadius: "50%", background: "linear-gradient(135deg,#7c3aed,#2563eb,#a855f7,#7c3aed)", animation: "spinRing 4s linear infinite", opacity: 0.7 }} />
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "linear-gradient(135deg,#1a1030,#0d1a35)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", zIndex: 1 }}>
                <div style={{ textAlign: "center", color: "var(--text2)" }}>
                  <img src={`${import.meta.env.BASE_URL}imran.jpg`} alt="Muhammad Imran" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                  <p style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4, color: "var(--text3)" }}>Your Photo Here</p>
                </div>
              </div>
            </div>
            {/* Float badges */}
            <div className="float-icon" style={{ top: -10, right: -30, animationDelay: "0s" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#a855f7", display: "inline-block" }} />React.js
            </div>
            <div className="float-icon" style={{ bottom: 10, left: -40, animationDelay: "-1.5s" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3b82f6", display: "inline-block" }} />Node.js
            </div>
            <div className="float-icon" style={{ top: "50%", right: -60, animationDelay: "-0.7s" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", display: "inline-block" }} />MongoDB
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
