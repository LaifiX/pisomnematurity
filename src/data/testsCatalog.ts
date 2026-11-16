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
    slug: 'ms-2026',
    year: 2026,
    accent: 'atrament',
    schoolYear: '2025/2026',
    title: 'Maturita 2026',
    subtitle: 'Slovenský jazyk a literatúra – externá časť',
    variant: 'Riadny termín',
    code: '1403',
    questionsCount: 64,
    choiceCount: 40,
    openCount: 24,
    durationMinutes: 100,
    status: 'coming_soon',
    badgeText: 'Pripravujeme',
    description: 'Test externej časti maturitnej skúšky zo slovenského jazyka a literatúry: 8 ukážok, 64 úloh, 100 minút.',
    topics: []
  },
  {
    slug: 'ms-2025',
    year: 2025,
    accent: 'atrament',
    schoolYear: '2024/2025',
    title: 'Maturita 2025',
    subtitle: 'Slovenský jazyk a literatúra – externá časť',
    variant: 'Riadny termín',
    code: '1403',
    questionsCount: 64,
    choiceCount: 40,
    openCount: 24,
    durationMinutes: 100,
    status: 'coming_soon',
    badgeText: 'Pripravujeme',
    description: 'Test externej časti maturitnej skúšky zo slovenského jazyka a literatúry: 8 ukážok, 64 úloh, 100 minút.',
    topics: []
  },
  {
    slug: 'ms-2024',
    year: 2024,
    accent: 'atrament',
    schoolYear: '2023/2024',
    title: 'Maturita 2024',
    subtitle: 'Slovenský jazyk a literatúra – externá časť',
    variant: 'Riadny termín',
    code: '1403',
    questionsCount: 64,
    choiceCount: 40,
    openCount: 24,
    durationMinutes: 100,
    status: 'coming_soon',
    badgeText: 'Pripravujeme',
    description: 'Test externej časti maturitnej skúšky zo slovenského jazyka a literatúry: 8 ukážok, 64 úloh, 100 minút.',
    topics: []
  },
  {
    slug: 'ms-2023',
    year: 2023,
    accent: 'atrament',
    schoolYear: '2022/2023',
    title: 'Maturita 2023',
    subtitle: 'Slovenský jazyk a literatúra – externá časť',
    variant: 'Riadny termín',
    code: '1403',
    questionsCount: 64,
    choiceCount: 40,
    openCount: 24,
    durationMinutes: 100,
    status: 'coming_soon',
    badgeText: 'Pripravujeme',
    description: 'Test externej časti maturitnej skúšky zo slovenského jazyka a literatúry: 8 ukážok, 64 úloh, 100 minút.',
    topics: []
  },
  {
    slug: 'ms-2022',
    year: 2022,
    accent: 'atrament',
    schoolYear: '2021/2022',
    title: 'Maturita 2022',
    subtitle: 'Slovenský jazyk a literatúra – externá časť',
    variant: 'Riadny termín',
    code: '20 1403',
    questionsCount: 64,
    choiceCount: 40,
    openCount: 24,
    durationMinutes: 100,
    status: 'ready',
    badgeText: 'Dostupný online',
    description: 'Test externej časti maturitnej skúšky zo slovenského jazyka a literatúry: 8 ukážok, 64 úloh, 100 minút.',
    topics: []
  }
];
