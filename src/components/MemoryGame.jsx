import { useState, useEffect } from 'react'
import './MemoryGame.css'

function MemoryGame() {
  const [sequence, setSequence] = useState([])
  const [playerSequence, setPlayerSequence] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPlayerTurn, setIsPlayerTurn] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const blueShades = [
    '#1e3a8a', // dark blue
    '#2563eb', // medium blue
    '#3b82f6', // blue
    '#60a5fa', // light blue
    '#93c5fd', // lighter blue
    '#bfdbfe', // pale blue
    '#dbeafe', // very pale blue
    '#e0f2fe', // sky blue
    '#f0f9ff'  // very light blue
  ]

  useEffect(() => {
    const stored = localStorage.getItem('memoryGameHighScore')
    if (stored) {
      setHighScore(parseInt(stored))
    }
  }, [])

  const startGame = () => {
    setSequence([])
    setPlayerSequence([])
    setScore(0)
    setGameOver(false)
    setIsPlaying(true)
    setTimeout(() => addToSequence([]), 500)
  }

  const addToSequence = (currentSeq) => {
    const newSpot = Math.floor(Math.random() * 9)
    const newSequence = [...currentSeq, newSpot]
    setSequence(newSequence)
    playSequence(newSequence)
  }

  const playSequence = async (seq) => {
    setIsPlayerTurn(false)
    for (let i = 0; i < seq.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 600))
      highlightSpot(seq[i])
      await new Promise(resolve => setTimeout(resolve, 400))
    }
    setIsPlayerTurn(true)
  }

  const highlightSpot = (index) => {
    const spot = document.getElementById(`spot-${index}`)
    if (spot) {
      spot.classList.add('highlight')
      setTimeout(() => spot.classList.remove('highlight'), 400)
    }
  }

  const handleSpotClick = (index) => {
    if (!isPlayerTurn || gameOver) return

    const newPlayerSeq = [...playerSequence, index]
    setPlayerSequence(newPlayerSeq)

    highlightSpot(index)

    if (newPlayerSeq[newPlayerSeq.length - 1] !== sequence[newPlayerSeq.length - 1]) {
      // Wrong spot!
      endGame()
      return
    }

    if (newPlayerSeq.length === sequence.length) {
      // Completed sequence!
      const newScore = score + 1
      setScore(newScore)
      if (newScore > highScore) {
        setHighScore(newScore)
        localStorage.setItem('memoryGameHighScore', newScore.toString())
      }
      setPlayerSequence([])
      setTimeout(() => addToSequence(sequence), 1000)
    }
  }

  const endGame = () => {
    setGameOver(true)
    setIsPlaying(false)
    setIsPlayerTurn(false)
  }

  return (
    <div className="memory-game">
      <div className="container">
        <div className="game-header">
          <h1>Memory Pattern Game 🎮</h1>
          <p className="game-description">
            Watch the pattern of blue shades light up, then repeat the sequence!
          </p>
        </div>

        <div className="game-stats">
          <div className="stat-box">
            <span className="stat-label">Score</span>
            <span className="stat-value">{score}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">High Score</span>
            <span className="stat-value">{highScore}</span>
          </div>
        </div>

        {!isPlaying && !gameOver && (
          <div className="game-start">
            <button onClick={startGame} className="start-btn">
              Start Game
            </button>
            <div className="instructions">
              <h3>How to Play:</h3>
              <ol>
                <li>Watch the sequence of blue squares light up</li>
                <li>Repeat the pattern in the same order</li>
                <li>Each round adds one more step</li>
                <li>See how far you can go!</li>
              </ol>
            </div>
          </div>
        )}

        {gameOver && (
          <div className="game-over">
            <h2>Game Over!</h2>
            <p>You reached level {score}</p>
            <button onClick={startGame} className="restart-btn">
              Play Again
            </button>
          </div>
        )}

        {isPlaying && (
          <div className="game-status">
            {!isPlayerTurn && <p className="status-text">Watch the pattern...</p>}
            {isPlayerTurn && <p className="status-text">Your turn! Repeat the pattern.</p>}
          </div>
        )}

        <div className="game-grid">
          {blueShades.map((color, index) => (
            <div
              key={index}
              id={`spot-${index}`}
              className={`game-spot ${isPlayerTurn ? 'clickable' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => handleSpotClick(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MemoryGame
