import { Curriculum } from '../../types';

export const math10General1: Curriculum = {
  isEnglish: false,
  units: [
    {
      id: 1,
      name: 'الوحدة الأولى: التعابير والمعادلات التربيعية',
      icon: '📊',
      color: 'from-blue-500 to-indigo-600',
      description: 'دراسة كثيرات الحدود، العمليات عليها، والتحليل إلى العوامل، وحل المعادلات التربيعية.',
      lessons: [
        {
          id: 1,
          title: 'الدرس 1-1: جمع كثيرات الحدود وطرحها',
          icon: '➕',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.1/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.1-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'كثيرات الحدود هي تعابير جبرية مكونة من حدود. نتعلم في هذا الدرس جمع وطرح كثيرات الحدود.',
            sections: [
              { title: 'كثير الحدود', type: 'formula', content: 'P(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀' },
              { title: 'الحدود المتشابهة', type: 'bullets', content: [
                'لها نفس المتغير ونفس الأس',
                'نجمع أو نطرح معاملاتها فقط',
                'مثال: 3x² + 5x² = 8x²'
              ]},
              { title: 'الدرجة', type: 'bullets', content: [
                'أكبر أس في كثير الحدود',
                'تحدد نوع كثير الحدود',
                'ثابت (0)، خطي (1)، تربيعي (2)، تكعيبي (3)'
              ]},
              { title: 'الجمع', type: 'bullets', content: [
                'نرتب الحدود تنازلياً',
                'نجمع الحدود المتشابهة',
                '(3x² + 2x + 1) + (2x² - x + 3) = 5x² + x + 4'
              ]},
              { title: 'الطرح', type: 'bullets', content: [
                'نوزع الإشارة السالبة',
                'نغير إشارة كل حد في المطروح',
                'نجمع الحدود المتشابهة'
              ]}
            ]
          }
        },
        {
          id: 2,
          title: 'الدرس 1-2: ضرب كثيرة حدود في أحادية الحد',
          icon: '✖️',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.2/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.2-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'عند ضرب أحادية حد في كثيرة حدود، نستخدم الخاصية التوزيعية.',
            sections: [
              { title: 'الخاصية التوزيعية', type: 'formula', content: 'a(b + c) = ab + ac' },
              { title: 'قوانين الأسس', type: 'bullets', content: [
                'xᵐ · xⁿ = xᵐ⁺ⁿ',
                '(xᵐ)ⁿ = xᵐⁿ',
                '(xy)ⁿ = xyⁿ'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '3x(2x² + 5x - 1) = 6x³ + 15x² - 3x',
                '-2x²(3x³ - 4x + 7) = -6x⁵ + 8x³ - 14x²',
                '5(2x² - 3x + 4) = 10x² - 15x + 20'
              ]},
              { title: 'الخطوات', type: 'bullets', content: [
                '1. نضرب الأحادية في كل حد',
                '2. نضرب المعاملات',
                '3. نجمع الأسس للمتغيرات المتشابهة',
                '4. نكتب الناتج'
              ]}
            ]
          }
        },
        {
          id: 3,
          title: 'الدرس 1-3: ضرب كثيرات الحدود',
          icon: '🔢',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.3/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.3-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'عند ضرب كثيرات حدود، نضرب كل حد في الأول بكل حد في الثاني.',
            sections: [
              { title: 'ضرب حدين في حدين', type: 'formula', content: '(a + b)(c + d) = ac + ad + bc + bd' },
              { title: 'طريقة FOIL', type: 'bullets', content: [
                'F: First (الأول × الأول)',
                'O: Outer (الخارجي × الخارجي)',
                'I: Inner (الداخلي × الداخلي)',
                'L: Last (الأخير × الأخير)'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '(x + 3)(x + 5) = x² + 8x + 15',
                '(2x - 1)(x + 4) = 2x² + 7x - 4',
                '(x + 2)(x² + 3x - 1) = x³ + 5x² + 5x - 2'
              ]},
              { title: 'الخطوات', type: 'bullets', content: [
                '1. نضرب كل حد في الأول بكل حد في الثاني',
                '2. نجمع الحدود المتشابهة',
                '3. نرتب الناتج تنازلياً'
              ]}
            ]
          }
        },
        {
          id: 4,
          title: 'الدرس 1-4: نواتج الضرب الخاصة',
          icon: '🎯',
          duration: '50 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.4/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.4-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'هناك صيغ خاصة لضرب كثيرات الحدود تظهر بشكل متكرر.',
            sections: [
              { title: 'مربع مجموع', type: 'formula', content: '(a + b)² = a² + 2ab + b²' },
              { title: 'مربع فرق', type: 'formula', content: '(a - b)² = a² - 2ab + b²' },
              { title: 'فرق مربعين', type: 'formula', content: '(a + b)(a - b) = a² - b²' },
              { title: 'أمثلة', type: 'bullets', content: [
                '(x + 5)² = x² + 10x + 25',
                '(2x - 3)² = 4x² - 12x + 9',
                '(x + 4)(x - 4) = x² - 16',
                '(3x + 2)² = 9x² + 12x + 4'
              ]},
              { title: 'مكعب مجموع', type: 'formula', content: '(a + b)³ = a³ + 3a²b + 3ab² + b³' },
              { title: 'مكعب فرق', type: 'formula', content: '(a - b)³ = a³ - 3a²b + 3ab² - b³' }
            ]
          }
        },
        {
          id: 5,
          title: 'الدرس 1-5: استخدام خاصية التوزيع',
          icon: '📐',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.5/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.5-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'خاصية التوزيع تساعدنا في التحليل إلى العوامل.',
            sections: [
              { title: 'التحليل باستخدام التوزيع', type: 'bullets', content: [
                'نبحث عن عامل مشترك',
                'نخرجه خارج القوس',
                'نبسط ما داخل القوس'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '6x² + 9x = 3x(2x + 3)',
                '12x³ - 8x² = 4x²(3x - 2)',
                '15x²y + 10xy² = 5xy(3x + 2y)'
              ]},
              { title: 'التحليل بالتجميع', type: 'bullets', content: [
                'نقسم إلى مجموعتين',
                'نخرج عامل مشترك من كل مجموعة',
                'نخرج العامل المشترك النهائي'
              ]},
              { title: 'مثال على التجميع', type: 'bullets', content: [
                'ax + ay + bx + by = (a + b)(x + y)',
                '2x² + 4x + 3x + 6 = (2x + 3)(x + 2)'
              ]}
            ]
          }
        },
        {
          id: 6,
          title: 'الدرس 1-6: حل x² + bx + c = 0',
          icon: '🎯',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.6/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.6-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نحل المعادلات التربيعية بالتحليل إلى عوامل.',
            sections: [
              { title: 'الطريقة', type: 'bullets', content: [
                'نبحث عن عددين حاصل ضربهما c ومجموعهما b',
                'نحلل إلى عوامل',
                'نساوي كل عامل بالصفر',
                'نحل كل معادلة'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                'x² + 5x + 6 = 0 ⇒ (x + 2)(x + 3) = 0 ⇒ x = -2 أو x = -3',
                'x² - 7x + 12 = 0 ⇒ (x - 3)(x - 4) = 0 ⇒ x = 3 أو x = 4',
                'x² + 2x - 15 = 0 ⇒ (x + 5)(x - 3) = 0 ⇒ x = -5 أو x = 3'
              ]},
              { title: 'خاصية الضرب الصفري', type: 'formula', content: 'إذا ab = 0 فإن a = 0 أو b = 0' },
              { title: 'خطوات الحل', type: 'bullets', content: [
                '1. نكتب المعادلة على الصورة القياسية',
                '2. نحلل الطرف الأيسر',
                '3. نساوي كل عامل بالصفر',
                '4. نوجد الحلول'
              ]}
            ]
          }
        },
        {
          id: 7,
          title: 'الدرس 1-7: حل ax² + bx + c = 0',
          icon: '🔍',
          duration: '55 min',
          lessonUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.7/',
          examUrl: 'https://hesham-afandi.github.io/10Jen-math-T1-1.7-exam/',
          lessonTitle: '📖 شرح الدرس',
          examTitle: '📝 اختبر نفسك',
          content: {
            intro: 'نحل المعادلات التربيعية الأكثر تعقيداً بالتحليل إلى عوامل عندما يكون معامل الحد التربيعي لا يساوي 1.',
            sections: [
              { title: 'طريقة المقص أو التجميع', type: 'bullets', content: [
                'نبحث عن عددين حاصل ضربهما ac ومجموعهما b',
                'نعيد كتابة الحد الأوسط bx باستخدام هذين العددين',
                'نحلل بالتجميع'
              ]},
              { title: 'أمثلة', type: 'bullets', content: [
                '2x² + 5x + 3 = 0 ⇒ (2x + 3)(x + 1) = 0 ⇒ x = -1.5 أو x = -1',
                '3x² - 5x - 2 = 0 ⇒ (3x + 1)(x - 2) = 0 ⇒ x = -1/3 أو x = 2'
              ]}
            ]
          }
        }
      ]
    }
  ]
};
