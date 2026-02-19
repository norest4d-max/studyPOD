import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'
import QuizMode from './components/QuizMode'
import Quiz from './components/Quiz'
import Summary from './components/Summary'

function App() {
  const [stage, setStage] = useState('welcome') // welcome, mode, quiz, summary
  const [vocabulary, setVocabulary] = useState({})
  const [quizMode, setQuizMode] = useState(null) // 'word_to_def' or 'def_to_word'
  const [numQuestions, setNumQuestions] = useState(null)
  const [results, setResults] = useState([])

  const handleVocabularyLoad = (vocabData) => {
    setVocabulary(vocabData)
    setStage('mode')
  }

  const handleModeSelect = (mode, count) => {
    setQuizMode(mode)
    setNumQuestions(count)
    setStage('quiz')
  }

  const handleQuizComplete = (quizResults) => {
    setResults(quizResults)
    setStage('summary')
  }

  const handleRestart = () => {
    setStage('mode')
    setResults([])
  }

  const handleNewFile = () => {
    setStage('welcome')
    setVocabulary({})
    setQuizMode(null)
    setNumQuestions(null)
    setResults([])
  }

  return (
    <div className="app">
      {stage === 'welcome' && (
        <Welcome onVocabularyLoad={handleVocabularyLoad} />
      )}
      {stage === 'mode' && (
        <QuizMode 
          vocabulary={vocabulary}
          onModeSelect={handleModeSelect}
        />
      )}
      {stage === 'quiz' && (
        <Quiz 
          vocabulary={vocabulary}
          quizMode={quizMode}
          numQuestions={numQuestions}
          onComplete={handleQuizComplete}
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

export default App
