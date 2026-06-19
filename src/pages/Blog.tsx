import { Link } from 'react-router-dom'

const POSTS = [
  {
    title: 'How to prepare packages for same-day delivery',
    date: '2026-05-10',
    excerpt: 'Tips for packaging fragile and time-sensitive items to ensure safe, fast delivery.',
    slug: 'prepare-same-day',
  },
  {
    title: 'Expanding to new cities: what it means for you',
    date: '2026-04-02',
    excerpt: 'We explain our city rollout plan and how to find service in your area.',
    slug: 'expanding-new-cities',
  },
  {
    title: 'Business shipping: optimize costs and fulfillment',
    date: '2026-03-15',
    excerpt: 'Best practices for e-commerce sellers to lower shipping costs and improve delivery times.',
    slug: 'business-shipping-tips',
  },
]

export default function Blog() {
  return (
    <main className="page max-w-300 mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Insights & News</h1>
        <p className="text-gray-600 mt-2">Stories, tips, and announcements from the Mobtel team.</p>
      </header>

      <section className="grid gap-6">
        {POSTS.map((p) => (
          <article key={p.slug} className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <div className="text-xs text-gray-500 mt-1">{p.date}</div>
            <p className="text-gray-700 mt-2">{p.excerpt}</p>
            <div className="mt-3">
              <Link to={`/blog/${p.slug}`} className="text-[#c32026] font-semibold">Read more</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
