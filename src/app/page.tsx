import Navbar from "@/components/shared/navbar";
import HomeHero from "@/components/home/home-hero";
import WhatIsCodePay from "@/components/home/find-us";
import AdminLayers from "@/components/home/finance-control";
import DevCta from "@/components/home/DevCta";
import Testimonials from "@/components/home/Testimonials";
import FooterCTA from "@/components/home/FooterCta";
import BuildStats from "@/components/home/BuildStats";
import OnePlatform from "@/components/home/one-platform";
import ProjectShowcase from "@/components/home/ProjectShowcase";

export const metadata = {
  title: 'CodePay — Remittance and Banking Infrastructure for Africa',
  description:
    "CodePay is Africa's first AI-powered remittance infrastructure, built on blockchain and modern cryptography. Launch your fintech, bank, or remittance business in 8–12 weeks.",
};

export default function Home() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-theme-green-900/70 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-theme-blue-900/60 blur-3xl sm:h-112 sm:w-md" />
          <div className="absolute top-32 left-1/3 h-72 w-72 rounded-full bg-theme-purple-900/50 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-theme-amber-900/40 blur-3xl" />
        </div>
        <Navbar />
        <HomeHero />
      </div>
      <WhatIsCodePay />
      <OnePlatform />
      <AdminLayers />
      <BuildStats />
      <ProjectShowcase />
      <DevCta />
      <Testimonials />
      <FooterCTA />
    </div>
  );
}
