import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

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

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close the menu if the screen is resized to desktop width
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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
        background: menuOpen ? "rgba(5,5,8,0.97)" : scrolled ? "rgba(5,5,8,0.85)" : "rgba(5,5,8,0.5)",
        borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s",
      }}
    >
      <a href="#home" onClick={() => setMenuOpen(false)} style={{ textDecoration: "none" }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 800 }} className="grad-text">MI</div>
      </a>

      {/* Desktop Nav (hidden on mobile via CSS) */}
      <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} style={{ fontSize: 13, color: "var(--text2)", textDecoration: "none", letterSpacing: "0.05em", fontWeight: 500, textTransform: "uppercase", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "var(--purple3)"}
            onMouseLeave={e => e.target.style.color = "var(--text2)"}
          >{link.label}</a>
        ))}
      </div>

      <a href="#contact" className="btn-primary hire-btn" style={{ fontSize: 13, padding: "10px 20px" }}>Hire Me</a>

      {/* Mobile hamburger / close button (shown on mobile via CSS) */}
      <button
        onClick={() => setMenuOpen(p => !p)}
        className="mobile-menu-btn"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                className="mobile-link"
              >
                {link.label}
              </motion.a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ textAlign: "center", marginTop: 8 }}>Hire Me</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
