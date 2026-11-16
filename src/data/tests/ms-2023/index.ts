import type { TestModuleData } from '../../types';
import { passages, diagrams } from './passages';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';

// Maturita 2023, riadny (marcový) termín – test EČ MS zo SJL, kód 23 1403
export const testModuleMs2023: TestModuleData = {
  slug: 'ms-2023',
  passages,
  diagrams,
  questions: [...questionsPart1, ...questionsPart2],
  stepperGroups: [
    { label: 'Ukážka 1 · Hevier', fromIndex: 0, toIndex: 7 },
    { label: 'Ukážka 2 · Rimbaud', fromIndex: 8, toIndex: 15 },
    { label: 'Ukážka 3 · Jazyková poradňa', fromIndex: 16, toIndex: 23 },
    { label: 'Ukážka 4 · Kukučín', fromIndex: 24, toIndex: 31 },
    { label: 'Ukážka 5 · Pupala', fromIndex: 32, toIndex: 39 },
    { label: 'Ukážka 6 · Slovensko', fromIndex: 40, toIndex: 47 },
    { label: 'Ukážka 7 · Shakespeare', fromIndex: 48, toIndex: 55 },
    { label: 'Ukážka 8 · Jilemnický', fromIndex: 56, toIndex: 63 }
  ],
  // id skupín sa zhodujú s ikonami v stránke testu (UI.topic_*) a s kontrolou v scripts/check-tests.mjs
  topicGroups: [
    { id: 'porozumenie', icon: 'book', name: 'Čítanie s porozumením', questionIds: [1, 2, 13, 17, 18, 25, 33, 34, 41, 42, 47, 49, 57, 59, 64] },
    { id: 'skladba_literatura', icon: 'quote', name: 'Literatúra – teória a dejiny', questionIds: [7, 9, 10, 11, 12, 14, 15, 16, 26, 27, 31, 35, 36, 51, 53, 54, 55, 58, 61] },
    { id: 'pravopis_lexika', icon: 'spellcheck', name: 'Pravopis, zvuková rovina a lexikológia', questionIds: [4, 5, 19, 20, 23, 28, 29, 38, 43, 45, 46, 52, 60, 62] },
    { id: 'tvaroslovie', icon: 'feather', name: 'Morfológia, skladba a štylistika', questionIds: [3, 6, 8, 21, 22, 24, 30, 32, 37, 39, 40, 44, 48, 50, 56, 63] }
  ]
};
