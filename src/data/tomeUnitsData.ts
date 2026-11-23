export interface TomeUnitContent {
  id: string;
  tomeId: 'tome1' | 'tome2' | 'tome3';
  unitNumber: number;
  title: string;
  arabicTitle: string;
  theme: string;
  dialogueOrText: {
    speakerA?: string;
    speakerB?: string;
    arabicWithHarakat: string;
    arabicWithoutHarakat: string;
    translationFr: string;
  }[];
  vocabulary: {
    arabicWithHarakat: string;
    arabicWithoutHarakat: string;
    transliteration: string;
    translationFr: string;
    root?: string;
  }[];
  grammarFocus: {
    title: string;
    arabicTitle: string;
    ruleExplanation: string;
    exampleArabic: string;
    exampleTranslation: string;
  };
}

export const TOME_UNITS_DATA: TomeUnitContent[] = [
  // ===================== TOME 1 =====================
  {
    id: 't1-u1',
    tomeId: 'tome1',
    unitNumber: 1,
    title: 'Les Salutations & Présentations',
    arabicTitle: 'التَّحِيَّةُ وَالتَّعَارُف',
    theme: 'Faire connaissance, formules de politesse et nationalités',
    dialogueOrText: [
      {
        speakerA: 'خَالِد',
        speakerB: 'خَلِيل',
        arabicWithHarakat: 'السَّلَامُ عَلَيْكُمْ • وَعَلَيْكُمُ السَّلَامُ • اسْمِي خَالِدٌ، مَا اسْمُكَ؟ • اسْمِي خَلِيلٌ • كَيْفَ حَالُكَ؟ • بِخَيْرٍ، وَالحَمْدُ لِلَّهِ.',
        arabicWithoutHarakat: 'السلام عليكم • وعليكم السلام • اسمي خالد، ما اسمك؟ • اسمي خليل • كيف حالك؟ • بخير، والحمد لله.',
        translationFr: 'Paix sur vous • Et sur vous la paix • Je m\'appelle Khalid, comment t\'appelles-tu ? • Je m\'appelle Khalil • Comment vas-tu ? • Bien, louange à Allah.'
      },
      {
        speakerA: 'مُحَمَّد',
        speakerB: 'شَرِيف',
        arabicWithHarakat: 'مِنْ أَيْنَ أَنْتَ؟ • أَنَا مِنْ بَاكِسْتَانَ • هَلْ أَنْتَ بَاكِسْتَانِيٌّ؟ • نَعَمْ، أَنَا بَاكِسْتَانِيٌّ، وَمَا جِنْسِيَّتُكَ أَنْتَ؟ • أَنَا تُرْكِيٌّ، أَنَا مِنْ تُرْكِيَا • أَهْلًا وَسَهْلًا.',
        arabicWithoutHarakat: 'من أين أنت؟ • أنا من باكستان • هل أنت باكستاني؟ • نعم، أنا باكستاني، وما جنسيتك أنت؟ • أنا تركي، أنا من تركيا • أهلا وسهلا.',
        translationFr: 'D\'où viens-tu ? • Je viens du Pakistan • Es-tu pakistanais ? • Oui, je suis pakistanais, et quelle est ta nationalité ? • Je suis turc, je viens de Turquie • Bienvenue.'
      }
    ],
    vocabulary: [
      { arabicWithHarakat: 'السَّلَامُ عَلَيْكُمْ', arabicWithoutHarakat: 'السلام عليكم', transliteration: 'as-salāmu ‘alaykum', translationFr: 'Que la paix soit sur vous' },
      { arabicWithHarakat: 'كَيْفَ حَالُكَ', arabicWithoutHarakat: 'كيف حالك', transliteration: 'kayfa ḥāluk', translationFr: 'Comment vas-tu ?' },
      { arabicWithHarakat: 'بِخَيْرٍ وَالحَمْدُ لِلَّه', arabicWithoutHarakat: 'بخير والحمد لله', transliteration: 'bi-khayr wal-ḥamdu lillāh', translationFr: 'Bien, louange à Allah' },
      { arabicWithHarakat: 'مِنْ أَيْنَ', arabicWithoutHarakat: 'من أين', transliteration: 'min ayna', translationFr: 'D\'où ?' },
      { arabicWithHarakat: 'جِنْسِيَّة', arabicWithoutHarakat: 'جنسية', transliteration: 'jinsiyyah', translationFr: 'Nationalité', root: 'ج-ن-س' },
      { arabicWithHarakat: 'أَهْلًا وَسَهْلًا', arabicWithoutHarakat: 'أهلا وسهلا', transliteration: 'ahlan wa sahlan', translationFr: 'Bienvenue' }
    ],
    grammarFocus: {
      title: 'Les pronoms personnels et l\'interrogation',
      arabicTitle: 'الضَّمَائِرُ المُنْفَصِلَةُ وَأَدَوَاتُ الاسْتِفْهَام',
      ruleExplanation: 'En arabe, la phrase nominale commence par le sujet sans verbe être au présent (أَنَا طَالِبٌ = Je suis étudiant). Les questions fermées utilisent « هَلْ » (est-ce que).',
      exampleArabic: 'هَلْ أَنْتَ مُدَرِّسٌ؟ نَعَمْ، أَنَا مُدَرِّسٌ.',
      exampleTranslation: 'Es-tu enseignant ? Oui, je suis enseignant.'
    }
  },
  {
    id: 't1-u3',
    tomeId: 'tome1',
    unitNumber: 3,
    title: 'Le Logement & Le Mobilier',
    arabicTitle: 'السَّكَنُ وَالأَثَاث',
    theme: 'Description de la maison, de l\'appartement et recherche de location',
    dialogueOrText: [
      {
        speakerA: 'المُسْتَأْجِر',
        speakerB: 'المُؤَجِّر',
        arabicWithHarakat: 'السَّلَامُ عَلَيْكُمْ • وَعَلَيْكُمُ السَّلَامُ • أُرِيدُ شَقَّةً مِنْ فَضْلِكَ • لَدَيْنَا شَقَّةٌ جَمِيلَةٌ • كَمْ غُرْفَةً فِي الشَّقَّةِ؟ • فِي الشَّقَّةِ خَمْسُ غُرَفٍ • فِي أَيِّ دَوْرٍ الشَّقَّةُ؟ • فِي الدَّوْرِ الخَامِسِ • أُرِيدُ مُشَاهَدَةَ الشَّقَّةِ • تَفَضَّلْ، هَذِهِ هِيَ الشَّقَّةُ.',
        arabicWithoutHarakat: 'السلام عليكم • وعليكم السلام • أريد شقة من فضلك • لدينا شقة جميلة • كم غرفة في الشقة؟ • في الشقة خمس غرف • في أي دور الشقة؟ • في الدور الخامس • أريد مشاهدة الشقة • تفضل، هذه هي الشقة.',
        translationFr: 'Paix sur vous • Et sur vous la paix • Je voudrais un appartement s\'il vous plaît • Nous avons un bel appartement • Combien de pièces y a-t-il ? • Il y a cinq pièces • À quel étage se trouve-t-il ? • Au cinquième étage • J\'aimerais visiter • Je vous en prie, voici l\'appartement.'
      }
    ],
    vocabulary: [
      { arabicWithHarakat: 'شَقَّة', arabicWithoutHarakat: 'شقة', transliteration: 'shaqqah', translationFr: 'Appartement', root: 'ش-ق-ق' },
      { arabicWithHarakat: 'غُرْفَةُ نَوْمٍ', arabicWithoutHarakat: 'غرفة نوم', transliteration: 'ghurfatu nawm', translationFr: 'Chambre à coucher' },
      { arabicWithHarakat: 'غُرْفَةُ جُلُوسٍ', arabicWithoutHarakat: 'غرفة جلوس', transliteration: 'ghurfatu julūs', translationFr: 'Salon' },
      { arabicWithHarakat: 'مَطْبَخ', arabicWithoutHarakat: 'مطبخ', transliteration: 'maṭbakh', translationFr: 'Cuisine', root: 'ط-ب-خ' },
      { arabicWithHarakat: 'حَمَّام', arabicWithoutHarakat: 'حمام', transliteration: 'ḥammām', translationFr: 'Salle de bain', root: 'ح-م-م' },
      { arabicWithHarakat: 'سَجَّادَة', arabicWithoutHarakat: 'سجادة', transliteration: 'sajjādah', translationFr: 'Tapis', root: 'س-ج-د' },
      { arabicWithHarakat: 'سِتَارَة', arabicWithoutHarakat: 'ستارة', transliteration: 'sitārah', translationFr: 'Rideau', root: 'س-ت-ر' },
      { arabicWithHarakat: 'أَرِيكَة', arabicWithoutHarakat: 'أريكة', transliteration: 'arīkah', translationFr: 'Canapé / Fauteuil' }
    ],
    grammarFocus: {
      title: 'L\'interrogation de quantité avec Kam + Nom accusatif',
      arabicTitle: 'كَمْ الاسْتِفْهَامِيَّةُ وَتَمْيِيزُهَا',
      ruleExplanation: 'Après « كَمْ » (combien), le nom compté se met toujours au singulier indéfini accusatif (Mansūb avec Tanwīn Fatḥ) : كَمْ غُرْفَةً؟',
      exampleArabic: 'كَمْ كِتَابًا قَرَأْتَ اليَوْمَ؟',
      exampleTranslation: 'Combien de livres as-tu lus aujourd\'hui ?'
    }
  },

  // ===================== TOME 2 =====================
  {
    id: 't2-u4',
    tomeId: 'tome2',
    unitNumber: 4,
    title: 'L\'Hégire en Abyssinie & Le Négus',
    arabicTitle: 'الهِجْرَةُ إِلَى الحَبَشَةِ وَالنَّجَاشِيّ',
    theme: 'Plaidoyer historique de Ja\'far ibn Abi Talib sur les valeurs de l\'Islam',
    dialogueOrText: [
      {
        speakerA: 'جَعْفَرُ بْنُ أَبِي طَالِب',
        arabicWithHarakat: 'أَيُّهَا المَلِكُ، كُنَّا قَوْمًا أَهْلَ جَاهِلِيَّةٍ، نَعْبُدُ الأَصْنَامَ، وَنَأْكُلُ المَيْتَةَ، وَنَأْتِي الفَوَاحِشَ، وَنَقْطَعُ الأَرْحَامَ، وَنُسِيءُ الجِوَارَ، حَتَّى بَعَثَ اللَّهُ إِلَيْنَا رَسُولًا مِنَّا نَعْرِفُ نَسَبَهُ وَصِدْقَهُ وَأَمَانَتَهُ وَعَفَافَهُ، فَدَعَانَا إِلَى اللَّهِ لِنُوَحِّدَهُ وَنَعْبُدَهُ، وَأَمَرَنَا بِصِدْقِ الحَدِيثِ، وَأَدَاءِ الأَمَانَةِ، وَصِلَةِ الرَّحِمِ، وَحُسْنِ الجِوَارِ.',
        arabicWithoutHarakat: 'أيها الملك، كنا قوما أهل جاهلية، نعبد الأصنام، ونأكل الميتة، ونأتي الفواحش، ونقطع الأرحام، ونسيء الجوار، حتى بعث الله إلينا رسولا منا نعرف نسبه وصدقه وأمانته وعفافه، فدعانا إلى الله لنوحده ونعبده، وأمرنا بصدق الحديث، وأداء الأمانة، وصلة الرحم، وحسن الجوار.',
        translationFr: 'Ô Roi ! Nous étions un peuple ignorant, adorant des idoles, mangeant des bêtes mortes, commettant des turpitudes, rompant les liens de parenté et maltraitant le voisinage, jusqu\'à ce qu\'Allah nous envoie un Messager parmi nous dont nous connaissons la noble ascendance, la loyauté, la véracité et la chasteté. Il nous a appelés à adorer Allah Seul, à être sincères en paroles, à honorer les dépôts, à maintenir les liens familiaux et à respecter nos voisins.'
      }
    ],
    vocabulary: [
      { arabicWithHarakat: 'أَهْلُ جَاهِلِيَّة', arabicWithoutHarakat: 'أهل جاهلية', transliteration: 'ahlu jāhiliyyah', translationFr: 'Gens de l\'époque préislamique d\'ignorance' },
      { arabicWithHarakat: 'صِلَةُ الرَّحِم', arabicWithoutHarakat: 'صلة الرحم', transliteration: 'ṣilatu r-raḥim', translationFr: 'Maintien des liens de parenté', root: 'و-ص-ل' },
      { arabicWithHarakat: 'أَدَاءُ الأَمَانَة', arabicWithoutHarakat: 'أداء الأمانة', transliteration: 'adā’u l-amānah', translationFr: 'Restitution scrupuleuse des dépôts', root: 'أ-م-ن' },
      { arabicWithHarakat: 'حُسْنُ الجِوَار', arabicWithoutHarakat: 'حسن الجوار', transliteration: 'ḥusnu l-jiwār', translationFr: 'Bienveillance envers les voisins', root: 'ج-و-ر' },
      { arabicWithHarakat: 'عَفَاف', arabicWithoutHarakat: 'عفاف', transliteration: '‘afāf', translationFr: 'Chasteté, pudeur et intégrité', root: 'ع-ف-ف' }
    ],
    grammarFocus: {
      title: 'Kāna et ses sœurs (كان وأخواتها)',
      arabicTitle: 'كَانَ وَأَخَوَاتُهَا فِي السِّيَاقِ النَّبَوِيّ',
      ruleExplanation: 'Kāna modifie la phrase nominale : le sujet reste nominatif (مرفوع) et l\'attribut devient obligatoirement accusatif (منصوب) : كُنَّا قَوْمًا.',
      exampleArabic: 'كَانَ الرَّسُولُ صَادِقًا أَمِينًا.',
      exampleTranslation: 'Le Messager était véridique et digne de confiance.'
    }
  },
  {
    id: 't2-u14',
    tomeId: 'tome2',
    unitNumber: 14,
    title: 'L\'État et la Sécurité en Islam',
    arabicTitle: 'الأَمْنُ وَأَسْبَابُ الجَرِيمَة',
    theme: 'Préservation des 5 nécessités (Al-Kulliyyāt al-Khams)',
    dialogueOrText: [
      {
        speakerA: 'حَسَّان',
        speakerB: 'زِيَاد',
        arabicWithHarakat: 'لَقَدْ وَضَعَ الإِسْلَامُ الحُدُودَ لِحِمَايَةِ المُجْتَمَعِ، قَالَ تَعَالَى: ﴿وَلَكُمْ فِي الْقِصَاصِ حَيَاةٌ يَا أُولِي الْأَلْبَابِ﴾ • إِنَّ العِقَابَ العَادِلَ يَمْنَعُ الجَرِيمَةَ قَبْلَ وُقُوعِهَا، وَيُوَفِّرُ الأَمْنَ وَالاسْتِقْرَارَ لِلنَّاسِ جَمِيعًا.',
        arabicWithoutHarakat: 'لقد وضع الإسلام الحدود لحماية المجتمع، قال تعالى: ﴿ولكم في القصاص حياة يا أولي الألباب﴾ • إن العقاب العادل يمنع الجريمة قبل وقوعها، ويوفر الأمن والاستقرار للناس جميعا.',
        translationFr: 'L\'Islam a institué les peines légales pour préserver la société. Le Très-Haut a dit : « C\'est dans la loi du talion que réside la vie pour vous, ô doués d\'intelligence ! » La justice équitable prévient le crime avant qu\'il ne survienne et garantit la sécurité pour tous.'
      }
    ],
    vocabulary: [
      { arabicWithHarakat: 'القِصَاص', arabicWithoutHarakat: 'القصاص', transliteration: 'al-qiṣāṣ', translationFr: 'La justice équitable / talion légal', root: 'ق-ص-ص' },
      { arabicWithHarakat: 'أُولِي الأَلْبَاب', arabicWithoutHarakat: 'أولي الألباب', transliteration: 'ulī l-albāb', translationFr: 'Les personnes douées de raison et d\'intelligence', root: 'ل-ب-ب' },
      { arabicWithHarakat: 'اسْتِقْرَار', arabicWithoutHarakat: 'استقرار', transliteration: 'istiqrār', translationFr: 'Stabilité / tranquillité publique', root: 'ق-ر-ر' },
      { arabicWithHarakat: 'حِمَايَة', arabicWithoutHarakat: 'حماية', transliteration: 'ḥimāyah', translationFr: 'Protection / sauvegarde', root: 'ح-م-ي' }
    ],
    grammarFocus: {
      title: 'Les Cinq Noms (الأسماء الخمسة)',
      arabicTitle: 'إِعْرَابُ الأَسْمَاءِ الخَمْسَة (أبو، أخو، حمو، فو، ذو)',
      ruleExplanation: 'Les 5 noms s\'accordent par des lettres : Wāw au nominatif (جاء أبوك), Alif à l\'accusatif (رأيت أباك), et Yā’ au génitif (مررت بأبيك).',
      exampleArabic: 'احْتَرِمْ أَبَاكَ وَأَخَاكَ الكَبِيرَ.',
      exampleTranslation: 'Respecte ton père et ton grand frère.'
    }
  },

  // ===================== TOME 3 =====================
  {
    id: 't3-u1',
    tomeId: 'tome3',
    unitNumber: 1,
    title: 'Le Miracle Éternel du Coran',
    arabicTitle: 'المُعْجِزَةُ الخَالِدَةُ وَالإِعْجَاز',
    theme: 'Le défi coranique, l\'inimitabilité littéraire et la transmission',
    dialogueOrText: [
      {
        speakerA: 'النَّصُّ الأَدَبِيّ',
        arabicWithHarakat: 'القُرْآنُ مُعْجِزَةُ الرَّسُولِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَقَدْ تَحَدَّى اللَّهُ الإِنْسَ وَالجِنَّ أَنْ يَأْتُوا بِمِثْلِهِ فَلَمْ يَسْتَطِيعُوا، قَالَ تَعَالَى: ﴿قُل لَّئِنِ اجْتَمَعَتِ الإِنسُ وَالْجِنُّ عَلَى أَن يَأْتُوا بِمِثْلِ هَذَا الْقُرْآنِ لا يَأْتُونَ بِمِثْلِهِ وَلَوْ كَانَ بَعْضُهُمْ لِبَعْضٍ ظَهِيرًا﴾.',
        arabicWithoutHarakat: 'القرآن معجزة الرسول صلى الله عليه وسلم، وقد تحدى الله الإنس والجن أن يأتوا بمثله فلم يستطيعوا، قال تعالى: ﴿قل لئن اجتمعت الإنس والجن على أن يأتوا بمثل هذا القرآن لا يأتون بمثله ولو كان بعضهم لبعض ظهيرا﴾.',
        translationFr: 'Le Coran est le miracle permanent du Messager (ﷺ). Allah a défié les hommes et les djinns de produire un livre semblable, mais ils en furent incapables. Le Très-Haut a dit : « Dis : Même si les hommes et les djinns s\'unissaient pour produire quelque chose de semblable à ce Coran, ils ne sauraient rien produire de pareil, même s\'ils se soutenaient les uns les autres. »'
      }
    ],
    vocabulary: [
      { arabicWithHarakat: 'مُعْجِزَة', arabicWithoutHarakat: 'معجزة', transliteration: 'mu‘jizah', translationFr: 'Miracle probatoire qui rend impuissant', root: 'ع-ج-ز' },
      { arabicWithHarakat: 'ظَهِير', arabicWithoutHarakat: 'ظهير', transliteration: 'ẓahīr', translationFr: 'Soutien, renfort ou allié', root: 'ظ-ه-ر' },
      { arabicWithHarakat: 'تَحَدَّى', arabicWithoutHarakat: 'تحدى', transliteration: 'taḥaddā', translationFr: 'Il a défié / lancé un défi', root: 'ح-د-و' },
      { arabicWithHarakat: 'إِعْجَاز', arabicWithoutHarakat: 'إعجاز', transliteration: 'i‘jāz', translationFr: 'Inimitabilité divine insurpassable', root: 'ع-ج-ز' }
    ],
    grammarFocus: {
      title: 'Inna et ses sœurs (إن وأخواتها)',
      arabicTitle: 'إِنَّ وَأَخَوَاتُهَا وَدَلَالَاتُهَا البَلَاغِيَّة',
      ruleExplanation: '« Inna » et ses sœurs (أن، كأن، لكن، ليت، لعل) placent leur sujet à l\'accusatif (Mansūb) et leur prédicat au nominatif (Marfū‘).',
      exampleArabic: 'إِنَّ القُرْآنَ نُورٌ مُبِينٌ.',
      exampleTranslation: 'Certes, le Coran est une lumière éclatante.'
    }
  },
  {
    id: 't3-u11',
    tomeId: 'tome3',
    unitNumber: 11,
    title: 'Les Proverbes Arabes et leurs Récits',
    arabicTitle: 'الأَمْثَالُ العَرَبِيَّةُ وَقِصَصُهَا',
    theme: 'L\'éloquence concentrée de la sagesse arabe préislamique et islamique',
    dialogueOrText: [
      {
        speakerA: 'مَثَلٌ عَرَبِيّ',
        arabicWithHarakat: 'قِيلَ فِي الأَمْثَالِ: «رَجَعَ بِخُفَّيْ حُنَيْنٍ»، يُضْرَبُ لِكُلِّ مَنْ يَعُودُ بِالخَيْبَةِ وَالإِخْفَاقِ. وَمِنْهَا: «جَزَاءُ سِنِمَّارَ»، لِمَنْ يُرَدُّ عَلَيْهِ الإِحْسَانُ بِالإِسَاءَةِ. وَمِنْهَا: «عَلَى أَهْلِهَا جَنَتْ بَرَاقِشُ»، لِمَنْ يَجْلِبُ الشُّؤْمَ وَالمُصِيبَةَ عَلَى نَفْسِهِ وَقَوْمِهِ.',
        arabicWithoutHarakat: 'قيل في الأمثال: «رجع بخفي حنين»، يضرب لكل من يعود بالخيبة والإخفاق. ومنها: «جزاء سنمار»، لمن يرد عليه الإحسان بالإساءة. ومنها: «على أهلها جنت براقش»، لمن يجلب الشؤم والمصيبة على نفسه وقومه.',
        translationFr: 'On dit dans les proverbes : « Il est revenu avec les babouches de Hunayn », employé pour désigner quiconque revient les mains vides et dépité. De même : « Le salaire de Sinimmār », pour celui dont la bienfaisance est récompensée par l\'ingratitude ou le mal. Et : « C\'est contre les siens que Baraqish a commis son forfait », pour celui qui attire le malheur sur sa propre famille par maladresse.'
      }
    ],
    vocabulary: [
      { arabicWithHarakat: 'خَيْبَة', arabicWithoutHarakat: 'خيبة', transliteration: 'khaybah', translationFr: 'Désillusion, déception amère', root: 'خ-ي-ب' },
      { arabicWithHarakat: 'إِخْفَاق', arabicWithoutHarakat: 'إخفاق', transliteration: 'ikhfāq', translationFr: 'Échec / insuccès', root: 'خ-ف-ق' },
      { arabicWithHarakat: 'شُؤْم', arabicWithoutHarakat: 'شؤم', transliteration: 'shu’m', translationFr: 'Mauvais augure / calamité', root: 'ش-أ-م' },
      { arabicWithHarakat: 'جَنَى عَلَى', arabicWithoutHarakat: 'جنى على', transliteration: 'janā ‘alā', translationFr: 'Causer du tort / porter préjudice à', root: 'ج-ن-ي' }
    ],
    grammarFocus: {
      title: 'Le Spécificatif (التمييز)',
      arabicTitle: 'التَّمْيِيزُ المَلْفُوظُ وَالمَلْحُوظ',
      ruleExplanation: 'Le Tamyīz est un nom indéfini accusatif (Mansūb) qui lève l\'ambiguïté sur une quantité, un nombre, une mesure ou un rapport.',
      exampleArabic: 'امْتَلَأَ قَلْبُهُ سُرُورًا.',
      exampleTranslation: 'Son cœur s\'est empli de joie.'
    }
  }
];
