import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

// ---------------------------------------------------------------------------
// Inline SVG icons
// ---------------------------------------------------------------------------

function IconPackage() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function IconArrowRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type StepStatus = 'done' | 'current' | 'pending'

interface TrackStep {
  label: string
  status: StepStatus
  date: string | null
  note: string | null
}

const STEPS: TrackStep[] = [
  { label: 'Booked', status: 'done', date: 'Mon 23 Jun, 09:14', note: null },
  { label: 'Picked Up', status: 'done', date: 'Mon 23 Jun, 11:30', note: null },
  {
    label: 'In Transit',
    status: 'current',
    date: 'Tue 24 Jun, 07:00',
    note: 'Package is en route to destination',
  },
  { label: 'Delivered', status: 'pending', date: null, note: null },
]

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Track() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [trackingInput, setTrackingInput] = useState('')

  const query = searchParams.get('q')?.trim() ?? ''

  // Pre-populate input when URL already has ?q=
  useEffect(() => {
    const q = searchParams.get('q')?.trim() ?? ''
    if (q) {
      setTrackingInput(q)
    }
  }, [searchParams])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = trackingInput.trim()
    if (!trimmed) return
    setSearchParams({ q: trimmed })
  }

  return (
    <>
      <style>{`
        /* ---- Page header ---- */
        .track__header {
          background: var(--color-primary);
        }

        .track__header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-12) var(--space-6);
        }

        .track__header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: var(--space-4);
        }

        .track__header-sub {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        /* ---- Search form ---- */
        .track__search {
          background: var(--color-bg-subtle);
        }

        .track__search-inner {
          max-width: 640px;
          margin: 0 auto;
          padding: var(--space-10) var(--space-6);
        }

        .track__form {
          display: flex;
          gap: var(--space-3);
          flex-wrap: wrap;
        }

        .track__input {
          flex: 1;
          min-width: 0;
          padding: var(--space-3) var(--space-4);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          font-family: var(--font-sans);
          font-size: 1rem;
          color: var(--color-text);
          background: var(--color-bg);
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .track__input:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(195, 32, 38, 0.15);
        }

        .track__btn {
          background: var(--color-accent);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          padding: var(--space-3) var(--space-8);
          border-radius: var(--radius-md);
          border: none;
          cursor: pointer;
          font-family: var(--font-sans);
          white-space: nowrap;
          transition: opacity 0.15s ease;
        }

        .track__btn:hover {
          opacity: 0.88;
        }

        /* ---- Results section ---- */
        .track__results {
          background: var(--color-bg);
        }

        .track__results-inner {
          max-width: 720px;
          margin: 0 auto;
          padding: var(--space-12) var(--space-6);
        }

        /* Empty state */
        .track__empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-5);
          padding: var(--space-16) var(--space-6);
          text-align: center;
        }

        .track__empty-text {
          font-size: 1rem;
          color: var(--color-text-muted);
          max-width: 360px;
          line-height: 1.6;
        }

        /* Summary card */
        .track__summary-card {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          margin-bottom: var(--space-8);
        }

        .track__summary-row {
          display: flex;
          align-items: baseline;
          gap: var(--space-4);
          padding: var(--space-3) 0;
          border-bottom: 1px solid var(--color-border);
        }

        .track__summary-row:last-child {
          border-bottom: none;
        }

        .track__summary-label {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          min-width: 160px;
          flex-shrink: 0;
        }

        .track__summary-value {
          font-size: 0.9375rem;
          color: var(--color-text);
          font-weight: 500;
        }

        .track__status-badge {
          display: inline-flex;
          align-items: center;
          background: rgba(195, 32, 38, 0.1);
          color: var(--color-accent);
          font-size: 0.8125rem;
          font-weight: 600;
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-full);
        }

        /* Timeline / stepper */
        .track__progress-heading {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: var(--space-8);
        }

        .track__steps {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .track__step {
          display: flex;
          gap: var(--space-5);
          position: relative;
        }

        .track__step-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          width: 24px;
        }

        .track__step-circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        .track__step-circle--done {
          background: var(--color-accent);
        }

        .track__step-circle--current {
          background: var(--color-accent);
        }

        .track__step-circle--pending {
          background: var(--color-bg);
          border: 2px solid var(--color-border);
        }

        .track__step-connector {
          width: 2px;
          flex: 1;
          min-height: 32px;
        }

        .track__step-connector--done {
          background: var(--color-accent);
        }

        .track__step-connector--pending {
          background: var(--color-border);
        }

        .track__step-body {
          padding-bottom: var(--space-8);
          flex: 1;
        }

        .track__step-label--done {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-text);
        }

        .track__step-label--current {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-accent);
        }

        .track__step-label--pending {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-text-muted);
        }

        .track__step-date {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          margin-top: var(--space-1);
        }

        .track__step-note {
          font-size: 0.8125rem;
          color: var(--color-accent);
          margin-top: var(--space-1);
        }

        /* Demo note */
        .track__demo-note {
          margin-top: var(--space-10);
          font-size: 0.875rem;
          color: var(--color-text-muted);
          font-style: italic;
          text-align: center;
        }

        /* ---- Responsive ---- */
        @media (max-width: 768px) {
          .track__header h1 {
            font-size: 1.875rem;
          }

          .track__form {
            flex-direction: column;
          }

          .track__btn {
            width: 100%;
          }

          .track__summary-label {
            min-width: 120px;
          }
        }
      `}</style>

      <main>
        {/* Section 1 — Page Header */}
        <section className="track__header" aria-label="Track your shipment">
          <div className="track__header-inner">
            <h1>Track Your Shipment</h1>
            <p className="track__header-sub">
              Enter your Mobtel tracking number to see real-time status and delivery updates.
            </p>
          </div>
        </section>

        {/* Section 2 — Search Form */}
        <section className="track__search" aria-label="Tracking number form">
          <div className="track__search-inner">
            <form className="track__form" onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                className="track__input"
                placeholder="e.g. MBT-000123"
                value={trackingInput}
                onChange={(e) => setTrackingInput(e.target.value)}
                aria-label="Tracking number"
              />
              <button type="submit" className="track__btn">
                Track
              </button>
            </form>
          </div>
        </section>

        {/* Section 3 — Results */}
        <section className="track__results" aria-label="Tracking results">
          <div className="track__results-inner">
            {query === '' ? (
              <div className="track__empty" role="status">
                <IconPackage />
                <p className="track__empty-text">
                  Enter your tracking number above to see shipment status.
                </p>
              </div>
            ) : (
              <>
                {/* A. Summary Card */}
                <div className="track__summary-card" aria-label="Shipment summary">
                  <div className="track__summary-row">
                    <span className="track__summary-label">Tracking Number</span>
                    <span className="track__summary-value">
                      <strong>{query}</strong>
                    </span>
                  </div>
                  <div className="track__summary-row">
                    <span className="track__summary-label">Status</span>
                    <span className="track__status-badge">In Transit</span>
                  </div>
                  <div className="track__summary-row">
                    <span className="track__summary-label">Route</span>
                    <span className="track__summary-value">Lagos &rarr; Abuja</span>
                  </div>
                  <div className="track__summary-row">
                    <span className="track__summary-label">Estimated Delivery</span>
                    <span className="track__summary-value">Wednesday, 25 June 2026</span>
                  </div>
                </div>

                {/* B. Timeline */}
                <h2 className="track__progress-heading">Shipment Progress</h2>
                <div className="track__steps" role="list">
                  {STEPS.map((step, i) => {
                    const isLast = i === STEPS.length - 1
                    const connectorStatus =
                      step.status === 'done' ? 'done' : 'pending'
                    return (
                      <div className="track__step" key={step.label} role="listitem">
                        <div className="track__step-left">
                          <div className={`track__step-circle track__step-circle--${step.status}`}>
                            {step.status === 'done' && <IconCheck />}
                            {step.status === 'current' && <IconArrowRight />}
                          </div>
                          {!isLast && (
                            <div
                              className={`track__step-connector track__step-connector--${connectorStatus}`}
                            />
                          )}
                        </div>
                        <div className="track__step-body">
                          <p className={`track__step-label--${step.status}`}>{step.label}</p>
                          {step.date && <p className="track__step-date">{step.date}</p>}
                          {step.note && <p className="track__step-note">{step.note}</p>}
                        </div>
                      </div>
                    )
                  })}
                </div>

                <p className="track__demo-note">
                  This is a demo. Live tracking requires a real shipment booking.
                </p>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
