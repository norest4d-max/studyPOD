import { useState, useEffect } from 'react'
import './Quiz.css'
import { getCatalogAppearanceBit, getFillBlankSpinBit, getSatireConfidenceBit } from '../data/satireBits'

function Quiz({ vocabulary, deckTitle, quizMode, numQuestions, onComplete, performanceData = {}, hasGifs = false, vocabCards = null }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [questions, setQuestions] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [results, setResults] = useState([])
  const [startTime, setStartTime] = useState(null)
  const [satireConfidence, setSatireConfidence] = useState('')
  const [catalogAppearance, setCatalogAppearance] = useState('')
  const [fillBlankSpin, setFillBlankSpin] = useState('')
  const [currentGif, setCurrentGif] = useState(null)

  useEffect(() => {
    generateQuestions()
  }, [])

  const getWordDifficulty = (word) => {
    // Calculate difficulty score based on performance
    const perf = performanceData[word]
    if (!perf || perf.attempts === 0) return 0.5 // neutral for new words
    
    const errorRate = perf.incorrect / perf.attempts
    return errorRate // 0 = easy, 1 = hard
  }

  const selectWordsWithWeighting = (words, count) => {
    // Weight words by difficulty - harder words more likely to appear
    const weightedWords = words.map(word => ({
      word,
      weight: 1 + (getWordDifficulty(word) * 3) // Hard words 4x more likely
    }))

    const selected = []
    const remaining = [...weightedWords]

    for (let i = 0; i < Math.min(count, words.length); i++) {
      const totalWeight = remaining.reduce((sum, item) => sum + item.weight, 0)
      let random = Math.random() * totalWeight
      
      for (let j = 0; j < remaining.length; j++) {
        random -= remaining[j].weight
        if (random <= 0) {
          selected.push(remaining[j].word)
          remaining.splice(j, 1)
          break
        }
      }
    }

    return selected
  }

  const generateQuestions = () => {
    const words = Object.keys(vocabulary)
    
    // Use adaptive selection if performance data exists
    const selectedWords = Object.keys(performanceData).length > 0
      ? selectWordsWithWeighting(words, numQuestions)
      : words.sort(() => Math.random() - 0.5).slice(0, numQuestions)
    
    const generatedQuestions = selectedWords.map(word => {
      const correctDefinition = vocabulary[word]
      
      // Find GIF for this term if available
      let gif = null
      if (hasGifs && vocabCards) {
        const card = vocabCards.find(c => c.prompt === word)
        gif = card?.gif || null
      }
      
      if (quizMode === 'word_to_def') {
        return {
          question: word,
          correctAnswer: correctDefinition,
          options: generateOptions(correctDefinition, Object.values(vocabulary)),
          word: word,
          definition: correctDefinition,
          gif: gif
        }
      } else {
        return {
          question: correctDefinition,
          correctAnswer: word,
          options: generateOptions(word, words),
          word: word,
          definition: correctDefinition,
          gif: gif
        }
      }
    })
    
    setQuestions(generatedQuestions)
    setStartTime(Date.now())
    
    // Set initial GIF
    if (generatedQuestions.length > 0 && generatedQuestions[0].gif) {
      setCurrentGif(generatedQuestions[0].gif)
    }
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
    setSatireConfidence(getSatireConfidenceBit(isCorrect))
    setCatalogAppearance(getCatalogAppearanceBit())
    setFillBlankSpin(getFillBlankSpinBit())

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
      const nextQuestion = currentQuestion + 1
      setCurrentQuestion(nextQuestion)
      setSelectedAnswer(null)
      setShowFeedback(false)
      setSatireConfidence('')
      setCatalogAppearance('')
      setFillBlankSpin('')
      setStartTime(Date.now())
      
      // Update GIF for next question
      if (questions[nextQuestion]?.gif) {
        setCurrentGif(questions[nextQuestion].gif)
      } else {
        setCurrentGif(null)
      }
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
            {deckTitle && <p className="muted">{deckTitle}</p>}
          </div>

          <div className="divider"></div>

          {/* Display visual icon if available */}
          {hasGifs && currentGif && (
            <div className="gif-container" style={{
              textAlign: 'center',
              margin: '1.5rem 0',
              padding: '1.5rem',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              borderRadius: '12px',
              border: '2px solid rgba(102, 126, 234, 0.3)',
              fontSize: '4rem',
              lineHeight: '1'
            }}>
              <div style={{
                display: 'inline-block',
                animation: 'bounce 2s ease-in-out infinite'
              }}>
                {currentGif}
              </div>
            </div>
          )}

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

              <div className="satire-info-box">
                <p className="satire-line">{satireConfidence}</p>
                <p className="catalog-line">A+ catalog appearance: {catalogAppearance}</p>
                <p className="catalog-line">{fillBlankSpin}</p>
              </div>
              
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
