import ComplianceAndNews from "@/components/about/why-codepay/complaince-and-news";
import IncodePayPartnership from "@/components/about/why-codepay/incodepay-partnership";
import Investors from "@/components/about/why-codepay/investors";
import OurBeliefs from "@/components/about/why-codepay/our-beliefs";
import TrustedCompanies from "@/components/about/why-codepay/trusted-companies";
import WhyChooseCodePay from "@/components/about/why-codepay/why-choose-codepay";
import WhyCodePayCTA from "@/components/about/why-codepay/why-codepay-cta";
import WhyCodePayHero from "@/components/about/why-codepay/why-codepay-hero";
import { seo } from "@/content/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

export default function WhyCodePayPage() {
    return (<>
        <WhyCodePayHero />

        <WhyChooseCodePay />

        <IncodePayPartnership />

        <Investors />

        <OurBeliefs />

        <TrustedCompanies />

        <ComplianceAndNews />

        <WhyCodePayCTA />
    </>)
}