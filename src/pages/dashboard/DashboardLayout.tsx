import { NavLink, Outlet } from 'react-router-dom'
import { BRAND } from '../../lib/constants'

const SIDEBAR_LINKS = [
  { label: 'Overview', to: '/dashboard' },
  { label: 'Send Package', to: '/dashboard/send' },
  { label: 'History', to: '/dashboard/history' },
  { label: 'Wallet', to: '/dashboard/wallet' },
  { label: 'Settings', to: '/dashboard/settings' },
]

export default function DashboardLayout() {
  return (
    <>
      <style>{`
        .dash-layout {
          display: flex;
          min-height: 100vh;
          font-family: var(--font-sans);
        }

        .dash-sidebar {
          width: 240px;
          flex-shrink: 0;
          background: var(--color-primary);
          color: var(--color-secondary);
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
        }

        .dash-sidebar__brand {
          padding: var(--space-6) var(--space-6) var(--space-8);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-secondary);
          letter-spacing: -0.02em;
          text-decoration: none;
          display: block;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .dash-sidebar__nav {
          padding: var(--space-4) var(--space-3);
          flex: 1;
        }

        .dash-sidebar__label {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.3);
          padding: var(--space-4) var(--space-3) var(--space-2);
          display: block;
        }

        .dash-sidebar__links {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
        }

        .dash-sidebar__link {
          display: block;
          padding: var(--space-3) var(--space-3);
          font-size: 0.9375rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          border-radius: var(--radius-md);
          transition: background 0.15s ease, color 0.15s ease;
        }

        .dash-sidebar__link:hover {
          background: rgba(255, 255, 255, 0.07);
          color: var(--color-secondary);
        }

        .dash-sidebar__link.active {
          background: var(--color-accent);
          color: var(--color-secondary);
        }

        .dash-content {
          flex: 1;
          background: var(--color-bg);
          min-width: 0;
        }

        @media (max-width: 768px) {
          .dash-sidebar {
            width: 200px;
          }
        }

        @media (max-width: 560px) {
          .dash-layout {
            flex-direction: column;
          }

          .dash-sidebar {
            width: 100%;
            height: auto;
            position: static;
          }

          .dash-sidebar__nav {
            padding: var(--space-2) var(--space-3) var(--space-4);
          }

          .dash-sidebar__links {
            flex-direction: row;
            flex-wrap: wrap;
            gap: var(--space-2);
          }

          .dash-sidebar__link {
            font-size: 0.875rem;
            padding: var(--space-2) var(--space-3);
          }
        }
      `}</style>

      <div className="dash-layout">
        <aside className="dash-sidebar" aria-label="Dashboard navigation">
          <NavLink to="/dashboard" className="dash-sidebar__brand">
            {BRAND.name}
          </NavLink>
          <nav className="dash-sidebar__nav">
            <span className="dash-sidebar__label">Menu</span>
            <ul className="dash-sidebar__links">
              {SIDEBAR_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/dashboard'}
                    className={({ isActive }) =>
                      `dash-sidebar__link${isActive ? ' active' : ''}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="dash-content">
          <Outlet />
        </div>
      </div>
    </>
  )
}
