import { useState } from 'react'
import './CreatePost.css'

function CreatePost({ onCreatePost, categories }) {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('vocabulary')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    onCreatePost({
      title: title.trim(),
      content: content.trim(),
      category
    })

    // Reset form
    setTitle('')
    setContent('')
    setCategory('vocabulary')
    setIsOpen(false)
  }

  if (!isOpen) {
    return (
      <button className="create-post-btn" onClick={() => setIsOpen(true)}>
        ✏️ Create Post
      </button>
    )
  }

  return (
    <div className="create-post-card">
      <div className="create-post-header">
        <h3>Create New Post</h3>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="create-post-form">
        <div className="form-group">
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            {categories.filter(c => c.id !== 'all').map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What's your post about?"
            maxLength={200}
            required
          />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share your thoughts, tips, or questions..."
            rows={6}
            maxLength={2000}
            required
          />
          <span className="char-count">{content.length}/2000</span>
        </div>

        <div className="form-actions">
          <button type="button" onClick={() => setIsOpen(false)} className="cancel-btn">
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost
