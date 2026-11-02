import { VocabularyItem } from '../types/arabic';

export const VOCABULARY_LIST: VocabularyItem[] = [
  // Greetings
  {
    id: 'g-1',
    arabic: 'السَّلَامُ عَلَيْكُمْ',
    transliteration: 'As-salāmu ‘alaykum',
    english: 'Peace be upon you (Universal greeting)',
    category: 'Greetings',
    audioText: 'السلام عليكم'
  },
  {
    id: 'g-2',
    arabic: 'وَعَلَيْكُمُ السَّلَام',
    transliteration: 'Wa ‘alaykumu s-salām',
    english: 'And upon you be peace (Greeting response)',
    category: 'Greetings',
    audioText: 'وعليكم السلام'
  },
  {
    id: 'g-3',
    arabic: 'مَرْحَبًا',
    transliteration: 'Marḥaban',
    english: 'Hello / Welcome',
    category: 'Greetings',
    audioText: 'مرحبا'
  },
  {
    id: 'g-4',
    arabic: 'صَبَاحُ الخَيْر',
    transliteration: 'Ṣabāḥu l-khayr',
    english: 'Good morning',
    category: 'Greetings',
    audioText: 'صباح الخير'
  },
  {
    id: 'g-5',
    arabic: 'صَبَاحُ النُّور',
    transliteration: 'Ṣabāḥu n-nūr',
    english: 'Good morning (response: morning of light)',
    category: 'Greetings',
    audioText: 'صباح النور'
  },
  {
    id: 'g-6',
    arabic: 'مَسَاءُ الخَيْر',
    transliteration: 'Masā’u l-khayr',
    english: 'Good evening',
    category: 'Greetings',
    audioText: 'مساء الخير'
  },
  {
    id: 'g-7',
    arabic: 'شُكْرًا جَزِيلًا',
    transliteration: 'Shukran jazīlan',
    english: 'Thank you very much',
    category: 'Greetings',
    audioText: 'شكرا جزيلا'
  },
  {
    id: 'g-8',
    arabic: 'عَفْوًا',
    transliteration: '‘Afwan',
    english: 'You are welcome / Excuse me',
    category: 'Greetings',
    audioText: 'عفوا'
  },
  {
    id: 'g-9',
    arabic: 'كَيْفَ حَالُكَ؟',
    transliteration: 'Kayfa ḥāluka?',
    english: 'How are you? (to a male)',
    category: 'Greetings',
    audioText: 'كيف حالك'
  },
  {
    id: 'g-10',
    arabic: 'أَنَا بِخَيْر، الحَمْدُ لِلَّه',
    transliteration: 'Anā bi-khayr, al-ḥamdu lillāh',
    english: 'I am well, praise be to God',
    category: 'Greetings',
    audioText: 'أنا بخير الحمد لله'
  },
  {
    id: 'g-11',
    arabic: 'مَعَ السَّلَامَة',
    transliteration: 'Ma‘a s-salāmah',
    english: 'Goodbye (Go with safety)',
    category: 'Greetings',
    audioText: 'مع السلامة'
  },

  // Numbers
  {
    id: 'n-0',
    arabic: 'صِفْر (٠)',
    transliteration: 'Ṣifr (0)',
    english: 'Zero (origin of the English word cipher & zero)',
    category: 'Numbers',
    audioText: 'صفر'
  },
  {
    id: 'n-1',
    arabic: 'وَاحِد (١)',
    transliteration: 'Wāḥid (1)',
    english: 'One',
    category: 'Numbers',
    audioText: 'واحد'
  },
  {
    id: 'n-2',
    arabic: 'اِثْنَان (٢)',
    transliteration: 'Ithnān (2)',
    english: 'Two',
    category: 'Numbers',
    audioText: 'إثنان'
  },
  {
    id: 'n-3',
    arabic: 'ثَلَاثَة (٣)',
    transliteration: 'Thalāthah (3)',
    english: 'Three',
    category: 'Numbers',
    audioText: 'ثلاثة'
  },
  {
    id: 'n-4',
    arabic: 'أَرْبَعَة (٤)',
    transliteration: 'Arba‘ah (4)',
    english: 'Four',
    category: 'Numbers',
    audioText: 'أربعة'
  },
  {
    id: 'n-5',
    arabic: 'خَمْسَة (٥)',
    transliteration: 'Khamsah (5)',
    english: 'Five',
    category: 'Numbers',
    audioText: 'خمسة'
  },
  {
    id: 'n-6',
    arabic: 'سِتَّة (٦)',
    transliteration: 'Sittah (6)',
    english: 'Six',
    category: 'Numbers',
    audioText: 'ستة'
  },
  {
    id: 'n-7',
    arabic: 'سَبْعَة (٧)',
    transliteration: 'Sab‘ah (7)',
    english: 'Seven',
    category: 'Numbers',
    audioText: 'سبعة'
  },
  {
    id: 'n-8',
    arabic: 'ثَمَانِيَة (٨)',
    transliteration: 'Thamāniyah (8)',
    english: 'Eight',
    category: 'Numbers',
    audioText: 'ثمانية'
  },
  {
    id: 'n-9',
    arabic: 'تِسْعَة (٩)',
    transliteration: 'Tis‘ah (9)',
    english: 'Nine',
    category: 'Numbers',
    audioText: 'تسعة'
  },
  {
    id: 'n-10',
    arabic: 'عَشَرَة (١٠)',
    transliteration: '‘Asharah (10)',
    english: 'Ten',
    category: 'Numbers',
    audioText: 'عشرة'
  },
  {
    id: 'n-100',
    arabic: 'مِئَة (١٠٠)',
    transliteration: 'Mi’ah (100)',
    english: 'One Hundred',
    category: 'Numbers',
    audioText: 'مئة'
  },
  {
    id: 'n-1000',
    arabic: 'أَلْف (١٠٠٠)',
    transliteration: 'Alf (1000)',
    english: 'One Thousand',
    category: 'Numbers',
    audioText: 'ألف'
  },

  // Family
  {
    id: 'f-1',
    arabic: 'أَب / وَالِد',
    transliteration: 'Ab / Wālid',
    english: 'Father',
    category: 'Family',
    plural: 'آبَاء (Ābā’)',
    audioText: 'أب'
  },
  {
    id: 'f-2',
    arabic: 'أُمّ / وَالِدَة',
    transliteration: 'Umm / Wālidah',
    english: 'Mother',
    category: 'Family',
    plural: 'أُمَّهَات (Ummahāt)',
    audioText: 'أم'
  },
  {
    id: 'f-3',
    arabic: 'أَخ',
    transliteration: 'Akh',
    english: 'Brother',
    category: 'Family',
    plural: 'إِخْوَة (Ikhwah)',
    audioText: 'أخ'
  },
  {
    id: 'f-4',
    arabic: 'أُخْت',
    transliteration: 'Ukht',
    english: 'Sister',
    category: 'Family',
    plural: 'أَخَوَات (Akhawāt)',
    audioText: 'أخت'
  },
  {
    id: 'f-5',
    arabic: 'اِبْن',
    transliteration: 'Ibn',
    english: 'Son',
    category: 'Family',
    plural: 'أَبْنَاء (Abnā’)',
    audioText: 'ابن'
  },
  {
    id: 'f-6',
    arabic: 'بِنْت / اِبْنَة',
    transliteration: 'Bint / Ibnah',
    english: 'Daughter / Girl',
    category: 'Family',
    plural: 'بَنَات (Banāt)',
    audioText: 'بنت'
  },

  // Food & Drink
  {
    id: 'fd-1',
    arabic: 'مَاء',
    transliteration: 'Mā’',
    english: 'Water',
    category: 'Food & Drink',
    audioText: 'ماء'
  },
  {
    id: 'fd-2',
    arabic: 'قَهْوَة',
    transliteration: 'Qahwah',
    english: 'Coffee (the word coffee derives from qahwah)',
    category: 'Food & Drink',
    audioText: 'قهوة'
  },
  {
    id: 'fd-3',
    arabic: 'شَاي',
    transliteration: 'Shāy',
    english: 'Tea',
    category: 'Food & Drink',
    audioText: 'شاي'
  },
  {
    id: 'fd-4',
    arabic: 'خُبْز',
    transliteration: 'Khubz',
    english: 'Bread',
    category: 'Food & Drink',
    audioText: 'خبز'
  },
  {
    id: 'fd-5',
    arabic: 'تَمْر',
    transliteration: 'Tamr',
    english: 'Dates',
    category: 'Food & Drink',
    audioText: 'تمر'
  },
  {
    id: 'fd-6',
    arabic: 'زَيْتُون',
    transliteration: 'Zaytūn',
    english: 'Olives',
    category: 'Food & Drink',
    audioText: 'زيتون'
  },

  // Daily Life
  {
    id: 'dl-1',
    arabic: 'بَيْت',
    transliteration: 'Bayt',
    english: 'House / Home',
    category: 'Daily Life',
    plural: 'بُيُوت (Buyūt)',
    audioText: 'بيت'
  },
  {
    id: 'dl-2',
    arabic: 'شَمْس',
    transliteration: 'Shams',
    english: 'Sun',
    category: 'Daily Life',
    audioText: 'شمس'
  },
  {
    id: 'dl-3',
    arabic: 'قَمَر',
    transliteration: 'Qamar',
    english: 'Moon',
    category: 'Daily Life',
    audioText: 'قمر'
  },
  {
    id: 'dl-4',
    arabic: 'سَمَاء',
    transliteration: 'Samā’',
    english: 'Sky / Heaven',
    category: 'Daily Life',
    audioText: 'سماء'
  },
  {
    id: 'dl-5',
    arabic: 'أَرْض',
    transliteration: 'Arḍ',
    english: 'Earth / Land',
    category: 'Daily Life',
    audioText: 'أرض'
  },
  {
    id: 'dl-6',
    arabic: 'مَدِينَة',
    transliteration: 'Madīnah',
    english: 'City',
    category: 'Daily Life',
    plural: 'مُدُن (Mudun)',
    audioText: 'مدينة'
  },

  // Travel & Direction
  {
    id: 'tr-1',
    arabic: 'مَطَار',
    transliteration: 'Maṭār',
    english: 'Airport',
    category: 'Travel',
    audioText: 'مطار'
  },
  {
    id: 'tr-2',
    arabic: 'فُنْدُق',
    transliteration: 'Funduq',
    english: 'Hotel',
    category: 'Travel',
    plural: 'فَنَادِق (Fanādiq)',
    audioText: 'فندق'
  },
  {
    id: 'tr-3',
    arabic: 'يَمِين',
    transliteration: 'Yamīn',
    english: 'Right (direction)',
    category: 'Travel',
    audioText: 'يمين'
  },
  {
    id: 'tr-4',
    arabic: 'يَسَار / شِمَال',
    transliteration: 'Yasār / Shimāl',
    english: 'Left (direction)',
    category: 'Travel',
    audioText: 'يسار'
  },
  {
    id: 'tr-5',
    arabic: 'أَمَام',
    transliteration: 'Amām',
    english: 'In front of',
    category: 'Travel',
    audioText: 'أمام'
  },

  // Time & Days
  {
    id: 'tm-1',
    arabic: 'اليَوْم',
    transliteration: 'Al-yawm',
    english: 'Today',
    category: 'Time & Days',
    audioText: 'اليوم'
  },
  {
    id: 'tm-2',
    arabic: 'غَدًا',
    transliteration: 'Ghadan',
    english: 'Tomorrow',
    category: 'Time & Days',
    audioText: 'غدا'
  },
  {
    id: 'tm-3',
    arabic: 'أَمْس',
    transliteration: 'Ams',
    english: 'Yesterday',
    category: 'Time & Days',
    audioText: 'أمس'
  },
  {
    id: 'tm-4',
    arabic: 'سَاعَة',
    transliteration: 'Sā‘ah',
    english: 'Hour / Clock / Watch',
    category: 'Time & Days',
    audioText: 'ساعة'
  },
  {
    id: 'tm-5',
    arabic: 'يَوْمُ الجُمُعَة',
    transliteration: 'Yawmu l-jumu‘ah',
    english: 'Friday (Day of congregation)',
    category: 'Time & Days',
    audioText: 'يوم الجمعة'
  }
];
