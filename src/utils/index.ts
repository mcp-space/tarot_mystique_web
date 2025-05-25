// 🔮 Utility functions for mystical operations

// Random number generator with cosmic energy
export const cosmicRandom = (min: number = 0, max: number = 1): number => {
  return Math.random() * (max - min) + min
}

// Shuffle array with ancient algorithms
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Format date with mystical touch
export const formatMysticalDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }
  return new Intl.DateTimeFormat('ko-KR', options).format(date)
}

// Generate mystical session ID
export const generateMysticalId = (): string => {
  return `cosmic_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Validate email with cosmic regex
export const isValidEmail = (email: string): boolean => {
  const cosmicEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return cosmicEmailRegex.test(email)
}

// Calculate reading compatibility
export const calculateCosmicCompatibility = (cards: any[]): number => {
  if (!cards.length) return 0
  
  const reversedCount = cards.filter(card => card.reversed).length
  const uprightCount = cards.length - reversedCount
  
  // Mystical formula for cosmic harmony
  return Math.round(((uprightCount * 0.8 + reversedCount * 0.3) / cards.length) * 100)
}
