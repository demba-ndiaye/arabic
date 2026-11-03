import React, { useState } from 'react';
import { TOMES_INFO } from '../data/tomesInfo';
import { TomePdfBook } from '../types/app';
import { 
  BookOpen, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  Download, 
  Sparkles, 
  GraduationCap, 
  ArrowRight,
  Bookmark
} from 'lucide-react';

interface TomesViewerProps {
  onNavigateToExercises: (volumeId: 'tome1' | 'tome2' | 'tome3') => void;
  onNavigateToVocab: (volumeId: 'tome1' | 'tome2' | 'tome3') => void;
}

export const TomesViewer: React.FC<TomesViewerProps> = ({
  onNavigateToExercises,
  onNavigateToVocab
}) => {
  const [selectedTomeId, setSelectedTomeId] = useState<'tome1' | 'tome2' | 'tome3'>('tome3');
  const [showPdfEmbed, setShowPdfEmbed] = useState<boolean>(false);

  const activeTome: TomePdfBook = TOMES_INFO.find(t => t.id === selectedTomeId) || TOMES_INFO[2];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100 font-display">
            <BookOpen className="w-3.5 h-3.5" /> Méthode de référence • العربية بين يديك
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
            Les 3 Tomes « Al-Arabiyyah Bayna Yadayk » <span className="font-arabic font-normal text-indigo-600">سلسلة العربية بين يديك</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Consultez les manuels originaux des Tomes 1, 2 et 3, découvrez leurs unités thématiques et leurs leçons de grammaire, puis lancez directement les entraînements et quizz extraits de chaque livre.
          </p>
        </div>

        {/* Tome switcher tabs */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-center shrink-0">
          {TOMES_INFO.map(t => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTomeId(t.id);
                setShowPdfEmbed(false);
              }}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedTomeId === t.id
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.id === 'tome1' && 'Tome 1 (Fondations)'}
              {t.id === 'tome2' && 'Tome 2 (Intermédiaire)'}
              {t.id === 'tome3' && 'Tome 3 (Avancé)'}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Tome Overview Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
        {/* Top Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
                {activeTome.level}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500 font-medium">
                {activeTome.pageCount} pages complètes
              </span>
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mt-1">{activeTome.title}</h3>
            <p className="font-arabic text-xl text-indigo-800 font-semibold mt-0.5">{activeTome.arabicTitle}</p>
          </div>

          {/* Quick buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onNavigateToExercises(activeTome.id)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-colors"
            >
              <GraduationCap className="w-4 h-4" /> S'entraîner sur ce Tome
            </button>
            <button
              onClick={() => onNavigateToVocab(activeTome.id)}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-colors"
            >
              <Layers className="w-4 h-4 text-indigo-400" /> Vocabulaire du Tome
            </button>
            <a
              href={activeTome.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Ouvrir le PDF dans un nouvel onglet"
            >
              <ExternalLink className="w-3.5 h-3.5" /> PDF
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
          {activeTome.description}
        </p>

        {/* Content Breakdown: Key Units & Grammar Topics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Key Units */}
          <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Bookmark className="w-4 h-4 text-indigo-600" />
              Unités Thématiques ({activeTome.keyUnits.length})
            </h4>
            <div className="space-y-1.5">
              {activeTome.keyUnits.map((unit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200/60">
                  <span className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-arabic text-sm">{unit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grammar lessons */}
          <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 space-y-3">
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Leçons de Grammaire & Syntaxe ({activeTome.grammarLessons.length})
            </h4>
            <div className="space-y-1.5">
              {activeTome.grammarLessons.map((lesson, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 bg-white p-2.5 rounded-xl border border-slate-200/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{lesson}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Toggleable PDF viewer */}
        <div className="pt-4 border-t border-slate-100">
          <button
            onClick={() => setShowPdfEmbed(!showPdfEmbed)}
            className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>{showPdfEmbed ? 'Masquer le visualiseur PDF intégré' : 'Afficher le visualiseur PDF intégré'}</span>
          </button>

          {showPdfEmbed && (
            <div className="mt-4 rounded-2xl overflow-hidden border border-slate-300 shadow-inner h-[650px] bg-slate-800 animate-in fade-in">
              <iframe
                src={activeTome.onlineReaderUrl || activeTome.pdfPath}
                title={activeTome.title}
                className="w-full h-full border-none"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
