export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 460 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[460px]"
      aria-hidden="true"
    >
      {/* ── Notification chip (floating top-right) ── */}
      <rect x="200" y="2" width="252" height="62" rx="16" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.11)" strokeWidth="1"/>
      {/* icon bg */}
      <rect x="218" y="13" width="36" height="36" rx="10" fill="rgba(195,32,38,0.18)"/>
      {/* box lid */}
      <rect x="226" y="18" width="20" height="7" rx="2" fill="#c32026"/>
      {/* box body */}
      <rect x="226" y="24" width="20" height="13" rx="1" fill="#c32026" opacity="0.75"/>
      {/* ribbon */}
      <line x1="236" y1="18" x2="236" y2="37" stroke="white" strokeWidth="1.5" opacity="0.55"/>
      {/* text */}
      <text x="264" y="33" fill="white" fontSize="12.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="600">Package picked up</text>
      <text x="264" y="51" fill="rgba(255,255,255,0.42)" fontSize="11" fontFamily="Inter, system-ui, sans-serif">2 minutes ago</text>

      {/* ── Main tracking card ── */}
      <rect x="0" y="48" width="370" height="242" rx="20" fill="rgba(255,255,255,0.055)" stroke="rgba(255,255,255,0.09)" strokeWidth="1"/>

      {/* Tracking ID label */}
      <text x="24" y="86" fill="rgba(255,255,255,0.32)" fontSize="10" fontFamily="Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="2">TRACKING ID</text>
      <text x="24" y="108" fill="white" fontSize="20" fontFamily="Inter, system-ui, sans-serif" fontWeight="700">MBT-000123</text>

      {/* In Transit badge */}
      <rect x="272" y="86" width="78" height="26" rx="13" fill="rgba(195,32,38,0.14)" stroke="rgba(195,32,38,0.35)" strokeWidth="1"/>
      <circle cx="286" cy="99" r="3.5" fill="#c32026"/>
      <text x="296" y="104" fill="#c32026" fontSize="11" fontFamily="Inter, system-ui, sans-serif" fontWeight="600">In Transit</text>

      {/* Divider */}
      <line x1="24" y1="126" x2="346" y2="126" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

      {/* Route progress track */}
      {/* Background line */}
      <line x1="52" y1="190" x2="318" y2="190" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Progress (Lagos → Ibadan complete) */}
      <line x1="52" y1="190" x2="185" y2="190" stroke="#c32026" strokeWidth="2.5" strokeLinecap="round"/>

      {/* Lagos node — done */}
      <circle cx="52" cy="190" r="9" fill="#c32026"/>
      <circle cx="52" cy="190" r="3.5" fill="white"/>
      {/* checkmark */}
      <polyline points="48,190 51,193 57,186" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      {/* Ibadan node — active (pulsing ring) */}
      <circle cx="185" cy="190" r="16" fill="rgba(195,32,38,0.1)" stroke="rgba(195,32,38,0.25)" strokeWidth="1.5"/>
      <circle cx="185" cy="190" r="9" fill="#c32026"/>
      {/* truck silhouette (simplified) */}
      <rect x="179" y="186" width="12" height="8" rx="1.5" fill="white" opacity="0.9"/>
      <path d="M191 188 L194 188 L196 191 L196 194 L191 194 Z" fill="white" opacity="0.9"/>
      <circle cx="181" cy="195" r="2" fill="rgba(195,32,38,0.9)"/>
      <circle cx="194" cy="195" r="2" fill="rgba(195,32,38,0.9)"/>

      {/* Abuja node — pending */}
      <circle cx="318" cy="190" r="9" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"/>
      <circle cx="318" cy="190" r="3.5" fill="rgba(255,255,255,0.2)"/>

      {/* City labels */}
      <text x="52" y="214" fill="rgba(255,255,255,0.72)" fontSize="11.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="500" textAnchor="middle">Lagos</text>
      <text x="185" y="214" fill="white" fontSize="11.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="600" textAnchor="middle">Ibadan</text>
      <text x="318" y="214" fill="rgba(255,255,255,0.38)" fontSize="11.5" fontFamily="Inter, system-ui, sans-serif" fontWeight="500" textAnchor="middle">Abuja</text>

      {/* ETA */}
      <text x="24" y="248" fill="rgba(255,255,255,0.32)" fontSize="10" fontFamily="Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="2">ESTIMATED ARRIVAL</text>
      <text x="24" y="270" fill="white" fontSize="16" fontFamily="Inter, system-ui, sans-serif" fontWeight="600">Today · 4:30 PM</text>

      {/* ── On-time stat chip (floating bottom-right) ── */}
      <rect x="250" y="306" width="204" height="80" rx="16" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.09)" strokeWidth="1"/>
      <text x="270" y="332" fill="rgba(255,255,255,0.32)" fontSize="10" fontFamily="Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="2">ON-TIME RATE</text>
      <text x="270" y="368" fill="white" fontSize="32" fontFamily="Inter, system-ui, sans-serif" fontWeight="700">98.7%</text>

      {/* ── Delivery count chip (floating bottom-left) ── */}
      <rect x="2" y="312" width="180" height="72" rx="16" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.09)" strokeWidth="1"/>
      <text x="22" y="338" fill="rgba(255,255,255,0.32)" fontSize="10" fontFamily="Inter, system-ui, sans-serif" fontWeight="600" letterSpacing="2">DELIVERED</text>
      <text x="22" y="368" fill="white" fontSize="32" fontFamily="Inter, system-ui, sans-serif" fontWeight="700">50K+</text>

      {/* ── Decorative accent dots ── */}
      <circle cx="428" cy="130" r="4" fill="rgba(195,32,38,0.2)"/>
      <circle cx="442" cy="152" r="2.5" fill="rgba(255,255,255,0.1)"/>
      <circle cx="418" cy="162" r="2" fill="rgba(255,255,255,0.07)"/>
      <circle cx="446" cy="112" r="3" fill="rgba(255,255,255,0.08)"/>
      <circle cx="210" cy="302" r="3" fill="rgba(195,32,38,0.15)"/>
      <circle cx="196" cy="318" r="2" fill="rgba(255,255,255,0.08)"/>
    </svg>
  )
}
