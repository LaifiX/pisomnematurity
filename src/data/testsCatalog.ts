import type { AccentName } from '../lib/accents';

export interface TestCatalogItem {
  slug: string;
  year: number;
  schoolYear: string;
  title: string;
  subtitle: string;
  variant: string;
  code: string;
  questionsCount: number;
  choiceCount: number;
  openCount: number;
  durationMinutes: number;
  status: 'ready' | 'coming_soon';
  /** Odtieň ročníka (karta na hlavnej stránke + celá stránka testu); triedy .acc-* v global.css, hodnoty v lib/accents.ts */
  accent: AccentName;
  badgeText: string;
  description: string;
  topics: string[];
}

export const testsCatalog: TestCatalogItem[] = [
  {
    slug: 't9-2026',
    year: 2026,
    accent: 'malina',
    schoolYear: '2025/2026',
    title: 'Testovanie\u00A09\u00A0–\u00A02026',
    subtitle: 'Slovenský jazyk a\u00A0literatúra',
    variant: 'Variant\u00A0A',
    code: '1200',
    questionsCount: 30,
    choiceCount: 20,
    openCount: 10,
    durationMinutes: 70,
    status: 'ready',
    badgeText: 'Dostupný online',
    description:
      'Kompletný test z\u00A0riadneho termínu Testovania\u00A09 zo slovenského jazyka a\u00A0literatúry. Obsahuje 30\u00A0úloh s\u00A0okamžitým overením odpovede, nápovedami a\u00A0jasným vysvetlením každého javu.',
    topics: [
      'Čítanie s\u00A0porozumením',
      'Pravopis a\u00A0stupňovanie',
      'Slovné druhy',
      'Skladba a\u00A0prístavok',
      'Vykanie',
      'Literárne žánre a\u00A0lyrika'
    ]
  },
  {
    slug: 't9-2025',
    year: 2025,
    accent: 'vino',
    schoolYear: '2024/2025',
    title: 'Testovanie\u00A09\u00A0–\u00A02025',
    subtitle: 'Slovenský jazyk a\u00A0literatúra',
    variant: 'Variant\u00A0A',
    code: '1005',
    questionsCount: 30,
    choiceCount: 20,
    openCount: 10,
    durationMinutes: 70,
    status: 'ready',
    badgeText: 'Dostupný online',
    description:
      'Kompletný test z\u00A0riadneho termínu Testovania\u00A09 zo slovenského jazyka a\u00A0literatúry. Obsahuje 30\u00A0úloh s\u00A0okamžitým overením odpovede, nápovedami a\u00A0jasným vysvetlením každého javu.',
    topics: [
      'Čítanie s\u00A0porozumením',
      'Pravopis a\u00A0vykanie',
      'Číslovky a\u00A0príslovky',
      'Slovotvorba a\u00A0synonymá',
      'Skladba vety',
      'Báj a\u00A0poézia'
    ]
  },
  {
    slug: 't9-2024',
    year: 2024,
    accent: 'slivka',
    schoolYear: '2023/2024',
    title: 'Testovanie\u00A09\u00A0–\u00A02024',
    subtitle: 'Slovenský jazyk a\u00A0literatúra',
    variant: 'Variant\u00A0A',
    code: '2020',
    questionsCount: 30,
    choiceCount: 20,
    openCount: 10,
    durationMinutes: 70,
    status: 'ready',
    badgeText: 'Dostupný online',
    description:
      'Kompletný test z\u00A0riadneho termínu Testovania\u00A09 zo slovenského jazyka a\u00A0literatúry. Obsahuje 30\u00A0úloh s\u00A0okamžitým overením odpovede, nápovedami a\u00A0jasným vysvetlením každého javu.',
    topics: [
      'Čítanie s\u00A0porozumením',
      'Vybrané slová a\u00A0vykanie',
      'Skloňovanie a\u00A0číslovky',
      'Združené pomenovania',
      'Prisudzovací sklad',
      'Bájka a\u00A0poézia'
    ]
  },
  {
    slug: 't9-2023',
    year: 2023,
    accent: 'atrament',
    schoolYear: '2022/2023',
    title: 'Testovanie\u00A09\u00A0–\u00A02023',
    subtitle: 'Slovenský jazyk a\u00A0literatúra',
    variant: 'Variant\u00A0A',
    code: '2111',
    questionsCount: 30,
    choiceCount: 20,
    openCount: 10,
    durationMinutes: 70,
    status: 'ready',
    badgeText: 'Dostupný online',
    description:
      'Kompletný test z\u00A0riadneho termínu Testovania\u00A09 zo slovenského jazyka a\u00A0literatúry. Obsahuje 30\u00A0úloh s\u00A0okamžitým overením odpovede, nápovedami a\u00A0jasným vysvetlením každého javu.',
    topics: [
      'Čítanie s\u00A0porozumením',
      'Spodobovanie a\u00A0slabiky',
      'Pravopis a\u00A0zložené slová',
      'Skloňovanie a\u00A0zámená',
      'Skladba a\u00A0prísudok',
      'Balada a\u00A0aforizmus'
    ]
  },
  {
    slug: 't9-2022',
    year: 2022,
    accent: 'jedla',
    schoolYear: '2021/2022',
    title: 'Testovanie\u00A09\u00A0–\u00A02022',
    subtitle: 'Slovenský jazyk a\u00A0literatúra',
    variant: 'Variant\u00A0A',
    code: '2699',
    questionsCount: 30,
    choiceCount: 20,
    openCount: 10,
    durationMinutes: 70,
    status: 'ready',
    badgeText: 'Dostupný online',
    description:
      'Kompletný test z\u00A0riadneho termínu Testovania\u00A09 zo slovenského jazyka a\u00A0literatúry. Obsahuje 30\u00A0úloh s\u00A0okamžitým overením odpovede, nápovedami a\u00A0jasným vysvetlením každého javu.',
    topics: [
      'Čítanie s\u00A0porozumením',
      'Rytmické krátenie a\u00A0výslovnosť',
      'Veľké písmená a\u00A0vykanie',
      'Slovné druhy a\u00A0zámená',
      'Prisudzovací sklad',
      'Príslovie a\u00A0bájka'
    ]
  }
];
