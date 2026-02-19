import './Home.css'
import { A_PLUS_CERTIFICATION_DECK, A_PLUS_FILL_BLANK_SETS, A_PLUS_FULL_DECK, cardsToVocabulary, toWordWordTitle } from '../data/prebuiltFlashcards'

function Home({ onStartQuiz }) {
  const totalSets = A_PLUS_FILL_BLANK_SETS.length
  const totalCards = A_PLUS_FULL_DECK.cards.length
  const certificationDeckCards = A_PLUS_CERTIFICATION_DECK.cards.length

  const handleLaunchCertificationDeck = () => {
    onStartQuiz({
      vocabulary: cardsToVocabulary(A_PLUS_CERTIFICATION_DECK.cards),
      deckTitle: `${toWordWordTitle(A_PLUS_CERTIFICATION_DECK.title)} • ${A_PLUS_CERTIFICATION_DECK.title} (${certificationDeckCards} cards)`
    })
  }

  const handleLaunchFullDeck = () => {
    onStartQuiz({
      vocabulary: cardsToVocabulary(A_PLUS_FULL_DECK.cards),
      deckTitle: `${toWordWordTitle(A_PLUS_FULL_DECK.title)} • ${A_PLUS_FULL_DECK.title} (${totalCards} cards)`
    })
  }

  const handleLaunchSet = (setData) => {
    onStartQuiz({
      vocabulary: cardsToVocabulary(setData.cards),
      deckTitle: `${toWordWordTitle(setData.title)} • Set ${setData.id}: ${setData.title} (${setData.cards.length} cards)`
    })
  }

  return (
    <div className="home">
      <div className="container">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              StudyPOD
            </h1>
            <p className="hero-subtitle">
              Focused, clean, fill-in-the-blank flashcard training for IT and A+ prep
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">01</div>
              <h3>Smart Quiz</h3>
              <p>Adaptive multiple choice with performance tracking and review feedback</p>
              <button onClick={onStartQuiz} className="feature-btn">
                Start Quiz
              </button>
            </div>

            <div className="feature-card">
              <div className="feature-icon">02</div>
              <h3>Prebuilt Flashcards</h3>
              <p>{totalSets} curated sets, {totalCards} fill-in-the-blank cards, ready to play</p>
              <button onClick={handleLaunchFullDeck} className="feature-btn">
                Start Full Deck
              </button>
            </div>

            <div className="feature-card">
              <div className="feature-icon">03</div>
              <h3>Memory Game</h3>
              <p>Pattern training module for concentration and recall sessions</p>
              <button className="feature-btn secondary">
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        <div className="prebuilt-section">
          <h2>Prebuilt Flashcards</h2>
          <p className="prebuilt-subtitle">
            CompTIA A+ certification themed fill-in-the-blank decks (Core 1 + Core 2 style). Choose the full 150-card game or launch by set.
          </p>

          <div className="new-deck-callout">
            <div className="new-deck-badge">NEW DECK</div>
            <h3>{A_PLUS_CERTIFICATION_DECK.title}</h3>
            <p>Focused rapid-review pack for high-yield Core 1/Core 2 exam patterns.</p>
            <button onClick={handleLaunchCertificationDeck} className="feature-btn">
              Launch New A+ Deck ({certificationDeckCards})
            </button>
          </div>

          <div className="prebuilt-cta">
            <button onClick={handleLaunchFullDeck} className="feature-btn">
              Play Full 150-Card Deck
            </button>
          </div>

          <div className="set-grid">
            {A_PLUS_FILL_BLANK_SETS.map((setData) => (
              <div className="set-card" key={setData.id}>
                <div className="set-meta">Set {setData.id}</div>
                <div className="set-word-title">{toWordWordTitle(setData.title)}</div>
                <h3>{setData.title}</h3>
                <p>{setData.cards[0].prompt}</p>
                <button onClick={() => handleLaunchSet(setData)} className="feature-btn secondary-action">
                  Play 6 Cards
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="instructions-section">
          <h2>How to Get Started</h2>
          
          <div className="instruction-card">
            <h3>Create Your Vocabulary File</h3>
            <p>Make a simple .txt file with word:definition pairs (one per line)</p>
            <div className="code-example">
              <pre>{`algorithm:A step-by-step procedure for solving problems
variable:A named storage location for data
function:A reusable block of code`}</pre>
            </div>
            <ul className="tips-list">
              <li>Use a colon (:) to separate words from definitions</li>
              <li>One word-definition pair per line</li>
              <li>Lines starting with # are comments (ignored)</li>
              <li>Save as .txt file (e.g., vocabulary.txt)</li>
            </ul>
          </div>

          <div className="instruction-card">
            <h3>Import & Study</h3>
            <ol className="steps-list">
              <li>Click the Quiz tab above</li>
              <li>Upload your .txt file or use our example</li>
              <li>Choose your quiz mode (word→definition or definition→word)</li>
              <li>Start learning!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
