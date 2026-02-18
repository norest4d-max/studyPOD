#!/usr/bin/env python3
"""
Demo script for quiz_app.py
Demonstrates the quiz functionality with simulated user interaction.
"""

import sys
import os
import time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from quiz_app import QuizApp

def demo():
    """Run a demonstration of the quiz app."""
    print("="*60)
    print("StudyPOD - Demo Mode")
    print("="*60)
    
    # Create app and load vocabulary
    app = QuizApp()
    print("\n[Demo] Loading example_vocabulary.txt...")
    app.load_vocabulary_file('example_vocabulary.txt')
    
    # Set quiz mode to word->definition
    print("\n[Demo] Setting quiz mode to: Word → Definition")
    app.quiz_mode = 'word_to_def'
    
    # Generate and display 3 sample questions
    print("\n" + "="*60)
    print("Sample Questions (showing first 3)")
    print("="*60)
    
    for i in range(3):
        question = app.create_quiz_question()
        
        print(f"\nQuestion {i+1}:")
        print(f"Word: {question['word']}")
        print("\nOptions:")
        for j, option in enumerate(question['options'], 1):
            marker = " ← CORRECT" if j == question['correct_position'] else ""
            print(f"{j}. {option}{marker}")
        
    # Now demonstrate the other direction
    print("\n" + "="*60)
    print("Switching to Definition → Word mode")
    print("="*60)
    
    app.quiz_mode = 'def_to_word'
    
    for i in range(2):
        question = app.create_quiz_question()
        
        print(f"\nQuestion {i+1}:")
        print(f"Definition: {question['definition']}")
        print("\nOptions:")
        for j, option in enumerate(question['options'], 1):
            marker = " ← CORRECT" if j == question['correct_position'] else ""
            print(f"{j}. {option}{marker}")
    
    print("\n" + "="*60)
    print("Demo complete!")
    print("\nTo run the interactive quiz, use:")
    print("  python3 quiz_app.py")
    print("\nOr provide a vocabulary file directly:")
    print("  python3 quiz_app.py example_vocabulary.txt")
    print("="*60)

if __name__ == '__main__':
    demo()
