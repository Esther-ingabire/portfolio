import type { Metadata } from "next";
import PrintButton from "./print-button";

export const metadata: Metadata = {
  title: "CV — Esther Ingabire",
};

export default function CV() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --orange: #FF6A1A;
          --orange-light: #FFF0E8;
          --void: #0C0A09;
          --ink: #1C1714;
          --dim: #6B6560;
          --line: #E8E2DC;
          --surface: #FAF8F6;
          --f-display: 'Archivo', system-ui, sans-serif;
          --f-body: 'Source Serif 4', Georgia, serif;
        }

        html, body {
          background: #fff;
          color: var(--ink);
          font-family: var(--f-body);
          font-size: 10.5pt;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
        }

        .page {
          max-width: 800px;
          margin: 0 auto;
          padding: 48px 52px 60px;
        }

        /* ── print button ── */
        .print-bar {
          position: fixed;
          top: 18px;
          right: 24px;
          z-index: 99;
        }
        .print-bar button {
          font-family: var(--f-display);
          font-weight: 700;
          font-size: 13px;
          background: var(--orange);
          color: #fff;
          border: none;
          padding: 10px 22px;
          cursor: pointer;
          letter-spacing: 0.02em;
          border-radius: 2px;
        }
        .print-bar button:hover { background: #e05510; }
        @media print { .print-bar { display: none; } }

        /* ── header ── */
        .cv-header {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: end;
          gap: 12px;
          padding-bottom: 20px;
          border-bottom: 3px solid var(--void);
          margin-bottom: 24px;
        }
        .cv-name {
          font-family: var(--f-display);
          font-weight: 800;
          font-size: 28pt;
          letter-spacing: -0.035em;
          line-height: 1;
          color: var(--void);
        }
        .cv-name span { color: var(--orange); }
        .cv-title {
          font-family: var(--f-display);
          font-weight: 600;
          font-size: 10pt;
          color: var(--dim);
          margin-top: 6px;
          letter-spacing: 0.01em;
        }
        .cv-contact {
          text-align: right;
          font-family: var(--f-display);
          font-size: 8.5pt;
          color: var(--dim);
          display: flex;
          flex-direction: column;
          gap: 3px;
          align-items: flex-end;
        }
        .cv-contact a { color: var(--dim); text-decoration: none; }

        /* ── section ── */
        .section { margin-top: 20px; }
        .section-title {
          font-family: var(--f-display);
          font-weight: 800;
          font-size: 7pt;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--orange);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .section-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--line);
        }

        /* ── profile ── */
        .profile-text {
          font-size: 9.5pt;
          color: #2A2420;
          line-height: 1.6;
          max-width: 72ch;
        }

        /* ── skills ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        .skill-row {
          display: flex;
          gap: 8px;
          align-items: baseline;
        }
        .skill-label {
          font-family: var(--f-display);
          font-weight: 700;
          font-size: 8pt;
          color: var(--void);
          white-space: nowrap;
          min-width: 80px;
        }
        .skill-value {
          font-size: 8.5pt;
          color: #3A3330;
        }

        /* ── experience card ── */
        .exp-card {
          border: 1px solid var(--line);
          border-left: 3px solid var(--orange);
          background: var(--surface);
          padding: 14px 16px;
          margin-bottom: 0;
        }
        .exp-card-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 8px;
        }
        .exp-role {
          font-family: var(--f-display);
          font-weight: 800;
          font-size: 10.5pt;
          letter-spacing: -0.015em;
          color: var(--void);
        }
        .exp-company {
          font-family: var(--f-display);
          font-weight: 600;
          font-size: 9pt;
          color: var(--orange);
          margin-top: 2px;
        }
        .exp-sub {
          font-family: var(--f-display);
          font-size: 8pt;
          color: var(--dim);
          margin-top: 2px;
        }
        .exp-date {
          font-family: var(--f-display);
          font-weight: 600;
          font-size: 8pt;
          color: #fff;
          background: var(--void);
          padding: 3px 9px;
          white-space: nowrap;
          flex-shrink: 0;
          align-self: flex-start;
        }

        /* ── project cards grid ── */
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }
        .proj-card {
          border: 1px solid var(--line);
          background: var(--surface);
          padding: 12px 14px;
          position: relative;
          overflow: hidden;
        }
        .proj-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--orange);
        }
        .proj-name {
          font-family: var(--f-display);
          font-weight: 800;
          font-size: 9.5pt;
          letter-spacing: -0.01em;
          color: var(--void);
          margin-bottom: 2px;
        }
        .proj-role-badge {
          display: inline-block;
          font-family: var(--f-display);
          font-size: 7pt;
          font-weight: 700;
          color: var(--orange);
          background: var(--orange-light);
          padding: 1px 7px;
          margin-bottom: 6px;
          letter-spacing: 0.03em;
        }
        .proj-stack {
          font-family: var(--f-display);
          font-size: 7.5pt;
          color: var(--dim);
          margin-bottom: 7px;
          line-height: 1.4;
        }
        ul.pts { list-style: none; padding: 0; }
        ul.pts li {
          position: relative;
          padding-left: 13px;
          margin-bottom: 4px;
          font-size: 8.5pt;
          color: #2A2420;
          line-height: 1.45;
        }
        ul.pts li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.62em;
          width: 6px;
          height: 1px;
          background: var(--orange);
        }

        /* ── education card ── */
        .edu-card {
          border: 1px solid var(--line);
          background: var(--surface);
          padding: 14px 16px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 8px 16px;
          align-items: start;
        }
        .edu-degree {
          font-family: var(--f-display);
          font-weight: 800;
          font-size: 10.5pt;
          letter-spacing: -0.015em;
          color: var(--void);
        }
        .edu-school {
          font-family: var(--f-display);
          font-weight: 600;
          font-size: 9pt;
          color: var(--orange);
          margin-top: 2px;
        }
        .edu-location {
          font-family: var(--f-display);
          font-size: 8pt;
          color: var(--dim);
          margin-top: 2px;
        }
        .edu-right { text-align: right; }
        .edu-cgpa {
          font-family: var(--f-display);
          font-weight: 800;
          font-size: 14pt;
          color: var(--orange);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .edu-cgpa-label {
          font-family: var(--f-display);
          font-size: 7pt;
          color: var(--dim);
          margin-top: 2px;
        }
        .edu-body {
          grid-column: 1 / -1;
          margin-top: 4px;
        }

        /* ── print ── */
        @media print {
          @page { size: A4; margin: 12mm 14mm; }
          html, body { font-size: 8.5pt; }
          .page { padding: 0; max-width: 100%; }
          .cv-header { padding-bottom: 12px; margin-bottom: 16px; }
          .cv-name { font-size: 22pt; }
          .section { margin-top: 13px; }
          .section-title { margin-bottom: 8px; }
          .exp-card { padding: 10px 12px; }
          .proj-card { padding: 9px 11px; }
          .edu-card { padding: 10px 12px; }
          .projects-grid { gap: 6px; }
          ul.pts li { font-size: 7.5pt; margin-bottom: 3px; }
          a { color: inherit !important; }
        }
      `}</style>

      <PrintButton />

      <div className="page">

        {/* HEADER */}
        <header className="cv-header">
          <div>
            <div className="cv-name">Esther <span>Ingabire</span></div>
            <div className="cv-title">Backend &amp; Full-Stack Software Engineer</div>
          </div>
          <div className="cv-contact">
            <span>Kigali, Rwanda</span>
            <a href="tel:+250798686064">+250 798 686 064</a>
            <a href="mailto:esther.ingabire777@gmail.com">esther.ingabire777@gmail.com</a>
            <a href="https://github.com/Esther-ingabire">github.com/Esther-ingabire</a>
          </div>
        </header>

        {/* PROFILE */}
        <section className="section">
          <div className="section-title">Profile</div>
          <p className="profile-text">
            Backend-focused engineer who builds systems end to end: REST APIs, data pipelines, mobile clients and IoT telemetry.
            Sole developer of ChainSight, an agricultural supply-chain analytics platform drawing deployment interest from Rwandan
            cooperatives and the Ministry of Agriculture, and CTO of HauxHunt, a property rental platform in development.
            Strongest in Python/Django and Java/Spring Boot, with working Go, React and Docker experience.
          </p>
        </section>

        {/* SKILLS */}
        <section className="section">
          <div className="section-title">Skills</div>
          <div className="skills-grid">
            <div className="skill-row">
              <span className="skill-label">Languages</span>
              <span className="skill-value">Java · Python · Go · JavaScript · TypeScript · SQL</span>
            </div>
            <div className="skill-row">
              <span className="skill-label">Backend</span>
              <span className="skill-value">Spring Boot · Django REST · Celery · WebSockets · REST APIs</span>
            </div>
            <div className="skill-row">
              <span className="skill-label">Frontend</span>
              <span className="skill-value">React · Next.js · React Native (Expo) · Android (Java)</span>
            </div>
            <div className="skill-row">
              <span className="skill-label">Infrastructure</span>
              <span className="skill-value">PostgreSQL · Redis · Docker · Linux · GitHub Actions · AWS</span>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section">
          <div className="section-title">Experience</div>
          <div className="exp-card">
            <div className="exp-card-head">
              <div>
                <div className="exp-role">Chief Technology Officer</div>
                <div className="exp-company">HauxHunt</div>
                <div className="exp-sub">Property rental platform for Rwanda and Nigeria · web, iOS and Android</div>
              </div>
              <div className="exp-date">July 2026 – Present</div>
            </div>
            <ul className="pts">
              <li>Own the backend architecture and API design covering tenant search, applications, landlord listing management, messaging, notifications and identity verification.</li>
              <li>Set technical direction for trust and verification, offline handling for intermittent-connectivity markets, and role-based admin access.</li>
              <li>Coordinate backend, frontend, mobile and DevOps work, and translate product flows into backend requirements.</li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section">
          <div className="section-title">Projects</div>
          <div className="projects-grid">

            <div className="proj-card">
              <div className="proj-name">ChainSight</div>
              <div className="proj-role-badge">Solo · Full-Stack</div>
              <div className="proj-stack">Django REST · PostgreSQL · Redis · Celery · React · React Native · ESP32</div>
              <ul className="pts">
                <li>QR-code traceability across 8 role-based dashboards from cooperative dispatch to market sale.</li>
                <li>Loss-risk scoring engine and nightly analytics brief fed by live GPS and cold-chain IoT telemetry.</li>
                <li>Deployment interest from cooperatives, distributors and MINAGRI.</li>
              </ul>
            </div>

            <div className="proj-card">
              <div className="proj-name">Rides — Ride-Hailing Backend</div>
              <div className="proj-role-badge">Backend Contributor</div>
              <div className="proj-stack">Go · PostgreSQL + PostGIS · Redis · WebSockets · MTN MoMo / Airtel Money</div>
              <ul className="pts">
                <li>Real-time driver matching and live trip tracking over WebSockets for motorcycles, cabs and trucks.</li>
                <li>In-app fare negotiation with mobile money payment integration.</li>
              </ul>
            </div>

            <div className="proj-card">
              <div className="proj-name">NFC Tap-to-Pay</div>
              <div className="proj-role-badge">Solo · Full-Stack</div>
              <div className="proj-stack">Android (Java) · NFC/HCE · Spring Boot · PostgreSQL</div>
              <ul className="pts">
                <li>Multi-bank card wallet paying in a single tap via host card emulation.</li>
                <li>Backed by a Spring Boot and PostgreSQL service.</li>
              </ul>
            </div>

            <div className="proj-card">
              <div className="proj-name">MultiVerse AI</div>
              <div className="proj-role-badge">Solo · Full-Stack</div>
              <div className="proj-stack">Spring Boot · Next.js · TypeScript · PostgreSQL · JWT</div>
              <ul className="pts">
                <li>All-in-one AI workspace with multi-model chat (ChatGPT, Claude, Gemini, Grok, DeepSeek).</li>
                <li>Generative tools for text, image, audio and video with a credit-based billing system.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* EDUCATION */}
        <section className="section">
          <div className="section-title">Education</div>
          <div className="edu-card">
            <div>
              <div className="edu-degree">BSc Software Engineering</div>
              <div className="edu-school">Adventist University of Central Africa</div>
              <div className="edu-location">Kigali, Rwanda · Expected November 2027</div>
            </div>
            <div className="edu-right">
              <div className="edu-cgpa">17.63<span style={{fontSize:"9pt"}}>/20</span></div>
              <div className="edu-cgpa-label">CGPA</div>
            </div>
            <div className="edu-body">
              <ul className="pts">
                <li>Capstone (Big Data Analytics): household energy prediction on 19,735 records. Best model Random Forest at R² 0.547 and RMSE 67.3 Wh, delivered as an interactive Power BI dashboard. Python, pandas, scikit-learn.</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
