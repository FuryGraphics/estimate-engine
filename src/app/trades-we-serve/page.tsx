import type { Metadata } from "next";
import Link from "next/link";
import BookCalButton from "@/components/BookCalButton";

export const metadata: Metadata = {
  title: "Trades We Serve — Estimate Engine",
  description: "Estimate Engine builds marketing systems for 20+ home service trades. Roofing, plumbing, HVAC, electricians, landscaping, and more.",
};

const trades = [
  {
    icon: "🏠",
    label: "Roofing",
    desc: "Roof replacements, repairs, inspections, and new construction. We help roofers dominate local search and convert storm-chasing traffic into booked jobs.",
    wins: ["Storm lead capture pages", "Insurance claim SEO content", "Before/after gallery pages"],
  },
  {
    icon: "🔧",
    label: "Plumbing",
    desc: "Emergency plumbers, residential, commercial — if you unclog drains or install water heaters, your phone should be ringing more than it is.",
    wins: ["Emergency plumbing SEO", "24/7 missed call text back", "Service area landing pages"],
  },
  {
    icon: "❄️",
    label: "HVAC",
    desc: "AC installs, furnace replacements, seasonal tune-ups. HVAC is one of the most competitive trades — your online presence needs to match your skill level.",
    wins: ["Seasonal campaign templates", "Maintenance plan promotion funnels", "Service page optimization"],
  },
  {
    icon: "⚡",
    label: "Electrician",
    desc: "Panel upgrades, EV charger installs, rewiring, lighting — homeowners search Google first. Make sure they find you, not the other guy.",
    wins: ["EV charger install pages", "Panel upgrade targeting", "Local citation building"],
  },
  {
    icon: "🌿",
    label: "Landscaping",
    desc: "Lawn care, design, hardscaping, irrigation, seasonal cleanup. Landscaping is highly seasonal — your marketing needs to work year-round.",
    wins: ["Seasonal promotion campaigns", "Before/after portfolio pages", "Monthly maintenance upsell funnels"],
  },
  {
    icon: "🎨",
    label: "Painting",
    desc: "Interior, exterior, commercial, residential. Painting is one of the hardest trades to differentiate in. We help you stand out where it counts.",
    wins: ["Color inspiration landing pages", "Before/after gallery", "Neighborhood-specific pages"],
  },
  {
    icon: "🔨",
    label: "Handyman",
    desc: "The Swiss Army knife of home services. You do everything — your website should be able to describe it all while still converting visitors into callers.",
    wins: ["Service category pages", "Multi-service lead funnels", "Recurring client campaigns"],
  },
  {
    icon: "💦",
    label: "Pressure Washing",
    desc: "Driveway, roof, deck, commercial — pressure washing has incredible margins but awful online visibility. We fix that.",
    wins: ["Driveway & deck pages", "Commercial contract landing pages", "Seasonal spring/fall campaigns"],
  },
  {
    icon: "🏗️",
    label: "Remodeling",
    desc: "Kitchen, bath, basement, full gut jobs. High-ticket remodelers need high-trust websites. We build the kind of site that closes $30K–$200K projects.",
    wins: ["Project portfolio showcases", "Quote request forms", "Design consultation funnels"],
  },
  {
    icon: "🐜",
    label: "Pest Control",
    desc: "Termites, rodents, general pest — recurring service models need a marketing system that captures leads AND re-engages past customers.",
    wins: ["Pest-specific service pages", "Recurring plan upsell campaigns", "Seasonal infestation content"],
  },
  {
    icon: "📦",
    label: "Moving",
    desc: "Local, long-distance, commercial. Moving is high-intent and price-sensitive. We help movers get found and convert quickly.",
    wins: ["Quote calculator pages", "Local moving city pages", "Review funnel for repeat/referral"],
  },
  {
    icon: "🪵",
    label: "Flooring",
    desc: "Hardwood, tile, LVP, carpet. Flooring is visually driven — your website needs to showcase your work in a way that makes customers say yes before they even call.",
    wins: ["Material-specific gallery pages", "Showroom virtual tour placeholders", "Financing page copy"],
  },
  {
    icon: "🪴",
    label: "Decks & Patios",
    desc: "Composite decks, pergolas, paver patios, outdoor kitchens. Big-ticket outdoor projects start with inspiration. We put you in front of homeowners who are in buying mode.",
    wins: ["Project type landing pages", "Seasonal spring campaign push", "Design consultation funnels"],
  },
  {
    icon: "🏊",
    label: "Pool Construction",
    desc: "Inground pools, hot tubs, water features. Pool construction averages $60K+ per project. Your website should close at that price level.",
    wins: ["Luxury project portfolio", "Financing page", "Design & planning consultation funnel"],
  },
  {
    icon: "📋",
    label: "General Contractors",
    desc: "New builds, additions, commercial builds. GCs need a website that demonstrates scale, experience, and trust — and gets them serious commercial RFQs.",
    wins: ["Commercial project case studies", "Subcontractor network page", "RFQ landing pages"],
  },
  {
    icon: "🌳",
    label: "Tree Service",
    desc: "Removal, trimming, stump grinding, emergency storm work. Tree service is weather-driven and local. Your marketing needs to be fast and hyper-local.",
    wins: ["Emergency storm service pages", "Tree type service pages", "Before/after removal gallery"],
  },
  {
    icon: "🪟",
    label: "Windows & Doors",
    desc: "Replacement windows, entry doors, patio doors, storm windows. High-margin, high-competition. We help you win the comparison clicks.",
    wins: ["Product comparison pages", "Energy savings calculator content", "Manufacturer warranty pages"],
  },
  {
    icon: "🧱",
    label: "Siding",
    desc: "Vinyl, fiber cement, wood, metal. Siding is all about curb appeal. Your website should show it, not just describe it.",
    wins: ["Material comparison guides", "Color visualizer placeholder", "Neighborhood reference pages"],
  },
  {
    icon: "🛣️",
    label: "Paving",
    desc: "Asphalt, concrete driveways, parking lots, commercial paving. High-value, commercial-friendly. We help pavers win both residential and commercial contracts.",
    wins: ["Commercial bid request pages", "Driveway repair vs replace content", "Fleet/property manager pages"],
  },
  {
    icon: "⛰️",
    label: "Hardscaping",
    desc: "Retaining walls, fire pits, outdoor living spaces, pavers. Premium hardscaping clients want to be inspired before they call. Your site should do that job.",
    wins: ["Outdoor room gallery", "Luxury project portfolio", "Design consultation funnel"],
  },
];

export default function TradesWeServePage() {
  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-[#f7f7f7]">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-[#e8a743] text-sm font-semibold uppercase tracking-widest mb-4">
            Trades We Serve
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1a1a1a] mb-5">
            Built For{" "}
            <span className="text-[#e8a743]">Every Trade</span>
          </h1>
          <p className="text-gray-500 text-lg">
            We don&apos;t use the same template for every contractor. Your trade is different, your customers
            search differently, and your website should reflect that.
          </p>
        </div>
      </section>

      {/* Trades Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trades.map((trade) => (
              <div
                key={trade.label}
                className="bg-white border border-gray-200 rounded-2xl p-6 card-hover shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{trade.icon}</div>
                  <h3 className="text-[#1a1a1a] font-black text-xl">{trade.label}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{trade.desc}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-3">
                    We Build For Your Trade
                  </p>
                  <ul className="flex flex-col gap-2">
                    {trade.wins.map((w) => (
                      <li key={w} className="flex items-start gap-2">
                        <span className="text-[#e8a743] text-sm font-bold flex-shrink-0">✓</span>
                        <span className="text-gray-600 text-xs">{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e8a743] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
            Don&apos;t See Your Trade?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            If you run a home service business, we can almost certainly help.
            Jump on a call and we&apos;ll tell you exactly what we&apos;d build.
          </p>
          <BookCalButton className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#c98a2a] font-black px-8 py-4 rounded-xl text-lg transition-colors shadow-lg">
            Book A Free Call →
          </BookCalButton>
        </div>
      </section>
    </div>
  );
}
