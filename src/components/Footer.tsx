import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About Us", href: "#" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Contractor Websites", href: "#" },
    { label: "5-Star Review Funnels", href: "#" },
    { label: "Missed Call Text Back", href: "#" },
    { label: "Text Marketing", href: "#" },
  ],
  Trades: [
    { label: "Roofing", href: "/trades-we-serve" },
    { label: "Plumbing", href: "/trades-we-serve" },
    { label: "HVAC", href: "/trades-we-serve" },
    { label: "Electricians", href: "/trades-we-serve" },
    { label: "All Trades", href: "/trades-we-serve" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA band */}
        <div className="py-12 border-b border-gray-200 text-center">
          <p className="text-gray-500 text-base mb-2">Want to learn more about how we can help?</p>
          <h3 className="text-2xl font-black text-[#1a1a1a] mb-6">Book a free call with our team today.</h3>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-[#e8a743] hover:bg-[#c98a2a] text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-md"
          >
            Book A Free Call →
          </Link>
        </div>

        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-[#e8a743] rounded-lg flex items-center justify-center font-black text-white text-sm">
                EE
              </div>
              <span className="font-bold text-[#1a1a1a] text-lg">Estimate Engine</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Done-for-you digital marketing for home service contractors. We build the system. You run the jobs.
            </p>
            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { label: "YouTube", icon: "▶" },
                { label: "Instagram", icon: "◎" },
              ].map((s) => (
                <Link
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 bg-white border border-gray-200 hover:border-[#e8a743] hover:bg-[#e8a743] rounded-lg flex items-center justify-center transition-colors text-gray-500 hover:text-white text-sm font-bold shadow-sm"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-[#1a1a1a] font-semibold text-sm mb-4">{section}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-[#1a1a1a] text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Estimate Engine. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
