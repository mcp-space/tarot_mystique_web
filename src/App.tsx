import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import ReadingPage from './pages/ReadingPage'
import CardDetailPage from './pages/CardDetailPage'
import { Navigation } from './components/Navigation'
import { usePageTracking } from './hooks/useAnalytics'
import styled from 'styled-components'

// 개발 환경에서 analytics 테스트 유틸리티 로드
if (import.meta.env.DEV) {
  import('./services/analyticsTest')
}

// 페이지 추적 컴포넌트
const PageTracker: React.FC = () => {
  usePageTracking()
  return null
}

function App() {
  return (
    <Router>
      <AppContainer>
        <PageTracker />
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
  width: 100%;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  padding-top: 80px; /* Navigation 높이만큼 여백 */
  
  @media (max-width: 768px) {
    padding-top: 70px;
  }
  
  @media (max-width: 480px) {
    padding-top: 60px;
  }
`;

export default App