import type { TestModuleData } from '../../types';
import { passages, diagrams } from './passages';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';

// Maturita 2023, riadny termín – test EČ MS zo SJL
export const testModuleMs2023: TestModuleData = {
  slug: 'ms-2023',
  passages,
  diagrams,
  questions: [...questionsPart1, ...questionsPart2],
  stepperGroups: [
    { label: 'Ukážka 1 · AUTOR', fromIndex: 0, toIndex: 7 },
    { label: 'Ukážka 2 · AUTOR', fromIndex: 8, toIndex: 15 },
    { label: 'Ukážka 3 · AUTOR', fromIndex: 16, toIndex: 23 },
    { label: 'Ukážka 4 · AUTOR', fromIndex: 24, toIndex: 31 },
    { label: 'Ukážka 5 · AUTOR', fromIndex: 32, toIndex: 39 },
    { label: 'Ukážka 6 · AUTOR', fromIndex: 40, toIndex: 47 },
    { label: 'Ukážka 7 · AUTOR', fromIndex: 48, toIndex: 55 },
    { label: 'Ukážka 8 · AUTOR', fromIndex: 56, toIndex: 63 }
  ],
  // každá úloha patrí do práve jednej skupiny (id skupín sa nemenia – viažu sa na ikony)
  topicGroups: [
    { id: 'porozumenie', icon: 'book', name: 'Čítanie s porozumením', questionIds: [] },
    { id: 'skladba_literatura', icon: 'quote', name: 'Literatúra – teória a dejiny', questionIds: [] },
    { id: 'pravopis_lexika', icon: 'spellcheck', name: 'Pravopis, zvuková rovina a lexikológia', questionIds: [] },
    { id: 'tvaroslovie', icon: 'feather', name: 'Morfológia, skladba a štylistika', questionIds: [] }
  ]
};
