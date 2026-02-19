# Firebase Integration Guide for StudyPOD

## Overview

This guide will help you add Firebase to StudyPOD for the Community/Blog features.

## Why Firebase?

Firebase offers a generous **free tier** perfect for learning apps:
- **Authentication**: 10K phone auth/month (unlimited email/password, Google, Facebook)
- **Firestore**: 1GB storage, 50K reads/day, 20K writes/day
- **Hosting**: 10GB storage, 360MB/day transfer
- **Storage**: 5GB storage, 1GB/day transfer

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Enter project name: `studypod-community`
4. Choose whether to enable Google Analytics (optional)
5. Click "Create Project"

## Step 2: Register Your Web App

1. In Firebase Console, click the web icon `</>`
2. Enter app nickname: `StudyPOD Web`
3. Check "Set up Firebase Hosting" (optional)
4. Click "Register app"
5. Copy the configuration object

## Step 3: Install Firebase SDK

```bash
npm install firebase
```

## Step 4: Create Firebase Configuration

Create `src/firebase/config.js`:

```javascript
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize services
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
```

## Step 5: Set Up Environment Variables

Create `.env` file in project root:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**Important:** Add `.env` to `.gitignore`!

```bash
echo ".env" >> .gitignore
```

## Step 6: Enable Firebase Services

### Enable Authentication

1. In Firebase Console, go to "Authentication"
2. Click "Get Started"
3. Enable sign-in methods:
   - **Email/Password** - Click, toggle enable, save
   - **Google** - Click, toggle enable, add support email, save

### Set Up Firestore Database

1. Go to "Firestore Database"
2. Click "Create Database"
3. Choose "Start in production mode" (we'll set rules next)
4. Select location (choose closest to your users)
5. Click "Enable"

### Configure Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Posts collection
    match /posts/{postId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
                              request.auth.uid == resource.data.authorId;
      
      // Comments subcollection
      match /comments/{commentId} {
        allow read: if true;
        allow create: if request.auth != null;
        allow update, delete: if request.auth != null && 
                                request.auth.uid == resource.data.authorId;
      }
    }
    
    // Vocabulary sets collection
    match /vocabularySets/{setId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
                              request.auth.uid == resource.data.authorId;
    }
  }
}
```

### Set Up Firebase Storage

1. Go to "Storage"
2. Click "Get Started"
3. Use default security rules (we'll update them)
4. Choose location, click "Done"

### Configure Storage Security Rules

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Profile pictures
    match /profiles/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Vocabulary files
    match /vocabulary/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Step 7: Create Authentication Components

### Auth Context

Create `src/contexts/AuthContext.jsx`:

```javascript
import { createContext, useContext, useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { auth } from '../firebase/config'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  function loginWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logout,
    loginWithGoogle
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
```

### Login Component

Create `src/components/auth/Login.jsx`:

```javascript
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import './Auth.css'

function Login({ onClose, onSwitchToSignup }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, loginWithGoogle } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await login(email, password)
      onClose()
    } catch (err) {
      setError('Failed to log in: ' + err.message)
    }
    setLoading(false)
  }

  async function handleGoogleLogin() {
    try {
      setError('')
      setLoading(true)
      await loginWithGoogle()
      onClose()
    } catch (err) {
      setError('Failed to log in with Google: ' + err.message)
    }
    setLoading(false)
  }

  return (
    <div className="auth-modal">
      <div className="auth-card">
        <h2>Log In to StudyPOD</h2>
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" disabled={loading} className="auth-btn">
            Log In
          </button>
        </form>

        <div className="divider">or</div>

        <button onClick={handleGoogleLogin} className="google-btn" disabled={loading}>
          <img src="/google-icon.svg" alt="" />
          Continue with Google
        </button>

        <p className="switch-text">
          Don't have an account?{' '}
          <button onClick={onSwitchToSignup} className="link-btn">
            Sign up
          </button>
        </p>

        <button onClick={onClose} className="close-btn">×</button>
      </div>
    </div>
  )
}

export default Login
```

## Step 8: Update Blog Component

Replace `src/components/Blog.jsx` with full implementation:

```javascript
import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { db } from '../firebase/config'
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore'
import Login from './auth/Login'
import Signup from './auth/Signup'
import './Blog.css'

function Blog() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const { currentUser, logout } = useAuth()

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setPosts(postsData)
    })

    return unsubscribe
  }, [])

  async function handlePostSubmit(e) {
    e.preventDefault()
    if (!newPost.trim()) return

    try {
      await addDoc(collection(db, 'posts'), {
        content: newPost,
        authorId: currentUser.uid,
        authorEmail: currentUser.email,
        createdAt: serverTimestamp()
      })
      setNewPost('')
    } catch (err) {
      console.error('Error creating post:', err)
    }
  }

  return (
    <div className="blog">
      {/* Blog UI implementation */}
    </div>
  )
}

export default Blog
```

## Step 9: Wrap App with AuthProvider

Update `src/main.jsx`:

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
```

## Step 10: Deploy to Netlify

Update `netlify.toml` to include env vars:

```toml
[build.environment]
  NODE_VERSION = "18"
```

Add environment variables in Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add each `VITE_FIREBASE_*` variable
3. Redeploy

## Testing Checklist

- [ ] User can sign up with email/password
- [ ] User can log in with email/password
- [ ] User can log in with Google
- [ ] User can create posts
- [ ] Posts appear in real-time
- [ ] User can see other users' posts
- [ ] User can log out

## Free Tier Limits

Monitor your usage in Firebase Console:
- **Authentication**: Check "Authentication" → "Usage"
- **Firestore**: Check "Firestore" → "Usage"
- **Storage**: Check "Storage" → "Usage"

## Cost Estimate (Free Tier)

For a small community (< 100 daily active users):
- **Cost**: $0/month
- All features stay within free tier limits

## Security Best Practices

1. ✅ Use environment variables for config
2. ✅ Never commit `.env` to Git
3. ✅ Set up proper Firestore security rules
4. ✅ Validate data on both client and server
5. ✅ Rate limit writes if needed
6. ✅ Monitor usage regularly

## Need Help?

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase YouTube Channel](https://www.youtube.com/c/firebase)
- [Firebase Community](https://firebase.google.com/community)

---

**Ready to build an amazing community! 🚀**
