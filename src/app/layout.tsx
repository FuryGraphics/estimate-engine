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
  verification: { google: "d8hcjoL45KIUKGhJVMEKEIHUqNNqA_ete3veiAgHzfQ" },
  metadataBase: new URL("https://estimate-engine.com"),
  icons: { icon: "/icon.png" },
  title: {
    default: "Estimate Engine — Done-For-You Marketing For Home Service Contractors",
    template: "%s | Estimate Engine",
  },
  description:
    "Stop chasing leads. Estimate Engine gives home service contractors a complete digital marketing system — website, automated follow-up, review funnels & more — for $297/month.",
  keywords:
    "contractor marketing, home service marketing, contractor website, roofer marketing, plumber marketing, HVAC marketing",
  openGraph: {
    title: "Estimate Engine — Marketing Systems For Contractors",
    description:
      "Done-for-you digital marketing for home service contractors. $297/month, no contracts.",
    type: "website",
    url: "https://estimate-engine.com",
    siteName: "Estimate Engine",
    locale: "en_US",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Estimate Engine logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Estimate Engine — Marketing Systems For Contractors",
    description:
      "Done-for-you digital marketing for home service contractors. $297/month, no contracts.",
    images: ["/icon.png"],
  },
  alternates: {
    canonical: "https://estimate-engine.com",
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
