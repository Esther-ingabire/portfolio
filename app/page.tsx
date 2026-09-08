const PROJECTS = [
  {
    name: "ChainSight",
    role: "Solo · Full-Stack · In Development",
    status: "Active",
    stack: ["Django REST", "React", "React Native", "PostgreSQL", "Redis", "Celery", "ESP32/DHT22"],
    shot: null as string | null,
    href: "https://github.com/Esther-ingabire",
    note: "Deployment interest from MINAGRI and Rwandan cooperatives",
    body: [
      "Tracks produce batches from cooperative dispatch through transport and distribution to market sale, with QR-code traceability across 8 role-based dashboards.",
      "Rule-based loss-risk scoring engine and an automated nightly analytics brief, fed by live GPS and cold-chain telemetry from ESP32/ESP8266 sensors.",
    ],
  },
  {
    name: "MultiVerse AI",
    role: "Solo · Full-Stack",
    status: null,
    stack: ["Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "JWT"],
    shot: null as string | null,
    href: "https://github.com/Esther-ingabire/multiverseai",
    note: null,
    body: [
      "All-in-one AI workspace with multi-model chat (ChatGPT, Claude, Gemini, Grok, DeepSeek), generative tools for text, image, audio and video, and a credit-based billing system.",
    ],
  },
  {
    name: "Rides",
    role: "Backend Contributor",
    status: "Active",
    stack: ["Go", "PostgreSQL + PostGIS", "Redis", "WebSockets", "MTN MoMo / Airtel Money"],
    shot: null as string | null,
    href: "https://github.com/Esther-ingabire",
    note: null,
    body: [
      "Real-time driver matching, in-app fare negotiation and live trip tracking over WebSockets for motorcycles, cabs and trucks, with mobile money payment integration.",
    ],
  },
  {
    name: "NFC Tap-to-Pay",
    role: "Solo · Full-Stack",
    status: null,
    stack: ["Android (Java)", "NFC/HCE", "Spring Boot", "PostgreSQL"],
    shot: null as string | null,
    href: "https://github.com/Esther-ingabire",
    note: null,
    body: [
      "Stores cards from several banks and pays in a single tap using host card emulation, backed by a Spring Boot and PostgreSQL service.",
    ],
  },
  {
    name: "Energy Consumption Prediction",
    role: "Capstone · Big Data Analytics",
    status: null,
    stack: ["Python", "scikit-learn", "pandas", "Power BI"],
    shot: null as string | null,
    href: "https://github.com/Esther-ingabire",
    note: null,
    body: [
      "Compared ML models on a 19,735-record UCI dataset with 36 engineered features. Best: Random Forest (R² = 0.547, RMSE 67.3 Wh). Delivered via interactive Power BI dashboard.",
    ],
  },
];

const KIT = [
  { group: "Languages",      items: "Java · Python · Go · TypeScript · JavaScript · SQL" },
  { group: "Backend",        items: "Spring Boot · Django REST · NestJS · REST APIs · Celery · WebSockets" },
  { group: "Frontend",       items: "React · Next.js · React Native (Expo) · Android (Java)" },
  { group: "Data & Storage", items: "PostgreSQL · Redis · MySQL · Hibernate · Prisma · TypeORM" },
  { group: "DevOps & Cloud", items: "Docker · Linux · GitHub Actions · AWS · Kubernetes · Terraform · Ansible · Nginx" },
  { group: "Tools",          items: "Git · GitHub · GitLab · Postman" },
];

export default function Home() {
  return (
    <>
      {/* scroll progress rail */}
      <div className="rail" aria-hidden><span /></div>

      {/* ── MASTHEAD ── */}
      <header className="masthead">
        <div className="shell">
          <div className="inner">
            <a href="/" className="wordmark">Esther <em>Ingabire</em></a>
            <nav>
              <a href="#work"       className="hide-sm">Work</a>
              <a href="#experience" className="hide-sm">Experience</a>
              <a href="#toolkit"    className="hide-sm">Toolkit</a>
              <a href="#contact">Contact</a>
              <a href="/cv" target="_blank" className="cv">CV</a>
            </nav>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <div className="shell">
        <div className="hero">
          <h1 className="display">
            Backend &amp;<br />full-stack<br />engineer.
          </h1>
          <p className="lede">
            Full-stack engineer with a focus on backend architecture — distributed systems,
            real-time data pipelines, mobile clients and IoT telemetry. Based in{" "}
            <b>Kigali, Rwanda</b>. Currently serving as <b>CTO at HauxHunt</b>, leading
            technical strategy across web, iOS and Android.
          </p>
          <div className="now-line">
            <span>Java · Python · Go · TypeScript</span>
            <span>Spring Boot · Django · Next.js</span>
            <span>Docker · AWS · PostgreSQL</span>
          </div>
          <div className="actions">
            <a href="#work"    className="btn btn-primary">See my work</a>
            <a href="#contact" className="btn">Get in touch</a>
            <a href="/cv" target="_blank" className="btn">View CV</a>
          </div>
        </div>
      </div>

      {/* ── WORK ── */}
      <section id="work">
        <div className="shell">
          <h2 className="sec-head">Selected work</h2>
          <div className="proj-grid">
            {PROJECTS.map((p) => (
              <div key={p.name} className="proj-card">
                <div className="proj-card-top">
                  <div className="proj-meta">
                    {p.status && <span className="status">{p.status}</span>}
                    <span className="proj-role">{p.role}</span>
                  </div>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="proj-link">GitHub ↗</a>
                </div>
                <h3 className="proj-name">{p.name}</h3>
                {p.note && <p className="proj-note">{p.note}</p>}
                <ul className="points">
                  {p.body.map(b => <li key={b}>{b}</li>)}
                </ul>
                <ul className="stack">
                  {p.stack.map(t => <li key={t}>{t}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience">
        <div className="shell">
          <h2 className="sec-head">Experience &amp; education</h2>

          <div className="entry">
            <div className="rail-col">
              <span>July 2026 – Present</span>
              <span className="status">Active</span>
            </div>
            <div>
              <h3>Chief Technology Officer <span className="org">at HauxHunt</span></h3>
              <p>Multi-market property rental platform for Rwanda and Nigeria, covering web, iOS and Android.</p>
              <ul className="points">
                <li>Own the backend architecture and API design covering tenant search, applications, landlord listing management, messaging, notifications and identity verification.</li>
                <li>Set technical direction for trust and verification, offline handling for intermittent-connectivity markets, and role-based admin access.</li>
                <li>Coordinate backend, frontend, mobile and DevOps work, and translate product flows into backend requirements.</li>
              </ul>
            </div>
          </div>

          <div className="entry">
            <div className="rail-col">
              <span>CGPA 17.63 / 20</span>
            </div>
            <div>
              <h3>BSc Software Engineering <span className="org">at AUCA</span></h3>
              <p>Adventist University of Central Africa, Faculty of Information Technology. Coursework spanning algorithms, distributed systems, databases, cloud computing and big data analytics.</p>
              <p>Capstone (Big Data Analytics): household energy prediction on 19,735 records — best model Random Forest at R² 0.547 and RMSE 67.3 Wh, delivered as an interactive Power BI dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOOLKIT ── */}
      <section id="toolkit">
        <div className="shell">
          <h2 className="sec-head">Toolkit</h2>
          <div className="kit">
            {KIT.map(k => (
              <div key={k.group}>
                <h3>{k.group}</h3>
                <p>{k.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact" id="contact">
        <div className="shell">
          <h2 className="display">
            Open to new<br />opportunities.
          </h2>
          <p>
            Available for backend, full-stack and cloud engineering roles. Every message gets a reply.
          </p>
          <div className="channels">
            <div>
              <span>Email</span>
              <a href="mailto:esther.ingabire777@gmail.com">esther.ingabire777@gmail.com</a>
            </div>
            <div>
              <span>GitHub</span>
              <a href="https://github.com/Esther-ingabire" target="_blank" rel="noopener noreferrer">
                github.com/Esther-ingabire
              </a>
            </div>
            <div>
              <span>Phone</span>
              <p className="plain">+250 798 686 064</p>
            </div>
            <div>
              <span>CV</span>
              <a href="/cv" target="_blank">View CV</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div className="shell">
        <footer>
          <span>Esther Ingabire — Kigali, Rwanda</span>
          <span>© 2026</span>
        </footer>
      </div>
    </>
  );
}
