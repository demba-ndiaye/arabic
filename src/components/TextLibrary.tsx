import React, { useState } from 'react';
import { RELIGIOUS_TEXTS } from '../data/religiousTexts';
import { ReligiousText, WordBreakdown } from '../types/app';
import { playArabicSpeech } from '../utils/audio';
import { 
  Scroll, 
  Volume2, 
  Copy, 
  Check, 
  Eye, 
  EyeOff, 
  Sparkles, 
  BookOpen, 
  ExternalLink,
  Tag
} from 'lucide-react';

interface TextLibraryProps {
  audioRate: number;
  onSelectForTraining: (textId: string) => void;
}

export const TextLibrary: React.FC<TextLibraryProps> = ({
  audioRate,
  onSelectForTraining
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeWordModal, setActiveWordModal] = useState<WordBreakdown | null>(null);
  const [globalHarakat, setGlobalHarakat] = useState<boolean>(true);

  const categories = [
    { id: 'all', label: 'Tous les textes', arabic: 'جَمِيعُ النُّصُوص' },
    { id: 'tome3', label: 'Tome 3 (Bayna Yadayk)', arabic: 'الجزء الثالث' },
    { id: 'tome2', label: 'Tome 2 (Bayna Yadayk)', arabic: 'الجزء الثاني' },
    { id: 'tome1', label: 'Tome 1 (Bayna Yadayk)', arabic: 'الجزء الأول' },
    { id: 'quran', label: 'Versets du Coran', arabic: 'آيَاتٌ قُرْآنِيَّة' },
    { id: 'hadith', label: 'Hadiths Prophétiques', arabic: 'أَحَادِيثُ نَبَوِيَّة' },
    { id: 'dua', label: 'Invocations (Adhkar)', arabic: 'أَدْعِيَةٌ وَأَذْكَار' },
    { id: 'wisdom', label: 'Sagesses & Proverbes', arabic: 'حِكَمٌ وَأَمْثَال' },
  ];

  const filteredTexts = RELIGIOUS_TEXTS.filter((t) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'tome1' || selectedCategory === 'tome2' || selectedCategory === 'tome3') {
      return t.volumeSource === selectedCategory || t.category === selectedCategory;
    }
    return t.category === selectedCategory;
  });

  const handleCopy = (t: ReligiousText) => {
    navigator.clipboard.writeText(t.arabicWithHarakat);
    setCopiedId(t.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100 font-display">
            <Scroll className="w-3.5 h-3.5" /> Textes authentiques et sources sacrées
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
            Bibliothèque Coranique & Hadiths <span className="font-arabic font-normal text-indigo-600">المكتبة الإيمانية</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Consultez des textes religieux fondamentaux, examinez l'éloquence arabe classique, et analysez chaque mot pour assimiler la grammaire vivante du Coran et de la Sunnah.
          </p>
        </div>

        {/* Global harakat toggle */}
        <button
          onClick={() => setGlobalHarakat(!globalHarakat)}
          className={`px-4 py-2.5 rounded-xl text-xs font-semibold border flex items-center gap-2 transition-all self-start md:self-center shadow-2xs ${
            globalHarakat
              ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
              : 'bg-slate-100 border-slate-200 text-slate-700'
          }`}
        >
          {globalHarakat ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          <span>{globalHarakat ? 'Voyelles activées' : 'Mode sans voyelles'}</span>
        </button>
      </div>

      {/* Category filter pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border flex items-center gap-2 ${
              selectedCategory === c.id
                ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-2xs'
            }`}
          >
            <span>{c.label}</span>
            <span className="font-arabic text-xs opacity-75 font-normal">({c.arabic})</span>
          </button>
        ))}
      </div>

      {/* Texts List Cards */}
      <div className="space-y-6">
        {filteredTexts.map((text) => (
          <div
            key={text.id}
            className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-5 hover:border-slate-300 transition-all"
          >
            {/* Top metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {text.source}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider font-display">
                    {text.category}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mt-1">{text.title}</h3>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => playArabicSpeech(text.arabicWithHarakat, audioRate)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  title="Écouter la récitation"
                >
                  <Volume2 className="w-3.5 h-3.5" /> Écouter
                </button>

                <button
                  type="button"
                  onClick={() => handleCopy(text)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                  title="Copier le texte en arabe"
                >
                  {copiedId === text.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>

                <button
                  type="button"
                  onClick={() => onSelectForTraining(text.id)}
                  className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" /> S'entraîner à lire
                </button>
              </div>
            </div>

            {/* Arabic Text Display */}
            <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-7 border border-slate-200/70 text-center">
              <div
                dir="rtl"
                className="font-arabic text-3xl sm:text-4xl text-slate-900 leading-loose py-2 select-text"
              >
                {globalHarakat ? text.arabicWithHarakat : text.arabicWithoutHarakat}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 text-sm text-slate-700 italic max-w-2xl mx-auto leading-relaxed">
                "{text.translationFr}"
              </div>
            </div>

            {/* Word by word breakdown table */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-display font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-indigo-600" />
                  Découpage mot à mot ({text.words.length} mots décortiqués)
                </h4>
                <span className="text-[11px] text-slate-600">
                  Cliquez sur un mot pour entendre sa prononciation
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                {text.words.map((w) => (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => {
                      setActiveWordModal(w);
                      playArabicSpeech(w.wordWithHarakat, audioRate);
                    }}
                    className="p-3 bg-white hover:bg-indigo-50/60 rounded-xl border border-slate-200/80 hover:border-indigo-300 text-left transition-all group shadow-2xs"
                  >
                    <div className="font-arabic text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors text-right">
                      {w.wordWithHarakat}
                    </div>
                    <div className="text-[11px] font-mono text-indigo-600 mt-0.5">
                      {w.transliteration}
                    </div>
                    <div className="text-xs font-medium text-slate-800 line-clamp-1 mt-0.5">
                      {w.translationFr}
                    </div>
                    {w.root && (
                      <div className="text-[10px] text-slate-600 font-arabic mt-1">
                        جذر: {w.root}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Context/Benefit footer */}
            <div className="text-xs text-slate-500 bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-700">Portée spirituelle & littéraire : </span>
                <span>{text.contextOrBenefit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Word detail popup */}
      {activeWordModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 relative animate-in fade-in">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="font-arabic text-4xl font-bold text-indigo-950">
                {activeWordModal.wordWithHarakat}
              </div>
              <button
                type="button"
                onClick={() => playArabicSpeech(activeWordModal.wordWithHarakat, audioRate)}
                className="p-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition-colors"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Sens en français :</span>
                <p className="text-base font-bold text-slate-900 mt-0.5">{activeWordModal.translationFr}</p>
                <p className="text-xs font-mono text-indigo-700">{activeWordModal.transliteration}</p>
              </div>

              {activeWordModal.grammarNote && (
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                  <span className="text-[10px] uppercase font-bold text-indigo-600 block mb-1">
                    Analyse grammaticale (I'rāb) :
                  </span>
                  <p className="text-slate-800 leading-relaxed font-medium">{activeWordModal.grammarNote}</p>
                </div>
              )}

              {activeWordModal.root && (
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                  <span className="text-[10px] uppercase font-bold text-indigo-600 block mb-1">
                    Racine trilitère :
                  </span>
                  <p className="text-slate-800 font-arabic text-base">{activeWordModal.root}</p>
                </div>
              )}
            </div>

            <div className="text-right pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setActiveWordModal(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
