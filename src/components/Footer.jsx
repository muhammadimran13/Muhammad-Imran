import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

const quickLinks = [
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Frontend Dev", "Full Stack Apps", "REST APIs", "Database Design", "Optimization"
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", padding: "60px 5% 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 60, marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 800, marginBottom: 16 }} className="grad-text">Muhammad Imran</div>
            <p style={{ fontSize: 14, color: "var(--text3)", fontStyle: "italic", lineHeight: 1.6, maxWidth: 260, marginBottom: 24 }}>
              "Turning ideas into digital experiences."
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-link"><FiGithub /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-link"><FiLinkedin /></a>
              <a href={`mailto:${personalInfo.email}`} className="social-link"><FiMail /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>Quick Links</div>
            <ul style={{ listStyle: "none" }}>
              {quickLinks.map(l => (
                <li key={l.href} style={{ marginBottom: 12 }}>
                  <a href={l.href} style={{ fontSize: 14, color: "var(--text3)", textDecoration: "none", transition: "color 0.2s", display: "flex", alignItems: "center", gap: 6 }}
                    onMouseEnter={e => { e.currentTarget.style.color = "var(--purple3)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "var(--text3)"; }}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 20 }}>Services</div>
            <ul style={{ listStyle: "none" }}>
              {serviceLinks.map(s => (
                <li key={s} style={{ marginBottom: 12 }}>
                  <span style={{ fontSize: 14, color: "var(--text3)" }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ paddingTop: 24, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 13, color: "var(--text3)" }}>
            © 2024 <span style={{ color: "var(--purple3)" }}>Muhammad Imran</span>. All rights reserved.
          </div>
          <div style={{ fontSize: 13, color: "var(--text3)" }}>
            Built with <span style={{ color: "var(--purple3)" }}>♥</span> using MERN Stack
          </div>
        </div>
      </div>
    </footer>
  );
}
