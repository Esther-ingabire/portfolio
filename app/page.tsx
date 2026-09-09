import Image from "next/image";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import RotatingRole from "./rotating-role";

/* ---------------- icons ---------------- */
function IconHome() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10" />
      <path d="M10 20.5V14h4v6.5" />
    </svg>
  );
}
function IconLeaf() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 19.5c0-9 6-14.5 15-14.5.5 9-6 14.5-15 14.5Z" />
      <path d="M5 19c3.5-3.5 7-7 11.5-11.5" />
    </svg>
  );
}
function IconSparkle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.5 13.6 9l5.4 1.6-5.4 1.6L12 17.7l-1.6-5.5L5 10.6 10.4 9 12 3.5Z" />
      <path d="M19 15.5 19.7 18l2.3.7-2.3.7-.7 2.5-.7-2.5-2.3-.7 2.3-.7.7-2.5Z" />
    </svg>
  );
}
function IconCar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16V12l2-5h12l2 5v4" />
      <path d="M3.5 16h17v2.5a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V16Z" />
      <circle cx="7.5" cy="17.5" r="1.4" />
      <circle cx="16.5" cy="17.5" r="1.4" />
    </svg>
  );
}
function IconTap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3.5" width="10" height="17" rx="2" />
      <path d="M17.5 8.5c1.6 1.9 1.6 5.1 0 7" />
      <path d="M20.2 6.3c2.6 3.1 2.6 8.3 0 11.4" />
    </svg>
  );
}
function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 3 5 13.5h5.5L11 21l8-10.5h-5.5L13 3Z" />
    </svg>
  );
}
function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7.5" width="18" height="12" rx="2.2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M3 13h5.2a1 1 0 0 0 1-.8l.3-1.2h4l.3 1.2a1 1 0 0 0 1 .8H21" />
    </svg>
  );
}
function IconCap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5 2.5 9.5 12 14l9.5-4.5L12 5Z" />
      <path d="M6.5 11.8v4c0 1.2 2.5 2.7 5.5 2.7s5.5-1.5 5.5-2.7v-4" />
      <path d="M21 10v5.2" />
    </svg>
  );
}

/* ---------------- content (only real, existing facts) ---------------- */

const HAUXHUNT = {
  name: "HauxHunt",
  icon: IconHome,
  image: "/shots/hauxhunt.jpg",
  imageAlt: "HauxHunt property search homepage",
  role: "Chief Technology Officer · Active · July 2026 to Present",
  problem:
    "Rental markets across Rwanda and Nigeria are fragmented: informal listings, little trust or verification infrastructure, and unreliable connectivity outside major cities.",
  body: "A multi-market property rental platform for Rwanda and Nigeria, covering web, iOS and Android. As CTO, I own the backend architecture end to end.",
  points: [
    "Backend architecture and API design across tenant search, listings, messaging, notifications and identity verification.",
    "Trust & verification and offline-first handling for intermittent-connectivity markets.",
    "Coordinating backend, frontend, mobile and DevOps work across the team.",
  ],
};

const PROJECTS = [
  {
    name: "ChainSight",
    icon: IconLeaf,
    image: "/shots/chainsight.jpg",
    imageAlt: "ChainSight dashboard showing a produce shipment's route and supply chain journey",
    role: "Solo · Full-Stack · In development",
    stack: ["Django REST", "React", "React Native", "PostgreSQL", "Redis", "Celery", "ESP32/DHT22"],
    problem:
      "Cooperatives and distributors had no visibility into produce as it moved from dispatch to market, and no early signal when a batch was at risk of spoiling.",
    body: "QR-traceable produce tracking across 8 role-based dashboards, with a loss-risk scoring engine fed by live GPS and cold-chain sensor telemetry. Drawing deployment interest from Rwandan cooperatives and MINAGRI.",
    href: "https://github.com/Esther-ingabire",
  },
  {
    name: "MultiVerse AI",
    icon: IconSparkle,
    image: "/shots/multiverse-ai.jpg",
    imageAlt: "MultiVerse AI sign-in screen",
    role: "Solo · Full-Stack",
    stack: ["Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "JWT"],
    problem: "Working with multiple AI models and generation tools usually means juggling separate tabs, accounts and subscriptions.",
    body: "An all-in-one AI workspace: multi-model chat (ChatGPT, Claude, Gemini, Grok, DeepSeek), generative tools for text, image, audio and video, and a credit-based billing system.",
    href: "https://github.com/Esther-ingabire/multiverseai",
    codeHref: "https://github.com/Esther-ingabire/multiverseai",
  },
  {
    name: "Rides",
    icon: IconCar,
    role: "Backend Contributor · Active",
    stack: ["Go", "PostgreSQL + PostGIS", "Redis", "WebSockets", "MTN MoMo / Airtel Money"],
    problem: "Riders and drivers need real-time matching and fare negotiation, with reliable location tracking and local mobile-money payment.",
    body: "Real-time driver matching, in-app fare negotiation and live trip tracking over WebSockets for motorcycles, cabs and trucks, with mobile money payment integration.",
    href: "https://github.com/Esther-ingabire",
  },
  {
    name: "NFC Tap-to-Pay",
    icon: IconTap,
    role: "Solo · Full-Stack",
    stack: ["Android (Java)", "NFC/HCE", "Spring Boot", "PostgreSQL"],
    problem: "Paying with several bank cards means carrying and juggling all of them physically.",
    body: "Stores cards from several banks and pays in a single tap using host card emulation, backed by a Spring Boot and PostgreSQL service.",
    href: "https://github.com/Esther-ingabire",
  },
  {
    name: "Energy Consumption Prediction",
    icon: IconBolt,
    role: "Capstone · Big Data Analytics",
    stack: ["Python", "scikit-learn", "pandas", "Power BI"],
    problem: "Predicting household energy consumption to support planning and efficiency decisions, evaluated across several ML models on a real dataset.",
    body: "Compared ML models on a 19,735-record UCI dataset with 36 engineered features. Best: Random Forest (R² = 0.547, RMSE 67.3 Wh). Delivered via an interactive Power BI dashboard.",
    href: "https://github.com/Esther-ingabire",
  },
];

const SKILLS = [
  { title: "Languages", items: "Java · Python · Go · JavaScript · TypeScript · SQL" },
  { title: "Backend", items: "Spring Boot · Django REST Framework · REST API Design · Hibernate/JPA · Celery · WebSockets · JWT" },
  { title: "Frontend & Mobile", items: "React · Next.js · React Native (Expo) · Android (Java)" },
  { title: "Data", items: "PostgreSQL · Redis" },
  { title: "Cloud & Infrastructure", items: "Docker · Linux · GitHub Actions · AWS · Git · GitHub · CI/CD · Maven · Postman" },
  { title: "Exploring", items: "Kubernetes · Terraform · Ansible · Nginx · DevSecOps", exploring: true },
];

export default function Home() {
  return (
    <>
      <div className="rail" aria-hidden><span /></div>

      {/* ── MASTHEAD ── */}
      <header className="masthead">
        <div className="shell">
          <div className="inner">
            <Link href="/" className="wordmark">Esther <em>Ingabire</em></Link>
            <nav className="desktop-nav" aria-label="Primary">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
              <a href="/cv.pdf" download="Esther-Ingabire-CV.pdf" className="cv">CV ↓</a>
            </nav>
            <MobileNav />
          </div>
        </div>
      </header>

      <main id="main">
        {/* ── HERO ── */}
        <div className="shell">
          <div className="hero">
            <div className="hero-grid">
              <div>
                <p className="eyebrow"><RotatingRole /> · Kigali, Rwanda</p>
                <h1 className="display hero-name">Esther Ingabire</h1>
                <p className="hero-tagline">Backend engineer building reliable systems and practical products.</p>
                <p className="lede">
                  I build APIs, backend systems, cloud-ready applications and the products they
                  power, from web to mobile. Currently <b>CTO at HauxHunt</b>.
                </p>
                <p className="hero-stack" aria-label="Core technologies">Java · Spring Boot · Python · Go · AWS · Docker</p>
                <div className="actions">
                  <a href="#work" className="btn btn-primary">View my work</a>
                  <a href="/cv.pdf" download="Esther-Ingabire-CV.pdf" className="btn">Download CV</a>
                </div>
              </div>

              <div className="hero-panel" aria-hidden="true">
                <div className="hero-panel-bar">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                  <span className="hero-panel-path">esther.dev</span>
                </div>
                <div className="hero-panel-body">
                  <div className="hp-name">esther.ingabire</div>
                  <div className="hp-dim">Backend Engineer</div>
                  <div className="hp-dim">Kigali, Rwanda</div>
                  <div className="hp-divider" />
                  <div className="hp-row"><span className="hp-key">system.status</span><span className="hp-ok">operational</span></div>
                  <div className="hp-row"><span className="hp-key">current.role</span><span>CTO @ HauxHunt</span></div>
                  <div className="hp-row"><span className="hp-key">focus</span><span>APIs · Systems · Cloud</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ABOUT ── */}
        <section id="about" className="reveal">
          <div className="shell">
            <p className="eyebrow">01 / About</p>
            <h2 className="sec-head">Behind the interface.</h2>
            <div className="about-text sec-body">
              <p>
                I&apos;m interested in what happens behind the interface: how APIs communicate,
                how data moves through a system, and how software keeps working as requests, users
                and edge cases grow. Most of what I build sits in that layer: REST APIs, data
                pipelines, background jobs and the infrastructure that keeps them running.
              </p>
              <p>
                I&apos;m currently <b>CTO at HauxHunt</b>, where that means owning backend
                architecture end to end. Outside of work, I&apos;m building <b>ChainSight</b> on my
                own, a supply-chain analytics platform for Rwandan agriculture.
              </p>
            </div>
          </div>
        </section>

        {/* ── WORK ── */}
        <section id="work" className="reveal">
          <div className="shell">
            <p className="eyebrow">02 / Selected work</p>
            <h2 className="sec-head">Products I&apos;ve built and helped build.</h2>

            <div className="sec-body">
              <article className="proj-feature">
                {HAUXHUNT.image && (
                  <div className="proj-shot">
                    <Image src={HAUXHUNT.image} alt={HAUXHUNT.imageAlt} fill sizes="(max-width: 780px) 100vw, 1040px" />
                  </div>
                )}
                <div className="proj-icon" aria-hidden="true"><HAUXHUNT.icon /></div>
                <span className="proj-feature-badge">Flagship · Product ownership</span>
                <h3 className="proj-name">{HAUXHUNT.name}</h3>
                <p className="proj-role">{HAUXHUNT.role}</p>
                <p className="proj-desc">{HAUXHUNT.body}</p>
                <p className="proj-problem"><b>Problem: </b>{HAUXHUNT.problem}</p>
                <ul className="points">
                  {HAUXHUNT.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
                <div className="proj-links">
                  <a href="#contact" className="proj-more">Ask me about it <span aria-hidden="true">→</span></a>
                  <span className="proj-code">Private codebase</span>
                </div>
              </article>

              <div className="proj-grid">
                {PROJECTS.map((p) => (
                  <div key={p.name} className="proj-card">
                    {p.image && (
                      <div className="proj-shot">
                        <Image src={p.image} alt={p.imageAlt ?? ""} fill sizes="(max-width: 720px) 100vw, 280px" />
                      </div>
                    )}
                    <div className="proj-icon" aria-hidden="true"><p.icon /></div>
                    <h3 className="proj-name">{p.name}</h3>
                    <p className="proj-role">{p.role}</p>
                    <p className="proj-desc">{p.body}</p>
                    <p className="proj-problem"><b>Problem: </b>{p.problem}</p>
                    <p className="proj-stack-line">{p.stack.join(" · ")}</p>
                    <div className="proj-links">
                      <a href="#contact" className="proj-more">Learn more <span aria-hidden="true">→</span></a>
                      {p.codeHref && (
                        <a href={p.codeHref} target="_blank" rel="noopener noreferrer" className="proj-code">View code ↗</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="reveal">
          <div className="shell">
            <p className="eyebrow">03 / Stack</p>
            <h2 className="sec-head">What I work with.</h2>
            <div className="skills-grid sec-body">
              {SKILLS.map((s) => (
                <div key={s.title} className={s.exploring ? "skill-card exploring" : "skill-card"}>
                  <div className="skill-card-head">
                    <h3>{s.title}</h3>
                    {s.exploring && <span className="skill-tag">Learning</span>}
                  </div>
                  <p>{s.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CURRENTLY ── */}
        <section className="reveal">
          <div className="shell">
            <p className="eyebrow">04 / Right now</p>
            <div className="now-grid sec-body">
              <div className="now-card">
                <p className="eyebrow" style={{ marginBottom: 10 }}>Currently building</p>
                <p>HauxHunt · ChainSight</p>
              </div>
              <div className="now-card">
                <p className="eyebrow" style={{ marginBottom: 10 }}>Currently learning</p>
                <p>Kubernetes · Terraform · Ansible · Nginx · DevSecOps</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="reveal">
          <div className="shell">
            <p className="eyebrow">05 / Experience</p>
            <h2 className="sec-head">Experience &amp; education.</h2>

            <div className="exp-grid sec-body">
              <div className="proj-card">
                <div className="proj-icon" aria-hidden="true"><IconBriefcase /></div>
                <div className="exp-card-top">
                  <h3 className="proj-name">Chief Technology Officer</h3>
                  <span className="exp-date"><span className="status">Active</span> July 2026 to Present</span>
                </div>
                <p className="exp-org">HauxHunt · property rental platform for Rwanda and Nigeria, covering web, iOS and Android.</p>
                <ul className="points">
                  <li>Own backend architecture and API design across tenant search, listings, messaging, notifications and identity verification.</li>
                  <li>Set direction for trust &amp; verification, offline-first handling, and coordinate backend, frontend, mobile and DevOps work.</li>
                </ul>
              </div>

              <div className="proj-card">
                <div className="proj-icon" aria-hidden="true"><IconCap /></div>
                <div className="exp-card-top">
                  <h3 className="proj-name">BSc Software Engineering</h3>
                  <span className="exp-date">Expected Nov 2027</span>
                </div>
                <p className="exp-org">Adventist University of Central Africa, Kigali, Rwanda.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="contact" id="contact">
          <div className="shell">
            <p className="eyebrow">06 / Contact</p>
            <h2 className="display">
              Let&apos;s build<br />something useful.
            </h2>
            <p className="contact-lede">
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
                <a href="tel:+250798686064">+250 798 686 064</a>
              </div>
              <div>
                <span>CV</span>
                <a href="/cv.pdf" download="Esther-Ingabire-CV.pdf">Download CV (PDF)</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <div className="shell">
        <footer>
          <span>Esther Ingabire · Kigali, Rwanda</span>
          <span>© 2026</span>
        </footer>
      </div>
    </>
  );
}
