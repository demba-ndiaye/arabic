export type TextCategory = 'quran' | 'hadith' | 'dua' | 'wisdom';

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
  source: string; // e.g. "Sourate Al-Baqara, Verset 255" or "Sahih Al-Bukhari 1"
  arabicWithHarakat: string;
  arabicWithoutHarakat: string;
  translationFr: string;
  contextOrBenefit: string;
  words: WordBreakdown[];
  difficulty: 'Intermédiaire' | 'Avancé';
}

export interface AdvancedVocabWord {
  id: string;
  arabicWithoutHarakat: string;
  arabicWithHarakat: string;
  transliteration: string;
  translationFr: string;
  root: string;
  category: 'Coranique' | 'Hadith' | 'Théologie' | 'Littérature' | 'Expression';
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
}
