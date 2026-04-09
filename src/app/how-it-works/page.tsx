import type { Metadata } from "next";
import Link from "next/link";
import BookCalButton from "@/components/BookCalButton";

export const metadata: Metadata = {
  title: "How It Works — Launch in Under 2 Weeks",
  description:
    "From demo call to a fully live marketing system in 7-10 business days. See exactly how Estimate Engine builds your contractor website, review funnel, and automations.",
};

const steps = [
  {
    number: "01",
    title: "Book Your Demo Call",
    duration: "20 minutes",
    icon: "📞",
    description:
      "Everything starts with a 20-minute call. We're not going to waste your time with a long pitch deck. This call is about you — your business, your market, your goals, and what's currently broken in your marketing.",
    details: [
      "We learn about your trade, service area, and target customers",
      "We audit your current online presence (website, reviews, Google Business)",
      "We show you a live demo of what the system looks like for a contractor in your trade",
      "We tell you what we'd build for you and what results to expect",
      "You get a clear proposal before you ever pay a dollar",
    ],
  },
  {
    number: "02",
    title: "Complete Your Intake Form",
    duration: "15–20 minutes on your end",
    icon: "📋",
    description:
      "Once you're on board, we send you a simple intake form. This is where we capture everything we need to build your system — your brand colors, service offerings, service area, photos, and any existing assets. Most contractors complete it in under 20 minutes.",
    details: [
      "Upload your logo (or we'll design one for you)",
      "Tell us your services, pricing tiers, and service area",
      "Share any existing photos of your work and team",
      "List your competitors so we know who we're beating",
      "Answer a few questions about your ideal customer",
    ],
  },
  {
    number: "03",
    title: "We Build Everything",
    duration: "7–10 business days",
    icon: "⚙️",
    description:
      "While you're out running jobs, our team is building your entire marketing system from scratch. No templates, no drag-and-drop builders, no outsourced work. Real developers and designers building something that actually converts.",
    details: [
      "15–20 page custom website built to rank on Google",
      "All automations configured (missed call text back, lead follow-up sequences)",
      "5-star review funnel set up and connected to Google & Facebook",
      "SMS marketing templates built and loaded into your account",
      "On-site SEO optimization across every page",
    ],
  },
  {
    number: "04",
    title: "Launch Call & Go Live",
    duration: "25 minutes",
    icon: "🚀",
    description:
      "Your launch call is where we walk you through your new system — every page, every automation, every tool. You'll leave knowing exactly how everything works. Then we flip the switch and you're live.",
    details: [
      "Full walkthrough of your website, page by page",
      "Demo of all automations so you know what your customers experience",
      "Training on how to send a text marketing campaign in under 2 minutes",
      "Review of your Google Business and review funnel setup",
      "Clear next steps and what to track in month one",
    ],
  },
];

const features = [
  {
    icon: "🖥️",
    title: "Functional Website",
    desc: "15–20 page site built for local SEO and conversions. Every page has a job to do.",
    bullets: ["Homepage, About, Services, FAQ, Contact", "City/area landing pages for local SEO", "Online booking or contact form integration", "Speed-optimized under 2 seconds"],
  },
  {
    icon: "📲",
    title: "Missed Call Text Back",
    desc: "An AI-powered system that texts every missed caller within 30 seconds to keep the lead warm.",
    bullets: ["Instant response — 30 seconds from missed call", "AI handles basic questions (hours, pricing, availability)", "Escalates to you when the lead is ready to book", "Full conversation history in your dashboard"],
  },
  {
    icon: "⭐",
    title: "5-Star Review Funnel",
    desc: "Automatically asks your happy customers for a review right after every job.",
    bullets: ["Triggered automatically post-job via SMS", "Happy customers go straight to Google", "Unhappy customers go to a private feedback form", "Tracks review count and average rating over time"],
  },
  {
    icon: "📣",
    title: "One-Click Campaigns",
    desc: "Pre-built text marketing campaigns you can send to your entire customer list in seconds.",
    bullets: ["Seasonal promotion templates per trade", "\"Slow week\" campaigns to fill your schedule fast", "Track opens, replies, and booked appointments", "Build your customer list automatically over time"],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-[#f7f7f7]">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-[#e8a743] text-sm font-semibold uppercase tracking-widest mb-4">
            The Process
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1a1a1a] mb-5">
            From Call to Live{" "}
            <span className="text-[#e8a743]">in Under 2 Weeks</span>
          </h1>
          <p className="text-gray-500 text-lg">
            No 3-month onboarding. No weekly check-in calls. No waiting for someone to get
            back to you. We move fast because your business can&apos;t afford to wait.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Vertical connector */}
                {i < steps.length - 1 && (
                  <div className="hidden sm:block absolute left-10 top-20 bottom-0 w-0.5 bg-gradient-to-b from-[#e8a743]/40 to-transparent z-0" />
                )}

                <div className="relative z-10 flex gap-6 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm card-hover">
                  {/* Step icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#e8a743]/10 border-2 border-[#e8a743] rounded-full flex flex-col items-center justify-center">
                      <span className="text-xl">{step.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-[#e8a743] font-black text-sm">Step {step.number}</span>
                      <span className="bg-[#e8a743]/10 text-[#c98a2a] text-xs font-bold px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{step.description}</p>
                    <ul className="flex flex-col gap-2">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-[#e8a743] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-500 text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep Dives */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-[#e8a743] text-sm font-semibold uppercase tracking-widest mb-4">
              What You Get
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-4">
              Inside Your Marketing System
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Every tool, explained. Here&apos;s what&apos;s running behind the scenes once you go live.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-gray-200 rounded-2xl p-7 card-hover shadow-sm">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-black text-[#1a1a1a] mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{f.desc}</p>
                <ul className="flex flex-col gap-2.5">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="text-[#e8a743] font-bold text-sm flex-shrink-0">→</span>
                      <span className="text-gray-600 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Book your free 20-minute demo. No commitment required — just a conversation.
          </p>
          <BookCalButton className="inline-flex items-center gap-2 bg-[#e8a743] hover:bg-[#c98a2a] text-white font-black px-8 py-4 rounded-xl text-lg transition-colors shadow-lg">
            Book A Demo Call →
          </BookCalButton>
          <p className="text-gray-400 text-sm mt-4">Launch in 7–10 business days. No long-term contract.</p>
        </div>
      </section>
    </div>
  );
}
