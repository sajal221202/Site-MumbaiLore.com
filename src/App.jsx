import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AwardsPanels from './components/AwardsPanels'
import CareDuelBanner from './components/CareDuelBanner'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SubmitPage from './pages/SubmitFormPage'
import StoryGridPage from './pages/StoryGridPage'

const App = () => {
  return (
    <Router>
      <Header />
         
      <main className="container mx-auto min-h-screen p-4">
        <Routes>
           <Route
            path="/"
            element={
              <>
                <h1 className="text-2xl font-bold mb-4">Welcome to MumbaiLore</h1>
                <p className="mb-4">
                  Discover hidden histories, street tales, and local legends of Mumbai. Dive into a world of cultural expression, poetry, and untold stories.
                </p>
                <CareDuelBanner />
                <AwardsPanels />
              </>
            }
          />
          <Route path="/stories" element={<StoryGridPage/>}/>
          <Route path="/submit" element={<SubmitPage/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App