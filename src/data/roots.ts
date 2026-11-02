import { TrilateralRoot } from '../types/arabic';

export const ROOTS_DATABASE: TrilateralRoot[] = [
  {
    root: 'ك - ت - ب',
    rootLetters: ['ك', 'ت', 'ب'],
    transliteration: 'K - T - B',
    coreMeaning: 'Writing, recording, inscribing, books',
    category: 'Knowledge & Literacy',
    derivations: [
      { word: 'كَتَبَ', transliteration: 'kataba', meaning: 'He wrote', formOrPattern: 'Form I (Past Verb)', partOfSpeech: 'Verb' },
      { word: 'يَكْتُبُ', transliteration: 'yaktubu', meaning: 'He writes / is writing', formOrPattern: 'Form I (Present Verb)', partOfSpeech: 'Verb' },
      { word: 'كِتَاب', transliteration: 'kitāb', meaning: 'Book', formOrPattern: 'Fi‘āl (Noun)', partOfSpeech: 'Noun' },
      { word: 'كَاتِب', transliteration: 'kātib', meaning: 'Writer / author / clerk', formOrPattern: 'Fā‘il (Active Participle)', partOfSpeech: 'Noun' },
      { word: 'مَكْتَب', transliteration: 'maktab', meaning: 'Office / desk / study room', formOrPattern: 'Maf‘al (Noun of Place)', partOfSpeech: 'Noun' },
      { word: 'مَكْتَبَة', transliteration: 'maktabah', meaning: 'Library / bookstore', formOrPattern: 'Maf‘alah (Noun of Place)', partOfSpeech: 'Noun' },
      { word: 'مَكْتُوب', transliteration: 'maktūb', meaning: 'Written / destiny / letter', formOrPattern: 'Maf‘ūl (Passive Participle)', partOfSpeech: 'Adjective/Noun' }
    ]
  },
  {
    root: 'ع - ل - م',
    rootLetters: ['ع', 'ل', 'م'],
    transliteration: '‘ - L - M',
    coreMeaning: 'Knowledge, knowing, science, marking',
    category: 'Knowledge & Literacy',
    derivations: [
      { word: 'عَلِمَ', transliteration: '‘alima', meaning: 'He knew / found out', formOrPattern: 'Form I (Verb)', partOfSpeech: 'Verb' },
      { word: 'عَلَّمَ', transliteration: '‘allama', meaning: 'He taught / trained', formOrPattern: 'Form II (Causative Verb)', partOfSpeech: 'Verb' },
      { word: 'تَعَلَّمَ', transliteration: 'ta‘allama', meaning: 'He learned / studied', formOrPattern: 'Form V (Reflexive Verb)', partOfSpeech: 'Verb' },
      { word: 'عِلْم', transliteration: '‘ilm', meaning: 'Knowledge / science', formOrPattern: 'Fi‘l (Verbal Noun)', partOfSpeech: 'Noun' },
      { word: 'عَالِم', transliteration: '‘ālim', meaning: 'Scholar / scientist', formOrPattern: 'Fā‘il (Active Participle)', partOfSpeech: 'Noun' },
      { word: 'مُعَلِّم', transliteration: 'mu‘allim', meaning: 'Teacher / instructor', formOrPattern: 'Mufa‘‘il (Participle Form II)', partOfSpeech: 'Noun' },
      { word: 'مَعْلُومَات', transliteration: 'ma‘lūmāt', meaning: 'Information / data', formOrPattern: 'Maf‘ūl (Plural Noun)', partOfSpeech: 'Noun' }
    ]
  },
  {
    root: 'س - ل - م',
    rootLetters: ['س', 'ل', 'م'],
    transliteration: 'S - L - M',
    coreMeaning: 'Peace, safety, wholeness, submission, greeting',
    category: 'Society & Spiritual',
    derivations: [
      { word: 'سَلِمَ', transliteration: 'salima', meaning: 'He was safe / secure', formOrPattern: 'Form I (Verb)', partOfSpeech: 'Verb' },
      { word: 'سَلَام', transliteration: 'salām', meaning: 'Peace / greeting', formOrPattern: 'Fa‘āl (Noun)', partOfSpeech: 'Noun' },
      { word: 'سَلَّمَ', transliteration: 'sallama', meaning: 'He greeted / handed over', formOrPattern: 'Form II (Verb)', partOfSpeech: 'Verb' },
      { word: 'أَسْلَمَ', transliteration: 'aslama', meaning: 'He submitted / embraced Islam', formOrPattern: 'Form IV (Verb)', partOfSpeech: 'Verb' },
      { word: 'إِسْلَام', transliteration: 'islām', meaning: 'Submission to God / Islam', formOrPattern: 'If‘āl (Verbal Noun IV)', partOfSpeech: 'Noun' },
      { word: 'مُسْلِم', transliteration: 'muslim', meaning: 'One who submits / Muslim', formOrPattern: 'Muf‘il (Participle Form IV)', partOfSpeech: 'Noun' },
      { word: 'سَلَامَة', transliteration: 'salāmah', meaning: 'Safety / wellness / health', formOrPattern: 'Fa‘ālah (Noun)', partOfSpeech: 'Noun' }
    ]
  },
  {
    root: 'د - ر - س',
    rootLetters: ['د', 'ر', 'س'],
    transliteration: 'D - R - S',
    coreMeaning: 'Studying, examining, teaching, lessons',
    category: 'Education & Study',
    derivations: [
      { word: 'دَرَسَ', transliteration: 'darasa', meaning: 'He studied', formOrPattern: 'Form I (Verb)', partOfSpeech: 'Verb' },
      { word: 'دَرَّسَ', transliteration: 'darrasa', meaning: 'He taught / lectured', formOrPattern: 'Form II (Verb)', partOfSpeech: 'Verb' },
      { word: 'دَرْس', transliteration: 'dars', meaning: 'Lesson / lecture', formOrPattern: 'Fa‘l (Noun)', partOfSpeech: 'Noun' },
      { word: 'دِرَاسَة', transliteration: 'dirāsah', meaning: 'Study / research / course', formOrPattern: 'Fi‘ālah (Verbal Noun)', partOfSpeech: 'Noun' },
      { word: 'مُدَرِّس', transliteration: 'mudarris', meaning: 'School teacher / lecturer', formOrPattern: 'Mufa‘‘il (Active Participle II)', partOfSpeech: 'Noun' },
      { word: 'مَدْرَسَة', transliteration: 'madrasah', meaning: 'School', formOrPattern: 'Maf‘alah (Noun of Place)', partOfSpeech: 'Noun' }
    ]
  },
  {
    root: 'ق - ر - أ',
    rootLetters: ['ق', 'ر', 'أ'],
    transliteration: 'Q - R - ’',
    coreMeaning: 'Reciting, reading, compiling, gathering',
    category: 'Literature & Spiritual',
    derivations: [
      { word: 'قَرَأَ', transliteration: 'qara’a', meaning: 'He read / recited', formOrPattern: 'Form I (Verb)', partOfSpeech: 'Verb' },
      { word: 'يَقْرَأُ', transliteration: 'yaqra’u', meaning: 'He reads / is reciting', formOrPattern: 'Form I (Present Verb)', partOfSpeech: 'Verb' },
      { word: 'قِرَاءَة', transliteration: 'qirā’ah', meaning: 'Reading / recitation', formOrPattern: 'Fi‘ālah (Verbal Noun)', partOfSpeech: 'Noun' },
      { word: 'قَارِئ', transliteration: 'qāri’', meaning: 'Reader / reciter', formOrPattern: 'Fā‘il (Active Participle)', partOfSpeech: 'Noun' },
      { word: 'قُرْآن', transliteration: 'qur’ān', meaning: 'The Recitation / Quran', formOrPattern: 'Fu‘lān (Verbal Noun)', partOfSpeech: 'Proper Noun' }
    ]
  },
  {
    root: 'ع - م - ل',
    rootLetters: ['ع', 'م', 'ل'],
    transliteration: '‘ - M - L',
    coreMeaning: 'Working, doing, acting, operating, labor',
    category: 'Daily Life & Work',
    derivations: [
      { word: 'عَمِلَ', transliteration: '‘amila', meaning: 'He worked / did', formOrPattern: 'Form I (Verb)', partOfSpeech: 'Verb' },
      { word: 'عَمَل', transliteration: '‘amal', meaning: 'Work / job / deed', formOrPattern: 'Fa‘al (Noun)', partOfSpeech: 'Noun' },
      { word: 'عَامِل', transliteration: '‘āmil', meaning: 'Worker / factor', formOrPattern: 'Fā‘il (Active Participle)', partOfSpeech: 'Noun' },
      { word: 'مَعْمَل', transliteration: 'ma‘mal', meaning: 'Laboratory / factory', formOrPattern: 'Maf‘al (Noun of Place)', partOfSpeech: 'Noun' },
      { word: 'عَمَلِيَّة', transliteration: '‘amaliyyah', meaning: 'Operation / process', formOrPattern: 'Relative Noun', partOfSpeech: 'Noun' }
    ]
  }
];
