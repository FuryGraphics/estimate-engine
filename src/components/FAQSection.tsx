"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "Nope. Month-to-month only. Cancel anytime, no questions asked. We keep clients by actually delivering results — not by trapping them in a 12-month agreement they can't get out of.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "7–10 business days from your demo call. That's faster than most agencies take to reply to your initial email. We've built this process dozens of times — it moves fast.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We'll evaluate it on the call. If it's fixable, great. If it's costing you leads (and it probably is), we'll rebuild it from scratch. Your old site isn't sentimental — it's a business tool.",
  },
  {
    question: "Is this just a website?",
    answer:
      "Not even close. You're getting a complete marketing system: a high-converting contractor website, automated lead follow-up, missed call text back (powered by AI), 5-star review funnels, and one-click text marketing campaigns. It's a whole operation — not just a pretty homepage.",
  },
  {
    question: "What trades do you work with?",
    answer:
      "If you show up to job sites and do work with your hands, we work with you. Roofers, plumbers, HVAC techs, electricians, landscapers, painters, handymen, pressure washers — all of it. We've built systems for 20+ trades.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-[#e8a743] text-sm font-semibold uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-4">
            Straight Answers to Real Questions
          </h2>
          <p className="text-gray-500 text-lg">
            No smoke, no mirrors. Here&apos;s what contractors always ask before they sign up.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                openIndex === index
                  ? "border-[#e8a743] bg-[#e8a743]/5"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-[#1a1a1a] font-semibold text-base pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                    openIndex === index
                      ? "bg-[#e8a743] rotate-45"
                      : "bg-gray-100"
                  }`}
                >
                  <svg
                    className={`w-3 h-3 ${openIndex === index ? "text-white" : "text-gray-500"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M12 5v14M5 12h14"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
