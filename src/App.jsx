import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import QuizApp from './components/QuizApp'
import MemoryGame from './components/MemoryGame'
import Forum from './components/Forum'

function App() {
  const [currentTab, setCurrentTab] = useState('home')
  const [presetVocabulary, setPresetVocabulary] = useState(null)
  const [presetDeckTitle, setPresetDeckTitle] = useState('')
  const [hasGifs, setHasGifs] = useState(false)
  const [categoryCards, setCategoryCards] = useState(null)

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
    setCurrentTab('quiz')
  }

  const renderContent = () => {
    switch(currentTab) {
      case 'home':
        return <Home onStartQuiz={handleStartQuiz} />
      case 'quiz':
        return (
          <QuizApp
            initialVocabulary={presetVocabulary}
            initialDeckTitle={presetDeckTitle}
            hasGifs={hasGifs}
            categoryCards={categoryCards}
          />
        )
      case 'memory':
        return <MemoryGame />
      case 'blog':
        return <Forum />
      default:
        return <Home onStartQuiz={handleStartQuiz} />
    }
  }

  return (
    <div className="app">
      <Navigation currentTab={currentTab} onTabChange={setCurrentTab} />
      <main className="app-content">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
