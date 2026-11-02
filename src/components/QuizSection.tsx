import React, { useState, useEffect } from 'react';
import { ARABIC_ALPHABET } from '../data/alphabet';
import { VOCABULARY_LIST } from '../data/vocabulary';
import { HARAKAT_LIST } from '../data/harakat';
import { playArabicSpeech } from '../utils/audio';
import { 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  Award, 
  Flame, 
  RotateCcw, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface QuizSectionProps {
  audioRate: number;
}

type QuizMode = 'letters' | 'harakat' | 'vocab';

interface Question {
  prompt: string;
  subPrompt?: string;
  audioTarget?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ audioRate }) => {
  const [quizMode, setQuizMode] = useState<QuizMode>('letters');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);

  const generateQuestion = (mode: QuizMode): Question => {
    if (mode === 'letters') {
      const targetIndex = Math.floor(Math.random() * ARABIC_ALPHABET.length);
      const target = ARABIC_ALPHABET[targetIndex];

      // Generate 3 wrong options
      const otherLetters = ARABIC_ALPHABET.filter(l => l.id !== target.id);
      const shuffledOthers = [...otherLetters].sort(() => 0.5 - Math.random()).slice(0, 3);
      
      const allChoices = [target, ...shuffledOthers].sort(() => 0.5 - Math.random());
      const correctIdx = allChoices.findIndex(c => c.id === target.id);

      return {
        prompt: target.isolated,
        subPrompt: `Identify the letter and its sound transliteration:`,
        audioTarget: target.arabicName,
        options: allChoices.map(c => `${c.name} (${c.transliteration})`),
        correctIndex: correctIdx,
        explanation: `Letter ${target.name} (${target.arabicName}) represents the sound "${target.transliteration}". Example: ${target.exampleWord} (${target.exampleTranslation}).`
      };
    } else if (mode === 'harakat') {
      const target = HARAKAT_LIST[Math.floor(Math.random() * HARAKAT_LIST.length)];
      const otherHarakat = HARAKAT_LIST.filter(h => h.id !== target.id);
      const shuffledOthers = [...otherHarakat].sort(() => 0.5 - Math.random()).slice(0, 3);

      const allChoices = [target, ...shuffledOthers].sort(() => 0.5 - Math.random());
      const correctIdx = allChoices.findIndex(c => c.id === target.id);

      return {
        prompt: `ب${target.symbol}`,
        subPrompt: `What diacritic mark (Harakah) is attached here?`,
        audioTarget: target.soundExample,
        options: allChoices.map(c => `${c.name} (${c.arabicName})`),
        correctIndex: correctIdx,
        explanation: `${target.name} (${target.arabicName}) - ${target.description}`
      };
    } else {
      // Vocab mode
      const target = VOCABULARY_LIST[Math.floor(Math.random() * VOCABULARY_LIST.length)];
      const otherVocab = VOCABULARY_LIST.filter(v => v.id !== target.id);
      const shuffledOthers = [...otherVocab].sort(() => 0.5 - Math.random()).slice(0, 3);

      const allChoices = [target, ...shuffledOthers].sort(() => 0.5 - Math.random());
      const correctIdx = allChoices.findIndex(c => c.id === target.id);

      return {
        prompt: target.arabic,
        subPrompt: `What is the meaning of this Arabic phrase?`,
        audioTarget: target.audioText || target.arabic,
        options: allChoices.map(c => c.english),
        correctIndex: correctIdx,
        explanation: `"${target.arabic}" (${target.transliteration}) translates to "${target.english}".`
      };
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    const q = generateQuestion(quizMode);
    setCurrentQuestion(q);
    if (q.audioTarget) {
      playArabicSpeech(q.audioTarget, audioRate);
    }
  };

  useEffect(() => {
    nextQuestion();
  }, [quizMode]);

  const handleSelectOption = (index: number) => {
    if (isAnswered || !currentQuestion) return;

    setSelectedOption(index);
    setIsAnswered(true);
    setTotalAttempts(prev => prev + 1);

    if (index === currentQuestion.correctIndex) {
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handlePlayPrompt = () => {
    if (currentQuestion?.audioTarget) {
      playArabicSpeech(currentQuestion.audioTarget, audioRate);
    }
  };

  const resetStats = () => {
    setScore(0);
    setStreak(0);
    setTotalAttempts(0);
    nextQuestion();
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-6 translate-y-8 select-none pointer-events-none opacity-10 text-9xl font-arabic">
          تَدْرِيب
        </div>
        <div className="max-w-2xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-400/20">
            Interactive Arena • Instant Feedback • Audio Prompting
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Arabic Practice & Quiz Arena <span className="font-arabic font-normal text-amber-300">التدريب والاختبارات</span>
          </h1>
          <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
            Test and cement your mastery of letter glyphs, phonetic vowels, and everyday vocabulary with instant voice playback and smart feedback.
          </p>
        </div>
      </div>

      {/* Mode Selector & Stats Bar */}
      <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Mode tabs */}
        <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-lg border border-stone-200 w-full sm:w-auto">
          <button
            onClick={() => setQuizMode('letters')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
              quizMode === 'letters'
                ? 'bg-white text-stone-900 shadow-2xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Letters (الأبجدية)
          </button>
          <button
            onClick={() => setQuizMode('harakat')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
              quizMode === 'harakat'
                ? 'bg-white text-stone-900 shadow-2xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Harakat (الحركات)
          </button>
          <button
            onClick={() => setQuizMode('vocab')}
            className={`flex-1 sm:flex-none px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
              quizMode === 'vocab'
                ? 'bg-white text-stone-900 shadow-2xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Vocabulary (المفردات)
          </button>
        </div>

        {/* Live Score & Streak */}
        <div className="flex items-center gap-4 text-xs font-medium">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/60 font-semibold">
            <Award className="w-4 h-4 text-amber-600" />
            Score: {score} / {totalAttempts}
            {totalAttempts > 0 && ` (${Math.round((score / totalAttempts) * 100)}%)`}
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-50 text-orange-900 border border-orange-200/60 font-semibold">
            <Flame className="w-4 h-4 text-orange-600 animate-pulse" />
            Streak: {streak}
          </div>

          <button
            onClick={resetStats}
            className="p-1.5 rounded-lg text-stone-600 hover:text-stone-700 hover:bg-stone-100"
            title="Reset scores"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Question Card */}
      {currentQuestion && (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border-2 border-stone-200 p-6 sm:p-8 shadow-md">
          {/* Subprompt */}
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-600 text-center mb-2">
            {currentQuestion.subPrompt}
          </p>

          {/* Central Visual Prompt */}
          <div className="text-center py-4">
            <div className="font-arabic text-6xl sm:text-7xl font-bold text-stone-900 my-2 select-none">
              {currentQuestion.prompt}
            </div>

            <button
              onClick={handlePlayPrompt}
              className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-semibold transition-colors border border-amber-200/50"
            >
              <Volume2 className="w-4 h-4 text-amber-600" /> Replay Audio
            </button>
          </div>

          {/* 4 Choices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQuestion.correctIndex;

              let style = 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800';
              if (isAnswered) {
                if (isCorrect) {
                  style = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20 font-bold';
                } else if (isSelected) {
                  style = 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-500/20';
                } else {
                  style = 'bg-stone-50/60 border-stone-200 text-stone-600';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between ${style}`}
                >
                  <span>{option}</span>
                  {isAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation & Next Button */}
          {isAnswered && (
            <div className="mt-6 pt-5 border-t border-stone-100 space-y-4 animate-in fade-in">
              <div className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed border ${
                selectedOption === currentQuestion.correctIndex
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                  : 'bg-amber-50/70 border-amber-200 text-amber-950'
              }`}>
                <strong>{selectedOption === currentQuestion.correctIndex ? 'Correct! 🎉 ' : 'Not quite. '}</strong>
                {currentQuestion.explanation}
              </div>

              <div className="text-right">
                <button
                  onClick={nextQuestion}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-sm font-semibold shadow-md transition-all"
                >
                  Next Question <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
