import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estimate Engine — Done-For-You Marketing For Home Service Contractors",
  description:
    "Stop chasing leads. Estimate Engine gives home service contractors a complete digital marketing system — website, automated follow-up, review funnels & more — for $297/month.",
  keywords:
    "contractor marketing, home service marketing, contractor website, roofer marketing, plumber marketing, HVAC marketing",
  openGraph: {
    title: "Estimate Engine — Marketing Systems For Contractors",
    description:
      "Done-for-you digital marketing for home service contractors. $297/month, no contracts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-[#1a1a1a] antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
