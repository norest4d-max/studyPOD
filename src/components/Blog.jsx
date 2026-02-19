import './Blog.css'

function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-header">
          <h1>Community Hub 💬</h1>
          <p className="blog-description">
            Connect with fellow learners, share your progress, and get tips!
          </p>
        </div>

        <div className="coming-soon-card">
          <div className="icon">🚧</div>
          <h2>Coming Soon!</h2>
          <p>
            We're building an amazing community space where you can:
          </p>
          <ul className="features-list">
            <li>Share your learning progress</li>
            <li>Discuss study strategies</li>
            <li>Create and share vocabulary sets</li>
            <li>Challenge friends to quiz battles</li>
            <li>Join study groups</li>
          </ul>

          <div className="firebase-info">
            <h3>🔥 Powered by Firebase (Free Tier)</h3>
            <p>
              This feature will use Firebase for:
            </p>
            <ul>
              <li><strong>Authentication:</strong> Secure user accounts</li>
              <li><strong>Firestore:</strong> Real-time database for posts</li>
              <li><strong>Storage:</strong> Profile pictures and shared files</li>
            </ul>
            <p className="note">
              Firebase offers generous free tier limits perfect for community features!
            </p>
          </div>

          <div className="setup-guide">
            <h3>📚 Setup Guide</h3>
            <p>To add this feature, we'll need to:</p>
            <ol>
              <li>Create a Firebase project (free at firebase.google.com)</li>
              <li>Enable Authentication (Email/Password, Google Sign-in)</li>
              <li>Set up Firestore Database</li>
              <li>Install Firebase SDK: <code>npm install firebase</code></li>
              <li>Configure environment variables</li>
            </ol>
            <p className="help-text">
              Want to implement this? Let me know and I'll add the complete Firebase integration!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
