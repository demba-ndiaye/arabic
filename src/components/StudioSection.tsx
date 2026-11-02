import React, { useState } from 'react';
import { playArabicSpeech } from '../utils/audio';
import { 
  Volume2, 
  Copy, 
  Check, 
  Trash2, 
  Type, 
  Calculator, 
  BookOpen, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface StudioSectionProps {
  audioRate: number;
}

export const StudioSection: React.FC<StudioSectionProps> = ({ audioRate }) => {
  const [text, setText] = useState('السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّه');
  const [selectedFont, setSelectedFont] = useState<'font-arabic' | 'font-cairo'>('font-arabic');
  const [copied, setCopied] = useState(false);

  // Number converter state
  const [inputNumber, setInputNumber] = useState('2026');

  // Virtual keyboard layout
  const keyboardRows = [
    ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د', 'ذ'],
    ['ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط'],
    ['ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ']
  ];

  const diacritics = [
    { label: 'فَتْحَة', symbol: 'َ' },
    { label: 'كَسْرَة', symbol: 'ِ' },
    { label: 'ضَمَّة', symbol: 'ُ' },
    { label: 'سُكُون', symbol: 'ْ' },
    { label: 'شَدَّة', symbol: 'ّ' },
    { label: 'تَنْوِين فَتْح', symbol: 'ً' },
    { label: 'تَنْوِين كَسْر', symbol: 'ٍ' },
    { label: 'تَنْوِين ضَمّ', symbol: 'ٌ' }
  ];

  const sampleTexts = [
    {
      title: 'Universal Greeting',
      arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُه',
      english: 'Peace, mercy, and blessings of God be upon you.'
    },
    {
      title: 'Famous Proverb',
      arabic: 'اَلْعَقْلُ السَّلِيمُ فِي الجِسْمِ السَّلِيم',
      english: 'A sound mind in a sound body.'
    },
    {
      title: 'Wisdom Quote',
      arabic: 'اُطْلُبُوا العِلْمَ مِنَ المَهْدِ إِلَى اللَّحْد',
      english: 'Seek knowledge from the cradle to the grave.'
    },
    {
      title: 'Opening of the Quran (Al-Fātiḥah)',
      arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ • الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      english: 'In the name of God, the Entirely Merciful, the Especially Merciful • Praise be to God, Lord of the worlds.'
    }
  ];

  const handleInsertChar = (char: string) => {
    setText(prev => prev + char);
  };

  const handleBackspace = () => {
    setText(prev => prev.slice(0, -1));
  };

  const handleClear = () => {
    setText('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePlay = () => {
    if (text.trim()) {
      playArabicSpeech(text, audioRate);
    }
  };

  // Western numerals to Eastern Arabic (٠-٩)
  const toEasternArabicNumerals = (numStr: string): string => {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return numStr.replace(/[0-9]/g, (d) => arabicDigits[parseInt(d, 10)]);
  };

  // Convert basic numbers into Arabic words
  const numberToWords = (num: number): string => {
    const units = ['', 'وَاحِد', 'اِثْنَان', 'ثَلَاثَة', 'أَرْبَعَة', 'خَمْسَة', 'سِتَّة', 'سَبْعَة', 'ثَمَانِيَة', 'تِسْعَة'];
    const tens = ['', 'عَشَرَة', 'عِشْرُونَ', 'ثَلَاثُونَ', 'أَرْبَعُونَ', 'خَمْسُونَ', 'سِتُّونَ', 'سَبْعُونَ', 'ثَمَانُونَ', 'تِسْعُونَ'];
    const teens = ['عَشَرَة', 'أَحَدَ عَشَرَ', 'اثْنَا عَشَرَ', 'ثَلَاثَةَ عَشَرَ', 'أَرْبَعَةَ عَشَرَ', 'خَمْسَةَ عَشَرَ', 'سِتَّةَ عَشَرَ', 'سَبْعَةَ عَشَرَ', 'ثَمَانِيَةَ عَشَرَ', 'تِسْعَةَ عَشَرَ'];
    const hundreds = ['', 'مِئَة', 'مِئَتَان', 'ثَلَاثُمِئَة', 'أَرْبَعُمِئَة', 'خَمْسُمِئَة', 'سِتُّمِئَة', 'سَبْعُمِئَة', 'ثَمَانِمِئَة', 'تِسْعُمِئَة'];

    if (num === 0) return 'صِفْر';
    if (num === 2026) return 'أَلْفَانِ وَسِتَّةٌ وَعِشْرُونَ';

    const parts: string[] = [];

    // Thousands
    const thousands = Math.floor(num / 1000);
    const remainderAfterThousands = num % 1000;

    if (thousands === 1) parts.push('أَلْف');
    else if (thousands === 2) parts.push('أَلْفَان');
    else if (thousands >= 3 && thousands <= 10) parts.push(`${units[thousands]} آلَاف`);
    else if (thousands > 10) parts.push(`${thousands} أَلْف`);

    // Hundreds
    const hund = Math.floor(remainderAfterThousands / 100);
    const remHund = remainderAfterThousands % 100;
    if (hund > 0) parts.push(hundreds[hund]);

    // Tens and units
    if (remHund > 0) {
      if (remHund < 10) {
        parts.push(units[remHund]);
      } else if (remHund < 20) {
        parts.push(teens[remHund - 10]);
      } else {
        const u = remHund % 10;
        const t = Math.floor(remHund / 10);
        if (u === 0) {
          parts.push(tens[t]);
        } else {
          parts.push(`${units[u]} وَ${tens[t]}`);
        }
      }
    }

    return parts.join(' وَ');
  };

  const parsedNum = parseInt(inputNumber.replace(/\D/g, ''), 10) || 0;

  return (
    <div className="space-y-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-amber-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-6 translate-y-8 select-none pointer-events-none opacity-10 text-9xl font-arabic">
          مُحَرِّر
        </div>
        <div className="max-w-2xl relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-400/20">
            Virtual Arabic Keyboard • Tashkeel Inserter • Number Converter
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Arabic Text Studio <span className="font-arabic font-normal text-amber-300">محرر النصوص والأرقام</span>
          </h1>
          <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
            Compose and listen to Arabic text with a full on-screen diacritics keyboard, change typographical fonts, convert numbers into Eastern Arabic digits, or load classical Arabic passages.
          </p>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Editor Area */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-3">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                  <Type className="w-3.5 h-3.5" /> Font:
                </span>
                <button
                  onClick={() => setSelectedFont('font-arabic')}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                    selectedFont === 'font-arabic'
                      ? 'bg-amber-100 text-amber-900 font-bold'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  Amiri (Calligraphic)
                </button>
                <button
                  onClick={() => setSelectedFont('font-cairo')}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                    selectedFont === 'font-cairo'
                      ? 'bg-amber-100 text-amber-900 font-bold'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  Cairo (Modern Sans)
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleClear}
                  className="p-1.5 rounded-lg text-stone-600 hover:text-stone-700 hover:bg-stone-100"
                  title="Clear text"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center gap-1 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
                <button
                  onClick={handlePlay}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-1.5 shadow-2xs transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5" /> Read Aloud
                </button>
              </div>
            </div>

            {/* Big Arabic Textarea */}
            <textarea
              dir="rtl"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="اكتب هنا باللغة العربية مع التشكيل..."
              rows={4}
              className={`w-full p-4 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-2xl sm:text-3xl text-stone-900 leading-loose ${selectedFont} resize-none`}
            />

            <div className="flex items-center justify-between text-xs text-stone-600 px-1">
              <span>Characters: {text.length}</span>
              <span>Words: {text.trim() ? text.trim().split(/\s+/).length : 0}</span>
            </div>

            {/* Diacritics Bar */}
            <div className="pt-3 border-t border-stone-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-2">
                Quick Tashkeel Inserter (اضغط لإضافة التشكيل):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {diacritics.map((d) => (
                  <button
                    key={d.symbol}
                    type="button"
                    onClick={() => handleInsertChar(d.symbol)}
                    className="px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-sm font-arabic font-bold flex items-center gap-1 transition-colors"
                    title={d.label}
                  >
                    <span>ـ{d.symbol}</span>
                    <span className="text-[10px] text-amber-800 font-sans font-normal opacity-80">{d.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Virtual Keyboard */}
            <div className="pt-3 border-t border-stone-100 space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-1">
                Virtual Arabic Keyboard:
              </span>
              {keyboardRows.map((row, rIdx) => (
                <div key={rIdx} className="flex justify-center gap-1" dir="rtl">
                  {row.map((char) => (
                    <button
                      key={char}
                      type="button"
                      onClick={() => handleInsertChar(char)}
                      className="w-8 h-9 sm:w-10 sm:h-10 rounded-lg bg-stone-100 hover:bg-amber-100 text-stone-900 font-arabic text-lg sm:text-xl font-bold flex items-center justify-center border border-stone-200 transition-colors active:scale-95 shadow-2xs"
                    >
                      {char}
                    </button>
                  ))}
                </div>
              ))}
              <div className="flex justify-center gap-2 pt-1" dir="rtl">
                <button
                  type="button"
                  onClick={() => handleInsertChar(' ')}
                  className="flex-1 py-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold shadow-2xs"
                >
                  مسافة (Space)
                </button>
                <button
                  type="button"
                  onClick={handleBackspace}
                  className="px-4 py-1.5 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-800 text-xs font-semibold shadow-2xs"
                >
                  حذف (Backspace)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Numbers Converter & Classical Texts */}
        <div className="lg:col-span-5 space-y-6">
          {/* Numbers Converter */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
              <Calculator className="w-4 h-4 text-amber-600" />
              <span>Arabic Numbers Converter (محول الأرقام)</span>
            </div>

            <div>
              <label className="text-xs text-stone-500 font-semibold uppercase block mb-1.5">
                Enter Western Digits (e.g. 1984, 2026, 42):
              </label>
              <input
                type="text"
                value={inputNumber}
                onChange={(e) => setInputNumber(e.target.value.replace(/[^0-9]/g, '').slice(0, 7))}
                className="w-full px-3 py-2 border border-stone-200 rounded-lg text-lg font-mono focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
              />
            </div>

            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">Eastern Arabic Digits:</span>
                <span className="font-arabic text-3xl font-bold text-amber-700">
                  {toEasternArabicNumerals(inputNumber || '0')}
                </span>
              </div>

              <div className="border-t border-stone-200 pt-3">
                <span className="text-xs text-stone-500 font-medium block mb-1">Spelled Out in Arabic:</span>
                <div className="flex items-center justify-between">
                  <span className="font-arabic text-xl font-bold text-stone-900">
                    {numberToWords(parsedNum)}
                  </span>
                  <button
                    onClick={() => playArabicSpeech(numberToWords(parsedNum), audioRate)}
                    className="p-1.5 rounded-lg bg-white hover:bg-amber-100 text-stone-700 hover:text-amber-800 border border-stone-200"
                    title="Pronounce number"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Classical Passages */}
          <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Classical Passages & Wisdom</span>
            </div>
            <p className="text-xs text-stone-600">Click any quote to load it directly into the studio editor.</p>

            <div className="space-y-2.5">
              {sampleTexts.map((sample, idx) => (
                <div
                  key={idx}
                  onClick={() => setText(sample.arabic)}
                  className="p-3 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-amber-50/50 hover:border-amber-300 cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-amber-800 mb-1">
                    <span>{sample.title}</span>
                    <span className="text-[10px] text-stone-600 flex items-center gap-0.5">
                      Load <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                  <div className="font-arabic text-lg font-bold text-stone-900 text-right leading-relaxed">
                    {sample.arabic}
                  </div>
                  <p className="text-xs text-stone-600 mt-1">
                    "{sample.english}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
