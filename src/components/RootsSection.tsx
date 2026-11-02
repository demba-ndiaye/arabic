import React, { useState } from 'react';
import { ROOTS_DATABASE } from '../data/roots';
import { playArabicSpeech } from '../utils/audio';
import { Volume2, Layers, GitBranch, Sparkles } from 'lucide-react';

interface RootsSectionProps {
  audioRate: number;
}

export const RootsSection: React.FC<RootsSectionProps> = ({ audioRate }) => {
  const [selectedRootIndex, setSelectedRootIndex] = useState(0);
  const activeRoot = ROOTS_DATABASE[selectedRootIndex];

  const handlePlayWord = (word: string) => {
    playArabicSpeech(word, audioRate);
  };

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-violet-950 via-purple-900 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-6 translate-y-8 select-none pointer-events-none opacity-10 text-9xl font-arabic">
          جُذُور
        </div>
        <div className="max-w-2xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-3 border border-purple-400/20">
            Trilateral Root Morphology • Awzān Patterns • The Arabic Engine
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Arabic Trilateral Roots <span className="font-arabic font-normal text-purple-300">نظام الجذور والأوزان</span>
          </h1>
          <p className="text-purple-100/90 text-sm sm:text-base leading-relaxed">
            Almost every Arabic word is derived from a 3-consonant core root (الجذر الثلاثي). By inserting vowels and prefixes/suffixes according to systematic templates (الأوزان), a single root blossoms into dozens of related words: verbs, nouns, places, professions, and tools.
          </p>
        </div>
      </div>

      {/* Root Selector Tabs */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-xs font-bold uppercase text-stone-500 mr-2 flex items-center gap-1">
          <Layers className="w-4 h-4 text-purple-600" />
          Select Root:
        </span>
        {ROOTS_DATABASE.map((r, index) => {
          const isSelected = selectedRootIndex === index;
          return (
            <button
              key={r.root}
              onClick={() => setSelectedRootIndex(index)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border ${
                isSelected
                  ? 'bg-purple-900 text-white border-purple-800 shadow-md scale-102 ring-2 ring-purple-500/20'
                  : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200 shadow-xs'
              }`}
            >
              <span className="font-arabic text-lg font-bold">{r.root}</span>
              <span className="text-xs opacity-80">({r.transliteration})</span>
            </button>
          );
        })}
      </div>

      {/* Root Showcase Card */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-stone-100 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-900 flex items-center justify-center font-arabic text-3xl font-bold border border-purple-200 shadow-xs">
                {activeRoot.rootLetters.join(' ')}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-stone-900 font-mono">{activeRoot.transliteration}</h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800">
                    {activeRoot.category}
                  </span>
                </div>
                <p className="text-sm text-stone-600 mt-0.5">
                  Core semantic meaning: <strong className="text-stone-900">{activeRoot.coreMeaning}</strong>
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => handlePlayWord(activeRoot.rootLetters.join(' '))}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-800 rounded-xl text-xs font-semibold border border-purple-200 transition-colors"
          >
            <Volume2 className="w-4 h-4 text-purple-700" /> Pronounce Root Letters
          </button>
        </div>

        {/* Tree of Derivations */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
              <GitBranch className="w-4 h-4 text-purple-600" />
              Words derived from this root ({activeRoot.derivations.length} examples)
            </h4>
            <span className="text-xs text-stone-600 hidden sm:inline">
              Hover/click any word to listen to its pronunciation
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeRoot.derivations.map((d, i) => (
              <div
                key={i}
                className="group p-4 rounded-xl border border-stone-200 bg-stone-50/40 hover:bg-purple-50/30 hover:border-purple-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-600 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-700 bg-purple-100/70 px-2 py-0.5 rounded-md">
                      {d.partOfSpeech}
                    </span>
                    <span className="text-[11px] font-mono text-stone-600">{d.formOrPattern}</span>
                  </div>

                  <div className="my-2">
                    <div className="font-arabic text-3xl font-bold text-stone-900 group-hover:text-purple-900 transition-colors">
                      {d.word}
                    </div>
                    <div className="text-xs font-mono text-stone-600 mt-1">
                      {d.transliteration}
                    </div>
                  </div>

                  <p className="text-sm font-medium text-stone-800 mt-1">
                    "{d.meaning}"
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-stone-200/60 flex items-center justify-between">
                  <span className="text-[11px] text-stone-600">
                    Template: <code className="bg-white px-1.5 py-0.5 rounded border border-stone-200 text-purple-900">{d.formOrPattern.split(' ')[0]}</code>
                  </span>
                  <button
                    type="button"
                    onClick={() => handlePlayWord(d.word)}
                    className="p-1.5 rounded-lg bg-white hover:bg-purple-100 text-purple-800 border border-stone-200 transition-colors shadow-2xs"
                    title="Play pronunciation"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Morphological Template Explanation */}
      <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-stone-200 rounded-2xl p-6 sm:p-7 shadow-lg">
        <h4 className="text-base font-bold text-white flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          The "F - ‘ - L" (ف - ع - ل) Measuring Scale
        </h4>
        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-3xl">
          Arab grammarians use the generic verb <strong>فَعَلَ (Fa‘ala - to do)</strong> as a universal algebraic formula. The 1st root letter is called the <em>Fā’</em>, the 2nd is the <em>‘Ayn</em>, and the 3rd is the <em>Lām</em>.
          <br className="my-1" />
          For example, the pattern for an office/place is <strong>مَفْعَل (Maf‘al)</strong>. Plugging the root <strong>ك-ت-ب (K-T-B)</strong> into <em>Maf‘al</em> generates <strong>مَكْتَب (Mak-tab = desk/office)</strong>. Plugging <strong>ع-م-ل (Work)</strong> produces <strong>مَعْمَل (Ma‘-mal = factory/lab)</strong>!
        </p>
      </div>
    </div>
  );
};
