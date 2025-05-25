import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { analyticsService } from '../services/analytics'

// 📊 페이지 뷰 추적 훅
export const usePageTracking = () => {
  const location = useLocation()

  useEffect(() => {
    const pageNames: { [key: string]: string } = {
      '/': 'home',
      '/reading': 'reading_page',
      '/card': 'card_detail'
    }

    // 현재 경로에서 페이지 이름 찾기
    let pageName = 'unknown'
    for (const [path, name] of Object.entries(pageNames)) {
      if (location.pathname === path || location.pathname.startsWith(path)) {
        pageName = name
        break
      }
    }

    // 카드 상세 페이지인 경우 ID 추가
    if (location.pathname.startsWith('/card/')) {
      const cardId = location.pathname.split('/')[2]
      pageName = `card_detail_${cardId}`
    }

    // 페이지 방문 로깅 (중복 방지를 위해 약간의 지연 추가)
    const timer = setTimeout(() => {
      analyticsService.logPageVisit(pageName, {
        pathname: location.pathname,
        search: location.search,
        referrer: document.referrer,
        timestamp: new Date().toISOString()
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [location])
}

// 📊 타로 활동 추적 관련 훅들
export const useTarotAnalytics = () => {
  // 타로 리딩 로깅
  const logReading = async (data: {
    spreadType: string
    question: string
    cards: any[]
    interpretation: string
  }) => {
    try {
      await analyticsService.logTarotReading({
        category: `tarot_reading_${data.spreadType}`,
        question: data.question,
        cards: data.cards,
        interpretation: data.interpretation
      })
    } catch (error) {
      console.warn('Failed to log tarot reading:', error)
    }
  }

  // 카드 상세 조회 로깅
  const logCardView = async (cardName: string, cardNameKr: string) => {
    try {
      await analyticsService.logCardView(cardName, cardNameKr)
    } catch (error) {
      console.warn('Failed to log card view:', error)
    }
  }

  // 사용자 상호작용 로깅
  const logInteraction = async (action: string, details: any) => {
    try {
      const userIP = await analyticsService['getUserIP']?.() || 'unknown'
      
      await analyticsService['client']?.post('/add', {
        ip: userIP,
        category: 'user_interaction',
        userContent: action,
        resultContent: JSON.stringify({
          action,
          details,
          timestamp: new Date().toISOString()
        })
      }).catch(() => {}) // 에러 무시
    } catch (error) {
      console.warn('Failed to log interaction:', error)
    }
  }

  return {
    logReading,
    logCardView,
    logInteraction
  }
}
