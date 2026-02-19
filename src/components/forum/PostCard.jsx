import './PostCard.css'

function PostCard({ post, onVote, onViewPost }) {
  const score = post.upvotes - post.downvotes
  
  const getTimeAgo = (timestamp) => {
    const seconds = Math.floor((Date.now() - timestamp) / 1000)
    
    if (seconds < 60) return 'just now'
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
    if (seconds < 2592000) return `${Math.floor(seconds / 86400)}d ago`
    return `${Math.floor(seconds / 2592000)}mo ago`
  }

  const getCategoryBadge = (category) => {
    const badges = {
      'all': { icon: '🌐', name: 'General' },
      'vocabulary': { icon: '📚', name: 'Vocabulary' },
      'study-methods': { icon: '🎯', name: 'Study Methods' },
      'games': { icon: '🎮', name: 'Games' },
      'achievements': { icon: '🏆', name: 'Achievements' },
      'questions': { icon: '❓', name: 'Q&A' }
    }
    return badges[category] || badges['all']
  }

  const badge = getCategoryBadge(post.category)

  return (
    <div className="post-card" onClick={() => onViewPost(post)}>
      {/* Vote Section */}
      <div className="vote-section">
        <button
          className="vote-btn up"
          onClick={(e) => {
            e.stopPropagation()
            onVote(post.id, 'up')
          }}
        >
          ⬆
        </button>
        <span className={`vote-count ${score > 0 ? 'positive' : score < 0 ? 'negative' : ''}`}>
          {score}
        </span>
        <button
          className="vote-btn down"
          onClick={(e) => {
            e.stopPropagation()
            onVote(post.id, 'down')
          }}
        >
          ⬇
        </button>
      </div>

      {/* Content Section */}
      <div className="post-content">
        <div className="post-meta">
          <span className="category-badge">
            <span className="badge-icon">{badge.icon}</span>
            {badge.name}
          </span>
          <span className="post-author">
            <span className="author-avatar">{post.author.avatar}</span>
            <span className="author-name">{post.author.username}</span>
          </span>
          <span className="post-time">{getTimeAgo(post.createdAt)}</span>
        </div>

        <h3 className="post-title">{post.title}</h3>
        
        <p className="post-preview">
          {post.content.substring(0, 200)}
          {post.content.length > 200 && '...'}
        </p>

        <div className="post-footer">
          <button className="comment-btn">
            💬 {post.commentCount} {post.commentCount === 1 ? 'comment' : 'comments'}
          </button>
          <button className="share-btn">
            🔗 Share
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostCard
