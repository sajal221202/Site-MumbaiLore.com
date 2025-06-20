import React from 'react'
import CareDuelBanner from '../components/CareDuelBanner'
import AwardsPanels from '../components/AwardsPanels'
import CulturalInsights from '../components/CulturalInsights'
import ContentSections from '../components/ContentSections'
import Hero from './Hero'

const Home = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Welcome to MumbaiLore</h1>
      <p className="mb-4">
        Discover hidden histories, street tales, and local legends of Mumbai. Dive into a world of cultural expression, poetry, and untold stories.
      </p>
      <Hero/>
      <CareDuelBanner />
      <AwardsPanels />
      <ContentSections/>
      <CulturalInsights />
    </>
  )
}

export default Home
