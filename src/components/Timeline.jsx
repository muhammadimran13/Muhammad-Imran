import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { timeline } from "../data/portfolioData";

export default function Timeline() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="experience" style={{ padding: "100px 5%", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-label">// 05. journey</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            My <span className="grad-text">Timeline</span>
          </h2>
        </motion.div>

        <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
          {/* Vertical line */}
          <div className="timeline-line" style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 1 }} />

          {timeline.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{ display: "flex", gap: 32, marginBottom: 48, position: "relative" }}
            >
              <div style={{ position: "relative", flexShrink: 0, width: 40, display: "flex", justifyContent: "center" }}>
                <motion.div whileHover={{ scale: 1.3 }} style={{ width: 14, height: 14, borderRadius: "50%", background: "linear-gradient(135deg,#7c3aed,#3b82f6)", marginTop: 4, position: "relative", zIndex: 1, boxShadow: "0 0 16px rgba(124,58,237,0.5)" }} />
              </div>
              <motion.div whileHover={{ borderColor: "var(--border2)", x: 4 }}
                style={{ background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 12, padding: "20px 24px", flex: 1, transition: "all 0.3s" }}
              >
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "var(--purple3)", letterSpacing: "0.1em", marginBottom: 6 }}>{item.year}</div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{item.icon} {item.title}</div>
                <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6 }}>{item.description}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}