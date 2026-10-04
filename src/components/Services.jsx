import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "../data/portfolioData";

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="services" style={{ padding: "100px 5%", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-label">// 03. services</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            What I <span className="grad-text">Offer</span>
          </h2>
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              style={{ background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 16, padding: 28, cursor: "pointer", transition: "border-color 0.3s", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border2)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, marginBottom: 16 }}>{s.description}</div>
              <ul style={{ listStyle: "none" }}>
                {s.benefits.map((b, j) => (
                  <li key={j} style={{ fontSize: 12, color: "var(--text3)", padding: "3px 0", display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: "var(--purple2)", fontSize: 8 }}>✦</span>{b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
