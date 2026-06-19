export default function PrivacyPolicy() {
  return (
    <>
      <style>{`
        .privacy__header {
          background: var(--color-primary);
          padding: var(--space-12) var(--space-6);
        }

        .privacy__header-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .privacy__header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: var(--space-3);
        }

        .privacy__header-sub {
          color: rgba(255, 255, 255, 0.65);
          font-size: 1rem;
        }

        .privacy__content {
          max-width: 800px;
          margin: 0 auto;
          padding: var(--space-16) var(--space-6);
        }

        .privacy__h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-text);
          margin-top: var(--space-10);
          margin-bottom: var(--space-4);
        }

        .privacy__p {
          color: var(--color-text);
          line-height: 1.8;
          margin-bottom: var(--space-4);
        }

        .privacy__ul {
          margin-left: var(--space-6);
          margin-bottom: var(--space-4);
          list-style: disc;
        }

        .privacy__ul li {
          color: var(--color-text);
          line-height: 1.8;
          margin-bottom: var(--space-2);
        }
      `}</style>

      <main>
        <section className="privacy__header">
          <div className="privacy__header-inner">
            <h1>Privacy Policy</h1>
            <p className="privacy__header-sub">Last updated: June 2025</p>
          </div>
        </section>

        <div className="privacy__content">
          <h2 className="privacy__h2">1. Introduction</h2>
          <p className="privacy__p">
            Mobtel Logistics ("we", "us", "our") operates at mobtel.ng. This policy explains how we
            collect, use, and protect your personal data when you use our platform. By using Mobtel,
            you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2 className="privacy__h2">2. Information We Collect</h2>
          <p className="privacy__p">We collect the following categories of personal data:</p>
          <ul className="privacy__ul">
            <li>Full name, email address, and phone number</li>
            <li>Delivery and pickup addresses</li>
            <li>
              Payment method details (processed securely via Paystack — we do not store card
              numbers)
            </li>
            <li>Shipment history and booking records</li>
            <li>Device and browser data collected for analytics and security purposes</li>
          </ul>

          <h2 className="privacy__h2">3. How We Use Your Information</h2>
          <p className="privacy__p">Your information is used for the following purposes:</p>
          <ul className="privacy__ul">
            <li>To process and deliver your shipments</li>
            <li>
              To send booking confirmations, tracking updates, and delivery notifications via SMS
              and email
            </li>
            <li>To improve our platform, services, and customer experience</li>
            <li>
              To comply with applicable Nigerian laws including the Nigeria Data Protection
              Regulation (NDPR)
            </li>
          </ul>

          <h2 className="privacy__h2">4. Sharing of Information</h2>
          <p className="privacy__p">
            We do not sell your personal data. We share your information only in the following
            circumstances:
          </p>
          <ul className="privacy__ul">
            <li>
              With our verified rider network — limited to pickup/delivery address and contact
              number needed to complete your delivery
            </li>
            <li>
              With our payment processor (Paystack) to facilitate secure transactions
            </li>
            <li>
              With analytics providers under strict data processing agreements that prohibit
              secondary use of your data
            </li>
          </ul>

          <h2 className="privacy__h2">5. Data Retention</h2>
          <p className="privacy__p">
            We retain your personal data for as long as your account is active. Following account
            closure, we retain data for up to 3 years as required by Nigerian financial regulations
            and for the purpose of resolving any outstanding disputes or claims.
          </p>

          <h2 className="privacy__h2">6. Your Rights</h2>
          <p className="privacy__p">
            Under the Nigeria Data Protection Regulation (NDPR), you have the right to access,
            correct, or delete your personal data held by Mobtel. You may also object to or
            restrict certain types of processing. To exercise any of these rights, email us at{' '}
            <strong>privacy@mobtel.ng</strong>. We will respond to your request within 30 days.
          </p>

          <h2 className="privacy__h2">7. Cookies</h2>
          <p className="privacy__p">
            We use essential cookies for authentication and session management, which are required
            for the platform to function. We also use optional analytics cookies to understand how
            users interact with our site. You may disable analytics cookies in your account
            settings at any time without affecting your ability to use the platform.
          </p>

          <h2 className="privacy__h2">8. Security</h2>
          <p className="privacy__p">
            We use industry-standard encryption (TLS) for all data transmitted between your device
            and our servers, and for data stored at rest. Access to personal data is restricted to
            authorised Mobtel personnel who require it to perform their duties. We conduct regular
            security reviews of our systems and processes.
          </p>

          <h2 className="privacy__h2">9. Contact</h2>
          <p className="privacy__p">
            For privacy-related questions or to exercise your data rights, contact our Data
            Protection Officer at <strong>privacy@mobtel.ng</strong> or write to us at:
          </p>
          <p className="privacy__p">
            Mobtel Logistics
            <br />
            12 Broad Street, Lagos Island
            <br />
            Lagos, Nigeria
          </p>
        </div>
      </main>
    </>
  )
}
