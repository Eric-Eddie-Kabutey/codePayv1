import React from "react";

export const integrationsData = {
    tagline: "CODEPAY INTEGRATIONS",
    headline: "3 ways to integrate CodePay into your business",
    headers: [ "", "BENEFITS", "TO CONSIDER", "IMPLEMENTATION TIME", "DEV REQUIRED", "PLATFORMS" ],
    methods: [
        {
            id: "api",
            name: "API",
            description: "Build custom workflows and create your own UX. The collected information is sent to CodePay and is verified in seconds.",
            benefits: [ "Keep total control over your front-end" ],
            considerations: "Requires development",
            time: "1-2 weeks",
            devRequired: "Yes",
            platforms: "All platforms",
            bgClass: "bg-[#F7F8F9]" // Light gray background
        },
        {
            id: "sdk",
            name: "Web or Mobile SDK",
            description: "Create custom workflows using a prebuilt UX. Copy a few lines of code provided in the dashboard and paste them into your app or website.",
            benefits: [
                "No need to build front-end or maintain software",
                "Instant customer feedback during onboarding for real-time error correction",
                "Access to a wider set of tools and features"
            ],
            considerations: "Limited flexibility in terms of look & feel",
            time: "4 hours - 5 days",
            devRequired: "Yes",
            platforms: "Web, Native (iOS, Android), Hybrid (Capacitor, Flutter, Ionic Cordova, React Native, Expo)",
            bgClass: "bg-white" // White background
        },
        {
            id: "nocode",
            name: "Direct link (no code)",
            description: "Make custom workflows using a prebuilt UX. Simply copy the link provided in your dashboard and share it via email, SMS, or WhatsApp.",
            benefits: [ "No development needed" ],
            considerations: "The UX is not embedded into your app or website",
            time: "5 minutes",
            devRequired: "No",
            platforms: "Web",
            bgClass: "bg-[#F7F8F9]" // Light gray background
        }
    ]
};

export const supportData = {
    headline: "Customer support",
    subheadline: "CodePay ensures your success with 24/7 support, easy setup, and helpful guides and tips.",
    features: [
        {
            id: 1,
            title: "Long-term success partnership",
            description: "A Customer Success Manager will introduce you to the latest CodePay features.",
            underlineColor: "border-[#E91E63]" // Pink
        },
        {
            id: 2,
            title: "Fast-track onboarding",
            description: "A Solutions Engineer will set you up, covering backend exchanges, design best practices, and more.",
            underlineColor: "border-[#FDBF3A]" // Yellow
        },
        {
            id: 3,
            title: "Always-on assistance",
            description: "We're always here to ensure your success with chat and email support, FAQs, user guides, and live service status.",
            underlineColor: "border-[#38BDF8]" // Blue
        }
    ],
    cta: {
        label: "TRY IT FOR FREE",
        href: "/contact"
    }
};