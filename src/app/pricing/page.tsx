import type { Metadata } from "next";
import Link from "next/link";
import PricingToggle from "@/components/PricingToggle";
import BookCalButton from "@/components/BookCalButton";

export const metadata: Metadata = {
  title: "Pricing — Estimate Engine",
  description: "Simple, transparent pricing for contractor marketing. $297/month, no contracts, cancel anytime.",
};

const comparisons = [
  { item: "Custom contractor website", ee: true, agency: "Sometimes", diy: false },
  { item: "Automated lead follow-up", ee: true, agency: "Add-on", diy: false },
  { item: "Missed call text back (AI)", ee: true, agency: false, diy: false },
  { item: "5-star review funnel", ee: true, agency: "Add-on", diy: false },
  { item: "SMS marketing campaigns", ee: true, agency: "Add-on", diy: false },
  { item: "On-site SEO", ee: true, agency: "Sometimes", diy: "Manually" },
  { item: "No long-term contract", ee: true, agency: false, diy: true },
  { item: "Dedicated account manager", ee: true, agency: "Senior-level costs $$$", diy: false },
  { item: "Monthly price", ee: "$297", agency: "$2,000–$5,000+", diy: "Your time" },
];

export default function PricingPage() {
  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-[#f7f7f7]">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-[#e8a743] text-sm font-semibold uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1a1a1a] mb-5">
            Straightforward Pricing.
            <br />
            <span className="text-[#e8a743]">No Surprises.</span>
          </h1>
          <p className="text-gray-500 text-lg mb-4">
            One plan. Everything included. No hidden fees, no setup costs, no gotchas.
          </p>
          <p className="text-gray-400 text-sm">
            Save 20% when you pay annually.
          </p>
        </div>
      </section>

      {/* Toggle + Card */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <PricingToggle />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f7f7f7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-4">
              How We Stack Up
            </h2>
            <p className="text-gray-500 text-lg">
              Spoiler: most agencies charge 10x more and deliver half as much.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left text-gray-500 text-sm font-semibold px-6 py-4 bg-white">Feature</th>
                  <th className="text-center px-6 py-4 bg-white">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-[#e8a743] rounded-lg flex items-center justify-center font-black text-white text-xs mb-1">EE</div>
                      <span className="text-[#1a1a1a] font-bold text-sm">Estimate Engine</span>
                    </div>
                  </th>
                  <th className="text-center text-gray-500 text-sm font-semibold px-6 py-4 bg-white">Marketing Agency</th>
                  <th className="text-center text-gray-500 text-sm font-semibold px-6 py-4 bg-white">DIY</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr
                    key={row.item}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                  >
                    <td className="text-gray-600 text-sm px-6 py-4">{row.item}</td>
                    <td className="text-center px-6 py-4">
                      {row.ee === true ? (
                        <span className="text-green-500 text-lg">✓</span>
                      ) : (
                        <span className="text-[#e8a743] font-bold text-sm">{row.ee}</span>
                      )}
                    </td>
                    <td className="text-center px-6 py-4">
                      {row.agency === false ? (
                        <span className="text-red-400 text-lg">✗</span>
                      ) : row.agency === true ? (
                        <span className="text-green-500 text-lg">✓</span>
                      ) : (
                        <span className="text-gray-400 text-xs">{row.agency}</span>
                      )}
                    </td>
                    <td className="text-center px-6 py-4">
                      {row.diy === false ? (
                        <span className="text-red-400 text-lg">✗</span>
                      ) : row.diy === true ? (
                        <span className="text-green-500 text-lg">✓</span>
                      ) : (
                        <span className="text-gray-400 text-xs">{row.diy}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">🛡️</div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] mb-5">
            Our Commitment to You
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            We don&apos;t offer a typical money-back guarantee because we don&apos;t need to. If you&apos;re not
            happy with the work in the first 30 days, we&apos;ll fix it — no questions asked. And if
            we can&apos;t fix it, we&apos;ll refund you. We&apos;re not in the business of keeping money we
            didn&apos;t earn.
          </p>
          <BookCalButton className="inline-flex items-center gap-2 bg-[#e8a743] hover:bg-[#c98a2a] text-white font-black px-8 py-4 rounded-xl text-lg transition-colors shadow-lg">
            Book A Free Demo Call →
          </BookCalButton>
          <p className="text-gray-400 text-sm mt-4">No credit card required for the call.</p>
        </div>
      </section>
    </div>
  );
}
