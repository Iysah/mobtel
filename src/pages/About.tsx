import { Link } from 'react-router-dom'

// ---------------------------------------------------------------------------
// Inline SVG icons
// ---------------------------------------------------------------------------

function IconTarget() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function IconEye() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function IconZap() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

function IconSearch() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function IconHeart() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const TIMELINE = [
  {
    year: '2022 — Founded in Lagos',
    description:
      'Mobtel was founded by a team of logistics veterans and tech builders who were tired of unreliable courier services. We started with 5 riders and a simple web form.',
  },
  {
    year: '2023 — Expanded to 10 Cities',
    description:
      'After proving the model in Lagos, we rolled out to Abuja, Port Harcourt, Ibadan, Kano, and six more cities within 12 months.',
  },
  {
    year: '2024 — 50,000 Packages Delivered',
    description:
      'We crossed our first major milestone, delivering over 50,000 parcels with a 98.7% on-time rate — entirely through word-of-mouth growth.',
  },
  {
    year: '2025 — Interstate Routes Launched',
    description:
      'We connected all 14 cities with interstate door-to-door shipping and real-time checkpoint tracking, opening up a new tier of service for SMEs.',
  },
]

const VALUES = [
  {
    icon: <IconZap />,
    name: 'Speed',
    description: 'We obsess over time. Same-day means same day, every day.',
  },
  {
    icon: <IconShield />,
    name: 'Reliability',
    description:
      'Our riders are verified, our routes are optimised, and our promise is kept.',
  },
  {
    icon: <IconSearch />,
    name: 'Transparency',
    description: 'Every package is trackable. No black boxes, no surprises.',
  },
  {
    icon: <IconHeart />,
    name: 'Care',
    description:
      'Your package matters to us as much as it matters to you. We handle it like our own.',
  },
]

const TEAM = [
  { initials: 'CO', name: 'Chidi Okonkwo', role: 'Co-Founder & CEO' },
  { initials: 'AE', name: 'Adaeze Eze', role: 'Head of Operations' },
  { initials: 'BI', name: 'Babatunde Idowu', role: 'CTO' },
]

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function About() {
  return (
    <>
      <style>{`
        /* ---- Hero ---- */
        .about__hero {
          background: var(--color-primary);
        }

        .about__hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-16) var(--space-6);
        }

        .about__hero h1 {
          font-size: 2.75rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: var(--space-5);
          max-width: 680px;
        }

        .about__hero-sub {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          max-width: 600px;
        }

        /* ---- Mission & Vision ---- */
        .about__mv {
          background: var(--color-bg-subtle);
        }

        .about__mv-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-16) var(--space-6);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-8);
        }

        .about__mv-card {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-8);
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }

        .about__mv-card h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-text);
        }

        .about__mv-card p {
          color: var(--color-text-muted);
          line-height: 1.7;
        }

        /* ---- Timeline / Story ---- */
        .about__story {
          background: var(--color-bg);
        }

        .about__story-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-16) var(--space-6);
        }

        .about__story h2 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-text);
          text-align: center;
          margin-bottom: var(--space-12);
        }

        .about__timeline {
          max-width: 680px;
          margin: 0 auto;
          position: relative;
          padding-left: var(--space-8);
        }

        .about__timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: var(--color-accent);
        }

        .about__timeline-item {
          position: relative;
          margin-bottom: var(--space-10);
        }

        .about__timeline-item:last-child {
          margin-bottom: 0;
        }

        .about__timeline-dot {
          position: absolute;
          left: calc(-1 * var(--space-8) - 5px);
          top: 6px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--color-accent);
          flex-shrink: 0;
        }

        .about__timeline-year {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: var(--space-2);
        }

        .about__timeline-desc {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.7;
        }

        /* ---- Values ---- */
        .about__values {
          background: var(--color-primary);
        }

        .about__values-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-16) var(--space-6);
        }

        .about__values h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: var(--space-12);
        }

        .about__values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-6);
        }

        .about__value-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-lg);
          padding: var(--space-8);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .about__value-name {
          font-size: 1.125rem;
          font-weight: 700;
          color: #ffffff;
        }

        .about__value-desc {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.7;
        }

        /* ---- Team ---- */
        .about__team {
          background: var(--color-bg-subtle);
        }

        .about__team-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-16) var(--space-6);
          text-align: center;
        }

        .about__team h2 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: var(--space-4);
        }

        .about__team-sub {
          color: var(--color-text-muted);
          font-size: 1rem;
          margin-bottom: var(--space-12);
        }

        .about__team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-6);
          max-width: 720px;
          margin: 0 auto;
        }

        .about__team-card {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-8) var(--space-6);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-4);
        }

        .about__avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-text-muted);
          flex-shrink: 0;
        }

        .about__member-name {
          font-size: 1rem;
          font-weight: 700;
          color: var(--color-text);
        }

        .about__member-role {
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }

        /* ---- CTA Strip ---- */
        .about__cta {
          background: var(--color-accent);
        }

        .about__cta-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-16) var(--space-6);
          text-align: center;
        }

        .about__cta h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: var(--space-8);
        }

        .about__cta-buttons {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
        }

        .about__cta-btn-primary {
          display: inline-block;
          background: #ffffff;
          color: var(--color-primary);
          font-size: 1rem;
          font-weight: 600;
          padding: var(--space-3) var(--space-8);
          border-radius: var(--radius-md);
          transition: opacity 0.15s ease;
          text-decoration: none;
        }

        .about__cta-btn-primary:hover {
          opacity: 0.88;
        }

        .about__cta-btn-ghost {
          display: inline-block;
          background: transparent;
          color: #ffffff;
          border: 2px solid #ffffff;
          font-size: 1rem;
          font-weight: 600;
          padding: var(--space-3) var(--space-8);
          border-radius: var(--radius-md);
          transition: background 0.15s ease, opacity 0.15s ease;
          text-decoration: none;
        }

        .about__cta-btn-ghost:hover {
          background: rgba(255, 255, 255, 0.12);
        }

        /* ---- Responsive ---- */
        @media (max-width: 768px) {
          .about__hero h1 {
            font-size: 2rem;
          }

          .about__mv-inner {
            grid-template-columns: 1fr;
          }

          .about__values-grid {
            grid-template-columns: 1fr;
          }

          .about__team-grid {
            grid-template-columns: 1fr;
          }

          .about__cta-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .about__cta-btn-primary,
          .about__cta-btn-ghost {
            text-align: center;
          }
        }
      `}</style>

      <main>
        {/* Section 1 — Hero */}
        <section className="about__hero" aria-label="About Mobtel">
          <div className="about__hero-inner">
            <h1>Delivering Nigeria, One Package at a Time</h1>
            <p className="about__hero-sub">
              Mobtel was built to solve a simple problem — making parcel delivery in Nigeria fast,
              transparent, and dependable. From same-day city runs to interstate shipments, we
              connect senders and recipients across the country.
            </p>
          </div>
        </section>

        {/* Section 2 — Mission & Vision */}
        <section className="about__mv" aria-label="Mission and Vision">
          <div className="about__mv-inner">
            <div className="about__mv-card">
              <IconTarget />
              <h2>Our Mission</h2>
              <p>
                To make parcel delivery in Nigeria as easy as sending a text — fast, affordable,
                and trackable from pickup to doorstep.
              </p>
            </div>
            <div className="about__mv-card">
              <IconEye />
              <h2>Our Vision</h2>
              <p>
                To be the most trusted logistics network in West Africa, powering commerce for
                individuals and businesses at every scale.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — Story / Timeline */}
        <section className="about__story" aria-label="Our Story">
          <div className="about__story-inner">
            <h2>Our Story</h2>
            <div className="about__timeline" role="list">
              {TIMELINE.map((item) => (
                <div className="about__timeline-item" key={item.year} role="listitem">
                  <span className="about__timeline-dot" aria-hidden="true" />
                  <p className="about__timeline-year">{item.year}</p>
                  <p className="about__timeline-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Core Values */}
        <section className="about__values" aria-label="Core Values">
          <div className="about__values-inner">
            <h2>What We Stand For</h2>
            <div className="about__values-grid">
              {VALUES.map((value) => (
                <div className="about__value-card" key={value.name}>
                  {value.icon}
                  <p className="about__value-name">{value.name}</p>
                  <p className="about__value-desc">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Team */}
        <section className="about__team" aria-label="The Team">
          <div className="about__team-inner">
            <h2>The Team Behind Mobtel</h2>
            <p className="about__team-sub">
              A tight-knit crew of logistics experts, engineers, and customer champions.
            </p>
            <div className="about__team-grid">
              {TEAM.map((member) => (
                <div className="about__team-card" key={member.name}>
                  <div className="about__avatar" aria-hidden="true">
                    {member.initials}
                  </div>
                  <p className="about__member-name">{member.name}</p>
                  <p className="about__member-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 — CTA Strip */}
        <section className="about__cta" aria-label="Get started">
          <div className="about__cta-inner">
            <h2>Ready to Send Your First Package?</h2>
            <div className="about__cta-buttons">
              <Link to="/send" className="about__cta-btn-primary">
                Send a Package
              </Link>
              <Link to="/contact" className="about__cta-btn-ghost">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
