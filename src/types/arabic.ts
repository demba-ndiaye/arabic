export interface ArabicLetter {
  id: number;
  name: string;
  arabicName: string;
  isolated: string;
  initial: string;
  medial: string;
  final: string;
  transliteration: string;
  ipa: string;
  makhraj: string; // Articulation point
  makhrajGroup: 'Throat' | 'Tongue' | 'Lips' | 'Nose/Cavity' | 'Emphatic';
  sunLetter: boolean; // Sun vs Moon letter
  exampleWord: string;
  exampleTransliteration: string;
  exampleTranslation: string;
  description: string;
}

export interface HarakatVowel {
  id: string;
  name: string;
  arabicName: string;
  symbol: string;
  description: string;
  soundExample: string;
  phoneticRule: string;
  category: 'short-vowel' | 'tanwin' | 'sukun-shaddah' | 'long-vowel';
}

export interface TrilateralRoot {
  root: string; // e.g. "ك-ت-ب"
  rootLetters: [string, string, string];
  transliteration: string;
  coreMeaning: string;
  category: string;
  derivations: {
    word: string;
    transliteration: string;
    meaning: string;
    formOrPattern: string;
    partOfSpeech: string;
  }[];
}

export interface VocabularyItem {
  id: string;
  arabic: string;
  transliteration: string;
  english: string;
  category: 'Greetings' | 'Daily Life' | 'Numbers' | 'Food & Drink' | 'Family' | 'Travel' | 'Time & Days' | 'Islamic/Classical';
  plural?: string;
  root?: string;
  audioText?: string;
}

export interface GrammarLesson {
  id: string;
  title: string;
  arabicTitle: string;
  level: 'Beginner' | 'Intermediate';
  summary: string;
  explanation: string;
  examples: {
    arabic: string;
    transliteration: string;
    english: string;
    notes?: string;
  }[];
  keyRules: string[];
}
