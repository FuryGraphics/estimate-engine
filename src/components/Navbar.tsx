"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Pricing", href: "/pricing" },
  { label: "Client Results", href: "/testimonials" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Trades", href: "/trades-we-serve" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/95 backdrop-blur-sm"
      } border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img
              src="/logo.jpg"
              alt="Estimate Engine"
              className="w-11 h-11 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-bold text-[#1a1a1a] text-lg leading-none">
              Estimate Engine
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#e8a743] bg-[#e8a743]/10"
                    : "text-gray-600 hover:text-[#1a1a1a] hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-[#1a1a1a] transition-colors font-medium"
            >
              Log In
            </Link>
            <Link
              href="#"
              className="bg-[#e8a743] hover:bg-[#c98a2a] active:bg-[#b87a25] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-md"
            >
              Book A Call →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-[#1a1a1a] text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-gray-100 mt-2 pt-3 flex flex-col gap-2">
            <Link
              href="#"
              className="text-gray-500 text-sm font-medium py-2 px-3"
              onClick={() => setMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="#"
              className="bg-[#e8a743] hover:bg-[#c98a2a] text-white text-sm font-semibold px-5 py-3 rounded-lg text-center transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Book A Call →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
