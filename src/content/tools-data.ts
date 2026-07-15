import React from "react";

export const toolsData = {
    tagline: "PLATFORM CAPABILITIES",
    headline: "Powerful tools to elevate your financial ecosystem",
    subheadline: "Explore our extensive catalog of modules, offering an array of choices to build a workflow that aligns with your business requirements, all within one platform.",

    categories: [
        {
            id: "remittance",
            title: "Remittance Engine",
            icon: "💸",
            borderColor: "border-[#38BDF8]", // Light Blue
            items: [
                { title: "Local and international transfers", description: "Enable seamless money movement across borders and local bank networks." },
                { title: "Multi-currency wallet management", description: "Hold, manage, and exchange multiple currencies in a single unified interface." },
                { title: "Dynamic exchange rate engine", description: "Provide real-time, competitive exchange rates for cross-border transactions." },
                { title: "Blockchain-secured transaction ledger", description: "Ensure immutable, transparent, and secure recording of all transfers." },
                { title: "Payout rail management", description: "Route funds efficiently via mobile money, bank transfers, or cash pickups." },
                { title: "Cross-border corridor management", description: "Configure and manage specific country-to-country payment corridors." },
                { title: "One phone number, multiple currencies", description: "Link multiple fiat and digital currency wallets to a single user phone number." },
                { title: "Real-time transfer status", description: "Keep users informed with instant push notifications and status tracking." }
            ]
        },
        {
            id: "banking",
            title: "Banking Suite",
            icon: "🏦",
            borderColor: "border-[#8B5CF6]", // Purple
            items: [
                { title: "Account creation and management", description: "Instantly provision and manage digital bank accounts for your users." },
                { title: "Virtual Visa and Mastercard issuance", description: "Generate virtual cards for immediate online spending and subscriptions." },
                { title: "Merchant QR payment acceptance", description: "Enable users to pay seamlessly at local merchants using QR codes." },
                { title: "Group savings (Osusu)", description: "Facilitate community-based savings groups and cooperative contributions." },
                { title: "Loan and salary advance origination", description: "Offer automated micro-loans and salary advances based on transaction history." },
                { title: "Payroll management", description: "Allow businesses to disburse salaries in bulk to their employees directly." },
                { title: "Utility bills, airtime, data, TV", description: "Provide a one-stop shop for everyday bill payments and top-ups." },
                { title: "Flight, train, bus, and event ticketing", description: "Integrate lifestyle and travel booking capabilities directly in-app." },
                { title: "SOS emergency support", description: "Provide quick access to emergency funds or support channels." }
            ]
        },
        {
            id: "agent",
            title: "Agent Network",
            icon: "🤝",
            borderColor: "border-[#F59E0B]", // Amber/Yellow
            items: [
                { title: "Master and sub-agent hierarchy", description: "Structure your network with tiered permissions and management capabilities." },
                { title: "Agent onboarding and KYC", description: "Digitally onboard new agents with automated compliance checks." },
                { title: "Commission structure & settlement", description: "Automate revenue splits and instant commission payouts for agent activities." },
                { title: "Cash-in and cash-out operations", description: "Enable physical liquidity conversion for digital wallet users." },
                { title: "Agent territory management", description: "Map and manage agent distribution across specific geographic regions." },
                { title: "Agent performance reporting", description: "Track transaction volumes, revenue, and active hours per agent." },
                { title: "Customer account registration", description: "Allow agents to onboard new end-users directly from the field." },
                { title: "Agent location discovery", description: "Help end-users find the nearest active agent via in-app geolocation." }
            ]
        },
        {
            id: "compliance",
            title: "AI & Compliance",
            icon: "🛡️",
            borderColor: "border-[#EC4899]", // Pink
            items: [
                { title: "Automated KYC document verification", description: "Instantly validate passports, national IDs, and driver's licenses." },
                { title: "Liveness detection (anti-spoofing)", description: "Ensure the user is physically present during the onboarding process." },
                { title: "Opix KYC integration", description: "Leverage standard KYC databases for enhanced identity verification." },
                { title: "AI-powered fraud monitoring", description: "Detect suspicious patterns and flag anomalous transactions in real-time." },
                { title: "AML transaction screening", description: "Check transactions against global anti-money laundering watchlists." },
                { title: "Blockchain transaction ledger", description: "Maintain a tamper-proof audit trail for regulatory compliance." },
                { title: "Compliance reporting dashboards", description: "Generate automated reports for regulatory bodies and internal audits." },
                { title: "Risk scoring per transaction", description: "Assign dynamic risk scores to users and individual transactions." },
                { title: "Audit log export for regulators", description: "Easily export formatted compliance data for regulatory reviews." }
            ]
        },
        {
            id: "channels",
            title: "Access Channels",
            icon: "📱",
            borderColor: "border-[#10B981]", // Green
            items: [
                { title: "Flutter mobile app (iOS & Android)", description: "Deploy high-performance native applications for smartphone users." },
                { title: "Next.js web frontend & admin portal", description: "Provide responsive web access and powerful administrative dashboards." },
                { title: "USSD service for feature phones", description: "Reach offline users and feature phones via robust USSD menus." },
                { title: "WhatsApp banking & support bot", description: "Enable transactions and automated support directly through WhatsApp." },
                { title: "AI customer support assistant", description: "Resolve common queries instantly with intelligent chatbot integration." },
                { title: "REST API for custom channel builds", description: "Build bespoke frontends using our comprehensive developer APIs." },
                { title: "Webhook support for real-time events", description: "Receive instant server-to-server notifications for transaction updates." }
            ]
        },
        {
            id: "payments",
            title: "Payment & Bills",
            icon: "💳",
            borderColor: "border-[#6366F1]", // Indigo
            items: [
                { title: "Utility bill payments", description: "Pay electricity, water, and other municipal services directly." },
                { title: "Airtime and data purchase", description: "Instant mobile recharges across major telecommunication networks." },
                { title: "TV subscriptions", description: "Renew satellite and cable TV subscriptions without interruptions." },
                { title: "Flight, train, bus, and event tickets", description: "Purchase travel and entertainment tickets securely." },
                { title: "Merchant QR payments", description: "Scan to pay at participating local retail stores and restaurants." },
                { title: "Merchant onboarding and management", description: "Register businesses to accept payments and view sales analytics." },
                { title: "Payment request links", description: "Generate shareable links to request money from friends or clients." },
                { title: "Split payment support", description: "Easily divide bills and expenses among multiple users." }
            ]
        }
    ],
    ctaText: "VISIT THE FULL PLATFORM CAPABILITIES"
};