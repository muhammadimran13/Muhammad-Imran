import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    // TODO: Wire up to EmailJS, Formspree, or your own API endpoint
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle = {
    width: "100%", padding: "14px 16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid var(--border)",
    borderRadius: 8, color: "var(--text)",
    fontFamily: "'DM Sans',sans-serif", fontSize: 14,
    outline: "none", transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-label">// 10. contact</div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Let's <span className="grad-text">Connect</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--text2)", maxWidth: 560, margin: "16px auto 0", lineHeight: 1.7 }}>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="rg-hero" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 60, alignItems: "start" }}>
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Get in touch</h3>
            <p style={{ fontSize: 14, color: "var(--text2)", marginBottom: 32, lineHeight: 1.7 }}>I'm currently open to freelance projects and internship opportunities. Let's build something amazing together.</p>

            {[
              { icon: <FiMail size={20} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: <FiGithub size={20} />, label: "GitHub", value: "github.com/muhammadimran", href: personalInfo.github },
              { icon: <FiLinkedin size={20} />, label: "LinkedIn", value: "linkedin.com/in/muhammadimran", href: personalInfo.linkedin },
            ].map((c, i) => (
              <motion.a key={i} href={c.href} target="_blank" rel="noreferrer" whileHover={{ x: 4, borderColor: "var(--border2)" }}
                style={{ display: "flex", alignItems: "center", gap: 16, padding: 20, background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 12, marginBottom: 16, transition: "all 0.3s", textDecoration: "none", color: "var(--text)" }}
              >
                <span style={{ color: "var(--purple3)", flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <div style={{ fontSize: 11, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{c.label}</div>
                  <div style={{ fontSize: 14, marginTop: 2 }}>{c.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>
          {/* Form */}
          <motion.form onSubmit={submit} initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="form-box" style={{ background: "var(--glass)", border: "1px solid var(--border)", borderRadius: 20, padding: 36 }}
          >
            <div className="rg-form" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              {[{ name: "name", label: "Your Name", placeholder: "John Doe", type: "text" },
                { name: "email", label: "Email Address", placeholder: "john@email.com", type: "email" }
              ].map(f => (
                <div key={f.name}>
                  <label style={{ display: "block", fontSize: 12, color: "var(--text3)", marginBottom: 8, letterSpacing: "0.05em", textTransform: "uppercase" }}>{f.label}</label>
                  <input name={f.name} type={f.type} placeholder={f.placeholder} value={form[f.name]} onChange={handle} required
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "var(--purple2)"}
                    onBlur={e => e.target.style.borderColor = "var(--border)"}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 12, color: "var(--text3)", marginBottom: 8, letterSpacing: "0.05em", textTransform: "uppercase" }}>Subject</label>
              <input name="subject" type="text" placeholder="Project Inquiry / Collaboration" value={form.subject} onChange={handle} required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "var(--purple2)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 12, color: "var(--text3)", marginBottom: 8, letterSpacing: "0.05em", textTransform: "uppercase" }}>Message</label>
              <textarea name="message" placeholder="Tell me about your project..." value={form.message} onChange={handle} required rows={5}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={e => e.target.style.borderColor = "var(--purple2)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"}
              />
            </div>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              style={{ width: "100%", padding: 16, background: sent ? "linear-gradient(135deg,#059669,#10b981)" : "linear-gradient(135deg,#7c3aed,#2563eb)", border: "none", borderRadius: 8, color: "#fff", fontFamily: "'DM Sans',sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "background 0.3s" }}
            >
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
