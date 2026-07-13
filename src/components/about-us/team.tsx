"use client";

import React, { useState, useEffect } from 'react';

function TeamSection() {
  const [activeTeam, setActiveTeam] = useState('leadership');
  const [activeMember, setActiveMember] = useState('Steve');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const teams = {
    leadership: {
      title: "Leadership Team",
      members: [
        {
          id: 'Steve',
          name: 'Steve Vickers',
          role: 'Chief Executive Officer',
          image: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/661519f04fdf9f664f76777c_Steve%202.jpg'
        },
        {
          id: 'Simon',
          name: 'Simon Verraest',
          role: 'Chief Technology Officer, Founder',
          image: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/66151b341e66e4613638555a_Simon%202.jpg'
        },
        {
          id: 'Misbhah',
          name: 'Misbhah Akram',
          role: 'Director of Operations',
          image: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/633569ae269037a718804ffc_Misbhah.jpg'
        }
      ]
    },
    advisory: {
      title: "Advisory Board",
      members: [
        {
          id: 'Joshua',
          name: 'Joshua Kaplan',
          role: 'Member of the advisory board',
          image: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/66797e2653a101eeddf12c40_Kaplan%20Joshua%201.jpg'
        },
        {
          id: 'Sapan',
          name: 'Sapan Shah',
          role: 'Member of the advisory board',
          image: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/66797ce1fb129aa5dc18ccd0_Sapan%20Shah.jpg'
        },
        {
          id: 'Vincent',
          name: 'Vincent Choi',
          role: 'Member of the advisory board, Co-founder',
          image: 'https://cdn.prod.website-files.com/62e338d39de4c75ceb960585/633569aea4aeaac9ca96869a_Vincent.jpg'
        }
      ]
    }
  };

  const currentTeam = teams[activeTeam as keyof typeof teams];

  return (
    <div className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Team Type Tabs - Horizontal on mobile, better spacing */}
        <div className="flex overflow-x-auto pb-2 mb-6 md:mb-8 scrollbar-hide">
          <div className="flex space-x-2 md:space-x-0 md:border-b md:border-gray-200">
            {Object.entries(teams).map(([key, team]) => (
              <button
                key={key}
                onClick={() => {
                  setActiveTeam(key);
                  setActiveMember(team.members[0].id);
                }}
                className={`px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg font-medium whitespace-nowrap transition-colors duration-300 ${
                  activeTeam === key
                    ? 'bg-[#d3ff59] text-gray-900 rounded-full md:rounded-none md:bg-transparent md:border-b-2 md:border-[#d3ff59] md:text-gray-900'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-full md:rounded-none md:bg-transparent md:hover:bg-transparent md:text-gray-500 md:hover:text-gray-700'
                }`}
              >
                {team.title}
              </button>
            ))}
          </div>
        </div>

        {/* Team Display - Stack on mobile */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Member List - Full width on mobile */}
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
            {currentTeam.members.map((member) => (
              <div 
                key={member.id}
                onClick={() => setActiveMember(member.id)}
                className={`group p-4 md:p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeMember === member.id 
                    ? 'border-[#d3ff59] bg-gray-50 shadow-sm' 
                    : 'border-gray-200 hover:border-[#d3ff59]'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium">{member.name}</h3>
                    <p className="text-gray-500 text-sm md:text-base mt-1">{member.role}</p>
                  </div>
                  <div className={`transition-transform duration-300 ${activeMember === member.id ? 'rotate-45' : ''}`}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 md:h-6 md:w-6 text-gray-400 group-hover:text-[#d3ff59]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Member Image - Full width on mobile with adjusted height */}
          <div className={`w-full ${isMobile ? 'order-first mb-6' : 'md:w-1/2'} flex items-center`}>
            <div className="relative w-full h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg border-2 border-[#d3ff59]">
              {currentTeam.members.map((member) => (
                <img
                  key={member.id}
                  src={member.image}
                  alt={member.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeMember === member.id ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;