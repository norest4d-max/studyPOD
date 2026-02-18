#!/usr/bin/env python3
"""
StudyPOD - Quiz Application for Word-Definition Learning
A flashcard quiz app that tests vocabulary with multiple-choice questions.
"""

import random
import time
import sys
from pathlib import Path


class QuizApp:
    """Main quiz application class."""
    
    def __init__(self):
        self.word_definitions = {}
        self.quiz_mode = None  # 'word_to_def' or 'def_to_word'
        self.current_file = None
        
    def load_vocabulary_file(self, filepath):
        """
        Load word:definition pairs from a text file.
        Expected format: word:definition (one per line)
        """
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                
            self.word_definitions = {}
            for line_num, line in enumerate(lines, 1):
                line = line.strip()
                if not line or line.startswith('#'):  # Skip empty lines and comments
                    continue
                    
                if ':' not in line:
                    print(f"Warning: Line {line_num} doesn't contain ':' separator, skipping")
                    continue
                    
                parts = line.split(':', 1)
                if len(parts) == 2:
                    word = parts[0].strip()
                    definition = parts[1].strip()
                    if word and definition:
                        self.word_definitions[word] = definition
                        
            if not self.word_definitions:
                print("Error: No valid word:definition pairs found in file")
                return False
                
            self.current_file = filepath
            print(f"Successfully loaded {len(self.word_definitions)} word-definition pairs")
            return True
            
        except FileNotFoundError:
            print(f"Error: File '{filepath}' not found")
            return False
        except Exception as e:
            print(f"Error loading file: {e}")
            return False
            
    def choose_quiz_mode(self):
        """Let user choose quiz direction."""
        print("\nChoose quiz mode:")
        print("1. Word -> Definition (given a word, choose the correct definition)")
        print("2. Definition -> Word (given a definition, choose the correct word)")
        
        while True:
            choice = input("\nEnter 1 or 2: ").strip()
            if choice == '1':
                self.quiz_mode = 'word_to_def'
                print("Quiz mode: Word to Definition")
                return True
            elif choice == '2':
                self.quiz_mode = 'def_to_word'
                print("Quiz mode: Definition to Word")
                return True
            else:
                print("Invalid choice. Please enter 1 or 2.")
                
    def generate_wrong_answers(self, correct_answer, all_options):
        """Generate 3 wrong answers for multiple choice."""
        options = [opt for opt in all_options if opt != correct_answer]
        
        # Handle edge case: if we have fewer than 3 other options
        if len(options) == 0:
            # This shouldn't happen in normal use, but handle it gracefully
            return [correct_answer, correct_answer, correct_answer]
        
        if len(options) < 3:
            # If we don't have enough options, duplicate some
            while len(options) < 3:
                options.extend(options[:3-len(options)])
                
        return random.sample(options, min(3, len(options)))
        
    def create_quiz_question(self):
        """Create a single multiple-choice question."""
        # Pick a random word-definition pair
        word = random.choice(list(self.word_definitions.keys()))
        correct_definition = self.word_definitions[word]
        
        if self.quiz_mode == 'word_to_def':
            question = word
            correct_answer = correct_definition
            all_options = list(self.word_definitions.values())
        else:  # def_to_word
            question = correct_definition
            correct_answer = word
            all_options = list(self.word_definitions.keys())
            
        # Generate wrong answers
        wrong_answers = self.generate_wrong_answers(correct_answer, all_options)
        
        # Create answer options (mix correct and wrong)
        options = wrong_answers + [correct_answer]
        random.shuffle(options)
        
        # Find the position of correct answer
        correct_position = options.index(correct_answer) + 1
        
        return {
            'question': question,
            'options': options,
            'correct_answer': correct_answer,
            'correct_position': correct_position,
            'word': word,
            'definition': correct_definition
        }
        
    def display_question(self, question_data, question_num, total_questions):
        """Display a quiz question with options."""
        print(f"\n{'='*60}")
        print(f"Question {question_num}/{total_questions}")
        print('='*60)
        
        if self.quiz_mode == 'word_to_def':
            print(f"\nWord: {question_data['question']}")
            print("\nChoose the correct definition:")
        else:
            print(f"\nDefinition: {question_data['question']}")
            print("\nChoose the correct word:")
            
        print()
        for i, option in enumerate(question_data['options'], 1):
            print(f"{i}. {option}")
            
    def ask_question(self, question_data, question_num, total_questions):
        """Ask a single question and get user's answer."""
        self.display_question(question_data, question_num, total_questions)
        
        start_time = time.time()
        
        while True:
            try:
                answer = input("\nYour answer (1-4): ").strip()
                if answer in ['1', '2', '3', '4']:
                    answer_num = int(answer)
                    break
                else:
                    print("Please enter a number between 1 and 4")
            except KeyboardInterrupt:
                print("\n\nQuiz interrupted by user.")
                sys.exit(0)
                
        end_time = time.time()
        time_taken = end_time - start_time
        
        is_correct = (answer_num == question_data['correct_position'])
        
        return {
            'is_correct': is_correct,
            'time_taken': time_taken,
            'user_answer': question_data['options'][answer_num - 1],
            'correct_answer': question_data['correct_answer']
        }
        
    def provide_feedback(self, result, question_data):
        """Provide feedback on the answer."""
        print()
        if result['is_correct']:
            print("✓ CORRECT!")
            knowledge_type = "word" if self.quiz_mode == 'word_to_def' else "definition"
            print(f"You know the {knowledge_type}: '{question_data['word']}'")
        else:
            print("✗ INCORRECT")
            print(f"Your answer: {result['user_answer']}")
            print(f"Correct answer: {result['correct_answer']}")
            knowledge_type = "word" if self.quiz_mode == 'word_to_def' else "definition"
            print(f"You need to review the {knowledge_type}: '{question_data['word']}'")
            
        print(f"Time taken: {result['time_taken']:.2f} seconds")
        
    def run_quiz(self, num_questions=None):
        """Run the main quiz."""
        if not self.word_definitions:
            print("Error: No vocabulary loaded. Please load a file first.")
            return
            
        if not self.quiz_mode:
            print("Error: Quiz mode not set. Please choose a mode first.")
            return
            
        max_questions = len(self.word_definitions)
        if num_questions is None or num_questions > max_questions:
            num_questions = max_questions
            
        print(f"\n{'='*60}")
        print(f"Starting Quiz: {num_questions} questions")
        print('='*60)
        
        results = []
        total_time = 0
        
        for i in range(num_questions):
            question_data = self.create_quiz_question()
            result = self.ask_question(question_data, i + 1, num_questions)
            self.provide_feedback(result, question_data)
            
            results.append(result)
            total_time += result['time_taken']
            
            if i < num_questions - 1:
                input("\nPress Enter to continue...")
                
        self.show_summary(results, total_time)
        
    def show_summary(self, results, total_time):
        """Show quiz summary and statistics."""
        correct_count = sum(1 for r in results if r['is_correct'])
        total_count = len(results)
        percentage = (correct_count / total_count * 100) if total_count > 0 else 0
        avg_time = total_time / total_count if total_count > 0 else 0
        
        print(f"\n{'='*60}")
        print("QUIZ SUMMARY")
        print('='*60)
        print(f"Correct answers: {correct_count}/{total_count} ({percentage:.1f}%)")
        print(f"Total time: {total_time:.2f} seconds")
        print(f"Average time per question: {avg_time:.2f} seconds")
        
        if percentage == 100:
            print("\n🎉 Perfect score! You know all the vocabulary!")
        elif percentage >= 80:
            print("\n👍 Great job! Keep practicing!")
        elif percentage >= 60:
            print("\n📚 Good effort! Review the missed items.")
        else:
            print("\n💪 Keep studying! Practice makes perfect.")
    
    def ask_num_questions(self):
        """Ask user how many questions they want to answer."""
        max_q = len(self.word_definitions)
        while True:
            num_input = input(f"\nHow many questions? (1-{max_q}, or press Enter for all): ").strip()
            
            if not num_input:
                return max_q
            
            try:
                num_questions = int(num_input)
                if 1 <= num_questions <= max_q:
                    return num_questions
                else:
                    print(f"Please enter a number between 1 and {max_q}")
            except ValueError:
                print("Invalid input. Please enter a number.")
            
    def interactive_mode(self):
        """Run the app in interactive mode."""
        print("="*60)
        print("StudyPOD - Vocabulary Quiz Application")
        print("="*60)
        
        # Step 1: Load file
        while True:
            filepath = input("\nEnter the path to your vocabulary file (.txt): ").strip()
            if filepath.lower() in ['quit', 'exit']:
                print("Goodbye!")
                return
                
            if self.load_vocabulary_file(filepath):
                break
                
        # Step 2: Choose quiz mode
        self.choose_quiz_mode()
        
        # Step 3: Ask how many questions
        num_questions = self.ask_num_questions()
                
        # Step 4: Run the quiz
        self.run_quiz(num_questions)
        
        # Step 5: Ask if user wants to continue
        while True:
            choice = input("\nWould you like to take another quiz? (y/n): ").strip().lower()
            if choice == 'y':
                self.choose_quiz_mode()
                num_questions = self.ask_num_questions()
                self.run_quiz(num_questions)
            elif choice == 'n':
                print("\nThank you for using StudyPOD! Keep learning!")
                break


def main():
    """Main entry point."""
    app = QuizApp()
    
    if len(sys.argv) > 1:
        # Command-line mode with file argument
        filepath = sys.argv[1]
        if app.load_vocabulary_file(filepath):
            app.choose_quiz_mode()
            app.run_quiz()
    else:
        # Interactive mode
        app.interactive_mode()


if __name__ == '__main__':
    main()
