import React from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Layers, 
  BookMarked, 
  Compass, 
  GraduationCap, 
  Keyboard,
  Volume2
} from 'lucide-react';

export type ActiveTab = 'alphabet' | 'harakat' | 'roots' | 'vocabulary' | 'grammar' | 'quiz' | 'studio';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  audioRate: number;
  setAudioRate: (rate: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  audioRate,
  setAudioRate
}) => {
  const tabs = [
    { id: 'alphabet' as ActiveTab, label: 'Alphabet', arabic: 'الأبجدية', icon: BookOpen },
    { id: 'harakat' as ActiveTab, label: 'Harakat & Vowels', arabic: 'الحركات', icon: Sparkles },
    { id: 'roots' as ActiveTab, label: 'Root Explorer', arabic: 'الجذور', icon: Layers },
    { id: 'vocabulary' as ActiveTab, label: 'Vocabulary', arabic: 'المفردات', icon: BookMarked },
    { id: 'grammar' as ActiveTab, label: 'Grammar', arabic: 'القواعد', icon: Compass },
    { id: 'quiz' as ActiveTab, label: 'Practice & Quiz', arabic: 'التدريب', icon: GraduationCap },
    { id: 'studio' as ActiveTab, label: 'Text Studio', arabic: 'المحرر', icon: Keyboard },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('alphabet')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-500 text-white flex items-center justify-center font-bold text-2xl font-arabic shadow-md shadow-amber-500/20">
              ض
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-stone-900 tracking-tight">Arabic</span>
                <span className="text-amber-700 font-arabic text-xl font-bold">العَرَبِيَّة</span>
              </div>
              <p className="text-xs text-stone-700 hidden sm:block">Learn, Pronounce & Master the Language of Elegance</p>
            </div>
          </div>

          {/* Right actions: Speech Rate toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 bg-stone-100 rounded-lg p-1 border border-stone-200 text-xs">
              <span className="px-2 py-0.5 text-stone-700 flex items-center gap-1 font-medium">
                <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                Audio Speed:
              </span>
              <button
                type="button"
                onClick={() => setAudioRate(0.7)}
                className={`px-2 py-1 rounded-md font-medium transition-all ${
                  audioRate === 0.7 
                    ? 'bg-white text-amber-700 shadow-sm font-semibold' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Slower pace for beginners"
              >
                0.7x (Slow)
              </button>
              <button
                type="button"
                onClick={() => setAudioRate(0.9)}
                className={`px-2 py-1 rounded-md font-medium transition-all ${
                  audioRate === 0.9 
                    ? 'bg-white text-amber-700 shadow-sm font-semibold' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Natural pace"
              >
                0.9x (Normal)
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 overflow-x-auto pb-2 sm:pb-0 scrollbar-none border-t border-stone-100 sm:border-0 pt-1 sm:pt-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-amber-100/70 text-amber-900 border-b-2 border-amber-600 font-semibold'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-700' : 'text-stone-600 group-hover:text-stone-900'}`} />
                <span>{tab.label}</span>
                <span className={`text-xs font-arabic opacity-70 ml-0.5 ${isActive ? 'text-amber-800' : 'text-stone-600'}`}>
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
