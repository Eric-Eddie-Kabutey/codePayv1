import MoreResources from "@/components/about/press/more-resources";
import News from "@/components/about/press/news";
import PressCTA from "@/components/about/press/press-cta";
import PressHero from "@/components/about/press/press-hero";
import PressResources from "@/components/about/press/press-resources";
import { seo } from "@/content/about";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
};

export default function PressPage() {
    return (<>
        <PressHero />

        <News />

        <MoreResources />

        <PressResources />

        <PressCTA />
    
    </>)
}