import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import QuizApp from './components/QuizApp'
import MemoryGame from './components/MemoryGame'
import Forum from './components/Forum'
import Footer from './components/Footer'
import LessonMode from './components/LessonMode'
import { PREALGEBRA_CHAPTER1 } from './data/mathContent'

function App() {
  const [currentTab, setCurrentTab] = useState('home')
  const [presetVocabulary, setPresetVocabulary] = useState(null)
  const [presetDeckTitle, setPresetDeckTitle] = useState('')
  const [hasGifs, setHasGifs] = useState(false)
  const [categoryCards, setCategoryCards] = useState(null)
  const [showLesson, setShowLesson] = useState(false)
  const [lessonQuizMode, setLessonQuizMode] = useState(false)
  const [lessonQuizQuestions, setLessonQuizQuestions] = useState(null)

  const handleStartQuiz = (preset = null) => {
    if (preset?.vocabulary) {
      setPresetVocabulary(preset.vocabulary)
      setPresetDeckTitle(preset.deckTitle || 'Prebuilt Flashcards')
      setHasGifs(preset.hasGifs || false)
      setCategoryCards(preset.categoryCards || null)
    } else {
      setPresetVocabulary(null)
      setPresetDeckTitle('')
      setHasGifs(false)
      setCategoryCards(null)
    }
    setShowLesson(false)
    setLessonQuizMode(false)
    setCurrentTab('quiz')
  }

  const handleStartLesson = () => {
    setShowLesson(true)
    setLessonQuizMode(false)
    setCurrentTab('lesson')
  }

  const handleLessonQuizStart = (questions) => {
    setLessonQuizQuestions(questions)
    setLessonQuizMode(true)
    setShowLesson(false)
  }

  const handleBackToHome = () => {
    setShowLesson(false)
    setLessonQuizMode(false)
    setCurrentTab('home')
  }

  const renderContent = () => {
    if (showLesson) {
      return (
        <LessonMode 
          lessonData={PREALGEBRA_CHAPTER1}
          onStartQuiz={handleLessonQuizStart}
          onBack={handleBackToHome}
        />
      )
    }

    switch(currentTab) {
      case 'home':
        return <Home onStartQuiz={handleStartQuiz} onStartLesson={handleStartLesson} />
      case 'quiz':
        return (
          <QuizApp
            initialVocabulary={presetVocabulary}
            initialDeckTitle={presetDeckTitle}
            hasGifs={hasGifs}
            categoryCards={categoryCards}
            lessonQuizMode={lessonQuizMode}
            lessonQuizQuestions={lessonQuizQuestions}
          />
        )
      case 'lesson':
        return (
          <LessonMode 
            lessonData={PREALGEBRA_CHAPTER1}
            onStartQuiz={handleLessonQuizStart}
            onBack={handleBackToHome}
          />
        )
      case 'memory':
        return <MemoryGame />
      case 'blog':
        return <Forum />
      default:
        return <Home onStartQuiz={handleStartQuiz} onStartLesson={handleStartLesson} />
    }
  }

  return (
    <div className="app">
      <Navigation currentTab={currentTab} onTabChange={setCurrentTab} />
      <main className="app-content">
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}

export default App
