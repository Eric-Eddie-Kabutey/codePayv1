import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CodePay — Remittance and Banking Infrastructure for Africa",
    template: "%s | CodePay",
  },
  description:
    "CodePay is Africa's unified remittance and banking infrastructure platform. Launch remittance, wallet, banking, KYC, and agent network products in 8–12 weeks.",
  keywords: [
    "remittance infrastructure Africa",
    "fintech infrastructure Africa",
    "banking infrastructure platform",
    "agent banking platform Africa",
    "USSD banking platform",
    "WhatsApp banking bot",
    "automated KYC Africa",
    "cross-border payments API Africa",
    "multi-currency wallet infrastructure",
    "blockchain remittance platform",
  ],
  openGraph: {
    title: "CodePay — Remittance and Banking Infrastructure for Africa",
    description:
      "One platform. Every country. No rebuilds. Launch fintech products across Africa in 8–12 weeks.",
    type: "website",
    locale: "en_US",
    siteName: "CodePay",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodePay — Remittance and Banking Infrastructure for Africa",
    description: "One platform. Every country. No rebuilds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
