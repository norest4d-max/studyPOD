import { useState } from 'react'
import './Home.css'

function Home({ onStartQuiz }) {
  return (
    <div className="home">
      <div className="container">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to StudyPOD
              <span className="weasel-mascot">🦦💙</span>
            </h1>
            <p className="hero-subtitle">
              Your adaptive learning companion for vocabulary mastery and memory training
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Smart Quiz</h3>
              <p>Adaptive learning that focuses on words you find challenging</p>
              <button onClick={onStartQuiz} className="feature-btn">
                Start Quiz
              </button>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎮</div>
              <h3>Memory Game</h3>
              <p>Train your memory with our blue-themed pattern recognition game</p>
              <button className="feature-btn secondary">
                Coming Soon
              </button>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Community</h3>
              <p>Share your progress and connect with other learners</p>
              <button className="feature-btn secondary">
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        <div className="instructions-section">
          <h2>How to Get Started</h2>
          
          <div className="instruction-card">
            <h3>📝 Create Your Vocabulary File</h3>
            <p>Make a simple .txt file with word:definition pairs (one per line)</p>
            <div className="code-example">
              <pre>{`algorithm:A step-by-step procedure for solving problems
variable:A named storage location for data
function:A reusable block of code`}</pre>
            </div>
            <ul className="tips-list">
              <li>Use a colon (:) to separate words from definitions</li>
              <li>One word-definition pair per line</li>
              <li>Lines starting with # are comments (ignored)</li>
              <li>Save as .txt file (e.g., vocabulary.txt)</li>
            </ul>
          </div>

          <div className="instruction-card">
            <h3>🎯 Import & Study</h3>
            <ol className="steps-list">
              <li>Click the Quiz tab above</li>
              <li>Upload your .txt file or use our example</li>
              <li>Choose your quiz mode (word→definition or definition→word)</li>
              <li>Start learning!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
