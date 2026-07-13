import AlwaysSecure from '@/components/home/DevCta'
import CustomizedNeeds from '@/components/home/Testimonials'
import TeamUp from '@/components/home/FooterCta'
import Navbar from '@/components/shared/navbar'
import TechBenefits from '@/components/Technology/TechBenefits'
import TechHero from '@/components/Technology/TechHero'
import TechService from '@/components/Technology/TechService'
import React from 'react'

function Technology() {
  return (
    <div>
      <div className='hero-news-bg'>
        <Navbar />
        <TechHero />
      </div>
      <TechService />
      <TechBenefits />
      <CustomizedNeeds />
      <AlwaysSecure />
      <TeamUp />
    </div>
  )
}

export default Technology