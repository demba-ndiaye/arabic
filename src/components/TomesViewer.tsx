import React, { useState } from 'react';
import { TOMES_INFO } from '../data/tomesInfo';
import { TOME_UNITS_DATA, TomeUnitContent } from '../data/tomeUnitsData';
import { TomePdfBook } from '../types/app';
import { playArabicSpeech } from '../utils/audio';
import { 
  BookOpen, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  Download, 
  Sparkles, 
  GraduationCap, 
  ArrowRight,
  Bookmark,
  Volume2,
  Eye,
  EyeOff,
  FileText,
  AlertCircle
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
  const [selectedUnitId, setSelectedUnitId] = useState<string>('t3-u1');
  const [showUnitHarakat, setShowUnitHarakat] = useState<boolean>(true);
  const [showPdfEmbed, setShowPdfEmbed] = useState<boolean>(false);
  const [audioRate] = useState<number>(0.85);

  const activeTome: TomePdfBook = TOMES_INFO.find(t => t.id === selectedTomeId) || TOMES_INFO[2];

  // Filter units belonging to this tome
  const unitsForTome = TOME_UNITS_DATA.filter(u => u.tomeId === selectedTomeId);
  const activeUnit: TomeUnitContent = unitsForTome.find(u => u.id === selectedUnitId) || unitsForTome[0] || TOME_UNITS_DATA[0];

  const handleSelectTome = (id: 'tome1' | 'tome2' | 'tome3') => {
    setSelectedTomeId(id);
    setShowPdfEmbed(false);
    const firstUnit = TOME_UNITS_DATA.find(u => u.tomeId === id);
    if (firstUnit) setSelectedUnitId(firstUnit.id);
  };

  const handlePlay = (text: string) => {
    playArabicSpeech(text, audioRate);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100 font-display">
            <BookOpen className="w-3.5 h-3.5" /> Méthode Al-Arabiyyah Bayna Yadayk • العربية بين يديك
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
            Les 3 Tomes & Leçons Interactives <span className="font-arabic font-normal text-indigo-600">الكُتُبُ وَالدُّرُوس</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Consultez les dialogues, leçons et vocabulaires directement transcrits depuis chaque tome, ou ouvrez les manuels PDF complets.
          </p>
        </div>

        {/* Tome switcher tabs */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-center shrink-0">
          {TOMES_INFO.map(t => (
            <button
              key={t.id}
              onClick={() => handleSelectTome(t.id)}
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

      {/* Tome Overview & Direct Action Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
                {activeTome.level}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-slate-500 font-medium">
                {activeTome.pageCount} pages numérisées
              </span>
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-900 mt-1">{activeTome.title}</h3>
            <p className="font-arabic text-xl text-indigo-800 font-semibold mt-0.5">{activeTome.arabicTitle}</p>
          </div>

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
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-colors"
              title="Télécharger ou ouvrir le fichier PDF officiel complet"
            >
              <Download className="w-3.5 h-3.5" /> Télécharger / Ouvrir le PDF
            </a>
          </div>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
          {activeTome.description}
        </p>

        {/* Section: Leçon Interactive Native (évite les pannes d'iframes externes) */}
        <div className="pt-2 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-display font-bold text-slate-900 uppercase tracking-wider">
                Choisir une unité à étudier ({unitsForTome.length} disponibles) :
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowUnitHarakat(!showUnitHarakat)}
                className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg text-xs font-semibold text-slate-700 flex items-center gap-1.5 transition-colors"
              >
                {showUnitHarakat ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showUnitHarakat ? 'Masquer Harakat' : 'Révéler Harakat'}</span>
              </button>
            </div>
          </div>

          {/* Unit selector buttons */}
          <div className="flex flex-wrap gap-2">
            {unitsForTome.map(u => (
              <button
                key={u.id}
                onClick={() => setSelectedUnitId(u.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-2 ${
                  activeUnit.id === u.id
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-mono">
                  {u.unitNumber}
                </span>
                <span>{u.title}</span>
                <span className="font-arabic font-normal text-xs opacity-75">({u.arabicTitle})</span>
              </button>
            ))}
          </div>

          {/* Active Unit Study Canvas */}
          <div className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 font-display">
                  Unité #{activeUnit.unitNumber} • {activeTome.title}
                </span>
                <h4 className="text-lg font-display font-bold text-slate-900 mt-0.5">
                  {activeUnit.title} <span className="font-arabic text-xl font-normal text-indigo-800 ml-2">({activeUnit.arabicTitle})</span>
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">{activeUnit.theme}</p>
              </div>

              <button
                onClick={() => handlePlay(activeUnit.dialogueOrText.map(d => d.arabicWithHarakat).join(' '))}
                className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-2xs"
              >
                <Volume2 className="w-3.5 h-3.5 text-indigo-400" /> Écouter le texte
              </button>
            </div>

            {/* Dialogues / Text */}
            <div className="space-y-4">
              {activeUnit.dialogueOrText.map((block, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  {block.speakerA && (
                    <div className="flex items-center gap-2 text-xs font-display font-semibold text-slate-400">
                      <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">{block.speakerA}</span>
                      {block.speakerB && <span>et</span>}
                      {block.speakerB && <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-700">{block.speakerB}</span>}
                    </div>
                  )}
                  <div dir="rtl" className="font-arabic text-2xl sm:text-3xl text-slate-900 leading-loose py-1">
                    {showUnitHarakat ? block.arabicWithHarakat : block.arabicWithoutHarakat}
                  </div>
                  <p className="text-xs text-slate-600 italic border-t border-slate-100 pt-2">
                    "{block.translationFr}"
                  </p>
                </div>
              ))}
            </div>

            {/* Unit Vocabulary & Grammar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Vocab */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <span className="text-[11px] font-display font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-indigo-600" />
                  Vocabulaire Clé de l'Unité ({activeUnit.vocabulary.length})
                </span>
                <div className="space-y-1.5">
                  {activeUnit.vocabulary.map((v, idx) => (
                    <div 
                      key={idx}
                      onClick={() => handlePlay(v.arabicWithHarakat)}
                      className="p-2 rounded-lg bg-slate-50 hover:bg-indigo-50/60 border border-slate-100 flex items-center justify-between cursor-pointer transition-colors"
                    >
                      <div className="text-left">
                        <span className="font-medium text-xs text-slate-900">{v.translationFr}</span>
                        <span className="block text-[10px] font-mono text-indigo-600">{v.transliteration}</span>
                      </div>
                      <div className="text-right flex items-center gap-2">
                        <span className="font-arabic text-lg font-bold text-slate-900">{v.arabicWithHarakat}</span>
                        <Volume2 className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grammar Focus */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-display font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    Règle Grammaticale Enseignée :
                  </span>
                  <h5 className="font-display font-bold text-slate-900 text-sm mt-1">{activeUnit.grammarFocus.title}</h5>
                  <p className="font-arabic text-base text-indigo-800 font-semibold">{activeUnit.grammarFocus.arabicTitle}</p>
                  <p className="text-xs text-slate-700 leading-relaxed mt-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    {activeUnit.grammarFocus.ruleExplanation}
                  </p>
                </div>

                <div className="bg-emerald-50/60 p-3 rounded-lg border border-emerald-100">
                  <span className="text-[10px] uppercase font-bold text-emerald-800 block mb-0.5">Exemple d'application :</span>
                  <div dir="rtl" className="font-arabic text-lg font-bold text-slate-900">
                    {activeUnit.grammarFocus.exampleArabic}
                  </div>
                  <p className="text-[11px] text-slate-600 italic mt-0.5">
                    "{activeUnit.grammarFocus.exampleTranslation}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Visualiseur PDF */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <button
              onClick={() => setShowPdfEmbed(!showPdfEmbed)}
              className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>{showPdfEmbed ? 'Masquer le lecteur PDF' : 'Afficher le lecteur PDF numérique'}</span>
            </button>

            <a
              href={activeTome.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Ouvrir le fichier PDF dans un nouvel onglet
            </a>
          </div>

          {showPdfEmbed && (
            <div className="space-y-2">
              <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-inner h-[650px] bg-slate-900 relative">
                <iframe
                  src={activeTome.pdfPath}
                  title={activeTome.title}
                  className="w-full h-full border-none bg-white"
                  allowFullScreen
                />
              </div>
              <p className="text-[11px] text-slate-500 text-right">
                Si l'aperçu intégré ne s'affiche pas dans votre navigateur, utilisez le lien « Ouvrir le fichier PDF dans un nouvel onglet ».
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
