import { useState, useEffect, useCallback } from 'react'
import { tarotAPI } from '../services/api'
import { TarotCard, Reading, SpreadType } from '../types/tarot'
import toast from 'react-hot-toast'

// 🔮 Hook for managing tarot cards
export function useTarotCards() {
  const [cards, setCards] = useState<TarotCard[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchCards = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      const fetchedCards = await tarotAPI.getAllCards()
      setCards(fetchedCards)
    } catch (err) {
      const errorMessage = 'Failed to fetch tarot cards from the cosmic library'
      setError(errorMessage)
      console.error('💀', errorMessage, err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchCards()
  }, [fetchCards])

  return {
    cards,
    loading,
    error,
    refetch: fetchCards,
  }
}

// 🎲 Hook for drawing random cards
export function useRandomCards() {
  const [isDrawing, setIsDrawing] = useState(false)
  
  const drawCards = useCallback(async (count: number = 1) => {
    setIsDrawing(true)
    
    try {
      const result = await tarotAPI.getRandomCards(count)
      toast.success(result.cosmic_message)
      return result
    } catch (error) {
      console.error('💀 Failed to draw cards:', error)
      throw error
    } finally {
      setIsDrawing(false)
    }
  }, [])

  return {
    drawCards,
    isDrawing,
  }
}

// 🔮 Hook for creating readings
export function useCreateReading() {
  const [isCreating, setIsCreating] = useState(false)
  
  const createReading = useCallback(async (data: {
    spreadType: SpreadType
    question?: string
    userId?: string
  }) => {
    setIsCreating(true)
    
    try {
      const reading = await tarotAPI.createReading(data)
      toast.success('✨ The cosmic reading has been revealed!')
      return reading
    } catch (error) {
      console.error('💀 Failed to create reading:', error)
      throw error
    } finally {
      setIsCreating(false)
    }
  }, [])

  return {
    createReading,
    isCreating,
  }
}

// 🔍 Hook for fetching a specific reading
export function useReading(readingId?: string) {
  const [reading, setReading] = useState<Reading | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchReading = useCallback(async (id: string) => {
    setLoading(true)
    setError(null)
    
    try {
      const fetchedReading = await tarotAPI.getReading(id)
      setReading(fetchedReading)
    } catch (err) {
      const errorMessage = 'Failed to fetch reading from the akashic records'
      setError(errorMessage)
      console.error('💀', errorMessage, err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (readingId) {
      fetchReading(readingId)
    }
  }, [readingId, fetchReading])

  return {
    reading,
    loading,
    error,
    refetch: readingId ? () => fetchReading(readingId) : undefined,
  }
}

// 📊 Hook for API statistics
export function useAPIStats() {
  const [stats, setStats] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  
  const fetchStats = useCallback(async () => {
    setLoading(true)
    
    try {
      const [cardStats, readingStats] = await Promise.all([
        tarotAPI.getCardStats(),
        tarotAPI.getReadingStats(),
      ])
      
      setStats({ cards: cardStats, readings: readingStats })
    } catch (error) {
      console.error('💀 Failed to fetch stats:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchStats()
  }, [fetchStats])

  return {
    stats,
    loading,
    refetch: fetchStats,
  }
}

// 🔍 Hook for searching cards
export function useCardSearch() {
  const [results, setResults] = useState<TarotCard[]>([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  
  const searchCards = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }
    
    setLoading(true)
    setQuery(searchQuery)
    
    try {
      const searchResult = await tarotAPI.searchCards(searchQuery)
      setResults(searchResult.results)
      
      if (searchResult.count === 0) {
        toast.info(searchResult.message)
      }
    } catch (error) {
      console.error('💀 Search failed:', error)
      setResults([])
    } finally {
      setLoading(false)
    }
  }, [])

  const clearSearch = useCallback(() => {
    setResults([])
    setQuery('')
  }, [])

  return {
    results,
    loading,
    query,
    searchCards,
    clearSearch,
  }
}
