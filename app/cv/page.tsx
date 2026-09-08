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
          --void: #0C0A09;
          --bone: #F2EDE8;
          --dim: #6B6560;
          --line: #E2DBD4;
          --f-display: 'Archivo', system-ui, sans-serif;
          --f-body: 'Source Serif 4', Georgia, serif;
        }

        html, body {
          background: #fff;
          color: var(--void);
          font-family: var(--f-body);
          font-size: 10.5pt;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
        }

        .page {
          max-width: 780px;
          margin: 0 auto;
          padding: 52px 56px 64px;
        }

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
          padding: 10px 20px;
          cursor: pointer;
          letter-spacing: 0.02em;
        }
        .print-bar button:hover { background: #e05510; }
        @media print { .print-bar { display: none; } }

        .cv-header {
          border-bottom: 2.5px solid var(--void);
          padding-bottom: 18px;
          margin-bottom: 22px;
        }
        .cv-name {
          font-family: var(--f-display);
          font-weight: 800;
          font-size: 26pt;
          letter-spacing: -0.03em;
          line-height: 1;
          color: var(--void);
        }
        .cv-name span { color: var(--orange); }
        .cv-title {
          font-family: var(--f-display);
          font-weight: 600;
          font-size: 10.5pt;
          color: var(--dim);
          margin-top: 5px;
          letter-spacing: 0.01em;
        }
        .cv-contact {
          margin-top: 10px;
          font-family: var(--f-display);
          font-size: 9pt;
          color: var(--dim);
          display: flex;
          flex-wrap: wrap;
          gap: 4px 18px;
        }
        .cv-contact a { color: var(--dim); text-decoration: none; }
        .cv-contact a:hover { color: var(--orange); }

        .section { margin-top: 22px; }
        .section-title {
          font-family: var(--f-display);
          font-weight: 800;
          font-size: 7.5pt;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--orange);
          border-bottom: 1px solid var(--line);
          padding-bottom: 5px;
          margin-bottom: 14px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 6px 16px;
        }
        .skill-label {
          font-family: var(--f-display);
          font-weight: 700;
          font-size: 9pt;
          color: var(--void);
          padding-top: 1px;
        }
        .skill-value { font-size: 9.5pt; color: #2A2420; }

        .entry {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 0 16px;
          margin-bottom: 16px;
        }
        .entry:last-child { margin-bottom: 0; }
        .entry-title {
          font-family: var(--f-display);
          font-weight: 800;
          font-size: 11pt;
          letter-spacing: -0.015em;
          color: var(--void);
        }
        .entry-sub {
          font-family: var(--f-display);
          font-size: 9pt;
          color: var(--dim);
          margin-top: 2px;
        }
        .entry-sub b { color: var(--void); font-weight: 600; }
        .entry-date {
          font-family: var(--f-display);
          font-size: 9pt;
          color: var(--dim);
          white-space: nowrap;
          text-align: right;
          padding-top: 2px;
        }
        .entry-body { grid-column: 1 / -1; margin-top: 7px; }

        ul.pts { list-style: none; padding: 0; }
        ul.pts li {
          position: relative;
          padding-left: 16px;
          margin-bottom: 5px;
          font-size: 9.5pt;
          color: #2A2420;
        }
        ul.pts li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.65em;
          width: 7px;
          height: 1px;
          background: var(--orange);
        }
        .stack-line {
          font-family: var(--f-display);
          font-size: 8.5pt;
          color: var(--dim);
          margin-bottom: 6px;
        }

        .edu-cgpa {
          display: inline-block;
          font-family: var(--f-display);
          font-weight: 700;
          font-size: 9pt;
          background: var(--orange);
          color: #fff;
          padding: 2px 8px;
          margin-left: 8px;
          vertical-align: middle;
        }

        .profile-text {
          font-size: 9.5pt;
          color: #2A2420;
          max-width: 68ch;
          line-height: 1.6;
        }

        @media print {
          @page { size: A4; margin: 14mm 16mm; }
          html, body { font-size: 8pt; line-height: 1.4; }
          .page { padding: 0; max-width: 100%; }
          .cv-header { padding-bottom: 10px; margin-bottom: 12px; }
          .cv-name { font-size: 20pt; }
          .cv-title { font-size: 8.5pt; margin-top: 3px; }
          .cv-contact { margin-top: 6px; gap: 3px 14px; font-size: 7.5pt; }
          .section { margin-top: 11px; }
          .section-title { font-size: 6.5pt; padding-bottom: 3px; margin-bottom: 8px; }
          .skills-grid { gap: 3px 12px; }
          .skill-label { font-size: 7.5pt; }
          .skill-value { font-size: 7.5pt; }
          .entry { margin-bottom: 8px; gap: 0 12px; }
          .entry-title { font-size: 8.5pt; }
          .entry-sub { font-size: 7.5pt; margin-top: 1px; }
          .entry-date { font-size: 7.5pt; }
          .entry-body { margin-top: 4px; }
          ul.pts li { font-size: 7.5pt; margin-bottom: 3px; padding-left: 12px; }
          .stack-line { font-size: 7pt; margin-bottom: 3px; }
          .profile-text { font-size: 7.5pt; line-height: 1.45; }
          .edu-cgpa { font-size: 7.5pt; padding: 1px 6px; }
          a { color: inherit !important; }
        }
      `}</style>

      <PrintButton />

      <div className="page">

        <header className="cv-header">
          <div className="cv-name">Esther <span>Ingabire</span></div>
          <div className="cv-title">Backend &amp; Full-Stack Software Engineer</div>
          <div className="cv-contact">
            <span>Kigali, Rwanda</span>
            <a href="tel:+250798686064">+250 798 686 064</a>
            <a href="mailto:esther.ingabire777@gmail.com">esther.ingabire777@gmail.com</a>
            <a href="https://github.com/Esther-ingabire" target="_blank" rel="noopener noreferrer">github.com/Esther-ingabire</a>
          </div>
        </header>

        <section className="section">
          <div className="section-title">Profile</div>
          <p className="profile-text">
            Backend-focused engineer who builds systems end to end: REST APIs, data pipelines, mobile clients and IoT telemetry.
            Sole developer of ChainSight, an agricultural supply-chain analytics platform drawing deployment interest from Rwandan
            cooperatives and the Ministry of Agriculture, and CTO of HauxHunt, a property rental platform in development.
            Strongest in Python/Django and Java/Spring Boot, with working Go, React and Docker experience.
          </p>
        </section>

        <section className="section">
          <div className="section-title">Skills</div>
          <div className="skills-grid">
            <span className="skill-label">Languages</span>
            <span className="skill-value">Java · Python · Go · JavaScript · TypeScript · SQL</span>
            <span className="skill-label">Backend</span>
            <span className="skill-value">Spring Boot · Django REST Framework · REST API design · Celery · WebSockets</span>
            <span className="skill-label">Frontend</span>
            <span className="skill-value">React · Next.js · React Native (Expo) · Android (Java)</span>
            <span className="skill-label">Infrastructure</span>
            <span className="skill-value">PostgreSQL · Redis · Docker · Linux · Git · GitHub Actions · AWS</span>
          </div>
        </section>

        <section className="section">
          <div className="section-title">Experience</div>
          <div className="entry">
            <div>
              <div className="entry-title">Chief Technology Officer</div>
              <div className="entry-sub"><b>HauxHunt</b> — Property rental platform for Rwanda and Nigeria · web, iOS and Android · in development</div>
            </div>
            <div className="entry-date">July 2026 – Present</div>
            <div className="entry-body">
              <ul className="pts">
                <li>Own the backend architecture and API design covering tenant search, applications, landlord listing management, messaging, notifications and identity verification.</li>
                <li>Set technical direction for trust and verification, offline handling for intermittent-connectivity markets, and role-based admin access.</li>
                <li>Coordinate backend, frontend, mobile and DevOps work, and translate product flows into backend requirements.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-title">Projects</div>

          <div className="entry">
            <div>
              <div className="entry-title">ChainSight — Agricultural Supply-Chain Analytics</div>
              <div className="stack-line">Django REST · PostgreSQL · Redis · Celery · React · React Native · ESP32 + DHT22</div>
            </div>
            <div className="entry-date">Solo · Full-Stack</div>
            <div className="entry-body">
              <ul className="pts">
                <li>Tracks produce batches from cooperative dispatch through transport and distribution to market sale, with QR-code traceability across 8 role-based dashboards.</li>
                <li>Rule-based loss-risk scoring engine and an automated nightly analytics brief, fed by live GPS and cold-chain telemetry from ESP32/ESP8266 sensors.</li>
                <li>Being prepared for deployment after interest from cooperatives, distributors and Rwanda's Ministry of Agriculture (MINAGRI).</li>
              </ul>
            </div>
          </div>

          <div className="entry">
            <div>
              <div className="entry-title">Rides — Ride-Hailing Backend</div>
              <div className="stack-line">Go · PostgreSQL + PostGIS · Redis · WebSockets · MTN MoMo / Airtel Money</div>
            </div>
            <div className="entry-date">Backend Contributor</div>
            <div className="entry-body">
              <ul className="pts">
                <li>Real-time driver matching, in-app fare negotiation and live trip tracking over WebSockets for motorcycles, cabs and trucks, with mobile money payment integration.</li>
              </ul>
            </div>
          </div>

          <div className="entry">
            <div>
              <div className="entry-title">NFC Tap-to-Pay — Android Wallet</div>
              <div className="stack-line">Android (Java) · NFC/HCE · Spring Boot · PostgreSQL</div>
            </div>
            <div className="entry-date">Solo · Full-Stack</div>
            <div className="entry-body">
              <ul className="pts">
                <li>Stores cards from several banks and pays in a single tap using host card emulation, backed by a Spring Boot and PostgreSQL service.</li>
              </ul>
            </div>
          </div>

          <div className="entry">
            <div>
              <div className="entry-title">MultiVerse AI — All-in-One AI Workspace</div>
              <div className="stack-line">Spring Boot · Next.js · TypeScript · PostgreSQL · JWT</div>
            </div>
            <div className="entry-date">Solo · Full-Stack</div>
            <div className="entry-body">
              <ul className="pts">
                <li>Multi-model chat (ChatGPT, Claude, Gemini, Grok, DeepSeek), generative tools for text, image, audio and video, and a credit-based billing system.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-title">Education</div>
          <div className="entry">
            <div>
              <div className="entry-title">
                BSc Software Engineering
                <span className="edu-cgpa">17.63 / 20</span>
              </div>
              <div className="entry-sub"><b>Adventist University of Central Africa</b> · Kigali, Rwanda</div>
            </div>
            <div className="entry-date">Expected Nov 2027</div>
            <div className="entry-body">
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
