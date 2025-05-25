import axios, { AxiosInstance } from 'axios'
import { UserActivity } from '../types/tarot'

// 🔮 유저 활동 추적 서비스
class AnalyticsService {
  private client: AxiosInstance
  private baseURL: string = '182.209.102.132:8080/api/v1/tarot'

  constructor() {
    // 환경변수에서 analytics URL 가져오기 (선택사항)
    const analyticsUrl = import.meta.env.VITE_ANALYTICS_URL || this.baseURL
    
    this.client = axios.create({
      baseURL: `http://${analyticsUrl}`,
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // 에러 처리 (활동 로깅은 실패해도 서비스에 영향 없도록)
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        console.warn('📊 Analytics logging failed:', error.message)
        // 에러를 던지지 않고 무시 (사용자 경험에 영향 없도록)
        return Promise.resolve({ data: null })
      }
    )
  }

  // Analytics URL 런타임 변경 (필요시)
  updateBaseURL(newUrl: string) {
    this.baseURL = newUrl
    this.client.defaults.baseURL = `http://${newUrl}`
    console.log('📊 Analytics URL updated to:', newUrl)
  }

  // 사용자 IP 주소 가져오기
  private async getUserIP(): Promise<string> {
    try {
      // 개발 환경에서는 로컬 IP 반환
      if (window.location.hostname === 'localhost' || window.location.hostname === '182.209.102.132') {
        return '182.209.102.132'
      }
      
      // 실제 환경에서는 IP 조회 서비스 사용
      const response = await fetch('https://api.ipify.org?format=json')
      const data = await response.json()
      return data.ip || 'unknown'
    } catch (error) {
      console.warn('Failed to get user IP:', error)
      return 'unknown'
    }
  }

  // 타로 리딩 활동 로깅
  async logTarotReading(data: {
    category: string
    question: string
    cards: any[]
    interpretation: string
  }): Promise<void> {
    // Analytics 기능이 비활성화된 경우 로깅하지 않음
    if (import.meta.env.VITE_ENABLE_ANALYTICS !== 'true') {
      console.log('📊 Analytics disabled, skipping tarot reading log')
      return
    }

    try {
      const userIP = await this.getUserIP()
      
      const activityData: UserActivity = {
        ip: userIP,
        category: data.category,
        userContent: data.question,
        resultContent: JSON.stringify({
          cards: data.cards.map(card => ({
            name: card.card?.name || card.name,
            nameKr: card.card?.nameKr || card.nameKr,
            reversed: card.reversed || false,
            interpretation: card.interpretation
          })),
          interpretation: data.interpretation,
          timestamp: new Date().toISOString()
        })
      }

      // 비동기로 전송 (await 하지 않음)
      this.client.post('/add', activityData).catch(error => {
        console.warn('Failed to log tarot reading:', error)
      })
      
      console.log('📊 Tarot reading activity logged:', activityData.category)
    } catch (error) {
      console.warn('📊 Failed to log tarot reading activity:', error)
    }
  }

  // 카드 상세 조회 활동 로깅
  async logCardView(cardName: string, cardNameKr: string): Promise<void> {
    if (import.meta.env.VITE_ENABLE_ANALYTICS !== 'true') {
      console.log('📊 Analytics disabled, skipping card view log')
      return
    }

    try {
      const userIP = await this.getUserIP()
      
      const activityData: UserActivity = {
        ip: userIP,
        category: 'card_view',
        userContent: `${cardName} (${cardNameKr})`,
        resultContent: JSON.stringify({
          action: 'view_card_detail',
          card: cardName,
          cardKr: cardNameKr,
          timestamp: new Date().toISOString()
        })
      }

      this.client.post('/add', activityData).catch(error => {
        console.warn('Failed to log card view:', error)
      })
      
      console.log('📊 Card view activity logged:', cardName)
    } catch (error) {
      console.warn('📊 Failed to log card view activity:', error)
    }
  }

  // 페이지 방문 활동 로깅
  async logPageVisit(pageName: string, additionalData?: any): Promise<void> {
    if (import.meta.env.VITE_ENABLE_ANALYTICS !== 'true') {
      console.log('📊 Analytics disabled, skipping page visit log')
      return
    }

    try {
      const userIP = await this.getUserIP()
      
      const activityData: UserActivity = {
        ip: userIP,
        category: 'page_visit',
        userContent: pageName,
        resultContent: JSON.stringify({
          page: pageName,
          url: window.location.pathname,
          timestamp: new Date().toISOString(),
          ...additionalData
        })
      }

      this.client.post('/add', activityData).catch(error => {
        console.warn('Failed to log page visit:', error)
      })
      
      console.log('📊 Page visit logged:', pageName)
    } catch (error) {
      console.warn('📊 Failed to log page visit activity:', error)
    }
  }
}

// 싱글톤 인스턴스 생성
export const analyticsService = new AnalyticsService()
export default analyticsService
