"use client";

import { useState } from "react";
import Link from "next/link";

// Replace with your actual YouTube video ID
const YOUTUBE_VIDEO_ID = "_6sasqQ6TT0";

const resultImages = [
  { src: "/results/Result-1.png", alt: "Client result 1" },
  { src: "/results/Result-2.png", alt: "Client result 2" },
  { src: "/results/Result-3.png", alt: "Client result 3" },
  { src: "/results/Result-4.png", alt: "Client result 4" },
  { src: "/results/WhatsApp%20Image%202026-04-07%20at%2012.21.55%20AM.png", alt: "Client result 5" },
  { src: "/results/WhatsApp%20Image%202026-04-07%20at%2012.21.55%20AM%20(1).png", alt: "Client result 6" },
  { src: "/results/WhatsApp%20Image%202026-04-07%20at%2012.21.55%20AM%20(3).png", alt: "Client result 7" },
  { src: "/results/WhatsApp%20Image%202026-04-07%20at%2012.21.55%20AM%20(4).png", alt: "Client result 8" },
  { src: "/results/WhatsApp%20Image%202026-04-07%20at%2012.21.55%20AM%20(5).png", alt: "Client result 9" },
  { src: "/results/WhatsApp%20Image%202026-04-07%20at%2012.21.55%20AM%20(10).png", alt: "Client result 10" },
  { src: "/results/WhatsApp%20Image%202026-04-07%20at%2012.21.55%20AM%20(11).png", alt: "Client result 11" },
  { src: "/results/Hue_Saturation%205.png", alt: "Client result 12" },
];

export default function TestimonialsPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-[#f7f7f7]">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-[#e8a743] text-sm font-semibold uppercase tracking-widest mb-4">
            Client Results
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1a1a1a] mb-5">
            Real Contractors.
            <br />
            <span className="text-[#e8a743]">Real Results.</span>
          </h1>
          <p className="text-gray-500 text-lg">
            No fake reviews, no cherry-picked screenshots, no made-up numbers.
            These are real home service contractors who bet on Estimate Engine — and won.
          </p>
        </div>
      </section>

      {/* YouTube embed — top of page */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
              title="Client video testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Results image grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-start">
            {resultImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(img.src)}
                className="group relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#e8a743] transition-all duration-200 cursor-zoom-in"
              >
                <div className="aspect-[9/19] w-full bg-gray-100 relative">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full px-3 py-1.5 text-xs font-semibold text-[#1a1a1a] shadow">
                      View full
                    </div>
                  </div>
                </div>
              </button>
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

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white font-bold text-lg hover:text-[#e8a743] transition-colors"
            >
              ✕ Close
            </button>
            <img
              src={lightbox}
              alt="Client result"
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
