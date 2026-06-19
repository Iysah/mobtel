import { Link } from 'react-router-dom'

const TIERS = [
  {
    name: 'Same-Day',
    price: 'From ₦1,500',
    features: ['Door-to-door within city', 'Real-time tracking', 'Delivered in hours'],
  },
  {
    name: 'Next-Day',
    price: 'From ₦1,000',
    features: ['Inter-city overnight', 'Affordable rates', 'Delivery by next day'],
  },
  {
    name: 'Interstate',
    price: 'From ₦2,500',
    features: ['Longer distances', 'Full tracking at checkpoints', 'Insurance options'],
  },
]

export default function Pricing() {
  return (
    <main className="page max-w-300 mx-auto px-6 py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Pricing & Rates</h1>
        <p className="text-gray-600 mt-2">Simple, transparent pricing depending on speed and distance. Business and bulk pricing available on request.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6 mb-8">
        {TIERS.map((t) => (
          <div key={t.name} className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <div className="text-2xl text-[#c32026] font-bold mt-2">{t.price}</div>
            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              {t.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Need a custom quote?</h2>
        <p className="text-gray-700 mb-4">For business accounts, recurring shipments, or large-volume discounts, contact our sales team for a tailored plan and rates.</p>
        <Link to="/contact" className="text-[#c32026] font-semibold">Get a quote</Link>
      </section>
    </main>
  )
}
