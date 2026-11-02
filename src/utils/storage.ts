import { UserProgress, AdvancedVocabWord } from '../types/app';
import { ADVANCED_VOCABULARY } from '../data/advancedVocabulary';

const PROGRESS_KEY = 'getting_fluent_arabic_progress_demba';
const CUSTOM_WORDS_KEY = 'getting_fluent_arabic_custom_words_demba';

const getTodayDateString = (): string => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export function getInitialProgress(): UserProgress {
  const today = getTodayDateString();

  if (typeof window === 'undefined') {
    return {
      totalWordsMastered: ['av-4', 'av-6'],
      totalWordsLearning: ['av-1', 'av-2', 'av-5', 'av-8', 'av-9'],
      textsReadIds: ['hadith-niyyah'],
      vocalizationQuizScore: 6,
      vocalizationQuizTotal: 8,
      streakDays: 3,
      lastActiveDate: today,
      dailyGoalWords: 5,
      dailyWordsReviewedToday: 2,
      lastGoalDate: today
    };
  }

  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) {
      const init: UserProgress = {
        totalWordsMastered: ['av-4', 'av-6'],
        totalWordsLearning: ['av-1', 'av-2', 'av-5', 'av-8', 'av-9'],
        textsReadIds: ['hadith-niyyah'],
        vocalizationQuizScore: 0,
        vocalizationQuizTotal: 0,
        streakDays: 1,
        lastActiveDate: today,
        dailyGoalWords: 5,
        dailyWordsReviewedToday: 0,
        lastGoalDate: today
      };
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(init));
      return init;
    }

    const parsed: UserProgress = JSON.parse(raw);

    // Update streak if needed
    if (parsed.lastActiveDate !== today) {
      const last = new Date(parsed.lastActiveDate);
      const now = new Date(today);
      const diffTime = Math.abs(now.getTime() - last.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        parsed.streakDays += 1;
      } else if (diffDays > 1) {
        parsed.streakDays = 1;
      }
      parsed.lastActiveDate = today;
      parsed.dailyWordsReviewedToday = 0;
      parsed.lastGoalDate = today;
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(parsed));
    }

    return parsed;
  } catch {
    return {
      totalWordsMastered: [],
      totalWordsLearning: [],
      textsReadIds: [],
      vocalizationQuizScore: 0,
      vocalizationQuizTotal: 0,
      streakDays: 1,
      lastActiveDate: today,
      dailyGoalWords: 5,
      dailyWordsReviewedToday: 0,
      lastGoalDate: today
    };
  }
}

export function saveUserProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (err) {
    console.warn('Could not save progress to localStorage', err);
  }
}

export function getCustomWords(): AdvancedVocabWord[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CUSTOM_WORDS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCustomWord(word: Omit<AdvancedVocabWord, 'id' | 'isCustom'>): AdvancedVocabWord {
  const current = getCustomWords();
  const newWord: AdvancedVocabWord = {
    ...word,
    id: `custom-${Date.now()}`,
    isCustom: true
  };
  const updated = [newWord, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(CUSTOM_WORDS_KEY, JSON.stringify(updated));
  }
  return newWord;
}

export function deleteCustomWord(id: string): void {
  const current = getCustomWords();
  const updated = current.filter(w => w.id !== id);
  if (typeof window !== 'undefined') {
    localStorage.setItem(CUSTOM_WORDS_KEY, JSON.stringify(updated));
  }
}

export function getAllWords(): AdvancedVocabWord[] {
  const custom = getCustomWords();
  return [...custom, ...ADVANCED_VOCABULARY];
}
