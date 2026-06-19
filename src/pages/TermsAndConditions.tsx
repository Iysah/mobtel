export default function TermsAndConditions() {
  return (
    <>
      <style>{`
        .terms__header {
          background: var(--color-primary);
          padding: var(--space-12) var(--space-6);
        }

        .terms__header-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .terms__header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: var(--space-3);
        }

        .terms__header-sub {
          color: rgba(255, 255, 255, 0.65);
          font-size: 1rem;
        }

        .terms__content {
          max-width: 800px;
          margin: 0 auto;
          padding: var(--space-16) var(--space-6);
        }

        .terms__h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-text);
          margin-top: var(--space-10);
          margin-bottom: var(--space-4);
        }

        .terms__p {
          color: var(--color-text);
          line-height: 1.8;
          margin-bottom: var(--space-4);
        }

        .terms__ul {
          margin-left: var(--space-6);
          margin-bottom: var(--space-4);
          list-style: disc;
        }

        .terms__ul li {
          color: var(--color-text);
          line-height: 1.8;
          margin-bottom: var(--space-2);
        }
      `}</style>

      <main>
        <section className="terms__header">
          <div className="terms__header-inner">
            <h1>Terms &amp; Conditions</h1>
            <p className="terms__header-sub">Last updated: June 2025</p>
          </div>
        </section>

        <div className="terms__content">
          <h2 className="terms__h2">1. Acceptance of Terms</h2>
          <p className="terms__p">
            By accessing or using Mobtel's platform — including our website at mobtel.ng and any
            related mobile interfaces — you agree to be bound by these Terms and Conditions. If you
            disagree with any part of these Terms, you must not use the service. Continued use of
            the platform constitutes acceptance of any updates to these Terms.
          </p>

          <h2 className="terms__h2">2. Eligibility</h2>
          <p className="terms__p">
            You must be at least 18 years old and a resident or registered business entity in
            Nigeria to use Mobtel's services. By creating an account, you represent and warrant
            that you meet these eligibility requirements and that all information you provide is
            accurate, current, and complete.
          </p>

          <h2 className="terms__h2">3. Booking and Cancellations</h2>
          <p className="terms__p">
            Bookings are confirmed upon successful receipt of payment. Once confirmed, you will
            receive a tracking number via SMS and email. The following cancellation policy applies:
          </p>
          <ul className="terms__ul">
            <li>
              Cancellations made more than 2 hours before the scheduled pickup time are eligible
              for a full refund, processed within 3–5 business days.
            </li>
            <li>
              Cancellations made within 2 hours of the scheduled pickup incur a ₦500 cancellation
              fee, which will be deducted from the refund amount.
            </li>
            <li>
              Cancellations after a rider has been dispatched are not eligible for a refund.
            </li>
          </ul>

          <h2 className="terms__h2">4. Prohibited Items</h2>
          <p className="terms__p">
            The following items are strictly prohibited from being shipped via Mobtel. Violation of
            this policy will result in immediate account suspension and may be reported to relevant
            authorities:
          </p>
          <ul className="terms__ul">
            <li>Flammable, explosive, or hazardous materials</li>
            <li>Controlled substances or illegal drugs</li>
            <li>Live animals</li>
            <li>Counterfeit or pirated goods</li>
            <li>Cash, currency, or negotiable financial instruments</li>
            <li>Any item prohibited under Nigerian federal or state law</li>
          </ul>

          <h2 className="terms__h2">5. Liability</h2>
          <p className="terms__p">
            Mobtel's liability for lost or damaged packages is limited to ₦50,000 per shipment
            unless the sender purchased declared value insurance at the time of booking. Claims for
            loss or damage must be filed within 48 hours of the expected delivery date by contacting
            support@mobtel.ng with your tracking number. Claims submitted after this window will
            not be considered. Mobtel is not liable for damages arising from prohibited items,
            inadequate packaging by the sender, or force majeure events.
          </p>

          <h2 className="terms__h2">6. Payment</h2>
          <p className="terms__p">
            All payments are processed in Nigerian Naira (NGN) via Paystack, our authorised payment
            processor. Prices displayed on the platform include all applicable taxes and fees at the
            time of booking. Mobtel reserves the right to update pricing at any time with a minimum
            of 7 days' advance notice to registered users. Confirmed bookings will not be affected
            by price changes after the booking is made.
          </p>

          <h2 className="terms__h2">7. Service Availability</h2>
          <p className="terms__p">
            Mobtel makes reasonable commercial efforts to maintain consistent service availability
            across all listed cities. However, we do not guarantee uninterrupted service. The
            following circumstances may excuse non-performance or delay without liability:
          </p>
          <ul className="terms__ul">
            <li>Flooding, extreme weather events, or natural disasters</li>
            <li>Civil unrest, protests, or road closures</li>
            <li>Government restrictions, curfews, or regulatory actions</li>
            <li>Platform outages caused by third-party service providers</li>
          </ul>
          <p className="terms__p">
            In such cases, Mobtel will make best efforts to notify affected customers and
            reschedule or refund their bookings.
          </p>

          <h2 className="terms__h2">8. Account Termination</h2>
          <p className="terms__p">
            Mobtel reserves the right to suspend or permanently terminate any account that is
            found to violate these Terms, engage in fraudulent activity, or abuse our platform or
            personnel. Termination may occur with or without prior notice at Mobtel's sole
            discretion. Upon termination, your right to use the platform ceases immediately.
          </p>

          <h2 className="terms__h2">9. Governing Law</h2>
          <p className="terms__p">
            These Terms and Conditions are governed by and construed in accordance with the laws
            of the Federal Republic of Nigeria. Any dispute arising from or related to these Terms
            shall be resolved through binding arbitration in Lagos, Nigeria, under the Arbitration
            and Conciliation Act (Cap A18, Laws of the Federation of Nigeria, 2004). Each party
            shall bear their own costs unless otherwise determined by the arbitrator.
          </p>

          <h2 className="terms__h2">10. Contact</h2>
          <p className="terms__p">
            For legal enquiries regarding these Terms, please contact us at{' '}
            <strong>legal@mobtel.ng</strong> or write to:
          </p>
          <p className="terms__p">
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
