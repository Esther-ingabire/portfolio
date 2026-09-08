"use client";

export function ContactLinks() {
  const linkBase: React.CSSProperties = {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "12px", padding: "16px 20px", textDecoration: "none",
    color: "#f5f5f5", fontSize: "14px", fontWeight: 500,
    transition: "border-color 0.2s",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "420px" }}>
      <a
        href="mailto:esther.ingabire777@gmail.com"
        style={linkBase}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,102,0,0.35)")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
      >
        <span>esther.ingabire777@gmail.com</span>
        <span style={{ color: "#ff6600" }}>↗</span>
      </a>
      <a
        href="https://github.com/Esther-ingabire"
        target="_blank"
        rel="noopener noreferrer"
        style={linkBase}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,102,0,0.35)")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
      >
        <span>github.com/Esther-ingabire</span>
        <span style={{ color: "#ff6600" }}>↗</span>
      </a>
      <a
        href="/cv"
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "rgba(255,102,0,0.08)", border: "1px solid rgba(255,102,0,0.25)",
          borderRadius: "12px", padding: "16px 20px", textDecoration: "none",
          color: "#ff8833", fontSize: "14px", fontWeight: 600,
          transition: "background 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,102,0,0.14)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,102,0,0.08)")}
      >
        <span>View / Download CV</span>
        <span>↗</span>
      </a>
    </div>
  );
}
