import { ReligiousText } from '../types/app';

export const RELIGIOUS_TEXTS: ReligiousText[] = [
  {
    id: 'hadith-niyyah',
    title: 'Le Hadith des Intentions (الأعمال بالنيات)',
    arabicTitle: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ',
    category: 'hadith',
    source: 'Sahih Al-Bukhari (1) & Sahih Muslim (1907)',
    difficulty: 'Intermédiaire',
    arabicWithHarakat: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
    arabicWithoutHarakat: 'إنما الأعمال بالنيات وإنما لكل امرئ ما نوى',
    translationFr: 'Les actions ne valent que par les intentions qui les animent, et chacun ne recevra la rétribution que de ce qu\'il a eu le dessein d\'accomplir.',
    contextOrBenefit: 'Pilier fondamental de la jurisprudence et de la spiritualité islamique. L\'imam Ash-Shafi\'i a dit qu\'il constitue à lui seul le tiers de la science.',
    words: [
      { id: 'hn-1', wordNoHarakat: 'إنما', wordWithHarakat: 'إِنَّمَا', transliteration: 'Innamā', translationFr: 'Certes / seulement (particule de restriction)', root: 'ن-م-ي', grammarNote: 'Outil de restriction (أداة حصر)' },
      { id: 'hn-2', wordNoHarakat: 'الأعمال', wordWithHarakat: 'الأَعْمَالُ', transliteration: 'al-a‘mālu', translationFr: 'les actions / les œuvres', root: 'ع-م-ل', grammarNote: 'Sujet (مبتدأ مرفوع بالضمة)' },
      { id: 'hn-3', wordNoHarakat: 'بالنيات', wordWithHarakat: 'بِالنِّيَّاتِ', transliteration: 'bin-niyyāt', translationFr: 'par les intentions', root: 'ن-و-ي', grammarNote: 'Préposition + nom au génitif (جار ومجرور)' },
      { id: 'hn-4', wordNoHarakat: 'وإنما', wordWithHarakat: 'وَإِنَّمَا', transliteration: 'wa-innamā', translationFr: 'et assurément', root: 'ن-م-ي', grammarNote: 'Conjonction + restriction' },
      { id: 'hn-5', wordNoHarakat: 'لكل', wordWithHarakat: 'لِكُلِّ', transliteration: 'li-kulli', translationFr: 'pour chaque / tout', root: 'ك-ل-ل', grammarNote: 'Préposition de destination' },
      { id: 'hn-6', wordNoHarakat: 'امرئ', wordWithHarakat: 'امْرِئٍ', transliteration: 'imri’in', translationFr: 'homme / personne', root: 'م-ر-ء', grammarNote: 'Complément du nom au génitif (مضاف إليه)' },
      { id: 'hn-7', wordNoHarakat: 'ما', wordWithHarakat: 'مَا', transliteration: 'mā', translationFr: 'ce que', root: 'م-و-ي', grammarNote: 'Pronom relatif (اسم موصول)' },
      { id: 'hn-8', wordNoHarakat: 'نوى', wordWithHarakat: 'نَوَى', transliteration: 'nawā', translationFr: 'il a eu l\'intention', root: 'ن-و-ي', grammarNote: 'Verbe au passé (فعل ماض مبني على الفتح المقدر)' }
    ]
  },
  {
    id: 'ayat-al-kursi-opening',
    title: 'Verset du Trône (آية الكرسي - Ouverture)',
    arabicTitle: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
    category: 'quran',
    source: 'Sourate Al-Baqarah (2:255)',
    difficulty: 'Avancé',
    arabicWithHarakat: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ',
    arabicWithoutHarakat: 'الله لا إله إلا هو الحي القيوم لا تأخذه سنة ولا نوم',
    translationFr: 'Allah ! Point de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même. Ni somnolence ni sommeil ne Le saisissent.',
    contextOrBenefit: 'Le plus grand verset du Coran selon le Prophète (ﷺ), proclamant la transcendance absolue et la perfection divine.',
    words: [
      { id: 'ak-1', wordNoHarakat: 'الله', wordWithHarakat: 'اللَّهُ', transliteration: 'Allāhu', translationFr: 'Dieu / Allah', root: 'إ-ل-ه', grammarNote: 'Nom d\'Allah majestueux (مبتدأ مرفوع)' },
      { id: 'ak-2', wordNoHarakat: 'لا', wordWithHarakat: 'لَا', transliteration: 'lā', translationFr: 'point de / nul', root: 'ل-و-ي', grammarNote: 'Négation absolue (لا النافية للجنس)' },
      { id: 'ak-3', wordNoHarakat: 'إله', wordWithHarakat: 'إِلَٰهَ', transliteration: 'ilāha', translationFr: 'divinité digne d\'adoration', root: 'إ-ل-ه', grammarNote: 'Nom régi par la négation absolue (مبني على الفتح)' },
      { id: 'ak-4', wordNoHarakat: 'إلا', wordWithHarakat: 'إِلَّا', transliteration: 'illā', translationFr: 'excepté / sauf', root: 'أ-ل-ل', grammarNote: 'Particule d\'exception (أداة استثناء)' },
      { id: 'ak-5', wordNoHarakat: 'هو', wordWithHarakat: 'هُوَ', transliteration: 'huwa', translationFr: 'Lui', root: 'ه-و-ي', grammarNote: 'Pronom personnel isolé (ضمير منفصل)' },
      { id: 'ak-6', wordNoHarakat: 'الحي', wordWithHarakat: 'الْحَيُّ', transliteration: 'al-ḥayyu', translationFr: 'Le Vivant (éternel sans commencement ni fin)', root: 'ح-ي-ي', grammarNote: 'Attribut divin (خبر أو نعت مرفوع)' },
      { id: 'ak-7', wordNoHarakat: 'القيوم', wordWithHarakat: 'الْقَيُّومُ', transliteration: 'al-qayyūmu', translationFr: 'Celui qui subsiste par Lui-même et maintient toute création', root: 'ق-و-م', grammarNote: 'Attribut divin marfū‘' },
      { id: 'ak-8', wordNoHarakat: 'لا', wordWithHarakat: 'لَا', transliteration: 'lā', translationFr: 'ne... pas', root: 'ل-و-ي', grammarNote: 'Négation simple' },
      { id: 'ak-9', wordNoHarakat: 'تأخذه', wordWithHarakat: 'تَأْخُذُهُ', transliteration: 'ta’khudhuhu', translationFr: 'Le saisit / L\'atteint', root: 'أ-خ-ذ', grammarNote: 'Verbe au présent + pronom objet attaché' },
      { id: 'ak-10', wordNoHarakat: 'سنة', wordWithHarakat: 'سِنَةٌ', transliteration: 'sinatun', translationFr: 'somnolence / torpeur', root: 'و-س-ن', grammarNote: 'Sujet du verbe (فاعل مرفوع بالتنوين)' },
      { id: 'ak-11', wordNoHarakat: 'ولا', wordWithHarakat: 'وَلَا', transliteration: 'wa-lā', translationFr: 'ni', root: 'ل-و-ي', grammarNote: 'Conjonction + négation' },
      { id: 'ak-12', wordNoHarakat: 'نوم', wordWithHarakat: 'نَوْمٌ', transliteration: 'nawmun', translationFr: 'sommeil profond', root: 'ن-و-م', grammarNote: 'Nom coordonné au sujet (معطوف مرفوع)' }
    ]
  },
  {
    id: 'hadith-ihsan',
    title: 'L\'Excellence Spirituelle (حديث الإحسان)',
    arabicTitle: 'أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ',
    category: 'hadith',
    source: 'Hadith de Jibril - Sahih Muslim (8)',
    difficulty: 'Intermédiaire',
    arabicWithHarakat: 'قَالَ: فَأَخْبِرْنِي عَنِ الإِحْسَانِ، قَالَ: أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ',
    arabicWithoutHarakat: 'قال: فأخبرني عن الإحسان، قال: أن تعبد الله كأنك تراه، فإن لم تكن تراه فإنه يراك',
    translationFr: 'Il dit : « Informe-moi sur l\'Ihsān (l\'excellence). » Il répondit : « C\'est que tu adores Allah comme si tu Le voyais, car si tu ne Le vois pas, certes Lui te voit. »',
    contextOrBenefit: 'Le degré suprême de la foi, unissant la présence du cœur, la dévotion sincère et la vigilance constante.',
    words: [
      { id: 'hi-1', wordNoHarakat: 'الإحسان', wordWithHarakat: 'الإِحْسَانِ', transliteration: 'al-iḥsān', translationFr: 'l\'excellence / la bienfaisance parfaite', root: 'ح-س-ن', grammarNote: 'Nom d\'action (مصدر أصل حَسُنَ)' },
      { id: 'hi-2', wordNoHarakat: 'تعبد', wordWithHarakat: 'تَعْبُدَ', transliteration: 'ta‘buda', translationFr: 'tu adores', root: 'ع-ب-د', grammarNote: 'Présent subjonctif après an (فعل مضارع منصوب بأن)' },
      { id: 'hi-3', wordNoHarakat: 'الله', wordWithHarakat: 'اللَّهَ', transliteration: 'Allāha', translationFr: 'Allah', root: 'إ-ل-ه', grammarNote: 'Complément d\'objet direct (مفعول به منصوب)' },
      { id: 'hi-4', wordNoHarakat: 'كأنك', wordWithHarakat: 'كَأَنَّكَ', transliteration: 'ka’annaka', translationFr: 'comme si tu', root: 'ك-أ-ن', grammarNote: 'Particule de similitude + pronom' },
      { id: 'hi-5', wordNoHarakat: 'تراه', wordWithHarakat: 'تَرَاهُ', transliteration: 'tarāhu', translationFr: 'tu Le voyais', root: 'ر-أ-ي', grammarNote: 'Verbe au présent + pronom objet' },
      { id: 'hi-6', wordNoHarakat: 'يراك', wordWithHarakat: 'يَرَاكَ', transliteration: 'yarāka', translationFr: 'Il te voit', root: 'ر-أ-ي', grammarNote: 'Verbe présent + pronom d\'adresse' }
    ]
  },
  {
    id: 'surah-inshirah',
    title: 'L\'Apaisement et la Facilité (سورة الشرح)',
    arabicTitle: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا • إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    category: 'quran',
    source: 'Sourate Al-Inshirah (94:5-6)',
    difficulty: 'Intermédiaire',
    arabicWithHarakat: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا • إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    arabicWithoutHarakat: 'فإن مع العسر يسرا • إن مع العسر يسرا',
    translationFr: 'À côté de la difficulté est certes une facilité ! À côté de la difficulté est certes une facilité !',
    contextOrBenefit: 'Révélée pour consoler le Prophète. Les linguistes arabes font remarquer que la difficulté (Al-‘Usr) est définie avec "Al-", alors que la facilité (Yusran) est indéfinie, signifiant qu\'une même difficulté ne pourra jamais vaincre deux facilités distinctes.',
    words: [
      { id: 'si-1', wordNoHarakat: 'فإن', wordWithHarakat: 'فَإِنَّ', transliteration: 'fa-inna', translationFr: 'car certes / assurément', root: 'إ-ن-ن', grammarNote: 'Particule d\'affirmation catégorique' },
      { id: 'si-2', wordNoHarakat: 'مع', wordWithHarakat: 'مَعَ', transliteration: 'ma‘a', translationFr: 'avec / au côté de', root: 'م-ع-ي', grammarNote: 'Adverbe de concomitance (ظرف)' },
      { id: 'si-3', wordNoHarakat: 'العسر', wordWithHarakat: 'الْعُسْرِ', transliteration: 'al-‘usri', translationFr: 'la difficulté / l\'épreuve', root: 'ع-س-ر', grammarNote: 'Génitif défini (مضاف إليه مجرور)' },
      { id: 'si-4', wordNoHarakat: 'يسرا', wordWithHarakat: 'يُسْرًا', transliteration: 'yusran', translationFr: 'une immense facilité / un soulagement', root: 'ي-س-ر', grammarNote: 'Nom d\'Inna accusatif avec tanwīn (اسم إن مؤخر منصوب)' }
    ]
  },
  {
    id: 'dua-ilm',
    title: 'Invocation pour la Science Utile (دعاء العلم النافع)',
    arabicTitle: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا',
    category: 'dua',
    source: 'Rapporté par Ibn Majah (925), authentifié',
    difficulty: 'Intermédiaire',
    arabicWithHarakat: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا',
    arabicWithoutHarakat: 'اللهم إني أسألك علما نافعا ورزقا طيبا وعملا متقبلا',
    translationFr: 'Ô Allah, je Te demande une science bénéfique, une subsistance pure et agréable, et une œuvre agréée.',
    contextOrBenefit: 'Invocation que le Messager d\'Allah (ﷺ) prononçait chaque matin après la prière de l\'aube (Fajr). Elle résume les trois besoins capitaux de l\'être humain.',
    words: [
      { id: 'di-1', wordNoHarakat: 'اللهم', wordWithHarakat: 'اللَّهُمَّ', transliteration: 'Allāhumma', translationFr: 'Ô Allah (invocation)', root: 'إ-ل-ه', grammarNote: 'Appel d\'Allah avec mīm emphatique' },
      { id: 'di-2', wordNoHarakat: 'إني', wordWithHarakat: 'إِنِّي', transliteration: 'innī', translationFr: 'certes je', root: 'إ-ن-ن', grammarNote: 'Particule d\'affirmation + pronom de 1ère personne' },
      { id: 'di-3', wordNoHarakat: 'أسألك', wordWithHarakat: 'أَسْأَلُكَ', transliteration: 'as’aluka', translationFr: 'je Te demande', root: 'س-أ-ل', grammarNote: 'Verbe au présent + pronom d\'adresse' },
      { id: 'di-4', wordNoHarakat: 'علما', wordWithHarakat: 'عِلْمًا', transliteration: '‘ilman', translationFr: 'une science / un savoir', root: 'ع-ل-م', grammarNote: 'Objet direct au cas accusatif (مفعول به أول منصوب)' },
      { id: 'di-5', wordNoHarakat: 'نافعا', wordWithHarakat: 'نَافِعًا', transliteration: 'nāfi‘an', translationFr: 'bénéfique / utile', root: 'ن-ف-ع', grammarNote: 'Adjectif épithète (نعت منصوب)' },
      { id: 'di-6', wordNoHarakat: 'ورزقا', wordWithHarakat: 'وَرِزْقًا', transliteration: 'wa-rizqan', translationFr: 'et une subsistance', root: 'ر-ز-ق', grammarNote: 'Coordonné accusatif' },
      { id: 'di-7', wordNoHarakat: 'طيبا', wordWithHarakat: 'طَيِّبًا', transliteration: 'ṭayyiban', translationFr: 'pure / licite et saine', root: 'ط-ي-ب', grammarNote: 'Adjectif épithète qualifiant le rizq' },
      { id: 'di-8', wordNoHarakat: 'وعملا', wordWithHarakat: 'وَعَمَلًا', transliteration: 'wa-‘amalan', translationFr: 'et une œuvre', root: 'ع-م-ل', grammarNote: 'Coordonné accusatif' },
      { id: 'di-9', wordNoHarakat: 'متقبلا', wordWithHarakat: 'مُتَقَبَّلًا', transliteration: 'mutaqabbalan', translationFr: 'exaucée / agréée auprès d\'Allah', root: 'ق-ب-ل', grammarNote: 'Participe passif de la forme V (اسم مفعول)' }
    ]
  },
  {
    id: 'wisdom-sabab',
    title: 'Sagesse d\'Ibn al-Qayyim sur le Cœur (حكمة ابن القيم)',
    arabicTitle: 'صِدْقُ التَّوَكُّلِ وَحَيَاةُ القَلْبِ',
    category: 'wisdom',
    source: 'Al-Fawā’id - Imam Ibn al-Qayyim al-Jawziyya',
    difficulty: 'Avancé',
    arabicWithHarakat: 'القَلْبُ يَصْدَأُ كَمَا يَصْدَأُ الحَدِيدُ، وَجَلَاؤُهُ ذِكْرُ اللَّهِ',
    arabicWithoutHarakat: 'القلب يصدأ كما يصدأ الحديد وجلاؤه ذكر الله',
    translationFr: 'Le cœur rouille tout comme rouille le fer, et son polissage réside dans l\'évocation (le Dhikr) d\'Allah.',
    contextOrBenefit: 'Une métaphore classique de l\'éloquence arabe sur la purification spirituelle et l\'impact réparateur de la méditation et du rappel.',
    words: [
      { id: 'ws-1', wordNoHarakat: 'القلب', wordWithHarakat: 'القَلْبُ', transliteration: 'al-qalbu', translationFr: 'le cœur', root: 'ق-ل-ب', grammarNote: 'Sujet (مبتدأ مرفوع)' },
      { id: 'ws-2', wordNoHarakat: 'يصدأ', wordWithHarakat: 'يَصْدَأُ', transliteration: 'yaṣda’u', translationFr: 'rouille / s\'oxyde', root: 'ص-د-أ', grammarNote: 'Verbe au présent marfū‘' },
      { id: 'ws-3', wordNoHarakat: 'كما', wordWithHarakat: 'كَمَا', transliteration: 'kamā', translationFr: 'tout comme / de même que', root: 'ك-م-ي', grammarNote: 'Outil de comparaison' },
      { id: 'ws-4', wordNoHarakat: 'الحديد', wordWithHarakat: 'الحَدِيدُ', transliteration: 'al-ḥadīdu', translationFr: 'le fer', root: 'ح-د-د', grammarNote: 'Sujet du second verbe' },
      { id: 'ws-5', wordNoHarakat: 'وجلاؤه', wordWithHarakat: 'وَجَلَاؤُهُ', transliteration: 'wa-jalā’uhu', translationFr: 'et son polissage / son éclat', root: 'ج-ل-و', grammarNote: 'Sujet + pronom possessif' },
      { id: 'ws-6', wordNoHarakat: 'ذكر', wordWithHarakat: 'ذِكْرُ', transliteration: 'dhikru', translationFr: 'l\'évocation / le rappel', root: 'ذ-ك-ر', grammarNote: 'Attribut du sujet (خبر المبتدأ)' },
      { id: 'ws-7', wordNoHarakat: 'الله', wordWithHarakat: 'اللَّهِ', transliteration: 'Allāhi', translationFr: 'd\'Allah', root: 'إ-ل-ه', grammarNote: 'Génitif d\'annexion (مضاف إليه مجرور)' }
    ]
  }
];
