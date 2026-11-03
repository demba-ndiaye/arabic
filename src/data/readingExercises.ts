import { ReadingQuestion } from '../types/app';

export const READING_EXERCISES: ReadingQuestion[] = [
  // --- TOME 3 EXERCISES ---
  {
    id: 't3-q1',
    sentenceWithoutHarakat: 'وكلم الله موسى تكليما',
    targetWordIndex: 3,
    targetWordWithoutHarakat: 'تكليما',
    correctWordWithHarakat: 'تَكْلِيمًا',
    options: ['تَكْلِيمٌ', 'تَكْلِيمًا', 'تَكْلِيمٍ', 'تَكْلِيمُ'],
    explanation: '"تكليما" est un complément circonstanciel absolu (مفعول مطلق) dérivé du verbe كَلَّمَ pour insister sur l\'action. Le maf‘ūl muṭlaq est toujours au cas accusatif (منصوب بالفتحة) : تَكْلِيمًا.',
    source: 'Tome 3 - Unité 10 : المفعول المطلق (p. 221) & Sourate An-Nisā’',
    translationFr: 'Et Allah a parlé à Moïse de vive voix.',
    volumeSource: 'tome3',
    grammarRuleKey: 'maful_mutlaq'
  },
  {
    id: 't3-q2',
    sentenceWithoutHarakat: 'ينفق المؤمنون أموالهم ابتغاء مرضاة الله',
    targetWordIndex: 3,
    targetWordWithoutHarakat: 'ابتغاء',
    correctWordWithHarakat: 'ابْتِغَاءَ',
    options: ['ابْتِغَاءُ', 'ابْتِغَاءِ', 'ابْتِغَاءَ', 'ابْتِغَاءً'],
    explanation: '"ابتغاء" est un complément de cause (مفعول لأجله), il répond à la question « Dans quel but dépensent-ils ? ». Il est au cas accusatif (منصوب بالفتحة) et ne prend pas de tanwīn car il est annexé (مضاف) : ابْتِغَاءَ.',
    source: 'Tome 3 - Unité 10 : المفعول لأجله (p. 227) & Sourate Al-Baqarah',
    translationFr: 'Les croyants dépensent leurs biens en quête de l\'agrément d\'Allah.',
    volumeSource: 'tome3',
    grammarRuleKey: 'maful_liajlih'
  },
  {
    id: 't3-q3',
    sentenceWithoutHarakat: 'وإذا قرئ القرآن فاستمعوا له وأنصتوا',
    targetWordIndex: 2,
    targetWordWithoutHarakat: 'القرآن',
    correctWordWithHarakat: 'القُرْآنُ',
    options: ['القُرْآنَ', 'القُرْآنُ', 'القُرْآنِ', 'القُرْآنْ'],
    explanation: 'Le verbe "قُرِئَ" est à la voix passive (فعل مبني للمجهول). Le mot qui le suit est le sujet passif (نائب الفاعل) et prend impérativement le cas nominatif (مرفوع بالضمة) : القُرْآنُ.',
    source: 'Tome 3 - Unité 4 : نائب الفاعل (p. 81) & Sourate Al-A‘rāf',
    translationFr: 'Et quand le Coran est récité, écoutez-le attentivement et faites silence.',
    volumeSource: 'tome3',
    grammarRuleKey: 'naib_fail'
  },
  {
    id: 't3-q4',
    sentenceWithoutHarakat: 'إني رأيت أحد عشر كوكبا',
    targetWordIndex: 4,
    targetWordWithoutHarakat: 'كوكبا',
    correctWordWithHarakat: 'كَوْكَبًا',
    options: ['كَوْكَبٌ', 'كَوْكَبًا', 'كَوْكَبٍ', 'كَوَاكِبَ'],
    explanation: 'Après les nombres composés de 11 à 99 (comme "أحد عشر"), le nom compté est un spécificatif (تمييز العدد) qui s\'écrit obligatoirement au singulier accusatif indéfini (مفردا منصوبا) : كَوْكَبًا.',
    source: 'Tome 3 - Unité 11 : التمييز (p. 243) & Sourate Yūsuf',
    translationFr: 'J\'ai vu en songe onze étoiles.',
    volumeSource: 'tome3',
    grammarRuleKey: 'tamyiz'
  },
  {
    id: 't3-q5',
    sentenceWithoutHarakat: 'صلوا أيها المسلمون في مساجد كثيرة',
    targetWordIndex: 4,
    targetWordWithoutHarakat: 'مساجد',
    correctWordWithHarakat: 'مَسَاجِدَ',
    options: ['مَسَاجِدِ', 'مَسَاجِدُ', 'مَسَاجِدَ', 'مَسَاجِدٍ'],
    explanation: '"مساجد" est sur le schème مَفَاعِل, c\'est un diptote interdit de déclinaison (ممنوع من الصرف). Précédé de la préposition "في", il prend exceptionnellement une Fatḥah à la place de la Kasrah et n\'a jamais de tanwīn : مَسَاجِدَ.',
    source: 'Tome 3 - Unité 7 : الممنوع من الصرف (p. 147)',
    translationFr: 'Priez, ô musulmans, dans de nombreuses mosquées.',
    volumeSource: 'tome3',
    grammarRuleKey: 'mamnu_sarf'
  },
  {
    id: 't3-q6',
    sentenceWithoutHarakat: 'من يرد الله به خيرا يفقهه في الدين',
    targetWordIndex: 5,
    targetWordWithoutHarakat: 'يفقهه',
    correctWordWithHarakat: 'يُفَقِّهْهُ',
    options: ['يُفَقِّهُهُ', 'يُفَقِّهْهُ', 'يُفَقِّهَهُ', 'يُفَقِّهِهِ'],
    explanation: '"مَنْ" est un outil de condition apocopant (أداة شرط جازمة). Le verbe réponse à la condition (جواب الشرط) est apocopé au cas majzūm avec sukūn sur le hā’ : يُفَقِّهْهُ.',
    source: 'Tome 3 - Unité 3 : أدوات الشرط الجازمة (p. 53) & Hadith Bukhari',
    translationFr: 'Celui à qui Allah veut du bien, Il lui accorde la compréhension profonde de la religion.',
    volumeSource: 'tome3',
    grammarRuleKey: 'shart'
  },

  // --- TOME 2 EXERCISES ---
  {
    id: 't2-q1',
    sentenceWithoutHarakat: 'جاء أبوك مع أخيك',
    targetWordIndex: 1,
    targetWordWithoutHarakat: 'أبوك',
    correctWordWithHarakat: 'أَبُوكَ',
    options: ['أَبَاكَ', 'أَبِيكَ', 'أَبُوكَ', 'أَبْكَ'],
    explanation: '"أبو" fait partie des 5 noms particuliers (الأسماء الخمسة). Sujet du verbe "جاء", il est nominatif (مرفوع) et prend la lettre Wāw (ـُو) au lieu de la Dammah : أَبُوكَ.',
    source: 'Tome 2 - Unité 14 : الأسماء الخمسة (p. 326)',
    translationFr: 'Ton père est venu avec ton frère.',
    volumeSource: 'tome2',
    grammarRuleKey: 'asma_khamsah'
  },
  {
    id: 't2-q2',
    sentenceWithoutHarakat: 'صلى المريض جالسا',
    targetWordIndex: 2,
    targetWordWithoutHarakat: 'جالسا',
    correctWordWithHarakat: 'جَالِسًا',
    options: ['جَالِسٌ', 'جَالِسًا', 'جَالِسٍ', 'جَالِسُ'],
    explanation: '"جالسا" est un complément d\'état (حال) décrivant la posture du sujet au moment de l\'action. Le Hāl est un nom indéfini toujours au cas accusatif (منصوب بالفتحة) : جَالِسًا.',
    source: 'Tome 2 - Unité 14 : الحال (p. 330)',
    translationFr: 'Le malade a prié en position assise.',
    volumeSource: 'tome2',
    grammarRuleKey: 'hal'
  },
  {
    id: 't2-q3',
    sentenceWithoutHarakat: 'الطلاب لم يكتبوا الدرس',
    targetWordIndex: 2,
    targetWordWithoutHarakat: 'يكتبوا',
    correctWordWithHarakat: 'يَكْتُبُوا',
    options: ['يَكْتُبُونَ', 'يَكْتُبُوا', 'يَكْتُبْنَ', 'يَكْتُبُ'],
    explanation: 'Le verbe fait partie des Cinq Verbes (الأفعال الخمسة). Précédé de la particule négative apocopante "لَمْ", il est majzūm par la chute du nūn (حذف النون) : يَكْتُبُوا.',
    source: 'Tome 2 - Unité 13 : الأفعال الخمسة وجزمها (p. 308)',
    translationFr: 'Les étudiants n\'ont pas écrit la leçon.',
    volumeSource: 'tome2',
    grammarRuleKey: 'afal_khamsah'
  },

  // --- TOME 1 EXERCISES ---
  {
    id: 't1-q1',
    sentenceWithoutHarakat: 'أسكن في حي الجامعة',
    targetWordIndex: 2,
    targetWordWithoutHarakat: 'حي',
    correctWordWithHarakat: 'حَيِّ',
    options: ['حَيُّ', 'حَيَّ', 'حَيِّ', 'حَيًّا'],
    explanation: '"حي" est précédé de la préposition "في" (ḥarf jarr). Toute préposition impose la Kasrah (مجرور بالكسرة). Comme il est annexé à الجامعة, il prend une simple Kasrah sans tanwin : حَيِّ.',
    source: 'Tome 1 - Unité 3 : السكن (p. 49)',
    translationFr: 'J\'habite dans le quartier de l\'université.',
    volumeSource: 'tome1',
    grammarRuleKey: 'huruf_jarr'
  },
  {
    id: 't1-q2',
    sentenceWithoutHarakat: 'هذا أخي وهو مهندس',
    targetWordIndex: 3,
    targetWordWithoutHarakat: 'مهندس',
    correctWordWithHarakat: 'مُهَنْدِسٌ',
    options: ['مُهَنْدِسَ', 'مُهَنْدِسٍ', 'مُهَنْدِسٌ', 'مُهَنْدِسُ'],
    explanation: 'Dans la phrase nominale "هو مهندس", "مهندس" est le prédicat (خبر) de "هو". Il est nominatif indéfini et prend le Tanwīn Ḍamm : مُهَنْدِسٌ.',
    source: 'Tome 1 - Unité 1 : التحية والتعارف (p. 5)',
    translationFr: 'Voici mon frère et il est ingénieur.',
    volumeSource: 'tome1',
    grammarRuleKey: 'mubtada_khabar'
  },

  // --- CORAN & HADITH EXERCISES ---
  {
    id: 'qh-q1',
    sentenceWithoutHarakat: 'إنما الأعمال بالنيات',
    targetWordIndex: 1,
    targetWordWithoutHarakat: 'الأعمال',
    correctWordWithHarakat: 'الأَعْمَالُ',
    options: ['الأَعْمَالَ', 'الأَعْمَالِ', 'الأَعْمَالُ', 'الأَعْمَالْ'],
    explanation: 'Le mot "الأعمال" est ici le sujet (مبتدأ مؤخر) de la phrase nominale. Puisque "إنما" annule l\'effet accusatif de "إن", le mot reste au cas nominatif (مرفوع) et prend donc une Dammah finale : الأَعْمَالُ.',
    source: 'Hadith des Intentions - Sahih Bukhari',
    translationFr: 'Les actions ne valent que par les intentions.',
    volumeSource: 'quran_hadith',
    grammarRuleKey: 'mubtada_khabar'
  },
  {
    id: 'qh-q2',
    sentenceWithoutHarakat: 'إن الله غفور رحيم',
    targetWordIndex: 1,
    targetWordWithoutHarakat: 'الله',
    correctWordWithHarakat: 'اللَّهَ',
    options: ['اللَّهُ', 'اللَّهَ', 'اللَّهِ', 'اللَّهْ'],
    explanation: 'La particule "إِنَّ" (particule d\'emphase/subjonctive) transforme le sujet de la phrase nominale en son nom (اسم إن) au cas accusatif (منصوب). Par conséquent, le Nom d\'Allah prend une Fathah finale : اللَّهَ.',
    source: 'Sourate Al-Baqarah (Règle d\'Inna wa Akhawātuha)',
    translationFr: 'Certes, Allah est Pardonneur et Miséricordieux.',
    volumeSource: 'quran_hadith',
    grammarRuleKey: 'inna'
  }
];
