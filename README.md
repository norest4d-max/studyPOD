# studyPOD
Streamlined flashcard app built for fast review and long-term retention.

## 🚀 Quick Start - Run Locally

**New to this?** Check out [QUICK_START.md](QUICK_START.md) for detailed beginner-friendly instructions!

**Quick version:**
```bash
npm install    # First time only
npm run dev    # Start the app
```

Then open `http://localhost:3000` in your browser!

## 🌐 Online Version

The app is deployed on Netlify! Access it without installing anything.

## ✨ New Features

### 🏠 Home Page
- Welcome screen with instructions
- Feature previews
- Complete guide for creating vocabulary files

### 📚 Smart Quiz
- **Adaptive Learning** - Focuses on words you find challenging
- Tracks your performance
- Randomized question order
- Weighted selection favors difficult words

### 🎮 Memory Pattern Game
- Simon Says style game
- 9 blue-shaded squares
- Progressive difficulty
- High score tracking

### 💬 Community Hub (Coming Soon)
- Firebase-powered
- User authentication
- Share progress and vocabulary sets
- Reddit-style discussions

## 📖 Documentation

### 🔧 Fix Current Cloudflare Error
- **[FIX_CLOUDFLARE_BRANCH_ERROR.md](FIX_CLOUDFLARE_BRANCH_ERROR.md)** - ⚠️ **START HERE** if getting "package.json not found" error
- **[CLOUDFLARE_BRANCH_FIX_GUIDE.md](CLOUDFLARE_BRANCH_FIX_GUIDE.md)** - Step-by-step branch configuration fix

### Deployment
- **[DEPLOYMENT_SETTINGS.md](DEPLOYMENT_SETTINGS.md)** - ⭐ Quick reference: Copy/paste deployment settings
- **[BUILD_VERIFICATION.md](BUILD_VERIFICATION.md)** - Verified build configuration details
- **[CLOUDFLARE_PAGES_SIMPLE.md](CLOUDFLARE_PAGES_SIMPLE.md)** - Cloudflare Pages deployment guide
- **[NETLIFY_DEPLOY.md](NETLIFY_DEPLOY.md)** - Netlify deployment guide

### Features & Setup
- **[FEATURES_GUIDE.md](FEATURES_GUIDE.md)** - Complete feature documentation with screenshots
- **[FIREBASE_SETUP.md](FIREBASE_SETUP.md)** - Step-by-step Firebase integration guide
- **[QUICK_START.md](QUICK_START.md)** - Local development guide

## Technology Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Vanilla CSS** - Apple-inspired minimal design

## Design Philosophy

StudyPOD features an **Apple-inspired minimal design** with a clean black, white, and grey aesthetic. The interface emphasizes clarity and focus through:
- Premium typography and spacing
- Minimal box drawing characters for structure
- Muted, understated feedback
- Distraction-free learning experience

## Features

- **Load Custom Vocabulary**: Import word-definition pairs from .txt files
- **Multiple-Choice Quizzes**: Test your knowledge with 4-option questions (1 correct answer)
- **Bi-Directional Learning**: Quiz yourself on words→definitions OR definitions→words
- **Time Tracking**: Monitor how long you take to answer each question
- **Instant Feedback**: Get immediate feedback on whether you know the word or definition
- **Performance Summary**: Review your score and time statistics after each quiz

## Installation

### Prerequisites

- Node.js 18+ and npm

### Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Usage

### Development Mode

Run the app in development mode with hot reload:

```bash
npm run dev
```

The app will open automatically in your browser at `http://localhost:3000`

### Production Build

Build the app for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## How to Use

1. **Load Vocabulary**: Upload a .txt file or use the example vocabulary
2. **Choose Mode**: Select Word→Definition or Definition→Word
3. **Set Questions**: Choose how many questions to answer
4. **Take Quiz**: Answer multiple-choice questions with instant feedback
5. **Review Results**: See your score, time, and review missed items

### Creating Your Own Vocabulary Files

Create a `.txt` file with word-definition pairs in the following format:

```
word1:definition of word1
word2:definition of word2
word3:definition of word3
```

**Format Rules:**
- One word-definition pair per line
- Use a colon (`:`) to separate the word from its definition
- Lines starting with `#` are treated as comments and ignored
- Empty lines are ignored

**Example:**
```
algorithm:A step-by-step procedure for solving a problem
variable:A named storage location that can hold values
function:A reusable block of code that performs a task
```

See `example_vocabulary.txt` for a complete example.

## Quiz Modes

### Word → Definition Mode
- You are shown a **word**
- You must select the correct **definition** from 4 choices

### Definition → Word Mode
- You are shown a **definition**
- You must select the correct **word** from 4 choices

## Example Session

```
┌──────────────────────────────────────────────────────────┐
│   StudyPOD                                              │
│ Vocabulary Quiz Application                             │
└──────────────────────────────────────────────────────────┘

Enter vocabulary file path (.txt): example_vocabulary.txt
✓ Loaded 20 word-definition pairs

Choose quiz mode
  1. Word → Definition  (given a word, choose the correct definition)
  2. Definition → Word  (given a definition, choose the correct word)

Enter 1 or 2: 1
Quiz mode: Word → Definition

How many questions? (1-20, or press Enter for all): 5

┌──────────────────────────────────────────────────────────┐
│ Starting Quiz: 5 questions                               │
└──────────────────────────────────────────────────────────┘

────────────────────────────────────────────────────────────
  Question 1 of 5  
────────────────────────────────────────────────────────────

Word: algorithm

Choose the correct definition:

1. A whole number without a decimal point
2. A step-by-step procedure for solving a problem or completing a task
3. A function that belongs to a class or object
4. An error that occurs during program execution

Your answer (1-4): 2

✓ CORRECT
You know the word: 'algorithm'
Time: 3.45s
```

## Tips for Effective Learning

1. **Start Small**: Begin with 5-10 questions to build confidence
2. **Practice Both Modes**: Test yourself in both directions for deeper understanding
3. **Track Your Time**: Try to improve your answer speed over time
4. **Review Mistakes**: Pay attention to the feedback on incorrect answers
5. **Regular Practice**: Short, frequent sessions are more effective than long cramming

## Requirements

- Node.js 18+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Deployment

### ✅ Verified Build Configuration

**Framework**: React (Vite)  
**Build command**: `npm run build`  
**Output directory**: `dist`

📋 **[DEPLOYMENT_SETTINGS.md](DEPLOYMENT_SETTINGS.md)** - Quick reference card with copy/paste settings  
📖 **[BUILD_VERIFICATION.md](BUILD_VERIFICATION.md)** - Complete build configuration verification

### Cloudflare Pages (Recommended)

See **[CLOUDFLARE_PAGES_SIMPLE.md](CLOUDFLARE_PAGES_SIMPLE.md)** for the easiest deployment method!

**Quick version:**
1. Connect your GitHub repo to Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `dist`
4. Deploy! 🚀

### Netlify

This app works great on Netlify too. See [NETLIFY_DEPLOY.md](NETLIFY_DEPLOY.md) for details.

### Any Static Host

1. Build the project: `npm run build`
2. Deploy the `dist` folder to any static hosting
3. The app will work immediately - no server configuration needed!

## License

MIT License
