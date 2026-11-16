import type { TestModuleData } from '../../types';
import { passages, diagrams } from './passages';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';

// Maturita 2026, riadny termín (marcový termín) – test EČ MS zo SJL, kód 26 1403
export const testModuleMs2026: TestModuleData = {
  slug: 'ms-2026',
  passages,
  diagrams,
  questions: [...questionsPart1, ...questionsPart2],
  stepperGroups: [
    { label: 'Ukážka 1 · Poe', fromIndex: 0, toIndex: 7 },
    { label: 'Ukážka 2 · Dilong', fromIndex: 8, toIndex: 15 },
    { label: 'Ukážka 3 · Bryndzové halušky', fromIndex: 16, toIndex: 23 },
    { label: 'Ukážka 4 · Beňová', fromIndex: 24, toIndex: 31 },
    { label: 'Ukážka 5 · Antigona', fromIndex: 32, toIndex: 39 },
    { label: 'Ukážka 6 · Ferrata Kyseľ', fromIndex: 40, toIndex: 47 },
    { label: 'Ukážka 7 · Jesenský', fromIndex: 48, toIndex: 55 },
    { label: 'Ukážka 8 · Tolstoj', fromIndex: 56, toIndex: 63 }
  ],
  // každá úloha patrí do práve jednej skupiny (id skupín sa nemenia – viažu sa na ikony)
  topicGroups: [
    {
      id: 'porozumenie',
      icon: 'book',
      name: 'Čítanie s porozumením',
      questionIds: [1, 2, 4, 6, 8, 9, 17, 18, 25, 33, 41, 42, 49, 50, 57, 58]
    },
    {
      id: 'skladba_literatura',
      icon: 'quote',
      name: 'Literatúra – teória a dejiny',
      questionIds: [3, 7, 10, 11, 13, 15, 16, 19, 26, 32, 34, 35, 36, 37, 38, 39, 40, 51, 56, 59, 60]
    },
    {
      id: 'pravopis_lexika',
      icon: 'spellcheck',
      name: 'Pravopis, zvuková rovina a lexikológia',
      questionIds: [14, 21, 28, 29, 31, 44, 45, 52, 61, 62, 64]
    },
    {
      id: 'tvaroslovie',
      icon: 'feather',
      name: 'Morfológia, skladba a štylistika',
      questionIds: [5, 12, 20, 22, 23, 24, 27, 30, 43, 46, 47, 48, 53, 54, 55, 63]
    }
  ]
};
