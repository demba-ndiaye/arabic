import { HarakatVowel } from '../types/arabic';

export const HARAKAT_LIST: HarakatVowel[] = [
  {
    id: 'fatha',
    name: 'Fathah',
    arabicName: 'فَتْحَة',
    symbol: 'َ',
    description: 'Small slanted line above a letter. Produces a short "a" sound (like "u" in "cup" or "a" in "cat").',
    soundExample: 'بَ (Ba)',
    phoneticRule: 'Short open front vowel /a/. With emphatic letters it becomes a deeper back [ɑ].',
    category: 'short-vowel'
  },
  {
    id: 'kasra',
    name: 'Kasrah',
    arabicName: 'كَسْرَة',
    symbol: 'ِ',
    description: 'Small slanted line underneath a letter. Produces a short "i" sound (like "i" in "bit").',
    soundExample: 'بِ (Bi)',
    phoneticRule: 'Short close front unrounded vowel /i/.',
    category: 'short-vowel'
  },
  {
    id: 'damma',
    name: 'Dammah',
    arabicName: 'ضَمَّة',
    symbol: 'ُ',
    description: 'Small curl (like a miniature و) placed above a letter. Produces a short "u" sound (like "oo" in "look").',
    soundExample: 'بُ (Bu)',
    phoneticRule: 'Short close back rounded vowel /u/. Lips are rounded.',
    category: 'short-vowel'
  },
  {
    id: 'sukun',
    name: 'Sukūn',
    arabicName: 'سُكُون',
    symbol: 'ْ',
    description: 'Small circle above a letter indicating absence of any vowel (consonant stop/rest).',
    soundExample: 'بْ (B)',
    phoneticRule: 'Marks zero vowel /Ø/. Ends a syllable or begins a consonant cluster.',
    category: 'sukun-shaddah'
  },
  {
    id: 'shaddah',
    name: 'Shaddah',
    arabicName: 'شَدَّة',
    symbol: 'ّ',
    description: 'Miniature "w" shape above letter denoting letter doubling / gemination (holding consonant twice as long).',
    soundExample: 'بَّ (Bba)',
    phoneticRule: 'Doubles the consonant length. First instance carries sukun, second carries the attached vowel.',
    category: 'sukun-shaddah'
  },
  {
    id: 'tanwin-fath',
    name: 'Tanwīn Fatḥ (Fatḥatān)',
    arabicName: 'تَنْوِين فَتْح',
    symbol: 'ً',
    description: 'Double fathah marks accusative indefinite noun suffix "-an" (usually supported by an Alif: ـًا).',
    soundExample: 'كِتَابًا (Kitāban)',
    phoneticRule: 'Produces /-an/ nasal ending at the end of an indefinite noun or adverb.',
    category: 'tanwin'
  },
  {
    id: 'tanwin-damm',
    name: 'Tanwīn Ḍamm (Ḍammatān)',
    arabicName: 'تَنْوِين ضَمّ',
    symbol: 'ٌ',
    description: 'Double dammah marks nominative indefinite noun suffix "-un".',
    soundExample: 'كِتَابٌ (Kitābun)',
    phoneticRule: 'Produces /-un/ nasal ending indicating a nominative case subject or predicate.',
    category: 'tanwin'
  },
  {
    id: 'tanwin-kasr',
    name: 'Tanwīn Kasr (Kasratān)',
    arabicName: 'تَنْوِين كَسْر',
    symbol: 'ٍ',
    description: 'Double kasrah marks genitive indefinite noun suffix "-in".',
    soundExample: 'كِتَابٍ (Kitābin)',
    phoneticRule: 'Produces /-in/ nasal ending indicating a genitive case (possession or after preposition).',
    category: 'tanwin'
  },
  {
    id: 'madd-alif',
    name: 'Long Vowel Alif (Madd)',
    arabicName: 'أَلِف المَدّ',
    symbol: 'ـَا',
    description: 'Fatha followed by Alif creates the long "aa" sound (held for 2 beats).',
    soundExample: 'بَاب (Bāb - Door)',
    phoneticRule: 'Long open vowel /aː/. Twice the duration of short fathah.',
    category: 'long-vowel'
  },
  {
    id: 'madd-waaw',
    name: 'Long Vowel Wāw (Madd)',
    arabicName: 'وَاو المَدّ',
    symbol: 'ـُو',
    description: 'Damma followed by Waw creates the long "uu" / "oo" sound (held for 2 beats).',
    soundExample: 'نُور (Nūr - Light)',
    phoneticRule: 'Long close back rounded vowel /uː/.',
    category: 'long-vowel'
  },
  {
    id: 'madd-yaa',
    name: 'Long Vowel Yā’ (Madd)',
    arabicName: 'يَاء المَدّ',
    symbol: 'ـِي',
    description: 'Kasra followed by Yaa creates the long "ee" sound (held for 2 beats).',
    soundExample: 'سَفِينَة (Safīnah - Ship)',
    phoneticRule: 'Long close front unrounded vowel /iː/.',
    category: 'long-vowel'
  }
];
