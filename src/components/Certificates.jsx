  import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certificates } from "../data/portfolioData";

export default function Certificates() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="certificates" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-label">// 06. credentials</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Certificates & <span className="grad-text">Achievements</span>
          </h2>
        </motion.div>
        <div className="rg-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {certificates.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, borderColor: "var(--border2)" }}
              style={{ background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden", transition: "all 0.3s" }}
            >
              <div style={{ height: 120, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, background: "linear-gradient(135deg,#1a0d2e,#0d1a35)" }}>
                {c.emoji}
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{c.title}</div>
                <div style={{ fontSize: 11, color: "var(--text3)", marginBottom: 4 }}>{c.org}</div>
                <div style={{ fontSize: 11, color: "var(--text3)", fontFamily: "'DM Mono',monospace", marginBottom: 12 }}>{c.date}</div>
                <a href={c.url} target="_blank" rel="noreferrer"
                  style={{ display: "block", textAlign: "center", padding: 8, background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", borderRadius: 6, fontSize: 11, color: "var(--purple3)", cursor: "pointer", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(124,58,237,0.2)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(124,58,237,0.1)"}
                >View Certificate →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
