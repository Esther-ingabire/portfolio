import { ContactLinks } from "./components/contact-links";

/* ─────────────────────────────────────────────────────────────────────────
   Esther Ingabire — Portfolio
   Orange × Black. Bold. Editorial. Professional.
───────────────────────────────────────────────────────────────────────── */

const SKILLS = [
  { group: "Languages",     items: ["Java", "Python", "TypeScript", "JavaScript", "Go", "C", "SQL"] },
  { group: "Backend",       items: ["Spring Boot", "Django REST", "NestJS", "REST APIs"] },
  { group: "Frontend",      items: ["React", "Next.js", "React Native"] },
  { group: "Databases",     items: ["PostgreSQL", "MySQL", "Redis", "Hibernate", "Prisma"] },
  { group: "DevOps & Cloud",items: ["Docker", "Linux", "GitHub Actions", "AWS", "Kubernetes", "Terraform"] },
];

const PROJECTS = [
  {
    name: "ChainSight",
    tagline: "Agricultural supply-chain analytics platform",
    description: "Full-stack platform tracking Rwanda's agricultural supply chain from cooperative dispatch to market sale — QR-code batch traceability, a rule-based loss-risk scoring engine, live GPS/cold-chain telemetry from IoT sensors, and an automated nightly analytics brief across 8 role-based dashboards.",
    stack: ["Django REST", "React", "React Native", "PostgreSQL", "Redis", "Celery", "ESP32/DHT22"],
    note: "Deployment interest from MINAGRI and Rwandan cooperatives",
    href: "https://github.com/Esther-ingabire",
    featured: true,
  },
  {
    name: "MultiVerse AI",
    tagline: "All-in-one AI workspace",
    description: "Single dashboard for chat, writing, research, coding, and generative AI tools. Multi-model chat (ChatGPT, Claude, Gemini, Grok, DeepSeek) with a credit-based billing system and full image/audio/video generation suite.",
    stack: ["Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "JWT"],
    href: "https://github.com/Esther-ingabire/multiverseai",
    featured: true,
  },
  {
    name: "NFC Tap-to-Pay",
    tagline: "Android multi-card tap-to-pay",
    description: "Android app using NFC/HCE that lets users store cards from multiple providers and pay with a single tap, backed by a Spring Boot + PostgreSQL API.",
    stack: ["Android (Java)", "NFC/HCE", "Spring Boot", "PostgreSQL"],
    href: "https://github.com/Esther-ingabire",
  },
  {
    name: "Rides",
    tagline: "Ride-hailing backend for Rwanda",
    description: "Go backend covering motorcycles, cabs and trucks — real-time matching engine, in-app fare negotiation, live trip tracking over WebSockets, MTN MoMo / Airtel Money integration.",
    stack: ["Go", "PostgreSQL + PostGIS", "Redis", "WebSockets"],
    href: "https://github.com/Esther-ingabire",
  },
  {
    name: "Energy Prediction",
    tagline: "ML capstone — Big Data Analytics",
    description: "Compared ML models on a 19,735-record UCI dataset with 36 engineered features. Best: Random Forest (R² = 0.547). Delivered via interactive Power BI dashboard.",
    stack: ["Python", "scikit-learn", "pandas", "Power BI"],
    href: "https://github.com/Esther-ingabire",
  },
];

const NAV = [
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

/* ─── page ──────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(24px, 6vw, 96px)", height: "64px",
        background: "rgba(8,8,8,0.9)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#f5f5f5", letterSpacing: "-0.3px" }}>
            EI<span style={{ color: "#ff6600" }}>.</span>
          </span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="nav-link">{n.label}</a>
          ))}
          <a href="/cv" className="btn-orange" style={{ padding: "8px 18px", fontSize: "13px" }}>
            View CV
          </a>
        </div>
      </nav>

      <main style={{ paddingTop: "64px", position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          justifyContent: "center", padding: "80px clamp(24px, 8vw, 120px)",
          position: "relative", overflow: "hidden",
        }}>
          {/* background orbs */}
          <div className="orb" style={{ width: 600, height: 600, background: "rgba(255,102,0,0.07)", top: "-10%", right: "-5%", zIndex: 0 }} />
          <div className="orb" style={{ width: 300, height: 300, background: "rgba(255,102,0,0.04)", bottom: "10%", left: "5%", zIndex: 0 }} />

          {/* grid lines decoration */}
          <div aria-hidden style={{
            position: "absolute", inset: 0, zIndex: 0,
            backgroundImage: "linear-gradient(rgba(255,102,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
            <div className="section-label" style={{ marginBottom: "28px" }}>
              Based in Kigali, Rwanda
            </div>

            <h1 style={{
              fontSize: "clamp(52px, 9vw, 96px)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-3px",
              marginBottom: "28px",
            }}>
              Esther<br />
              <span className="gradient-text">Ingabire</span>
            </h1>

            <div style={{
              display: "flex", alignItems: "center", gap: "16px",
              marginBottom: "28px", flexWrap: "wrap",
            }}>
              <span style={{
                background: "rgba(255,102,0,0.1)", border: "1px solid rgba(255,102,0,0.25)",
                color: "#ff8833", padding: "6px 14px", borderRadius: "100px",
                fontSize: "13px", fontWeight: 600,
              }}>
                Software Engineer
              </span>
              <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "13px" }}>·</span>
              <span style={{ color: "#555", fontSize: "13px", fontWeight: 500 }}>Backend &amp; Full-Stack</span>
              <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "13px" }}>·</span>
              <span style={{ color: "#555", fontSize: "13px", fontWeight: 500 }}>Cloud &amp; DevOps</span>
            </div>

            <p style={{
              color: "#666", fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.7,
              maxWidth: "560px", marginBottom: "44px", fontWeight: 400,
            }}>
              I build backend systems, full-stack products and IoT-connected platforms
              across Java, Python, Go and TypeScript. Currently CTO at HauxHunt.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "72px" }}>
              <a href="#projects" className="btn-orange">See my work ↓</a>
              <a href="#contact" className="btn-ghost">Get in touch</a>
              <a href="/cv" className="btn-ghost">View CV</a>
            </div>

            {/* stats row */}
            <div style={{
              display: "flex", gap: "0", flexWrap: "wrap",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: "40px",
            }}>
              {[
                { n: "5+",   label: "Projects built" },
                { n: "7+",   label: "Languages & stacks" },
                { n: "CTO",  label: "@ HauxHunt" },
                { n: "17.6", label: "CGPA / 20" },
              ].map((s, i) => (
                <div key={s.label} style={{
                  flex: "1 1 120px", paddingRight: "32px",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  paddingLeft: i > 0 ? "32px" : 0,
                }}>
                  <p className="stat-num">{s.n}</p>
                  <p style={{ color: "#555", fontSize: "12px", marginTop: "6px", fontWeight: 500 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT / SKILLS ── */}
        <section id="about" style={{ padding: "120px clamp(24px, 8vw, 120px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>

            <div>
              <div className="section-label">About me</div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: "24px" }}>
                Engineer who ships<br />
                <span style={{ color: "#ff6600" }}>real products.</span>
              </h2>
              <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}>
                I&apos;m a backend and full-stack engineer with experience across web, mobile and
                IoT-connected systems. I care about correctness, clean architecture, and building
                things that actually work in production.
              </p>
              <p style={{ color: "#666", fontSize: "16px", lineHeight: 1.8, marginBottom: "32px" }}>
                Sole developer of ChainSight — a supply-chain analytics platform drawing deployment
                interest from Rwanda&apos;s Ministry of Agriculture. Currently CTO at HauxHunt,
                leading backend architecture for a multi-market property rental platform.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href="mailto:esther.ingabire777@gmail.com" className="btn-orange" style={{ fontSize: "13px", padding: "10px 20px" }}>
                  Email me
                </a>
                <a href="https://github.com/Esther-ingabire" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: "13px", padding: "10px 20px" }}>
                  GitHub ↗
                </a>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div className="section-label">Skills</div>
              {SKILLS.map(s => (
                <div key={s.group} style={{
                  background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px", padding: "16px 20px",
                  display: "flex", alignItems: "flex-start", gap: "16px",
                }}>
                  <span style={{
                    fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "#ff6600", minWidth: "90px",
                    paddingTop: "3px", flexShrink: 0,
                  }}>
                    {s.group}
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {s.items.map(item => (
                      <span key={item} className="tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider" style={{ margin: "0 clamp(24px, 8vw, 120px)" }} />

        {/* ── PROJECTS ── */}
        <section id="projects" style={{ padding: "120px clamp(24px, 8vw, 120px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <div className="section-label">Selected work</div>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.1 }}>
                Projects
              </h2>
            </div>
            <a href="https://github.com/Esther-ingabire" target="_blank" rel="noopener noreferrer"
              style={{ color: "#555", fontSize: "13px", textDecoration: "none", fontWeight: 500 }}>
              All on GitHub ↗
            </a>
          </div>

          {/* featured — 2 col */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "20px", marginBottom: "20px" }}>
            {PROJECTS.filter(p => p.featured).map((p, i) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                className="card"
                style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "16px", textDecoration: "none", color: "inherit" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span className="proj-num">0{i + 1}</span>
                  <span style={{ color: "#333", fontSize: "18px" }}>↗</span>
                </div>
                <div>
                  <h3 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.5px", marginBottom: "6px" }}>{p.name}</h3>
                  <p style={{ color: "#ff6600", fontSize: "13px", fontWeight: 500 }}>{p.tagline}</p>
                </div>
                <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7, flex: 1 }}>{p.description}</p>
                {p.note && (
                  <div style={{
                    background: "rgba(80,200,80,0.06)", border: "1px solid rgba(80,200,80,0.15)",
                    borderRadius: "8px", padding: "8px 12px",
                    fontSize: "12px", color: "#6dbf6d", fontWeight: 500,
                  }}>
                    ✦ {p.note}
                  </div>
                )}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </a>
            ))}
          </div>

          {/* remaining — 3 col */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            {PROJECTS.filter(p => !p.featured).map((p, i) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                className="card"
                style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px", textDecoration: "none", color: "inherit" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span className="proj-num">0{i + 3}</span>
                  <span style={{ color: "#333", fontSize: "16px" }}>↗</span>
                </div>
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.3px", marginBottom: "4px" }}>{p.name}</h3>
                  <p style={{ color: "#ff6600", fontSize: "12px", fontWeight: 500 }}>{p.tagline}</p>
                </div>
                <p style={{ color: "#666", fontSize: "13px", lineHeight: 1.65, flex: 1 }}>{p.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {p.stack.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="divider" style={{ margin: "0 clamp(24px, 8vw, 120px)" }} />

        {/* ── EXPERIENCE ── */}
        <section id="experience" style={{ padding: "120px clamp(24px, 8vw, 120px)" }}>
          <div className="section-label">Background</div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: "60px" }}>
            Experience &amp; Education
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>

            {/* CTO */}
            <div style={{ display: "flex", gap: "32px", paddingBottom: "48px", position: "relative" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div className="tl-dot" />
                <div style={{ flex: 1, width: "1px", background: "rgba(255,255,255,0.07)", marginTop: "8px" }} />
              </div>
              <div style={{ flex: 1, paddingBottom: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                  <div>
                    <h3 style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.3px" }}>CTO</h3>
                    <p style={{ color: "#ff6600", fontSize: "14px", fontWeight: 600, marginTop: "2px" }}>HauxHunt</p>
                  </div>
                  <span style={{
                    background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.07)",
                    color: "#555", fontSize: "12px", fontWeight: 500,
                    padding: "5px 12px", borderRadius: "100px",
                  }}>
                    July 2026 – Present
                  </span>
                </div>
                <p style={{ color: "#555", fontSize: "13px", fontStyle: "italic", marginBottom: "14px" }}>
                  Multi-market property rental platform · Rwanda &amp; Nigeria · Web, iOS &amp; Android
                </p>
                <ul style={{ color: "#666", fontSize: "14px", lineHeight: 1.8, paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <li>Architect backend systems and define API requirements covering tenant search, applications, landlord listing management, messaging, notifications and identity verification.</li>
                  <li>Set technical direction for trust &amp; verification, offline/connectivity handling, and role-based admin access.</li>
                  <li>Coordinate across backend, frontend, mobile and DevOps workstreams.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div style={{ display: "flex", gap: "32px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div className="tl-dot" style={{ background: "#333", boxShadow: "0 0 0 3px rgba(255,255,255,0.04)" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                  <div>
                    <h3 style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.3px" }}>BSc Software Engineering</h3>
                    <p style={{ color: "#ff6600", fontSize: "14px", fontWeight: 600, marginTop: "2px" }}>Adventist University of Central Africa (AUCA)</p>
                  </div>
                  <span style={{
                    background: "rgba(255,102,0,0.08)", border: "1px solid rgba(255,102,0,0.2)",
                    color: "#ff8833", fontSize: "12px", fontWeight: 700,
                    padding: "5px 12px", borderRadius: "100px",
                  }}>
                    CGPA 17.63 / 20
                  </span>
                </div>
                <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7 }}>
                  Faculty of Information Technology, Department of Software Engineering.
                  Coursework spanning algorithms, distributed systems, databases, cloud computing and big data analytics.
                </p>
              </div>
            </div>

          </div>
        </section>

        <div className="divider" style={{ margin: "0 clamp(24px, 8vw, 120px)" }} />

        {/* ── CONTACT ── */}
        <section id="contact" style={{ padding: "120px clamp(24px, 8vw, 120px) 100px" }}>
          <div style={{ maxWidth: "680px" }}>
            <div className="section-label">Contact</div>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-2px", lineHeight: 1.05, marginBottom: "24px" }}>
              Let&apos;s build<br />
              <span style={{ color: "#ff6600" }}>something great.</span>
            </h2>
            <p style={{ color: "#666", fontSize: "17px", lineHeight: 1.7, marginBottom: "44px", maxWidth: "480px" }}>
              Open to backend, full-stack and cloud engineering roles. I reply to every message.
            </p>

            <ContactLinks />
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "28px clamp(24px, 8vw, 120px)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "12px",
        }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "15px" }}>
            EI<span style={{ color: "#ff6600" }}>.</span>
          </span>
          <span style={{ color: "#333", fontSize: "13px" }}>
            © 2026 Esther Ingabire · Kigali, Rwanda
          </span>
          <span style={{ color: "#333", fontSize: "13px" }}>
            +250 798 686 064
          </span>
        </footer>

      </main>
    </>
  );
}
