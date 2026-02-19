import { useState } from 'react'
import './LessonMode.css'

function LessonMode({ lessonData, onStartQuiz, onBack }) {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const currentLesson = lessonData.lessons[currentLessonIndex]
  const currentSlide = currentLesson.slides[currentSlideIndex]
  const totalLessons = lessonData.lessons.length
  const totalSlides = currentLesson.slides.length

  const nextSlide = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1)
    } else if (currentLessonIndex < totalLessons - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1)
      setCurrentSlideIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1)
    } else if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1)
      const prevLesson = lessonData.lessons[currentLessonIndex - 1]
      setCurrentSlideIndex(prevLesson.slides.length - 1)
    }
  }

  const isFirstSlide = currentLessonIndex === 0 && currentSlideIndex === 0
  const isLastSlide = currentLessonIndex === totalLessons - 1 && currentSlideIndex === totalSlides - 1

  const renderSlideContent = () => {
    switch(currentSlide.type) {
      case 'intro':
        return (
          <div className="slide-content-intro">
            <h2 className="slide-title">{currentSlide.title}</h2>
            <p className="slide-text">{currentSlide.content}</p>
            {currentSlide.examples && (
              <div className="examples-box">
                <h4>Examples:</h4>
                <div className="examples-list">
                  {currentSlide.examples.map((ex, idx) => (
                    <span key={idx} className="example-item">{ex}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )
      
      case 'concept':
        return (
          <div className="slide-content-concept">
            <h2 className="slide-title">{currentSlide.title}</h2>
            <div className="concept-box">
              <p className="slide-text">{currentSlide.content}</p>
            </div>
            {currentSlide.visual && (
              <div className="visual-placeholder">
                <div className="visual-icon">📊</div>
                <p>Visual: {currentSlide.visual}</p>
              </div>
            )}
          </div>
        )
      
      case 'example':
        return (
          <div className="slide-content-example">
            <h2 className="slide-title">{currentSlide.title}</h2>
            <div className="examples-detailed">
              {currentSlide.examples.map((ex, idx) => (
                <div key={idx} className="example-card">
                  <div className="example-number">{idx + 1}</div>
                  <p>{ex}</p>
                </div>
              ))}
            </div>
          </div>
        )
      
      case 'rule':
        return (
          <div className="slide-content-rule">
            <h2 className="slide-title">{currentSlide.title}</h2>
            <div className="rules-list">
              {currentSlide.rules.map((rule, idx) => (
                <div key={idx} className="rule-item">
                  <span className="rule-bullet">✓</span>
                  <p>{rule}</p>
                </div>
              ))}
            </div>
          </div>
        )
      
      case 'definition':
        return (
          <div className="slide-content-definition">
            <h2 className="slide-title">{currentSlide.title}</h2>
            <div className="definition-box">
              <p className="slide-text">{currentSlide.content}</p>
              {currentSlide.notation && (
                <div className="notation-box">
                  <strong>Notation:</strong> {currentSlide.notation}
                </div>
              )}
            </div>
          </div>
        )
      
      default:
        return (
          <div className="slide-content-default">
            <h2 className="slide-title">{currentSlide.title}</h2>
            <p className="slide-text">{currentSlide.content}</p>
          </div>
        )
    }
  }

  return (
    <div className="lesson-mode">
      <div className="lesson-container">
        <div className="lesson-header">
          <h1 className="lesson-main-title">{lessonData.title}</h1>
          <div className="lesson-progress">
            Lesson {currentLessonIndex + 1} of {totalLessons} • Slide {currentSlideIndex + 1} of {totalSlides}
          </div>
        </div>

        <div className="lesson-content">
          <div className="lesson-section-title">
            <span className="lesson-number">Lesson {currentLesson.lessonNumber}</span>
            <h2>{currentLesson.title}</h2>
          </div>

          <div className="carl-quote">
            <div className="carl-avatar">👨‍🔬</div>
            <div className="carl-bubble">
              <p className="carl-text">"{currentLesson.carlQuote}"</p>
              <span className="carl-name">- Carl</span>
            </div>
          </div>

          <div className="slide-container">
            {renderSlideContent()}

            {currentSlide.carlComment && (
              <div className="carl-comment">
                <span className="carl-icon">💭</span>
                <p>{currentSlide.carlComment}</p>
              </div>
            )}
          </div>
        </div>

        <div className="lesson-controls">
          <button 
            className="control-btn back-btn"
            onClick={onBack}
          >
            ← Back to Home
          </button>

          <div className="navigation-controls">
            <button 
              className="nav-btn prev-btn"
              onClick={prevSlide}
              disabled={isFirstSlide}
            >
              ← Previous
            </button>
            
            {isLastSlide ? (
              <button 
                className="nav-btn quiz-btn"
                onClick={() => onStartQuiz(lessonData.quizQuestions)}
              >
                Take the Quiz →
              </button>
            ) : (
              <button 
                className="nav-btn next-btn"
                onClick={nextSlide}
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonMode
