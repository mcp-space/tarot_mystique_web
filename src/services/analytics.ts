import axios, { AxiosInstance } from 'axios'
import { UserActivity } from '../types/tarot'

// 🔮 유저 활동 추적 서비스
class AnalyticsService {
  private client: AxiosInstance
  private baseURL: string

  constructor() {
    // 프로덕션에서는 Vercel API 프록시 사용, 개발환경에서는 직접 연결
    this.baseURL = import.meta.env.PROD 
      ? '/api/analytics'  // Vercel API 프록시 사용
      : 'http://182.209.102.132:8080/api/v1/tarot'  // 개발환경 직접 연결
    
    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // 에러 처리 (활동 로깅은 실패해도 서비스에 영향 없도록)
    this.client.interceptors.response.use(
      (response) => {
        console.log('📊 Analytics response success:', response.status, response.data)
        return response
      },
      (error) => {
        console.error('📊 Analytics logging failed:', {
          message: error.message,
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          url: error.config?.url,
          method: error.config?.method,
          requestData: error.config?.data,
          baseURL: this.baseURL
        })
        // 에러를 던지지 않고 무시 (사용자 경험에 영향 없도록)
        return Promise.resolve({ data: null })
      }
    )

    console.log('📊 Analytics service initialized with baseURL:', this.baseURL)
  }

  // Analytics 활성화 여부 확인 (기본값: true)
  private isAnalyticsEnabled(): boolean {
    const envValue = import.meta.env.VITE_ENABLE_ANALYTICS
    // 환경변수가 없거나 'true'이면 활성화 (기본값 true)
    return envValue === undefined || envValue === 'true' || envValue === true
  }

  // Analytics URL 런타임 변경 (필요시)
  updateBaseURL(newUrl: string) {
    this.baseURL = newUrl
    this.client.defaults.baseURL = newUrl
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
    if (!this.isAnalyticsEnabled()) {
      console.log('📊 Analytics disabled, skipping tarot reading log')
      return
    }

    try {
      const userIP = await this.getUserIP()
      
      const activityData: UserActivity = {
        userIp: userIP,
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

      console.log('📊 Sending tarot reading data via proxy:', {
        url: this.baseURL,
        method: 'POST',
        data: activityData,
        analyticsEnabled: this.isAnalyticsEnabled(),
        isProd: import.meta.env.PROD
      })

      // 프로덕션에서는 프록시 엔드포인트로, 개발환경에서는 /add 경로로 전송
      const endpoint = import.meta.env.PROD ? '' : '/add'
      
      // 비동기로 전송 (await 하지 않음)
      this.client.post(endpoint, activityData).catch(error => {
        console.warn('Failed to log tarot reading:', error)
      })
      
      console.log('📊 Tarot reading activity logged successfully via proxy:', data.category)
    } catch (error) {
      console.warn('📊 Failed to log tarot reading activity:', error)
    }
  }

  // 카드 상세 조회 활동 로깅
  async logCardView(cardName: string, cardNameKr: string): Promise<void> {
    if (!this.isAnalyticsEnabled()) {
      console.log('📊 Analytics disabled, skipping card view log')
      return
    }

    // 카드 상세 보기 로깅은 비활성화
    console.log('📊 Card view logging disabled:', cardName)
    return
  }

  // 페이지 방문 활동 로깅
  async logPageVisit(pageName: string, additionalData?: any): Promise<void> {
    if (!this.isAnalyticsEnabled()) {
      console.log('📊 Analytics disabled, skipping page visit log')
      return
    }

    // 페이지 방문 로깅은 비활성화
    console.log('📊 Page visit logging disabled:', pageName)
    return
  }
}

// 싱글톤 인스턴스 생성
export const analyticsService = new AnalyticsService()
export default analyticsService
