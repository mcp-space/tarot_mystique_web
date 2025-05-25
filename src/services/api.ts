import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { TarotCard, Reading, DrawnCard, SpreadType } from '../types/tarot'
import toast from 'react-hot-toast'

// 🔮 Mystical API Client
class TarotMystiqueAPI {
  private client: AxiosInstance
  private baseURL: string

  constructor() {
    // 항상 외부 서버로 요청하도록 고정
    this.baseURL = 'http://182.209.102.132:8080/api'
    
    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Request interceptor for mystical enhancements
    this.client.interceptors.request.use(
      (config) => {
        console.log('🔮 Sending mystical request:', config.method?.toUpperCase(), config.url)
        console.log('🌟 Target server:', this.baseURL)
        return config
      },
      (error) => {
        console.error('💀 Request failed:', error)
        return Promise.reject(error)
      }
    )

    // Response interceptor for cosmic error handling
    this.client.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log('✨ Received cosmic response:', response.status, response.data)
        return response
      },
      (error) => {
        console.error('💀 Cosmic disturbance:', error)
        
        if (error.code === 'ECONNABORTED') {
          toast.error('🔮 The cosmic connection timed out. Please try again.')
        } else if (error.response?.status === 429) {
          toast.error('🌙 Too many requests to the mystical realm. Please wait a moment.')
        } else if (error.response?.status >= 500) {
          toast.error('💀 The cosmic servers are experiencing turbulence.')
        } else if (error.response?.status === 404) {
          toast.error('🔍 The mystical resource was not found in the cosmic library.')
        } else if (error.code === 'ERR_NETWORK') {
          toast.error('🌐 Network connection to the mystical server failed.')
        } else {
          toast.error('⚡ An unexpected cosmic disturbance occurred.')
        }
        
        return Promise.reject(error)
      }
    )
  }

  // 🃏 Card-related API calls
  async getAllCards(): Promise<TarotCard[]> {
    const response = await this.client.get('/cards')
    return response.data
  }

  async getCardById(id: number): Promise<TarotCard> {
    const response = await this.client.get(`/cards/${id}`)
    return response.data
  }

  async getCardByArcanaId(arcanaId: number): Promise<TarotCard> {
    const response = await this.client.get(`/cards/arcana/${arcanaId}`)
    return response.data
  }

  async getRandomCards(count: number = 1): Promise<{ cards: TarotCard[]; drawnAt: string; cosmic_message: string }> {
    const response = await this.client.get(`/cards/random?count=${count}`)
    return response.data
  }

  async searchCards(query: string): Promise<{ query: string; results: TarotCard[]; count: number; message: string }> {
    const response = await this.client.get(`/cards/search?q=${encodeURIComponent(query)}`)
    return response.data
  }

  async getCardStats(): Promise<any> {
    const response = await this.client.get('/cards/stats')
    return response.data
  }

  // 🔮 Reading-related API calls
  async createReading(data: {
    spreadType: SpreadType
    question?: string
    userId?: string
  }): Promise<Reading> {
    const response = await this.client.post('/readings', data)
    return response.data
  }

  async getReading(id: string): Promise<Reading> {
    const response = await this.client.get(`/readings/${id}`)
    return response.data
  }

  async getUserReadings(userId: string, limit: number = 10, offset: number = 0): Promise<any> {
    const response = await this.client.get(`/readings/user/${userId}?limit=${limit}&offset=${offset}`)
    return response.data
  }

  async getReadingStats(): Promise<any> {
    const response = await this.client.get('/readings/stats')
    return response.data
  }

  // 👤 User-related API calls (optional)
  async createUser(data: {
    email?: string
    username?: string
    displayName?: string
    preferredLanguage?: string
    timezone?: string
  }): Promise<any> {
    const response = await this.client.post('/users', data)
    return response.data
  }

  async getUser(id: string): Promise<any> {
    const response = await this.client.get(`/users/${id}`)
    return response.data
  }

  async updateUser(id: string, data: any): Promise<any> {
    const response = await this.client.put(`/users/${id}`, data)
    return response.data
  }

  async getUserStats(id: string): Promise<any> {
    const response = await this.client.get(`/users/${id}/stats`)
    return response.data
  }

  // 🔍 Health check
  async healthCheck(): Promise<any> {
    const response = await this.client.get('/health', { baseURL: this.baseURL.replace('/api', '') })
    return response.data
  }
}

// Export singleton instance
export const tarotAPI = new TarotMystiqueAPI()
export default tarotAPI
