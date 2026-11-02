import React, { useState } from 'react';
import { HARAKAT_LIST } from '../data/harakat';
import { ARABIC_ALPHABET } from '../data/alphabet';
import { playArabicSpeech } from '../utils/audio';
import { Volume2, Sparkles, ArrowRight, BookOpen } from 'lucide-react';

interface HarakatSectionProps {
  audioRate: number;
}

export const HarakatSection: React.FC<HarakatSectionProps> = ({ audioRate }) => {
  // Workbench state
  const [testLetter, setTestLetter] = useState('ب');
  const [activeHarakah, setActiveHarakah] = useState('َ'); // default fathah
  const [activeHarakahName, setActiveHarakahName] = useState('Fathah (Short "a")');

  const harakatOptions = [
    { symbol: 'َ', name: 'Fatḥah', latin: 'a', sound: 'Ba' },
    { symbol: 'ِ', name: 'Kasrah', latin: 'i', sound: 'Bi' },
    { symbol: 'ُ', name: 'Ḍammah', latin: 'u', sound: 'Bu' },
    { symbol: 'ْ', name: 'Sukūn', latin: 'silent', sound: 'B' },
    { symbol: 'ّ', name: 'Shaddah', latin: 'double', sound: 'Bba' },
    { symbol: 'ً', name: 'Tanwīn Fatḥ', latin: 'an', sound: 'Ban' },
    { symbol: 'ٍ', name: 'Tanwīn Kasr', latin: 'in', sound: 'Bin' },
    { symbol: 'ٌ', name: 'Tanwīn Ḍamm', latin: 'un', sound: 'Bun' },
  ];

  const quickLetters = ['ب', 'ت', 'ث', 'ج', 'د', 'ر', 'س', 'ص', 'ط', 'ع', 'ف', 'ق', 'ك', 'ل', 'م', 'ن', 'هـ', 'و', 'ي'];

  const combinedGlyph = `${testLetter}${activeHarakah}`;

  const handlePlayCombined = () => {
    playArabicSpeech(combinedGlyph, audioRate);
  };

  const handlePlayCard = (word: string) => {
    playArabicSpeech(word, audioRate);
  };

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-6 translate-y-8 select-none pointer-events-none opacity-10 text-9xl font-arabic">
          حَرَكَات
        </div>
        <div className="max-w-2xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-400/20">
            Diacritics • Short & Long Vowels • Nunation
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Arabic Harakat & Vowels <span className="font-arabic font-normal text-emerald-300">الحركات والتشكيل</span>
          </h1>
          <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
            In standard Arabic, the 28 alphabet letters represent consonants and long vowels. Short vowels and phonetic markers (Harakāt / Tashkeel) are written as diacritic accents above or below the letters to determine exact pronunciation, grammar cases, and meanings.
          </p>
        </div>
      </div>

      {/* Interactive Diacritics Laboratory Workbench */}
      <div className="bg-white rounded-2xl border-2 border-emerald-500/30 p-6 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-stone-900">Interactive Diacritics Workbench (مختبر التشكيل)</h2>
            <p className="text-xs text-stone-600">Select any letter and apply different vowel marks to hear how pronunciation changes live.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Letter selector */}
          <div className="md:col-span-5 space-y-3">
            <label className="text-xs font-semibold uppercase text-stone-500 tracking-wider">
              1. Choose a Base Letter:
            </label>
            <div className="flex flex-wrap gap-1.5">
              {quickLetters.map((letter) => (
                <button
                  key={letter}
                  type="button"
                  onClick={() => setTestLetter(letter)}
                  className={`w-9 h-9 rounded-lg font-arabic text-xl flex items-center justify-center transition-all ${
                    testLetter === letter
                      ? 'bg-emerald-600 text-white font-bold shadow-md scale-105'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>

            <label className="text-xs font-semibold uppercase text-stone-500 tracking-wider block pt-2">
              2. Choose a Diacritic (Harakah):
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {harakatOptions.map((opt) => (
                <button
                  key={opt.symbol}
                  type="button"
                  onClick={() => {
                    setActiveHarakah(opt.symbol);
                    setActiveHarakahName(`${opt.name} (${opt.latin})`);
                  }}
                  className={`p-2 rounded-lg text-center transition-all border ${
                    activeHarakah === opt.symbol
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-2 ring-emerald-500/20'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                  }`}
                >
                  <div className="font-arabic text-2xl font-bold text-stone-900">
                    ب{opt.symbol}
                  </div>
                  <div className="text-[11px] font-medium truncate">{opt.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Result Showcase */}
          <div className="md:col-span-7 bg-gradient-to-br from-stone-50 to-emerald-50/40 rounded-xl p-6 border border-emerald-100 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider bg-emerald-100/80 px-3 py-1 rounded-full mb-3">
              Live Sound & Visualization
            </span>
            <div className="w-32 h-32 rounded-2xl bg-white border-2 border-emerald-500/40 shadow-lg flex items-center justify-center font-arabic text-7xl text-stone-900 select-none">
              {combinedGlyph}
            </div>

            <div className="mt-4">
              <div className="text-lg font-bold text-stone-900">
                Active Mark: <span className="text-emerald-700">{activeHarakahName}</span>
              </div>
              <p className="text-xs text-stone-600 mt-0.5">
                Combined Letter: {testLetter} + {activeHarakah}
              </p>
            </div>

            <button
              onClick={handlePlayCombined}
              className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-semibold shadow-md shadow-emerald-700/20 hover:scale-105 transition-all text-sm"
            >
              <Volume2 className="w-4 h-4" /> Listen to Pronunciation
            </button>
          </div>
        </div>
      </div>

      {/* Short vs Long Vowels Comparison */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-amber-600" />
          Short Vowels vs Long Vowels (الحركات القصيرة والحركات الطويلة)
        </h3>
        <p className="text-xs text-stone-600 mb-4 leading-relaxed">
          In Arabic, long vowels (Madd) are simply holding the sound of the short vowel twice as long. A Fatha is lengthened by Alif (ا), a Kasra by Yaa (ي), and a Damma by Waw (و).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Fatha vs Alif */}
          <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-700 uppercase">Short "a" vs Long "ā"</span>
              <button
                onClick={() => playArabicSpeech('بَ بَا', audioRate)}
                className="p-1 rounded-md bg-stone-200 hover:bg-amber-100 text-stone-700 hover:text-amber-800"
                title="Play both"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center justify-around py-3 bg-white rounded-lg border border-stone-100">
              <div className="text-center">
                <div className="font-arabic text-4xl text-stone-900 font-bold">بَ</div>
                <div className="text-xs text-stone-600 font-mono mt-1">Ba (1 beat)</div>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-600" />
              <div className="text-center">
                <div className="font-arabic text-4xl text-amber-700 font-bold">بَا</div>
                <div className="text-xs text-stone-600 font-mono mt-1">Bā (2 beats)</div>
              </div>
            </div>
            <p className="text-[11px] text-stone-600 mt-2">Example: كَتَبَ (kataba - wrote) vs كَاتِب (kātib - writer)</p>
          </div>

          {/* Kasra vs Yaa */}
          <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-700 uppercase">Short "i" vs Long "ī"</span>
              <button
                onClick={() => playArabicSpeech('بِ بِي', audioRate)}
                className="p-1 rounded-md bg-stone-200 hover:bg-amber-100 text-stone-700 hover:text-amber-800"
                title="Play both"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center justify-around py-3 bg-white rounded-lg border border-stone-100">
              <div className="text-center">
                <div className="font-arabic text-4xl text-stone-900 font-bold">بِ</div>
                <div className="text-xs text-stone-600 font-mono mt-1">Bi (1 beat)</div>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-600" />
              <div className="text-center">
                <div className="font-arabic text-4xl text-amber-700 font-bold">بِي</div>
                <div className="text-xs text-stone-600 font-mono mt-1">Bī (2 beats)</div>
              </div>
            </div>
            <p className="text-[11px] text-stone-600 mt-2">Example: سِنّ (sinn - tooth) vs سِين (sīn - letter seen)</p>
          </div>

          {/* Damma vs Waw */}
          <div className="border border-stone-200 rounded-xl p-4 bg-stone-50/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-700 uppercase">Short "u" vs Long "ū"</span>
              <button
                onClick={() => playArabicSpeech('بُ بُو', audioRate)}
                className="p-1 rounded-md bg-stone-200 hover:bg-amber-100 text-stone-700 hover:text-amber-800"
                title="Play both"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center justify-around py-3 bg-white rounded-lg border border-stone-100">
              <div className="text-center">
                <div className="font-arabic text-4xl text-stone-900 font-bold">بُ</div>
                <div className="text-xs text-stone-600 font-mono mt-1">Bu (1 beat)</div>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-600" />
              <div className="text-center">
                <div className="font-arabic text-4xl text-amber-700 font-bold">بُو</div>
                <div className="text-xs text-stone-600 font-mono mt-1">Bū (2 beats)</div>
              </div>
            </div>
            <p className="text-[11px] text-stone-600 mt-2">Example: قُلْ (qul - say!) vs يَقُولُ (yaqūlu - he says)</p>
          </div>
        </div>
      </div>

      {/* Complete Harakat Reference Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {HARAKAT_LIST.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center font-arabic text-3xl font-bold">
                  {item.symbol}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                  {item.category}
                </span>
              </div>
              <h4 className="text-base font-bold text-stone-900 flex items-center gap-1.5">
                {item.name} <span className="font-arabic text-sm text-amber-700">({item.arabicName})</span>
              </h4>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-stone-600 uppercase font-semibold block">Sample Sound</span>
                <span className="font-arabic text-base font-bold text-stone-900">{item.soundExample}</span>
              </div>
              <button
                type="button"
                onClick={() => handlePlayCard(item.soundExample)}
                className="p-2 rounded-lg bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-amber-800 transition-colors"
                title="Listen"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
