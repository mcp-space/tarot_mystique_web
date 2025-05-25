import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import ReadingPage from './pages/ReadingPage'
import CardDetailPage from './pages/CardDetailPage'
import { Navigation } from './components/Navigation'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reading" element={<ReadingPage />} />
            <Route path="/card/:cardId" element={<CardDetailPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App
