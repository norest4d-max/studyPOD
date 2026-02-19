// Pre-Calculus and Pre-Algebra content with adaptive learning features

export const PRECALCULUS_DECK = {
  id: 'precalc-001',
  title: 'Pre-Calculus Fundamentals',
  category: 'math',
  theme: 'purple',
  difficulty: 'beginner',
  totalCards: 30,
  cards: [
    // Functions and Relations
    { id: 1, term: 'Function', definition: 'A relation where each input has exactly one output', category: 'functions', difficulty: 1 },
    { id: 2, term: 'Domain', definition: 'The set of all possible input values (x-values) for a function', category: 'functions', difficulty: 1 },
    { id: 3, term: 'Range', definition: 'The set of all possible output values (y-values) for a function', category: 'functions', difficulty: 1 },
    { id: 4, term: 'Vertical Line Test', definition: 'A test to determine if a graph represents a function', category: 'functions', difficulty: 2 },
    { id: 5, term: 'One-to-One Function', definition: 'A function where each output corresponds to exactly one input', category: 'functions', difficulty: 2 },
    
    // Polynomials
    { id: 6, term: 'Polynomial', definition: 'An expression consisting of variables and coefficients with non-negative integer exponents', category: 'polynomials', difficulty: 1 },
    { id: 7, term: 'Degree of Polynomial', definition: 'The highest exponent in a polynomial', category: 'polynomials', difficulty: 1 },
    { id: 8, term: 'Leading Coefficient', definition: 'The coefficient of the term with the highest degree', category: 'polynomials', difficulty: 2 },
    { id: 9, term: 'Quadratic Function', definition: 'A polynomial function of degree 2, in the form f(x) = ax² + bx + c', category: 'polynomials', difficulty: 1 },
    { id: 10, term: 'Vertex', definition: 'The highest or lowest point on a parabola', category: 'polynomials', difficulty: 2 },
    
    // Exponential and Logarithmic
    { id: 11, term: 'Exponential Function', definition: 'A function in the form f(x) = aᵇˣ where b > 0 and b ≠ 1', category: 'exponential', difficulty: 2 },
    { id: 12, term: 'Logarithm', definition: 'The inverse of an exponential function; log_b(x) asks "b to what power equals x?"', category: 'exponential', difficulty: 2 },
    { id: 13, term: 'Natural Logarithm', definition: 'Logarithm with base e, written as ln(x)', category: 'exponential', difficulty: 2 },
    { id: 14, term: 'e (Euler\'s Number)', definition: 'The mathematical constant approximately equal to 2.71828', category: 'exponential', difficulty: 3 },
    
    // Trigonometry
    { id: 15, term: 'Sine', definition: 'In a right triangle, the ratio of opposite side to hypotenuse', category: 'trigonometry', difficulty: 1 },
    { id: 16, term: 'Cosine', definition: 'In a right triangle, the ratio of adjacent side to hypotenuse', category: 'trigonometry', difficulty: 1 },
    { id: 17, term: 'Tangent', definition: 'In a right triangle, the ratio of opposite side to adjacent side', category: 'trigonometry', difficulty: 1 },
    { id: 18, term: 'Radian', definition: 'A unit of angle measurement; 2π radians = 360 degrees', category: 'trigonometry', difficulty: 2 },
    { id: 19, term: 'Unit Circle', definition: 'A circle with radius 1 centered at the origin, used to define trig functions', category: 'trigonometry', difficulty: 2 },
    { id: 20, term: 'Amplitude', definition: 'The height of a wave function from the center line to the peak', category: 'trigonometry', difficulty: 2 },
    
    // Advanced Concepts
    { id: 21, term: 'Asymptote', definition: 'A line that a graph approaches but never touches', category: 'advanced', difficulty: 2 },
    { id: 22, term: 'Rational Function', definition: 'A function that is the ratio of two polynomials', category: 'advanced', difficulty: 2 },
    { id: 23, term: 'Inverse Function', definition: 'A function that reverses the effect of the original function', category: 'advanced', difficulty: 2 },
    { id: 24, term: 'Composition of Functions', definition: 'Applying one function to the result of another, written (f ∘ g)(x) = f(g(x))', category: 'advanced', difficulty: 3 },
    { id: 25, term: 'Piecewise Function', definition: 'A function defined by different formulas for different intervals', category: 'advanced', difficulty: 2 },
    
    // Problem Solving
    { id: 26, term: 'Factoring', definition: 'Breaking down an expression into products of simpler expressions', category: 'problem-solving', difficulty: 1 },
    { id: 27, term: 'Completing the Square', definition: 'A method to rewrite a quadratic in vertex form', category: 'problem-solving', difficulty: 3 },
    { id: 28, term: 'Quadratic Formula', definition: 'x = (-b ± √(b² - 4ac)) / 2a, used to solve ax² + bx + c = 0', category: 'problem-solving', difficulty: 2 },
    { id: 29, term: 'Discriminant', definition: 'b² - 4ac; determines the nature of quadratic equation solutions', category: 'problem-solving', difficulty: 3 },
    { id: 30, term: 'Synthetic Division', definition: 'A shortcut method for dividing polynomials', category: 'problem-solving', difficulty: 3 }
  ]
}

export const PREALGEBRA_CHAPTER1 = {
  id: 'prealg-ch1',
  title: 'Pre-Algebra Chapter 1: Introduction to Integers',
  category: 'math',
  theme: 'purple',
  difficulty: 'beginner',
  lessons: [
    {
      lessonNumber: 1,
      title: 'Understanding Integers',
      carlQuote: "Alright genius, integers are just whole numbers - positive, negative, or zero. It ain't complicated.",
      slides: [
        {
          id: 1,
          type: 'intro',
          title: 'What are Integers?',
          content: 'Integers are whole numbers that can be positive, negative, or zero.',
          examples: ['5, -3, 0, 42, -100'],
          carlComment: "See? No decimals, no fractions. Just whole numbers. Even you can handle this."
        },
        {
          id: 2,
          type: 'concept',
          title: 'Positive and Negative Integers',
          content: 'Positive integers are greater than zero. Negative integers are less than zero.',
          visual: 'number_line',
          carlComment: "Think of it like money. Positive means you got cash, negative means you owe somebody."
        },
        {
          id: 3,
          type: 'example',
          title: 'Real-World Examples',
          examples: [
            'Temperature: 5°F above zero (+5) or 10°F below zero (-10)',
            'Elevation: 200 feet above sea level (+200) or 50 feet below (-50)',
            'Bank account: $100 in credit (+100) or $50 in debt (-50)'
          ],
          carlComment: "Real world stuff. This is why you gotta learn it - unless you wanna be broke."
        }
      ]
    },
    {
      lessonNumber: 2,
      title: 'Ordering Integers',
      carlQuote: "So you gotta know which number is bigger. Left side is smaller, right side is bigger. That's it.",
      slides: [
        {
          id: 1,
          type: 'concept',
          title: 'The Number Line',
          content: 'Integers are ordered on a number line. Numbers to the right are greater.',
          visual: 'number_line_ordering',
          carlComment: "Like parking spots. Higher numbers are further away."
        },
        {
          id: 2,
          type: 'rule',
          title: 'Comparing Integers',
          rules: [
            'Any positive integer > any negative integer',
            'Zero > any negative integer',
            'Any positive integer > zero'
          ],
          carlComment: "Even a monkey can see that 5 is bigger than -3. C'mon now."
        }
      ]
    },
    {
      lessonNumber: 3,
      title: 'Absolute Value',
      carlQuote: "Absolute value is just how far a number is from zero. Distance is always positive. Duh.",
      slides: [
        {
          id: 1,
          type: 'definition',
          title: 'What is Absolute Value?',
          content: 'Absolute value is the distance of a number from zero, always positive or zero.',
          notation: '|x| means the absolute value of x',
          carlComment: "Like, if you walk 5 steps forward or 5 steps back, you still walked 5 steps total."
        },
        {
          id: 2,
          type: 'example',
          title: 'Examples of Absolute Value',
          examples: [
            '|5| = 5',
            '|-5| = 5',
            '|0| = 0',
            '|-42| = 42'
          ],
          carlComment: "See how the negatives become positive? That's all there is to it."
        }
      ]
    }
  ],
  quizQuestions: [
    {
      id: 1,
      question: 'Which of the following is NOT an integer?',
      options: ['5', '-3', '0', '2.5'],
      correct: 3,
      difficulty: 1,
      carlResponse: {
        correct: "Yeah, 2.5 is a decimal. Finally got one right.",
        incorrect: "Are you serious? 2.5 has a decimal point. That ain't an integer, genius."
      }
    },
    {
      id: 2,
      question: 'Which integer is greater: -5 or -2?',
      options: ['-5', '-2', 'They are equal', 'Cannot be determined'],
      correct: 1,
      difficulty: 2,
      carlResponse: {
        correct: "Correct. -2 is closer to zero, so it's bigger. You're learning.",
        incorrect: "Wrong. -2 is bigger than -5. Think about owing money - would you rather owe $2 or $5?"
      }
    },
    {
      id: 3,
      question: 'What is |-8|?',
      options: ['-8', '8', '0', '16'],
      correct: 1,
      difficulty: 1,
      carlResponse: {
        correct: "Bingo. Absolute value makes it positive. 8 steps is 8 steps.",
        incorrect: "Come on! Absolute value is distance from zero. |-8| = 8. Practice this."
      }
    }
  ]
}

// Word Problems with varying difficulty
export const MATH_WORD_PROBLEMS = [
  {
    id: 'wp1',
    difficulty: 1,
    category: 'basic-arithmetic',
    problem: 'Sarah has $45. She buys a book for $12. How much money does she have left?',
    solution: '$33',
    steps: ['Start with $45', 'Subtract $12', '$45 - $12 = $33'],
    carlHint: "Subtraction, genius. You had money, you spent money. What's left?"
  },
  {
    id: 'wp2',
    difficulty: 2,
    category: 'integers',
    problem: 'The temperature was 3°F at noon. By midnight, it dropped 8 degrees. What is the temperature at midnight?',
    solution: '-5°F',
    steps: ['Start at 3°F', 'Drop 8 degrees means subtract 8', '3 - 8 = -5°F'],
    carlHint: "It got colder, so you go into the negatives. 3 minus 8 is -5. Not rocket surgery."
  },
  {
    id: 'wp3',
    difficulty: 3,
    category: 'rates',
    problem: 'A car travels at 60 miles per hour. How long will it take to travel 180 miles?',
    solution: '3 hours',
    steps: ['Use formula: time = distance / speed', 'time = 180 / 60', 'time = 3 hours'],
    carlHint: "Distance divided by speed gives you time. Basic formula. Look it up."
  },
  {
    id: 'wp4',
    difficulty: 2,
    category: 'percentages',
    problem: 'A shirt costs $40. It is on sale for 25% off. What is the sale price?',
    solution: '$30',
    steps: ['25% of $40 = 0.25 × 40 = $10', 'Sale price = $40 - $10 = $30'],
    carlHint: "Find 25% then subtract it. Or multiply by 0.75. Either way works."
  },
  {
    id: 'wp5',
    difficulty: 3,
    category: 'algebra',
    problem: 'John is 5 years older than his sister. The sum of their ages is 25. How old is John?',
    solution: '15 years old',
    steps: ['Let sister\'s age = x', 'John\'s age = x + 5', 'x + (x + 5) = 25', '2x + 5 = 25', '2x = 20', 'x = 10', 'John = 10 + 5 = 15'],
    carlHint: "Set up an equation. Let x be sister's age. Then x + (x+5) = 25. Solve for x, then add 5."
  }
]

// Problem generation templates
export const PROBLEM_GENERATORS = {
  addition: {
    easy: (a, b) => ({
      problem: `What is ${a} + ${b}?`,
      answer: a + b,
      difficulty: 1
    }),
    medium: (a, b, c) => ({
      problem: `Calculate: ${a} + ${b} + ${c}`,
      answer: a + b + c,
      difficulty: 2
    }),
    hard: (a, b, c, d) => ({
      problem: `Find the sum: ${a} + (${b} + ${c}) + ${d}`,
      answer: a + b + c + d,
      difficulty: 3
    })
  },
  subtraction: {
    easy: (a, b) => ({
      problem: `What is ${a} - ${b}?`,
      answer: a - b,
      difficulty: 1
    }),
    medium: (a, b, c) => ({
      problem: `Calculate: ${a} - ${b} - ${c}`,
      answer: a - b - c,
      difficulty: 2
    }),
    hard: (a, b, c) => ({
      problem: `Simplify: ${a} - (${b} - ${c})`,
      answer: a - b + c,
      difficulty: 3
    })
  },
  multiplication: {
    easy: (a, b) => ({
      problem: `What is ${a} × ${b}?`,
      answer: a * b,
      difficulty: 1
    }),
    medium: (a, b, c) => ({
      problem: `Calculate: ${a} × ${b} × ${c}`,
      answer: a * b * c,
      difficulty: 2
    }),
    hard: (a, b, c, d) => ({
      problem: `Find: (${a} × ${b}) + (${c} × ${d})`,
      answer: (a * b) + (c * d),
      difficulty: 3
    })
  }
}

// Convert cards to vocabulary format for quiz
export function mathCardsToVocabulary(cards) {
  const vocab = {}
  cards.forEach(card => {
    vocab[card.term] = card.definition
  })
  return vocab
}

// Generate random math problem
export function generateMathProblem(type, difficulty) {
  const generators = PROBLEM_GENERATORS[type]
  if (!generators || !generators[difficulty]) return null
  
  let a, b, c, d
  switch(difficulty) {
    case 'easy':
      a = Math.floor(Math.random() * 20) + 1
      b = Math.floor(Math.random() * 20) + 1
      return generators.easy(a, b)
    case 'medium':
      a = Math.floor(Math.random() * 50) + 1
      b = Math.floor(Math.random() * 50) + 1
      c = Math.floor(Math.random() * 30) + 1
      return generators.medium(a, b, c)
    case 'hard':
      a = Math.floor(Math.random() * 100) + 1
      b = Math.floor(Math.random() * 50) + 1
      c = Math.floor(Math.random() * 50) + 1
      d = Math.floor(Math.random() * 30) + 1
      return generators.hard(a, b, c, d)
    default:
      return null
  }
}
