import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Estimate Engine",
  description:
    "Get in touch with Estimate Engine. Book a free 20-minute demo call or send us a message. We respond within 1 business day.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
