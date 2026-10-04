import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { githubStats, languages } from "../data/portfolioData";

function generateContribData() {
  return Array.from({ length: 364 }, () => Math.random());
}

const levels = ["#0d0d1a", "#2d1b69", "#4c2f9b", "#7c3aed", "#a855f7"];
function getColor(val) {
  if (val < 0.4) return levels[0];
  if (val < 0.6) return levels[1];
  if (val < 0.75) return levels[2];
  if (val < 0.9) return levels[3];
  return levels[4];
}

const contribs = generateContribData();

export default function GitHub() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <section id="github" style={{ padding: "100px 5%", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-label">// 07. open source</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            GitHub <span className="grad-text">Activity</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 20, padding: 36, position: "relative", overflow: "hidden" }}
        >
          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, marginBottom: 36 }}>
            {githubStats.map((s, i) => (
              <div key={i} style={{ textAlign: "center", background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 32, fontWeight: 800 }} className="grad-text">{s.num}</div>
                <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 6, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Contribution graph */}
          <div style={{ background: "var(--bg3)", border: "1px solid var(--border)", borderRadius: 12, padding: 20 }}>
            <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 16, fontWeight: 500 }}>Contribution Activity — Last 12 months</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(52,1fr)", gap: 3, overflow: "hidden" }}>
              {contribs.map((val, i) => (
                <div key={i} style={{ borderRadius: 2, aspectRatio: 1, background: getColor(val) }} />
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 20 }}>
              {languages.map((l, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--text2)" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: l.color }} />
                  {l.label} {l.pct}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
