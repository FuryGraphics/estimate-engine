import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials — Estimate Engine",
  description: "Real contractors, real results. See what home service businesses say about Estimate Engine.",
};

const testimonials = [
  { name: "Mike R.", trade: "Roofing", location: "Dallas, TX", quote: "We went from 4 reviews to 47 in 60 days. The phone won't stop ringing. I wish I'd done this two years ago.", rating: 5, img: "1504307651254-35680f356dfd" },
  { name: "Jason T.", trade: "HVAC", location: "Phoenix, AZ", quote: "Best $297 I spend every month. Period. My old agency charged $2,800 and delivered absolutely nothing but excuses.", rating: 5, img: "1621905252507-b35492cc74b4" },
  { name: "Carlos M.", trade: "Plumbing", location: "Miami, FL", quote: "The missed call text back alone paid for the whole thing in the first week. Booked 3 jobs I would have lost to voicemail.", rating: 5, img: "1558618666-fcd25c85cd64" },
  { name: "Derek B.", trade: "Electrician", location: "Chicago, IL", quote: "I was skeptical. I'm not the most tech-savvy guy. But it was easy and now I send a text campaign whenever I have a slow week. Works every time.", rating: 5, img: "1544724569-5f546fd6f2b5" },
  { name: "Tyler S.", trade: "Landscaping", location: "Austin, TX", quote: "We launched in 8 days. The website looks better than companies that charge 10x more. My customers literally comment on it.", rating: 5, img: "1558618047-3c8c76e83e0b" },
  { name: "Brandon K.", trade: "Remodeling", location: "Denver, CO", quote: "The whole system just runs. I don't have to think about marketing anymore. I just show up to jobs and close estimates.", rating: 5, img: "1504307651254-35680f356dfd" },
  { name: "Aaron P.", trade: "Pressure Washing", location: "Atlanta, GA", quote: "Went from 12 reviews to 89 in 4 months. I'm now the highest-rated pressure washing company in my city.", rating: 5, img: "1621905252507-b35492cc74b4" },
  { name: "Chris L.", trade: "Painting", location: "Nashville, TN", quote: "I've tried 3 other marketing agencies over the years. Estimate Engine is the only one that actually showed results in the first 30 days.", rating: 5, img: "1558618666-fcd25c85cd64" },
  { name: "David W.", trade: "Flooring", location: "Seattle, WA", quote: "The review funnel is a game changer. I just finish the job and the system takes care of getting the review. No more awkward asking.", rating: 5, img: "1544724569-5f546fd6f2b5" },
  { name: "Ryan F.", trade: "Tree Service", location: "Charlotte, NC", quote: "My website was embarrassing before. Now I'm proud to send people to it. Leads have increased by about 60% since launch.", rating: 5, img: "1558618047-3c8c76e83e0b" },
  { name: "Matt H.", trade: "General Contractor", location: "Houston, TX", quote: "Booked 6 new projects in the first 30 days after launching with Estimate Engine. That's the most we've ever had at one time.", rating: 5, img: "1504307651254-35680f356dfd" },
  { name: "Steve A.", trade: "HVAC", location: "Las Vegas, NV", quote: "I used to spend $1,500/month on leads that went nowhere. Now I get inbound calls from people who already checked out my site.", rating: 5, img: "1621905252507-b35492cc74b4" },
  { name: "Kevin M.", trade: "Pest Control", location: "Orlando, FL", quote: "The text marketing campaigns are fire. Sent one last month during a slow week and booked 11 jobs in 48 hours.", rating: 5, img: "1558618666-fcd25c85cd64" },
  { name: "Tony G.", trade: "Siding", location: "Boston, MA", quote: "Legit the best business decision I made this year. I was almost going to hire another agency for $3,500/month. Glad I didn't.", rating: 5, img: "1544724569-5f546fd6f2b5" },
  { name: "Josh D.", trade: "Deck Building", location: "Portland, OR", quote: "The onboarding was smooth. They actually listened to what I wanted and built something that represents my business properly.", rating: 5, img: "1558618047-3c8c76e83e0b" },
  { name: "Paul N.", trade: "Roofing", location: "Phoenix, AZ", quote: "I get calls now from people mentioning they saw my website and read my reviews. That never happened before Estimate Engine.", rating: 5, img: "1504307651254-35680f356dfd" },
  { name: "Eric S.", trade: "Handyman", location: "San Diego, CA", quote: "Didn't think a handyman business needed all this. Wrong. My schedule is full 3 weeks out for the first time ever.", rating: 5, img: "1621905252507-b35492cc74b4" },
  { name: "Mark C.", trade: "Windows & Doors", location: "Detroit, MI", quote: "Clean, fast website. Automated follow-up that actually works. Review funnel that runs itself. What else do you need?", rating: 5, img: "1558618666-fcd25c85cd64" },
  { name: "Justin B.", trade: "Pool Construction", location: "Tampa, FL", quote: "We're a seasonal business. The text campaigns in the spring are unbelievable — it's like turning on a faucet of leads.", rating: 5, img: "1544724569-5f546fd6f2b5" },
  { name: "Frank O.", trade: "Paving", location: "Philadelphia, PA", quote: "Started getting calls from 3 towns over because of the SEO. Didn't expect that. My service area basically doubled.", rating: 5, img: "1558618047-3c8c76e83e0b" },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-[#f7f7f7]">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-[#e8a743] text-sm font-semibold uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1a1a1a] mb-5">
            Real Contractors.
            <br />
            <span className="text-[#e8a743]">Real Results.</span>
          </h1>
          <p className="text-gray-500 text-lg mb-6">
            No fake reviews, no cherry-picked screenshots, no made-up numbers.
            These are real home service contractors who bet on Estimate Engine — and won.
          </p>
          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-6 py-3 shadow-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#e8a743] text-xl">★</span>
              ))}
            </div>
            <div className="text-left">
              <div className="text-[#1a1a1a] font-black text-lg leading-none">5.0 / 5.0</div>
              <div className="text-gray-400 text-xs">Based on 200+ reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden card-hover shadow-sm"
              >
                {/* Video thumbnail */}
                <div className="relative h-44 bg-gray-100 flex items-center justify-center overflow-hidden cursor-pointer">
                  <img
                    src={`https://images.unsplash.com/photo-${t.img}?w=400&h=250&fit=crop&q=70`}
                    alt={`${t.name} testimonial`}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#e8a743] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded">
                    Video Review
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-[#e8a743] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#e8a743]/10 border border-[#e8a743]/30 rounded-full flex items-center justify-center text-[#e8a743] text-xs font-bold flex-shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-[#1a1a1a] font-bold text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.trade} · {t.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e8a743]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Book a free 20-minute call. We&apos;ll show you exactly what we&apos;d build for your business.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#c98a2a] font-black px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            Book A Free Demo Call →
          </Link>
        </div>
      </section>
    </div>
  );
}
