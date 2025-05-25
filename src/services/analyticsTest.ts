// 📊 Analytics Test Utilities
import { analyticsService } from './analytics'

// 테스트용 함수들
export const testAnalytics = {
  // 기본 연결 테스트
  async testConnection() {
    console.log('🔍 Testing analytics connection...')
    
    try {
      await analyticsService.logPageVisit('test_connection', {
        test: true,
        timestamp: new Date().toISOString()
      })
      console.log('✅ Analytics connection test successful')
    } catch (error) {
      console.error('❌ Analytics connection test failed:', error)
    }
  },

  // 더미 타로 리딩 테스트
  async testTarotReading() {
    console.log('🔍 Testing tarot reading log...')
    
    const testData = {
      category: 'test_tarot_reading',
      question: '테스트 질문입니다',
      cards: [{
        card: { name: 'The Fool', nameKr: '바보' },
        reversed: false,
        interpretation: '새로운 시작을 의미합니다'
      }],
      interpretation: '테스트 해석입니다'
    }

    try {
      await analyticsService.logTarotReading(testData)
      console.log('✅ Tarot reading log test successful')
    } catch (error) {
      console.error('❌ Tarot reading log test failed:', error)
    }
  },

  // 더미 카드 조회 테스트
  async testCardView() {
    console.log('🔍 Testing card view log...')
    
    try {
      await analyticsService.logCardView('The Magician', '마술사')
      console.log('✅ Card view log test successful')
    } catch (error) {
      console.error('❌ Card view log test failed:', error)
    }
  },

  // 모든 테스트 실행
  async runAllTests() {
    console.log('🔍 Running all analytics tests...')
    
    await this.testConnection()
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    await this.testTarotReading()
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    await this.testCardView()
    
    console.log('🎉 All analytics tests completed')
  }
}

// 개발 환경에서만 전역에 노출
if (import.meta.env.DEV) {
  (window as any).testAnalytics = testAnalytics
  console.log('🔧 Analytics test utilities available at window.testAnalytics')
  console.log('🔧 Run window.testAnalytics.runAllTests() to test all functions')
}
