import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="projects" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-label">// 04. projects</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Featured <span className="grad-text">Work</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--text2)", maxWidth: 560, margin: "16px auto 0", lineHeight: 1.7 }}>Real-world applications built with the MERN stack and modern web technologies.</p>
        </motion.div>

        <div className="rg-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: "var(--glow)" }}
              style={{ background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden", transition: "all 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border2)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
            >
              {/* Image placeholder */}
              <div style={{ height: 200, background: "linear-gradient(135deg,#1a0d2e,#0d1a35)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center,rgba(124,58,237,0.15) 0%,transparent 70%)" }} />
                <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                  <span style={{ fontSize: 48, display: "block", marginBottom: 8 }}>{p.emoji}</span>
                  <span style={{ fontSize: 11, color: "var(--text3)", letterSpacing: "0.1em", fontFamily: "'DM Mono',monospace" }}>{p.label}</span>
                </div>
              </div>

              <div style={{ padding: 24 }}>
                <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 19, fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, marginBottom: 16 }}>{p.description}</p>
                <ul style={{ listStyle: "none", marginBottom: 16 }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{ fontSize: 12, color: "var(--text3)", padding: "2px 0", display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ color: "var(--purple2)", fontSize: 10 }}>→</span>{f}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                  {p.tags.map((t, j) => <span key={j} className="tech-tag">{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <a href={p.github} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 18px", borderRadius: 7, fontSize: 12, fontWeight: 600, background: "var(--glass2)", border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none", transition: "all 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-1px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                  ><FiGithub /> GitHub</a>
                  <a href={p.live} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, padding: "9px 18px", borderRadius: 7, fontSize: 12, fontWeight: 600, background: "linear-gradient(135deg,#7c3aed,#2563eb)", border: "none", color: "#fff", textDecoration: "none", transition: "all 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-1px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                  ><FiExternalLink /> Live Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
