import { GrammarLesson } from '../types/arabic';

export const GRAMMAR_LESSONS: GrammarLesson[] = [
  {
    id: 'sun-moon',
    title: 'Sun & Moon Letters (الحروف الشمسية والقمرية)',
    arabicTitle: 'الحُرُوف الشَّمْسِيَّة والقَمَرِيَّة',
    level: 'Beginner',
    summary: 'When the definite article "Al-" (الـ) is added, the letter "L" assimilates with 14 Sun letters, but remains clearly pronounced with 14 Moon letters.',
    explanation: 'The 28 Arabic letters are divided equally into 14 Sun Letters (hurūf shamsiyyah) and 14 Moon Letters (hurūf qamariyyah). When attached to "Al-", Sun letters cause the "L" sound to assimilate and become doubled (marked with a shaddah ّ), while Moon letters preserve the clear "L" sound.',
    keyRules: [
      'Sun letters (14): ت, ث, د, ذ, ر, ز, س, ش, ص, ض, ط, ظ, ل, ن',
      'Rule for Sun letters: ال + شَمْس = اَلشَّمْس (Ash-shams, NOT al-shams)',
      'Moon letters (14): أ, ب, ج, ح, خ, ع, غ, ف, ق, ك, م, هـ, و, ي',
      'Rule for Moon letters: ال + قَمَر = اَلْقَمَر (Al-qamar - clear L sound)'
    ],
    examples: [
      { arabic: 'اَلشَّمْسُ مُشْرِقَة', transliteration: 'Ash-shamsu mushriqah', english: 'The sun is shining', notes: 'Sh is Sun letter: "L" assimilates into "sh"' },
      { arabic: 'اَلْقَمَرُ مُنِير', transliteration: 'Al-qamaru munīr', english: 'The moon is luminous', notes: 'Q is Moon letter: "L" is pronounced distinctly' },
      { arabic: 'اَلرَّجُلُ فِي البَيْت', transliteration: 'Ar-rajulu fi l-bayt', english: 'The man is in the house', notes: 'R is Sun letter (ar-rajul), B is Moon letter (al-bayt)' }
    ]
  },
  {
    id: 'sentence-types',
    title: 'Nominal vs Verbal Sentences (الجملة الاسمية والفعلية)',
    arabicTitle: 'الجُمْلَة الاسْمِيَّة والجُمْلَة الفِعْلِيَّة',
    level: 'Beginner',
    summary: 'Arabic sentences are either Nominal (starts with a noun, having Mubtada and Khabar) or Verbal (starts with a verb, having Fi‘l and Fā‘il).',
    explanation: 'Unlike English, Arabic does not require an auxiliary verb like "is" or "are" in the present tense! A nominal sentence pairs a Subject (Mubtada) directly with a Predicate (Khabar). A verbal sentence starts with the action (Verb) followed by the Subject (Doer).',
    keyRules: [
      'Nominal Sentence: [Mubtada (Subject)] + [Khabar (Predicate)]',
      'In Arabic present tense: "The book is new" is literally "The book [al-kitāb] new [jadīd]" -> اَلْكِتَابُ جَدِيدٌ',
      'Both Mubtada and Khabar usually take the nominative case (Marfū‘ / Dammah ُ or Tanwin Ḍamm ٌ)',
      'Verbal Sentence: [Verb (فعل)] + [Subject (فاعل)] + [Object (مفعول به)]'
    ],
    examples: [
      { arabic: 'اَلْوَلَدُ نَشِيطٌ', transliteration: 'Al-waladu nashīṭun', english: 'The boy is active', notes: 'Nominal sentence (No "is" verb needed)' },
      { arabic: 'كَتَبَ الطَّالِبُ الدَّرْسَ', transliteration: 'Kataba ṭ-ṭālibu d-dars', english: 'The student wrote the lesson', notes: 'Verbal sentence starting with the past verb kataba' },
      { arabic: 'اَلسَّمَاءُ صَافِيَةٌ', transliteration: 'As-samā’u ṣāfiyah', english: 'The sky is clear', notes: 'Subject (feminine) matches predicate gender' }
    ]
  },
  {
    id: 'pronouns',
    title: 'Personal & Attached Pronouns (الضمائر المنفصلة والمتصلة)',
    arabicTitle: 'الضَّمَائِر المُنْفَصِلَة والمُتَّصِلَة',
    level: 'Intermediate',
    summary: 'Independent pronouns (I, you, he, she, we) stand alone. Attached pronouns attach to nouns (showing possession) or verbs (as object).',
    explanation: 'In Arabic, possessive pronouns ("my", "your", "his", "her") attach directly as suffixes onto the end of nouns. For example, kitāb (book) + ī (my) = kitābī (my book).',
    keyRules: [
      'Independent: أَنَا (Anā - I), أَنْتَ (Anta - You m.), أَنْتِ (Anti - You f.), هُوَ (Huwa - He), هِيَ (Hiya - She), نَحْنُ (Naḥnu - We)',
      'Attached to Nouns: ـِي (-ī = my), ـكَ (-ka = your m.), ـكِ (-ki = your f.), ـهُ (-hu = his), ـهَا (-hā = her), ـنَا (-nā = our)',
      'Example: بَيْت (House) -> بَيْتِي (My house), بَيْتُكَ (Your house), بَيْتُهُ (His house)'
    ],
    examples: [
      { arabic: 'أَنَا طَالِبٌ فِي الجَامِعَة', transliteration: 'Anā ṭālibun fī l-jāmi‘ah', english: 'I am a university student', notes: 'Independent subject pronoun "Anā"' },
      { arabic: 'هَذَا كِتَابِي وَذَلِكَ قَلَمُكَ', transliteration: 'Hādhā kitābī wa dhālika qalamuka', english: 'This is my book and that is your pen', notes: 'Attached possessive suffixes -ī and -ka' },
      { arabic: 'هِيَ تَقْرَأُ مَجَلَّتَهَا', transliteration: 'Hiya taqra’u majallatahā', english: 'She reads her magazine', notes: 'Subject pronoun "Hiya" and possessive "-hā"' }
    ]
  },
  {
    id: 'prepositions',
    title: 'Prepositions & Genitive Case (حروف الجر)',
    arabicTitle: 'حُرُوف الجَرّ والاسْم المَجْرُور',
    level: 'Beginner',
    summary: 'Prepositions like "fī" (in), "‘alā" (on), "min" (from), and "ilā" (to) cause the following noun to enter the genitive case (Majrūr, marked by Kasrah ِ).',
    explanation: 'Whenever an Arabic noun follows a preposition (ḥarf jarr), the ending vowel of the noun changes into a Kasrah (or Kasratayn if indefinite). This is the hallmark of the genitive case (Al-Jarr).',
    keyRules: [
      'Common prepositions: فِي (in), عَلَى (on), مِنْ (from), إِلَى (to), مَعَ (with), بِـ (with/by), لِـ (for/to)',
      'Grammar effect: Al-baytu (The house) -> فِي البَيْتِ (fī l-bayti - with kasrah at end)',
      'Indefinite: Qalamun (A pen) -> عَلَى طَاوِلَةٍ (on a table - with double kasrah)'
    ],
    examples: [
      { arabic: 'اَلْقَلَمُ عَلَى المَكْتَبِ', transliteration: 'Al-qalamu ‘alā l-maktabi', english: 'The pen is on the desk', notes: 'Notice kasrah on -maktabi due to ‘alā' },
      { arabic: 'خَرَجَ المُعَلِّمُ مِنَ المَدْرَسَةِ', transliteration: 'Kharaja l-mu‘allimu mina l-madrasati', english: 'The teacher left from the school', notes: 'Preposition "min" forces genitive case' }
    ]
  }
];
