import { Link } from 'react-router-dom'

export default function Careers() {
  return (
    <main className="page max-w-300 mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Careers at Mobtel Logistics</h1>
        <p className="text-gray-600 mt-2">
          Join a fast-growing logistics team focused on reliable, tech-enabled delivery
          across cities. We hire for operations, drivers, and support roles.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Why work with us</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Competitive pay and weekly payouts for delivery partners</li>
          <li>Flexible schedules and local pickup opportunities</li>
          <li>Onboarding and safety training</li>
          <li>Opportunities for career growth and leadership roles</li>
          <li>Performance bonuses and referral rewards</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Open positions</h2>
        <div className="grid gap-4">
          <article className="p-4 border rounded-lg">
            <h3 className="font-semibold">Rider — Same-Day Deliveries</h3>
            <p className="text-sm text-gray-600">Full-time / Part-time — Multiple cities</p>
            <p className="mt-2 text-gray-700 text-sm">Provide timely pickups and deliveries. Must own a motorcycle or vehicle and have a valid license.</p>
            <div className="mt-3">
              <Link to="/contact" className="text-[#c32026] font-semibold">Apply or enquire</Link>
            </div>
          </article>

          <article className="p-4 border rounded-lg">
            <h3 className="font-semibold">Operations Associate</h3>
            <p className="text-sm text-gray-600">Operations hub — Full-time</p>
            <p className="mt-2 text-gray-700 text-sm">Support sorting, routing and customer updates at our local operations hub.</p>
            <div className="mt-3">
              <Link to="/contact" className="text-[#c32026] font-semibold">Apply or enquire</Link>
            </div>
          </article>

          <article className="p-4 border rounded-lg">
            <h3 className="font-semibold">Customer Success Representative</h3>
            <p className="text-sm text-gray-600">Remote / Hybrid</p>
            <p className="mt-2 text-gray-700 text-sm">Help customers with bookings, tracking, and claims via phone and email.</p>
            <div className="mt-3">
              <Link to="/contact" className="text-[#c32026] font-semibold">Apply or enquire</Link>
            </div>
          </article>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Didn't find a match?</h2>
        <p className="text-gray-700 mb-4">Send a short note and your CV to <a href="mailto:careers@mobtel.example" className="text-[#c32026]">careers@mobtel.example</a> and we'll reach out when roles open up.</p>
      </section>
    </main>
  )
}
