#!/usr/bin/env python3
"""
Demo script to showcase the Apple-inspired minimal design.
"""

from quiz_app import Theme

print("\n" + "=" * 70)
print("Apple-Inspired Minimal Design Demo")
print("Black, White & Grey Aesthetic")
print("=" * 70)

print("\n1. HEADER STYLES")
print(Theme.header("  Premium Header  "))
print(Theme.subheader("Minimal Subheader"))
print(Theme.emphasis("Emphasized Text"))
print(Theme.muted("Muted, understated text"))

print("\n2. DIVIDERS & BOXES")
print(Theme.divider(50))
print(Theme.box_top(50))
print(Theme.box_line("Minimal box design", 50))
print(Theme.box_line(Theme.emphasis("With emphasis"), 50))
print(Theme.box_bottom(50))

print("\n3. FEEDBACK MESSAGES")
print(Theme.success("Action completed successfully"))
print(Theme.error("Something went wrong"))

print("\n4. QUESTION DISPLAY PREVIEW")
print()
print(Theme.divider())
print(Theme.header("  Question 1 of 5  "))
print(Theme.divider())
print(f"\n{Theme.BOLD}Word:{Theme.RESET} {Theme.emphasis('algorithm')}")
print(Theme.muted("\nChoose the correct definition:"))
print()
print(f"{Theme.GREY}1.{Theme.RESET} A named storage location")
print(f"{Theme.GREY}2.{Theme.RESET} A step-by-step procedure")
print(f"{Theme.GREY}3.{Theme.RESET} An error during execution")
print(f"{Theme.GREY}4.{Theme.RESET} A reusable block of code")

print("\n5. SUMMARY DISPLAY PREVIEW")
print()
print(Theme.box_top())
print(Theme.box_line(Theme.header("  SUMMARY  ")))
print(Theme.box_line(""))
print(Theme.box_line(f"{Theme.emphasis('4/5')} correct (80.0%)"))
print(Theme.box_line(Theme.muted("Total time: 45.2s  •  Avg: 9.0s")))
print(Theme.box_bottom())
print(f"\n{Theme.emphasis('Great job! Keep practicing.')}")

print("\n" + "=" * 70)
print("Design Features:")
print("  • Minimal, clean aesthetic inspired by Apple's design philosophy")
print("  • Black, white, and grey color palette")
print("  • Box drawing characters (─ ┌ ┐ └ ┘ │) for premium feel")
print("  • Emphasis through typography rather than color")
print("  • Muted feedback for non-critical information")
print("=" * 70 + "\n")
