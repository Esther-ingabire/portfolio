"use client";

export default function CVPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap');
        @media print {
          .no-print { display: none !important; }
          body { background: #fff !important; }
          .page { box-shadow: none !important; margin: 0 !important; max-width: 100% !important; border-radius: 0 !important; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #111; font-family: 'Inter', -apple-system, sans-serif; -webkit-font-smoothing: antialiased; }
        a { color: inherit; text-decoration: none; }
        li { margin-bottom: 3px; }
      `}</style>

      {/* toolbar */}
      <div className="no-print" style={{
        background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "14px clamp(16px, 4vw, 48px)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <a href="/" style={{ color: "#ff6600", fontSize: "13px", fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif" }}>
          ← Back to portfolio
        </a>
        <button
          onClick={() => window.print()}
          style={{
            background: "#ff6600", color: "#fff", border: "none",
            padding: "9px 22px", borderRadius: "8px", fontWeight: 700,
            fontSize: "13px", cursor: "pointer", fontFamily: "'Inter', sans-serif",
          }}
        >
          Save as PDF
        </button>
      </div>

      {/* CV sheet */}
      <div className="page" style={{
        maxWidth: "800px", margin: "32px auto 64px",
        background: "#fff", color: "#111",
        padding: "52px 56px",
        boxShadow: "0 8px 60px rgba(0,0,0,0.5)",
        borderRadius: "4px",
        fontFamily: "'Inter', sans-serif",
      }}>

        {/* header */}
        <div style={{ marginBottom: "32px", paddingBottom: "24px", borderBottom: "3px solid #ff6600" }}>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "32px", fontWeight: 700, letterSpacing: "-0.5px", color: "#0a0a0a" }}>
            Esther Ingabire
          </h1>
          <p style={{ color: "#555", fontSize: "14px", marginTop: "5px", fontWeight: 500 }}>
            Software Engineer · Backend &amp; Full-Stack · Cloud &amp; DevOps
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "12px", fontSize: "13px", color: "#444" }}>
            {[
              { label: "Kigali, Rwanda" },
              { label: "esther.ingabire777@gmail.com", href: "mailto:esther.ingabire777@gmail.com" },
              { label: "+250 798 686 064" },
              { label: "github.com/Esther-ingabire", href: "https://github.com/Esther-ingabire" },
            ].map(item => (
              item.href
                ? <a key={item.label} href={item.href} style={{ color: "#ff6600" }}>{item.label}</a>
                : <span key={item.label}>{item.label}</span>
            ))}
          </div>
        </div>

        <CVSection title="Summary">
          <p style={body}>
            Backend and full-stack engineer with experience across web, mobile and IoT-connected products,
            built on strong Java and Python foundations. Sole developer of ChainSight, a supply-chain
            analytics platform drawing deployment interest from MINAGRI and Rwandan cooperatives.
            CTO of HauxHunt, leading backend architecture for a multi-market property rental platform.
            Hands-on with Docker, Linux, CI/CD, and growing practical use of AWS, Kubernetes and Terraform.
          </p>
        </CVSection>

        <CVSection title="Skills">
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <tbody>
              {[
                ["Languages",     "Java · Python · TypeScript · JavaScript · Go · C · SQL"],
                ["Backend",       "Spring Boot · Django REST · NestJS · REST APIs"],
                ["Frontend",      "React · Next.js · React Native"],
                ["Databases",     "PostgreSQL · MySQL · Redis · Hibernate · Prisma · TypeORM"],
                ["DevOps & Cloud","Docker · Linux · GitHub Actions · AWS · Kubernetes · Terraform · Ansible · Nginx"],
                ["Tools",         "Git · GitHub · GitLab · Postman"],
              ].map(([g, v]) => (
                <tr key={g} style={{ borderBottom: "1px solid #f2f2f2" }}>
                  <td style={{ padding: "6px 14px 6px 0", fontWeight: 700, color: "#111", width: "120px", verticalAlign: "top", fontSize: "12px" }}>{g}</td>
                  <td style={{ padding: "6px 0", color: "#444" }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CVSection>

        <CVSection title="Experience">
          <div>
            <Row left={<><strong style={{ fontSize: "15px" }}>CTO — HauxHunt</strong></>} right="July 2026 – Present" />
            <p style={{ color: "#ff6600", fontSize: "12px", marginTop: "2px", marginBottom: "8px", fontWeight: 500 }}>
              Multi-market property rental platform · Rwanda &amp; Nigeria · Web, iOS &amp; Android
            </p>
            <ul style={{ ...body, paddingLeft: "16px" }}>
              <li>Architect backend systems and define API requirements covering tenant search, applications, landlord listing management, messaging, notifications and identity verification.</li>
              <li>Set technical direction for trust &amp; verification, offline/connectivity handling, and role-based admin access.</li>
              <li>Coordinate across backend, frontend, mobile and DevOps workstreams.</li>
            </ul>
          </div>
        </CVSection>

        <CVSection title="Projects">
          {[
            {
              name: "ChainSight",
              sub: "Django REST · React · React Native · PostgreSQL · Redis · Celery · ESP32/DHT22",
              note: "Deployment interest from MINAGRI and Rwandan cooperatives",
              bullets: [
                "Full-stack platform tracking Rwanda's agricultural supply chain from cooperative dispatch to market sale.",
                "QR-code batch traceability, rule-based loss-risk scoring engine, automated nightly analytics brief, and live GPS/cold-chain telemetry from IoT sensors across 8 role-based dashboards.",
              ],
            },
            {
              name: "MultiVerse AI",
              sub: "Spring Boot · Next.js · TypeScript · PostgreSQL",
              bullets: ["All-in-one AI workspace with multi-model chat (ChatGPT, Claude, Gemini, Grok, DeepSeek), generative tools for text, image, audio and video, and a credit-based billing system."],
            },
            {
              name: "NFC Tap-to-Pay",
              sub: "Android (Java) · NFC/HCE · Spring Boot · PostgreSQL",
              bullets: ["Android app letting users store cards from multiple providers and pay with a single NFC tap."],
            },
            {
              name: "Rides — Ride-Hailing Backend",
              sub: "Go · PostgreSQL + PostGIS · Redis · WebSockets",
              bullets: ["Real-time matching engine, in-app fare negotiation, live trip tracking over WebSockets, MTN MoMo / Airtel Money integration."],
            },
            {
              name: "Energy Consumption Prediction",
              sub: "Python · scikit-learn · pandas · Power BI · Capstone",
              bullets: ["Compared ML models on a 19,735-record UCI dataset with 36 engineered features. Best: Random Forest (R² = 0.547). Delivered via interactive Power BI dashboard."],
            },
          ].map(p => (
            <div key={p.name} style={{ marginBottom: "14px" }}>
              <strong style={{ fontSize: "14px", color: "#0a0a0a" }}>{p.name}</strong>
              <p style={{ color: "#888", fontSize: "11px", marginTop: "1px", marginBottom: "4px" }}>{p.sub}</p>
              {p.note && <p style={{ color: "#2a7a2a", fontSize: "11px", marginBottom: "4px" }}>✦ {p.note}</p>}
              <ul style={{ ...body, paddingLeft: "16px" }}>
                {p.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </CVSection>

        <CVSection title="Education">
          <Row
            left={<strong style={{ fontSize: "15px" }}>BSc Software Engineering</strong>}
            right={<span style={{ color: "#ff6600", fontWeight: 700 }}>CGPA 17.63 / 20</span>}
          />
          <p style={{ color: "#ff6600", fontSize: "12px", marginTop: "2px", fontWeight: 500 }}>
            Adventist University of Central Africa (AUCA) · Faculty of Information Technology
          </p>
        </CVSection>

        {/* footer */}
        <div style={{ marginTop: "32px", paddingTop: "16px", borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#aaa" }}>
          <span>Esther Ingabire</span>
          <span>© 2026</span>
        </div>

      </div>
    </>
  );
}

function CVSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h2 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em",
        textTransform: "uppercase" as const, color: "#ff6600",
        marginBottom: "10px", paddingBottom: "6px",
        borderBottom: "1px solid #f0f0f0",
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function Row({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px" }}>
      <span>{left}</span>
      <span style={{ color: "#888", fontSize: "12px" }}>{right}</span>
    </div>
  );
}

const body: React.CSSProperties = { fontSize: "13px", lineHeight: 1.65, color: "#444" };
