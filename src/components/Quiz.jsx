import { useState, useEffect } from 'react'
import './Quiz.css'

function Quiz({ vocabulary, quizMode, numQuestions, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [questions, setQuestions] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [results, setResults] = useState([])
  const [startTime, setStartTime] = useState(null)

  useEffect(() => {
    generateQuestions()
  }, [])

  const generateQuestions = () => {
    const words = Object.keys(vocabulary)
    const shuffled = [...words].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, numQuestions)
    
    const generatedQuestions = selected.map(word => {
      const correctDefinition = vocabulary[word]
      
      if (quizMode === 'word_to_def') {
        return {
          question: word,
          correctAnswer: correctDefinition,
          options: generateOptions(correctDefinition, Object.values(vocabulary)),
          word: word,
          definition: correctDefinition
        }
      } else {
        return {
          question: correctDefinition,
          correctAnswer: word,
          options: generateOptions(word, words),
          word: word,
          definition: correctDefinition
        }
      }
    })
    
    setQuestions(generatedQuestions)
    setStartTime(Date.now())
  }

  const generateOptions = (correct, allOptions) => {
    const wrong = allOptions.filter(opt => opt !== correct)
    const selected = wrong.sort(() => Math.random() - 0.5).slice(0, 3)
    const options = [...selected, correct]
    return options.sort(() => Math.random() - 0.5)
  }

  const handleAnswerSelect = (answer) => {
    if (showFeedback) return
    
    setSelectedAnswer(answer)
    setShowFeedback(true)
    
    const endTime = Date.now()
    const timeTaken = (endTime - startTime) / 1000
    
    const isCorrect = answer === questions[currentQuestion].correctAnswer
    const result = {
      isCorrect,
      timeTaken,
      userAnswer: answer,
      correctAnswer: questions[currentQuestion].correctAnswer,
      word: questions[currentQuestion].word
    }
    
    setResults([...results, result])
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
      setStartTime(Date.now())
    } else {
      // Quiz is complete, pass all results
      onComplete(results)
    }
  }

  if (questions.length === 0) {
    return <div className="container"><div className="box">Loading...</div></div>
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="quiz">
      <div className="container">
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="box">
          <div className="question-header">
            <h2>Question {currentQuestion + 1} of {questions.length}</h2>
          </div>

          <div className="divider"></div>

          <div className="question-content">
            <div className="question-label">
              {quizMode === 'word_to_def' ? 'Word:' : 'Definition:'}
            </div>
            <div className="question-text emphasis">
              {question.question}
            </div>
          </div>

          <div className="options-label muted">
            {quizMode === 'word_to_def' 
              ? 'Choose the correct definition:' 
              : 'Choose the correct word:'}
          </div>

          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`option ${selectedAnswer === option ? 'selected' : ''} ${
                  showFeedback && option === question.correctAnswer ? 'correct' : ''
                } ${showFeedback && selectedAnswer === option && option !== question.correctAnswer ? 'incorrect' : ''}`}
                onClick={() => handleAnswerSelect(option)}
                disabled={showFeedback}
              >
                <span className="option-number">{index + 1}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className="feedback">
              {selectedAnswer === question.correctAnswer ? (
                <div className="feedback-correct">
                  <span className="success">✓ CORRECT</span>
                  <p className="muted">
                    You know the {quizMode === 'word_to_def' ? 'word' : 'definition'}: '{question.word}'
                  </p>
                </div>
              ) : (
                <div className="feedback-incorrect">
                  <span className="error">✗ INCORRECT</span>
                  <p className="muted">Your answer: {selectedAnswer}</p>
                  <p className="muted">Correct answer: <span className="emphasis">{question.correctAnswer}</span></p>
                  <p className="muted">
                    Review the {quizMode === 'word_to_def' ? 'word' : 'definition'}: '{question.word}'
                  </p>
                </div>
              )}
              
              <button onClick={handleNext} className="next-btn">
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'View Summary'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Quiz
