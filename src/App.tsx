import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import ReadingPage from './pages/ReadingPage'
import CardDetailPage from './pages/CardDetailPage'
import { Navigation } from './components/Navigation'
import styled from 'styled-components'

function App() {
  return (
    <Router>
      <AppContainer>
        <Navigation />
        <MainContent>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/reading" element={<ReadingPage />} />
              <Route path="/card/:cardId" element={<CardDetailPage />} />
            </Routes>
          </AnimatePresence>
        </MainContent>
      </AppContainer>
    </Router>
  )
}

const AppContainer = styled.div`
  min-height: 100vh;
`;

const MainContent = styled.main`
  padding-top: 80px; /* Navigation 높이만큼 여백 */
`;

export default App