import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>StudyPOD</h3>
            <p>Master math and IT concepts with adaptive learning</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#quiz">Quiz</a></li>
              <li><a href="#lessons">Lessons</a></li>
              <li><a href="#community">Community</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Study Topics</h4>
            <ul className="footer-links">
              <li><a href="#precalc">Pre-Calculus</a></li>
              <li><a href="#prealgebra">Pre-Algebra</a></li>
              <li><a href="#aplus">A+ Certification</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>About</h4>
            <p className="footer-tagline">
              "Listen up, genius. This ain't rocket science... well, actually it kinda is. But I'll make it simple for ya." - Carl
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 StudyPOD. Adaptive learning for the modern student.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
