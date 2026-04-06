"use client";

import { useState } from "react";
import Link from "next/link";

const results = [
  { src: "/results/Hue_Saturation%201.png", alt: "Client result 1" },
  { src: "/results/Hue_Saturation%202.png", alt: "Client result 2" },
  { src: "/results/Hue_Saturation%203.png", alt: "Client result 3" },
  { src: "/results/Hue_Saturation%204.png", alt: "Client result 4" },
];

// Replace with your actual YouTube video ID (the part after ?v=)
const YOUTUBE_VIDEO_ID = "_6sasqQ6TT0";

export default function ResultsSection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#e8a743] text-sm font-semibold uppercase tracking-widest mb-4">
            Client Results
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#1a1a1a] mb-4">
            Don&apos;t Take Our Word For It
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Real contractors. Real results. No fake screenshots or made-up case studies.
          </p>
        </div>

        {/* Grid: 4 chat screenshots + 1 YouTube video */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-start">

          {/* Chat screenshots */}
          {results.map((result, i) => (
            <button
              key={i}
              onClick={() => setLightbox(result.src)}
              className="group relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#e8a743] transition-all duration-200 cursor-zoom-in"
            >
              {/* Portrait phone ratio ~9:19 */}
              <div className="aspect-[9/19] w-full bg-gray-100 relative">
                <img
                  src={result.src}
                  alt={result.alt}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full px-3 py-1.5 text-xs font-semibold text-[#1a1a1a] shadow">
                    View full
                  </div>
                </div>
              </div>
            </button>
          ))}

          {/* YouTube embed slot */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            {/* Match portrait ratio */}
            <div className="aspect-[9/19] w-full bg-[#1a1a1a] relative">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="Client video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="absolute top-2 left-2 bg-[#e8a743] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              Watch
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 border-2 border-gray-200 hover:border-[#e8a743] text-gray-700 font-semibold px-6 py-3 rounded-xl transition-all hover:text-[#1a1a1a]"
          >
            See All Testimonials →
          </Link>
        </div>
      </div>

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
    </section>
  );
}
