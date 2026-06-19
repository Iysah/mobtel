import { useState } from 'react'

// ---------------------------------------------------------------------------
// Inline SVG icons
// ---------------------------------------------------------------------------

function IconLocation() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.28-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IconCheckCircle() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#16a34a"
      strokeWidth="2"
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
// Types & data
// ---------------------------------------------------------------------------

interface ContactFormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const FAQ_ITEMS = [
  {
    question: 'How do I book a pickup?',
    answer:
      'Log in to your Mobtel dashboard, go to "Send a Package", fill in your sender and recipient details, choose a delivery type, and confirm. A rider will be assigned and you\'ll receive a tracking number instantly.',
  },
  {
    question: 'What is the maximum package weight?',
    answer:
      'We accept packages up to 50 kg per booking. For heavier or bulk shipments, contact our business team at business@mobtel.ng to discuss dedicated freight options.',
  },
  {
    question: 'Do you deliver on weekends?',
    answer:
      'We offer Saturday delivery for Same-Day and Next-Day services in most cities. Sunday delivery is available in Lagos and Abuja only. Interstate shipments run Monday to Saturday.',
  },
  {
    question: 'How do I file a claim for a lost or damaged package?',
    answer:
      'Contact our support team within 48 hours of the expected delivery date via email at support@mobtel.ng or call +234 800 MOBTEL. Please have your tracking number ready. Claims are processed within 5 business days.',
  },
  {
    question: 'Can I change my delivery address after booking?',
    answer:
      'Address changes are allowed up to 2 hours before the scheduled pickup time. Log in to your dashboard, go to "Shipment History", select the booking, and click "Edit Delivery Details". After pickup, address changes are not possible.',
  },
]

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Contact() {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleReset() {
    setSubmitted(false)
    setFormState({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  function toggleFaq(index: number) {
    setOpenFaq((prev) => (prev === index ? null : index))
  }

  return (
    <>
      <style>{`
        /* ---- Hero ---- */
        .contact__hero {
          background: var(--color-primary);
        }

        .contact__hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-12) var(--space-6);
        }

        .contact__hero h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: var(--space-4);
        }

        .contact__hero-sub {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.7;
          max-width: 580px;
        }

        /* ---- Two-column layout ---- */
        .contact__body {
          background: var(--color-bg);
        }

        .contact__body-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-16) var(--space-6);
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: var(--space-16);
        }

        /* ---- Left: Contact info ---- */
        .contact__info-heading {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: var(--space-8);
        }

        .contact__info-rows {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .contact__info-row {
          display: flex;
          align-items: flex-start;
          gap: var(--space-4);
        }

        .contact__info-text {
          font-size: 0.9375rem;
          color: var(--color-text);
          line-height: 1.6;
        }

        .contact__info-note {
          margin-top: var(--space-8);
          font-size: 0.875rem;
          color: var(--color-text-muted);
          font-style: italic;
          line-height: 1.6;
        }

        /* ---- Right: Form ---- */
        .contact__success {
          background: #f0fdf4;
          border: 1px solid #86efac;
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: var(--space-4);
        }

        .contact__success-text {
          font-size: 1rem;
          color: #15803d;
          font-weight: 500;
          line-height: 1.6;
        }

        .contact__success-btn {
          background: none;
          border: 1.5px solid #15803d;
          color: #15803d;
          font-size: 0.9375rem;
          font-weight: 600;
          padding: var(--space-2) var(--space-5);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-family: var(--font-sans);
          transition: background 0.15s ease;
        }

        .contact__success-btn:hover {
          background: rgba(21, 128, 61, 0.08);
        }

        .contact__form-fields {
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
        }

        .contact__label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-text);
          margin-bottom: var(--space-2);
        }

        .contact__input,
        .contact__select,
        .contact__textarea {
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

        .contact__input:focus,
        .contact__select:focus,
        .contact__textarea:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(195, 32, 38, 0.15);
        }

        .contact__textarea {
          resize: vertical;
        }

        .contact__submit {
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

        .contact__submit:hover {
          opacity: 0.88;
        }

        /* ---- FAQ ---- */
        .contact__faq {
          background: var(--color-bg-subtle);
        }

        .contact__faq-inner {
          max-width: 800px;
          margin: 0 auto;
          padding: var(--space-16) var(--space-6);
        }

        .contact__faq-heading {
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-text);
          text-align: center;
          margin-bottom: var(--space-10);
        }

        .contact__faq-item {
          border-bottom: 1px solid var(--color-border);
        }

        .contact__faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: var(--space-5) 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          gap: var(--space-4);
          font-family: var(--font-sans);
        }

        .contact__faq-question-text {
          font-size: 1rem;
          font-weight: 500;
          color: var(--color-text);
          line-height: 1.5;
        }

        .contact__faq-toggle {
          font-size: 1.25rem;
          font-weight: 400;
          color: var(--color-text-muted);
          flex-shrink: 0;
          line-height: 1;
          transition: color 0.15s ease;
        }

        .contact__faq-question:hover .contact__faq-toggle {
          color: var(--color-accent);
        }

        .contact__faq-answer {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.7;
          padding-bottom: var(--space-5);
        }

        /* ---- Responsive ---- */
        @media (max-width: 768px) {
          .contact__hero h1 {
            font-size: 1.875rem;
          }

          .contact__body-inner {
            grid-template-columns: 1fr;
            gap: var(--space-10);
          }
        }
      `}</style>

      <main>
        {/* Section 1 — Hero */}
        <section className="contact__hero" aria-label="Contact us">
          <div className="contact__hero-inner">
            <h1>Get in Touch</h1>
            <p className="contact__hero-sub">
              Have a question, shipment issue, or business enquiry? We&apos;re here to help —
              reach out via the form or any of our channels below.
            </p>
          </div>
        </section>

        {/* Section 2 — Two-column: info + form */}
        <section className="contact__body" aria-label="Contact details and form">
          <div className="contact__body-inner">
            {/* Left column */}
            <div>
              <h2 className="contact__info-heading">Contact Information</h2>
              <div className="contact__info-rows">
                <div className="contact__info-row">
                  <IconLocation />
                  <p className="contact__info-text">
                    12 Broad Street, Lagos Island, Lagos, Nigeria
                  </p>
                </div>
                <div className="contact__info-row">
                  <IconPhone />
                  <p className="contact__info-text">+234 800 MOBTEL (662835)</p>
                </div>
                <div className="contact__info-row">
                  <IconMail />
                  <p className="contact__info-text">hello@mobtel.ng</p>
                </div>
                <div className="contact__info-row">
                  <IconClock />
                  <p className="contact__info-text">
                    Mon–Fri: 8:00 AM – 8:00 PM
                    <br />
                    Sat: 9:00 AM – 5:00 PM
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </div>
              <p className="contact__info-note">
                For urgent shipment issues, call us directly for fastest response.
              </p>
            </div>

            {/* Right column */}
            <div>
              {submitted ? (
                <div className="contact__success" role="status">
                  <IconCheckCircle />
                  <p className="contact__success-text">
                    Message sent! We&apos;ll get back to you within one business day.
                  </p>
                  <button type="button" className="contact__success-btn" onClick={handleReset}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="contact__form-fields">
                    <div>
                      <label htmlFor="contact-name" className="contact__label">
                        Full Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        className="contact__input"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="contact__label">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        className="contact__input"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="contact__label">
                        Phone (optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        className="contact__input"
                        placeholder="+234..."
                        value={formState.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="contact__label">
                        Subject
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        className="contact__select"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="shipment">Shipment Issue</option>
                        <option value="business">Business Partnership</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="contact__label">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="contact__textarea"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button type="submit" className="contact__submit">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Section 3 — FAQ Accordion */}
        <section className="contact__faq" aria-label="Frequently asked questions">
          <div className="contact__faq-inner">
            <h2 className="contact__faq-heading">Frequently Asked Questions</h2>
            <div role="list">
              {FAQ_ITEMS.map((item, index) => (
                <div className="contact__faq-item" key={index} role="listitem">
                  <button
                    type="button"
                    className="contact__faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaq === index}
                  >
                    <span className="contact__faq-question-text">{item.question}</span>
                    <span className="contact__faq-toggle" aria-hidden="true">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === index && (
                    <p className="contact__faq-answer">{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
