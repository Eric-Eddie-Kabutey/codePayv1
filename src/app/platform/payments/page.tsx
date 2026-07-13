import AlwaysSecure from '@/components/home/DevCta'
import CustomizedNeeds from '@/components/home/Testimonials'
import TeamUp from '@/components/home/FooterCta'
import AdditionalBenefits from '@/components/Payments/additional-features'
import PaymentHero from '@/components/Payments/hero-payments'
import PaymentsFeatures from '@/components/Payments/payment-features'
import Navbar from '@/components/shared/navbar'
import PaymentsSection from '@/components/solution-finance/payment'
import Services from '@/components/solution-finance/services'
import React from 'react'

function Payments() {
  return (
    <div>
        <div className='hero-news-bg'>
          <Navbar />
          <PaymentHero />
        </div>
        <Services />
        <PaymentsSection />
        <PaymentsFeatures />
        <AdditionalBenefits />
        <AlwaysSecure />
        <CustomizedNeeds />
        <TeamUp />
    </div>
  )
}

export default Payments