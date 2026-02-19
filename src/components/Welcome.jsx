import { useState } from 'react'
import './Welcome.css'

function Welcome({ onVocabularyLoad }) {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const parseVocabularyText = (text) => {
    const lines = text.split('\n')
    const vocab = {}
    
    lines.forEach((line, index) => {
      line = line.trim()
      if (!line || line.startsWith('#')) return
      
      if (!line.includes(':')) {
        console.warn(`Line ${index + 1} doesn't contain ':' separator, skipping`)
        return
      }
      
      const parts = line.split(':', 2)
      if (parts.length === 2) {
        const word = parts[0].trim()
        const definition = parts[1].trim()
        if (word && definition) {
          vocab[word] = definition
        }
      }
    })
    
    return vocab
  }

  const handleFileUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    setLoading(true)
    setError('')

    try {
      const text = await file.text()
      const vocab = parseVocabularyText(text)
      
      if (Object.keys(vocab).length === 0) {
        setError('No valid word:definition pairs found in file')
        setLoading(false)
        return
      }

      onVocabularyLoad(vocab)
    } catch (err) {
      setError(`Error loading file: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleUseExample = async () => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/example_vocabulary.txt')
      const text = await response.text()
      const vocab = parseVocabularyText(text)
      
      if (Object.keys(vocab).length === 0) {
        setError('No valid word:definition pairs found in example file')
        setLoading(false)
        return
      }

      onVocabularyLoad(vocab)
    } catch (err) {
      setError(`Error loading example file: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="welcome">
      <div className="container">
        <div className="box welcome-box">
          <h1>StudyPOD</h1>
          <p className="muted">Vocabulary Quiz Application</p>
          
          <div className="divider"></div>
          
          <h2>Load Vocabulary File</h2>
          <p className="muted">
            Upload a .txt file with word:definition pairs (one per line)
          </p>
          
          <div className="file-input-wrapper">
            <input
              type="file"
              accept=".txt"
              onChange={handleFileUpload}
              disabled={loading}
              id="file-input"
            />
            <label htmlFor="file-input" className="file-label">
              {loading ? 'Loading...' : 'Choose File'}
            </label>
          </div>

          <div className="or-divider">
            <span>or</span>
          </div>

          <button 
            onClick={handleUseExample}
            disabled={loading}
            className="secondary"
          >
            Use Example Vocabulary
          </button>

          {error && (
            <div className="error-message">
              <span className="error">✗ {error}</span>
            </div>
          )}
        </div>

        <div className="info-box">
          <h3>File Format</h3>
          <p className="muted">Create a .txt file with word-definition pairs:</p>
          <pre className="code-example">
{`algorithm:A step-by-step procedure
variable:A named storage location
function:A reusable block of code`}
          </pre>
          <p className="muted">
            Lines starting with # are comments and will be ignored.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Welcome
