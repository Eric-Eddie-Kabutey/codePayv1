
import AlwaysSecure from '@/components/home/DevCta'
import CustomizedNeeds from '@/components/home/Testimonials'
import TeamUp from '@/components/home/FooterCta'
import Navbar from '@/components/shared/navbar'
import Benefits from '@/components/solution-finance/benefits'
import FinanceHero from '@/components/solution-finance/finance-hero'
import Revenue from '@/components/solution-finance/revenue'
import Services from '@/components/solution-finance/services'
import React from 'react'

function FinanceInstitution() {
  return (
    <div>
      <div className='hero-news-bg'>
        <Navbar />
        <FinanceHero />
      </div>
      <Services />
      <Revenue />
      <Benefits />
      <CustomizedNeeds />
      <AlwaysSecure />
      <TeamUp />
    </div>
  )
}

export default FinanceInstitution