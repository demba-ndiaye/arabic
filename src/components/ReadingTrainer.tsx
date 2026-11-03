import React, { useState, useMemo } from 'react';
import { RELIGIOUS_TEXTS } from '../data/religiousTexts';
import { READING_EXERCISES } from '../data/readingExercises';
import { ReligiousText, WordBreakdown, UserProgress, VolumeSource } from '../types/app';
import { playArabicSpeech } from '../utils/audio';
import { 
  Eye, 
  EyeOff, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  HelpCircle, 
  BookOpen, 
  ArrowRight, 
  RotateCcw,
  Plus,
  Bookmark,
  Filter
} from 'lucide-react';

interface ReadingTrainerProps {
  progress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
  audioRate: number;
  onAddWordToNotebook?: (word: WordBreakdown) => void;
  initialVolumeFilter?: VolumeSource;
}

export const ReadingTrainer: React.FC<ReadingTrainerProps> = ({
  progress,
  onUpdateProgress,
  audioRate,
  onAddWordToNotebook,
  initialVolumeFilter = 'all'
}) => {
  // Volume filter state (Tome 1, Tome 2, Tome 3, Coran & Hadith)
  const [volumeFilter, setVolumeFilter] = useState<VolumeSource>(initialVolumeFilter);

  // Reading mode state
  const [selectedTextId, setSelectedTextId] = useState<string>('tome3-miracle-quran');
  const [showAllHarakat, setShowAllHarakat] = useState<boolean>(false);
  const [selectedWord, setSelectedWord] = useState<WordBreakdown | null>(null);

  // Quiz mode state
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'text-study' | 'quiz'>('text-study');

  // Filtered texts
  const filteredTexts = useMemo(() => {
    return RELIGIOUS_TEXTS.filter(t => {
      if (volumeFilter === 'all') return true;
      return t.volumeSource === volumeFilter;
    });
  }, [volumeFilter]);

  // Filtered quizzes
  const filteredQuizzes = useMemo(() => {
    return READING_EXERCISES.filter(q => {
      if (volumeFilter === 'all') return true;
      return q.volumeSource === volumeFilter;
    });
  }, [volumeFilter]);

  const currentText = filteredTexts.find(t => t.id === selectedTextId) || filteredTexts[0] || RELIGIOUS_TEXTS[0];
  const currentQuiz = filteredQuizzes[quizIndex] || filteredQuizzes[0] || READING_EXERCISES[0];

  const handleWordClick = (word: WordBreakdown) => {
    setSelectedWord(word);
    playArabicSpeech(word.wordWithHarakat, audioRate);
  };

  const handlePlayFullText = () => {
    playArabicSpeech(currentText.arabicWithHarakat, audioRate);
  };

  const handleQuizOptionClick = (option: string) => {
    if (isAnswerSubmitted) return;

    setSelectedAnswer(option);
    setIsAnswerSubmitted(true);

    const isCorrect = option === currentQuiz.correctWordWithHarakat;
    const newScore = isCorrect ? progress.vocalizationQuizScore + 1 : progress.vocalizationQuizScore;
    const newTotal = progress.vocalizationQuizTotal + 1;

    // Play speech of correct word
    playArabicSpeech(currentQuiz.correctWordWithHarakat, audioRate);

    onUpdateProgress({
      ...progress,
      vocalizationQuizScore: newScore,
      vocalizationQuizTotal: newTotal
    });
  };

  const handleNextQuiz = () => {
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setQuizIndex((prev) => (prev + 1) % (filteredQuizzes.length || 1));
  };

  const handleMarkTextCompleted = () => {
    if (!progress.textsReadIds.includes(currentText.id)) {
      onUpdateProgress({
        ...progress,
        textsReadIds: [...progress.textsReadIds, currentText.id],
        dailyWordsReviewedToday: progress.dailyWordsReviewedToday + currentText.words.length
      });
    }
  };

  const isCurrentTextRead = progress.textsReadIds.includes(currentText.id);

  const getSourceBadge = (source?: string) => {
    if (source === 'tome1') return 'Tome 1 (Bayna Yadayk)';
    if (source === 'tome2') return 'Tome 2 (Bayna Yadayk)';
    if (source === 'tome3') return 'Tome 3 (Bayna Yadayk)';
    return 'Coran & Hadith';
  };

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100 font-display">
              <Sparkles className="w-3.5 h-3.5" /> Source : Coran, Hadiths & Les 3 Tomes « Al-Arabiyyah Bayna Yadayk »
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
              S'entraîner à lire sans les Harakat <span className="font-arabic font-normal text-indigo-600 block sm:inline">القراءة بلا حركات</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              En arabe authentique, les textes s'écrivent sans voyelles courtes. Entraînez votre œil et votre esprit à déduire la vocalisation exacte grâce à la syntaxe (I'rāb) et aux schèmes morphologiques issus de vos 3 tomes et des textes sacrés.
            </p>
          </div>

          {/* Subtab switch */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-center">
            <button
              onClick={() => setActiveTab('text-study')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'text-study'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              Atelier Mot à Mot
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'quiz'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-emerald-600" />
              Quizz de Vocalisation ({filteredQuizzes.length})
            </button>
          </div>
        </div>

        {/* Global Source / Tome Filter Bar */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-display font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mr-1">
            <Filter className="w-3.5 h-3.5 text-indigo-600" /> Filtrer la source :
          </span>
          <button
            onClick={() => setVolumeFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              volumeFilter === 'all'
                ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            Toutes les sources ({RELIGIOUS_TEXTS.length} textes)
          </button>
          <button
            onClick={() => setVolumeFilter('tome3')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              volumeFilter === 'tome3'
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            📕 Tome 3 (Avancé)
          </button>
          <button
            onClick={() => setVolumeFilter('tome2')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              volumeFilter === 'tome2'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-2xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            📗 Tome 2 (Intermédiaire)
          </button>
          <button
            onClick={() => setVolumeFilter('tome1')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              volumeFilter === 'tome1'
                ? 'bg-amber-600 text-white border-amber-600 shadow-2xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            📘 Tome 1 (Fondations)
          </button>
          <button
            onClick={() => setVolumeFilter('quran_hadith')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              volumeFilter === 'quran_hadith'
                ? 'bg-teal-700 text-white border-teal-700 shadow-2xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            🌟 Coran & Hadith
          </button>
        </div>
      </div>

      {/* TAB 1: TEXT STUDY & WORD-BY-WORD */}
      {activeTab === 'text-study' && (
        <div className="space-y-6">
          {/* Selector of texts */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-display font-semibold text-slate-500 uppercase tracking-wider shrink-0 mr-1">
              Choisir un texte ({filteredTexts.length}) :
            </span>
            {filteredTexts.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setSelectedTextId(t.id);
                  setSelectedWord(null);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all border flex items-center gap-2 ${
                  currentText.id === t.id
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm font-semibold'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-2xs'
                }`}
              >
                <span>{t.title}</span>
                <span className="opacity-70 text-[10px] uppercase font-mono">
                  {t.volumeSource ? t.volumeSource.toUpperCase() : t.category}
                </span>
              </button>
            ))}
          </div>

          {/* Main Reading Canvas */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
            {/* Header of the text */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                    {currentText.source}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                    Source : {getSourceBadge(currentText.volumeSource)}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                    {currentText.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mt-1">{currentText.title}</h3>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setShowAllHarakat(!showAllHarakat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                    showAllHarakat
                      ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                  title="Afficher ou masquer toutes les voyelles du texte"
                >
                  {showAllHarakat ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{showAllHarakat ? 'Masquer Harakat' : 'Révéler toutes les Harakat'}</span>
                </button>

                <button
                  type="button"
                  onClick={handlePlayFullText}
                  className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-colors"
                  title="Écouter la récitation complète"
                >
                  <Volume2 className="w-3.5 h-3.5 text-indigo-400" /> Écouter
                </button>
              </div>
            </div>

            {/* Interactive Arabic Sentence Box */}
            <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-8 text-center relative">
              <div className="text-xs text-slate-600 mb-3 font-medium">
                💡 <span className="font-semibold text-slate-700">Consigne :</span> Lisez le texte mentalement sans les voyelles, puis cliquez sur chaque mot pour valider sa vocalisation et son rôle grammatical.
              </div>

              {/* Words display */}
              <div 
                dir="rtl" 
                className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 font-arabic text-3xl sm:text-4xl text-slate-900 leading-loose py-4"
              >
                {currentText.words.map((w) => {
                  const isSelected = selectedWord?.id === w.id;
                  const displayWord = showAllHarakat ? w.wordWithHarakat : w.wordNoHarakat;

                  return (
                    <button
                      key={w.id}
                      type="button"
                      onClick={() => handleWordClick(w)}
                      className={`relative px-3 py-1 rounded-xl transition-all select-none duration-150 ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-md scale-105 ring-2 ring-indigo-500/20'
                          : 'bg-white hover:bg-indigo-50 hover:text-indigo-900 border border-slate-200/80 shadow-2xs'
                      }`}
                    >
                      {displayWord}
                      {/* Sub-label showing vocalization */}
                      {isSelected && (
                        <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-sans font-normal text-indigo-600 whitespace-nowrap bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">
                          {w.wordWithHarakat}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* French translation */}
              <div className="mt-8 pt-4 border-t border-slate-200 text-slate-700 text-sm italic max-w-2xl mx-auto leading-relaxed">
                "{currentText.translationFr}"
              </div>
            </div>

            {/* Word Analysis Drawer (When a word is clicked) */}
            {selectedWord && (
              <div className="bg-gradient-to-br from-indigo-50/70 to-slate-50 border border-indigo-100 rounded-2xl p-5 shadow-xs space-y-3 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-100/70 pb-3">
                  <div className="flex items-center gap-4">
                    <div className="font-arabic text-3xl sm:text-4xl text-indigo-950 font-bold bg-white px-4 py-1.5 rounded-xl border border-indigo-200 shadow-2xs">
                      {selectedWord.wordWithHarakat}
                    </div>
                    <div>
                      <div className="text-xs font-mono font-semibold text-indigo-700">
                        {selectedWord.transliteration}
                      </div>
                      <div className="text-sm font-bold text-slate-900">
                        {selectedWord.translationFr}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => playArabicSpeech(selectedWord.wordWithHarakat, audioRate)}
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Volume2 className="w-3.5 h-3.5" /> Prononcer
                    </button>

                    {onAddWordToNotebook && (
                      <button
                        type="button"
                        onClick={() => onAddWordToNotebook(selectedWord)}
                        className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold border border-slate-200 flex items-center gap-1.5 transition-colors"
                        title="Ajouter à mon carnet de vocabulaire"
                      >
                        <Plus className="w-3.5 h-3.5 text-indigo-600" /> Carnet
                      </button>
                    )}
                  </div>
                </div>

                {/* Grammatical explanation of why it has this vocalization */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  {selectedWord.grammarNote && (
                    <div className="bg-white p-3 rounded-xl border border-indigo-100">
                      <span className="text-[10px] uppercase font-bold text-indigo-600 block mb-0.5">
                        Règle grammaticale (الإعراب) :
                      </span>
                      <p className="text-slate-800 leading-relaxed font-medium">
                        {selectedWord.grammarNote}
                      </p>
                    </div>
                  )}

                  {selectedWord.root && (
                    <div className="bg-white p-3 rounded-xl border border-indigo-100">
                      <span className="text-[10px] uppercase font-bold text-indigo-600 block mb-0.5">
                        Racine trilitère (الجذر) :
                      </span>
                      <p className="text-slate-800 leading-relaxed">
                        Racine : <strong className="font-arabic text-sm text-indigo-900">{selectedWord.root}</strong>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Context and benefit */}
            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span className="italic">{currentText.contextOrBenefit}</span>
              <button
                type="button"
                onClick={handleMarkTextCompleted}
                className={`px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 transition-all ${
                  isCurrentTextRead
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${isCurrentTextRead ? 'text-emerald-600' : 'text-slate-400'}`} />
                {isCurrentTextRead ? 'Texte validé' : 'Marquer comme lu sans voyelles'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: VOCALIZATION CHALLENGE QUIZ */}
      {activeTab === 'quiz' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="font-display font-semibold uppercase tracking-wider text-indigo-600">
                  Défi #{quizIndex + 1} / {filteredQuizzes.length}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-[10px]">
                  {getSourceBadge(currentQuiz.volumeSource)}
                </span>
              </div>
              <span className="font-medium bg-slate-100 px-2.5 py-0.5 rounded-full text-slate-700">
                Score : {progress.vocalizationQuizScore} / {progress.vocalizationQuizTotal}
              </span>
            </div>

            {/* Question Sentence */}
            <div className="text-center space-y-2">
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                Comment vocaliser le mot surligné dans cette phrase ?
              </p>
              <div 
                dir="rtl"
                className="font-arabic text-3xl sm:text-4xl text-slate-900 leading-relaxed py-3"
              >
                {currentQuiz.sentenceWithoutHarakat.split(' ').map((word, i) => {
                  const isTarget = i === currentQuiz.targetWordIndex;
                  return (
                    <span
                      key={i}
                      className={
                        isTarget
                          ? 'text-indigo-600 font-bold underline decoration-indigo-400 decoration-4 underline-offset-8 mx-1 bg-indigo-50/80 px-2 py-0.5 rounded-lg'
                          : 'mx-1'
                      }
                    >
                      {word}
                    </span>
                  );
                })}
              </div>
              <p className="text-xs text-slate-500 italic">
                "{currentQuiz.translationFr}"
              </p>
            </div>

            {/* 4 Choices */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {currentQuiz.options.map((opt) => {
                const isSelected = selectedAnswer === opt;
                const isCorrect = opt === currentQuiz.correctWordWithHarakat;

                let btnStyle = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-900';
                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-500/20';
                  } else {
                    btnStyle = 'bg-slate-50/50 border-slate-200/60 text-slate-400';
                  }
                }

                return (
                  <button
                    key={opt}
                    type="button"
                    disabled={isAnswerSubmitted}
                    onClick={() => handleQuizOptionClick(opt)}
                    className={`p-4 rounded-xl border text-center transition-all ${btnStyle}`}
                  >
                    <span className="font-arabic text-2xl sm:text-3xl block">{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Feedback & grammatical reasoning */}
            {isAnswerSubmitted && (
              <div className="space-y-4 pt-4 border-t border-slate-100 animate-in fade-in">
                <div className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed border ${
                  selectedAnswer === currentQuiz.correctWordWithHarakat
                    ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950'
                    : 'bg-amber-50/80 border-amber-200 text-amber-950'
                }`}>
                  <div className="flex items-center gap-1.5 font-bold mb-1">
                    {selectedAnswer === currentQuiz.correctWordWithHarakat ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Excellente lecture !</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-amber-600" />
                        <span>Règle grammaticale :</span>
                      </>
                    )}
                  </div>
                  <p>{currentQuiz.explanation}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 italic">Source : {currentQuiz.source}</span>
                  <button
                    type="button"
                    onClick={handleNextQuiz}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
                  >
                    Défi suivant <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reading Rules Cheatsheet */}
      <div className="bg-slate-900 text-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm">
        <h3 className="text-base font-display font-bold text-white mb-2 flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-indigo-400" />
          Les 3 Clés de vocalisation issues de « Al-Arabiyyah Bayna Yadayk »
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mt-4">
          <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
            <span className="font-bold text-indigo-300 block mb-1">1. Le Rôle Grammatical (الإعراب)</span>
            <p className="text-slate-400 leading-relaxed">
              Le sujet (Mubtada/Fā‘il/Nā'ib Fā'il) est nominatif en Dammah (ـُ). Le complément (Maf‘ūl) est accusatif en Fathah (ـَ). Le complément après préposition est génitif en Kasrah (ـِ).
            </p>
          </div>
          <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
            <span className="font-bold text-indigo-300 block mb-1">2. Les Schèmes Morphologiques (الأوزان)</span>
            <p className="text-slate-400 leading-relaxed">
              Tome 3 p. 125 : La balance Fa-‘a-La (ف-ع-ل). Déduisez la voyelle médiane : Fā‘il (فاعل), Maf‘ūl (مفعول), Muf‘il (مفعل), Maf‘al (مفعل de lieu).
            </p>
          </div>
          <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
            <span className="font-bold text-indigo-300 block mb-1">3. Les Particules Régissantes (النواسخ)</span>
            <p className="text-slate-400 leading-relaxed">
              « Inna » rend son sujet mansūb (Fathah) et son attribut marfū‘ (Dammah). « Kānah » fait l'inverse. Les outils de condition rendent les deux verbes apocopés (Majzūm).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
