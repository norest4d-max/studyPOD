// GIF API SERVICE - Fetch relevant GIFs from Giphy API with emoji fallback
// This service provides dynamic GIF fetching with reliable emoji fallbacks

import { findEmojiByKeywords } from '../data/emojiLibrary.js'

// Giphy API configuration
const GIPHY_API_KEY = 'DEMO_API_KEY' // Replace with your Giphy API key
const GIPHY_BASE_URL = 'https://api.giphy.com/v1/gifs'
const GIPHY_RATING = 'g' // Family-friendly content only (g, pg, pg-13)

/**
 * Visual aid configuration
 * Controls whether to use GIFs or emojis
 */
export const VISUAL_AID_CONFIG = {
  // Primary method: 'gif' or 'emoji'
  primaryMethod: 'emoji', // Default to emoji for reliability
  
  // Whether to attempt GIF fetch
  enableGifFetch: false, // Disabled by default (enable in production with real API key)
  
  // Fallback to emoji if GIF fails
  fallbackToEmoji: true,
  
  // Cache GIF URLs to reduce API calls
  enableCache: true,
  
  // Max age of cached GIFs (milliseconds)
  cacheMaxAge: 24 * 60 * 60 * 1000, // 24 hours
}

// In-memory cache for GIF URLs
const gifCache = new Map()

/**
 * Get the configured API key
 * Priority: Environment variable > Config constant
 */
const getApiKey = () => {
  // In production, use environment variable
  if (typeof process !== 'undefined' && process.env?.VITE_GIPHY_API_KEY) {
    return process.env.VITE_GIPHY_API_KEY
  }
  return GIPHY_API_KEY
}

/**
 * Search Giphy for relevant GIF
 * @param {string} searchTerm - Term to search for
 * @param {object} options - Search options
 * @returns {Promise<string|null>} - GIF URL or null
 */
export const searchGiphyGif = async (searchTerm, options = {}) => {
  const {
    limit = 1,
    rating = GIPHY_RATING,
    lang = 'en',
  } = options
  
  try {
    const apiKey = getApiKey()
    
    // Don't attempt if using demo key (will fail)
    if (apiKey === 'DEMO_API_KEY') {
      console.log('Using demo API key - skipping Giphy fetch')
      return null
    }
    
    const params = new URLSearchParams({
      api_key: apiKey,
      q: searchTerm,
      limit: limit.toString(),
      rating,
      lang,
    })
    
    const response = await fetch(`${GIPHY_BASE_URL}/search?${params}`)
    
    if (!response.ok) {
      throw new Error(`Giphy API error: ${response.status}`)
    }
    
    const data = await response.json()
    
    if (data.data && data.data.length > 0) {
      // Return the fixed_height GIF URL for optimal size
      return data.data[0].images.fixed_height.url
    }
    
    return null
  } catch (error) {
    console.error('Error fetching from Giphy:', error.message)
    return null
  }
}

/**
 * Get visual aid for a term (GIF or emoji)
 * @param {string} term - The vocabulary term
 * @param {string} category - Category of the term
 * @param {object} options - Configuration options
 * @returns {Promise<object>} - Visual aid object with type and content
 */
export const getVisualAid = async (term, category, options = {}) => {
  const config = { ...VISUAL_AID_CONFIG, ...options }
  
  // Generate cache key
  const cacheKey = `${term}-${category}`
  
  // Check cache first if enabled
  if (config.enableCache && gifCache.has(cacheKey)) {
    const cached = gifCache.get(cacheKey)
    const age = Date.now() - cached.timestamp
    
    if (age < config.cacheMaxAge) {
      return cached.data
    } else {
      // Expired, remove from cache
      gifCache.delete(cacheKey)
    }
  }
  
  // If primary method is emoji, return emoji immediately
  if (config.primaryMethod === 'emoji' || !config.enableGifFetch) {
    const emoji = findEmojiByKeywords(`${term} ${category}`)
    return {
      type: 'emoji',
      content: emoji,
      source: 'library'
    }
  }
  
  // Try to fetch GIF
  if (config.primaryMethod === 'gif' && config.enableGifFetch) {
    try {
      // Create search term combining term and category
      const searchTerm = `${term} ${category} technology`
      const gifUrl = await searchGiphyGif(searchTerm)
      
      if (gifUrl) {
        const result = {
          type: 'gif',
          content: gifUrl,
          source: 'giphy'
        }
        
        // Cache the result
        if (config.enableCache) {
          gifCache.set(cacheKey, {
            data: result,
            timestamp: Date.now()
          })
        }
        
        return result
      }
    } catch (error) {
      console.error('Error getting GIF:', error)
    }
    
    // GIF fetch failed, fallback to emoji if enabled
    if (config.fallbackToEmoji) {
      const emoji = findEmojiByKeywords(`${term} ${category}`)
      return {
        type: 'emoji',
        content: emoji,
        source: 'library-fallback'
      }
    }
  }
  
  // Default fallback
  return {
    type: 'emoji',
    content: '💡',
    source: 'default'
  }
}

/**
 * Batch fetch visual aids for multiple terms
 * @param {Array} terms - Array of {term, category} objects
 * @param {object} options - Configuration options
 * @returns {Promise<Map>} - Map of term to visual aid
 */
export const batchGetVisualAids = async (terms, options = {}) => {
  const results = new Map()
  
  // Process terms in batches to avoid rate limiting
  const batchSize = 5
  for (let i = 0; i < terms.length; i += batchSize) {
    const batch = terms.slice(i, i + batchSize)
    
    const promises = batch.map(async ({ term, category }) => {
      const visualAid = await getVisualAid(term, category, options)
      return { term, visualAid }
    })
    
    const batchResults = await Promise.all(promises)
    
    batchResults.forEach(({ term, visualAid }) => {
      results.set(term, visualAid)
    })
    
    // Small delay between batches to be respectful of API limits
    if (i + batchSize < terms.length) {
      await new Promise(resolve => setTimeout(resolve, 200))
    }
  }
  
  return results
}

/**
 * Clear the GIF cache
 */
export const clearGifCache = () => {
  gifCache.clear()
}

/**
 * Get cache statistics
 */
export const getCacheStats = () => {
  return {
    size: gifCache.size,
    keys: Array.from(gifCache.keys())
  }
}

/**
 * Update visual aid configuration
 * @param {object} newConfig - New configuration values
 */
export const updateConfig = (newConfig) => {
  Object.assign(VISUAL_AID_CONFIG, newConfig)
}

// Export configuration for external access
export { VISUAL_AID_CONFIG as config }
