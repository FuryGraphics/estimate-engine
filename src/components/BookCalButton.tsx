"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

interface BookCalButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function BookCalButton({ className, children }: BookCalButtonProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children ?? "Book A Free Call →"}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col overflow-hidden"
               style={{ maxHeight: "90vh" }}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-[#1a1a1a] font-black text-lg">Book A Free Call</h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-400 hover:text-gray-700 text-2xl font-bold leading-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-auto">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/kpDUvRxlISqTrSqBvRvt"
                style={{ width: "100%", border: "none", minHeight: "600px" }}
                scrolling="no"
                id="kpDUvRxlISqTrSqBvRvt_modal"
              />
            </div>
          </div>
          <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
        </div>
      )}
    </>
  );
}
