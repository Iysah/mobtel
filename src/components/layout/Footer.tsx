import { Link } from 'react-router-dom'
import { BRAND } from '../../lib/constants'

const COMPANY_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Locations', to: '/locations' },
  { label: 'Blog', to: '/blog' },
]

const SERVICES_LINKS = [
  { label: 'Send a Package', to: '/send' },
  { label: 'Track Shipment', to: '/track' },
  { label: 'Pricing', to: '/pricing' },
]

const SUPPORT_LINKS = [
  { label: 'Prohibited Items', to: '/prohibited-items' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms & Conditions', to: '/terms' },
]

// Placeholder SVG social icons
function IconTwitter() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: var(--color-primary);
          color: var(--color-secondary);
          font-family: var(--font-sans);
        }

        .footer__main {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-16) var(--space-6) var(--space-12);
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--space-8);
        }

        .footer__brand-col {}

        .footer__brand-name {
          font-size: 1.375rem;
          font-weight: 700;
          color: var(--color-secondary);
          margin-bottom: var(--space-3);
          letter-spacing: -0.02em;
        }

        .footer__tagline {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.55);
          margin-bottom: var(--space-6);
          line-height: 1.6;
        }

        .footer__social {
          display: flex;
          gap: var(--space-3);
        }

        .footer__social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .footer__social-link:hover {
          background: var(--color-accent);
          color: var(--color-secondary);
        }

        .footer__col-title {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: var(--space-4);
        }

        .footer__col-links {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .footer__col-link {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .footer__col-link:hover {
          color: var(--color-secondary);
        }

        .footer__bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer__bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-6) var(--space-6);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-4);
        }

        .footer__copyright {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .footer__bottom-links {
          display: flex;
          gap: var(--space-6);
        }

        .footer__bottom-link {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.4);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .footer__bottom-link:hover {
          color: rgba(255, 255, 255, 0.8);
        }

        @media (max-width: 900px) {
          .footer__main {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-10);
          }

          .footer__brand-col {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 560px) {
          .footer__main {
            grid-template-columns: 1fr;
            padding-bottom: var(--space-8);
          }

          .footer__bottom-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-3);
          }

          .footer__bottom-links {
            flex-wrap: wrap;
            gap: var(--space-4);
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer__main">
          {/* Brand column */}
          <div className="footer__brand-col">
            <p className="footer__brand-name">{BRAND.name}</p>
            <p className="footer__tagline">{BRAND.tagline}</p>
            <div className="footer__social">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Twitter"
              >
                <IconTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="footer__col-title">Company</p>
            <ul className="footer__col-links">
              {COMPANY_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="footer__col-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="footer__col-title">Services</p>
            <ul className="footer__col-links">
              {SERVICES_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="footer__col-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="footer__col-title">Support</p>
            <ul className="footer__col-links">
              {SUPPORT_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="footer__col-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-inner">
            <p className="footer__copyright">
              &copy; {new Date().getFullYear()} Mobtel Logistics. All rights reserved.
            </p>
            <div className="footer__bottom-links">
              <Link to="/privacy" className="footer__bottom-link">
                Privacy Policy
              </Link>
              <Link to="/terms" className="footer__bottom-link">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
