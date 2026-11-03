export type TextCategory = 'quran' | 'hadith' | 'dua' | 'wisdom' | 'tome1' | 'tome2' | 'tome3';
export type VolumeSource = 'all' | 'quran_hadith' | 'tome1' | 'tome2' | 'tome3';

export interface WordBreakdown {
  id: string;
  wordNoHarakat: string;
  wordWithHarakat: string;
  transliteration: string;
  translationFr: string;
  root?: string;
  grammarNote?: string;
}

export interface ReligiousText {
  id: string;
  title: string;
  arabicTitle: string;
  category: TextCategory;
  source: string; // e.g. "Sourate Al-Baqara, Verset 255", "Tome 3 - Unité 1", etc.
  volumeSource?: 'quran_hadith' | 'tome1' | 'tome2' | 'tome3';
  arabicWithHarakat: string;
  arabicWithoutHarakat: string;
  translationFr: string;
  contextOrBenefit: string;
  words: WordBreakdown[];
  difficulty: 'Débutant+' | 'Intermédiaire' | 'Avancé';
}

export interface AdvancedVocabWord {
  id: string;
  arabicWithoutHarakat: string;
  arabicWithHarakat: string;
  transliteration: string;
  translationFr: string;
  root: string;
  category: 'Coranique' | 'Hadith' | 'Théologie' | 'Littérature' | 'Expression' | 'Tome 1' | 'Tome 2' | 'Tome 3';
  volumeSource?: 'quran_hadith' | 'tome1' | 'tome2' | 'tome3';
  unitOrigin?: string;
  exampleSentenceWithHarakat: string;
  exampleSentenceWithoutHarakat: string;
  exampleTranslationFr: string;
  exampleSource?: string;
  synonyms?: string[];
  status: 'new' | 'learning' | 'mastered';
  notes?: string;
  isCustom?: boolean;
}

export interface UserProgress {
  totalWordsMastered: string[];
  totalWordsLearning: string[];
  textsReadIds: string[];
  vocalizationQuizScore: number;
  vocalizationQuizTotal: number;
  streakDays: number;
  lastActiveDate: string; // YYYY-MM-DD
  dailyGoalWords: number;
  dailyWordsReviewedToday: number;
  lastGoalDate: string;
}

export interface ReadingQuestion {
  id: string;
  sentenceWithoutHarakat: string;
  targetWordIndex: number;
  targetWordWithoutHarakat: string;
  correctWordWithHarakat: string;
  options: string[];
  explanation: string;
  source: string;
  translationFr: string;
  volumeSource: 'quran_hadith' | 'tome1' | 'tome2' | 'tome3';
  grammarRuleKey?: string;
}

export interface TomePdfBook {
  id: 'tome1' | 'tome2' | 'tome3';
  title: string;
  arabicTitle: string;
  subtitle: string;
  level: string;
  description: string;
  pdfPath: string;
  onlineReaderUrl?: string;
  pageCount: number;
  keyUnits: string[];
  grammarLessons: string[];
}
