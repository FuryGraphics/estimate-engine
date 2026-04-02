"use client";

import { useState } from "react";

const features = [
  "Functional Website (15–20 pages)",
  "Automated Lead Follow-Up System",
  "Missed Call Text Back (AI-powered)",
  "5-Star Google Review Funnel",
  "One-Click Text Marketing Campaigns",
  "On-Site SEO Optimization",
  "Mobile-Optimized Design",
  "Monthly Performance Reports",
  "Dedicated Account Manager",
  "Unlimited Content Updates",
];

const addOns = [
  {
    name: "Google My Business Optimization",
    price: "+$97/mo",
    desc: "Get found in the local 3-pack. We optimize and manage your GMB so you rank when people search near you.",
  },
  {
    name: "Advanced SEO",
    price: "+$197/mo",
    desc: "Long-form content, backlinks, and keyword strategies that drive organic traffic over time.",
  },
  {
    name: "Google Ads Management",
    price: "+$297/mo",
    desc: "Paid search campaigns managed by pros. We write the ads, set the targeting, and optimize every dollar.",
  },
];

export default function PricingToggle() {
  const [annual, setAnnual] = useState(false);

  const monthlyPrice = 297;
  const annualMonthlyPrice = Math.round(monthlyPrice * 0.8);

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-12 pt-8">
        <span className={`text-sm font-medium ${!annual ? "text-[#1a1a1a]" : "text-gray-400"}`}>
          Monthly
        </span>
        <button
          onClick={() => setAnnual(!annual)}
          className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
            annual ? "bg-[#e8a743]" : "bg-gray-200"
          }`}
          aria-label="Toggle annual billing"
        >
          <span
            className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
              annual ? "translate-x-8" : "translate-x-1"
            }`}
          />
        </button>
        <span className={`text-sm font-medium flex items-center gap-2 ${annual ? "text-[#1a1a1a]" : "text-gray-400"}`}>
          Annually
          {annual && (
            <span className="bg-green-100 text-green-600 text-xs font-bold px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          )}
        </span>
      </div>

      {/* Main Pricing Card */}
      <div className="max-w-lg mx-auto">
        <div className="relative rounded-2xl border-2 border-[#e8a743] bg-white p-8 shadow-xl gold-glow">
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-[#e8a743] text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
              Most Popular
            </span>
          </div>

          <div className="text-center mb-8 mt-2">
            <h3 className="text-[#1a1a1a] font-black text-2xl mb-2">Estimate Engine Pro</h3>
            <p className="text-gray-500 text-sm mb-6">Everything you need to win online. Nothing you don&apos;t.</p>
            <div className="flex items-end justify-center gap-1">
              <span className="text-5xl font-black text-[#1a1a1a]">
                ${annual ? annualMonthlyPrice : monthlyPrice}
              </span>
              <span className="text-gray-400 text-lg mb-2">/mo</span>
            </div>
            {annual && (
              <p className="text-gray-500 text-sm mt-2">
                Billed annually — ${annualMonthlyPrice * 12}/yr
              </p>
            )}
            <p className="text-gray-400 text-sm mt-1">No setup fees. No contracts. Cancel anytime.</p>
          </div>

          <ul className="flex flex-col gap-3 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#e8a743] flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="block w-full bg-[#e8a743] hover:bg-[#c98a2a] text-white font-black text-center py-4 rounded-xl text-base transition-colors shadow-md"
          >
            Get Started — Book A Call →
          </a>
        </div>
      </div>

      {/* Add-ons */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-black text-[#1a1a1a] text-center mb-3">Optional Add-Ons</h2>
        <p className="text-gray-500 text-center mb-10 text-sm">
          Already included in Pro? These go even further for contractors who want to dominate.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {addOns.map((addon) => (
            <div
              key={addon.name}
              className="rounded-xl border border-gray-200 bg-white p-6 card-hover shadow-sm"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-[#1a1a1a] font-bold text-base">{addon.name}</h3>
                <span className="text-[#e8a743] font-black text-sm whitespace-nowrap ml-2">
                  {addon.price}
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{addon.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
