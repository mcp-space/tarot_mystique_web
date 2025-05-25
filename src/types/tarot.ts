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
