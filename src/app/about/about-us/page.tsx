import AboutHero from '@/components/about-us/about-hero'
import MissionVission from '@/components/about-us/mission-vission'
import OurValues from '@/components/about-us/our-valus'
import LeadershipTeam from '@/components/about-us/team'
import OurJourney from '@/components/about-us/our-journey'
import React from 'react'
import FindUs from '@/components/home/find-us'
import TeamUp from '@/components/home/FooterCta'
import Navbar from '@/components/shared/navbar'


function AboutusPage() {
  return (
    
    <div>
      <div className='hero-news-bg'>
        <Navbar />
        <AboutHero />
      </div>
        <MissionVission />
        <OurValues />
        <LeadershipTeam />
        <OurJourney />
        <FindUs />
        <TeamUp />
       
    </div>
  )
}

export default AboutusPage