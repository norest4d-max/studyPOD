// Sound service for quiz feedback
class SoundService {
  constructor() {
    this.audioContext = null
    this.enabled = true
    this.initAudioContext()
  }

  initAudioContext() {
    try {
      // Create AudioContext on user interaction
      if (typeof window !== 'undefined') {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
      }
    } catch (e) {
      console.warn('Web Audio API not supported', e)
      this.enabled = false
    }
  }

  // Play correct answer sound - pleasant ascending tone
  playCorrect() {
    if (!this.enabled || !this.audioContext) return
    
    try {
      const now = this.audioContext.currentTime
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)
      
      // Happy ascending arpeggio
      oscillator.frequency.setValueAtTime(523.25, now) // C5
      oscillator.frequency.setValueAtTime(659.25, now + 0.1) // E5
      oscillator.frequency.setValueAtTime(783.99, now + 0.2) // G5
      
      oscillator.type = 'sine'
      
      gainNode.gain.setValueAtTime(0.3, now)
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4)
      
      oscillator.start(now)
      oscillator.stop(now + 0.4)
    } catch (e) {
      console.warn('Error playing correct sound', e)
    }
  }

  // Play incorrect answer sound - gentle descending tone
  playIncorrect() {
    if (!this.enabled || !this.audioContext) return
    
    try {
      const now = this.audioContext.currentTime
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)
      
      // Gentle descending tone
      oscillator.frequency.setValueAtTime(392.00, now) // G4
      oscillator.frequency.setValueAtTime(329.63, now + 0.15) // E4
      
      oscillator.type = 'sine'
      
      gainNode.gain.setValueAtTime(0.2, now)
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3)
      
      oscillator.start(now)
      oscillator.stop(now + 0.3)
    } catch (e) {
      console.warn('Error playing incorrect sound', e)
    }
  }

  // Play button click sound
  playClick() {
    if (!this.enabled || !this.audioContext) return
    
    try {
      const now = this.audioContext.currentTime
      const oscillator = this.audioContext.createOscillator()
      const gainNode = this.audioContext.createGain()
      
      oscillator.connect(gainNode)
      gainNode.connect(this.audioContext.destination)
      
      oscillator.frequency.setValueAtTime(800, now)
      oscillator.type = 'sine'
      
      gainNode.gain.setValueAtTime(0.1, now)
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1)
      
      oscillator.start(now)
      oscillator.stop(now + 0.1)
    } catch (e) {
      console.warn('Error playing click sound', e)
    }
  }

  // Play completion sound - celebratory
  playComplete() {
    if (!this.enabled || !this.audioContext) return
    
    try {
      const now = this.audioContext.currentTime
      
      // Play a series of ascending notes for celebration
      const notes = [523.25, 587.33, 659.25, 783.99, 880.00] // C5, D5, E5, G5, A5
      
      notes.forEach((freq, index) => {
        const oscillator = this.audioContext.createOscillator()
        const gainNode = this.audioContext.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(this.audioContext.destination)
        
        const startTime = now + (index * 0.08)
        oscillator.frequency.setValueAtTime(freq, startTime)
        oscillator.type = 'sine'
        
        gainNode.gain.setValueAtTime(0.2, startTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.2)
        
        oscillator.start(startTime)
        oscillator.stop(startTime + 0.2)
      })
    } catch (e) {
      console.warn('Error playing complete sound', e)
    }
  }

  // Resume audio context (needed for some browsers)
  resume() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume()
    }
  }

  // Enable/disable sounds
  setEnabled(enabled) {
    this.enabled = enabled
  }

  isEnabled() {
    return this.enabled
  }
}

// Create singleton instance
const soundService = new SoundService()

export default soundService
