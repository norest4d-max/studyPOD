import { useState, useEffect } from 'react'
import './Forum.css'
import PostCard from './forum/PostCard'
import CreatePost from './forum/CreatePost'
import PostDetail from './forum/PostDetail'

// Mock current user - in production, this would come from auth
const CURRENT_USER = {
  id: 'user_' + Math.random().toString(36).substr(2, 9),
  username: 'StudyPOD_User',
  avatar: '🦦'
}

function Forum() {
  const [posts, setPosts] = useState([])
  const [view, setView] = useState('list') // 'list' or 'detail'
  const [selectedPost, setSelectedPost] = useState(null)
  const [sortBy, setSortBy] = useState('hot') // 'hot', 'new', 'top'
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All Posts', icon: '🌐' },
    { id: 'vocabulary', name: 'Vocabulary Tips', icon: '📚' },
    { id: 'study-methods', name: 'Study Methods', icon: '🎯' },
    { id: 'games', name: 'Games & Challenges', icon: '🎮' },
    { id: 'achievements', name: 'Achievements', icon: '🏆' },
    { id: 'questions', name: 'Q&A', icon: '❓' }
  ]

  // Load posts from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('forumPosts')
    if (stored) {
      setPosts(JSON.parse(stored))
    } else {
      // Add some sample posts for first-time users
      const samplePosts = [
        {
          id: 'post_1',
          title: 'Welcome to the StudyPOD Community! 🦦💙',
          content: 'Share your learning journey, tips, and connect with fellow learners. Feel free to ask questions, share vocabulary sets, or discuss study strategies!',
          author: { id: 'admin', username: 'StudyPOD_Team', avatar: '🦦' },
          category: 'all',
          upvotes: 15,
          downvotes: 0,
          commentCount: 3,
          createdAt: Date.now() - 86400000,
          comments: [
            {
              id: 'comment_1',
              content: 'Thanks for creating this awesome platform! 🎉',
              author: { id: 'user_1', username: 'EagerLearner', avatar: '😊' },
              upvotes: 5,
              downvotes: 0,
              createdAt: Date.now() - 43200000
            }
          ]
        },
        {
          id: 'post_2',
          title: 'My favorite method for memorizing vocabulary',
          content: 'I use the memory palace technique combined with the adaptive quiz. After identifying my weak words, I create a mental journey through my house where each room represents a difficult word. Works amazingly well!',
          author: { id: 'user_2', username: 'MemoryMaster', avatar: '🧠' },
          category: 'study-methods',
          upvotes: 23,
          downvotes: 1,
          commentCount: 7,
          createdAt: Date.now() - 172800000,
          comments: []
        }
      ]
      setPosts(samplePosts)
      localStorage.setItem('forumPosts', JSON.stringify(samplePosts))
    }
  }, [])

  // Save posts to localStorage whenever they change
  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem('forumPosts', JSON.stringify(posts))
    }
  }, [posts])

  const handleCreatePost = (newPost) => {
    const post = {
      id: 'post_' + Date.now(),
      ...newPost,
      author: CURRENT_USER,
      upvotes: 0,
      downvotes: 0,
      commentCount: 0,
      createdAt: Date.now(),
      comments: []
    }
    setPosts([post, ...posts])
  }

  const handleVote = (postId, voteType) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        if (voteType === 'up') {
          return { ...post, upvotes: post.upvotes + 1 }
        } else {
          return { ...post, downvotes: post.downvotes + 1 }
        }
      }
      return post
    }))
  }

  const handleComment = (postId, commentContent) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newComment = {
          id: 'comment_' + Date.now(),
          content: commentContent,
          author: CURRENT_USER,
          upvotes: 0,
          downvotes: 0,
          createdAt: Date.now()
        }
        return {
          ...post,
          comments: [...post.comments, newComment],
          commentCount: post.commentCount + 1
        }
      }
      return post
    }))
  }

  const handleViewPost = (post) => {
    setSelectedPost(post)
    setView('detail')
  }

  const handleBackToList = () => {
    setView('list')
    setSelectedPost(null)
  }

  // Sorting logic
  const getSortedPosts = () => {
    let filtered = posts

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort
    return [...filtered].sort((a, b) => {
      if (sortBy === 'hot') {
        // Hot = upvotes - downvotes, with recency factor
        const scoreA = (a.upvotes - a.downvotes) / Math.max(1, (Date.now() - a.createdAt) / 3600000)
        const scoreB = (b.upvotes - b.downvotes) / Math.max(1, (Date.now() - b.createdAt) / 3600000)
        return scoreB - scoreA
      } else if (sortBy === 'new') {
        return b.createdAt - a.createdAt
      } else if (sortBy === 'top') {
        return (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes)
      }
      return 0
    })
  }

  if (view === 'detail' && selectedPost) {
    return (
      <PostDetail
        post={posts.find(p => p.id === selectedPost.id) || selectedPost}
        onBack={handleBackToList}
        onVote={handleVote}
        onComment={handleComment}
        currentUser={CURRENT_USER}
      />
    )
  }

  return (
    <div className="forum">
      <div className="forum-container">
        {/* Header */}
        <div className="forum-header">
          <h1>Community Forum 💬</h1>
          <p className="forum-subtitle">Share, learn, and connect with fellow students</p>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="forum-content">
          {/* Sidebar */}
          <aside className="forum-sidebar">
            <CreatePost onCreatePost={handleCreatePost} categories={categories} />
            
            <div className="categories-card">
              <h3>Categories</h3>
              <div className="categories-list">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    <span className="cat-icon">{cat.icon}</span>
                    <span className="cat-name">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h3>📊 Forum Stats</h3>
              <div className="stats">
                <div className="stat">
                  <span className="stat-value">{posts.length}</span>
                  <span className="stat-label">Posts</span>
                </div>
                <div className="stat">
                  <span className="stat-value">
                    {posts.reduce((sum, p) => sum + p.commentCount, 0)}
                  </span>
                  <span className="stat-label">Comments</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="forum-main">
            {/* Sort Options */}
            <div className="sort-bar">
              <button
                className={`sort-btn ${sortBy === 'hot' ? 'active' : ''}`}
                onClick={() => setSortBy('hot')}
              >
                🔥 Hot
              </button>
              <button
                className={`sort-btn ${sortBy === 'new' ? 'active' : ''}`}
                onClick={() => setSortBy('new')}
              >
                🆕 New
              </button>
              <button
                className={`sort-btn ${sortBy === 'top' ? 'active' : ''}`}
                onClick={() => setSortBy('top')}
              >
                ⬆️ Top
              </button>
            </div>

            {/* Posts List */}
            <div className="posts-list">
              {getSortedPosts().length === 0 ? (
                <div className="no-posts">
                  <p>No posts found. Be the first to post!</p>
                </div>
              ) : (
                getSortedPosts().map(post => (
                  <PostCard
                    key={post.id}
                    post={post}
                    onVote={handleVote}
                    onViewPost={handleViewPost}
                  />
                ))
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Forum
