"use client";

import type { Metadata } from "next";

export default function CVPage() {
  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: #fff !important; color: #000 !important; }
          .page { box-shadow: none !important; margin: 0 !important; max-width: 100% !important; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f4f4f6; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        a { color: inherit; text-decoration: none; }
      `}</style>

      <div className="no-print" style={{ background: "#1a1a2e", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <a href="/" style={{ color: "#a89ff8", fontSize: "14px", fontWeight: 600 }}>← Back to portfolio</a>
        <button
          onClick={() => window.print()}
          style={{ background: "#7c6af7", color: "#fff", border: "none", padding: "8px 20px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", cursor: "pointer" }}
        >
          Print / Save as PDF
        </button>
      </div>

      <div className="page" style={{ maxWidth: "780px", margin: "32px auto", background: "#fff", padding: "52px 56px", boxShadow: "0 4px 40px rgba(0,0,0,0.12)", color: "#111" }}>

        {/* header */}
        <div style={{ borderBottom: "2px solid #7c6af7", paddingBottom: "20px", marginBottom: "28px" }}>
          <h1 style={{ fontSize: "30px", fontWeight: 800, letterSpacing: "-0.5px" }}>Esther Ingabire</h1>
          <p style={{ color: "#555", fontSize: "14px", marginTop: "4px", fontWeight: 500 }}>
            Software Engineer · Backend &amp; Full-Stack · Cloud &amp; DevOps
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", marginTop: "10px", fontSize: "13px", color: "#444" }}>
            <span>Kigali, Rwanda</span>
            <a href="mailto:esther.ingabire777@gmail.com">esther.ingabire777@gmail.com</a>
            <span>+250 798 686 064</span>
            <a href="https://github.com/Esther-ingabire">github.com/Esther-ingabire</a>
          </div>
        </div>

        <Section title="Summary">
          <p style={bodyText}>
            Backend and full-stack engineer with experience across web, mobile and IoT-connected products,
            built on strong Java and Python foundations. Sole developer of ChainSight, a supply-chain
            analytics platform for agricultural transparency drawing deployment interest from MINAGRI and
            Rwandan cooperatives. CTO of HauxHunt, leading backend architecture for a multi-market property
            rental platform. Hands-on with Docker, Linux, CI/CD, and growing practical use of AWS,
            Kubernetes and Terraform.
          </p>
        </Section>

        <Section title="Skills">
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <tbody>
              {[
                ["Languages", "Java · Python · TypeScript · JavaScript · Go · C · SQL"],
                ["Backend", "Spring Boot · Django REST · NestJS · REST APIs"],
                ["Frontend", "React · Next.js · React Native"],
                ["Databases", "PostgreSQL · MySQL · Redis · Hibernate · Prisma · TypeORM"],
                ["DevOps & Cloud", "Docker · Linux · GitHub Actions · AWS · Kubernetes · Terraform · Ansible · Nginx"],
                ["Tools", "Git · GitHub · GitLab · Postman"],
              ].map(([group, items]) => (
                <tr key={group} style={{ borderBottom: "1px solid #f0f0f0" }}>
                  <td style={{ padding: "6px 12px 6px 0", fontWeight: 600, color: "#333", width: "130px", verticalAlign: "top" }}>{group}</td>
                  <td style={{ padding: "6px 0", color: "#555" }}>{items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section title="Experience">
          <div style={{ marginBottom: "18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontWeight: 700, fontSize: "15px" }}>CTO — HauxHunt</span>
              <span style={{ color: "#777", fontSize: "13px" }}>July 2026 – Present</span>
            </div>
            <p style={{ color: "#7c6af7", fontSize: "13px", marginTop: "2px" }}>
              Multi-market property rental platform · Rwanda &amp; Nigeria · Web, iOS &amp; Android
            </p>
            <ul style={{ ...bodyText, paddingLeft: "18px", marginTop: "8px" }}>
              <li>Architect backend systems and define API requirements covering tenant search, applications, landlord listing management, messaging, notifications and identity verification.</li>
              <li>Set technical direction for trust &amp; verification, offline/connectivity handling, and role-based admin access.</li>
              <li>Coordinate across backend, frontend, mobile and DevOps workstreams.</li>
            </ul>
          </div>
        </Section>

        <Section title="Projects">
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
              bullets: [
                "All-in-one AI workspace with multi-model chat (ChatGPT, Claude, Gemini, Grok, DeepSeek), generative tools for text, image, audio and video, and a credit-based billing system.",
              ],
            },
            {
              name: "NFC Tap-to-Pay",
              sub: "Android (Java) · NFC/HCE · Spring Boot · PostgreSQL",
              bullets: [
                "Android app letting users store cards from multiple providers and pay with a single NFC tap.",
              ],
            },
            {
              name: "Rides — Ride-Hailing Backend",
              sub: "Go · PostgreSQL + PostGIS · Redis · WebSockets · JWT",
              bullets: [
                "Real-time matching engine, in-app fare negotiation, live trip tracking over WebSockets, MTN MoMo / Airtel Money integration.",
              ],
            },
            {
              name: "Energy Consumption Prediction",
              sub: "Python · scikit-learn · pandas · Power BI · Capstone project",
              bullets: [
                "Compared ML models on a 19,735-record UCI dataset with 36 engineered features. Best: Random Forest (R² = 0.547). Delivered via interactive Power BI dashboard.",
              ],
            },
          ].map((p) => (
            <div key={p.name} style={{ marginBottom: "16px" }}>
              <span style={{ fontWeight: 700, fontSize: "14px" }}>{p.name}</span>
              <p style={{ color: "#777", fontSize: "12px", marginTop: "2px" }}>{p.sub}</p>
              {p.note && (
                <p style={{ color: "#2a7a2a", fontSize: "12px", marginTop: "3px" }}>✦ {p.note}</p>
              )}
              <ul style={{ ...bodyText, paddingLeft: "18px", marginTop: "6px" }}>
                {p.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Education">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontWeight: 700, fontSize: "15px" }}>BSc Software Engineering</span>
            <span style={{ color: "#777", fontSize: "13px" }}>CGPA 17.63 / 20</span>
          </div>
          <p style={{ color: "#7c6af7", fontSize: "13px", marginTop: "2px" }}>
            Adventist University of Central Africa (AUCA) · Faculty of Information Technology
          </p>
        </Section>

      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "26px" }}>
      <h2 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#7c6af7", marginBottom: "12px" }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

const bodyText: React.CSSProperties = {
  fontSize: "13px",
  lineHeight: 1.65,
  color: "#444",
};
