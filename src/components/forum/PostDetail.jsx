import { useState } from 'react'
import './PostDetail.css'

function PostDetail({ post, onBack, onVote, onComment, currentUser }) {
  const [commentText, setCommentText] = useState('')

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

  const handleSubmitComment = (e) => {
    e.preventDefault()
    if (!commentText.trim()) return

    onComment(post.id, commentText.trim())
    setCommentText('')
  }

  const badge = getCategoryBadge(post.category)

  return (
    <div className="post-detail">
      <div className="post-detail-container">
        <button className="back-btn" onClick={onBack}>
          ← Back to Posts
        </button>

        <div className="detail-card">
          {/* Header */}
          <div className="detail-header">
            <div className="header-meta">
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
          </div>

          {/* Title and Content */}
          <h1 className="detail-title">{post.title}</h1>
          <p className="detail-content">{post.content}</p>

          {/* Vote Section */}
          <div className="detail-votes">
            <button
              className="vote-btn up"
              onClick={() => onVote(post.id, 'up')}
            >
              ⬆ Upvote
            </button>
            <span className={`vote-count ${score > 0 ? 'positive' : score < 0 ? 'negative' : ''}`}>
              {score} {Math.abs(score) === 1 ? 'point' : 'points'}
            </span>
            <button
              className="vote-btn down"
              onClick={() => onVote(post.id, 'down')}
            >
              ⬇ Downvote
            </button>
          </div>

          <div className="divider"></div>

          {/* Comments Section */}
          <div className="comments-section">
            <h3 className="comments-header">
              💬 {post.comments.length} {post.comments.length === 1 ? 'Comment' : 'Comments'}
            </h3>

            {/* Add Comment Form */}
            <form onSubmit={handleSubmitComment} className="comment-form">
              <div className="comment-user">
                <span className="user-avatar">{currentUser.avatar}</span>
                <span className="user-name">{currentUser.username}</span>
              </div>
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment..."
                rows={3}
                maxLength={1000}
                className="comment-input"
              />
              <div className="comment-actions">
                <span className="char-count">{commentText.length}/1000</span>
                <button type="submit" className="submit-comment-btn" disabled={!commentText.trim()}>
                  Post Comment
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="comments-list">
              {post.comments.length === 0 ? (
                <p className="no-comments">No comments yet. Be the first to comment!</p>
              ) : (
                post.comments.map(comment => (
                  <div key={comment.id} className="comment">
                    <div className="comment-header">
                      <span className="comment-author">
                        <span className="author-avatar">{comment.author.avatar}</span>
                        <span className="author-name">{comment.author.username}</span>
                      </span>
                      <span className="comment-time">{getTimeAgo(comment.createdAt)}</span>
                    </div>
                    <p className="comment-content">{comment.content}</p>
                    <div className="comment-footer">
                      <span className="comment-score">
                        {comment.upvotes - comment.downvotes} points
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
