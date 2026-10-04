import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { testimonials } from "../data/portfolioData";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const timer = setInterval(() => setIdx(p => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-label">// 08. testimonials</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            What Clients <span className="grad-text">Say</span>
          </h2>
        </motion.div>

        <div style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: idx === i ? "rgba(124,58,237,0.06)" : "var(--glass)", border: `1px solid ${idx === i ? "var(--border2)" : "var(--border)"}`, borderRadius: 20, padding: 32, transition: "all 0.4s" }}
              >
                <div style={{ color: "#fbbf24", fontSize: 14, marginBottom: 20, letterSpacing: 2 }}>{"★".repeat(t.stars)}</div>
                <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.75, marginBottom: 24, fontStyle: "italic" }}>
                  <span style={{ fontSize: 40, color: "var(--purple)", lineHeight: 0, verticalAlign: -15, marginRight: 4, fontFamily: "'Syne',sans-serif" }}>"</span>
                  {t.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: "#fff", flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "var(--text3)" }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 32 }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                style={{ width: idx === i ? 24 : 8, height: 8, borderRadius: 100, background: idx === i ? "var(--purple2)" : "var(--border)", border: "none", cursor: "pointer", transition: "all 0.3s" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
