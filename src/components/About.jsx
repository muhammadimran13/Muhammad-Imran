import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { stats } from "../data/portfolioData";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" style={{ padding: "100px 5%", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <motion.div ref={ref} initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
          <div className="section-label">// 01. about me</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.1 }}>
            The Story <span className="grad-text">Behind</span> the Code
          </h2>
          {[
            <>I'm <strong style={{ color: "var(--purple3)" }}>Muhammad Imran</strong>, a dedicated Full Stack MERN Developer with a deep passion for crafting digital experiences that are not just functional, but genuinely impactful.</>,
            <>My journey started with curiosity about how websites work — that curiosity evolved into a serious craft. Today, I build everything from <strong style={{ color: "var(--purple3)" }}>pixel-perfect frontends</strong> to robust backend APIs that power real-world applications.</>,
            <>I believe in writing <strong style={{ color: "var(--purple3)" }}>clean, maintainable code</strong> and continuously pushing my limits. Every project is an opportunity to learn something new and deliver something exceptional.</>,
            <>My goal is to <strong style={{ color: "var(--purple3)" }}>join a great team</strong> or work with ambitious clients to build products that make a real difference.</>,
          ].map((text, i) => (
            <p key={i} style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.8, marginBottom: 18 }}>{text}</p>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {stats.map((s, i) => (
              <motion.div key={i} className="glass-card" style={{ padding: 24, textAlign: "center" }}
                whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}
              >
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 40, fontWeight: 800 }} className="grad-text">
                  {inView ? <CountUp end={s.count} duration={2} suffix={s.suffix} /> : `0${s.suffix}`}
                </div>
                <div style={{ fontSize: 12, color: "var(--text3)", marginTop: 6, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
