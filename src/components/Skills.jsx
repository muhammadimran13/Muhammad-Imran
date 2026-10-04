import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data/portfolioData";

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="skills" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 60 }} ref={ref}>
          <div className="section-label">// 02. expertise</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.1 }}>
            My <span className="grad-text">Skills</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--text2)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>A comprehensive overview of my technical capabilities and what I bring to every project.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {skills.map((s, i) => (
            <motion.div key={i} className="glass-card" style={{ padding: 28, position: "relative", overflow: "hidden" }}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, borderColor: "var(--border2)", boxShadow: "var(--glow)" }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{s.icon}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, marginBottom: 16 }}>{s.description}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.tags.map((t, j) => <span key={j} className="tech-tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
