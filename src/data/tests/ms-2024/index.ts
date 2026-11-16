import type { TestModuleData } from '../../types';
import { passages, diagrams } from './passages';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';

// Maturita 2024, riadny (marcový) termín – test EČ MS zo SJL, kód 24 1403
export const testModuleMs2024: TestModuleData = {
  slug: 'ms-2024',
  passages,
  diagrams,
  questions: [...questionsPart1, ...questionsPart2],
  stepperGroups: [
    { label: 'Ukážka 1 · Kováč', fromIndex: 0, toIndex: 7 },
    { label: 'Ukážka 2 · Drak sa vracia', fromIndex: 8, toIndex: 15 },
    { label: 'Ukážka 3 · Eco', fromIndex: 16, toIndex: 23 },
    { label: 'Ukážka 4 · Bukovčan', fromIndex: 24, toIndex: 31 },
    { label: 'Ukážka 5 · Lehenová', fromIndex: 32, toIndex: 39 },
    { label: 'Ukážka 6 · Vocelka', fromIndex: 40, toIndex: 47 },
    { label: 'Ukážka 7 · Inzerát a žiadosť', fromIndex: 48, toIndex: 55 },
    { label: 'Ukážka 8 · Goethe', fromIndex: 56, toIndex: 63 }
  ],
  // každá úloha patrí do práve jednej skupiny (id skupín sa nemenia – viažu sa na ikony)
  topicGroups: [
    {
      id: 'porozumenie',
      icon: 'book',
      name: 'Čítanie s porozumením',
      questionIds: [1, 9, 10, 17, 18, 25, 30, 32, 33, 35, 41, 49, 50, 58, 60]
    },
    {
      id: 'skladba_literatura',
      icon: 'quote',
      name: 'Literatúra – teória a dejiny',
      questionIds: [11, 12, 13, 14, 19, 20, 26, 27, 28, 29, 36, 37, 39, 40, 42, 64]
    },
    {
      id: 'pravopis_lexika',
      icon: 'spellcheck',
      name: 'Pravopis, zvuková rovina a lexikológia',
      questionIds: [3, 5, 8, 21, 22, 23, 34, 38, 44, 45, 46, 51, 55, 59, 63]
    },
    {
      id: 'tvaroslovie',
      icon: 'feather',
      name: 'Morfológia, skladba a štylistika',
      questionIds: [2, 4, 6, 7, 15, 16, 24, 31, 43, 47, 48, 52, 53, 54, 56, 57, 61, 62]
    }
  ]
};
