import { techStack } from "../data/portfolioData";

export default function TechMarquee() {
  const doubled = [...techStack, ...techStack];
  return (
    <div style={{ padding: "60px 0", overflow: "hidden", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg2)" }}>
      <div className="marquee-track" style={{ display: "flex", width: "max-content" }}>
        {doubled.map((tech, i) => (
          <span key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 40px", whiteSpace: "nowrap", fontSize: 15, fontWeight: 600, color: "var(--text3)", transition: "color 0.2s", cursor: "default" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--purple3)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--text3)"}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--purple)", opacity: 0.5, display: "inline-block" }} />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
