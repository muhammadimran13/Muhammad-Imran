import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { achievements } from "../data/portfolioData";

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="achievements" style={{ padding: "100px 5%", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-label">// 09. achievements</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Core <span className="grad-text">Strengths</span>
          </h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {achievements.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "var(--glow)", borderColor: "var(--border2)" }}
              style={{ background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 16, padding: 28, textAlign: "center", cursor: "pointer", transition: "all 0.3s" }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{a.icon}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{a.title}</div>
              <div style={{ fontSize: 12, color: "var(--text3)", lineHeight: 1.6 }}>{a.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
