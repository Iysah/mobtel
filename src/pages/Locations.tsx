import { Link } from 'react-router-dom'

const CITIES = [
  'Lagos',
  'Abuja',
  'Port Harcourt',
  'Kano',
  'Ibadan',
  'Enugu',
]

export default function Locations() {
  return (
    <main className="page max-w-300 mx-auto px-6 py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Our Locations</h1>
        <p className="text-gray-600 mt-2">We operate a growing network of drop-off points, agent kiosks, and pickup hubs.</p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Cities we serve</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {CITIES.map((c) => (
            <div key={c} className="p-3 border rounded-lg text-sm">
              <strong>{c}</strong>
              <div className="text-gray-600 text-xs mt-1">Multiple pickup points & agents</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Find a pickup point</h2>
        <p className="text-gray-700 mb-3">Enter your city or address to see nearby agents and drop-off locations.</p>
        <form className="flex gap-2 max-w-md">
          <input className="flex-1 px-3 py-2 border rounded" placeholder="City or address" aria-label="Search location" />
          <button className="bg-[#c32026] text-white px-4 rounded">Search</button>
        </form>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Need a business or bulk pickup?</h2>
        <p className="text-gray-700 mb-4">For scheduled pickups and commercial partnerships, get in touch with our operations team.</p>
        <Link to="/contact" className="text-[#c32026] font-semibold">Contact operations</Link>
      </section>
    </main>
  )
}
