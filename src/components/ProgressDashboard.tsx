import React, { useState } from 'react';
import { UserProgress, AdvancedVocabWord } from '../types/app';
import { RELIGIOUS_TEXTS } from '../data/religiousTexts';
import { 
  TrendingUp, 
  Award, 
  Flame, 
  CheckCircle2, 
  BookOpen, 
  Target, 
  RotateCcw, 
  Calendar,
  Sparkles,
  Zap
} from 'lucide-react';

interface ProgressDashboardProps {
  progress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
  words: AdvancedVocabWord[];
  onNavigateToTab: (tab: 'reading' | 'vocab' | 'texts') => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  progress,
  onUpdateProgress,
  words,
  onNavigateToTab
}) => {
  const [goalInput, setGoalInput] = useState(progress.dailyGoalWords.toString());
  const [showGoalEditor, setShowGoalEditor] = useState(false);

  const totalWordsCount = words.length;
  const masteredCount = progress.totalWordsMastered.length;
  const learningCount = progress.totalWordsLearning.length;
  const masteredPercentage = Math.round((masteredCount / (totalWordsCount || 1)) * 100);

  const textsReadCount = progress.textsReadIds.length;
  const totalTextsCount = RELIGIOUS_TEXTS.length;
  const textsPercentage = Math.round((textsReadCount / (totalTextsCount || 1)) * 100);

  const quizAccuracy = progress.vocalizationQuizTotal > 0
    ? Math.round((progress.vocalizationQuizScore / progress.vocalizationQuizTotal) * 100)
    : 0;

  const handleSaveGoal = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(goalInput, 10);
    if (!isNaN(val) && val > 0 && val <= 50) {
      onUpdateProgress({
        ...progress,
        dailyGoalWords: val
      });
      setShowGoalEditor(false);
    }
  };

  const handleResetProgress = () => {
    if (confirm('Voulez-vous réinitialiser votre progression d\'apprentissage ? Vos mots personnalisés seront conservés.')) {
      onUpdateProgress({
        ...progress,
        totalWordsMastered: [],
        totalWordsLearning: [],
        textsReadIds: [],
        vocalizationQuizScore: 0,
        vocalizationQuizTotal: 0,
        streakDays: 1,
        dailyWordsReviewedToday: 0
      });
    }
  };

  const goalCompleted = progress.dailyWordsReviewedToday >= progress.dailyGoalWords;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-100 font-display">
            <TrendingUp className="w-3.5 h-3.5" /> Tableau de bord personnel de Demba
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
            Mon Suivi de Progression <span className="font-arabic font-normal text-emerald-600">تَقَدُّمِي فِي اللُّغَة</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Visualisez en temps réel votre montée en compétence : maîtrise du vocabulaire coranique, lecture fluide sans voyelles et régularité quotidienne.
          </p>
        </div>

        {/* Quick actions */}
        <button
          onClick={handleResetProgress}
          className="px-3.5 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl border border-slate-200 flex items-center gap-1.5 transition-colors self-start md:self-center"
          title="Réinitialiser les scores"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Réinitialiser
        </button>
      </div>

      {/* Main KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Streak */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 fill-amber-500 text-amber-500" />
          </div>
          <div>
            <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-slate-400 block">
              Série en cours
            </span>
            <div className="text-2xl font-display font-bold text-slate-900 mt-0.5">
              {progress.streakDays} {progress.streakDays > 1 ? 'jours' : 'jour'}
            </div>
            <span className="text-[11px] text-emerald-600 font-medium">Actif aujourd'hui</span>
          </div>
        </div>

        {/* Vocabulary Mastered */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-slate-400 block">
              Vocabulaire maîtrisé
            </span>
            <div className="text-2xl font-display font-bold text-slate-900 mt-0.5">
              {masteredCount} <span className="text-xs text-slate-400 font-normal">/ {totalWordsCount}</span>
            </div>
            <span className="text-[11px] text-indigo-600 font-medium">{masteredPercentage}% du corpus</span>
          </div>
        </div>

        {/* Unvocalized Texts Read */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-slate-400 block">
              Textes sans Harakat
            </span>
            <div className="text-2xl font-display font-bold text-slate-900 mt-0.5">
              {textsReadCount} <span className="text-xs text-slate-400 font-normal">/ {totalTextsCount}</span>
            </div>
            <span className="text-[11px] text-emerald-600 font-medium">{textsPercentage}% complétés</span>
          </div>
        </div>

        {/* Vocalization Quiz Accuracy */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center shrink-0">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-slate-400 block">
              Précision Défi Lecture
            </span>
            <div className="text-2xl font-display font-bold text-slate-900 mt-0.5">
              {quizAccuracy}%
            </div>
            <span className="text-[11px] text-slate-500 font-medium">
              {progress.vocalizationQuizScore} / {progress.vocalizationQuizTotal} réponses
            </span>
          </div>
        </div>
      </div>

      {/* Daily Goal Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-slate-900">
                Objectif quotidien d'apprentissage
              </h3>
              <p className="text-xs text-slate-500">
                Fixez-vous un rythme quotidien régulier pour assurer la rétention durable.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowGoalEditor(!showGoalEditor)}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 self-start sm:self-auto"
          >
            {showGoalEditor ? 'Fermer' : 'Modifier l\'objectif'}
          </button>
        </div>

        {/* Goal editor form */}
        {showGoalEditor && (
          <form onSubmit={handleSaveGoal} className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
            <label className="text-xs text-slate-700 font-semibold">
              Nombre de mots par jour :
            </label>
            <input
              type="number"
              min="1"
              max="50"
              value={goalInput}
              onChange={(e) => setGoalInput(e.target.value)}
              className="w-20 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-semibold"
            />
            <button
              type="submit"
              className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold"
            >
              Enregistrer
            </button>
          </form>
        )}

        {/* Progress Bar */}
        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between text-xs font-display">
            <span className="font-semibold text-slate-700">
              {progress.dailyWordsReviewedToday} mots révisés sur un objectif de {progress.dailyGoalWords}
            </span>
            <span className={`font-bold ${goalCompleted ? 'text-emerald-600' : 'text-slate-500'}`}>
              {Math.min(100, Math.round((progress.dailyWordsReviewedToday / progress.dailyGoalWords) * 100))}%
            </span>
          </div>

          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                goalCompleted ? 'bg-emerald-500' : 'bg-indigo-600'
              }`}
              style={{
                width: `${Math.min(100, (progress.dailyWordsReviewedToday / progress.dailyGoalWords) * 100)}%`
              }}
            />
          </div>

          {goalCompleted && (
            <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-4 h-4" /> Félicitations Demba ! Votre objectif du jour est atteint.
            </p>
          )}
        </div>
      </div>

      {/* Learning Pillars Quick Jumps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Reading */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center mb-3">
              <BookOpen className="w-4 h-4" />
            </div>
            <h4 className="font-display font-bold text-slate-900 text-sm">Lecture sans Harakat</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Exercez-vous à vocaliser les versets et hadiths sans aucune aide avant de vérifier.
            </p>
          </div>
          <button
            onClick={() => onNavigateToTab('reading')}
            className="w-full py-2 bg-slate-100 hover:bg-indigo-50 text-slate-800 hover:text-indigo-900 rounded-xl text-xs font-semibold transition-colors"
          >
            Lancer une séance de lecture
          </button>
        </div>

        {/* Vocabulary */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Award className="w-4 h-4" />
            </div>
            <h4 className="font-display font-bold text-slate-900 text-sm">Flashcards de Vocabulaire</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Passez en revue les mots avec leurs racines, synonymes et phrases coraniques.
            </p>
          </div>
          <button
            onClick={() => onNavigateToTab('vocab')}
            className="w-full py-2 bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 rounded-xl text-xs font-semibold transition-colors"
          >
            Réviser mes flashcards
          </button>
        </div>

        {/* Texts */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
              <Sparkles className="w-4 h-4" />
            </div>
            <h4 className="font-display font-bold text-slate-900 text-sm">Textes & Hadiths</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Explorez le découpage mot à mot des versets majeurs et invocations prophétiques.
            </p>
          </div>
          <button
            onClick={() => onNavigateToTab('texts')}
            className="w-full py-2 bg-slate-100 hover:bg-amber-50 text-slate-800 hover:text-amber-900 rounded-xl text-xs font-semibold transition-colors"
          >
            Consulter la bibliothèque
          </button>
        </div>
      </div>
    </div>
  );
};
