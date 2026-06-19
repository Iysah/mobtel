export default function ProhibitedItems() {
  return (
    <main className="page max-w-300 mx-auto px-6 py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Prohibited Items</h1>
        <p className="text-gray-600 mt-2">For safety and compliance we cannot accept certain items for shipment. Please review the list and contact support for alternatives.</p>
      </header>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Commonly prohibited</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Explosives, fireworks, and ammunition</li>
          <li>Flammable liquids and gases (fuels, paint thinners)</li>
          <li>Radioactive materials and industrial chemicals</li>
          <li>Live animals (except where special arrangements exist)</li>
          <li>Perishable items requiring temperature control</li>
          <li>Illegal or illicit substances</li>
          <li>Large amounts of cash, precious metals, or unregistered valuables</li>
          <li>Firearms and weapons without proper permits</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-3">Special cases & packing guidance</h2>
        <p className="text-gray-700 mb-3">Some restricted items may be accepted with prior approval, special packaging, or documentation. Always declare contents accurately and follow local regulations.</p>
        <p className="text-gray-700">If you're unsure whether an item is allowed, contact us via the <a href="/contact" className="text-[#c32026]">Contact</a> page with full details before booking.</p>
      </section>
    </main>
  )
}
