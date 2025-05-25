import { useState, useEffect } from 'react'

// 🔮 Custom hook for mystical local storage
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  // Get value from localStorage or use initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`💀 Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that persists to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.warn(`💀 Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}

// 🌙 Hook for reading history
export function useReadingHistory() {
  return useLocalStorage<any[]>('tarot_reading_history', [])
}

// ✨ Hook for user preferences
export function useUserPreferences() {
  return useLocalStorage('tarot_user_preferences', {
    language: 'ko',
    theme: 'dark',
    animations: true,
    soundEffects: false,
    autoSaveReadings: true,
  })
}

// 🔍 Hook for favorite cards
export function useFavoriteCards() {
  return useLocalStorage<number[]>('tarot_favorite_cards', [])
}
