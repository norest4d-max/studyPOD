# StudyPOD Usage Guide

## Quick Start

### 1. Interactive Mode (Recommended for beginners)
```bash
python3 quiz_app.py
```
The app will guide you through:
- Selecting a vocabulary file
- Choosing quiz direction (word→definition or definition→word)
- Setting number of questions
- Taking the quiz

### 2. Command-Line Mode
```bash
python3 quiz_app.py your_vocabulary_file.txt
```
Then follow the prompts to choose quiz mode and number of questions.

## Creating Vocabulary Files

### File Format
Create a plain text file (`.txt`) with one word-definition pair per line:
```
word1:definition of word1
word2:definition of word2
word3:definition of word3
```

### Example File Content
```
# Programming Vocabulary
algorithm:A step-by-step procedure for solving a problem
variable:A named storage location that can hold values
function:A reusable block of code that performs a task

# Data Types
string:A sequence of characters
integer:A whole number without decimals
boolean:A value that is either true or false
```

### Format Rules
- Use colon (`:`) to separate word and definition
- One pair per line
- Lines starting with `#` are comments (ignored)
- Empty lines are ignored
- Words and definitions are automatically trimmed of whitespace

## Quiz Modes

### Mode 1: Word → Definition
- **What you see**: A word from your vocabulary
- **What you do**: Choose the correct definition from 4 options
- **Best for**: Learning definitions

### Mode 2: Definition → Word
- **What you see**: A definition from your vocabulary
- **What you do**: Choose the correct word from 4 options
- **Best for**: Recall practice and testing word recognition

## Features

### Time Tracking
- Each question tracks how long you take to answer
- View your average time per question in the summary
- Use timing to track your improvement over sessions

### Instant Feedback
After each answer, you'll see:
- ✓ CORRECT or ✗ INCORRECT
- Which word/definition you got right or need to review
- Time taken to answer
- Correct answer (if you were wrong)

### Quiz Summary
At the end of each quiz:
- Total score (correct/total)
- Percentage score
- Total time taken
- Average time per question
- Encouragement message based on performance

## Tips for Effective Learning

1. **Start Small**: Begin with 5-10 questions to build momentum
2. **Practice Both Directions**: Test yourself both ways for deeper understanding
3. **Regular Sessions**: Short daily practice is better than long cramming
4. **Review Mistakes**: Pay attention to words you get wrong
5. **Track Progress**: Try to improve your speed and accuracy over time
6. **Create Themed Files**: Organize vocabulary by topic for focused study

## Examples

### Example 1: Study 5 Programming Terms
```bash
python3 quiz_app.py example_vocabulary.txt
# Choose mode: 1 (Word → Definition)
# Questions: 5
```

### Example 2: Full Vocabulary Review
```bash
python3 quiz_app.py my_vocab.txt
# Choose mode: 2 (Definition → Word)
# Questions: [press Enter for all]
```

### Example 3: Multiple Practice Rounds
```bash
python3 quiz_app.py
# Enter file: example_vocabulary.txt
# Mode: 1, Questions: 10
# After quiz: y (to continue)
# Mode: 2, Questions: 10
# After quiz: n (to exit)
```

## Troubleshooting

### "File not found" error
- Check that the file path is correct
- Use absolute paths if needed: `/full/path/to/file.txt`
- Make sure the file exists and has read permissions

### No words loaded
- Check file format (must use `:` separator)
- Make sure you have at least one valid word:definition pair
- Remove any special characters that might cause issues

### Not enough options for multiple choice
- You need at least 4 word-definition pairs in your file
- Add more vocabulary to get full 4-option questions

## Advanced Usage

### Creating Custom Vocabulary Sets

**Language Learning:**
```
hello:A greeting used when meeting someone
goodbye:A farewell expression
thank you:An expression of gratitude
```

**Science Terms:**
```
photosynthesis:Process by which plants convert light into energy
mitosis:Cell division resulting in two identical daughter cells
atom:The smallest unit of a chemical element
```

**Historical Events:**
```
Renaissance:Period of cultural rebirth in Europe (14th-17th century)
Industrial Revolution:Period of major industrialization in the 18th-19th century
```

### Keyboard Shortcuts
- `Ctrl+C`: Exit quiz at any time
- `Enter`: Continue to next question (after seeing feedback)

## Demo Files

Try these demo scripts to see the app in action:

### Simple Demo
```bash
python3 demo.py
```
Shows sample questions without interaction.

### Full Demo
```bash
python3 full_demo.py
```
Simulates a complete quiz session with realistic timing.

### Test Suite
```bash
python3 test_quiz_app.py
```
Runs automated tests to verify the app is working correctly.
