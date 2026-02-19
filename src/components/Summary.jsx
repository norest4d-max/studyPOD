import './Summary.css'

function Summary({ results, onRestart, onNewFile }) {
  const correctCount = results.filter(r => r.isCorrect).length
  const totalCount = results.length
  const percentage = totalCount > 0 ? (correctCount / totalCount * 100).toFixed(1) : 0
  const totalTime = results.reduce((sum, r) => sum + r.timeTaken, 0)
  const avgTime = totalCount > 0 ? (totalTime / totalCount).toFixed(1) : 0

  const getMessage = () => {
    if (percentage === 100) {
      return 'Perfect score! You know all the vocabulary.'
    } else if (percentage >= 80) {
      return 'Great job! Keep practicing.'
    } else if (percentage >= 60) {
      return 'Good effort. Review the missed items.'
    } else {
      return 'Keep studying. Practice makes perfect.'
    }
  }

  return (
    <div className="summary">
      <div className="container">
        <div className="box">
          <h1>Quiz Summary</h1>
          
          <div className="divider"></div>

          <div className="summary-stats">
            <div className="stat-card">
              <div className="stat-value emphasis">{correctCount}/{totalCount}</div>
              <div className="stat-label muted">Correct Answers</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value emphasis">{percentage}%</div>
              <div className="stat-label muted">Score</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value emphasis">{totalTime.toFixed(1)}s</div>
              <div className="stat-label muted">Total Time</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value emphasis">{avgTime}s</div>
              <div className="stat-label muted">Average Time</div>
            </div>
          </div>

          <div className="summary-message">
            <p className="emphasis">{getMessage()}</p>
          </div>

          <div className="summary-actions">
            <button onClick={onRestart} className="secondary">
              Take Another Quiz
            </button>
            <button onClick={onNewFile}>
              Load New Vocabulary
            </button>
          </div>
        </div>

        {results.filter(r => !r.isCorrect).length > 0 && (
          <div className="box missed-items">
            <h3>Review Missed Items</h3>
            <div className="missed-list">
              {results.map((result, index) => (
                !result.isCorrect && (
                  <div key={index} className="missed-item">
                    <div className="missed-word emphasis">{result.word}</div>
                    <div className="missed-details">
                      <p className="muted">
                        <strong>Your answer:</strong> {result.userAnswer}
                      </p>
                      <p className="muted">
                        <strong>Correct answer:</strong> {result.correctAnswer}
                      </p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Summary
