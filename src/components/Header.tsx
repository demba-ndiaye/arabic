import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  BookMarked, 
  TrendingUp, 
  Flame, 
  Volume2, 
  CheckCircle2,
  Scroll,
  Library
} from 'lucide-react';
import { UserProgress } from '../types/app';

export type MainTab = 'reading' | 'tomes' | 'texts' | 'vocab' | 'progress';

interface HeaderProps {
  activeTab: MainTab;
  setActiveTab: (tab: MainTab) => void;
  progress: UserProgress;
  audioRate: number;
  setAudioRate: (rate: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  progress,
  audioRate,
  setAudioRate
}) => {
  const tabs = [
    { 
      id: 'reading' as MainTab, 
      label: 'Lire sans Harakat', 
      sub: 'Entraînement', 
      arabic: 'قِرَاءَةٌ بِلا تَشْكِيل', 
      icon: BookOpen 
    },
    { 
      id: 'tomes' as MainTab, 
      label: 'Les 3 Tomes', 
      sub: 'Bayna Yadayk 1-2-3', 
      arabic: 'سِلْسِلَةُ الكُتُب', 
      icon: Library 
    },
    { 
      id: 'texts' as MainTab, 
      label: 'Textes & Hadiths', 
      sub: 'Coran & Sagesse', 
      arabic: 'نُصُوصٌ وَأَحَادِيث', 
      icon: Scroll 
    },
    { 
      id: 'vocab' as MainTab, 
      label: 'Vocabulaire Avancé', 
      sub: 'SRS & Carnet', 
      arabic: 'المُفْرَدَاتُ وَالجُذُور', 
      icon: BookMarked 
    },
    { 
      id: 'progress' as MainTab, 
      label: 'Mon Suivi', 
      sub: 'Progression', 
      arabic: 'تَقَدُّمِي', 
      icon: TrendingUp 
    },
  ];

  const goalCompleted = progress.dailyWordsReviewedToday >= progress.dailyGoalWords;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand */}
          <div 
            className="flex items-center gap-3.5 cursor-pointer group select-none"
            onClick={() => setActiveTab('reading')}
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 text-white flex items-center justify-center font-arabic text-2xl font-bold shadow-sm group-hover:scale-105 transition-transform">
              ف
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display font-bold text-lg sm:text-xl text-slate-900 tracking-tight">
                  Getting fluent in arabic
                </h1>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[11px] font-semibold border border-indigo-100 font-display">
                  Espace Demba
                </span>
              </div>
              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <span className="font-arabic text-slate-700 text-sm font-semibold">طَلَاقَةٌ فِي اللُّغَةِ العَرَبِيَّة</span>
                <span className="text-slate-300">•</span>
                <span>Lecture sans voyelles & Vocabulaire</span>
              </p>
            </div>
          </div>

          {/* Right quick stats & speed */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Streak */}
            <div 
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50/80 border border-amber-200/70 text-amber-900 text-xs font-semibold shadow-2xs"
              title="Série de jours consécutifs d'entraînement"
            >
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
              <span>{progress.streakDays} {progress.streakDays > 1 ? 'jours' : 'jour'}</span>
            </div>

            {/* Daily Goal badge */}
            <div 
              className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border shadow-2xs ${
                goalCompleted
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
              title="Objectif quotidien de mots révisés"
            >
              <CheckCircle2 className={`w-3.5 h-3.5 ${goalCompleted ? 'text-emerald-600' : 'text-slate-400'}`} />
              <span>{progress.dailyWordsReviewedToday}/{progress.dailyGoalWords} mots</span>
            </div>

            {/* Audio Speed */}
            <div className="hidden lg:flex items-center gap-1 bg-slate-100/90 rounded-xl p-1 border border-slate-200 text-xs">
              <span className="px-2 text-slate-500 flex items-center gap-1 font-medium text-[11px]">
                <Volume2 className="w-3.5 h-3.5 text-indigo-600" />
                Vitesse :
              </span>
              <button
                type="button"
                onClick={() => setAudioRate(0.75)}
                className={`px-2 py-1 rounded-lg font-medium transition-all ${
                  audioRate === 0.75
                    ? 'bg-white text-indigo-700 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                0.75x
              </button>
              <button
                type="button"
                onClick={() => setAudioRate(0.9)}
                className={`px-2 py-1 rounded-lg font-medium transition-all ${
                  audioRate === 0.9
                    ? 'bg-white text-indigo-700 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                0.9x
              </button>
            </div>
          </div>
        </div>

        {/* Navigation tabs */}
        <nav className="flex space-x-1.5 sm:space-x-2 overflow-x-auto pb-2 scrollbar-none border-t border-slate-100 pt-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center gap-2.5 px-3.5 py-2.5 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-indigo-50/90 text-indigo-900 font-semibold shadow-2xs border border-indigo-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-transparent'
                }`}
              >
                <div className={`p-1 rounded-lg transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-200/70 text-slate-600 group-hover:text-slate-900'}`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="leading-tight">{tab.label}</div>
                  <div className={`text-[10px] hidden sm:block ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>
                    {tab.sub}
                  </div>
                </div>
                <span className={`text-xs font-arabic opacity-70 ml-1 ${isActive ? 'text-indigo-800 font-semibold' : 'text-slate-400'}`}>
                  {tab.arabic}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
