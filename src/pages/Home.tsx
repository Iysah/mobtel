import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import heroImg from '../assets/hero.png'

// ---------------------------------------------------------------------------
// Inline SVG icons for the Services section
// ---------------------------------------------------------------------------

function IconClock() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function IconTruck() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 5v3h-7V8Z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

function IconBoxes() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <line x1="3.27" y1="6.96" x2="12" y2="12.01" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
      <line x1="20.73" y1="6.96" x2="12" y2="12.01" />
    </svg>
  )
}

function IconGlobe() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const SERVICES = [
  {
    id: 'same-day',
    icon: <IconClock />,
    name: 'Same-Day Delivery',
    description: 'Delivered within hours. Perfect for urgent documents and gifts within the city.',
    comingSoon: false,
  },
  {
    id: 'next-day',
    icon: <IconCalendar />,
    name: 'Next-Day Delivery',
    description: 'Book today, arrive tomorrow. Reliable for non-urgent inter-city packages.',
    comingSoon: false,
  },
  {
    id: 'interstate',
    icon: <IconTruck />,
    name: 'Interstate Shipping',
    description: 'Door-to-door between states. Tracked at every checkpoint.',
    comingSoon: false,
  },
  {
    id: 'bulk',
    icon: <IconBoxes />,
    name: 'Bulk & Business',
    description: 'Volume discounts and dedicated account management for e-commerce sellers and businesses.',
    comingSoon: false,
  },
  {
    id: 'international',
    icon: <IconGlobe />,
    name: 'International Shipping',
    description: 'Cross-border delivery to select destinations. Customs-cleared and insured.',
    comingSoon: true,
  },
]

const HOW_STEPS = [
  {
    number: '1',
    title: 'Book',
    description: 'Choose your delivery type, enter pickup and drop-off details, and get an instant price quote.',
  },
  {
    number: '2',
    title: 'Drop Off or Pick Up',
    description: 'Drop your package at the nearest Mobtel agent location or schedule a home pickup.',
  },
  {
    number: '3',
    title: 'Delivered',
    description: 'Your recipient gets real-time updates and a delivery notification the moment it arrives.',
  },
]

const STATS = [
  { value: '50,000+', label: 'Packages Delivered' },
  { value: '98.7%', label: 'On-Time Delivery Rate' },
  { value: '30+', label: 'Cities Covered' },
  { value: '24/7', label: 'Customer Support' },
]

const TESTIMONIALS = [
  {
    quote:
      'Mobtel has completely changed how I handle shipping for my online store. Packages arrive on time and customers love the tracking updates.',
    name: 'Amaka Obi',
    role: 'E-commerce Seller, Lagos',
    initials: 'AO',
  },
  {
    quote:
      'I sent an urgent document from Abuja to Port Harcourt and it arrived within hours. The driver called me to confirm pickup. Highly impressed.',
    name: 'Tunde Afolabi',
    role: 'Corporate Client, Abuja',
    initials: 'TA',
  },
  {
    quote:
      'The app makes it so easy to book. I use Mobtel for all my business deliveries now — interstate and same-day. Great customer service too.',
    name: 'Ngozi Eze',
    role: 'SME Owner, Enugu',
    initials: 'NE',
  },
]

const CITIES = [
  'Lagos',
  'Abuja',
  'Port Harcourt',
  'Kano',
  'Ibadan',
  'Enugu',
  'Kaduna',
  'Benin City',
  'Owerri',
  'Calabar',
  'Uyo',
  'Warri',
  'Jos',
  'Ilorin',
]

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Home() {
  const [trackingInput, setTrackingInput] = useState('')
  const navigate = useNavigate()

  function handleTrackSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = trackingInput.trim()
    if (!trimmed) return
    navigate(`/track?q=${encodeURIComponent(trimmed)}`)
  }

  return (
    <>
      <style>{`
        /* ---- Shared wrapper ---- */
        .home__inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-6);
        }

        /* ================================================================
           Section 1 — Hero
           ================================================================ */
        .home__hero {
          background: var(--color-primary);
          width: 100%;
        }

        .home__hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-16) var(--space-6);
          min-height: 560px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-12);
        }

        .home__hero-text {
          flex: 1;
          min-width: 0;
        }

        .home__hero-headline {
          font-size: clamp(2.25rem, 5vw, 3.75rem);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.03em;
          line-height: 1.1;
        }

        .home__hero-sub {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 480px;
          line-height: 1.6;
          margin-top: var(--space-4);
        }

        .home__hero-ctas {
          display: flex;
          flex-direction: row;
          gap: var(--space-3);
          margin-top: var(--space-8);
          flex-wrap: wrap;
        }

        .home__hero-cta-primary {
          display: inline-block;
          background: var(--color-accent);
          color: #ffffff;
          font-weight: 600;
          font-size: 1rem;
          padding: var(--space-3) var(--space-8);
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: opacity 0.15s ease;
          white-space: nowrap;
        }

        .home__hero-cta-primary:hover {
          opacity: 0.88;
        }

        .home__hero-cta-secondary {
          display: inline-block;
          background: transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.35);
          color: #ffffff;
          font-weight: 600;
          font-size: 1rem;
          padding: var(--space-3) var(--space-8);
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: border-color 0.15s ease, background 0.15s ease;
          white-space: nowrap;
        }

        .home__hero-cta-secondary:hover {
          border-color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
        }

        .home__hero-image-col {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .home__hero-image {
          width: 100%;
          max-width: 420px;
          border-radius: var(--radius-lg);
          opacity: 0.9;
        }

        /* ================================================================
           Section 2 — Quick Track Widget
           ================================================================ */
        .home__track {
          background: var(--color-bg-subtle);
          width: 100%;
          padding: var(--space-16) 0;
        }

        .home__track-heading {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: var(--space-4);
        }

        .home__track-form {
          display: flex;
          flex-direction: row;
          gap: var(--space-3);
          flex-wrap: wrap;
        }

        .home__track-input {
          flex: 1;
          min-width: 0;
          padding: var(--space-3) var(--space-4);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          font-family: var(--font-sans);
          font-size: 1rem;
          color: var(--color-text);
          background: #ffffff;
          outline: none;
          transition: border-color 0.15s ease;
        }

        .home__track-input:focus {
          border-color: var(--color-accent);
        }

        .home__track-btn {
          background: var(--color-accent);
          color: #ffffff;
          font-weight: 600;
          font-size: 1rem;
          padding: var(--space-3) var(--space-8);
          border-radius: var(--radius-md);
          border: none;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.15s ease;
          white-space: nowrap;
        }

        .home__track-btn:hover {
          opacity: 0.88;
        }

        /* ================================================================
           Section 3 — Services Overview
           ================================================================ */
        .home__services {
          background: var(--color-bg);
          width: 100%;
          padding: var(--space-16) 0;
        }

        .home__section-heading {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: var(--color-text);
          text-align: center;
          margin-bottom: var(--space-2);
        }

        .home__section-sub {
          font-size: 1rem;
          color: var(--color-text-muted);
          text-align: center;
          margin-bottom: var(--space-12);
        }

        .home__services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-6);
        }

        .home__service-card {
          position: relative;
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .home__service-card:hover {
          border-color: var(--color-accent);
          box-shadow: 0 4px 16px rgba(195, 32, 38, 0.08);
        }

        .home__service-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(195, 32, 38, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .home__service-name {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text);
        }

        .home__service-desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .home__service-badge {
          position: absolute;
          top: var(--space-4);
          right: var(--space-4);
          background: var(--color-text-muted);
          color: #ffffff;
          font-size: 0.6875rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        /* ================================================================
           Section 4 — How It Works
           ================================================================ */
        .home__how {
          background: var(--color-primary);
          width: 100%;
          padding: var(--space-16) 0;
        }

        .home__how-heading {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: var(--space-2);
        }

        .home__how-sub {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          margin-bottom: var(--space-12);
        }

        .home__how-steps {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 0;
        }

        .home__how-step {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .home__how-connector {
          flex: 1;
          border-top: 2px dashed rgba(255, 255, 255, 0.15);
          margin-top: 28px; /* visually center on the step circle */
          align-self: flex-start;
        }

        .home__how-number {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 2px solid var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.375rem;
          font-weight: 700;
          color: var(--color-accent);
          margin-bottom: var(--space-4);
          flex-shrink: 0;
        }

        .home__how-step-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #ffffff;
          text-align: center;
          margin-bottom: var(--space-2);
        }

        .home__how-step-desc {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.65);
          text-align: center;
          line-height: 1.6;
          max-width: 220px;
        }

        /* ================================================================
           Section 5 — Trust Signals / Why Choose Us
           ================================================================ */
        .home__trust {
          background: var(--color-bg);
          width: 100%;
          padding: var(--space-16) 0;
        }

        .home__trust-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: var(--space-6);
          margin-top: var(--space-12);
        }

        .home__trust-tile {
          text-align: center;
          padding: var(--space-8) var(--space-4);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
        }

        .home__trust-stat {
          display: block;
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 700;
          color: var(--color-accent);
          line-height: 1;
        }

        .home__trust-label {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-top: var(--space-2);
          line-height: 1.4;
        }

        /* ================================================================
           Section 6 — Pricing Teaser
           ================================================================ */
        .home__pricing {
          background: var(--color-bg-subtle);
          width: 100%;
          padding: var(--space-16) 0;
        }

        .home__pricing-inner {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          padding: 0 var(--space-6);
        }

        .home__pricing-heading {
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700;
          color: var(--color-text);
        }

        .home__pricing-sub {
          font-size: 1rem;
          color: var(--color-text-muted);
          margin-top: var(--space-3);
          line-height: 1.6;
        }

        .home__pricing-cta {
          display: inline-block;
          background: var(--color-accent);
          color: #ffffff;
          font-weight: 600;
          font-size: 1rem;
          padding: var(--space-3) var(--space-8);
          border-radius: var(--radius-md);
          text-decoration: none;
          margin-top: var(--space-6);
          transition: opacity 0.15s ease;
        }

        .home__pricing-cta:hover {
          opacity: 0.88;
        }

        /* ================================================================
           Section 7 — Testimonials
           ================================================================ */
        .home__testimonials {
          background: var(--color-bg);
          width: 100%;
          padding: var(--space-16) 0;
        }

        .home__testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-6);
          margin-top: var(--space-12);
        }

        .home__testimonial-card {
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .home__testimonial-stars {
          color: var(--color-accent);
          font-size: 1rem;
          letter-spacing: 2px;
          line-height: 1;
        }

        .home__testimonial-quote {
          font-size: 0.9375rem;
          color: var(--color-text);
          line-height: 1.7;
          font-style: italic;
          flex: 1;
        }

        .home__testimonial-author {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          margin-top: auto;
        }

        .home__testimonial-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-muted);
          flex-shrink: 0;
        }

        .home__testimonial-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text);
          line-height: 1.3;
        }

        .home__testimonial-role {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          line-height: 1.3;
        }

        /* ================================================================
           Section 8 — Coverage Map
           ================================================================ */
        .home__coverage {
          background: var(--color-primary);
          width: 100%;
          padding: var(--space-16) 0;
        }

        .home__coverage-heading {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: #ffffff;
          text-align: center;
          margin-bottom: var(--space-2);
        }

        .home__coverage-sub {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .home__coverage-map {
          width: 100%;
          max-width: 800px;
          height: 360px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .home__coverage-map-placeholder {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.35);
        }

        .home__coverage-cities {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-3);
          justify-content: center;
          margin-top: var(--space-8);
        }

        .home__coverage-city {
          padding: var(--space-2) var(--space-4);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-full);
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          white-space: nowrap;
        }

        /* ================================================================
           Section 9 — App Download Banner
           ================================================================ */
        .home__app {
          background: var(--color-bg-subtle);
          width: 100%;
          padding: var(--space-16) 0;
        }

        .home__app-inner {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          padding: 0 var(--space-6);
        }

        .home__app-heading {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: var(--color-text);
        }

        .home__app-sub {
          font-size: 1rem;
          color: var(--color-text-muted);
          margin-top: var(--space-3);
          line-height: 1.6;
        }

        .home__app-buttons {
          display: inline-flex;
          flex-wrap: wrap;
          gap: var(--space-4);
          justify-content: center;
          margin-top: var(--space-6);
        }

        .home__app-store-btn {
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: var(--space-3) var(--space-6);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-text);
          background: #ffffff;
          font-family: var(--font-sans);
          cursor: default;
          opacity: 0.6;
        }

        .home__app-disclaimer {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          margin-top: var(--space-4);
          line-height: 1.5;
        }

        /* ================================================================
           Responsive overrides
           ================================================================ */
        @media (max-width: 768px) {
          .home__hero-inner {
            flex-direction: column;
            min-height: auto;
            padding: var(--space-10) var(--space-6);
            gap: var(--space-8);
          }

          .home__hero-image-col {
            display: none;
          }

          .home__hero-sub {
            max-width: 100%;
          }

          .home__track {
            padding: var(--space-10) 0;
          }

          .home__services {
            padding: var(--space-10) 0;
          }

          .home__how {
            padding: var(--space-10) 0;
          }

          .home__how-steps {
            flex-direction: column;
            align-items: center;
            gap: var(--space-8);
          }

          .home__how-connector {
            display: none;
          }

          .home__how-step-desc {
            max-width: 100%;
          }

          .home__trust {
            padding: var(--space-10) 0;
          }

          .home__pricing {
            padding: var(--space-10) 0;
          }

          .home__testimonials {
            padding: var(--space-10) 0;
          }

          .home__coverage {
            padding: var(--space-10) 0;
          }

          .home__coverage-map {
            height: 220px;
          }

          .home__app {
            padding: var(--space-10) 0;
          }
        }
      `}</style>

      <main>
        {/* ================================================================
            Section 1 — Hero
            ================================================================ */}
        <section className="home__hero" aria-label="Hero">
          <div className="home__hero-inner">
            <div className="home__hero-text">
              <h1 className="home__hero-headline">
                Send Packages Faster Than Ever
              </h1>
              <p className="home__hero-sub">
                Same-day and next-day delivery across cities and states. Book in
                minutes, track in real time.
              </p>
              <div className="home__hero-ctas">
                <Link to="/dashboard" className="home__hero-cta-primary">
                  Send a Package
                </Link>
                <Link to="/track" className="home__hero-cta-secondary">
                  Track a Shipment
                </Link>
              </div>
            </div>
            <div className="home__hero-image-col">
              <img
                src={heroImg}
                alt="Mobtel parcel delivery"
                className="home__hero-image"
              />
            </div>
          </div>
        </section>

        {/* ================================================================
            Section 2 — Quick Track Widget
            ================================================================ */}
        <section className="home__track" aria-label="Quick Track Widget">
          <div className="home__inner">
            <h2 className="home__track-heading">Track Your Shipment</h2>
            <form className="home__track-form" onSubmit={handleTrackSubmit} noValidate>
              <input
                type="text"
                className="home__track-input"
                placeholder="Enter tracking number (e.g. MBT-000123)"
                value={trackingInput}
                onChange={(e) => setTrackingInput(e.target.value)}
                aria-label="Tracking number"
              />
              <button type="submit" className="home__track-btn">
                Track
              </button>
            </form>
          </div>
        </section>

        {/* ================================================================
            Section 3 — Services Overview
            ================================================================ */}
        <section className="home__services" aria-label="Our Delivery Services">
          <div className="home__inner">
            <h2 className="home__section-heading">Our Delivery Services</h2>
            <p className="home__section-sub">
              Fast, flexible options for every shipping need
            </p>
            <div className="home__services-grid">
              {SERVICES.map((service) => (
                <article key={service.id} className="home__service-card">
                  {service.comingSoon && (
                    <span className="home__service-badge" aria-label="Coming soon">
                      Coming Soon
                    </span>
                  )}
                  <div className="home__service-icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h3 className="home__service-name">{service.name}</h3>
                  <p className="home__service-desc">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            Section 4 — How It Works
            ================================================================ */}
        <section className="home__how" aria-label="How It Works">
          <div className="home__inner">
            <h2 className="home__how-heading">How It Works</h2>
            <p className="home__how-sub">Ship a package in three simple steps</p>
            <div className="home__how-steps">
              {HOW_STEPS.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="home__how-step">
                    <div className="home__how-number" aria-hidden="true">
                      {step.number}
                    </div>
                    <h3 className="home__how-step-title">{step.title}</h3>
                    <p className="home__how-step-desc">{step.description}</p>
                  </div>
                  {index < HOW_STEPS.length - 1 && (
                    <div
                      className="home__how-connector"
                      aria-hidden="true"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            Section 5 — Why Choose Us / Trust Signals
            ================================================================ */}
        <section className="home__trust" aria-label="Why Thousands Trust Mobtel">
          <div className="home__inner">
            <h2 className="home__section-heading">Why Thousands Trust Mobtel</h2>
            <div className="home__trust-grid">
              {STATS.map((stat) => (
                <div key={stat.label} className="home__trust-tile">
                  <span className="home__trust-stat">{stat.value}</span>
                  <p className="home__trust-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            Section 6 — Pricing Teaser
            ================================================================ */}
        <section className="home__pricing" aria-label="Pricing Teaser">
          <div className="home__pricing-inner">
            <h2 className="home__pricing-heading">Delivery From &#8358;1,500</h2>
            <p className="home__pricing-sub">
              Transparent pricing with no hidden fees. Get an instant quote before
              you book.
            </p>
            <Link to="/dashboard" className="home__pricing-cta">
              Get a Price Quote
            </Link>
          </div>
        </section>

        {/* ================================================================
            Section 7 — Testimonials
            ================================================================ */}
        <section className="home__testimonials" aria-label="Customer Testimonials">
          <div className="home__inner">
            <h2 className="home__section-heading">What Our Customers Say</h2>
            <p className="home__section-sub">
              Trusted by individuals, SMEs, and growing businesses across Nigeria.
            </p>
            <div className="home__testimonials-grid">
              {TESTIMONIALS.map((t) => (
                <article key={t.name} className="home__testimonial-card">
                  <div className="home__testimonial-stars" aria-label="5 out of 5 stars">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </div>
                  <p className="home__testimonial-quote">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="home__testimonial-author">
                    <div className="home__testimonial-avatar" aria-hidden="true">
                      {t.initials}
                    </div>
                    <div>
                      <p className="home__testimonial-name">{t.name}</p>
                      <p className="home__testimonial-role">{t.role}</p>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            Section 8 — Coverage Map Placeholder
            ================================================================ */}
        <section className="home__coverage" aria-label="Coverage Map">
          <div className="home__inner">
            <h2 className="home__coverage-heading">We Deliver Across Nigeria</h2>
            <p className="home__coverage-sub">
              From Lagos to Kano, Abuja to Port Harcourt — our network is growing
              every week.
            </p>
            <div className="home__coverage-map" role="img" aria-label="Coverage map placeholder">
              <p className="home__coverage-map-placeholder">
                Interactive coverage map coming soon
              </p>
            </div>
            <div className="home__coverage-cities" aria-label="Cities we serve">
              {CITIES.map((city) => (
                <span key={city} className="home__coverage-city">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================
            Section 9 — App Download Banner
            ================================================================ */}
        <section className="home__app" aria-label="Mobile App Download">
          <div className="home__app-inner">
            <h2 className="home__app-heading">Manage Deliveries On the Go</h2>
            <p className="home__app-sub">
              The Mobtel app gives you one-tap booking, live tracking, and instant
              notifications — right from your pocket.
            </p>
            <div className="home__app-buttons">
              <button type="button" className="home__app-store-btn" disabled>
                Download on the App Store
              </button>
              <button type="button" className="home__app-store-btn" disabled>
                Get it on Google Play
              </button>
            </div>
            <p className="home__app-disclaimer">
              Mobile apps coming soon. Manage your shipments from the web dashboard
              in the meantime.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
