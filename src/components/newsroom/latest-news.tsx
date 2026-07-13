import React from "react";
import TeamUp from "../home/FooterCta";

function LatestNews() {
  const news = [
    {
      date: "May 4, 2025",
      title:
        "Pomelo Group Expands South Asia Presence with Key Leadership Appointment",
    },
    {
      date: "April 9, 2024",
      title:
        "Pomelo Group appoints Steve Vickers as new Chief Executive Officer",
    },
    {
      date: "June 21, 2023",
      title:
        "Turbocharge Your Online Payments with PomeloJS: Client-side Tokenization at Your Fingertips",
    },
    {
      date: "June 16, 2023",
      title:
        "Transforming Digital Transactions with Pomelo's Tap-to-Pay Solution: Embrace the Future of SoftPOS, CPOC and MPOC apps",
    },
    {
      date: "June 13, 2023",
      title:
        "Revolutionizing Digital Transactions with Pomelo's new Merchant App: The Future of Fintech User Experience",
    },
    {
      date: "June 12, 2023",
      title:
        "Unlocking the Potential of Financial Services with Open Banking: Pomelo's Approach to Streamlining Payments",
    },
    {
      date: "June 11, 2023",
      title:
        "Payment Methods Spotlight: Harnessing the Power of PromptPay in Thailand’s Cashless Revolution",
    },
    {
      date: "June 10, 2022",
      title:
        "Pomelo partners with Dialog Axiata to digitalise payments for SMEs in Sri Lanka",
    },
    {
      date: "August 11, 2022",
      title:
        "Pomelo expands into cryptocurrency payments in partnership with TripleA",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto mb-20">
        <div>
          <h1 className="text-5xl font-normal mb-10">Latest news</h1>

          <div className="w-full py-6 flex flex-col gap-6">
            {news.map((data, index) => (
            <div key={`${data.date}-${index}`} className="flex flex-col gap-2">
                <div className="text-1xl font-light">{data.date}</div>
                <div className="text-3xl font-light hover:opacity-50 transition-opacity duration-300 cursor-pointer">
                {data.title}
                </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      <TeamUp />
    </div>
  );
}

export default LatestNews;
