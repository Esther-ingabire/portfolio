import type { Metadata } from "next";
import PrintButton from "./print-button";

export const metadata: Metadata = {
  title: "Esther Ingabire CV",
};

function Chips({ items }: { items: string }) {
  return (
    <div className="chip-row">
      {items.split("·").map((t) => (
        <span className="chip" key={t.trim()}>{t.trim()}</span>
      ))}
    </div>
  );
}

export default function CV() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --orange: #FF6A1A;
          --void: #0C0A09;
          --dim: #6B6560;
          --line: #E2DBD4;
          --surface: #FAF8F6;
          --f-display: 'Archivo', system-ui, sans-serif;
          --f-body: 'Source Serif 4', Georgia, serif;
        }

        html, body {
          background: #EDE8E2;
          color: var(--void);
          font-family: var(--f-body);
          font-size: 10.5pt;
          line-height: 1.55;
          -webkit-font-smoothing: antialiased;
        }

        .page {
          max-width: 780px;
          margin: 0 auto;
          padding: 92px 56px 64px;
          background: #fff;
        }

        .print-bar {
          position: fixed;
          top: 18px;
          right: 24px;
          z-index: 99;
          display: flex;
          gap: 8px;
        }
        .print-bar button, .print-bar a {
          font-family: var(--f-display);
          font-weight: 700;
          font-size: 13px;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          letter-spacing: 0.02em;
          display: inline-block;
        }
        .print-bar button {
          background: var(--orange);
          color: #fff;
        }
        .print-bar button:hover { background: #e05510; }
        .print-bar a {
          background: #fff;
          color: var(--void);
          border: 1.5px solid var(--void);
          padding: 8.5px 20px;
        }
        .print-bar a:hover { background: var(--void); color: #fff; }
        @media print { .print-bar { display: none; } }

        .cv-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          border-bottom: 2.5px solid var(--void);
          padding-bottom: 18px;
          margin-bottom: 26px;
        }
        .cv-name {
          font-family: var(--f-display);
          font-weight: 800;
          font-size: 27pt;
          letter-spacing: -0.03em;
          line-height: 1;
        }
        .cv-name span { color: var(--orange); }
        .cv-title {
          font-family: var(--f-display);
          font-weight: 600;
          font-size: 10.5pt;
          color: var(--dim);
          margin-top: 6px;
        }
        .cv-contact {
          font-family: var(--f-display);
          font-size: 8.75pt;
          color: var(--dim);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 5px;
          text-align: right;
          white-space: nowrap;
        }
        .cv-contact a { color: var(--void); text-decoration: none; font-weight: 600; }

        .section { margin-top: 24px; }
        .section-title {
          font-family: var(--f-display);
          font-weight: 800;
          font-size: 7.5pt;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #fff;
          background: var(--void);
          display: inline-block;
          padding: 3px 9px;
          margin-bottom: 14px;
        }

        .chip-row { display: flex; flex-wrap: wrap; gap: 5px 6px; }
        .chip {
          font-family: var(--f-display);
          font-size: 8pt;
          font-weight: 600;
          color: #3A322B;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 3px;
          padding: 3px 8px;
          white-space: nowrap;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 128px 1fr;
          gap: 10px 16px;
          align-items: start;
        }
        .skill-label {
          font-family: var(--f-display);
          font-weight: 700;
          font-size: 9pt;
          color: var(--void);
          padding-top: 3px;
        }

        .cv-entry {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 0 16px;
          margin-bottom: 20px;
          break-inside: avoid;
          page-break-inside: avoid;
        }
        .section-title { break-after: avoid; }
        .section > .cv-entry:last-child { margin-bottom: 0; }
        .entry-title {
          font-family: var(--f-display);
          font-weight: 800;
          font-size: 11pt;
          letter-spacing: -0.015em;
        }
        .entry-sub {
          font-family: var(--f-display);
          font-size: 9pt;
          color: var(--dim);
          margin-top: 3px;
        }
        .entry-sub b { color: var(--void); font-weight: 600; }
        .entry-date {
          font-family: var(--f-display);
          font-weight: 600;
          font-size: 8.25pt;
          color: var(--orange);
          white-space: nowrap;
          text-align: right;
          padding-top: 3px;
        }
        .entry-body { grid-column: 1 / -1; margin-top: 9px; }
        .entry-body .chip-row { margin-bottom: 9px; }

        ul.pts { list-style: none; padding: 0; }
        ul.pts li {
          position: relative;
          padding-left: 15px;
          margin-bottom: 5px;
          font-size: 9.25pt;
          color: #2A2420;
        }
        ul.pts li:last-child { margin-bottom: 0; }
        ul.pts li::before {
          content: '';
          position: absolute;
          left: 1px;
          top: 0.58em;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--orange);
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
          font-size: 9.75pt;
          color: #2A2420;
          max-width: 68ch;
          line-height: 1.62;
        }

        @media print {
          @page { size: A4; margin: 9mm 14mm; }
          html, body { font-size: 8pt; line-height: 1.32; background: #fff; }
          .page { padding: 0; max-width: 100%; }
          .cv-header { padding-bottom: 7px; margin-bottom: 9px; align-items: baseline; }
          .cv-name { font-size: 18pt; }
          .cv-title { font-size: 8.25pt; margin-top: 2px; }
          .cv-contact { flex-direction: row; flex-wrap: wrap; justify-content: flex-end; gap: 2px 10px; font-size: 6.85pt; }
          .section { margin-top: 7px; }
          .section-title { font-size: 6.25pt; padding: 2px 7px; margin-bottom: 6px; }
          .skills-grid { gap: 3px 12px; }
          .skill-label { font-size: 7.1pt; padding-top: 1px; }
          .chip { font-size: 6.35pt; padding: 1px 5px; border-radius: 2px; }
          .chip-row { gap: 2px 4px; }
          .cv-entry { margin-bottom: 9px; }
          .entry-title { font-size: 8.1pt; }
          .entry-sub, .entry-date { font-size: 6.85pt; }
          .entry-body { margin-top: 3px; }
          .entry-body .chip-row { margin-bottom: 3px; }
          ul.pts li { font-size: 7.1pt; margin-bottom: 2px; padding-left: 11px; }
          .profile-text { font-size: 7.35pt; line-height: 1.4; }
          .edu-cgpa { font-size: 7.1pt; padding: 1px 6px; }
          a { color: inherit !important; }
        }
      `}</style>

      <PrintButton />

      <div className="page">

        <header className="cv-header">
          <div>
            <div className="cv-name">Esther <span>Ingabire</span></div>
            <div className="cv-title">Backend Engineer</div>
          </div>
          <div className="cv-contact">
            <span>Kigali, Rwanda</span>
            <a href="tel:+250798686064">+250 798 686 064</a>
            <a href="mailto:esther.ingabire777@gmail.com">esther.ingabire777@gmail.com</a>
            <a href="https://github.com/Esther-ingabire">github.com/Esther-ingabire</a>
          </div>
        </header>

        <div className="section">
          <div className="section-title">Profile</div>
          <p className="profile-text">
            Backend-focused engineer who builds systems end to end: REST APIs, data pipelines, mobile clients and IoT telemetry.
            Sole developer of ChainSight, an agricultural supply-chain analytics platform drawing deployment interest from Rwandan
            cooperatives and the Ministry of Agriculture, and CTO of HauxHunt, a property rental platform in development.
            Strongest in Python/Django and Java/Spring Boot, with working Go, React and Docker experience.
          </p>
        </div>

        <div className="section">
          <div className="section-title">Skills</div>
          <div className="skills-grid">
            <span className="skill-label">Languages</span>
            <Chips items="Java · Python · Go · JavaScript · TypeScript · SQL" />
            <span className="skill-label">Backend</span>
            <Chips items="Spring Boot · Django REST Framework · REST API Design · Hibernate/JPA · Celery · WebSockets · JWT" />
            <span className="skill-label">Frontend &amp; Mobile</span>
            <Chips items="React · Next.js · React Native (Expo) · Android (Java)" />
            <span className="skill-label">Data</span>
            <Chips items="PostgreSQL · Redis" />
            <span className="skill-label">Cloud &amp; Infrastructure</span>
            <Chips items="Docker · Linux · AWS · Git · GitHub · GitHub Actions · CI/CD · Maven · Postman" />
          </div>
        </div>

        <div className="section">
          <div className="section-title">Experience</div>
          <div className="cv-entry">
            <div>
              <div className="entry-title">Chief Technology Officer</div>
              <div className="entry-sub"><b>HauxHunt</b> · Property rental platform for Rwanda and Nigeria · web, iOS and Android · in development</div>
            </div>
            <div className="entry-date">July 2026 to Present</div>
            <div className="entry-body">
              <ul className="pts">
                <li>Own backend architecture and API design covering tenant search, applications, landlord listing management, messaging, notifications and identity verification.</li>
                <li>Set technical direction for trust &amp; verification, offline handling for intermittent-connectivity markets, and coordinate backend, frontend, mobile and DevOps work.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-title">Projects</div>

          <div className="cv-entry">
            <div>
              <div className="entry-title">ChainSight: Agricultural Supply-Chain Analytics</div>
            </div>
            <div className="entry-date">Solo · Full-Stack</div>
            <div className="entry-body">
              <Chips items="Django REST · PostgreSQL · Redis · Celery · React · React Native · ESP32 + DHT22" />
              <ul className="pts">
                <li>QR-traceable produce tracking across 8 role-based dashboards, with a loss-risk scoring engine fed by live GPS and cold-chain telemetry, drawing deployment interest from cooperatives and Rwanda&rsquo;s Ministry of Agriculture (MINAGRI).</li>
              </ul>
            </div>
          </div>

          <div className="cv-entry">
            <div>
              <div className="entry-title">Rides: Ride-Hailing Backend</div>
            </div>
            <div className="entry-date">Backend Contributor</div>
            <div className="entry-body">
              <Chips items="Go · PostgreSQL + PostGIS · Redis · WebSockets · MTN MoMo / Airtel Money" />
              <ul className="pts">
                <li>Real-time driver matching, in-app fare negotiation and live trip tracking over WebSockets for motorcycles, cabs and trucks, with mobile money payment integration.</li>
              </ul>
            </div>
          </div>

          <div className="cv-entry">
            <div>
              <div className="entry-title">NFC Tap-to-Pay: Android Wallet</div>
            </div>
            <div className="entry-date">Solo · Full-Stack</div>
            <div className="entry-body">
              <Chips items="Android (Java) · NFC/HCE · Spring Boot · PostgreSQL" />
              <ul className="pts">
                <li>Stores cards from several banks and pays in a single tap using host card emulation, backed by a Spring Boot and PostgreSQL service.</li>
              </ul>
            </div>
          </div>

          <div className="cv-entry">
            <div>
              <div className="entry-title">MultiVerse AI: All-in-One AI Workspace</div>
            </div>
            <div className="entry-date">Solo · Full-Stack</div>
            <div className="entry-body">
              <Chips items="Spring Boot · Next.js · TypeScript · PostgreSQL · JWT" />
              <ul className="pts">
                <li>Multi-model chat (ChatGPT, Claude, Gemini, Grok, DeepSeek), generative tools for text, image, audio and video, and a credit-based billing system.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-title">Education</div>
          <div className="cv-entry">
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
        </div>

      </div>
    </>
  );
}
