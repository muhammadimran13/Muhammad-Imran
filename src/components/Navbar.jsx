import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed", top: 0, width: "100%", zIndex: 500,
        padding: "16px 5%", display: "flex", alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(20px)",
        background: scrolled ? "rgba(5,5,8,0.85)" : "rgba(5,5,8,0.5)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s",
      }}
    >
      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800 }} className="grad-text">MI</div>

      {/* Desktop Nav */}
      <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} style={{ fontSize: 13, color: "var(--text2)", textDecoration: "none", letterSpacing: "0.05em", fontWeight: 500, textTransform: "uppercase", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "var(--purple3)"}
            onMouseLeave={e => e.target.style.color = "var(--text2)"}
          >{link.label}</a>
        ))}
      </div>

      <a href="#contact" className="btn-primary" style={{ fontSize: 13, padding: "10px 20px" }}>Hire Me</a>

      {/* Mobile menu button */}
      <button onClick={() => setMenuOpen(p => !p)} style={{ display: "none", background: "none", border: "none", color: "var(--text)", fontSize: 24, cursor: "pointer" }} className="mobile-menu-btn">
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "var(--bg2)", borderBottom: "1px solid var(--border)", padding: "20px 5%", display: "flex", flexDirection: "column", gap: 16 }}
          >
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ fontSize: 15, color: "var(--text2)", textDecoration: "none", fontWeight: 500 }}>{link.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
