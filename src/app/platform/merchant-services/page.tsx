import AlwaysSecure from '@/components/home/DevCta'
import TeamUp from '@/components/home/FooterCta'
import MerchantAdditionalBenefits from '@/components/Merchants/admissional-benefits'
import FeatureSection from '@/components/Merchants/benefits'
import MerchantHero from '@/components/Merchants/merchant-service'
import Navbar from '@/components/shared/navbar'
import Services from '@/components/solution-finance/services'
import React from 'react'

function MerchantService() {
  return (
    <div>
      <div className='hero-news-bg'>
        <Navbar />
        <MerchantHero />
      </div>
        <Services />
        <FeatureSection />
        <MerchantAdditionalBenefits />
        <AlwaysSecure />
        <TeamUp />
    
    </div>
  )
}

export default MerchantService