import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import ResultsSection from "@/components/ResultsSection";

/* ── Data ────────────────────────────────────────────────── */
const products = [
  {
    icon: "🖥️",
    title: "Functional Website",
    subtitle: "Built to convert — not just look pretty",
    description:
      "Most contractor websites are digital brochures that do nothing. Yours will be a 24/7 sales machine. We build 15–20 page sites engineered to rank on Google, load fast, and turn visitors into booked jobs. Every page has a clear call-to-action. No fluff, no filler.",
    bullets: [
      "15–20 custom pages tailored to your trade",
      "Designed for mobile-first browsing",
      "Built for local SEO from day one",
      "Lightning fast — under 2 second load time",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    icon: "⭐",
    title: "5-Star Review Funnel",
    subtitle: "More Google reviews on autopilot",
    description:
      "Your competitors have more reviews than you — and that's why they're getting the calls. Our automated review funnel sends your happy customers a text after every job, collects their 5-star review, and buries the bad ones before they ever go public. More stars = more calls.",
    bullets: [
      "Automated post-job SMS review requests",
      "Smart filtering — only happy customers get the public link",
      "Direct to Google, Facebook & more",
      "Average contractor sees 3x more monthly reviews",
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    icon: "📲",
    title: "Missed Call Text Back",
    subtitle: "Never lose a lead to voicemail again",
    description:
      "You're on the roof. You can't answer. The customer calls your competitor instead. With our AI-powered missed call text back, anyone who calls and doesn't get an answer gets an instant text from you — keeping the conversation alive until you can talk.",
    bullets: [
      "Instant auto-text within 30 seconds of a missed call",
      "AI responds to common questions on your behalf",
      "Keeps leads warm while you're on the job",
      "Captures more revenue from existing ad spend",
    ],
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
  },
  {
    icon: "📣",
    title: "One-Click Marketing Campaigns",
    subtitle: "Send a promotion in 60 seconds flat",
    description:
      "Have a slow week? Hit send on a text campaign to your entire customer list in one click and watch the phone ring. Summer AC tune-up, roof inspection special, end-of-season deal — we set up the templates, you just press go.",
    bullets: [
      "Pre-built campaign templates for every trade",
      "SMS broadcasts to your entire customer database",
      "Track opens, clicks, and booked appointments",
      "Average ROI of 10–20x on campaign spend",
    ],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
  },
];

const trades = [
  { label: "Roofing", icon: "🏠" },
  { label: "Plumbing", icon: "🔧" },
  { label: "HVAC", icon: "❄️" },
  { label: "Electrician", icon: "⚡" },
  { label: "Landscaping", icon: "🌿" },
  { label: "Painting", icon: "🎨" },
  { label: "Handyman", icon: "🔨" },
  { label: "Pressure Washing", icon: "💦" },
  { label: "Remodeling", icon: "🏗️" },
  { label: "Pest Control", icon: "🐜" },
  { label: "Moving", icon: "📦" },
  { label: "Flooring", icon: "🪵" },
  { label: "Decks & Patios", icon: "🪴" },
  { label: "Pool Construction", icon: "🏊" },
  { label: "General Contractors", icon: "📋" },
  { label: "Tree Service", icon: "🌳" },
  { label: "Windows & Doors", icon: "🪟" },
  { label: "Siding", icon: "🧱" },
  { label: "Paving", icon: "🛣️" },
  { label: "Hardscaping", icon: "⛰️" },
];

const whyUs = [
  {
    icon: "🎯",
    title: "Simple To Use",
    desc: "We built this for contractors — not tech people. If you can send a text, you can use every tool in the system.",
  },
  {
    icon: "💰",
    title: "Affordable",
    desc: "$297/month gets you what agencies charge $2,000+/month for. Stop getting ripped off.",
  },
  {
    icon: "🔓",
    title: "No Contracts",
    desc: "Month-to-month, always. We earn your business every single month or you walk. Simple.",
  },
  {
    icon: "🚫",
    title: "No Bull*hit",
    desc: "No vanity metrics. No 'brand awareness.' We track phone calls, booked appointments, and revenue.",
  },
  {
    icon: "📈",
    title: "We Have Proof",
    desc: "Real contractors, real results. Plumbers, roofers, HVAC techs — we have case studies across 20+ trades.",
  },
  {
    icon: "🔄",
    title: "Constant Improvements",
    desc: "Your system never stagnates. We push updates, new features, and optimizations every single month.",
  },
];

const steps = [
  {
    number: "01",
    title: "Demo Call",
    duration: "20 minutes",
    desc: "We jump on a quick video call to learn about your business, your goals, and what's not working right now. No pitch fest — just a straight conversation.",
  },
  {
    number: "02",
    title: "We Build Your System",
    duration: "7–10 business days",
    desc: "Our team builds your complete marketing system from scratch — website, automations, review funnel, text campaigns. You just answer our intake form and we handle the rest.",
  },
  {
    number: "03",
    title: "Launch Call",
    duration: "25 minutes",
    desc: "We walk you through everything, show you how to use the system, and flip the switch. You'll leave the call knowing exactly how it works and what to expect.",
  },
];

const testimonials = [
  { name: "Mike R.", trade: "Roofing — Dallas, TX", quote: "We went from 4 reviews to 47 in 60 days. The phone won't stop ringing.", rating: 5 },
  { name: "Jason T.", trade: "HVAC — Phoenix, AZ", quote: "Best $297 I spend every month. Period. My old agency charged $2,800 and delivered nothing.", rating: 5 },
  { name: "Carlos M.", trade: "Plumbing — Miami, FL", quote: "The missed call text back alone paid for the whole thing in the first week.", rating: 5 },
  { name: "Derek B.", trade: "Electrician — Chicago, IL", quote: "I was skeptical. Now I send a text campaign whenever I have a slow week. Works every time.", rating: 5 },
  { name: "Tyler S.", trade: "Landscaping — Austin, TX", quote: "We launched in 8 days. The website looks better than companies charging 10x more.", rating: 5 },
  { name: "Brandon K.", trade: "Remodeling — Denver, CO", quote: "The whole system just runs. I don't have to think about marketing anymore.", rating: 5 },
];

const partners = [
  "OpenAI", "Google", "Meta", "GoDaddy", "Twilio", "Zapier", "SEMrush", "Google Analytics", "Canva",
];

/* ── Component ───────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-white">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#fdf6e8_0%,_#ffffff_60%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <div className="inline-flex items-center gap-2 bg-[#e8a743]/10 border border-[#e8a743]/30 rounded-full px-4 py-2 mb-8 fade-in">
            <span className="w-2 h-2 bg-[#e8a743] rounded-full animate-pulse" />
            <span className="text-[#c98a2a] text-sm font-semibold">
              $297/month · No Contracts
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#1a1a1a] leading-[1.05] mb-6 fade-up">
            Website Design &{" "}
            <span className="text-[#e8a743]">Marketing Systems</span>{" "}
            For Contractors
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed fade-up-delay-1">
            Cut the BS. Marketing isn&apos;t rocket science. We&apos;ll give you the tools to
            win — but you have to commit to using them.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-up-delay-2">
            <Link
              href="#"
              className="w-full sm:w-auto bg-[#e8a743] hover:bg-[#c98a2a] text-white font-black px-8 py-4 rounded-xl text-lg transition-colors shadow-lg gold-glow"
            >
              Book A Free Call →
            </Link>
            <Link
              href="/how-it-works"
              className="w-full sm:w-auto border-2 border-gray-200 hover:border-[#e8a743] text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg transition-colors hover:text-[#1a1a1a]"
            >
              See How It Works
            </Link>
          </div>

          {/* Rating badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 fade-up-delay-3">
            {["Google", "Facebook", "Trustpilot"].map((platform) => (
              <div
                key={platform}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 shadow-sm"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#e8a743] text-sm">★</span>
                  ))}
                </div>
                <span className="text-[#1a1a1a] text-sm font-semibold">5.0</span>
                <span className="text-gray-400 text-xs">{platform}</span>
              </div>
            ))}
          </div>

          {/* Hero image */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
              alt="Contractors at work"
              className="w-full h-72 sm:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────────── */}
      <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[#e8a743] text-sm font-semibold uppercase tracking-widest mb-4">
              What You Get
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] mb-4">
              One System. Every Tool You Need.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Stop stitching together 8 different tools. Estimate Engine gives you a complete, integrated marketing system that runs on autopilot.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {products.map((product, index) => (
              <div
                key={product.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}
              >
                {/* Text — swap order on odd items */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 bg-[#e8a743]/10 border border-[#e8a743]/20 rounded-full px-3 py-1.5 mb-4">
                    <span className="text-lg">{product.icon}</span>
                    <span className="text-[#c98a2a] text-xs font-bold uppercase tracking-widest">
                      {product.subtitle}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <ul className="flex flex-col gap-3 mb-8">
                    {product.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#e8a743] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600 text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="#" className="inline-flex items-center gap-2 text-[#e8a743] font-bold hover:text-[#c98a2a] transition-colors">
                    Learn more →
                  </Link>
                </div>

                {/* Image */}
                <div className={`relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRADES GRID ──────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[#e8a743] text-sm font-semibold uppercase tracking-widest mb-4">
              Built For Your Trade
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] mb-4">
              We Work With Every Trade
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              If you show up to job sites and do work with your hands, this is built for you.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {trades.map((trade) => (
              <Link
                key={trade.label}
                href="/trades-we-serve"
                className="flex items-center gap-3 bg-white border border-gray-200 hover:border-[#e8a743] rounded-xl px-4 py-3.5 group transition-all duration-200 hover:shadow-md"
              >
                <span className="text-xl">{trade.icon}</span>
                <span className="text-gray-600 group-hover:text-[#1a1a1a] text-sm font-medium transition-colors">
                  {trade.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/trades-we-serve"
              className="inline-flex items-center gap-2 text-[#e8a743] font-semibold hover:text-[#c98a2a] transition-colors"
            >
              See all trades we serve →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[#e8a743] text-sm font-semibold uppercase tracking-widest mb-4">
              The Process
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] mb-4">
              From Zero to Live in Under 2 Weeks
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              No 3-month onboarding. No 40-page intake forms. Just three calls and a complete system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="relative w-20 h-20 bg-[#e8a743]/10 border-2 border-[#e8a743] rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#e8a743] font-black text-xl">{step.number}</span>
                  {i < steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-[#e8a743]/30" />
                  )}
                </div>
                <span className="inline-block bg-[#e8a743]/10 text-[#c98a2a] text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {step.duration}
                </span>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-[#e8a743] hover:bg-[#c98a2a] text-white font-black px-8 py-4 rounded-xl text-lg transition-colors shadow-lg gold-glow"
            >
              Start With A Demo Call →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[#e8a743] text-sm font-semibold uppercase tracking-widest mb-4">
              Why Contractors Choose Us
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] mb-4">
              We&apos;re Not Like Other Agencies
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Because most agencies are overpriced, overpromising, and underdelivering. We&apos;re not that.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6 card-hover shadow-sm"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-[#1a1a1a] font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT RESULTS ───────────────────────────────── */}
      <ResultsSection />

      {/* ── PARTNERS ─────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-100 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-400 text-xs uppercase tracking-widest font-semibold mb-10">
            Powered by best-in-class tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((partner) => (
              <span
                key={partner}
                className="text-gray-400 hover:text-gray-600 font-bold text-sm uppercase tracking-wide transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <FAQSection />

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#e8a743] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#f0b952_0%,_#e8a743_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block text-white/80 text-sm font-semibold uppercase tracking-widest mb-4">
            Ready to grow?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            Stop Watching Competitors Get All the Calls
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free 20-minute demo call. No pressure, no pitch deck, no BS.
            We&apos;ll show you exactly what we&apos;d build for your business — and what it&apos;ll cost.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#c98a2a] font-black px-10 py-4 rounded-xl text-lg transition-colors shadow-xl"
            >
              Book Your Free Demo Call →
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors hover:bg-white/10"
            >
              See Pricing
            </Link>
          </div>
          <p className="text-white/60 text-sm mt-6">
            $297/month · Month-to-month · Launch in 7–10 days
          </p>
        </div>
      </section>
    </div>
  );
}
