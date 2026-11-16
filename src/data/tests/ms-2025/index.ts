import type { TestModuleData } from '../../types';
import { passages, diagrams } from './passages';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';

// Maturita 2025, riadny (marcový) termín – test EČ MS zo SJL, kód 25 1403
export const testModuleMs2025: TestModuleData = {
  slug: 'ms-2025',
  passages,
  diagrams,
  questions: [...questionsPart1, ...questionsPart2],
  stepperGroups: [
    { label: 'Ukážka 1 · Webová poradňa', fromIndex: 0, toIndex: 7 },
    { label: 'Ukážka 2 · Haiku', fromIndex: 8, toIndex: 15 },
    { label: 'Ukážka 3 · 3D CT skener', fromIndex: 16, toIndex: 23 },
    { label: 'Ukážka 4 · Realitný trh', fromIndex: 24, toIndex: 31 },
    { label: 'Ukážka 5 · Coelho', fromIndex: 32, toIndex: 39 },
    { label: 'Ukážka 6 · Lasica, Satinský', fromIndex: 40, toIndex: 47 },
    { label: 'Ukážka 7 · Valaská škola', fromIndex: 48, toIndex: 55 },
    { label: 'Ukážka 8 · Rolland', fromIndex: 56, toIndex: 63 }
  ],
  // id skupín sa zhodujú s ikonami v stránke testu (UI.topic_*) a s kontrolou v scripts/check-tests.mjs
  topicGroups: [
    {
      id: 'porozumenie',
      icon: 'book',
      name: 'Čítanie s porozumením',
      questionIds: [1, 2, 13, 17, 18, 25, 26, 27, 33, 34, 35, 36, 41, 46, 49, 50, 57, 58]
    },
    {
      id: 'skladba_literatura',
      icon: 'quote',
      name: 'Literatúra – teória a dejiny',
      questionIds: [9, 10, 11, 12, 14, 19, 37, 42, 43, 44, 45, 48, 51, 54, 55, 59, 60, 61, 62]
    },
    {
      id: 'pravopis_lexika',
      icon: 'spellcheck',
      name: 'Pravopis, zvuková rovina a lexikológia',
      questionIds: [3, 6, 8, 21, 23, 30, 31, 38, 39, 40, 52, 56]
    },
    {
      id: 'tvaroslovie',
      icon: 'feather',
      name: 'Morfológia, skladba a štylistika',
      questionIds: [4, 5, 7, 15, 16, 20, 22, 24, 28, 29, 32, 47, 53, 63, 64]
    }
  ]
};
