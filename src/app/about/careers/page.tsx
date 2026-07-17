import CareerHero from "@/components/about/careers/career-hero";
import GlobalOffices from "@/components/about/careers/global-offices";
import JobOpenings from "@/components/about/careers/job-openings";
import JoinUsBanner from "@/components/about/careers/join-banner";
import SocialFeed from "@/components/about/careers/social-feed";
import TeamCarousel from "@/components/about/careers/team-carousel";
import TeamSpeaks from "@/components/about/careers/team-specks";
import { seo } from "@/content/about";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
};

export default function AboutPage() {
    return (<>
        <CareerHero />

        <TeamSpeaks />

        <GlobalOffices />

        <JobOpenings />

        <TeamCarousel />

        <SocialFeed />

        <JoinUsBanner />
    </>)
}