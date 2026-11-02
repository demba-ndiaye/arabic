import React, { useState, useMemo } from 'react';
import { AdvancedVocabWord, UserProgress } from '../types/app';
import { playArabicSpeech } from '../utils/audio';
import { saveCustomWord, deleteCustomWord } from '../utils/storage';
import { 
  Search, 
  RotateCw, 
  Plus, 
  Volume2, 
  CheckCircle, 
  Trash2, 
  Sparkles, 
  BookMarked,
  Layers,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Eye,
  EyeOff
} from 'lucide-react';

interface VocabularyHubProps {
  words: AdvancedVocabWord[];
  onRefreshWords: () => void;
  progress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
  audioRate: number;
}

export const VocabularyHub: React.FC<VocabularyHubProps> = ({
  words,
  onRefreshWords,
  progress,
  onUpdateProgress,
  audioRate
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes');
  const [viewMode, setViewMode] = useState<'flashcards' | 'list'>('flashcards');

  // Flashcards state
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHarakatOnFront, setShowHarakatOnFront] = useState(false);

  // New word modal
  const [showAddModal, setShowAddModal] = useState(false);
  const [newArabicWithoutHarakat, setNewArabicWithoutHarakat] = useState('');
  const [newArabicWithHarakat, setNewArabicWithHarakat] = useState('');
  const [newTransliteration, setNewTransliteration] = useState('');
  const [newTranslationFr, setNewTranslationFr] = useState('');
  const [newRoot, setNewRoot] = useState('');
  const [newCategory, setNewCategory] = useState<'Coranique' | 'Hadith' | 'Théologie' | 'Littérature' | 'Expression'>('Coranique');
  const [newExample, setNewExample] = useState('');
  const [newExampleTranslation, setNewExampleTranslation] = useState('');

  const categories = ['Toutes', 'Coranique', 'Hadith', 'Théologie', 'Littérature', 'Expression', 'Mes Mots Ajoutés'];

  const filteredWords = useMemo(() => {
    return words.filter((w) => {
      let matchesCat = true;
      if (selectedCategory === 'Mes Mots Ajoutés') {
        matchesCat = Boolean(w.isCustom);
      } else if (selectedCategory !== 'Toutes') {
        matchesCat = w.category === selectedCategory;
      }

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q ||
        w.arabicWithoutHarakat.includes(q) ||
        w.arabicWithHarakat.includes(q) ||
        w.translationFr.toLowerCase().includes(q) ||
        w.transliteration.toLowerCase().includes(q) ||
        w.root.toLowerCase().includes(q);

      return matchesCat && matchesQuery;
    });
  }, [words, selectedCategory, searchQuery]);

  const currentWord: AdvancedVocabWord | undefined = filteredWords[cardIndex] || filteredWords[0];

  const handleNextCard = () => {
    setIsFlipped(false);
    setShowHarakatOnFront(false);
    setCardIndex((prev) => (prev + 1) % (filteredWords.length || 1));
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setShowHarakatOnFront(false);
    setCardIndex((prev) => (prev - 1 + filteredWords.length) % (filteredWords.length || 1));
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setShowHarakatOnFront(false);
    if (filteredWords.length > 1) {
      const rand = Math.floor(Math.random() * filteredWords.length);
      setCardIndex(rand);
    }
  };

  const handleToggleMastered = (wordId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    const isMastered = progress.totalWordsMastered.includes(wordId);
    let updatedMastered: string[];
    let updatedLearning: string[];

    if (isMastered) {
      updatedMastered = progress.totalWordsMastered.filter(id => id !== wordId);
      updatedLearning = [...progress.totalWordsLearning, wordId];
    } else {
      updatedMastered = [...progress.totalWordsMastered, wordId];
      updatedLearning = progress.totalWordsLearning.filter(id => id !== wordId);
    }

    onUpdateProgress({
      ...progress,
      totalWordsMastered: updatedMastered,
      totalWordsLearning: updatedLearning,
      dailyWordsReviewedToday: progress.dailyWordsReviewedToday + 1
    });
  };

  const handleCreateCustomWord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArabicWithHarakat.trim() || !newTranslationFr.trim()) return;

    saveCustomWord({
      arabicWithoutHarakat: newArabicWithoutHarakat.trim() || newArabicWithHarakat.replace(/[\u064B-\u065F\u0670]/g, ''),
      arabicWithHarakat: newArabicWithHarakat.trim(),
      transliteration: newTransliteration.trim() || '---',
      translationFr: newTranslationFr.trim(),
      root: newRoot.trim() || '---',
      category: newCategory,
      exampleSentenceWithoutHarakat: newExample.trim(),
      exampleSentenceWithHarakat: newExample.trim(),
      exampleTranslationFr: newExampleTranslation.trim(),
      status: 'learning'
    });

    onRefreshWords();
    setShowAddModal(false);

    // Reset inputs
    setNewArabicWithHarakat('');
    setNewArabicWithoutHarakat('');
    setNewTransliteration('');
    setNewTranslationFr('');
    setNewRoot('');
    setNewExample('');
    setNewExampleTranslation('');
  };

  const handleDeleteWord = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    deleteCustomWord(id);
    onRefreshWords();
  };

  const isCurrentMastered = currentWord && progress.totalWordsMastered.includes(currentWord.id);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100 font-display">
            <BookMarked className="w-3.5 h-3.5" /> Carnet de vocabulaire avancé
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">
            Enrichir mon Vocabulaire Arabe <span className="font-arabic font-normal text-indigo-600">إِثْرَاءُ المُفْرَدَات</span>
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Consolidez les termes à haute valeur littéraire, théologique et coranique. Révisez avec le mode Flashcard sans voyelles d'abord, puis retournez la carte pour examiner la racine et l'exemple.
          </p>
        </div>

        {/* Add custom word button */}
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors self-start md:self-center shrink-0"
        >
          <Plus className="w-4 h-4" /> Ajouter un mot à mon carnet
        </button>
      </div>

      {/* Control bar */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCardIndex(0);
                setIsFlipped(false);
              }}
              placeholder="Rechercher par mot arabe, racine, français..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-900"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 self-end sm:self-auto">
            <button
              onClick={() => setViewMode('flashcards')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                viewMode === 'flashcards'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5 text-indigo-600" /> Flashcards
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                viewMode === 'list'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-indigo-600" /> Liste ({filteredWords.length})
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-t border-slate-100 pt-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCardIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white font-semibold shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FLASHCARD MODE */}
      {viewMode === 'flashcards' && (
        <div className="max-w-xl mx-auto space-y-4">
          {filteredWords.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              Aucun mot ne correspond à votre filtre.
            </div>
          ) : (
            currentWord && (
              <>
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs text-slate-500 px-2 font-display">
                  <span>
                    Mot <strong className="text-slate-900 font-semibold">{cardIndex + 1}</strong> sur {filteredWords.length}
                  </span>
                  <span className="font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                    {currentWord.category}
                  </span>
                  <span>
                    Maîtrisés : <strong className="text-emerald-600 font-semibold">{progress.totalWordsMastered.length}</strong>
                  </span>
                </div>

                {/* The Flashcard */}
                <div
                  onClick={() => setIsFlipped(!isFlipped)}
                  className={`w-full min-h-[320px] bg-white rounded-2xl border-2 transition-all duration-200 p-6 sm:p-8 shadow-xs hover:shadow-md cursor-pointer flex flex-col justify-between select-none relative ${
                    isFlipped ? 'border-indigo-400 bg-indigo-50/20' : 'border-slate-200'
                  }`}
                >
                  {/* Top card bar */}
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => handleToggleMastered(currentWord.id, e)}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full transition-all border ${
                        isCurrentMastered
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200'
                      }`}
                    >
                      <CheckCircle className={`w-3.5 h-3.5 ${isCurrentMastered ? 'text-emerald-600' : 'text-slate-400'}`} />
                      <span>{isCurrentMastered ? 'Maîtrisé' : 'Marquer comme appris'}</span>
                    </button>

                    <div className="flex items-center gap-1.5">
                      {/* Harakat toggle on front */}
                      {!isFlipped && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowHarakatOnFront(!showHarakatOnFront);
                          }}
                          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                          title="Afficher/masquer les Harakat"
                        >
                          {showHarakatOnFront ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          playArabicSpeech(currentWord.arabicWithHarakat, audioRate);
                        }}
                        className="p-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition-colors"
                        title="Écouter la prononciation"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      {currentWord.isCustom && (
                        <button
                          type="button"
                          onClick={(e) => handleDeleteWord(currentWord.id, e)}
                          className="p-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors"
                          title="Supprimer ce mot personnalisé"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Center content */}
                  <div className="text-center py-6">
                    {!isFlipped ? (
                      /* RECTO: Word without harakat (practice reading) */
                      <div className="space-y-4">
                        <div className="font-arabic text-5xl sm:text-6xl font-bold text-slate-900">
                          {showHarakatOnFront ? currentWord.arabicWithHarakat : currentWord.arabicWithoutHarakat}
                        </div>
                        <div className="text-xs text-slate-600 flex items-center justify-center gap-1">
                          <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                            Racine : {currentWord.root}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 flex items-center justify-center gap-1 pt-2">
                          <RotateCw className="w-3.5 h-3.5" /> Cliquez pour révéler la vocalisation complète, le sens et l'exemple
                        </p>
                      </div>
                    ) : (
                      /* VERSO: Detailed meaning, pronunciation, context */
                      <div className="space-y-3 animate-in fade-in">
                        <div className="font-arabic text-4xl font-bold text-indigo-950">
                          {currentWord.arabicWithHarakat}
                        </div>
                        <div className="text-sm font-mono text-indigo-700 font-semibold">
                          {currentWord.transliteration}
                        </div>
                        <div className="text-xl font-bold text-slate-900">
                          {currentWord.translationFr}
                        </div>

                        {/* Example sentence */}
                        {currentWord.exampleSentenceWithHarakat && (
                          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-left mt-3">
                            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                              Exemple contextuel ({currentWord.exampleSource || 'Littéraire'}) :
                            </span>
                            <div dir="rtl" className="font-arabic text-lg text-slate-900 font-medium leading-relaxed">
                              {currentWord.exampleSentenceWithHarakat}
                            </div>
                            <p className="text-xs text-slate-600 mt-1 italic">
                              "{currentWord.exampleTranslationFr}"
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card bottom hint */}
                  <div className="text-center border-t border-slate-100 pt-3 text-[11px] text-slate-600 uppercase font-display font-semibold tracking-wider">
                    {isFlipped ? 'Cliquez pour cacher' : 'Cliquez pour retourner'}
                  </div>
                </div>

                {/* Navigation actions */}
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={handlePrevCard}
                    className="flex-1 py-3 px-4 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl font-semibold text-slate-700 flex items-center justify-center gap-2 text-xs shadow-2xs transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" /> Précédent
                  </button>

                  <button
                    onClick={handleShuffle}
                    className="p-3 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl text-slate-700 shadow-2xs transition-colors"
                    title="Mélanger aléatoirement"
                  >
                    <Shuffle className="w-4 h-4 text-indigo-600" />
                  </button>

                  <button
                    onClick={handleNextCard}
                    className="flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold flex items-center justify-center gap-2 text-xs shadow-xs transition-colors"
                  >
                    Suivant <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )
          )}
        </div>
      )}

      {/* LIST / TABLE MODE */}
      {viewMode === 'list' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWords.map((word) => {
            const isMastered = progress.totalWordsMastered.includes(word.id);
            return (
              <div
                key={word.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:border-indigo-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">
                      {word.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleToggleMastered(word.id)}
                      className={`text-xs flex items-center gap-1 font-semibold ${isMastered ? 'text-emerald-600' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>{isMastered ? 'Appris' : 'À apprendre'}</span>
                    </button>
                  </div>

                  <div className="my-2.5">
                    <div className="font-arabic text-3xl font-bold text-slate-900">
                      {word.arabicWithHarakat}
                    </div>
                    <div className="text-xs font-mono text-indigo-700 mt-0.5">
                      {word.transliteration} • Racine : {word.root}
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    {word.translationFr}
                  </p>

                  {word.exampleSentenceWithHarakat && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 text-xs text-slate-500">
                      <div dir="rtl" className="font-arabic text-sm text-slate-800">
                        {word.exampleSentenceWithHarakat}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Prononciation audio</span>
                  <button
                    type="button"
                    onClick={() => playArabicSpeech(word.arabicWithHarakat, audioRate)}
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 transition-colors"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal: Ajouter un mot personnalisé */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-200 relative animate-in fade-in">
            <h3 className="text-lg font-display font-bold text-slate-900 mb-1">
              Ajouter un mot au carnet de Demba
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Enrichissez votre base personnelle avec les mots rencontrés lors de vos lectures coraniques et littéraires.
            </p>

            <form onSubmit={handleCreateCustomWord} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Mot en arabe (avec voyelles / Harakat) * :
                </label>
                <input
                  type="text"
                  required
                  dir="rtl"
                  value={newArabicWithHarakat}
                  onChange={(e) => setNewArabicWithHarakat(e.target.value)}
                  placeholder="مثال: الإِخْلَاص"
                  className="w-full p-2.5 border border-slate-200 rounded-xl text-xl font-arabic focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Sens en français * :
                </label>
                <input
                  type="text"
                  required
                  value={newTranslationFr}
                  onChange={(e) => setNewTranslationFr(e.target.value)}
                  placeholder="Ex: La sincérité pure et exclusive envers Allah"
                  className="w-full p-2 border border-slate-200 rounded-xl text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Racine trilitère (Jidhr) :
                  </label>
                  <input
                    type="text"
                    value={newRoot}
                    onChange={(e) => setNewRoot(e.target.value)}
                    placeholder="Ex: خ-ل-ص"
                    className="w-full p-2 border border-slate-200 rounded-xl text-sm font-arabic"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Catégorie :
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as unknown as typeof newCategory)}
                    className="w-full p-2 border border-slate-200 rounded-xl text-xs bg-white"
                  >
                    <option value="Coranique">Coranique</option>
                    <option value="Hadith">Hadith</option>
                    <option value="Théologie">Théologie</option>
                    <option value="Littérature">Littérature</option>
                    <option value="Expression">Expression</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Phrase d'exemple (Verset, Hadith ou phrase d'application) :
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={newExample}
                  onChange={(e) => setNewExample(e.target.value)}
                  placeholder="مثال: قُلْ هُوَ اللَّهُ أَحَدٌ"
                  className="w-full p-2 border border-slate-200 rounded-xl font-arabic text-base"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Traduction de l'exemple :
                </label>
                <input
                  type="text"
                  value={newExampleTranslation}
                  onChange={(e) => setNewExampleTranslation(e.target.value)}
                  placeholder="Traduction française"
                  className="w-full p-2 border border-slate-200 rounded-xl text-xs"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-medium"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold shadow-2xs"
                >
                  Enregistrer le mot
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
