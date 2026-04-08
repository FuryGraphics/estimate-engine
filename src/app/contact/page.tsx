"use client";

import { useState } from "react";
import BookCalButton from "@/components/BookCalButton";

const trades = [
  "Roofing", "Plumbing", "HVAC", "Electrician", "Landscaping", "Painting",
  "Handyman", "Pressure Washing", "Remodeling", "Pest Control", "Moving",
  "Flooring", "Decks & Patios", "Pool Construction", "General Contractor",
  "Tree Service", "Windows & Doors", "Siding", "Paving", "Hardscaping", "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    trade: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const nameParts = form.name.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";
      const params = new URLSearchParams({
        first_name: firstName,
        last_name: lastName,
        full_name: form.name,
        business_name: form.business,
        trade: form.trade,
        phone: form.phone,
        email: form.email,
        message: form.message,
      });
      await fetch(
        "https://services.leadconnectorhq.com/hooks/E8piAP9iMg2Lk1qEyQ6I/webhook-trigger/9e30bddd-3112-4241-9e74-0084fd5b90d1",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString(),
          mode: "no-cors",
        }
      );
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-[#f7f7f7]">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block text-[#e8a743] text-sm font-semibold uppercase tracking-widest mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-5">
            Let&apos;s Talk About{" "}
            <span className="text-[#e8a743]">Your Business</span>
          </h1>
          <p className="text-gray-500 text-lg">
            Fill out the form below and we&apos;ll be in touch within 1 business day.
            Or if you want to skip the line — just book a call directly.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left — info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h2 className="text-[#1a1a1a] font-black text-xl mb-4">Why Book A Call?</h2>
              <ul className="flex flex-col gap-4">
                {[
                  { icon: "🎯", text: "We'll audit your current online presence for free — no strings attached." },
                  { icon: "💡", text: "You'll see a live demo of exactly what we'd build for your trade." },
                  { icon: "💬", text: "Straight answers. No pitch decks, no 90-minute webinars." },
                  { icon: "🚫", text: "Zero pressure. We'll tell you if we're not the right fit." },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="text-gray-600 text-sm leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="bg-[#f7f7f7] border border-gray-200 rounded-xl p-6">
              <h3 className="text-[#1a1a1a] font-bold text-base mb-4">Direct Contact</h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📧</span>
                  <span className="text-gray-600 text-sm">hello@estimateengine.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📞</span>
                  <span className="text-gray-600 text-sm">(555) 000-0000</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🕐</span>
                  <span className="text-gray-600 text-sm">Mon–Fri, 9am–6pm EST</span>
                </div>
              </div>
            </div>

            {/* Calendar embed placeholder */}
            <div className="bg-[#f7f7f7] border border-[#e8a743]/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="text-[#1a1a1a] font-bold text-base mb-2">Book Directly</h3>
              <p className="text-gray-500 text-sm mb-4">
                Skip the form. Pick a time that works for you.
              </p>
              <BookCalButton className="inline-block w-full bg-[#e8a743] hover:bg-[#c98a2a] text-white font-bold py-3 rounded-lg text-sm transition-colors shadow-md">
                Book A Free Call →
              </BookCalButton>
              <p className="text-gray-400 text-xs mt-2">Calendar booking — no login required</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                <div className="text-6xl mb-5">🎉</div>
                <h3 className="text-[#1a1a1a] font-black text-2xl mb-3">Got it! We&apos;ll be in touch.</h3>
                <p className="text-gray-500 text-base leading-relaxed">
                  Expect a reply within 1 business day. If you want to move faster,
                  grab a time on our calendar above and we&apos;ll be there.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-5 shadow-sm">
                <h2 className="text-[#1a1a1a] font-black text-xl">Send Us A Message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-500 text-xs font-semibold uppercase tracking-widest block mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-white border border-gray-200 focus:border-[#e8a743] rounded-lg px-4 py-3 text-[#1a1a1a] text-sm placeholder-gray-400 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs font-semibold uppercase tracking-widest block mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="business"
                      required
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Smith Roofing LLC"
                      className="w-full bg-white border border-gray-200 focus:border-[#e8a743] rounded-lg px-4 py-3 text-[#1a1a1a] text-sm placeholder-gray-400 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-500 text-xs font-semibold uppercase tracking-widest block mb-2">
                    Your Trade *
                  </label>
                  <select
                    name="trade"
                    required
                    value={trades.includes(form.trade) || form.trade === "" ? form.trade : "Other"}
                    onChange={(e) => {
                      if (e.target.value === "Other") {
                        setForm({ ...form, trade: "Other" });
                      } else {
                        setForm({ ...form, trade: e.target.value });
                      }
                    }}
                    className="w-full bg-white border border-gray-200 focus:border-[#e8a743] rounded-lg px-4 py-3 text-[#1a1a1a] text-sm outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-gray-400">Select your trade...</option>
                    {trades.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {(form.trade === "Other" || (!trades.includes(form.trade) && form.trade !== "")) && (
                    <input
                      type="text"
                      name="trade"
                      required
                      value={form.trade === "Other" ? "" : form.trade}
                      onChange={(e) => setForm({ ...form, trade: e.target.value || "Other" })}
                      placeholder="Type your trade..."
                      className="w-full bg-white border border-gray-200 focus:border-[#e8a743] rounded-lg px-4 py-3 text-[#1a1a1a] text-sm placeholder-gray-400 outline-none transition-colors mt-3"
                      autoFocus
                    />
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-gray-500 text-xs font-semibold uppercase tracking-widest block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full bg-white border border-gray-200 focus:border-[#e8a743] rounded-lg px-4 py-3 text-[#1a1a1a] text-sm placeholder-gray-400 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs font-semibold uppercase tracking-widest block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@smithroofing.com"
                      className="w-full bg-white border border-gray-200 focus:border-[#e8a743] rounded-lg px-4 py-3 text-[#1a1a1a] text-sm placeholder-gray-400 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-500 text-xs font-semibold uppercase tracking-widest block mb-2">
                    What&apos;s Your Biggest Marketing Challenge?
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="E.g. My website isn't generating any leads, I have no Google reviews, I'm spending $2k/month on ads with no ROI..."
                    className="w-full bg-white border border-gray-200 focus:border-[#e8a743] rounded-lg px-4 py-3 text-[#1a1a1a] text-sm placeholder-gray-400 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#e8a743] hover:bg-[#c98a2a] active:bg-[#b87a25] text-white font-black py-4 rounded-xl text-base transition-colors shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send My Message →"}
                </button>

                <p className="text-gray-400 text-xs text-center">
                  We respond within 1 business day. Your info is never shared or sold.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
