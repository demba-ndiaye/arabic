import { TomePdfBook } from '../types/app';

export const TOMES_INFO: TomePdfBook[] = [
  {
    id: 'tome1',
    title: 'Al-Arabiyyah Bayna Yadayk - Tome 1',
    arabicTitle: 'العربية بين يديك - الكتاب الأول',
    subtitle: 'Niveau Élémentaire & Fondations de la communication',
    level: 'Fondations',
    description: 'Ce premier tome pose les bases orales et syntaxiques essentielles de la langue arabe : 16 unités thématiques abordant la salutation, la famille, le logement, la vie quotidienne, la nourriture, la prière, les études, le travail, le voyage et le pèlerinage.',
    pdfPath: 'https://archive.org/download/arabiyyah-bayna-yadayk-volume-1/arabiyyah-bayna-yadayk-volume-1.pdf',
    onlineReaderUrl: 'https://archive.org/embed/arabiyyah-bayna-yadayk-volume-1',
    pageCount: 402,
    keyUnits: [
      'التحية والتعارف (Salutations & Présentations)',
      'الأسرة (La Famille & Généalogie)',
      'السكن (Le Logement & Mobilier)',
      'الحياة اليومية (La Routine Quotidienne)',
      'الطعام والشراب (Alimentation & Repas)',
      'الصلاة (La Prière & Mosquée)',
      'الدراسة (Études & Matières)',
      'العمل (Professions & Métiers)',
      'التسوق (Le Marché & Achats)',
      'السفر (Voyages & Aéroports)',
      'الحج والعمرة (Hajj & Omra)'
    ],
    grammarLessons: [
      'Pronoms personnels isolés (أنا، أنتَ، أنتِ، هو، هي)',
      'Démonstratifs (هذا، هذه)',
      'Interrogatifs (من، ما، أين، هل، كم)',
      'Adjectifs de nationalité (يائي النسبة)',
      'Conjugaison des verbes du quotidien au présent'
    ]
  },
  {
    id: 'tome2',
    title: 'Al-Arabiyyah Bayna Yadayk - Tome 2',
    arabicTitle: 'العربية بين يديك - الكتاب الثاني',
    subtitle: 'Niveau Intermédiaire & Structuration de la langue',
    level: 'Intermédiaire',
    description: 'Ce second tome aborde des textes plus denses et réflexifs : santé, loisirs, mariage, vie urbaine, science, langue arabe, islam, jeunesse, sécurité et environnement. Il ancre la grammaire fonctionnelle appliquée.',
    pdfPath: 'https://archive.org/download/arabiyyah-bayna-yadayk-volume-2/arabiyyah-bayna-yadayk-volume-2.pdf',
    onlineReaderUrl: 'https://archive.org/embed/arabiyyah-bayna-yadayk-volume-2',
    pageCount: 444,
    keyUnits: [
      'العناية بالصحة (Santé & Médecine)',
      'الترويح عن النفس (Détente légitime & Sport)',
      'الحياة في المدينة (Vie citadine & Écologie)',
      'العلم والتعلم (Quête du savoir)',
      'حضارة المسلمين (Civilisation islamique & Sciences)',
      'اللغة العربية (L\'Arabe, langue universelle)',
      'الإسلام وشريعته (Foi & Piliers)',
      'أسباب الجريمة والأمن (Justice & Société)'
    ],
    grammarLessons: [
      'Prépositions et cas génitif (حروف الجر والاسم المجرور)',
      'Négation par Lā (لا النافية)',
      'Morphologie : Passé, Présent, Impératif (الماضي والمضارع والأمر)',
      'Les noms relatifs (الاسم الموصول : الذي، التي، الذين)',
      'Le duel et les 3 types de pluriels (المثنى، جمع المذكر، جمع المؤنث، جمع التكسير)',
      'Les 5 noms (الأسماء الخمسة : أبو، أخو، حمو، فو، ذو)',
      'Règles des nombres de 3 à 90 (تمييز الأعداد)'
    ]
  },
  {
    id: 'tome3',
    title: 'Al-Arabiyyah Bayna Yadayk - Tome 3',
    arabicTitle: 'العربية بين يديك - الكتاب الثالث',
    subtitle: 'Niveau Avancé & Éloquence littéraire & coranique',
    level: 'Avancé',
    description: 'Le sommet de la méthode : textes littéraires intégraux, hadiths commentés, récits des prophètes, proverbes arabes préislamiques et islamiques (Amthāl), pièces de théâtre historique, et l\'intégralité des subtilités du Naḥw et du Ṣarf.',
    pdfPath: 'https://archive.org/download/arabiyyah-bayna-yadayk-volume-3/arabiyyah-bayna-yadayk-volume-3.pdf',
    onlineReaderUrl: 'https://archive.org/embed/arabiyyah-bayna-yadayk-volume-3',
    pageCount: 444,
    keyUnits: [
      'المعجزة الخالدة (Le Miracle du Coran)',
      'السنة النبوية وتدوينها (Hadith & Chaînes de transmission)',
      'مسرحية القوي الأمين (Récit d\'Abu Bakr et Umar)',
      'قصة بلال بن رباح (Biographie de Bilal)',
      'نوادر وطرف (Éloquence & Sagesses des anciens)',
      'الأمثال العربية وقصصها (Proverbes célèbres)',
      'المساواة الحقة (Justice & Droits en Islam)',
      'الرفق بالحيوان في الحضارة الإسلامية'
    ],
    grammarLessons: [
      'Les verbes modificateurs (كان وأخواتها، كاد وأخواتها)',
      'Les particules d\'emphase (إن وأخواتها)',
      'Outils de condition (أدوات الشرط الجازمة وغير الجازمة)',
      'La voix passive et le régent (نائب الفاعل)',
      'Les verbes du cœur à double objet (ظن وأخواتها)',
      'Le schème morphologique (الميزان الصرفي)',
      'Le diptote sans nunation (الممنوع من الصرف)',
      'Le complément circonstanciel absolu (المفعول المطلق)',
      'Le complément de cause (المفعول لأجله)',
      'L\'exception (المستثنى بإلا)'
    ]
  }
];
