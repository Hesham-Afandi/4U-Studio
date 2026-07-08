import { Curriculum } from '../../types';

export const math9AdvInspire1: Curriculum = {
  isEnglish: true,
  units: [
    {
      id: 1,
      name: 'Module 1: Expressions',
      icon: '',
      color: 'from-blue-500 to-indigo-600',
      description: 'Study numerical and algebraic expressions, properties of real numbers, distributive property, and absolute value.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 1-1: Numerical Expressions',
          icon: '📊',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Numerical expressions involve numbers and operations. We learn the order of operations to evaluate them correctly.',
            sections: [
              { title: 'Order of Operations (PEMDAS)', type: 'bullets', content: [
                'P: Parentheses (grouping symbols)',
                'E: Exponents',
                'M/D: Multiplication/Division (left to right)',
                'A/S: Addition/Subtraction (left to right)'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                '3 + 4 × 2 = 3 + 8 = 11',
                '(3 + 4) × 2 = 7 × 2 = 14',
                '2³ + 5 = 8 + 5 = 13',
                '12 ÷ 3 × 2 = 4 × 2 = 8'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 1-2: Algebraic Expressions',
          icon: '🔤',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Algebraic expressions contain variables, numbers, and operations. We learn to evaluate and simplify them.',
            sections: [
              { title: 'Variables and Terms', type: 'bullets', content: [
                'Variable: letter representing unknown (x, y, a)',
                'Term: part separated by + or -',
                'Coefficient: number in front of variable'
              ]},
              { title: 'Evaluating Expressions', type: 'bullets', content: [
                'Substitute values for variables',
                'Follow order of operations',
                'If x = 3, then 2x + 5 = 2(3) + 5 = 11'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                '3x + 2y when x=4, y=2: 3(4) + 2(2) = 16',
                'x² - 3x when x=5: 25 - 15 = 10'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 1-3: Properties of Real Numbers',
          icon: '⚙️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Real numbers have important properties that help simplify expressions.',
            sections: [
              { title: 'Commutative Property', type: 'bullets', content: [
                'Addition: a + b = b + a',
                'Multiplication: a × b = b × a'
              ]},
              { title: 'Associative Property', type: 'bullets', content: [
                'Addition: (a + b) + c = a + (b + c)',
                'Multiplication: (a × b) × c = a × (b × c)'
              ]},
              { title: 'Identity Properties', type: 'bullets', content: [
                'Addition: a + 0 = a',
                'Multiplication: a × 1 = a'
              ]},
              { title: 'Inverse Properties', type: 'bullets', content: [
                'Addition: a + (-a) = 0',
                'Multiplication: a × (1/a) = 1 (a ≠ 0)'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'Lesson 1-4: Distributive Property',
          icon: '',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.4-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'The distributive property allows us to multiply a number by a sum or difference.',
            sections: [
              { title: 'Distributive Property', type: 'formula', content: 'a(b + c) = ab + ac' },
              { title: 'Examples', type: 'bullets', content: [
                '3(x + 5) = 3x + 15',
                '2(4y - 7) = 8y - 14',
                '-5(a + 3) = -5a - 15',
                'x(x + 2) = x² + 2x'
              ]},
              { title: 'Simplifying', type: 'bullets', content: [
                'Distribute first',
                'Combine like terms',
                '2(x + 3) + 4(x - 1) = 2x + 6 + 4x - 4 = 6x + 2'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'Lesson 1-5: Expressions Involving Absolute Value',
          icon: '| |',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.5-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Absolute value represents distance from zero on a number line.',
            sections: [
              { title: 'Definition', type: 'bullets', content: [
                '|x| = x if x ≥ 0',
                '|x| = -x if x < 0',
                '|5| = 5 and |-5| = 5'
              ]},
              { title: 'Distance on Number Line', type: 'bullets', content: [
                'Distance between a and b: |a - b|',
                'Distance from -3 to 5: |5 - (-3)| = |8| = 8'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                '|3 - 7| = |-4| = 4',
                '|x| = 5 means x = 5 or x = -5',
                '|2x - 3| when x = 4: |8 - 3| = |5| = 5'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'Lesson 1-6: Descriptive Modeling and Accuracy',
          icon: '📐',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-1.6-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'We use expressions to model real-world situations with appropriate accuracy.',
            sections: [
              { title: 'Modeling', type: 'bullets', content: [
                'Translate words to expressions',
                'Choose appropriate variables',
                'Consider units'
              ]},
              { title: 'Accuracy', type: 'bullets', content: [
                'Round appropriately',
                'Consider significant figures',
                'Check reasonableness'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                'Cost = price × quantity',
                'Distance = rate × time',
                'Perimeter = 2l + 2w'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'Module 2: Equations in One Variable',
      icon: '⚖️',
      color: 'from-green-500 to-teal-600',
      description: 'Study writing, solving, and interpreting equations including one-step, multi-step, absolute value, and proportions.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 2-1: Writing and Interpreting Equations',
          icon: '✍️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'We translate real-world situations into mathematical equations.',
            sections: [
              { title: 'Key Words', type: 'bullets', content: [
                'Sum, increased by: +',
                'Difference, decreased by: -',
                'Product, times: ×',
                'Quotient, divided by: ÷',
                'Is, equals: ='
              ]},
              { title: 'Examples', type: 'bullets', content: [
                'A number increased by 5: x + 5',
                'Twice a number minus 3: 2x - 3',
                'The sum of consecutive numbers: x + (x+1)',
                'Three times a number plus 7: 3x + 7'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 2-2: Solving One-Step Equations',
          icon: '1️⃣',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'One-step equations require one operation to solve.',
            sections: [
              { title: 'Addition Equations', type: 'bullets', content: [
                'x + 5 = 12',
                'Subtract 5 from both sides',
                'x = 7'
              ]},
              { title: 'Subtraction Equations', type: 'bullets', content: [
                'x - 3 = 8',
                'Add 3 to both sides',
                'x = 7'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 2-3: Solving Multi-Step Equations',
          icon: '🔢',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Multi-step equations require more than two operations to solve.',
            sections: [
              { title: 'Steps', type: 'bullets', content: [
                '1. Distribute if needed',
                '2. Combine like terms',
                '3. Move variables to one side',
                '4. Solve for variable'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                '2x + 5 = 13 ⇒ 2x = 8 ⇒ x = 4',
                '3(x - 2) = 15 ⇒ 3x - 6 = 15 ⇒ 3x = 21 ⇒ x = 7',
                '4x + 3 = 2x + 11 ⇒ 2x = 8 ⇒ x = 4'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'Lesson 2-4: Solving Equations with the Variable on Each Side',
          icon: '⚖️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.4-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'When variable appears on both sides, we collect variables on one side.',
            sections: [
              { title: 'Strategy', type: 'bullets', content: [
                'Move all variables to one side',
                'Move constants to other side',
                'Solve for variable'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                '3x + 5 = x + 11 ⇒ 2x = 6 ⇒ x = 3',
                '5x - 2 = 2x + 10 ⇒ 3x = 12 ⇒ x = 4',
                '7x + 3 = 4x - 9 ⇒ 3x = -12 ⇒ x = -4'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'Lesson 2-5: Solving Equations Involving Absolute Value',
          icon: '| |',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.5-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Absolute value equations have two possible solutions.',
            sections: [
              { title: 'Solving Method', type: 'bullets', content: [
                '|x| = a means x = a or x = -a',
                '|x - 3| = 5 means x - 3 = 5 or x - 3 = -5',
                'x = 8 or x = -2'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                '|x| = 7 ⇒ x = 7 or x = -7',
                '|2x + 1| = 9 ⇒ 2x + 1 = 9 or 2x + 1 = -9',
                'x = 4 or x = -5'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'Lesson 2-6: Solving Proportions',
          icon: '📊',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.6-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Proportions are equations stating two ratios are equal.',
            sections: [
              { title: 'Proportion', type: 'formula', content: 'a/b = c/d' },
              { title: 'Cross Multiplication', type: 'formula', content: 'If a/b = c/d then ad = bc' },
              { title: 'Examples', type: 'bullets', content: [
                '2/3 = 4/6 (because 2×6 = 3×4)',
                'x/5 = 3/15 ⇒ x = 1',
                '3/x = 9/12 ⇒ 36 = 9x ⇒ x = 4'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'Lesson 2-7: Using Formulas',
          icon: '📐',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.7/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-2.7-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Formulas are literal equations with multiple variables.',
            sections: [
              { title: 'Solving for a Variable', type: 'bullets', content: [
                'Isolate the desired variable',
                'Example: P = 2l + 2w, solve for l',
                'P - 2w = 2l',
                'l = (P - 2w)/2'
              ]},
              { title: 'Common Formulas', type: 'bullets', content: [
                'A = lw (area of rectangle)',
                'd = rt (distance)',
                'V = lwh (volume)',
                'F = ma (force)'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                'A = lw ⇒ l = A/w',
                'd = rt ⇒ t = d/r',
                'V = lwh ⇒ h = V/(lw)'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 3,
      name: 'Module 3: Relations and Functions',
      icon: '📊',
      color: 'from-purple-500 to-pink-600',
      description: 'Study relations, functions, graphs, intercepts, and comparing different types of functions.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 3-1: Representing Relations',
          icon: '🔗',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Relations are sets of ordered pairs that can be represented in multiple ways.',
            sections: [
              { title: 'Ordered Pair', type: 'formula', content: '(x, y) where x is input, y is output' },
              { title: 'Domain', type: 'bullets', content: [
                'Set of all x-values',
                'First coordinates'
              ]},
              { title: 'Range', type: 'bullets', content: [
                'Set of all y-values',
                'Second coordinates'
              ]},
              { title: 'Representations', type: 'bullets', content: [
                'Table',
                'Graph',
                'Set of ordered pairs',
                'Mapping diagram'
              ]},
              { title: 'Example', type: 'bullets', content: [
                '{(1, 2), (3, 4), (5, 6)}',
                'Domain: {1, 3, 5}',
                'Range: {2, 4, 6}'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 3-2: Functions',
          icon: 'ƒ',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'A function is a special relation where each input has exactly one output.',
            sections: [
              { title: 'Definition', type: 'bullets', content: [
                'Each x has exactly one y',
                'Vertical Line Test: if vertical line crosses graph more than once, not a function'
              ]},
              { title: 'Function Notation', type: 'formula', content: 'f(x) = 2x + 3' },
              { title: 'Evaluating Functions', type: 'bullets', content: [
                'Substitute x value',
                'If f(x) = 2x + 3, then f(4) = 2(4) + 3 = 11'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                '{(1, 2), (2, 4), (3, 6)} is a function',
                '{(1, 2), (1, 3), (2, 4)} is NOT a function (1 has two outputs)'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 3-3: Linearity and Continuity of Graphs',
          icon: '📈',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Graphs can be linear (straight line) or nonlinear, continuous or discrete.',
            sections: [
              { title: 'Linear vs Nonlinear', type: 'bullets', content: [
                'Linear: straight line, constant rate',
                'Nonlinear: curved, changing rate'
              ]},
              { title: 'Continuous vs Discrete', type: 'bullets', content: [
                'Continuous: unbroken line (can have any value)',
                'Discrete: separate points (only specific values)'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                'Continuous: temperature over time',
                'Discrete: number of students'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'Lesson 3-4: Intercepts of Graphs',
          icon: '📍',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.4-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Intercepts are points where graph crosses axes.',
            sections: [
              { title: 'x-intercept', type: 'bullets', content: [
                'Where graph crosses x-axis',
                'y = 0',
                'Set y = 0 and solve for x'
              ]},
              { title: 'y-intercept', type: 'bullets', content: [
                'Where graph crosses y-axis',
                'x = 0',
                'Set x = 0 and solve for y'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                'y = 2x + 4: y-intercept = 4',
                'x-intercept: 0 = 2x + 4 ⇒ x = -2'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'Lesson 3-5: Shapes of Graphs',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.5-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Different functions have different graph shapes.',
            sections: [
              { title: 'Increasing/Decreasing', type: 'bullets', content: [
                'Increasing: y rises as x increases',
                'Decreasing: y falls as x increases',
                'Constant: y stays the same'
              ]},
              { title: 'Relative High and Low Points', type: 'bullets', content: [
                'Maximum: highest point',
                'Minimum: lowest point'
              ]},
              { title: 'Symmetry', type: 'bullets', content: [
                'Line symmetry: mirror image',
                'Common in parabolas'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'Lesson 3-6: Sketching Graphs and Comparing Functions',
          icon: '📉',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-3.6-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'We sketch graphs from descriptions and compare different functions.',
            sections: [
              { title: 'Sketching from Description', type: 'bullets', content: [
                'Identify key features',
                'Mark intercepts',
                'Show increasing/decreasing',
                'Label axes'
              ]},
              { title: 'Comparing Functions', type: 'bullets', content: [
                'Compare rates of change',
                'Compare intercepts',
                'Compare maximum/minimum values'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 4,
      name: 'Module 4: Linear and Nonlinear Functions',
      icon: '📐',
      color: 'from-orange-500 to-red-600',
      description: 'Study graphing linear functions, slope, transformations, sequences, and piecewise functions.',
      lessons: [
        {
          id: 1,
          title: 'Lesson 4-1: Graphing Linear Functions',
          icon: '📈',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-4.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-4.1-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Linear functions graph as straight lines.',
            sections: [
              { title: 'Table Method', type: 'bullets', content: [
                'Choose x values',
                'Calculate y values',
                'Plot points',
                'Connect with line'
              ]},
              { title: 'Example', type: 'bullets', content: [
                'y = 2x + 1',
                'x = 0 ⇒ y = 1',
                'x = 1 ⇒ y = 3',
                'x = 2 ⇒ y = 5'
              ]},
              { title: 'Two Points', type: 'bullets', content: [
                'Only need 2 points to graph a line',
                'Use intercepts or any points'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'Lesson 4-2: Rate of Change and Slope',
          icon: '📉',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-4.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-4.2-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Slope measures the rate of change of y with respect to x.',
            sections: [
              { title: 'Slope Formula', type: 'formula', content: 'm = (y₂ - y₁)/(x₂ - x₁)' },
              { title: 'Types of Slope', type: 'bullets', content: [
                'Positive: line rises',
                'Negative: line falls',
                'Zero: horizontal line',
                'Undefined: vertical line'
              ]},
              { title: 'Example', type: 'bullets', content: [
                'Points (2, 3) and (5, 9)',
                'm = (9-3)/(5-2) = 6/3 = 2'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'Lesson 4-3: Slope-Intercept Form',
          icon: '📊',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-4.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-4.3-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Slope-intercept form is y = mx + b.',
            sections: [
              { title: 'Formula', type: 'formula', content: 'y = mx + b' },
              { title: 'Components', type: 'bullets', content: [
                'm: slope',
                'b: y-intercept'
              ]},
              { title: 'Graphing', type: 'bullets', content: [
                'Start at (0, b)',
                'Use slope to find next point',
                'Example: y = 2x + 3, start at (0, 3), slope 2 means up 2, right 1'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'Lesson 4-4: Transformations of Linear Functions',
          icon: '🔄',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-4.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-4.4-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Linear functions can be transformed by translations, reflections, and stretches.',
            sections: [
              { title: 'Vertical Translation', type: 'bullets', content: [
                'y = f(x) + k: up k units',
                'y = f(x) - k: down k units'
              ]},
              { title: 'Horizontal Translation', type: 'bullets', content: [
                'y = f(x - h): right h units',
                'y = f(x + h): left h units'
              ]},
              { title: 'Reflection', type: 'bullets', content: [
                'y = -f(x): reflection over x-axis',
                'y = f(-x): reflection over y-axis'
              ]},
              { title: 'Stretch/Compression', type: 'bullets', content: [
                'y = af(x): vertical stretch if |a| > 1',
                'y = af(x): compression if 0 < |a| < 1'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'Lesson 4-5: Arithmetic Sequences',
          icon: '🔢',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-4.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-4.5-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Arithmetic sequences have a constant difference between terms.',
            sections: [
              { title: 'Formula', type: 'formula', content: 'a_n = a₁ + (n-1)d' },
              { title: 'Common Difference', type: 'bullets', content: [
                'd = difference between consecutive terms',
                'Example: 2, 5, 8, 11,... difference = 3'
              ]},
              { title: 'As Linear Function', type: 'bullets', content: [
                'Sequence is discrete linear function',
                'Slope = common difference',
                'y = mx + b form'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                '3, 7, 11, 15,... d = 4',
                'a_n = 3 + (n-1)4 = 4n - 1'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'Lesson 4-6: Piecewise and Step Functions',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-4.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-4.6-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Piecewise functions have different rules for different intervals.',
            sections: [
              { title: 'Piecewise Function', type: 'bullets', content: [
                'Different equations for different domains',
                'Example: f(x) = {x+1 if x<0, 2x if x≥0}'
              ]},
              { title: 'Step Function', type: 'bullets', content: [
                'Constant on intervals',
                'Looks like stairs',
                'Example: postage rates'
              ]},
              { title: 'Graphing', type: 'bullets', content: [
                'Graph each piece on its domain',
                'Use open/closed circles',
                'Show breaks clearly'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'Lesson 4-7: Absolute Value Functions',
          icon: '| |',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-4.7/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Ins-math-T1-4.7-exam/',
          lessonTitle: '📖 Lesson Explanation',
          examTitle: '📝 Take the Quiz',
          content: {
            intro: 'Absolute value functions have a V-shape graph.',
            sections: [
              { title: 'Parent Function', type: 'formula', content: 'f(x) = |x|' },
              { title: 'General Form', type: 'formula', content: 'f(x) = a|x - h| + k' },
              { title: 'Parameters', type: 'bullets', content: [
                'a: vertical stretch/compression',
                'h: horizontal shift',
                'k: vertical shift',
                'Vertex: (h, k)'
              ]},
              { title: 'Graph Shape', type: 'bullets', content: [
                'V-shape',
                'Vertex at turning point',
                'Symmetric about vertical line through vertex'
              ]},
              { title: 'Examples', type: 'bullets', content: [
                'f(x) = |x - 2| + 1: vertex (2, 1)',
                'f(x) = 2|x|: steeper V',
                'f(x) = |x + 3| - 2: vertex (-3, -2)'
              ]}
            ]
          }
        }
      ]
    }
  ]
};

export const math9AdvBridge1: Curriculum = {
  isEnglish: false,
  units: [
    {
      id: 1,
      name: 'الوحدة الأولى: التعابير والمعادلات والدوال',
      icon: '📊',
      color: 'from-blue-500 to-indigo-600',
      description: 'دراسة المتغيرات، التعابير الجبرية، خصائص الأعداد، المعادلات، والعلاقات والدوال.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 1-1: المتغيرات والتعابير',
          icon: '🔢',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المتغير هو رمز (عادة حرف) يمثل عدداً مجهولاً. التعبير الجبري هو مجموعة من الأعداد والمتغيرات والعمليات.',
            sections: [
              { title: 'المتغير', type: 'text', content: 'حرف أو رمز يمثل عدداً مجهولاً أو متغيراً (مثل x, y, a, b)' },
              { title: 'التعبير الجبري', type: 'bullets', content: [
                'مجموعة من الأعداد والمتغيرات والعمليات',
                'مثال: 3x + 5، 2y² - 7، a + b'
              ]},
              { title: 'تقييم التعابير', type: 'bullets', content: [
                'نعوض بقيمة المتغير',
                'نتبع ترتيب العمليات',
                'مثال: إذا x = 4، فإن 3x + 2 = 3(4) + 2 = 14'
              ]},
              { title: 'الحد', type: 'bullets', content: [
                'جزء من التعبير مفصول بـ + أو -',
                'مثال: في 3x² + 5x - 2، هناك 3 حدود'
              ]},
              { title: 'المعامل', type: 'bullets', content: [
                'العدد أمام المتغير',
                'في 5x، المعامل هو 5'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 1-2: ترتيب العمليات',
          icon: '',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'ترتيب العمليات هو قاعدة تحدد التسلسل الصحيح لإجراء العمليات الحسابية.',
            sections: [
              { title: 'PEMDAS', type: 'bullets', content: [
                'P: Parentheses (الأقواس)',
                'E: Exponents (الأسس)',
                'M/D: Multiplication/Division (الضرب/القسمة) من اليسار لليمين',
                'A/S: Addition/Subtraction (الجمع/الطرح) من اليسار لليمين'
              ]},
              { title: 'الترتيب الصحيح', type: 'bullets', content: [
                '1. الأقواس (من الداخل للخارج)',
                '2. الأسس',
                '3. الضرب والقسمة (من اليسار لليمين)',
                '4. الجمع والطرح (من اليسار لليمين)'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '3 + 4 × 2 = 3 + 8 = 11 (ليس 14)',
                '(3 + 4) × 2 = 7 × 2 = 14',
                '2 + 3² = 2 + 9 = 11',
                '12 ÷ 3 × 2 = 4 × 2 = 8'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 1-3: خصائص الأعداد',
          icon: '⚙️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الأعداد لها خصائص مهمة تسهل العمليات الجبرية.',
            sections: [
              { title: 'الخاصية التبديلية', type: 'bullets', content: [
                'الجمع: a + b = b + a',
                'الضرب: a × b = b × a'
              ]},
              { title: 'الخاصية التجميعية', type: 'bullets', content: [
                'الجمع: (a + b) + c = a + (b + c)',
                'الضرب: (a × b) × c = a × (b × c)'
              ]},
              { title: 'الخاصية التوزيعية', type: 'formula', content: 'a(b + c) = ab + ac' },
              { title: 'عنصر المحايد', type: 'bullets', content: [
                'الجمع: a + 0 = a',
                'الضرب: a × 1 = a'
              ]},
              { title: 'العنصر المعاكس', type: 'bullets', content: [
                'الجمع: a + (-a) = 0',
                'الضرب: a × (1/a) = 1 (عندما a ≠ 0)'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 1-4: خاصية التوزيع',
          icon: '',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'خاصية التوزيع تسمح لنا بتوزيع الضرب على الجمع أو الطرح.',
            sections: [
              { title: 'الصيغة الأساسية', type: 'formula', content: 'a(b + c) = ab + ac' },
              { title: 'أمثلة', type: 'bullets', content: [
                '3(x + 5) = 3x + 15',
                '2(4y - 7) = 8y - 14',
                '-5(a + 3) = -5a - 15',
                'x(x + 2) = x² + 2x'
              ]},
              { title: 'تبسيط التعابير', type: 'bullets', content: [
                'نوزع أولاً',
                'نجمع الحدود المتشابهة',
                'مثال: 2(x + 3) + 4(x - 1) = 2x + 6 + 4x - 4 = 6x + 2'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 1-5: المعادلات',
          icon: '⚖️',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المعادلة هي عبارة رياضية تحتوي على علامة التساوي.',
            sections: [
              { title: 'تعريف المعادلة', type: 'text', content: 'عبارة تحتوي على =، مثل: 2x + 3 = 7' },
              { title: 'الحل', type: 'bullets', content: [
                'القيمة التي تجعل المعادلة صحيحة',
                'نعوض بها للتحقق'
              ]},
              { title: 'خواص المساواة', type: 'bullets', content: [
                'الجمع: إذا a = b فإن a + c = b + c',
                'الطرح: إذا a = b فإن a - c = b - c',
                'الضرب: إذا a = b فإن a × c = b × c',
                'القسمة: إذا a = b فإن a/c = b/c (عندما c ≠ 0)'
              ]},
              { title: 'خطوات الحل', type: 'bullets', content: [
                '1. نبسط الطرفين',
                '2. نجمع الحدود المتشابهة',
                '3. نعزل المتغير',
                '4. نتحقق من الحل'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'x + 5 = 12 ⇒ x = 7',
                '3x = 15 ⇒ x = 5',
                '2x + 3 = 11 ⇒ 2x = 8 ⇒ x = 4'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 1-6: العلاقات',
          icon: '📊',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'العلاقة هي مجموعة من الأزواج المرتبة.',
            sections: [
              { title: 'الزوج المرتب', type: 'formula', content: '(x, y) حيث x هو الإحداثي السيني و y هو الصادي' },
              { title: 'المجال', type: 'bullets', content: [
                'مجموعة جميع قيم x',
                'الإحداثيات الأولى'
              ]},
              { title: 'المدى', type: 'bullets', content: [
                'مجموعة جميع قيم y',
                'الإحداثيات الثانية'
              ]},
              { title: 'تمثيل العلاقة', type: 'bullets', content: [
                'جدول',
                'رسم بياني',
                'مجموعة أزواج مرتبة',
                'معادلة'
              ]},
              { title: 'مثال', type: 'bullets', content: [
                '{(1, 2), (3, 4), (5, 6)}',
                'المجال: {1, 3, 5}',
                'المدى: {2, 4, 6}'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'الدرس 1-7: الدوال',
          icon: 'ƒ',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.7/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.7-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة هي علاقة خاصة تربط كل عنصر في المجال بعنصر واحد فقط في المدى.',
            sections: [
              { title: 'تعريف الدالة', type: 'bullets', content: [
                'كل x يقابل y واحدة فقط',
                'اختبار الخط الرأسي: إذا قطع الخط الرأسي المنحنى في أكثر من نقطة، فهي ليست دالة'
              ]},
              { title: 'الترميز الدالي', type: 'formula', content: 'f(x) = 2x + 3' },
              { title: 'تقييم الدالة', type: 'bullets', content: [
                'نعوض قيمة x',
                'إذا f(x) = 2x + 3، فإن f(4) = 2(4) + 3 = 11'
              ]},
              { title: 'أمثلة على الدوال', type: 'bullets', content: [
                '{(1, 2), (2, 4), (3, 6)} دالة',
                '{(1, 2), (1, 3), (2, 4)} ليست دالة (1 لها قيمتان)'
              ]}
            ]
          }
        },
        {
          id: 8,
          title: 'الدرس 1-8: تفسير التمثيل البياني للدالة',
          icon: '📈',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.8/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-1.8-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'التمثيل البياني يساعدنا على فهم سلوك الدالة.',
            sections: [
              { title: 'التقاطعات', type: 'bullets', content: [
                'تقاطع y: حيث x = 0',
                'تقاطع x: حيث y = 0'
              ]},
              { title: 'الزيادة والنقصان', type: 'bullets', content: [
                'متزايدة: y تزداد عندما x يزداد',
                'متناقصة: y تنقص عندما x يزداد',
                'ثابتة: y لا تتغير'
              ]},
              { title: 'الإشارة', type: 'bullets', content: [
                'موجبة: فوق محور x',
                'سالبة: تحت محور x'
              ]},
              { title: 'القيم العظمى والصغرى', type: 'bullets', content: [
                'أعلى نقطة: قيمة عظمى',
                'أدنى نقطة: قيمة صغرى'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 2,
      name: 'الوحدة الثانية: المعادلات الخطية',
      icon: '📐',
      color: 'from-green-500 to-teal-600',
      description: 'دراسة كتابة وحل المعادلات الخطية، النسب، التناسب، والنسبة المئوية.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 2-1: كتابة المعادلات',
          icon: '✍️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نترجم المسائل اللفظية إلى معادلات جبرية.',
            sections: [
              { title: 'كلمات مفتاحية', type: 'bullets', content: [
                'مجموع، زيادة: +',
                'فرق، نقصان: -',
                'حاصل ضرب، ضعف: ×',
                'حاصل قسمة، نصف: ÷',
                'يساوي، يصبح: ='
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'عدد زاد على 5: x + 5',
                'ضعف عدد ناقص 3: 2x - 3',
                'مجموع عددين متتاليين: x + (x+1)',
                'ثلاثة أمثال عدد زائد 7: 3x + 7'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 2-2: حل معادلات الخطوة الواحدة',
          icon: '1️⃣',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نحل المعادلات التي تحتاج لعملية واحدة.',
            sections: [
              { title: 'معادلات الجمع', type: 'bullets', content: [
                'x + 5 = 12',
                'نطرح 5 من الطرفين',
                'x = 7'
              ]},
              { title: 'معادلات الطرح', type: 'bullets', content: [
                'x - 3 = 8',
                'نضيف 3 للطرفين',
                'x = 11'
              ]},
              { title: 'معادلات الضرب', type: 'bullets', content: [
                '3x = 15',
                'نقسم على 3',
                'x = 5'
              ]},
              { title: 'معادلات القسمة', type: 'bullets', content: [
                'x/4 = 6',
                'نضرب في 4',
                'x = 24'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 2-3: حل معادلات متعددة الخطوات',
          icon: '🔢',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نحل المعادلات التي تحتاج لأكثر من خطوتين.',
            sections: [
              { title: 'الخطوات', type: 'bullets', content: [
                '1. نوزع إذا لزم الأمر',
                '2. نجمع الحدود المتشابهة',
                '3. ننقل المتغيرات لطرف والثوابت لطرف',
                '4. نحل للمتغير'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '2x + 5 = 13 ⇒ 2x = 8 ⇒ x = 4',
                '3(x - 2) = 15 ⇒ 3x - 6 = 15 ⇒ 3x = 21 ⇒ x = 7',
                '4x + 3 = 2x + 11 ⇒ 2x = 8 ⇒ x = 4'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 2-4: حل معادلات متغير في كل طرف',
          icon: '⚖️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'عندما يكون المتغير في الطرفين، نجمع المتغيرات في طرف واحد.',
            sections: [
              { title: 'الاستراتيجية', type: 'bullets', content: [
                'ننقل جميع المتغيرات لطرف واحد',
                'ننقل الثوابت للطرف الآخر',
                'نحل للمتغير'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '3x + 5 = x + 11 ⇒ 2x = 6 ⇒ x = 3',
                '5x - 2 = 2x + 10 ⇒ 3x = 12 ⇒ x = 4',
                '7x + 3 = 4x - 9 ⇒ 3x = -12 ⇒ x = -4'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 2-5: حل المعادلات التي تحتوي قيمة مطلقة',
          icon: '| |',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'القيمة المطلقة هي المسافة من الصفر، دائماً موجبة.',
            sections: [
              { title: 'تعريف القيمة المطلقة', type: 'bullets', content: [
                '|x| = x إذا x ≥ 0',
                '|x| = -x إذا x < 0',
                '|5| = 5 و |-5| = 5'
              ]},
              { title: 'حل المعادلات', type: 'bullets', content: [
                '|x| = a ⇒ x = a أو x = -a',
                '|x - 3| = 5 ⇒ x - 3 = 5 أو x - 3 = -5',
                'x = 8 أو x = -2'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '|x| = 7 ⇒ x = 7 أو x = -7',
                '|2x + 1| = 9 ⇒ 2x + 1 = 9 أو 2x + 1 = -9',
                'x = 4 أو x = -5'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 2-6: النسب والتناسب',
          icon: '📊',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'النسبة هي مقارنة بين كميتين. التناسب هو تساوي نسبتين.',
            sections: [
              { title: 'النسبة', type: 'formula', content: 'a/b أو a:b' },
              { title: 'التناسب', type: 'formula', content: 'a/b = c/d' },
              { title: 'الضرب التبادلي', type: 'formula', content: 'إذا a/b = c/d فإن ad = bc' },
              { title: 'أمثلة', type: 'bullets', content: [
                'نسبة الأولاد للبنات: 3/5',
                '2/3 = 4/6 (لأن 2×6 = 3×4)',
                'x/5 = 3/15 ⇒ x = 1'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'الدرس 2-7: النسبة المئوية للتغيير',
          icon: '%',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.7/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.7-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'النسبة المئوية للتغيير تقيس مقدار الزيادة أو النقصان.',
            sections: [
              { title: 'صيغة النسبة المئوية', type: 'formula', content: 'النسبة = (التغيير / الأصل) × 100%' },
              { title: 'الزيادة المئوية', type: 'bullets', content: [
                'إذا زاد السعر من 50 إلى 60',
                'التغيير = 10',
                'النسبة = (10/50) × 100% = 20%'
              ]},
              { title: 'النقصان المئوي', type: 'bullets', content: [
                'إذا نقص السعر من 80 إلى 60',
                'التغيير = 20',
                'النسبة = (20/80) × 100% = 25%'
              ]}
            ]
          }
        },
        {
          id: 8,
          title: 'الدرس 2-8: المعادلات الحرفية والتحليل البعدي',
          icon: '🔤',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.8/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.8-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المعادلات الحرفية تحتوي على أكثر من متغير.',
            sections: [
              { title: 'حل المعادلات الحرفية', type: 'bullets', content: [
                'نعزل المتغير المطلوب',
                'مثال: P = 2l + 2w، نجد l',
                'P - 2w = 2l',
                'l = (P - 2w)/2'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'A = lw ⇒ l = A/w',
                'd = rt ⇒ t = d/r',
                'V = lwh ⇒ h = V/(lw)'
              ]}
            ]
          }
        },
        {
          id: 9,
          title: 'الدرس 2-9: المتوسط الحسابي الموزون',
          icon: '⚖️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.9/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-2.9-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المتوسط الموزون يأخذ في الاعتبار أهمية كل قيمة.',
            sections: [
              { title: 'الصيغة', type: 'formula', content: 'المتوسط = Σ(القيمة × الوزن) / Σالوزن' },
              { title: 'أمثلة', type: 'bullets', content: [
                'إذا كان لدينا اختباران وزنهما 40% و 60% ودرجاتهما 80 و 90',
                'المتوسط = (80 × 0.4) + (90 × 0.6) = 32 + 54 = 86'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 3,
      name: 'الوحدة الثالثة: الدوال الخطية',
      icon: '📈',
      color: 'from-purple-500 to-pink-600',
      description: 'دراسة تمثيل وحل الدوال الخطية بيانياً، الميل، ومعدل التغير.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 3-1: تمثيل المعادلات الخطية بيانياً',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المعادلة الخطية تمثل بخط مستقيم على المستوى الإحداثي.',
            sections: [
              { title: 'طريقة الجدول', type: 'bullets', content: [
                'نختار قيم لـ x',
                'نحسب قيم y',
                'نرسم النقاط',
                'نوصلها بخط'
              ]},
              { title: 'مثال', type: 'bullets', content: [
                'y = 2x + 1',
                'x = 0 ⇒ y = 1',
                'x = 1 ⇒ y = 3',
                'x = 2 ⇒ y = 5'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 3-2: حل المعادلات الخطية بالتمثيل البياني',
          icon: '📐',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نحل المعادلات بإيجاد تقاطع الخط مع محور x.',
            sections: [
              { title: 'طريقة الحل', type: 'bullets', content: [
                'نرسم الدالة',
                'نجد نقطة تقاطع الخط مع محور x',
                'إحداثي x هو الحل'
              ]},
              { title: 'مثال', type: 'bullets', content: [
                '2x + 4 = 0',
                'نرسم y = 2x + 4',
                'التقاطع مع x عند x = -2',
                'الحل: x = -2'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 3-3: معدل التغير والميل',
          icon: '📉',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الميل يقيس معدل التغير في y بالنسبة للتغير في x.',
            sections: [
              { title: 'صيغة الميل', type: 'formula', content: 'm = (y₂ - y₁)/(x₂ - x₁)' },
              { title: 'أنواع الميل', type: 'bullets', content: [
                'موجب: الخط صاعد',
                'سالب: الخط هابط',
                'صفر: خط أفقي',
                'غير معرف: خط رأسي'
              ]},
              { title: 'مثال', type: 'bullets', content: [
                'النقطتان (2, 3) و (5, 9)',
                'm = (9-3)/(5-2) = 2'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 3-4: التغير الطردي',
          icon: '∝',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'التغير الطردي يعني أن y تتناسب طردياً مع x.',
            sections: [
              { title: 'الصيغة', type: 'formula', content: 'y = kx حيث k ثابت التناسب' },
              { title: 'الخصائص', type: 'bullets', content: [
                'يمر بنقطة الأصل (0, 0)',
                'الميل = k',
                'إذا زاد x، تزداد y'
              ]},
              { title: 'مثال', type: 'bullets', content: [
                'إذا y = 10 عندما x = 2',
                'k = y/x = 10/2 = 5',
                'المعادلة: y = 5x'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 3-5: المتتاليات الحسابية كدوال خطية',
          icon: '🔢',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المتتالية الحسابية لها فرق مشترك ثابت.',
            sections: [
              { title: 'الصيغة', type: 'formula', content: 'a_n = a₁ + (n-1)d' },
              { title: 'الفرق المشترك', type: 'bullets', content: [
                'd = الفرق بين حدين متتاليين',
                'مثال: 2, 5, 8, 11,... الفرق = 3'
              ]},
              { title: 'علاقتها بالدوال الخطية', type: 'bullets', content: [
                'المتتالية دالة خطية متقطعة',
                'الميل = الفرق المشترك',
                'y = mx + b'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 3-6: العلاقات الخطية وغير الخطية',
          icon: '📊',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-3.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نميز بين العلاقات الخطية (خط مستقيم) وغير الخطية (منحنى).',
            sections: [
              { title: 'العلاقة الخطية', type: 'bullets', content: [
                'تمثل بخط مستقيم',
                'معدل التغير ثابت',
                'الصيغة: y = mx + b'
              ]},
              { title: 'العلاقة غير الخطية', type: 'bullets', content: [
                'تمثل بمنحنى',
                'معدل التغير متغير',
                'أمثلة: y = x²، y = 2ˣ'
              ]}
            ]
          }
        }
      ]
    },
    {
      id: 4,
      name: 'الوحدة الرابعة: معادلات الدوال الخطية',
      icon: '📐',
      color: 'from-orange-500 to-red-600',
      description: 'دراسة صيغ معادلات الدوال الخطية، المستقيمات المتوازية والمتعامدة، والدوال العكسية.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 4-1: تمثيل المعادلات بصيغة الميل والمقطع',
          icon: '📈',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.1/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'صيغة الميل والمقطع هي y = mx + b.',
            sections: [
              { title: 'الصيغة', type: 'formula', content: 'y = mx + b' },
              { title: 'المكونات', type: 'bullets', content: [
                'm: الميل',
                'b: تقاطع y'
              ]},
              { title: 'الرسم', type: 'bullets', content: [
                'نبدأ من النقطة (0, b)',
                'نستخدم الميل للرسم',
                'مثال: y = 2x + 3، نبدأ من (0, 3)، الميل 2 يعني صعود 2 لليمين 1'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 4-2: كتابة المعادلات بصيغة الميل والمقطع',
          icon: '✍️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.2/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نكتب المعادلة من معلومات معطاة.',
            sections: [
              { title: 'من الميل وتقاطع y', type: 'bullets', content: [
                'm = 3، b = -2',
                'y = 3x - 2'
              ]},
              { title: 'من الرسم', type: 'bullets', content: [
                'نجد الميل من الرسم',
                'نجد تقاطع y',
                'نكتب المعادلة'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 4-3: كتابة المعادلات بصيغة النقطة والميل',
          icon: '📝',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.3/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'صيغة النقطة والميل تستخدم عندما نعرف نقطة وميل.',
            sections: [
              { title: 'الصيغة', type: 'formula', content: 'y - y₁ = m(x - x₁)' },
              { title: 'مثال', type: 'bullets', content: [
                'm = 2، النقطة (3, 5)',
                'y - 5 = 2(x - 3)',
                'y - 5 = 2x - 6',
                'y = 2x - 1'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 4-4: المستقيمات المتوازية والمتعامدة',
          icon: '∥',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.4/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'المستقيمات المتوازية لها نفس الميل. المتعامدة حاصل ضرب ميليهما = -1.',
            sections: [
              { title: 'المتوازية', type: 'bullets', content: [
                'نفس الميل',
                'm₁ = m₂',
                'مثال: y = 2x + 3 و y = 2x - 5'
              ]},
              { title: 'المتعامدة', type: 'bullets', content: [
                'm₁ × m₂ = -1',
                'm₂ = -1/m₁',
                'مثال: y = 2x + 1 و y = -½x + 3'
              ]}
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 4-5: الانحدار ومستقيمات التواءمة الوسطية',
          icon: '📊',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.5/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نستخدم الانحدار لإيجاد أفضل خط يصف البيانات.',
            sections: [
              { title: 'مخطط التشتت', type: 'bullets', content: [
                'نرسم النقاط',
                'نلاحظ العلاقة'
              ]},
              { title: 'خط التواءمة', type: 'bullets', content: [
                'أفضل خط يمر بالبيانات',
                'يمكن استخدامه للتنبؤ'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 4-6: الدوال الخطية العكسية',
          icon: '↔️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.6/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدالة العكسية تعكس تأثير الدالة الأصلية.',
            sections: [
              { title: 'إيجاد الدالة العكسية', type: 'bullets', content: [
                'نبدل x و y',
                'نحل لـ y',
                'مثال: y = 2x + 3',
                'x = 2y + 3',
                'y = (x - 3)/2',
                'f⁻¹(x) = (x - 3)/2'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'الدرس 4-7: الدوال الخطية الخاصة',
          icon: '📐',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.7/',
          examUrl: 'https://hesham-afandi.github.io/9Adv-Bri-math-T1-4.7-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'الدوال الثابتة ودالة الهوية.',
            sections: [
              { title: 'الدالة الثابتة', type: 'bullets', content: [
                'y = c',
                'خط أفقي',
                'ميلها = 0'
              ]},
              { title: 'دالة الهوية', type: 'bullets', content: [
                'y = x',
                'خط يمر بالأصل',
                'ميلها = 1'
              ]}
            ]
          }
        }
      ]
    }
  ]
};
