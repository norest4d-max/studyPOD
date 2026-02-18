#!/usr/bin/env python3
"""
Full interactive demo showing a complete quiz session.
This simulates what a user would experience when running the app.
"""

import sys
import os
import time
import random

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from quiz_app import QuizApp

def simulate_full_session():
    """Simulate a full quiz session with realistic timing."""
    
    print("="*70)
    print(" "*20 + "StudyPOD Demo Session")
    print("="*70)
    print("\nThis demo shows a complete quiz session with simulated user inputs.\n")
    time.sleep(1)
    
    # Create and load app
    app = QuizApp()
    
    print("Step 1: Loading vocabulary file")
    print("-" * 70)
    print("$ python3 quiz_app.py example_vocabulary.txt")
    time.sleep(0.5)
    app.load_vocabulary_file('example_vocabulary.txt')
    time.sleep(1)
    
    # Choose quiz mode
    print("\n\nStep 2: Choosing quiz mode")
    print("-" * 70)
    print("\nChoose quiz mode:")
    print("1. Word -> Definition (given a word, choose the correct definition)")
    print("2. Definition -> Word (given a definition, choose the correct word)")
    print("\nEnter 1 or 2: 1")
    app.quiz_mode = 'word_to_def'
    print("Quiz mode: Word to Definition")
    time.sleep(1.5)
    
    # Start quiz
    num_questions = 3
    print(f"\n\nStep 3: Taking the quiz ({num_questions} questions)")
    print("-" * 70)
    print(f"\n{'='*70}")
    print(f"Starting Quiz: {num_questions} questions")
    print('='*70)
    time.sleep(1)
    
    results = []
    
    # Question 1
    question = app.create_quiz_question()
    print(f"\n\nQuestion 1/{num_questions}")
    print('='*70)
    print(f"\nWord: {question['word']}")
    print("\nChoose the correct definition:")
    print()
    for i, option in enumerate(question['options'], 1):
        print(f"{i}. {option}")
    
    time.sleep(1.5)
    correct_pos = question['correct_position']
    print(f"\nYour answer (1-4): {correct_pos}")
    time.sleep(0.8)
    
    print("\n✓ CORRECT!")
    print(f"You know the word: '{question['word']}'")
    print(f"Time taken: 2.34 seconds")
    results.append({'correct': True, 'time': 2.34})
    
    time.sleep(2)
    
    # Question 2
    question = app.create_quiz_question()
    print(f"\n\nQuestion 2/{num_questions}")
    print('='*70)
    print(f"\nWord: {question['word']}")
    print("\nChoose the correct definition:")
    print()
    for i, option in enumerate(question['options'], 1):
        print(f"{i}. {option}")
    
    time.sleep(1.5)
    # Simulate wrong answer
    wrong_pos = 1 if question['correct_position'] != 1 else 2
    print(f"\nYour answer (1-4): {wrong_pos}")
    time.sleep(0.8)
    
    print("\n✗ INCORRECT")
    print(f"Your answer: {question['options'][wrong_pos-1]}")
    print(f"Correct answer: {question['correct_answer']}")
    print(f"You need to review the word: '{question['word']}'")
    print(f"Time taken: 5.67 seconds")
    results.append({'correct': False, 'time': 5.67})
    
    time.sleep(2)
    
    # Question 3
    question = app.create_quiz_question()
    print(f"\n\nQuestion 3/{num_questions}")
    print('='*70)
    print(f"\nWord: {question['word']}")
    print("\nChoose the correct definition:")
    print()
    for i, option in enumerate(question['options'], 1):
        print(f"{i}. {option}")
    
    time.sleep(1.5)
    correct_pos = question['correct_position']
    print(f"\nYour answer (1-4): {correct_pos}")
    time.sleep(0.8)
    
    print("\n✓ CORRECT!")
    print(f"You know the word: '{question['word']}'")
    print(f"Time taken: 3.12 seconds")
    results.append({'correct': True, 'time': 3.12})
    
    time.sleep(2)
    
    # Show summary
    print(f"\n\n{'='*70}")
    print("QUIZ SUMMARY")
    print('='*70)
    
    correct_count = sum(1 for r in results if r['correct'])
    total_time = sum(r['time'] for r in results)
    avg_time = total_time / len(results)
    percentage = (correct_count / len(results)) * 100
    
    print(f"Correct answers: {correct_count}/{len(results)} ({percentage:.1f}%)")
    print(f"Total time: {total_time:.2f} seconds")
    print(f"Average time per question: {avg_time:.2f} seconds")
    print("\n👍 Great job! Keep practicing!")
    
    print("\n\n" + "="*70)
    print("Key Features Demonstrated:")
    print("="*70)
    print("✓ Loaded vocabulary from .txt file (20 word-definition pairs)")
    print("✓ Multiple-choice format (4 options, 1 correct answer)")
    print("✓ Time tracking for each answer")
    print("✓ Instant feedback on correct/incorrect answers")
    print("✓ Identifies which words you know vs. need to review")
    print("✓ Performance summary with statistics")
    print("\n✓ Also supports Definition → Word mode (quiz in reverse!)")
    print("="*70)

if __name__ == '__main__':
    simulate_full_session()
