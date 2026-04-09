import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Results & Testimonials — Estimate Engine",
  description:
    "See real results from home service contractors using Estimate Engine. More Google reviews, more booked jobs, and websites that actually convert — all for $297/month.",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
