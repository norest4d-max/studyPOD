# studyPOD
Streamlined flashcard app built for fast review and long-term retention.

## 🚀 Quick Access

**Run `python3 quiz_app.py` in your terminal to start the quiz application.**

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

No installation required! Just make sure you have Python 3.6+ installed.

```bash
python3 --version
```

## Usage

### Quick Start

Run the quiz app in interactive mode:

```bash
python3 quiz_app.py
```

The app will guide you through:
1. Selecting a vocabulary file
2. Choosing quiz mode (word→definition or definition→word)
3. Setting the number of questions
4. Taking the quiz with instant feedback

### Command-Line Mode

You can also provide a vocabulary file directly:

```bash
python3 quiz_app.py example_vocabulary.txt
```

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

- Python 3.6 or higher
- No external dependencies required

## License

MIT License
