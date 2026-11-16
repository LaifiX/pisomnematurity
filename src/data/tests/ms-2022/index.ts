import type { TestModuleData } from '../../types';
import { passages, diagrams } from './passages';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';

// Maturita 2022, riadny termín – test EČ MS zo SJL, kód 20 1403
export const testModuleMs2022: TestModuleData = {
  slug: 'ms-2022',
  passages,
  diagrams,
  questions: [...questionsPart1, ...questionsPart2],
  stepperGroups: [
    { label: 'Ukážka 1 · Puškin', fromIndex: 0, toIndex: 7 },
    { label: 'Ukážka 2 · Marčok', fromIndex: 8, toIndex: 15 },
    { label: 'Ukážka 3 · Kesey', fromIndex: 16, toIndex: 23 },
    { label: 'Ukážka 4 · Taragel', fromIndex: 24, toIndex: 31 },
    { label: 'Ukážka 5 · Bednár', fromIndex: 32, toIndex: 39 },
    { label: 'Ukážka 6 · Molière', fromIndex: 40, toIndex: 47 },
    { label: 'Ukážka 7 · Pišťanek', fromIndex: 48, toIndex: 55 },
    { label: 'Ukážka 8 · Cestovný ruch', fromIndex: 56, toIndex: 63 }
  ],
  // id skupín sa zhodujú s ikonami v stránke testu (UI.topic_*) a s kontrolou v scripts/check-tests.mjs
  topicGroups: [
    { id: 'porozumenie', icon: 'book', name: 'Čítanie s porozumením', questionIds: [1, 9, 10, 11, 17, 18, 19, 26, 27, 34, 41, 49, 57, 58, 60, 64] },
    { id: 'skladba_literatura', icon: 'quote', name: 'Literatúra – teória a dejiny', questionIds: [2, 3, 4, 5, 6, 25, 28, 30, 33, 35, 36, 39, 42, 45, 46, 55] },
    { id: 'pravopis_lexika', icon: 'spellcheck', name: 'Pravopis, zvuková rovina a lexikológia', questionIds: [7, 12, 13, 20, 22, 24, 29, 32, 43, 47, 50, 53, 54, 62, 63] },
    { id: 'tvaroslovie', icon: 'feather', name: 'Morfológia, skladba a štylistika', questionIds: [8, 14, 15, 16, 21, 23, 31, 37, 38, 40, 44, 48, 51, 52, 56, 59, 61] }
  ]
};
