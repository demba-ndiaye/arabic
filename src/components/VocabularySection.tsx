import React, { useState, useMemo } from 'react';
import { VOCABULARY_LIST } from '../data/vocabulary';
import { VocabularyItem } from '../types/arabic';
import { playArabicSpeech } from '../utils/audio';
import { 
  Volume2, 
  Search, 
  RotateCw, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  Shuffle, 
  Layers, 
  ListFilter 
} from 'lucide-react';

interface VocabularySectionProps {
  audioRate: number;
}

export const VocabularySection: React.FC<VocabularySectionProps> = ({ audioRate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'flashcard' | 'grid'>('flashcard');
  
  // Flashcard state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());

  const categories = ['All', 'Greetings', 'Daily Life', 'Numbers', 'Food & Drink', 'Family', 'Travel', 'Time & Days'];

  const filteredItems = useMemo(() => {
    return VOCABULARY_LIST.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        item.arabic.includes(query) || 
        item.transliteration.toLowerCase().includes(query) || 
        item.english.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const currentItem: VocabularyItem | undefined = filteredItems[currentIndex] || filteredItems[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % (filteredItems.length || 1));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    if (filteredItems.length > 1) {
      const randomIndex = Math.floor(Math.random() * filteredItems.length);
      setCurrentIndex(randomIndex);
    }
  };

  const toggleMastered = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setMasteredIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handlePlay = (text: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    playArabicSpeech(text, audioRate);
  };

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-950 via-sky-900 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-6 translate-y-8 select-none pointer-events-none opacity-10 text-9xl font-arabic">
          مُفْرَدَات
        </div>
        <div className="max-w-2xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-200 text-xs font-semibold uppercase tracking-wider mb-3 border border-sky-400/20">
            Everyday Phrases • Numbers • Common Expressions
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Arabic Vocabulary & Flashcards <span className="font-arabic font-normal text-sky-300">المفردات والتراكيب</span>
          </h1>
          <p className="text-sky-100/90 text-sm sm:text-base leading-relaxed">
            Expand your Arabic lexicon with essential expressions, polite greetings, everyday objects, family members, food, and numbers with full vocalization (Tashkeel).
          </p>
        </div>
      </div>

      {/* Control Bar: Categories, Search & View Switcher */}
      <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-stone-600 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              placeholder="Search in Arabic, English, or transliteration..."
              className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 text-stone-900"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg border border-stone-200 self-end sm:self-auto">
            <button
              onClick={() => setViewMode('flashcard')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md flex items-center gap-1.5 transition-all ${
                viewMode === 'flashcard'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <RotateCw className="w-3.5 h-3.5 text-sky-600" /> Flashcards
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md flex items-center gap-1.5 transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <ListFilter className="w-3.5 h-3.5 text-sky-600" /> All Words ({filteredItems.length})
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 border-t border-stone-100 pt-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white font-semibold shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* FLASHCARD MODE */}
      {viewMode === 'flashcard' && (
        <div className="max-w-xl mx-auto space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-stone-200 text-stone-500">
              No vocabulary items match your search. Try adjusting the query or category.
            </div>
          ) : (
            <>
              {/* Card Header & Counter */}
              <div className="flex items-center justify-between text-xs text-stone-600 px-2">
                <span>
                  Card <strong className="text-stone-900">{currentIndex + 1}</strong> of {filteredItems.length}
                </span>
                <span className="font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200/50">
                  {currentItem.category}
                </span>
                <span>
                  Mastered: <strong className="text-emerald-600">{masteredIds.size}</strong>
                </span>
              </div>

              {/* The Flip Card */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`w-full min-h-[300px] bg-white rounded-2xl border-2 transition-all duration-300 p-8 shadow-lg hover:shadow-xl cursor-pointer flex flex-col justify-between select-none relative ${
                  isFlipped ? 'border-sky-500 bg-sky-50/20' : 'border-stone-200'
                }`}
              >
                {/* Top card actions */}
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => toggleMastered(currentItem.id, e)}
                    className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full transition-colors ${
                      masteredIds.has(currentItem.id)
                        ? 'bg-emerald-100 text-emerald-800 font-semibold'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    <CheckCircle className={`w-3.5 h-3.5 ${masteredIds.has(currentItem.id) ? 'text-emerald-600' : 'text-stone-600'}`} />
                    {masteredIds.has(currentItem.id) ? 'Mastered' : 'Mark Mastered'}
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handlePlay(currentItem.audioText || currentItem.arabic, e)}
                    className="p-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 transition-colors"
                    title="Pronounce Arabic"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Card Center Content */}
                <div className="text-center py-6">
                  {!isFlipped ? (
                    /* Front: Arabic */
                    <div className="space-y-4 animate-in fade-in">
                      <div className="font-arabic text-5xl sm:text-6xl font-bold text-stone-900 leading-tight">
                        {currentItem.arabic}
                      </div>
                      <p className="text-xs text-stone-600 flex items-center justify-center gap-1">
                        <RotateCw className="w-3.5 h-3.5 text-stone-600" /> Click anywhere to reveal English & pronunciation
                      </p>
                    </div>
                  ) : (
                    /* Back: Transliteration & English */
                    <div className="space-y-3 animate-in fade-in">
                      <div className="font-arabic text-3xl font-bold text-sky-900">
                        {currentItem.arabic}
                      </div>
                      <div className="text-base font-mono text-sky-700 font-semibold">
                        {currentItem.transliteration}
                      </div>
                      <div className="text-2xl font-bold text-stone-900">
                        {currentItem.english}
                      </div>
                      {currentItem.plural && (
                        <div className="text-xs text-stone-600 mt-2 bg-stone-100 py-1 px-3 rounded-lg inline-block">
                          Plural: <span className="font-arabic text-sm text-stone-800">{currentItem.plural}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Bottom Prompt */}
                <div className="text-center border-t border-stone-100 pt-3 text-[11px] text-stone-600 uppercase font-semibold tracking-wider">
                  {isFlipped ? 'Click to hide translation' : 'Click to flip'}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={handlePrev}
                  className="flex-1 py-3 px-4 bg-white border border-stone-200 hover:bg-stone-50 rounded-xl font-medium text-stone-700 flex items-center justify-center gap-2 text-sm shadow-xs transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                <button
                  onClick={handleShuffle}
                  className="p-3 bg-white border border-stone-200 hover:bg-stone-50 rounded-xl text-stone-700 shadow-xs transition-colors"
                  title="Random card"
                >
                  <Shuffle className="w-4 h-4 text-sky-600" />
                </button>

                <button
                  onClick={handleNext}
                  className="flex-1 py-3 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 text-sm shadow-md shadow-sky-600/20 transition-all"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* GRID / LIST MODE */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs hover:border-sky-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-sky-800 bg-sky-50 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <button
                    onClick={() => toggleMastered(item.id)}
                    className="text-stone-600 hover:text-emerald-600"
                    title={masteredIds.has(item.id) ? 'Mastered' : 'Mark as mastered'}
                  >
                    <CheckCircle className={`w-4 h-4 ${masteredIds.has(item.id) ? 'text-emerald-600' : 'text-stone-600'}`} />
                  </button>
                </div>

                <div className="my-2">
                  <div className="font-arabic text-2xl font-bold text-stone-900">
                    {item.arabic}
                  </div>
                  <div className="text-xs font-mono text-sky-700 mt-0.5">
                    {item.transliteration}
                  </div>
                </div>

                <p className="text-sm font-medium text-stone-800 mt-1">
                  {item.english}
                </p>
                {item.plural && (
                  <p className="text-xs text-stone-600 mt-1">
                    Plural: <span className="font-arabic font-bold text-stone-800">{item.plural}</span>
                  </p>
                )}
              </div>

              <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-600">Audio playback</span>
                <button
                  type="button"
                  onClick={() => handlePlay(item.audioText || item.arabic)}
                  className="p-1.5 rounded-lg bg-stone-100 hover:bg-sky-100 text-stone-700 hover:text-sky-800 transition-colors"
                  title="Listen"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
