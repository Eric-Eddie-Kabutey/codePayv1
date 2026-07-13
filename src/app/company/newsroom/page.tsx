import LatestNews from '@/components/newsroom/latest-news'
import NewsHero from '@/components/newsroom/news-hero'
import Navbar from '@/components/shared/navbar'
import React from 'react'


function NewsRoomPage() {
  return (
    <div>
      <div className='hero-news-bg '>
        <Navbar />
        <NewsHero />
      </div>
      <LatestNews />
    </div>
  )
}

export default NewsRoomPage

