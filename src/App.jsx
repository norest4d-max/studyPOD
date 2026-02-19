import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import QuizApp from './components/QuizApp'
import MemoryGame from './components/MemoryGame'
import Blog from './components/Blog'

function App() {
  const [currentTab, setCurrentTab] = useState('home')

  const renderContent = () => {
    switch(currentTab) {
      case 'home':
        return <Home onStartQuiz={() => setCurrentTab('quiz')} />
      case 'quiz':
        return <QuizApp />
      case 'memory':
        return <MemoryGame />
      case 'blog':
        return <Blog />
      default:
        return <Home onStartQuiz={() => setCurrentTab('quiz')} />
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
