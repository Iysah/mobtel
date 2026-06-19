import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Zap, Calendar, Truck, Package, Globe, ChevronDown, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'
import heroImg from '../assets/hero.png'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const STATS = [
  { value: '50,000+', label: 'Packages Delivered' },
  { value: '98.7%', label: 'On-Time Rate' },
  { value: '30+', label: 'Cities Covered' },
  { value: '24/7', label: 'Support' },
]

const HOW_STEPS = [
  {
    number: '1',
    title: 'Book',
    description:
      'Choose your delivery type, enter pickup and drop-off details, and get an instant price quote.',
  },
  {
    number: '2',
    title: 'Drop Off or Pick Up',
    description:
      'Drop your package at the nearest Mobtel agent location or schedule a home pickup.',
  },
  {
    number: '3',
    title: 'Delivered',
    description:
      'Your recipient gets real-time updates and a delivery notification the moment it arrives.',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'Mobtel has completely changed how I handle shipping for my online store. Packages arrive on time and customers love the tracking updates.',
    name: 'Amaka Obi',
    role: 'E-commerce Seller, Lagos',
    initials: 'AO',
  },
  {
    quote:
      'I sent an urgent document from Abuja to Port Harcourt and it arrived within hours. The driver called me to confirm pickup. Highly impressed.',
    name: 'Tunde Afolabi',
    role: 'Corporate Client, Abuja',
    initials: 'TA',
  },
  {
    quote:
      'The app makes it so easy to book. I use Mobtel for all my business deliveries now — interstate and same-day. Great customer service too.',
    name: 'Ngozi Eze',
    role: 'SME Owner, Enugu',
    initials: 'NE',
  },
]

const FAQS = [
  {
    question: 'How long does same-day delivery take?',
    answer:
      'Same-day deliveries are typically completed within 2–6 hours of pickup, depending on distance within the city and current traffic conditions.',
  },
  {
    question: 'How do I track my shipment?',
    answer:
      'Once your package is booked, you receive a unique tracking number via SMS and email. Enter it on our Track page for real-time status updates at every checkpoint.',
  },
  {
    question: 'What cities do you currently serve?',
    answer:
      'We operate in 30+ cities including Lagos, Abuja, Port Harcourt, Kano, Ibadan, Enugu, Kaduna, Benin City, Owerri, Calabar, and more. Our network expands every week.',
  },
  {
    question: 'Are there weight or size restrictions?',
    answer:
      'Same-day deliveries handle packages up to 20 kg. Interstate shipments go up to 50 kg per item. Bulk and business orders have no hard limit — contact us for freight arrangements.',
  },
  {
    question: 'What happens if my package is lost or damaged?',
    answer:
      'All shipments are insured. In the event of loss or damage, file a claim within 48 hours of the expected delivery date. We investigate and compensate per our liability policy.',
  },
  {
    question: 'Can I schedule a pickup from my location?',
    answer:
      'Yes. When booking, select the "Schedule Pickup" option and choose a time window. A Mobtel rider will come to your location within the specified window.',
  },
]

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Home() {
  const [trackingInput, setTrackingInput] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const navigate = useNavigate()

  function handleTrackSubmit(e: FormEvent) {
    e.preventDefault()
    const trimmed = trackingInput.trim()
    if (!trimmed) return
    navigate(`/track?q=${encodeURIComponent(trimmed)}`)
  }

  return (
    <main>
      {/* ================================================================
          Hero
          ================================================================ */}
      <section
        className="bg-black"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-label="Hero"
      >
        <div className="max-w-[1200px] mx-auto px-6 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                <MapPin size={12} className="text-[#c32026]" />
                Now live in 30+ cities across Nigeria
              </div>

              <h1 className="text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.05] tracking-tight">
                Send Packages<br />Faster Than Ever
              </h1>

              <p className="text-lg text-white/65 leading-relaxed mt-5 max-w-[480px]">
                Same-day and next-day delivery across cities and states. Book in
                minutes, track in real time.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  to="/dashboard"
                  className="bg-[#c32026] text-white font-semibold text-base px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send a Package
                </Link>
                <Link
                  to="/track"
                  className="border border-white/30 text-white font-semibold text-base px-8 py-3 rounded-lg hover:border-white hover:bg-white/5 transition-all"
                >
                  Track a Shipment
                </Link>
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/10">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <span className="block text-2xl font-bold text-white">{stat.value}</span>
                    <span className="text-sm text-white/45 mt-0.5 block">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <div className="hidden lg:flex justify-end">
              <img
                src={heroImg}
                alt="Mobtel parcel delivery"
                className="w-full max-w-[460px] rounded-2xl opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          Track Widget
          ================================================================ */}
      <section
        className="bg-gray-50 border-b border-gray-200 py-10"
        aria-label="Track a shipment"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-sm font-semibold text-gray-900 mb-3">Track Your Shipment</p>
          <form className="flex gap-3 flex-wrap" onSubmit={handleTrackSubmit} noValidate>
            <input
              type="text"
              className="flex-1 min-w-0 px-4 py-3 border border-gray-200 rounded-lg text-base text-gray-900 bg-white outline-none focus:border-[#c32026] transition-colors placeholder:text-gray-400"
              placeholder="Enter tracking number (e.g. MBT-000123)"
              value={trackingInput}
              onChange={(e) => setTrackingInput(e.target.value)}
              aria-label="Tracking number"
            />
            <button
              type="submit"
              className="bg-[#c32026] text-white font-semibold text-base px-8 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Track
            </button>
          </form>
        </div>
      </section>

      {/* ================================================================
          Services — Bento Grid
          ================================================================ */}
      <section className="bg-white py-20 lg:py-24" aria-label="Our Delivery Services">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Our Delivery Services
          </h2>
          <p className="text-base text-gray-500 text-center mb-12">
            Fast, flexible options for every shipping need
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Same-Day — featured dark card, wide */}
            <article
              className="col-span-1 md:col-span-2 bg-black border border-[#c32026]/20 rounded-2xl p-8 flex flex-col gap-6 relative overflow-hidden"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            >
              <div className="relative z-10 flex flex-col gap-4 h-full">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#c32026]/15 flex items-center justify-center">
                    <Zap size={22} className="text-[#c32026]" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#c32026] uppercase tracking-widest bg-[#c32026]/10 px-2.5 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Same-Day Delivery</h3>
                  <p className="text-white/55 text-sm leading-relaxed mt-2">
                    Delivered within hours. Perfect for urgent documents and gifts within the city.
                  </p>
                </div>
                <div className="mt-auto pt-5 border-t border-white/10">
                  <span className="text-white/35 text-xs">Typically 2–6 hours · Same city</span>
                </div>
              </div>
            </article>

            {/* Next-Day */}
            <article className="col-span-1 bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#c32026]/10 flex items-center justify-center">
                <Calendar size={22} className="text-[#c32026]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Next-Day Delivery</h3>
                <p className="text-gray-500 text-sm leading-relaxed mt-1.5">
                  Book today, arrive tomorrow. Reliable for non-urgent inter-city packages.
                </p>
              </div>
            </article>

            {/* Interstate */}
            <article className="col-span-1 bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#c32026]/10 flex items-center justify-center">
                <Truck size={22} className="text-[#c32026]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Interstate Shipping</h3>
                <p className="text-gray-500 text-sm leading-relaxed mt-1.5">
                  Door-to-door between states. Tracked at every checkpoint.
                </p>
              </div>
            </article>

            {/* Bulk & Business — dark mid-tier, wide */}
            <article className="col-span-1 md:col-span-2 bg-zinc-900 border border-zinc-700/60 rounded-2xl p-8 flex flex-col gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#c32026]/15 flex items-center justify-center">
                <Package size={22} className="text-[#c32026]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Bulk & Business</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mt-2">
                  Volume discounts and dedicated account management for e-commerce sellers and businesses.
                </p>
              </div>
              <div className="mt-auto pt-5 border-t border-zinc-800">
                <span className="text-zinc-600 text-xs">
                  Volume discounts · Dedicated account manager
                </span>
              </div>
            </article>

            {/* International — coming soon, slim strip */}
            <article className="col-span-1 md:col-span-3 bg-gray-50 border border-gray-200 rounded-2xl px-8 py-5 flex items-center gap-5">
              <div className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center flex-shrink-0">
                <Globe size={18} className="text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-400">International Shipping</h3>
                <p className="text-gray-400 text-sm mt-0.5">
                  Cross-border delivery to select destinations. Customs-cleared and insured.
                </p>
              </div>
              <span className="flex-shrink-0 bg-gray-200 text-gray-500 text-xs font-semibold px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </article>
          </div>
        </div>
      </section>

      {/* ================================================================
          How It Works
          ================================================================ */}
      <section className="bg-black py-20 lg:py-24" aria-label="How It Works">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-2">How It Works</h2>
          <p className="text-base text-white/60 text-center mb-14">
            Ship a package in three simple steps
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_STEPS.map((step, i) => (
              <div key={step.number} className="flex flex-col items-center text-center relative">
                {i < HOW_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-[-50%] border-t-2 border-dashed border-white/12" />
                )}
                <div className="w-14 h-14 rounded-full border-2 border-[#c32026] flex items-center justify-center text-[#c32026] text-xl font-bold mb-5 relative z-10 bg-black">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-[220px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          Trust Stats
          ================================================================ */}
      <section className="bg-white py-20 lg:py-24" aria-label="Why Thousands Trust Mobtel">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Thousands Trust Mobtel
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="text-center border border-gray-200 rounded-2xl py-10 px-6"
              >
                <span className="block text-4xl font-bold text-[#c32026] leading-none">
                  {stat.value}
                </span>
                <p className="text-gray-500 text-sm mt-3 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          Testimonials
          ================================================================ */}
      <section className="bg-gray-50 py-20 lg:py-24" aria-label="Customer Testimonials">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
            What Our Customers Say
          </h2>
          <p className="text-base text-gray-500 text-center mb-12">
            Trusted by individuals, SMEs, and growing businesses across Nigeria.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="text-[#c32026] tracking-widest text-base" aria-label="5 out of 5 stars">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="text-gray-700 text-[0.9375rem] leading-[1.7] italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div
                    className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-500 flex-shrink-0"
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ
          ================================================================ */}
      <section className="bg-black py-20 lg:py-24" aria-label="Frequently Asked Questions">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-white/55 text-center mb-12">
              Everything you need to know about shipping with Mobtel.
            </p>

            <div className="divide-y divide-white/10">
              {FAQS.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left gap-4"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-white font-medium text-[0.9375rem]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        'text-white/40 flex-shrink-0 transition-transform duration-200',
                        openFaq === i && 'rotate-180',
                      )}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="text-white/60 text-sm leading-relaxed pb-5">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          App Download Banner
          ================================================================ */}
      <section className="bg-gray-50 py-20 lg:py-24" aria-label="Mobile App Download">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Manage Deliveries On the Go</h2>
          <p className="text-gray-500 text-base leading-relaxed mt-3">
            The Mobtel app gives you one-tap booking, live tracking, and instant
            notifications — right from your pocket.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button
              type="button"
              disabled
              className="border border-gray-200 rounded-lg px-6 py-3 text-[0.9375rem] font-semibold text-gray-900 bg-white opacity-50 cursor-not-allowed"
            >
              Download on the App Store
            </button>
            <button
              type="button"
              disabled
              className="border border-gray-200 rounded-lg px-6 py-3 text-[0.9375rem] font-semibold text-gray-900 bg-white opacity-50 cursor-not-allowed"
            >
              Get it on Google Play
            </button>
          </div>
          <p className="text-gray-400 text-xs mt-4 leading-relaxed">
            Mobile apps coming soon. Manage your shipments from the web dashboard in the meantime.
          </p>
        </div>
      </section>
    </main>
  )
}
