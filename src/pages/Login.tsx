import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <>
      <style>{`
        .login__main {
          min-height: calc(100vh - 130px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-8) var(--space-6);
          background: var(--color-bg-subtle);
        }

        .login__card {
          max-width: 420px;
          width: 100%;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-10) var(--space-8);
        }

        .login__brand {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary);
          text-align: center;
          margin-bottom: var(--space-2);
          display: block;
        }

        .login__heading {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-text);
          text-align: center;
          margin-bottom: var(--space-8);
        }

        .login__field {
          margin-bottom: var(--space-5);
        }

        .login__label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-text);
          margin-bottom: var(--space-2);
        }

        .login__input {
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

        .login__input:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(195, 32, 38, 0.15);
        }

        .login__forgot {
          display: block;
          text-align: right;
          font-size: 0.875rem;
          color: var(--color-text-muted);
          margin-top: var(--space-2);
          transition: color 0.15s ease;
        }

        .login__forgot:hover {
          color: var(--color-accent);
        }

        .login__submit {
          width: 100%;
          background: var(--color-accent);
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          padding: var(--space-3);
          border-radius: var(--radius-md);
          border: none;
          cursor: pointer;
          font-family: var(--font-sans);
          transition: opacity 0.15s ease;
          margin-top: var(--space-6);
        }

        .login__submit:hover {
          opacity: 0.88;
        }

        .login__divider {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          margin: var(--space-6) 0;
        }

        .login__divider-line {
          flex: 1;
          height: 1px;
          background: var(--color-border);
        }

        .login__divider-text {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          white-space: nowrap;
        }

        .login__register {
          text-align: center;
          font-size: 0.9375rem;
          color: var(--color-text-muted);
        }

        .login__register-link {
          color: var(--color-accent);
          font-weight: 500;
          transition: opacity 0.15s ease;
        }

        .login__register-link:hover {
          opacity: 0.8;
        }
      `}</style>

      <main className="login__main">
        <div className="login__card">
          <span className="login__brand">Mobtel</span>
          <h1 className="login__heading">Welcome back</h1>

          <form onSubmit={handleSubmit} noValidate>
            <div className="login__field">
              <label htmlFor="login-email" className="login__label">
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                className="login__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div className="login__field">
              <label htmlFor="login-password" className="login__label">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                className="login__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <Link to="/forgot-password" className="login__forgot">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="login__submit">
              Log In
            </button>
          </form>

          <div className="login__divider">
            <span className="login__divider-line" />
            <span className="login__divider-text">or</span>
            <span className="login__divider-line" />
          </div>

          <p className="login__register">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="login__register-link">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}
