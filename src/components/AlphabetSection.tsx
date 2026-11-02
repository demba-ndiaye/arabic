import React, { useState } from 'react';
import { ARABIC_ALPHABET } from '../data/alphabet';
import { ArabicLetter } from '../types/arabic';
import { playArabicSpeech } from '../utils/audio';
import { Volume2, Info, X, Sun, Moon, ArrowRight, Table } from 'lucide-react';

interface AlphabetSectionProps {
  audioRate: number;
}

export const AlphabetSection: React.FC<AlphabetSectionProps> = ({ audioRate }) => {
  const [selectedLetter, setSelectedLetter] = useState<ArabicLetter | null>(null);
  const [filter, setFilter] = useState<'all' | 'sun' | 'moon' | 'emphatic' | 'throat'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filteredLetters = ARABIC_ALPHABET.filter(letter => {
    if (filter === 'sun') return letter.sunLetter;
    if (filter === 'moon') return !letter.sunLetter;
    if (filter === 'emphatic') return letter.makhrajGroup === 'Emphatic';
    if (filter === 'throat') return letter.makhrajGroup === 'Throat';
    return true;
  });

  const handlePlayLetter = (letter: ArabicLetter, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    // Play the letter name and isolated sound
    playArabicSpeech(letter.arabicName, audioRate);
  };

  const handlePlayWord = (word: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    playArabicSpeech(word, audioRate);
  };

  return (
    <div className="space-y-6">
      {/* Header & stats */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-8 translate-y-12 select-none pointer-events-none opacity-10 text-9xl font-arabic">
          أبجد
        </div>
        <div className="max-w-2xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-400/20">
            28 Letters • Right-to-Left (RTL) • Cursive Script
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            The Arabic Alphabet <span className="font-arabic font-normal text-amber-300">الأبجدية العربية</span>
          </h1>
          <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
            Arabic is written from right to left in a flowing cursive script. Most letters connect to neighboring letters in 4 distinct positional shapes (Isolated, Initial, Medial, and Final). Click any letter to hear authentic pronunciation and explore its articulation point (Makhraj).
          </p>
        </div>
      </div>

      {/* Controls & Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-3 rounded-xl border border-stone-200 shadow-sm">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-semibold text-stone-500 mr-1 uppercase">Filter:</span>
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === 'all'
                ? 'bg-amber-600 text-white font-semibold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            All (28)
          </button>
          <button
            onClick={() => setFilter('sun')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
              filter === 'sun'
                ? 'bg-amber-500 text-white font-semibold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <Sun className="w-3.5 h-3.5 text-amber-500" />
            Sun Letters (14)
          </button>
          <button
            onClick={() => setFilter('moon')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
              filter === 'moon'
                ? 'bg-indigo-600 text-white font-semibold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-indigo-400" />
            Moon Letters (14)
          </button>
          <button
            onClick={() => setFilter('emphatic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === 'emphatic'
                ? 'bg-amber-800 text-white font-semibold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Emphatic (ص ض ط ظ)
          </button>
          <button
            onClick={() => setFilter('throat')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === 'throat'
                ? 'bg-emerald-700 text-white font-semibold'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Throat Letters (حلقية)
          </button>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg border border-stone-200 self-end sm:self-auto">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md flex items-center gap-1 transition-all ${
              viewMode === 'grid'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Grid Cards
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md flex items-center gap-1 transition-all ${
              viewMode === 'table'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            4 Positional Forms
          </button>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {filteredLetters.map((letter) => (
            <div
              key={letter.id}
              onClick={() => setSelectedLetter(letter)}
              className="group bg-white rounded-xl border border-stone-200 hover:border-amber-400 p-4 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer relative"
            >
              {/* Badges on top */}
              <div className="flex items-center justify-between text-xs text-stone-600 mb-2">
                <span className="font-mono text-stone-600">#{letter.id}</span>
                <div className="flex items-center gap-1">
                  {letter.sunLetter ? (
                    <span title="Sun letter (assimilates with Al-)" className="text-amber-500 p-0.5">
                      <Sun className="w-3 h-3" />
                    </span>
                  ) : (
                    <span title="Moon letter (clear Al- pronunciation)" className="text-indigo-400 p-0.5">
                      <Moon className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </div>

              {/* Main Calligraphic Glyph */}
              <div className="text-center py-2">
                <div className="font-arabic text-5xl sm:text-6xl text-stone-900 group-hover:text-amber-600 transition-colors select-none">
                  {letter.isolated}
                </div>
                <div className="mt-1 font-semibold text-stone-800 text-sm flex items-center justify-center gap-1">
                  <span>{letter.name}</span>
                  <span className="font-arabic text-xs text-stone-600">({letter.arabicName})</span>
                </div>
                <div className="text-xs text-stone-600 font-mono">
                  {letter.transliteration} • {letter.ipa}
                </div>
              </div>

              {/* Positional quick preview */}
              <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-600 font-arabic">
                <span title="Final">ـ{letter.final.replace('ـ', '')}</span>
                <span title="Medial">ـ{letter.medial.replace(/ـ/g, '')}ـ</span>
                <span title="Initial">{letter.initial.replace('ـ', '')}ـ</span>
              </div>

              {/* Example word & audio button */}
              <div className="mt-2.5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => handlePlayLetter(letter, e)}
                  className="p-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 transition-colors"
                  title="Listen to pronunciation"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => handlePlayWord(letter.exampleWord, e)}
                  className="text-right group/word"
                  title="Listen to example word"
                >
                  <span className="font-arabic text-sm text-stone-800 group-hover/word:text-amber-600 transition-colors">
                    {letter.exampleWord}
                  </span>
                  <span className="block text-[10px] text-stone-600">
                    {letter.exampleTranslation}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table View: 4 Positional Forms */}
      {viewMode === 'table' && (
        <div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 uppercase text-xs font-semibold">
                <tr>
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4 text-center">Isolated (منفصل)</th>
                  <th className="py-3 px-4 text-center">Initial (أول الكلمة)</th>
                  <th className="py-3 px-4 text-center">Medial (وسط الكلمة)</th>
                  <th className="py-3 px-4 text-center">Final (آخر الكلمة)</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Example</th>
                  <th className="py-3 px-4 text-center">Audio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredLetters.map((letter) => (
                  <tr
                    key={letter.id}
                    onClick={() => setSelectedLetter(letter)}
                    className="hover:bg-amber-50/50 cursor-pointer transition-colors"
                  >
                    <td className="py-3 px-4 text-xs font-mono text-stone-600">{letter.id}</td>
                    <td className="py-3 px-4 font-medium text-stone-900">
                      {letter.name} <span className="font-arabic text-amber-700 ml-1">({letter.arabicName})</span>
                      <span className="block text-xs text-stone-600 font-mono">{letter.transliteration}</span>
                    </td>
                    <td className="py-3 px-4 text-center font-arabic text-2xl text-stone-800 font-bold">
                      {letter.isolated}
                    </td>
                    <td className="py-3 px-4 text-center font-arabic text-2xl text-stone-800">
                      {letter.initial}
                    </td>
                    <td className="py-3 px-4 text-center font-arabic text-2xl text-stone-800">
                      {letter.medial}
                    </td>
                    <td className="py-3 px-4 text-center font-arabic text-2xl text-stone-800">
                      {letter.final}
                    </td>
                    <td className="py-3 px-4 text-xs">
                      {letter.sunLetter ? (
                        <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full font-medium">
                          <Sun className="w-3 h-3" /> Sun
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full font-medium">
                          <Moon className="w-3 h-3" /> Moon
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-arabic text-base text-stone-900 font-medium">{letter.exampleWord}</div>
                      <div className="text-xs text-stone-600">{letter.exampleTranslation} ({letter.exampleTransliteration})</div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        type="button"
                        onClick={(e) => handlePlayLetter(letter, e)}
                        className="p-1.5 rounded-md bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-800 transition-colors inline-flex"
                        title="Play pronunciation"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Letter Detail Modal */}
      {selectedLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedLetter(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-stone-600 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header glyph & name */}
            <div className="flex items-center gap-5 border-b border-stone-100 pb-5">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-600 to-amber-500 text-white flex items-center justify-center font-arabic text-5xl font-bold shadow-md shadow-amber-500/20">
                {selectedLetter.isolated}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-stone-900">{selectedLetter.name}</h3>
                  <span className="font-arabic text-xl font-bold text-amber-700">{selectedLetter.arabicName}</span>
                </div>
                <p className="text-sm text-stone-600 font-mono mt-0.5">
                  Transliteration: <strong className="text-stone-900">{selectedLetter.transliteration}</strong> | IPA: {selectedLetter.ipa}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    onClick={() => handlePlayLetter(selectedLetter)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                  >
                    <Volume2 className="w-3.5 h-3.5" /> Pronounce Letter
                  </button>
                  {selectedLetter.sunLetter ? (
                    <span className="inline-flex items-center gap-1 text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200/50">
                      <Sun className="w-3.5 h-3.5 text-amber-600" /> Sun Letter
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs text-indigo-700 bg-indigo-50 px-2 py-1 rounded-lg border border-indigo-200/50">
                      <Moon className="w-3.5 h-3.5 text-indigo-600" /> Moon Letter
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* 4 Connected Shapes Showcase */}
            <div className="my-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                Positional Shapes in Words
              </h4>
              <div className="grid grid-cols-4 gap-2 text-center bg-stone-50 p-3 rounded-xl border border-stone-200">
                <div className="bg-white p-2 rounded-lg border border-stone-100">
                  <div className="text-[10px] text-stone-600 uppercase font-semibold">Final</div>
                  <div className="font-arabic text-2xl text-stone-800 my-1">{selectedLetter.final}</div>
                  <div className="text-[10px] text-stone-600 font-arabic">آخر الكلمة</div>
                </div>
                <div className="bg-white p-2 rounded-lg border border-stone-100">
                  <div className="text-[10px] text-stone-600 uppercase font-semibold">Medial</div>
                  <div className="font-arabic text-2xl text-stone-800 my-1">{selectedLetter.medial}</div>
                  <div className="text-[10px] text-stone-600 font-arabic">وسط الكلمة</div>
                </div>
                <div className="bg-white p-2 rounded-lg border border-stone-100">
                  <div className="text-[10px] text-stone-600 uppercase font-semibold">Initial</div>
                  <div className="font-arabic text-2xl text-stone-800 my-1">{selectedLetter.initial}</div>
                  <div className="text-[10px] text-stone-600 font-arabic">أول الكلمة</div>
                </div>
                <div className="bg-white p-2 rounded-lg border border-stone-100">
                  <div className="text-[10px] text-stone-600 uppercase font-semibold">Isolated</div>
                  <div className="font-arabic text-2xl text-stone-800 my-1">{selectedLetter.isolated}</div>
                  <div className="text-[10px] text-stone-600 font-arabic">منفصل</div>
                </div>
              </div>
            </div>

            {/* Articulation point (Makhraj) & Phonetics */}
            <div className="space-y-3 text-sm">
              <div className="bg-amber-50/70 border border-amber-200/60 p-3 rounded-xl">
                <div className="flex items-center gap-1.5 font-semibold text-amber-900 text-xs mb-1">
                  <Info className="w-3.5 h-3.5 text-amber-700" /> Point of Articulation (المَخْرَج):
                </div>
                <p className="text-amber-950 text-xs leading-relaxed">
                  {selectedLetter.makhraj} ({selectedLetter.makhrajGroup} group).
                </p>
              </div>

              <div className="border border-stone-200 p-3 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs text-stone-600">Example Word:</div>
                  <div className="font-arabic text-xl text-stone-900 font-bold">{selectedLetter.exampleWord}</div>
                  <div className="text-xs text-stone-600">
                    {selectedLetter.exampleTranslation} ({selectedLetter.exampleTransliteration})
                  </div>
                </div>
                <button
                  onClick={() => handlePlayWord(selectedLetter.exampleWord)}
                  className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5 text-amber-600" /> Listen
                </button>
              </div>

              <p className="text-stone-600 text-xs italic bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                {selectedLetter.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
