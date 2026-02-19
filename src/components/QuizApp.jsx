import { useEffect, useState } from 'react'
import Welcome from './Welcome'
import QuizMode from './QuizMode'
import Quiz from './Quiz'
import Summary from './Summary'
import './QuizApp.css'

function QuizApp({ initialVocabulary = null, initialDeckTitle = '', hasGifs = false, categoryCards = null }) {
  const [stage, setStage] = useState('welcome')
  const [vocabulary, setVocabulary] = useState({})
  const [quizMode, setQuizMode] = useState(null)
  const [numQuestions, setNumQuestions] = useState(null)
  const [results, setResults] = useState([])
  const [deckTitle, setDeckTitle] = useState('')
  const [performanceData, setPerformanceData] = useState({}) // Track hard words
  const [gifEnabled, setGifEnabled] = useState(false)
  const [vocabCards, setVocabCards] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('quizPerformance')
    if (stored) {
      setPerformanceData(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    if (initialVocabulary && Object.keys(initialVocabulary).length > 0) {
      setVocabulary(initialVocabulary)
      setDeckTitle(initialDeckTitle || 'Prebuilt Flashcards')
      setGifEnabled(hasGifs || false)
      setVocabCards(categoryCards || null)
      setStage('mode')
      setResults([])
      setQuizMode(null)
      setNumQuestions(null)
    }
  }, [initialVocabulary, initialDeckTitle, hasGifs, categoryCards])

  const handleVocabularyLoad = (vocabData) => {
    setVocabulary(vocabData)
    setDeckTitle('')
    // Load performance data from localStorage
    const stored = localStorage.getItem('quizPerformance')
    if (stored) {
      setPerformanceData(JSON.parse(stored))
    }
    setStage('mode')
  }

  const handleModeSelect = (mode, count) => {
    setQuizMode(mode)
    setNumQuestions(count)
    setStage('quiz')
  }

  const handleQuizComplete = (quizResults) => {
    setResults(quizResults)
    
    // Update performance data
    const newPerformance = { ...performanceData }
    quizResults.forEach(result => {
      const word = result.word
      if (!newPerformance[word]) {
        newPerformance[word] = { correct: 0, incorrect: 0, attempts: 0 }
      }
      newPerformance[word].attempts++
      if (result.isCorrect) {
        newPerformance[word].correct++
      } else {
        newPerformance[word].incorrect++
      }
    })
    
    setPerformanceData(newPerformance)
    localStorage.setItem('quizPerformance', JSON.stringify(newPerformance))
    setStage('summary')
  }

  const handleRestart = () => {
    setStage('mode')
    setResults([])
  }

  const handleNewFile = () => {
    setStage('welcome')
    setVocabulary({})
    setDeckTitle('')
    setQuizMode(null)
    setNumQuestions(null)
    setResults([])
  }

  return (
    <div className="quiz-app-wrapper">
      {stage === 'welcome' && (
        <Welcome onVocabularyLoad={handleVocabularyLoad} />
      )}
      {stage === 'mode' && (
        <QuizMode 
          vocabulary={vocabulary}
          deckTitle={deckTitle}
          onModeSelect={handleModeSelect}
        />
      )}
      {stage === 'quiz' && (
        <Quiz 
          vocabulary={vocabulary}
          deckTitle={deckTitle}
          quizMode={quizMode}
          numQuestions={numQuestions}
          onComplete={handleQuizComplete}
          performanceData={performanceData}
          hasGifs={gifEnabled}
          vocabCards={vocabCards}
        />
      )}
      {stage === 'summary' && (
        <Summary 
          results={results}
          onRestart={handleRestart}
          onNewFile={handleNewFile}
        />
      )}
    </div>
  )
}

export default QuizApp
