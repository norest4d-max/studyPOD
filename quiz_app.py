#!/usr/bin/env python3
"""
StudyPOD - Quiz Application for Word-Definition Learning
A flashcard quiz app that tests vocabulary with multiple-choice questions.
"""

import random
import time
import sys
from pathlib import Path


class Theme:
    """Apple-inspired minimal design theme with black, white, and grey."""
    
    # ANSI color codes for terminal styling
    RESET = '\033[0m'
    BOLD = '\033[1m'
    DIM = '\033[2m'
    
    # Apple-inspired color palette: black, white (default), grey
    BLACK = '\033[30m'
    GREY = '\033[90m'  # Bright black (grey)
    WHITE = '\033[97m'  # Bright white
    
    # Background colors
    BG_BLACK = '\033[40m'
    BG_WHITE = '\033[107m'
    BG_GREY = '\033[100m'
    
    @staticmethod
    def strip_ansi(text):
        """Remove ANSI escape codes from text for length calculation."""
        import re
        ansi_escape = re.compile(r'\033\[[0-9;]*m')
        return ansi_escape.sub('', text)
    
    @staticmethod
    def header(text):
        """Premium header style - bold white on black."""
        return f"{Theme.BG_BLACK}{Theme.WHITE}{Theme.BOLD} {text} {Theme.RESET}"
    
    @staticmethod
    def subheader(text):
        """Subheader style - grey, understated."""
        return f"{Theme.GREY}{text}{Theme.RESET}"
    
    @staticmethod
    def emphasis(text):
        """Emphasis style - bold white."""
        return f"{Theme.BOLD}{Theme.WHITE}{text}{Theme.RESET}"
    
    @staticmethod
    def muted(text):
        """Muted text - dim grey."""
        return f"{Theme.DIM}{Theme.GREY}{text}{Theme.RESET}"
    
    @staticmethod
    def divider(width=60):
        """Minimal divider line - grey."""
        return f"{Theme.GREY}{'─' * width}{Theme.RESET}"
    
    @staticmethod
    def box_top(width=60):
        """Top of a minimal box."""
        return f"{Theme.GREY}┌{'─' * (width-2)}┐{Theme.RESET}"
    
    @staticmethod
    def box_bottom(width=60):
        """Bottom of a minimal box."""
        return f"{Theme.GREY}└{'─' * (width-2)}┘{Theme.RESET}"
    
    @staticmethod
    def box_line(text, width=60):
        """Line inside a box with padding."""
        # Strip ANSI codes to get actual display length
        display_length = len(Theme.strip_ansi(text))
        padding = width - display_length - 4
        return f"{Theme.GREY}│ {Theme.RESET}{text}{' ' * padding}{Theme.GREY} │{Theme.RESET}"
    
    @staticmethod
    def success(text):
        """Success message - bold white."""
        return f"{Theme.BOLD}{Theme.WHITE}✓ {text}{Theme.RESET}"
    
    @staticmethod
    def error(text):
        """Error message - white with X mark."""
        return f"{Theme.WHITE}✗ {text}{Theme.RESET}"


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
            print(Theme.success(f"Loaded {len(self.word_definitions)} word-definition pairs"))
            return True
            
        except FileNotFoundError:
            print(f"Error: File '{filepath}' not found")
            return False
        except Exception as e:
            print(f"Error loading file: {e}")
            return False
            
    def choose_quiz_mode(self):
        """Let user choose quiz direction."""
        print()
        print(Theme.subheader("Choose quiz mode"))
        print(Theme.muted("  1. Word → Definition  (given a word, choose the correct definition)"))
        print(Theme.muted("  2. Definition → Word  (given a definition, choose the correct word)"))
        
        while True:
            choice = input(f"\n{Theme.GREY}Enter 1 or 2:{Theme.RESET} ").strip()
            if choice == '1':
                self.quiz_mode = 'word_to_def'
                print(Theme.emphasis("Quiz mode: Word → Definition"))
                return True
            elif choice == '2':
                self.quiz_mode = 'def_to_word'
                print(Theme.emphasis("Quiz mode: Definition → Word"))
                return True
            else:
                print(Theme.error("Invalid choice. Please enter 1 or 2."))
                
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
        print()
        print(Theme.divider())
        print(Theme.header(f"  Question {question_num} of {total_questions}  "))
        print(Theme.divider())
        
        if self.quiz_mode == 'word_to_def':
            print(f"\n{Theme.BOLD}Word:{Theme.RESET} {Theme.emphasis(question_data['question'])}")
            print(Theme.muted("\nChoose the correct definition:"))
        else:
            print(f"\n{Theme.BOLD}Definition:{Theme.RESET} {Theme.emphasis(question_data['question'])}")
            print(Theme.muted("\nChoose the correct word:"))
            
        print()
        for i, option in enumerate(question_data['options'], 1):
            print(f"{Theme.GREY}{i}.{Theme.RESET} {option}")
            
    def ask_question(self, question_data, question_num, total_questions):
        """Ask a single question and get user's answer."""
        self.display_question(question_data, question_num, total_questions)
        
        start_time = time.time()
        
        while True:
            try:
                answer = input(f"\n{Theme.GREY}Your answer (1-4):{Theme.RESET} ").strip()
                if answer in ['1', '2', '3', '4']:
                    answer_num = int(answer)
                    break
                else:
                    print(Theme.muted("Please enter a number between 1 and 4"))
            except KeyboardInterrupt:
                print(f"\n\n{Theme.muted('Quiz interrupted by user.')}")
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
            print(Theme.success("CORRECT"))
            knowledge_type = "word" if self.quiz_mode == 'word_to_def' else "definition"
            print(Theme.muted(f"You know the {knowledge_type}: '{question_data['word']}'"))
        else:
            print(Theme.error("INCORRECT"))
            print(f"{Theme.muted('Your answer:')} {result['user_answer']}")
            print(f"{Theme.muted('Correct answer:')} {Theme.emphasis(result['correct_answer'])}")
            knowledge_type = "word" if self.quiz_mode == 'word_to_def' else "definition"
            print(Theme.muted(f"Review the {knowledge_type}: '{question_data['word']}'"))
            
        print(Theme.muted(f"Time: {result['time_taken']:.2f}s"))
        
    def run_quiz(self, num_questions=None):
        """Run the main quiz."""
        if not self.word_definitions:
            print(Theme.error("No vocabulary loaded. Please load a file first."))
            return
            
        if not self.quiz_mode:
            print(Theme.error("Quiz mode not set. Please choose a mode first."))
            return
            
        max_questions = len(self.word_definitions)
        if num_questions is None or num_questions > max_questions:
            num_questions = max_questions
            
        print()
        print(Theme.box_top())
        print(Theme.box_line(f"Starting Quiz: {num_questions} questions"))
        print(Theme.box_bottom())
        
        results = []
        total_time = 0
        
        for i in range(num_questions):
            question_data = self.create_quiz_question()
            result = self.ask_question(question_data, i + 1, num_questions)
            self.provide_feedback(result, question_data)
            
            results.append(result)
            total_time += result['time_taken']
            
            if i < num_questions - 1:
                input(f"\n{Theme.muted('Press Enter to continue...')}")
                
        self.show_summary(results, total_time)
        
    def show_summary(self, results, total_time):
        """Show quiz summary and statistics."""
        correct_count = sum(1 for r in results if r['is_correct'])
        total_count = len(results)
        percentage = (correct_count / total_count * 100) if total_count > 0 else 0
        avg_time = total_time / total_count if total_count > 0 else 0
        
        print()
        print(Theme.box_top())
        print(Theme.box_line(Theme.header("  SUMMARY  ")))
        print(Theme.box_line(""))
        print(Theme.box_line(f"{Theme.emphasis(f'{correct_count}/{total_count}')} correct ({percentage:.1f}%)"))
        print(Theme.box_line(Theme.muted(f"Total time: {total_time:.1f}s  •  Avg: {avg_time:.1f}s")))
        print(Theme.box_bottom())
        
        if percentage == 100:
            print(f"\n{Theme.emphasis('Perfect score! You know all the vocabulary.')}")
        elif percentage >= 80:
            print(f"\n{Theme.emphasis('Great job! Keep practicing.')}")
        elif percentage >= 60:
            print(f"\n{Theme.muted('Good effort. Review the missed items.')}")
        else:
            print(f"\n{Theme.muted('Keep studying. Practice makes perfect.')}")
    
    def ask_num_questions(self):
        """Ask user how many questions they want to answer."""
        max_q = len(self.word_definitions)
        while True:
            num_input = input(f"\n{Theme.GREY}How many questions? (1-{max_q}, or press Enter for all):{Theme.RESET} ").strip()
            
            if not num_input:
                return max_q
            
            try:
                num_questions = int(num_input)
                if 1 <= num_questions <= max_q:
                    return num_questions
                else:
                    print(Theme.muted(f"Please enter a number between 1 and {max_q}"))
            except ValueError:
                print(Theme.muted("Invalid input. Please enter a number."))
            
    def interactive_mode(self):
        """Run the app in interactive mode."""
        print()
        print(Theme.box_top())
        print(Theme.box_line(Theme.header("  StudyPOD  ")))
        print(Theme.box_line(Theme.muted("Vocabulary Quiz Application")))
        print(Theme.box_bottom())
        
        # Step 1: Load file
        while True:
            filepath = input(f"\n{Theme.GREY}Enter vocabulary file path (.txt):{Theme.RESET} ").strip()
            if filepath.lower() in ['quit', 'exit']:
                print(Theme.muted("\nGoodbye!"))
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
            choice = input(f"\n{Theme.GREY}Take another quiz? (y/n):{Theme.RESET} ").strip().lower()
            if choice == 'y':
                self.choose_quiz_mode()
                num_questions = self.ask_num_questions()
                self.run_quiz(num_questions)
            elif choice == 'n':
                print(f"\n{Theme.emphasis('Thank you for using StudyPOD!')}")
                print(Theme.muted("Keep learning.\n"))
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
