import { ReadingQuestion } from '../types/app';

export const READING_EXERCISES: ReadingQuestion[] = [
  {
    id: 'rq-1',
    sentenceWithoutHarakat: 'إنما الأعمال بالنيات',
    targetWordIndex: 1,
    targetWordWithoutHarakat: 'الأعمال',
    correctWordWithHarakat: 'الأَعْمَالُ',
    options: ['الأَعْمَالَ', 'الأَعْمَالِ', 'الأَعْمَالُ', 'الأَعْمَالْ'],
    explanation: 'Le mot "الأعمال" est ici le sujet (مبتدأ مؤخر) de la phrase nominale. Puisque "إنما" annule l\'effet accusatif de "إن", le mot reste au cas nominatif (مرفوع) et prend donc une Dammah finale : الأَعْمَالُ.',
    source: 'Hadith des Intentions - Sahih Bukhari',
    translationFr: 'Les actions ne valent que par les intentions.'
  },
  {
    id: 'rq-2',
    sentenceWithoutHarakat: 'ذهب الطالب إلى المدرسة في الصباح',
    targetWordIndex: 4,
    targetWordWithoutHarakat: 'المدرسة',
    correctWordWithHarakat: 'المَدْرَسَةِ',
    options: ['المَدْرَسَةَ', 'المَدْرَسَةُ', 'المَدْرَسَةِ', 'المَدْرَسَةً'],
    explanation: 'Le mot "المدرسة" suit directement la préposition "إِلَى" (ḥarf jarr). Toute préposition impose le cas génitif (مجرور), marqué ici par la Kasrah finale : المَدْرَسَةِ.',
    source: 'Règle grammaticale fondamentale des prépositions',
    translationFr: 'L\'étudiant est allé à l\'école le matin.'
  },
  {
    id: 'rq-3',
    sentenceWithoutHarakat: 'كتب الأستاذ درسا مفيدا',
    targetWordIndex: 1,
    targetWordWithoutHarakat: 'الأستاذ',
    correctWordWithHarakat: 'الأُسْتَاذُ',
    options: ['الأُسْتَاذَ', 'الأُسْتَاذُ', 'الأُسْتَاذِ', 'الأُسْتَاذْ'],
    explanation: 'Dans cette phrase verbale débutant par le verbe "كتب" (il a écrit), "الأستاذ" est l\'auteur de l\'action (الفاعل / le sujet). Le sujet en arabe prend toujours le cas nominatif (مرفوع) marqué par la Dammah : الأُسْتَاذُ.',
    source: 'Syntaxe de la phrase verbale (الجملة الفعلية)',
    translationFr: 'Le professeur a écrit une leçon utile.'
  },
  {
    id: 'rq-4',
    sentenceWithoutHarakat: 'كتب الأستاذ درسا مفيدا',
    targetWordIndex: 2,
    targetWordWithoutHarakat: 'درسا',
    correctWordWithHarakat: 'دَرْسًا',
    options: ['دَرْسٌ', 'دَرْسًا', 'دَرْسٍ', 'دَرْسُ'],
    explanation: '"درسا" est le complément d\'objet direct (المفعول به / sur quoi porte l\'action d\'écrire). Le C.O.D. est toujours au cas accusatif (منصوب), marqué ici par le Tanwīn Fatḥ : دَرْسًا.',
    source: 'Syntaxe du complément d\'objet direct (المفعول به)',
    translationFr: 'Le professeur a écrit une leçon utile.'
  },
  {
    id: 'rq-5',
    sentenceWithoutHarakat: 'إن الله غفور رحيم',
    targetWordIndex: 1,
    targetWordWithoutHarakat: 'الله',
    correctWordWithHarakat: 'اللَّهَ',
    options: ['اللَّهُ', 'اللَّهَ', 'اللَّهِ', 'اللَّهْ'],
    explanation: 'La particule "إِنَّ" (particule d\'emphase/subjonctive) transforme le sujet de la phrase nominale en son nom (اسم إن) au cas accusatif (منصوب). Par conséquent, le Nom d\'Allah prend une Fathah finale : اللَّهَ.',
    source: 'Sourate Al-Baqarah (Règle d\'Inna wa Akhawātuha)',
    translationFr: 'Certes, Allah est Pardonneur et Miséricordieux.'
  },
  {
    id: 'rq-6',
    sentenceWithoutHarakat: 'كان الجو جميلا',
    targetWordIndex: 2,
    targetWordWithoutHarakat: 'جميلا',
    correctWordWithHarakat: 'جَمِيلًا',
    options: ['جَمِيلٌ', 'جَمِيلًا', 'جَمِيلٍ', 'جَمِيلُ'],
    explanation: 'Le verbe incomplet "كَانَ" (était) place son attribut (خبر كان) au cas accusatif (منصوب). Alors que le sujet reste marfū‘ (الجوُّ), le prédicat prend ici un Tanwīn Fatḥ : جَمِيلًا.',
    source: 'Règle des verbes incomplets (كان وأخواتها)',
    translationFr: 'Le temps était magnifique.'
  },
  {
    id: 'rq-7',
    sentenceWithoutHarakat: 'قل هو الله أحد',
    targetWordIndex: 3,
    targetWordWithoutHarakat: 'أحد',
    correctWordWithHarakat: 'أَحَدٌ',
    options: ['أَحَدَ', 'أَحَدٌ', 'أَحَدٍ', 'أَحَدْ'],
    explanation: '"أَحَدٌ" est le prédicat (Khabar) de la phrase nominale. En l\'absence de déterminant "Al-" et sans particule accusative, il prend un Tanwīn Ḍamm (nominatif indéfini) : أَحَدٌ.',
    source: 'Sourate Al-Ikhlas (112:1)',
    translationFr: 'Dis : « Il est Allah, Unique. »'
  },
  {
    id: 'rq-8',
    sentenceWithoutHarakat: 'طلب العلم فريضة على كل مسلم',
    targetWordIndex: 1,
    targetWordWithoutHarakat: 'العلم',
    correctWordWithHarakat: 'العِلْمِ',
    options: ['العِلْمَ', 'العِلْمُ', 'العِلْمِ', 'العِلْمْ'],
    explanation: '"طلب العلم" forme une annexion (Idāfah / مضاف ومضاف إليه). Le second terme (العلم) est le complément déterminatif et doit obligatoirement être au cas génitif (مجرور بالكسرة) : العِلْمِ.',
    source: 'Hadith prophétique rapporté par Ibn Majah',
    translationFr: 'La quête du savoir est une obligation pour chaque musulman.'
  }
];
