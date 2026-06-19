import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BRAND } from '../../lib/constants'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Track', to: '/track' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--color-secondary);
          border-bottom: 1px solid var(--color-border);
          font-family: var(--font-sans);
        }

        .navbar__inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar__brand {
          font-size: 1.375rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: -0.02em;
          text-decoration: none;
        }

        .navbar__links {
          display: flex;
          align-items: center;
          gap: var(--space-8);
        }

        .navbar__nav-link {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-text);
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .navbar__nav-link:hover,
        .navbar__nav-link.active {
          color: var(--color-accent);
        }

        .navbar__actions {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .navbar__login {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-text);
          text-decoration: none;
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-md);
          transition: background 0.15s ease, color 0.15s ease;
        }

        .navbar__login:hover {
          background: var(--color-bg-subtle);
        }

        .navbar__cta {
          display: inline-block;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-secondary);
          background: var(--color-accent);
          text-decoration: none;
          padding: var(--space-2) var(--space-5);
          border-radius: var(--radius-md);
          transition: opacity 0.15s ease;
          white-space: nowrap;
        }

        .navbar__cta:hover {
          opacity: 0.88;
        }

        .navbar__hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          border-radius: var(--radius-sm);
        }

        .navbar__hamburger:hover {
          background: var(--color-bg-subtle);
        }

        .navbar__hamburger-bar {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--color-primary);
          border-radius: 2px;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .navbar__hamburger--open .navbar__hamburger-bar:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .navbar__hamburger--open .navbar__hamburger-bar:nth-child(2) {
          opacity: 0;
        }

        .navbar__hamburger--open .navbar__hamburger-bar:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile drawer */
        .navbar__mobile-menu {
          display: none;
          background: var(--color-secondary);
          border-top: 1px solid var(--color-border);
          padding: var(--space-4) var(--space-6) var(--space-6);
        }

        .navbar__mobile-menu--open {
          display: block;
        }

        .navbar__mobile-links {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          margin-bottom: var(--space-4);
        }

        .navbar__mobile-nav-link {
          font-size: 1rem;
          font-weight: 500;
          color: var(--color-text);
          text-decoration: none;
          padding: var(--space-3) var(--space-2);
          border-radius: var(--radius-md);
          display: block;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .navbar__mobile-nav-link:hover,
        .navbar__mobile-nav-link.active {
          background: var(--color-bg-subtle);
          color: var(--color-accent);
        }

        .navbar__mobile-actions {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          padding-top: var(--space-4);
          border-top: 1px solid var(--color-border);
        }

        .navbar__mobile-login {
          font-size: 0.9375rem;
          font-weight: 500;
          color: var(--color-text);
          text-decoration: none;
          padding: var(--space-3) var(--space-2);
          display: block;
        }

        .navbar__mobile-cta {
          display: block;
          text-align: center;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-secondary);
          background: var(--color-accent);
          text-decoration: none;
          padding: var(--space-3) var(--space-4);
          border-radius: var(--radius-md);
          transition: opacity 0.15s ease;
        }

        .navbar__mobile-cta:hover {
          opacity: 0.88;
        }

        @media (max-width: 768px) {
          .navbar__links,
          .navbar__actions {
            display: none;
          }

          .navbar__hamburger {
            display: flex;
          }
        }
      `}</style>

      <header className="navbar">
        <div className="navbar__inner">
          <Link to="/" className="navbar__brand">
            {BRAND.name}
          </Link>

          {/* Desktop nav */}
          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__nav-link${isActive ? ' active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="navbar__actions">
            <Link to="/login" className="navbar__login">
              Login
            </Link>
            <Link to="/send" className="navbar__cta">
              Send a Package
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="navbar__hamburger-bar" />
            <span className="navbar__hamburger-bar" />
            <span className="navbar__hamburger-bar" />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-menu"
          className={`navbar__mobile-menu${menuOpen ? ' navbar__mobile-menu--open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <nav className="navbar__mobile-links" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__mobile-nav-link${isActive ? ' active' : ''}`
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="navbar__mobile-actions">
            <Link to="/login" className="navbar__mobile-login" onClick={closeMenu}>
              Login
            </Link>
            <Link to="/send" className="navbar__mobile-cta" onClick={closeMenu}>
              Send a Package
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
