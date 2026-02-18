import { useState } from 'react'
import './QuizMode.css'

function QuizMode({ vocabulary, onModeSelect }) {
  const [selectedMode, setSelectedMode] = useState(null)
  const [numQuestions, setNumQuestions] = useState('')
  const maxQuestions = Object.keys(vocabulary).length

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedMode) return
    
    const count = numQuestions === '' ? maxQuestions : parseInt(numQuestions)
    onModeSelect(selectedMode, count)
  }

  return (
    <div className="quiz-mode">
      <div className="container">
        <div className="box">
          <h1>StudyPOD</h1>
          <p className="success">✓ Loaded {maxQuestions} word-definition pairs</p>
          
          <div className="divider"></div>
          
          <h2>Choose Quiz Mode</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mode-options">
              <div 
                className={`mode-option ${selectedMode === 'word_to_def' ? 'selected' : ''}`}
                onClick={() => setSelectedMode('word_to_def')}
              >
                <div className="mode-number">1</div>
                <div className="mode-content">
                  <h3>Word → Definition</h3>
                  <p className="muted">Given a word, choose the correct definition</p>
                </div>
              </div>

              <div 
                className={`mode-option ${selectedMode === 'def_to_word' ? 'selected' : ''}`}
                onClick={() => setSelectedMode('def_to_word')}
              >
                <div className="mode-number">2</div>
                <div className="mode-content">
                  <h3>Definition → Word</h3>
                  <p className="muted">Given a definition, choose the correct word</p>
                </div>
              </div>
            </div>

            <div className="question-count">
              <label htmlFor="num-questions">
                How many questions? (1-{maxQuestions}, or leave blank for all)
              </label>
              <input
                id="num-questions"
                type="number"
                min="1"
                max={maxQuestions}
                value={numQuestions}
                onChange={(e) => setNumQuestions(e.target.value)}
                placeholder={`All ${maxQuestions} questions`}
              />
            </div>

            <button 
              type="submit" 
              disabled={!selectedMode}
              className="start-quiz-btn"
            >
              Start Quiz
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default QuizMode
