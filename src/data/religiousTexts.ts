import { ReligiousText } from '../types/app';

export const RELIGIOUS_TEXTS: ReligiousText[] = [
  // --- TOME 3 ---
  {
    id: 'tome3-miracle-quran',
    title: 'Le Miracle Éternel du Coran (إعجاز القرآن)',
    arabicTitle: 'المُعْجِزَةُ الخَالِدَةُ وَتَدْوِينُ القُرْآن',
    category: 'tome3',
    volumeSource: 'tome3',
    source: 'Tome 3 - Unité 1 (المعجزة الخالدة, p. 3)',
    difficulty: 'Avancé',
    arabicWithHarakat: 'القُرْآنُ مُعْجِزَةُ الرَّسُولِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، أَنْزَلَهُ اللَّهُ سُبْحَانَهُ وَتَعَالَى مُنَجَّمًا حَسَبَ الحَوَادِثِ، تَثْبِيتًا لِقَلْبِ الرَّسُولِ وَقُلُوبِ المُؤْمِنِينَ.',
    arabicWithoutHarakat: 'القرآن معجزة الرسول صلى الله عليه وسلم، أنزله الله سبحانه وتعالى منجما حسب الحوادث، تثبيتا لقلب الرسول وقلوب المؤمنين.',
    translationFr: 'Le Coran est le miracle permanent du Prophète (ﷺ), révélé par Allah de façon graduelle au fil des événements, afin d\'affermir le cœur du Messager et celui des croyants.',
    contextOrBenefit: 'Tome 3 de « Al-Arabiyyah Bayna Yadayk ». Ce texte illustre la spécificité de la révélation fragmentée (Tanjīm) et l\'éloquence divine.',
    words: [
      { id: 't3m-1', wordNoHarakat: 'القرآن', wordWithHarakat: 'القُرْآنُ', transliteration: 'al-Qur’ānu', translationFr: 'le Coran', root: 'ق-ر-أ', grammarNote: 'Sujet nominatif (مبتدأ مرفوع بالضمة)' },
      { id: 't3m-2', wordNoHarakat: 'معجزة', wordWithHarakat: 'مُعْجِزَةُ', transliteration: 'mu‘jizatu', translationFr: 'le miracle probatoire', root: 'ع-ج-ز', grammarNote: 'Attribut du sujet (خبر المبتدأ مرفوع)' },
      { id: 't3m-3', wordNoHarakat: 'الرسول', wordWithHarakat: 'الرَّسُولِ', transliteration: 'ar-Rasūli', translationFr: 'du Messager', root: 'ر-س-ل', grammarNote: 'Complément de nom au génitif (مضاف إليه مجرور)' },
      { id: 't3m-4', wordNoHarakat: 'أنزله', wordWithHarakat: 'أَنْزَلَهُ', transliteration: 'anzalahu', translationFr: 'Il l\'a fait descendre', root: 'ن-ز-ل', grammarNote: 'Verbe au passé + pronom COD' },
      { id: 't3m-5', wordNoHarakat: 'الله', wordWithHarakat: 'اللَّهُ', transliteration: 'Allāhu', translationFr: 'Allah', root: 'إ-ل-ه', grammarNote: 'Sujet du verbe anzala (فاعل مرفوع)' },
      { id: 't3m-6', wordNoHarakat: 'منجما', wordWithHarakat: 'مُنَجَّمًا', transliteration: 'munajjaman', translationFr: 'de façon échelonnée / par étapes', root: 'ن-ج-م', grammarNote: 'Complément d\'état (حال منصوب بالفتحة)' },
      { id: 't3m-7', wordNoHarakat: 'تثبيتا', wordWithHarakat: 'تَثْبِيتًا', transliteration: 'tathbītan', translationFr: 'pour affermir / comme consolidation', root: 'ث-ب-ت', grammarNote: 'Complément de cause (مفعول لأجله منصوب)' }
    ]
  },
  {
    id: 'tome3-bilal',
    title: 'L\'Endurance de Bilal ibn Rabah (صبر بلال)',
    arabicTitle: 'بِلَالُ بْنُ رَبَاحٍ مُؤَذِّنُ الرَّسُول',
    category: 'tome3',
    volumeSource: 'tome3',
    source: 'Tome 3 - Unité 6 (بلال بن رباح, p. 133)',
    difficulty: 'Avancé',
    arabicWithHarakat: 'لِبِلَالِ بْنِ رَبَاحٍ مُؤَذِّنِ الرَّسُولِ سِيرَةٌ مِنْ أَرْوَعِ سِيَرِ النِّضَالِ، كَانَ يُرَدِّدُ تَحْتَ الصَّخْرَةِ: أَحَدٌ أَحَدٌ.',
    arabicWithoutHarakat: 'لبلال بن رباح مؤذن الرسول سيرة من أروع سير النضال، كان يردد تحت الصخرة: أحد أحد.',
    translationFr: 'Bilal ibn Rabah, le muezzin du Messager, possède une des plus admirables biographies de sacrifice pour la foi. Sous le rocher brûlant, il proclamait : « Unique ! Unique ! »',
    contextOrBenefit: 'Tome 3. Modèle d\'attachement pur au monothéisme malgré la torture impitoyable des mécréants de Quraysh.',
    words: [
      { id: 't3b-1', wordNoHarakat: 'لبلال', wordWithHarakat: 'لِبِلَالِ', transliteration: 'li-Bilāli', translationFr: 'Pour Bilal', root: 'ب-ل-ل', grammarNote: 'Préposition + nom propre au génitif' },
      { id: 't3b-2', wordNoHarakat: 'مؤذن', wordWithHarakat: 'مُؤَذِّنِ', transliteration: 'mu’adh-dhini', translationFr: 'le proclamateur de la prière', root: 'أ-ذ-ن', grammarNote: 'Épithète / apposition au génitif' },
      { id: 't3b-3', wordNoHarakat: 'سيرة', wordWithHarakat: 'سِيرَةٌ', transliteration: 'sīratun', translationFr: 'une biographie / un parcours', root: 'س-ي-ر', grammarNote: 'Sujet reporté marfū‘ (مبتدأ مؤخر)' },
      { id: 't3b-4', wordNoHarakat: 'أروع', wordWithHarakat: 'أَرْوَعِ', transliteration: 'arwa‘i', translationFr: 'les plus magnifiques / splendides', root: 'ر-و-ع', grammarNote: 'Nom de supériorité (اسم تفضيل مجرور)' },
      { id: 't3b-5', wordNoHarakat: 'يردد', wordWithHarakat: 'يُرَدِّدُ', transliteration: 'yuraddidu', translationFr: 'il répétait sans cesse', root: 'ر-د-د', grammarNote: 'Verbe au présent de la forme II' }
    ]
  },
  {
    id: 'tome3-amthal-hunayn',
    title: 'Proverbe : Revenir avec les babouches de Hunayn',
    arabicTitle: 'رَجَعَ بِخُفَّيْ حُنَيْن (مَثَلٌ عَرَبِيٌّ شَهِير)',
    category: 'wisdom',
    volumeSource: 'tome3',
    source: 'Tome 3 - Unité 11 (الأمثال العربية, p. 237)',
    difficulty: 'Avancé',
    arabicWithHarakat: 'سَاوَمَ أَعْرَابِيٌّ حُنَيْنًا الإِسْكَافِيَّ فِي خُفَّيْنِ حَتَّى أَغْضَبَهُ، فَخَدَعَهُ حُنَيْنٌ، فَرَجَعَ الأَعْرَابِيُّ إِلَى أَهْلِهِ بِالخُفَّيْنِ دُونَ نَاقَتِهِ.',
    arabicWithoutHarakat: 'ساوم أعرابي حنينا الإسكافي في خفين حتى أغضبه، فخدعه حنين، فرجع الأعرابي إلى أهله بالخفين دون ناقته.',
    translationFr: 'Un bédouin marchanda avec Hunayn le cordonnier jusqu\'à l\'irriter. Hunayn lui tendit un piège astucieux, et le bédouin retourna auprès des siens bredouille avec les babouches mais sans sa chamelle !',
    contextOrBenefit: 'Tome 3. Proverbe arabe universel pour désigner quelqu\'un qui rentre les mains vides ou déçu de son expédition.',
    words: [
      { id: 't3h-1', wordNoHarakat: 'ساوم', wordWithHarakat: 'سَاوَمَ', transliteration: 'sāwama', translationFr: 'il marchanda / négocia', root: 'س-و-م', grammarNote: 'Verbe au passé de la forme III (فاعَلَ)' },
      { id: 't3h-2', wordNoHarakat: 'أعرابي', wordWithHarakat: 'أَعْرَابِيٌّ', transliteration: 'a‘rābiyyun', translationFr: 'un bédouin du désert', root: 'ع-ر-ب', grammarNote: 'Sujet nominatif (فاعل مرفوع)' },
      { id: 't3h-3', wordNoHarakat: 'الإسكافي', wordWithHarakat: 'الإِسْكَافِيَّ', transliteration: 'al-iskāfiyya', translationFr: 'le cordonnier / savetier', root: 'س-ك-ف', grammarNote: 'Épithète accusative (نعت منصوب)' },
      { id: 't3h-4', wordNoHarakat: 'خفين', wordWithHarakat: 'خُفَّيْنِ', transliteration: 'khuffayni', translationFr: 'deux babouches / bottillons', root: 'خ-ف-ف', grammarNote: 'Nom duel au cas génitif avec yā’ (مجرور بالياء)' }
    ]
  },

  // --- TOME 2 ---
  {
    id: 'tome2-najashi',
    title: 'Discours de Ja\'far devant le Négus (خطبة جعفر)',
    arabicTitle: 'خِطَابُ جَعْفَرِ بْنِ أَبِي طَالِبٍ عِنْدَ النَّجَاشِيّ',
    category: 'tome2',
    volumeSource: 'tome2',
    source: 'Tome 2 - Unité 4 (النجاشي وضيوفه, p. 83)',
    difficulty: 'Intermédiaire',
    arabicWithHarakat: 'أَيُّهَا المَلِكُ، كُنَّا قَوْمًا أَهْلَ جَاهِلِيَّةٍ، نَعْبُدُ الأَصْنَامَ، حَتَّى بَعَثَ اللَّهُ إِلَيْنَا رَسُولًا نَعْرِفُ نَسَبَهُ وَصِدْقَهُ وَأَمَانَتَهُ.',
    arabicWithoutHarakat: 'أيها الملك، كنا قوما أهل جاهلية، نعبد الأصنام، حتى بعث الله إلينا رسولا نعرف نسبه وصدقه وأمانته.',
    translationFr: 'Ô Roi ! Nous étions un peuple plongé dans l\'ignorance, adorant les idoles, jusqu\'à ce qu\'Allah nous envoie un Messager dont nous connaissons la noble lignée, la véracité et la loyauté.',
    contextOrBenefit: 'Tome 2. Le discours historique qui émut le roi d\'Abyssinie jusqu\'aux larmes en découvrant la vérité de l\'Islam.',
    words: [
      { id: 't2n-1', wordNoHarakat: 'الملك', wordWithHarakat: 'المَلِكُ', transliteration: 'al-Maliku', translationFr: 'le roi / souverain', root: 'م-ل-ك', grammarNote: 'Interpellé après Ayyuhā (منادى مبني على الضم)' },
      { id: 't2n-2', wordNoHarakat: 'كنا', wordWithHarakat: 'كُنَّا', transliteration: 'kunnā', translationFr: 'nous étions', root: 'ك-و-ن', grammarNote: 'Kāna + pronom sujet (نحن)' },
      { id: 't2n-3', wordNoHarakat: 'قوما', wordWithHarakat: 'قَوْمًا', transliteration: 'qawman', translationFr: 'un peuple / une communauté', root: 'ق-و-م', grammarNote: 'Attribut de kāna au cas accusatif (خبر كان منصوب)' },
      { id: 't2n-4', wordNoHarakat: 'الأصنام', wordWithHarakat: 'الأَصْنَامَ', transliteration: 'al-aṣnāma', translationFr: 'les idoles de pierre', root: 'ص-ن-م', grammarNote: 'Complément d\'objet direct (مفعول به منصوب)' },
      { id: 't2n-5', wordNoHarakat: 'أمانته', wordWithHarakat: 'أَمَانَتَهُ', transliteration: 'amānatahu', translationFr: 'sa loyauté / son intégrité', root: 'أ-م-ن', grammarNote: 'Nom coordonné accusatif + pronom possessif' }
    ]
  },
  {
    id: 'tome2-amal-rizq',
    title: 'La Dignité du Travail (العمل خير من مسألة الناس)',
    arabicTitle: 'العَمَلُ شَرَفٌ وَخَيْرٌ مِنَ المَسْأَلَة',
    category: 'tome2',
    volumeSource: 'tome2',
    source: 'Tome 2 - Unité 6 (العمل, p. 132)',
    difficulty: 'Intermédiaire',
    arabicWithHarakat: 'مَا أَكَلَ أَحَدٌ طَعَامًا قَطُّ خَيْرًا مِنْ أَنْ يَأْكُلَ مِنْ عَمَلِ يَدِهِ، وَإِنَّ نَبِيَّ اللَّهِ دَاوُدَ كَانَ يَأْكُلُ مِنْ عَمَلِ يَدِهِ.',
    arabicWithoutHarakat: 'ما أكل أحد طعاما قط خيرا من أن يأكل من عمل يده، وإن نبي الله داود كان يأكل من عمل يده.',
    translationFr: 'Nul n\'a jamais mangé de meilleure nourriture que celle acquise par le labeur de ses propres mains ; et le Prophète de Dieu David mangeait du produit de son travail.',
    contextOrBenefit: 'Tome 2 & Sahih Al-Bukhari. Louange de l\'effort personnel et autonomie financière par rapport à la mendicité.',
    words: [
      { id: 't2a-1', wordNoHarakat: 'أكل', wordWithHarakat: 'أَكَلَ', transliteration: 'akala', translationFr: 'il a mangé', root: 'أ-ك-ل', grammarNote: 'Verbe d\'action au passé' },
      { id: 't2a-2', wordNoHarakat: 'أحد', wordWithHarakat: 'أَحَدٌ', transliteration: 'aḥadun', translationFr: 'quiconque / personne', root: 'أ-ح-د', grammarNote: 'Sujet du verbe marfū‘' },
      { id: 't2a-3', wordNoHarakat: 'قط', wordWithHarakat: 'قَطُّ', transliteration: 'qaṭṭu', translationFr: 'jamais (dans le passé)', root: 'ق-ط-ط', grammarNote: 'Adverbe de temps passé invariable sur la Dammah' },
      { id: 't2a-4', wordNoHarakat: 'يده', wordWithHarakat: 'يَدِهِ', transliteration: 'yadihi', translationFr: 'sa main', root: 'ي-د-ي', grammarNote: 'Génitif d\'annexion avec kasrah' }
    ]
  },

  // --- TOME 1 ---
  {
    id: 'tome1-daily-routine',
    title: 'La Journée d\'un Étudiant Assidu (يوم في حياة طالب)',
    arabicTitle: 'يَسْتَيْقِظُ عِنْدَ الفَجْرِ وَيَذْهَبُ إِلَى المَسْجِد',
    category: 'tome1',
    volumeSource: 'tome1',
    source: 'Tome 1 - Unités 4 & 6 (الحياة اليومية والصلاة, p. 71)',
    difficulty: 'Débutant+',
    arabicWithHarakat: 'يَسْتَيْقِظُ طَاهِرٌ عِنْدَ الفَجْرِ، فَيَتَوَضَّأُ فِي البَيْتِ، ثُمَّ يَمْشِي إِلَى المَسْجِدِ، وَيَقْرَأُ القُرْآنَ الكَرِيمَ بَعْدَ الصَّلَاةِ.',
    arabicWithoutHarakat: 'يستيقظ طاهر عند الفجر، فيتوضأ في البيت، ثم يمشي إلى المسجد، ويقرأ القرآن الكريم بعد الصلاة.',
    translationFr: 'Tahir se réveille à l\'aube, accomplit ses ablutions à la maison, puis marche vers la mosquée et récite le Noble Coran après la prière.',
    contextOrBenefit: 'Tome 1. Modèle de dialogue du quotidien combinant verbes d\'action au présent et prépositions courantes.',
    words: [
      { id: 't1d-1', wordNoHarakat: 'يستيقظ', wordWithHarakat: 'يَسْتَيْقِظُ', transliteration: 'yastayqidhu', translationFr: 'il se réveille', root: 'ي-ق-ظ', grammarNote: 'Verbe au présent de la forme X (استفعل)' },
      { id: 't1d-2', wordNoHarakat: 'طاهر', wordWithHarakat: 'طَاهِرٌ', transliteration: 'Ṭāhirun', translationFr: 'Tahir (nom propre)', root: 'ط-ه-ر', grammarNote: 'Sujet nominatif avec tanwin' },
      { id: 't1d-3', wordNoHarakat: 'فيتوضأ', wordWithHarakat: 'فَيَتَوَضَّأُ', transliteration: 'fa-yatawaḍḍa’u', translationFr: 'puis il fait ses ablutions', root: 'و-ض-أ', grammarNote: 'Forme V réflexive au présent' },
      { id: 't1d-4', wordNoHarakat: 'المسجد', wordWithHarakat: 'المَسْجِدِ', transliteration: 'al-masjidi', translationFr: 'la mosquée', root: 'س-ج-د', grammarNote: 'Nom de lieu au cas génitif après ilā' }
    ]
  },

  // --- CORAN & HADITHS CLASSIQUES ---
  {
    id: 'hadith-niyyah',
    title: 'Le Hadith des Intentions (الأعمال بالنيات)',
    arabicTitle: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ',
    category: 'hadith',
    volumeSource: 'quran_hadith',
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
    volumeSource: 'quran_hadith',
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
      { id: 'ak-7', wordNoHarakat: 'القيوم', wordWithHarakat: 'الْقَيُّومُ', transliteration: 'al-qayyūmu', translationFr: 'Celui qui subsiste par Lui-même', root: 'ق-و-م', grammarNote: 'Attribut divin marfū‘' }
    ]
  },
  {
    id: 'hadith-ihsan',
    title: 'L\'Excellence Spirituelle (حديث الإحسان)',
    arabicTitle: 'أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ',
    category: 'hadith',
    volumeSource: 'quran_hadith',
    source: 'Hadith de Jibril - Sahih Muslim (8)',
    difficulty: 'Intermédiaire',
    arabicWithHarakat: 'أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ',
    arabicWithoutHarakat: 'أن تعبد الله كأنك تراه، فإن لم تكن تراه فإنه يراك',
    translationFr: 'C\'est que tu adores Allah comme si tu Le voyais, car si tu ne Le vois pas, certes Lui te voit.',
    contextOrBenefit: 'Le degré suprême de la foi, unissant la présence du cœur, la dévotion sincère et la vigilance constante.',
    words: [
      { id: 'hi-1', wordNoHarakat: 'تعبد', wordWithHarakat: 'تَعْبُدَ', transliteration: 'ta‘buda', translationFr: 'tu adores', root: 'ع-ب-د', grammarNote: 'Présent subjonctif après an' },
      { id: 'hi-2', wordNoHarakat: 'الله', wordWithHarakat: 'اللَّهَ', transliteration: 'Allāha', translationFr: 'Allah', root: 'إ-ل-ه', grammarNote: 'Complément d\'objet direct accusatif' },
      { id: 'hi-3', wordNoHarakat: 'تراه', wordWithHarakat: 'تَرَاهُ', transliteration: 'tarāhu', translationFr: 'tu Le voyais', root: 'ر-أ-ي', grammarNote: 'Verbe présent + pronom objet' },
      { id: 'hi-4', wordNoHarakat: 'يراك', wordWithHarakat: 'يَرَاكَ', transliteration: 'yarāka', translationFr: 'Il te voit', root: 'ر-أ-ي', grammarNote: 'Verbe présent + pronom d\'adresse' }
    ]
  },
  {
    id: 'surah-inshirah',
    title: 'L\'Apaisement et la Facilité (سورة الشرح)',
    arabicTitle: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا • إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    category: 'quran',
    volumeSource: 'quran_hadith',
    source: 'Sourate Al-Inshirah (94:5-6)',
    difficulty: 'Intermédiaire',
    arabicWithHarakat: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا • إِنَّ مَعَ الْعُسْرِ يُسْرًا',
    arabicWithoutHarakat: 'فإن مع العسر يسرا • إن مع العسر يسرا',
    translationFr: 'À côté de la difficulté est certes une facilité ! À côté de la difficulté est certes une facilité !',
    contextOrBenefit: 'Révélée pour consoler le Prophète. Les linguistes arabes font remarquer que la difficulté (Al-‘Usr) est définie avec "Al-", alors que la facilité (Yusran) est indéfinie.',
    words: [
      { id: 'si-1', wordNoHarakat: 'فإن', wordWithHarakat: 'فَإِنَّ', transliteration: 'fa-inna', translationFr: 'car certes / assurément', root: 'إ-ن-ن', grammarNote: 'Particule d\'affirmation catégorique' },
      { id: 'si-2', wordNoHarakat: 'مع', wordWithHarakat: 'مَعَ', transliteration: 'ma‘a', translationFr: 'avec / au côté de', root: 'م-ع-ي', grammarNote: 'Adverbe de concomitance (ظرف)' },
      { id: 'si-3', wordNoHarakat: 'العسر', wordWithHarakat: 'الْعُسْرِ', transliteration: 'al-‘usri', translationFr: 'la difficulté / l\'épreuve', root: 'ع-س-ر', grammarNote: 'Génitif défini (مضاف إليه مجرور)' },
      { id: 'si-4', wordNoHarakat: 'يسرا', wordWithHarakat: 'يُسْرًا', transliteration: 'yusran', translationFr: 'une immense facilité', root: 'ي-س-ر', grammarNote: 'Nom d\'Inna accusatif (اسم إن مؤخر)' }
    ]
  },
  {
    id: 'dua-ilm',
    title: 'Invocation pour la Science Utile (دعاء العلم النافع)',
    arabicTitle: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا',
    category: 'dua',
    volumeSource: 'quran_hadith',
    source: 'Rapporté par Ibn Majah (925)',
    difficulty: 'Intermédiaire',
    arabicWithHarakat: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا',
    arabicWithoutHarakat: 'اللهم إني أسألك علما نافعا ورزقا طيبا وعملا متقبلا',
    translationFr: 'Ô Allah, je Te demande une science bénéfique, une subsistance pure et agréable, et une œuvre agréée.',
    contextOrBenefit: 'Invocation matinale du Prophète (ﷺ) après la prière du Fajr.',
    words: [
      { id: 'di-1', wordNoHarakat: 'اللهم', wordWithHarakat: 'اللَّهُمَّ', transliteration: 'Allāhumma', translationFr: 'Ô Allah', root: 'إ-ل-ه', grammarNote: 'Appel divin' },
      { id: 'di-2', wordNoHarakat: 'علما', wordWithHarakat: 'عِلْمًا', transliteration: '‘ilman', translationFr: 'une science', root: 'ع-ل-م', grammarNote: 'Objet direct accusatif' },
      { id: 'di-3', wordNoHarakat: 'نافعا', wordWithHarakat: 'نَافِعًا', transliteration: 'nāfi‘an', translationFr: 'bénéfique', root: 'ن-ف-ع', grammarNote: 'Épithète accusative' }
    ]
  }
];
