import Link from "next/link";

/* ─── data ─────────────────────────────────────────────────────────────── */

const SKILLS = [
  { group: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "Go", "C", "SQL"] },
  { group: "Backend", items: ["Spring Boot", "Django REST", "NestJS", "REST APIs"] },
  { group: "Frontend", items: ["React", "Next.js", "React Native"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "Redis", "Hibernate", "Prisma"] },
  { group: "DevOps & Cloud", items: ["Docker", "Linux", "GitHub Actions", "AWS", "Kubernetes", "Terraform"] },
];

const PROJECTS = [
  {
    name: "ChainSight",
    tagline: "Supply-chain analytics for agricultural transparency",
    description:
      "Full-stack platform tracking Rwanda's agricultural supply chain from cooperative dispatch to market sale. Includes QR-code batch traceability, a loss-risk scoring engine, live GPS/cold-chain telemetry from IoT sensors, and an automated nightly analytics brief across 8 role-based dashboards.",
    stack: ["Django REST", "React", "React Native", "PostgreSQL", "Redis", "Celery", "ESP32/DHT22"],
    note: "Deployment interest from MINAGRI and Rwandan cooperatives",
    href: "https://github.com/Esther-ingabire",
  },
  {
    name: "MultiVerse AI",
    tagline: "All-in-one AI workspace",
    description:
      "Single dashboard bringing together chat, writing, research, coding, and generative AI tools for text, image, audio, and video. Multi-model chat (ChatGPT, Claude, Gemini, Grok, DeepSeek) with a credit-based billing system.",
    stack: ["Spring Boot", "Next.js", "React", "TypeScript", "PostgreSQL", "JWT"],
    href: "https://github.com/Esther-ingabire/multiverseai",
  },
  {
    name: "NFC Tap-to-Pay",
    tagline: "Android tap-to-pay with multi-card support",
    description:
      "Android app using NFC/HCE that lets a user store cards from multiple providers and pay with a single tap, backed by a Spring Boot + PostgreSQL API.",
    stack: ["Android (Java)", "NFC/HCE", "Spring Boot", "PostgreSQL"],
    href: "https://github.com/Esther-ingabire",
  },
  {
    name: "Rides",
    tagline: "Ride-hailing backend for Rwanda",
    description:
      "Go backend for a ride-hailing app covering motorcycles, cabs and trucks — real-time matching engine, in-app fare negotiation, live trip tracking over WebSockets, and MTN MoMo / Airtel Money payment integration.",
    stack: ["Go", "PostgreSQL + PostGIS", "Redis", "WebSockets", "JWT"],
    href: "https://github.com/Esther-ingabire",
  },
  {
    name: "Energy Consumption Prediction",
    tagline: "ML capstone — Big Data Analytics",
    description:
      "Compared linear, tree-based and ensemble models on a 19,735-record UCI dataset with 36 engineered features. Best result: Random Forest (R² = 0.547). Findings delivered via an interactive Power BI dashboard.",
    stack: ["Python", "scikit-learn", "pandas", "Power BI"],
    href: "https://github.com/Esther-ingabire",
  },
];

const NAV = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ─── components ────────────────────────────────────────────────────────── */

function Tag({ children }: { children: string }) {
  return (
    <span
      style={{
        background: "rgba(124,106,247,0.1)",
        border: "1px solid rgba(124,106,247,0.2)",
        color: "#a89ff8",
        borderRadius: "6px",
        padding: "2px 10px",
        fontSize: "12px",
        fontWeight: 500,
        whiteSpace: "nowrap" as const,
      }}
    >
      {children}
    </span>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "28px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── page ──────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(20px, 5vw, 80px)",
          height: "60px",
          background: "rgba(10,10,15,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "15px", letterSpacing: "-0.3px" }}>
          Esther Ingabire
        </span>
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              style={{ color: "var(--muted)", fontSize: "14px", textDecoration: "none" }}
            >
              {n.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "7px 16px",
              borderRadius: "8px",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Download CV
          </a>
        </div>
      </nav>

      <main style={{ paddingTop: "60px" }}>
        {/* ── hero ── */}
        <section
          style={{
            minHeight: "92vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px clamp(20px, 8vw, 160px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* glow blob */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: "10%",
              right: "5%",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(124,106,247,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <p
            style={{
              color: "var(--accent)",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Software Engineer
          </p>

          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 80px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              margin: "0 0 24px",
              maxWidth: "800px",
            }}
          >
            Hi, I&apos;m Esther.
            <br />
            <span style={{ color: "var(--muted)" }}>I build things</span>
            <br />
            that work.
          </h1>

          <p
            style={{
              color: "var(--muted)",
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.7,
              maxWidth: "520px",
              marginBottom: "40px",
            }}
          >
            Backend &amp; full-stack engineer based in Kigali, Rwanda. I work across
            Java, Python, Go and TypeScript — from REST APIs and IoT systems to
            mobile apps and cloud infrastructure.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                background: "var(--accent)",
                color: "#fff",
                padding: "13px 28px",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              View my work
            </a>
            <a
              href="#contact"
              style={{
                background: "transparent",
                color: "var(--text)",
                padding: "13px 28px",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                border: "1px solid var(--border)",
              }}
            >
              Get in touch
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "56px",
              flexWrap: "wrap",
            }}
          >
            {[
              { n: "5+", label: "Projects shipped" },
              { n: "3+", label: "Languages & stacks" },
              { n: "CTO", label: "HauxHunt" },
            ].map((s) => (
              <div key={s.label}>
                <p style={{ fontSize: "28px", fontWeight: 800, margin: 0 }}>{s.n}</p>
                <p style={{ color: "var(--muted)", fontSize: "13px", margin: "2px 0 0" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── about / skills ── */}
        <section
          id="about"
          style={{ padding: "100px clamp(20px, 8vw, 160px)" }}
        >
          <SectionLabel>About</SectionLabel>
          <h2 style={h2Style}>Skills &amp; expertise</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "16px",
              marginTop: "40px",
            }}
          >
            {SKILLS.map((s) => (
              <Card key={s.group}>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: "14px",
                  }}
                >
                  {s.group}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {s.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ── projects ── */}
        <section
          id="projects"
          style={{ padding: "100px clamp(20px, 8vw, 160px)" }}
        >
          <SectionLabel>Work</SectionLabel>
          <h2 style={h2Style}>Projects</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "20px",
              marginTop: "40px",
            }}
          >
            {PROJECTS.map((p) => (
              <Card
                key={p.name}
                style={{ display: "flex", flexDirection: "column", gap: "14px" }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "12px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        margin: 0,
                        letterSpacing: "-0.3px",
                      }}
                    >
                      {p.name}
                    </h3>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--muted)",
                        fontSize: "12px",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        marginTop: "3px",
                        flexShrink: 0,
                      }}
                    >
                      GitHub ↗
                    </a>
                  </div>
                  <p
                    style={{
                      color: "var(--accent)",
                      fontSize: "13px",
                      fontWeight: 500,
                      margin: "4px 0 0",
                    }}
                  >
                    {p.tagline}
                  </p>
                </div>

                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "14px",
                    lineHeight: 1.65,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {p.description}
                </p>

                {p.note && (
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#7fc97f",
                      background: "rgba(127,201,127,0.08)",
                      border: "1px solid rgba(127,201,127,0.15)",
                      borderRadius: "6px",
                      padding: "6px 10px",
                      margin: 0,
                    }}
                  >
                    ✦ {p.note}
                  </p>
                )}

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ── experience ── */}
        <section
          id="experience"
          style={{ padding: "100px clamp(20px, 8vw, 160px)" }}
        >
          <SectionLabel>Experience</SectionLabel>
          <h2 style={h2Style}>Where I&apos;ve worked</h2>

          <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <Card>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "12px",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, margin: 0 }}>
                    CTO
                  </h3>
                  <p style={{ color: "var(--accent)", fontSize: "14px", margin: "3px 0 0", fontWeight: 500 }}>
                    HauxHunt
                  </p>
                </div>
                <span
                  style={{
                    color: "var(--muted)",
                    fontSize: "13px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    padding: "4px 10px",
                  }}
                >
                  July 2026 – Present
                </span>
              </div>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "13px",
                  margin: "0 0 6px",
                  fontStyle: "italic",
                }}
              >
                Multi-market property rental platform · Rwanda &amp; Nigeria · Web, iOS &amp; Android
              </p>
              <ul
                style={{
                  color: "var(--muted)",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  paddingLeft: "18px",
                  margin: 0,
                }}
              >
                <li>
                  Architect backend systems and define API requirements spanning tenant search,
                  applications, landlord listing management, messaging, notifications and identity
                  verification.
                </li>
                <li>
                  Set technical direction for trust &amp; verification, offline/connectivity handling
                  for intermittent-connectivity markets, and role-based admin access.
                </li>
                <li>
                  Coordinate across backend, frontend, mobile and DevOps workstreams.
                </li>
              </ul>
            </Card>

            <Card>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "12px",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, margin: 0 }}>
                    BSc Software Engineering
                  </h3>
                  <p style={{ color: "var(--accent)", fontSize: "14px", margin: "3px 0 0", fontWeight: 500 }}>
                    Adventist University of Central Africa (AUCA)
                  </p>
                </div>
                <span
                  style={{
                    color: "var(--muted)",
                    fontSize: "13px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    padding: "4px 10px",
                  }}
                >
                  CGPA 17.63 / 20
                </span>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>
                Faculty of Information Technology, Department of Software Engineering.
                Coursework spanning algorithms, distributed systems, databases, cloud computing,
                and big data analytics.
              </p>
            </Card>
          </div>
        </section>

        {/* ── contact ── */}
        <section
          id="contact"
          style={{
            padding: "100px clamp(20px, 8vw, 160px) 120px",
            textAlign: "center",
          }}
        >
          <SectionLabel>Contact</SectionLabel>
          <h2 style={{ ...h2Style, textAlign: "center" }}>Let&apos;s work together</h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "17px",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "16px auto 40px",
            }}
          >
            Open to backend, full-stack and cloud engineering roles. Feel free to reach out.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:esther.ingabire777@gmail.com"
              style={{
                background: "var(--accent)",
                color: "#fff",
                padding: "13px 28px",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              esther.ingabire777@gmail.com
            </a>
            <a
              href="https://github.com/Esther-ingabire"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                color: "var(--text)",
                padding: "13px 28px",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                border: "1px solid var(--border)",
              }}
            >
              GitHub ↗
            </a>
            <a
              href="/cv.pdf"
              download
              style={{
                background: "transparent",
                color: "var(--text)",
                padding: "13px 28px",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                border: "1px solid var(--border)",
              }}
            >
              Download CV
            </a>
          </div>
        </section>

        {/* footer */}
        <footer
          style={{
            borderTop: "1px solid var(--border)",
            padding: "24px clamp(20px, 8vw, 160px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span style={{ color: "var(--muted)", fontSize: "13px" }}>
            © 2025 Esther Ingabire
          </span>
          <span style={{ color: "var(--muted)", fontSize: "13px" }}>
            Kigali, Rwanda · +250 798 686 064
          </span>
        </footer>
      </main>
    </>
  );
}

/* ─── shared style helpers ──────────────────────────────────────────────── */

function SectionLabel({ children }: { children: string }) {
  return (
    <p
      style={{
        color: "var(--accent)",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginBottom: "10px",
      }}
    >
      {children}
    </p>
  );
}

const h2Style: React.CSSProperties = {
  fontSize: "clamp(28px, 4vw, 40px)",
  fontWeight: 800,
  letterSpacing: "-1px",
  margin: 0,
};
