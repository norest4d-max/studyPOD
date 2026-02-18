#!/usr/bin/env python3
"""
Test script for quiz_app.py
"""

import sys
import os

# Add parent directory to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from quiz_app import QuizApp

def test_load_file():
    """Test loading vocabulary file."""
    print("Test 1: Loading vocabulary file...")
    app = QuizApp()
    result = app.load_vocabulary_file('example_vocabulary.txt')
    assert result == True, "Failed to load vocabulary file"
    assert len(app.word_definitions) > 0, "No words loaded"
    print(f"✓ Loaded {len(app.word_definitions)} words successfully")
    return app

def test_word_to_def_mode(app):
    """Test word to definition quiz mode."""
    print("\nTest 2: Word to Definition mode...")
    app.quiz_mode = 'word_to_def'
    question = app.create_quiz_question()
    
    assert 'question' in question, "Missing question"
    assert 'options' in question, "Missing options"
    assert len(question['options']) == 4, f"Expected 4 options, got {len(question['options'])}"
    assert question['correct_answer'] in question['options'], "Correct answer not in options"
    
    # Verify the question is a word and correct answer is its definition
    assert question['question'] in app.word_definitions, "Question should be a word"
    assert question['correct_answer'] == app.word_definitions[question['question']], "Correct answer should be the definition"
    
    print(f"✓ Generated question: '{question['question']}'")
    print(f"  Options: {len(question['options'])}")
    print(f"  Correct answer at position: {question['correct_position']}")

def test_def_to_word_mode(app):
    """Test definition to word quiz mode."""
    print("\nTest 3: Definition to Word mode...")
    app.quiz_mode = 'def_to_word'
    question = app.create_quiz_question()
    
    assert 'question' in question, "Missing question"
    assert 'options' in question, "Missing options"
    assert len(question['options']) == 4, f"Expected 4 options, got {len(question['options'])}"
    assert question['correct_answer'] in question['options'], "Correct answer not in options"
    
    # Verify the question is a definition and correct answer is its word
    assert question['question'] in app.word_definitions.values(), "Question should be a definition"
    assert question['correct_answer'] == question['word'], "Correct answer should be the word"
    
    print(f"✓ Generated question: '{question['question'][:50]}...'")
    print(f"  Options: {len(question['options'])}")
    print(f"  Correct answer at position: {question['correct_position']}")

def test_multiple_questions(app):
    """Test generating multiple unique questions."""
    print("\nTest 4: Multiple questions...")
    app.quiz_mode = 'word_to_def'
    questions = []
    
    for i in range(5):
        question = app.create_quiz_question()
        questions.append(question)
        
    print(f"✓ Generated {len(questions)} questions successfully")
    
def test_file_format():
    """Test loading file with various formats."""
    print("\nTest 5: File format handling...")
    
    # Create test file with comments and empty lines
    test_content = """# This is a comment
test1:definition1

test2:definition2
# Another comment
test3:definition3
"""
    with open('/tmp/test_vocab.txt', 'w') as f:
        f.write(test_content)
        
    app = QuizApp()
    result = app.load_vocabulary_file('/tmp/test_vocab.txt')
    
    assert result == True, "Failed to load test file"
    assert len(app.word_definitions) == 3, f"Expected 3 words, got {len(app.word_definitions)}"
    assert 'test1' in app.word_definitions, "Missing test1"
    assert app.word_definitions['test1'] == 'definition1', "Wrong definition for test1"
    
    print(f"✓ File format handled correctly (loaded {len(app.word_definitions)} words)")
    
    # Clean up
    os.remove('/tmp/test_vocab.txt')

def main():
    """Run all tests."""
    print("="*60)
    print("Running StudyPOD Tests")
    print("="*60)
    
    try:
        app = test_load_file()
        test_word_to_def_mode(app)
        test_def_to_word_mode(app)
        test_multiple_questions(app)
        test_file_format()
        
        print("\n" + "="*60)
        print("✓ All tests passed!")
        print("="*60)
        return 0
        
    except AssertionError as e:
        print(f"\n✗ Test failed: {e}")
        return 1
    except Exception as e:
        print(f"\n✗ Unexpected error: {e}")
        import traceback
        traceback.print_exc()
        return 1

if __name__ == '__main__':
    sys.exit(main())
