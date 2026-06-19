# Product Requirements Document — Mobtel Logistics

## Overview

Mobtel is a tech-enabled logistics platform offering on-demand and scheduled parcel delivery across cities and states. The product targets individuals and businesses who need fast, trackable, and reliable shipping. The platform includes a public-facing website and an authenticated dashboard for managing shipments.

---

## Target Users

| Persona | Description |
|---|---|
| Individual Sender | Someone shipping personal items, gifts, or documents |
| SME/Business Owner | E-commerce seller or business with recurring delivery needs |
| Corporate Client | Company with bulk or contract logistics requirements |
| Rider/Driver | Dispatch agent fulfilling delivery jobs |
| Admin | Internal team managing operations, disputes, and accounts |

---

## Pages & Features

---

### 1. Home Page

**Goal:** Convert visitors into senders — clearly communicate the service, build trust, and surface a quick path to booking or tracking.

| Section | Features | Notes |
|---|---|---|
| Navigation | Logo, nav links (Home, About, Track, Contact), Login/Signup CTA | Sticky on scroll |
| Hero | Headline + subtext, "Send a Package" CTA, background image/video | Mobile-first layout |
| Quick Track Widget | Inline tracking number input + "Track" button | Redirects to Track Shipment page with result |
| Services Overview | Cards for: Same-day, Next-day, Interstate, Bulk/Business, International | Each card links to a service detail section or page |
| How It Works | 3-step flow: Book → Drop off / Pick up → Delivered | Icon-based visual, keep it simple |
| Coverage Map | Interactive or static map showing covered cities/states | Highlight key routes |
| Why Choose Us | Trust signals: delivery success rate, cities covered, years in operation, 24/7 support | Pull from real data if available |
| Pricing Teaser | Starting-from price or link to pricing calculator | Drive leads who are comparing options |
| Testimonials | Customer reviews, star ratings, optional logos of business clients | 3–5 rotating cards |
| Partner Logos | Logos of e-commerce platforms, banks, or corporate partners | Social proof |
| App Download Banner | Links to iOS and Android apps (if applicable) | |
| Footer | Links to all pages, socials, address, copyright | |

---

### 2. About Page

**Goal:** Build trust and humanize the brand for customers who want to know who they're handing their packages to.

| Section | Features | Notes |
|---|---|---|
| Brand Story | Founding story, mission statement, vision | Keep concise, 2–3 paragraphs |
| Core Values | Icons + short descriptions (e.g., Speed, Reliability, Transparency) | |
| Key Metrics | Packages delivered, cities covered, years in operation, happy customers | Animated counters on scroll |
| Team | Photos and bios of leadership team (optional for early stage) | |
| Milestones / Timeline | Key company achievements since founding | |
| Certifications & Compliance | Regulatory licenses, insurance coverage, data compliance | |
| Partners & Integrations | E-commerce platforms, payment gateways, government bodies | |

---

### 3. Track Shipment Page

**Goal:** Let anyone (sender, recipient, or third party) check the real-time status of a shipment using a tracking number.

| Section | Features | Notes |
|---|---|---|
| Tracking Input | Text field for waybill/tracking number, "Track" button | Supports multiple number formats |
| Status Timeline | Step-by-step progress: Booked → Picked Up → In Transit → Out for Delivery → Delivered | Color-coded, current step highlighted |
| Shipment Details | From/To location, estimated delivery date, package type, weight | Masked for privacy if needed |
| Live Map (optional) | Map showing current driver location or last-known checkpoint | Real-time if GPS data is available |
| Delivery Proof | Photo of delivered package, recipient name/signature | Shown post-delivery |
| Contact Support | CTA to reach support if there's an issue with the shipment | |
| Share Tracking Link | One-click shareable link to this tracking result | Useful for senders to share with recipients |

---

### 4. Contact Us Page

**Goal:** Provide clear, low-friction paths for customers and businesses to reach support.

| Section | Features | Notes |
|---|---|---|
| Contact Form | Name, email, phone, subject (dropdown), message, submit | Goes to support inbox / CRM |
| Phone & Email | Dedicated lines: general, business, complaints | Click-to-call on mobile |
| Office Locations | Address(es), embedded Google Map, business hours | |
| Live Chat Widget | In-page chat (e.g., Intercom, Crisp, or custom) | Offline fallback to email |
| Social Links | WhatsApp, Instagram, Twitter/X, LinkedIn | WhatsApp especially important for Nigerian market |
| FAQ Teaser | 3–5 common questions with answers, link to full Help Center | Reduces repeat contact volume |

---

### 5. Privacy Policy Page

**Goal:** Fulfill legal obligations and build user trust around data handling.

| Section | Content |
|---|---|
| Data Collected | What personal data is gathered (name, address, payment info, device/location data) |
| How Data Is Used | Delivery fulfillment, account management, marketing (with consent), analytics |
| Data Sharing | Third parties (payment processors, couriers, regulators) — no sale of data |
| Data Retention | How long data is kept and deletion process |
| User Rights | Access, correction, deletion, portability requests |
| Cookies | Types used, opt-out options |
| Security Measures | Encryption, access controls |
| Contact for Privacy | Dedicated email for data requests |
| Last Updated | Date stamp, version number |

---

### 6. Terms & Conditions Page

**Goal:** Set clear expectations for service use, liability, and disputes.

| Section | Content |
|---|---|
| Acceptance of Terms | Agreement upon account creation or platform use |
| Service Description | What Mobtel does and does not cover |
| User Obligations | Accurate sender/recipient info, prohibited items list |
| Prohibited Items | Hazardous materials, illegal goods, perishables (define clearly) |
| Pricing & Payment | How fees are calculated, payment terms, failed payment handling |
| Liability & Claims | Max liability per shipment, claim process and timeframe |
| Loss & Damage Policy | Conditions for refunds or compensation |
| Delivery Timeframes | SLA definitions, what counts as a delay |
| Cancellation Policy | Cancellation window, refund eligibility |
| Dispute Resolution | Process for raising and resolving disputes |
| Account Suspension | Grounds for suspension or termination |
| Changes to Terms | How users are notified of updates |
| Governing Law | Jurisdiction (e.g., Federal Republic of Nigeria) |

---

### 7. Dashboard (Authenticated Users)

**Goal:** Give senders full control over their shipments, history, addresses, and account — reducing the need to contact support for routine tasks.

#### 7.1 Overview / Home

| Feature | Description |
|---|---|
| Summary Cards | Total shipments, active deliveries, deliveries this month, total spend |
| Active Shipments Widget | Quick view of in-transit packages with status and estimated delivery |
| Quick Actions | "Send a Package", "Track Shipment", "Reorder" buttons |
| Recent Activity Feed | Last 5 orders with status badges |
| Notifications Panel | Unread alerts for delivery updates, payment issues, promo offers |

#### 7.2 Send a Package (New Shipment)

| Feature | Description |
|---|---|
| Sender Details | Pre-filled from account, editable |
| Recipient Details | Name, phone, address — saved to address book option |
| Package Details | Weight, dimensions, category (document, fragile, etc.), declared value |
| Delivery Type | Same-day, next-day, interstate, scheduled pickup |
| Pickup Option | Home pickup or drop-off at agent location |
| Price Quote | Real-time fare estimate based on inputs |
| Promo Code | Apply discount codes |
| Payment | Card, bank transfer, wallet balance |
| Booking Confirmation | Waybill/tracking number generated, shareable link |

#### 7.3 Shipment History

| Feature | Description |
|---|---|
| Shipment List | Paginated table: date, tracking number, origin, destination, status, cost |
| Filters | By date range, status, delivery type |
| Search | By recipient name, tracking number, or destination |
| Shipment Detail View | Full timeline, proof of delivery, invoice download |
| Reorder | One-click to repeat a previous shipment |
| Dispute / Claim | Raise an issue directly from the shipment detail |

#### 7.4 Address Book

| Feature | Description |
|---|---|
| Saved Addresses | List of frequent sender/recipient addresses |
| Add / Edit / Delete | Full CRUD on saved addresses |
| Set Default | Mark a default pickup address |
| Labels | Nickname addresses (e.g., "Home", "Office", "Lagos Warehouse") |

#### 7.5 Wallet & Payments

| Feature | Description |
|---|---|
| Wallet Balance | Current balance, top-up button |
| Top-Up | Fund via card, bank transfer |
| Transaction History | Credits and debits with timestamps |
| Saved Cards | Add/remove payment cards |
| Auto-Pay Setting | Default payment method for shipments |
| Invoices | Download invoices per transaction or per period |

#### 7.6 Notifications & Alerts

| Feature | Description |
|---|---|
| In-App Notifications | Order status changes, payment confirmations, promotions |
| Email Preferences | Toggle email alerts per notification type |
| SMS Alerts | Opt-in for SMS on key events (pickup, delivery) |

#### 7.7 Account & Settings

| Feature | Description |
|---|---|
| Profile | Edit name, email, phone, profile photo |
| Password & Security | Change password, enable 2FA |
| Business Profile | Company name, RC number (for business accounts), billing address |
| API Access | API key management (for business/developer accounts integrating Mobtel) |
| Referrals | Referral link, refer-and-earn tracking |
| Delete Account | GDPR/NDPR-compliant account deletion flow |

#### 7.8 Support (in-dashboard)

| Feature | Description |
|---|---|
| Help Center | Searchable FAQ and guides |
| Open a Ticket | Submit a support request linked to a specific shipment |
| Live Chat | Access to agent chat from within the dashboard |
| Ticket History | View status of past support requests |

---

## Non-Functional Requirements

| Category | Requirement |
|---|---|
| Performance | Pages load in < 2s on 3G; tracking updates within 30s of status change |
| Availability | 99.5% uptime SLA; graceful degradation for tracking if backend is down |
| Security | HTTPS everywhere, data encryption at rest, PCI-DSS compliant payment handling |
| Accessibility | WCAG 2.1 AA on all public pages |
| Compliance | NDPA (Nigeria Data Protection Act) compliant |
| Mobile | Fully responsive; dashboard usable on small screens |
| Internationalisation | English primary; architecture supports multi-language later |

---

## Out of Scope (v1)

- Mobile apps (iOS / Android)
- Rider-facing app / driver portal
- Admin operations dashboard
- Multi-vendor marketplace
- International cross-border shipments
- Insurance underwriting integration
