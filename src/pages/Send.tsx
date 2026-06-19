import { useState } from 'react'
import { Link } from 'react-router-dom'

// ---------------------------------------------------------------------------
// Inline SVG icons
// ---------------------------------------------------------------------------

function IconCheckCircle() {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

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

const PRICE_RANGES: Record<string, string> = {
  'same-day': '₦1,500 – ₦3,000',
  'next-day': '₦2,500 – ₦5,000',
  interstate: '₦5,000 – ₦15,000',
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface SendFormState {
  senderName: string
  senderPhone: string
  pickupAddress: string
  pickupCity: string
  recipientName: string
  recipientPhone: string
  deliveryAddress: string
  deliveryCity: string
  packageDescription: string
  weight: string
  deliveryType: string
  specialInstructions: string
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Send() {
  const [form, setForm] = useState<SendFormState>({
    senderName: '',
    senderPhone: '',
    pickupAddress: '',
    pickupCity: '',
    recipientName: '',
    recipientPhone: '',
    deliveryAddress: '',
    deliveryCity: '',
    packageDescription: '',
    weight: '',
    deliveryType: '',
    specialInstructions: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const digits = Math.floor(100000 + Math.random() * 900000).toString()
    setTrackingNumber(`MBT-${digits}`)
    setSubmitted(true)
  }

  function handleBookAnother() {
    setForm({
      senderName: '',
      senderPhone: '',
      pickupAddress: '',
      pickupCity: '',
      recipientName: '',
      recipientPhone: '',
      deliveryAddress: '',
      deliveryCity: '',
      packageDescription: '',
      weight: '',
      deliveryType: '',
      specialInstructions: '',
    })
    setSubmitted(false)
    setTrackingNumber('')
  }

  return (
    <>
      <style>{`
        /* ---- Hero ---- */
        .send__hero {
          background: var(--color-primary);
        }

        .send__hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-12) var(--space-6);
        }

        .send__hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: var(--space-4);
        }

        .send__hero-sub {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          max-width: 560px;
        }

        /* ---- Form section ---- */
        .send__form-section {
          background: var(--color-bg-subtle);
        }

        .send__form-inner {
          max-width: 720px;
          margin: 0 auto;
          padding: var(--space-12) var(--space-6);
        }

        /* ---- Success panel ---- */
        .send__success {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-10);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-5);
        }

        .send__success-heading {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text);
        }

        .send__tracking-label {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
        }

        .send__tracking-number {
          display: block;
          color: var(--color-accent);
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: var(--space-2);
        }

        .send__success-note {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        .send__success-buttons {
          display: flex;
          gap: var(--space-4);
          flex-wrap: wrap;
          justify-content: center;
          margin-top: var(--space-2);
        }

        .send__btn-primary {
          display: inline-block;
          background: var(--color-accent);
          color: #ffffff;
          font-size: 0.9375rem;
          font-weight: 600;
          padding: var(--space-3) var(--space-6);
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: opacity 0.15s ease;
        }

        .send__btn-primary:hover {
          opacity: 0.88;
        }

        .send__btn-secondary {
          display: inline-block;
          background: transparent;
          color: var(--color-text);
          border: 1.5px solid var(--color-border);
          font-size: 0.9375rem;
          font-weight: 600;
          padding: var(--space-3) var(--space-6);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-family: var(--font-sans);
          transition: border-color 0.15s ease, background 0.15s ease;
        }

        .send__btn-secondary:hover {
          border-color: var(--color-text);
          background: var(--color-bg-subtle);
        }

        /* ---- Form groups ---- */
        .send__group {
          margin-bottom: var(--space-10);
        }

        .send__group-heading {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: var(--space-6);
          padding-bottom: var(--space-4);
          border-bottom: 1px solid var(--color-border);
        }

        .send__fields {
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }

        .send__label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-text);
          margin-bottom: var(--space-2);
        }

        .send__input,
        .send__select,
        .send__textarea {
          width: 100%;
          padding: var(--space-3) var(--space-4);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          font-family: var(--font-sans);
          font-size: 1rem;
          color: var(--color-text);
          background: var(--color-bg);
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }

        .send__input:focus,
        .send__select:focus,
        .send__textarea:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(195, 32, 38, 0.15);
        }

        .send__textarea {
          resize: vertical;
        }

        /* ---- Price estimate ---- */
        .send__price-box {
          background: rgba(195, 32, 38, 0.06);
          border: 1px solid rgba(195, 32, 38, 0.2);
          border-radius: var(--radius-md);
          padding: var(--space-4) var(--space-6);
          margin-bottom: var(--space-8);
        }

        .send__price-empty {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
        }

        .send__price-text {
          font-size: 0.9375rem;
          color: var(--color-text);
        }

        .send__price-note {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          margin-top: var(--space-2);
          line-height: 1.5;
        }

        /* ---- Submit ---- */
        .send__submit {
          width: 100%;
          background: var(--color-accent);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          padding: var(--space-3) var(--space-4);
          border-radius: var(--radius-md);
          border: none;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.15s ease;
        }

        .send__submit:hover {
          opacity: 0.88;
        }

        /* ---- Responsive ---- */
        @media (max-width: 768px) {
          .send__hero h1 {
            font-size: 1.875rem;
          }

          .send__success-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .send__btn-primary,
          .send__btn-secondary {
            text-align: center;
          }
        }
      `}</style>

      <main>
        {/* Section 1 — Hero */}
        <section className="send__hero" aria-label="Send a package">
          <div className="send__hero-inner">
            <h1>Send a Package</h1>
            <p className="send__hero-sub">
              Fill in the details below to book a pickup. You&apos;ll get a tracking number
              instantly after confirming.
            </p>
          </div>
        </section>

        {/* Section 2 — Form */}
        <section className="send__form-section" aria-label="Booking form">
          <div className="send__form-inner">
            {submitted ? (
              <div className="send__success" role="status">
                <IconCheckCircle />
                <h2 className="send__success-heading">Shipment Booked!</h2>
                <div>
                  <p className="send__tracking-label">Your tracking number:</p>
                  <strong className="send__tracking-number">{trackingNumber}</strong>
                </div>
                <p className="send__success-note">
                  Save this number to track your shipment on the Track page.
                </p>
                <div className="send__success-buttons">
                  <Link
                    to={`/track?q=${trackingNumber}`}
                    className="send__btn-primary"
                  >
                    Track Shipment
                  </Link>
                  <button
                    type="button"
                    className="send__btn-secondary"
                    onClick={handleBookAnother}
                  >
                    Book Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Group 1 — Sender Details */}
                <div className="send__group">
                  <h2 className="send__group-heading">Sender Details</h2>
                  <div className="send__fields">
                    <div>
                      <label htmlFor="send-senderName" className="send__label">
                        Full Name
                      </label>
                      <input
                        id="send-senderName"
                        type="text"
                        name="senderName"
                        className="send__input"
                        value={form.senderName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="send-senderPhone" className="send__label">
                        Phone
                      </label>
                      <input
                        id="send-senderPhone"
                        type="tel"
                        name="senderPhone"
                        className="send__input"
                        placeholder="+234..."
                        value={form.senderPhone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="send-pickupAddress" className="send__label">
                        Pickup Address
                      </label>
                      <textarea
                        id="send-pickupAddress"
                        name="pickupAddress"
                        className="send__textarea"
                        rows={3}
                        value={form.pickupAddress}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="send-pickupCity" className="send__label">
                        City
                      </label>
                      <select
                        id="send-pickupCity"
                        name="pickupCity"
                        className="send__select"
                        value={form.pickupCity}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select city</option>
                        {CITIES.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Group 2 — Recipient Details */}
                <div className="send__group">
                  <h2 className="send__group-heading">Recipient Details</h2>
                  <div className="send__fields">
                    <div>
                      <label htmlFor="send-recipientName" className="send__label">
                        Full Name
                      </label>
                      <input
                        id="send-recipientName"
                        type="text"
                        name="recipientName"
                        className="send__input"
                        value={form.recipientName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="send-recipientPhone" className="send__label">
                        Phone
                      </label>
                      <input
                        id="send-recipientPhone"
                        type="tel"
                        name="recipientPhone"
                        className="send__input"
                        value={form.recipientPhone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="send-deliveryAddress" className="send__label">
                        Delivery Address
                      </label>
                      <textarea
                        id="send-deliveryAddress"
                        name="deliveryAddress"
                        className="send__textarea"
                        rows={3}
                        value={form.deliveryAddress}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="send-deliveryCity" className="send__label">
                        City
                      </label>
                      <select
                        id="send-deliveryCity"
                        name="deliveryCity"
                        className="send__select"
                        value={form.deliveryCity}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select city</option>
                        {CITIES.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Group 3 — Package Details */}
                <div className="send__group">
                  <h2 className="send__group-heading">Package Details</h2>
                  <div className="send__fields">
                    <div>
                      <label htmlFor="send-packageDescription" className="send__label">
                        Description
                      </label>
                      <input
                        id="send-packageDescription"
                        type="text"
                        name="packageDescription"
                        className="send__input"
                        placeholder="e.g. clothing, electronics, documents"
                        value={form.packageDescription}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="send-weight" className="send__label">
                        Weight
                      </label>
                      <select
                        id="send-weight"
                        name="weight"
                        className="send__select"
                        value={form.weight}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select weight</option>
                        <option value="under-1kg">Under 1 kg</option>
                        <option value="1-5kg">1 – 5 kg</option>
                        <option value="5-20kg">5 – 20 kg</option>
                        <option value="20kg-plus">20 kg +</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="send-deliveryType" className="send__label">
                        Delivery Type
                      </label>
                      <select
                        id="send-deliveryType"
                        name="deliveryType"
                        className="send__select"
                        value={form.deliveryType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select delivery type</option>
                        <option value="same-day">Same-Day Delivery</option>
                        <option value="next-day">Next-Day Delivery</option>
                        <option value="interstate">Interstate Shipping</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="send-specialInstructions" className="send__label">
                        Special Instructions (optional)
                      </label>
                      <textarea
                        id="send-specialInstructions"
                        name="specialInstructions"
                        className="send__textarea"
                        rows={3}
                        value={form.specialInstructions}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Price estimate */}
                <div className="send__price-box" aria-live="polite">
                  {form.deliveryType === '' ? (
                    <p className="send__price-empty">
                      Select a delivery type above to see a price estimate.
                    </p>
                  ) : (
                    <>
                      <p className="send__price-text">
                        Estimated price range:{' '}
                        <strong>{PRICE_RANGES[form.deliveryType]}</strong>
                      </p>
                      <p className="send__price-note">
                        Final price confirmed at pickup. Price may vary by distance and package
                        size.
                      </p>
                    </>
                  )}
                </div>

                <button type="submit" className="send__submit">
                  Book Shipment
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
