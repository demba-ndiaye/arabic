import React, { useState, useEffect } from 'react';
import { Header, MainTab } from './components/Header';
import { ReadingTrainer } from './components/ReadingTrainer';
import { TextLibrary } from './components/TextLibrary';
import { VocabularyHub } from './components/VocabularyHub';
import { ProgressDashboard } from './components/ProgressDashboard';
import { 
  getInitialProgress, 
  saveUserProgress, 
  getAllWords, 
  saveCustomWord 
} from './utils/storage';
import { TomesViewer } from './components/TomesViewer';
import { UserProgress, WordBreakdown, AdvancedVocabWord, VolumeSource } from './types/app';
import { Globe, Heart, BookOpen } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<MainTab>('reading');
  const [audioRate, setAudioRate] = useState<number>(0.85);
  const [progress, setProgress] = useState<UserProgress>(getInitialProgress());
  const [words, setWords] = useState<AdvancedVocabWord[]>(getAllWords());
  const [notification, setNotification] = useState<string | null>(null);
  const [activeVolumeFilter, setActiveVolumeFilter] = useState<VolumeSource>('all');

  // Sync progress changes to localStorage
  const handleUpdateProgress = (updated: UserProgress) => {
    setProgress(updated);
    saveUserProgress(updated);
  };

  const handleRefreshWords = () => {
    setWords(getAllWords());
  };

  // Quick action: add word from reading trainer to personal vocabulary
  const handleAddWordToNotebook = (wb: WordBreakdown) => {
    const newWord = saveCustomWord({
      arabicWithoutHarakat: wb.wordNoHarakat,
      arabicWithHarakat: wb.wordWithHarakat,
      transliteration: wb.transliteration,
      translationFr: wb.translationFr,
      root: wb.root || '---',
      category: 'Expression',
      exampleSentenceWithHarakat: wb.wordWithHarakat,
      exampleSentenceWithoutHarakat: wb.wordNoHarakat,
      exampleTranslationFr: wb.translationFr,
      status: 'learning'
    });

    handleRefreshWords();
    setNotification(`Le mot "${wb.wordWithHarakat}" a été ajouté à votre carnet personnel !`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSelectTextForTraining = (textId: string) => {
    setActiveTab('reading');
  };

  const handleNavigateToExercises = (volumeId: 'tome1' | 'tome2' | 'tome3') => {
    setActiveVolumeFilter(volumeId);
    setActiveTab('reading');
  };

  const handleNavigateToVocab = (volumeId: 'tome1' | 'tome2' | 'tome3') => {
    setActiveTab('vocab');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-lg text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <BookOpen className="w-4 h-4 text-emerald-400" />
          <span>{notification}</span>
        </div>
      )}

      {/* Main Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        progress={progress}
        audioRate={audioRate}
        setAudioRate={setAudioRate}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'reading' && (
          <ReadingTrainer
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            audioRate={audioRate}
            onAddWordToNotebook={handleAddWordToNotebook}
            initialVolumeFilter={activeVolumeFilter}
          />
        )}

        {activeTab === 'tomes' && (
          <TomesViewer
            onNavigateToExercises={handleNavigateToExercises}
            onNavigateToVocab={handleNavigateToVocab}
          />
        )}

        {activeTab === 'texts' && (
          <TextLibrary
            audioRate={audioRate}
            onSelectForTraining={handleSelectTextForTraining}
          />
        )}

        {activeTab === 'vocab' && (
          <VocabularyHub
            words={words}
            onRefreshWords={handleRefreshWords}
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            audioRate={audioRate}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressDashboard
            progress={progress}
            onUpdateProgress={handleUpdateProgress}
            words={words}
            onNavigateToTab={(tab) => setActiveTab(tab)}
          />
        )}
      </main>

      {/* Clean Minimalist Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-arabic text-sm font-bold">ف</span>
            <span className="font-display font-semibold text-slate-900">Getting fluent in arabic</span>
            <span className="text-slate-300">•</span>
            <span>Développé pour Demba</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://arabic.monapp.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition-colors flex items-center gap-1 font-medium"
            >
              <Globe className="w-3.5 h-3.5" /> arabic.monapp.online
            </a>
            <span className="text-slate-300">•</span>
            <span className="font-arabic text-indigo-700 text-sm">
              طَلَاقَةٌ وَإِتْقَان
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
