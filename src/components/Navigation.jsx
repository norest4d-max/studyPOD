import './Navigation.css'

function Navigation({ currentTab, onTabChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'quiz', label: 'Quiz', icon: '📚' },
    { id: 'memory', label: 'Memory Game', icon: '🎮' },
    { id: 'blog', label: 'Community', icon: '💬' }
  ]

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <div className="mascot">🔵</div>
          <h1 className="brand-name">StudyPOD</h1>
        </div>
        <ul className="nav-tabs">
          {tabs.map(tab => (
            <li key={tab.id}>
              <button
                className={`nav-tab ${currentTab === tab.id ? 'active' : ''}`}
                onClick={() => onTabChange(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-label">{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
