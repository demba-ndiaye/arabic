import React, { useState } from 'react';
import { GRAMMAR_LESSONS } from '../data/grammar';
import { playArabicSpeech } from '../utils/audio';
import { Volume2, Compass, Sun, Moon, Sparkles, BookOpen, Check } from 'lucide-react';

interface GrammarSectionProps {
  audioRate: number;
}

export const GrammarSection: React.FC<GrammarSectionProps> = ({ audioRate }) => {
  const [activeLessonId, setActiveLessonId] = useState<string>('sun-moon');

  // Interactive Sun/Moon Simulator state
  const [sunMoonTestWord, setSunMoonTestWord] = useState({
    word: 'شَمْس',
    clean: 'شمس',
    firstLetter: 'ش',
    isSun: true,
    trans: 'Ash-shams',
    meaning: 'The sun'
  });

  const testWords = [
    { word: 'شَمْس', firstLetter: 'ش', isSun: true, trans: 'Ash-shams (The sun)', withAl: 'اَلشَّمْس' },
    { word: 'قَمَر', firstLetter: 'ق', isSun: false, trans: 'Al-qamar (The moon)', withAl: 'اَلْقَمَر' },
    { word: 'نُور', firstLetter: 'ن', isSun: true, trans: 'An-nūr (The light)', withAl: 'اَلنُّور' },
    { word: 'بَاب', firstLetter: 'ب', isSun: false, trans: 'Al-bāb (The door)', withAl: 'اَلْبَاب' },
    { word: 'رَجُل', firstLetter: 'ر', isSun: true, trans: 'Ar-rajul (The man)', withAl: 'اَلرَّجُل' },
    { word: 'كِتَاب', firstLetter: 'ك', isSun: false, trans: 'Al-kitāb (The book)', withAl: 'اَلْكِتَاب' },
    { word: 'سَيَّارَة', firstLetter: 'س', isSun: true, trans: 'As-sayyārah (The car)', withAl: 'اَلسَّيَّارَة' },
    { word: 'مَدِينَة', firstLetter: 'م', isSun: false, trans: 'Al-madīnah (The city)', withAl: 'اَلْمَدِينَة' },
  ];

  // Interactive Attached Pronoun state
  const [baseNoun, setBaseNoun] = useState({ word: 'كِتَاب', trans: 'kitāb', en: 'book' });
  const [selectedPronoun, setSelectedPronoun] = useState({
    suffix: 'ـِي',
    suffixClean: 'ي',
    label: 'My (1st person)',
    attachedTrans: 'ī'
  });

  const sampleNouns = [
    { word: 'كِتَاب', trans: 'kitāb', en: 'book' },
    { word: 'بَيْت', trans: 'bayt', en: 'house' },
    { word: 'قَلَم', trans: 'qalam', en: 'pen' },
    { word: 'صَدِيق', trans: 'ṣadīq', en: 'friend' },
    { word: 'سَيَّارَة', trans: 'sayyārah', en: 'car' }
  ];

  const pronounOptions = [
    { suffix: 'ـِي', suffixClean: 'ي', label: 'My (Me)', attachedTrans: 'ī', pronounAr: 'أَنَا' },
    { suffix: 'ـكَ', suffixClean: 'كَ', label: 'Your (Male)', attachedTrans: 'uka', pronounAr: 'أَنْتَ' },
    { suffix: 'ـكِ', suffixClean: 'كِ', label: 'Your (Female)', attachedTrans: 'uki', pronounAr: 'أَنْتِ' },
    { suffix: 'ـهُ', suffixClean: 'هُ', label: 'His', attachedTrans: 'uhu', pronounAr: 'هُوَ' },
    { suffix: 'ـهَا', suffixClean: 'هَا', label: 'Her', attachedTrans: 'uhā', pronounAr: 'هِيَ' },
    { suffix: 'ـنَا', suffixClean: 'نَا', label: 'Our', attachedTrans: 'unā', pronounAr: 'نَحْنُ' },
  ];

  const getCombinedNoun = () => {
    // If noun ends with taa marbuta (ة), it turns into regular taa (ت) before pronoun
    let base = baseNoun.word;
    if (base.endsWith('َة')) {
      base = base.slice(0, -2) + 'َت';
    } else if (base.endsWith('ة')) {
      base = base.slice(0, -1) + 'ت';
    }
    return base + selectedPronoun.suffixClean;
  };

  const activeLesson = GRAMMAR_LESSONS.find(l => l.id === activeLessonId) || GRAMMAR_LESSONS[0];

  const handlePlay = (text: string) => {
    playArabicSpeech(text, audioRate);
  };

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-emerald-900 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-6 translate-y-8 select-none pointer-events-none opacity-10 text-9xl font-arabic">
          قَوَاعِد
        </div>
        <div className="max-w-2xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-3 border border-teal-400/20">
            Arabic Syntax (Naḥw) • Morphology (Ṣarf) • Interactive Simulators
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Arabic Grammar Guides <span className="font-arabic font-normal text-teal-300">القواعد النحوية والصرفية</span>
          </h1>
          <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed">
            Discover the logical elegance of Arabic sentence construction, Sun & Moon letter assimilation, attached possessive pronouns, and genitive prepositional phrases.
          </p>
        </div>
      </div>

      {/* Lesson Navigation Tabs */}
      <div className="flex flex-wrap gap-2">
        {GRAMMAR_LESSONS.map((lesson) => (
          <button
            key={lesson.id}
            onClick={() => setActiveLessonId(lesson.id)}
            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border flex items-center gap-2 ${
              activeLessonId === lesson.id
                ? 'bg-teal-800 text-white border-teal-700 shadow-md ring-2 ring-teal-500/20'
                : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200 shadow-2xs'
            }`}
          >
            <Compass className="w-4 h-4 text-teal-600" />
            <span>{lesson.title.split('(')[0].trim()}</span>
          </button>
        ))}
      </div>

      {/* Active Lesson Details */}
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-stone-100 pb-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
              {activeLesson.level}
            </span>
            <span className="font-arabic text-teal-700 font-bold text-lg">{activeLesson.arabicTitle}</span>
          </div>
          <h2 className="text-2xl font-bold text-stone-900">{activeLesson.title}</h2>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            {activeLesson.summary}
          </p>
        </div>

        {/* Lesson Rules */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
            Core Grammar Rules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activeLesson.keyRules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-stone-50 p-3.5 rounded-xl border border-stone-100">
                <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {rule}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Examples Table */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
            Annotated Sentence Examples
          </h3>
          <div className="space-y-3">
            {activeLesson.examples.map((ex, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-teal-300 transition-colors"
              >
                <div>
                  <div className="font-arabic text-2xl font-bold text-stone-900">
                    {ex.arabic}
                  </div>
                  <div className="text-xs font-mono text-teal-700 font-medium mt-0.5">
                    {ex.transliteration}
                  </div>
                  <div className="text-sm font-semibold text-stone-800 mt-1">
                    "{ex.english}"
                  </div>
                  {ex.notes && (
                    <div className="text-xs text-stone-600 mt-1 italic">
                      Note: {ex.notes}
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => handlePlay(ex.arabic)}
                  className="self-start sm:self-center px-3 py-2 bg-white hover:bg-teal-50 text-teal-800 rounded-lg border border-stone-200 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <Volume2 className="w-4 h-4 text-teal-600" /> Listen
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INTERACTIVE TOOL 1: Sun & Moon Letter Simulator */}
      {activeLessonId === 'sun-moon' && (
        <div className="bg-gradient-to-br from-amber-50/60 to-indigo-50/60 rounded-2xl border-2 border-stone-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-amber-500 text-white rounded-lg">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900">Interactive "Al-" (الـ) Assimilation Simulator</h3>
              <p className="text-xs text-stone-600">Pick any word to see whether "Al-" merges into a Sun letter or stays distinct as a Moon letter.</p>
            </div>
          </div>

          {/* Word Selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {testWords.map((item) => (
              <button
                key={item.word}
                onClick={() => setSunMoonTestWord({
                  word: item.word,
                  clean: item.word,
                  firstLetter: item.firstLetter,
                  isSun: item.isSun,
                  trans: item.trans,
                  meaning: item.trans.split('(')[1]?.replace(')', '') || ''
                })}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 border ${
                  sunMoonTestWord.word === item.word
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200'
                }`}
              >
                <span className="font-arabic text-base">{item.word}</span>
                {item.isSun ? (
                  <Sun className="w-3 h-3 text-amber-500" />
                ) : (
                  <Moon className="w-3 h-3 text-indigo-500" />
                )}
              </button>
            ))}
          </div>

          {/* Result Card */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                {sunMoonTestWord.isSun ? (
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">
                    <Sun className="w-3.5 h-3.5 text-amber-600" /> Sun Letter: '{sunMoonTestWord.firstLetter}'
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-900">
                    <Moon className="w-3.5 h-3.5 text-indigo-600" /> Moon Letter: '{sunMoonTestWord.firstLetter}'
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="font-arabic text-4xl text-stone-400">الـ + {sunMoonTestWord.word}</span>
                <span className="text-stone-400">=</span>
                <span className={`font-arabic text-5xl font-bold ${sunMoonTestWord.isSun ? 'text-amber-700' : 'text-indigo-700'}`}>
                  {sunMoonTestWord.isSun ? `اَل${sunMoonTestWord.word}` : `اَلْ${sunMoonTestWord.word}`}
                </span>
              </div>

              <div className="text-sm font-mono text-stone-700 mt-2 font-medium">
                Pronunciation: <strong className="text-stone-900">{sunMoonTestWord.trans}</strong>
              </div>
              <p className="text-xs text-stone-600 mt-1">
                {sunMoonTestWord.isSun
                  ? 'Notice how the "L" is not spoken; instead the first letter is doubled with a Shaddah (ّ).'
                  : 'Notice how the "L" is pronounced distinctly with a Sukun (ْ).'}
              </p>
            </div>

            <button
              onClick={() => handlePlay(`ال${sunMoonTestWord.clean}`)}
              className="px-5 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-semibold flex items-center gap-2 text-sm shadow-md transition-all shrink-0"
            >
              <Volume2 className="w-4 h-4 text-amber-400" /> Hear Pronunciation
            </button>
          </div>
        </div>
      )}

      {/* INTERACTIVE TOOL 2: Attached Pronouns Calculator */}
      {activeLessonId === 'pronouns' && (
        <div className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 rounded-2xl border-2 border-purple-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-purple-600 text-white rounded-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-900">Attached Possessive Pronoun Workbench</h3>
              <p className="text-xs text-stone-600">Select any noun and attach a possessive suffix to watch the word fuse and hear it spoken.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pickers */}
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  1. Select Noun:
                </label>
                <div className="flex flex-wrap gap-2">
                  {sampleNouns.map(n => (
                    <button
                      key={n.word}
                      onClick={() => setBaseNoun(n)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        baseNoun.word === n.word
                          ? 'bg-purple-700 text-white border-purple-700 shadow-sm'
                          : 'bg-white hover:bg-stone-100 text-stone-700 border-stone-200'
                      }`}
                    >
                      <span className="font-arabic text-base mr-1">{n.word}</span>
                      <span>({n.en})</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                  2. Select Possessive Pronoun:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {pronounOptions.map(p => (
                    <button
                      key={p.suffix}
                      onClick={() => setSelectedPronoun(p)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        selectedPronoun.suffix === p.suffix
                          ? 'bg-purple-100/80 border-purple-500 text-purple-950 font-semibold ring-2 ring-purple-500/20'
                          : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-arabic text-xl font-bold text-purple-800">{p.suffix}</span>
                        <span className="text-[10px] bg-stone-100 px-1.5 py-0.5 rounded font-arabic">{p.pronounAr}</span>
                      </div>
                      <div className="text-xs text-stone-700 mt-1">{p.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Fused word display */}
            <div className="bg-white rounded-xl border border-stone-200 p-6 flex flex-col items-center justify-center text-center shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full mb-3">
                Fused Word (الكلمة المتصلة)
              </span>

              <div className="font-arabic text-6xl font-bold text-stone-900 mb-2">
                {getCombinedNoun()}
              </div>

              <div className="text-base font-mono text-purple-700 font-semibold">
                {baseNoun.trans}-{selectedPronoun.attachedTrans}
              </div>

              <div className="text-lg font-bold text-stone-800 mt-1">
                "{selectedPronoun.label.split(' ')[0]} {baseNoun.en}"
              </div>

              <button
                onClick={() => handlePlay(getCombinedNoun())}
                className="mt-5 px-6 py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-xl font-semibold flex items-center gap-2 text-sm shadow-md transition-all"
              >
                <Volume2 className="w-4 h-4" /> Listen to Joined Word
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
