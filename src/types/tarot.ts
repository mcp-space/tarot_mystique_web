export interface TarotCard {
  id: number
  name: string
  nameKr: string
  arcana: 'major'
  imageUrl: string
  keywords: string[]
  keywordsKr: string[]
  meanings: {
    upright: {
      general: string
      love: string
      career: string
      health: string
    }
    reversed: {
      general: string
      love: string
      career: string
      health: string
    }
  }
  description: string
  descriptionKr: string
  element?: string
  planet?: string
  numerology: number
  symbolism: string[]
}

export interface CardReading {
  id: string
  cards: DrawnCard[]
  question?: string
  timestamp: Date
  spread: SpreadType
}

export interface DrawnCard {
  card: TarotCard
  position: number
  reversed: boolean
  interpretation: string
}

export type SpreadType = 'single' | 'three-card' | 'celtic-cross'

export interface ReadingResult {
  cards: DrawnCard[]
  overallMessage: string
  advice: string
}

export interface Reading {
  id?: string
  userId?: string
  spreadType: SpreadType
  cards: DrawnCard[]
  question?: string
  result?: ReadingResult
  createdAt: Date
}

// 유저 활동 추적을 위한 인터페이스
export interface UserActivity {
  userIp: string
  category: string
  userContent: string
  resultContent: string
}
