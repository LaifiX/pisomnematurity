import type { TestModuleData } from '../../types';
import { passages, diagrams } from './passages';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';

export const testModule2025: TestModuleData = {
  slug: 't9-2025',
  passages,
  diagrams,
  questions: [...questionsPart1, ...questionsPart2],
  stepperGroups: [
    { label: 'Ukážka 1 · Míľniky Európy', fromIndex: 0, toIndex: 6 },
    { label: 'Ukážka 2 · Dračí dub', fromIndex: 7, toIndex: 13 },
    { label: 'Ukážka 3 · Na konci vesmíru', fromIndex: 14, toIndex: 20 },
    { label: 'Jazyk, štýl a poézia', fromIndex: 21, toIndex: 29 }
  ],
  topicGroups: [
    {
      id: 'porozumenie',
      icon: 'book',
      name: 'Čítanie s porozumením',
      questionIds: [1, 2, 3, 8, 9, 10, 15, 16, 22]
    },
    {
      id: 'pravopis_lexika',
      icon: 'spellcheck',
      name: 'Pravopis, hláskoslovie a lexikológia',
      questionIds: [4, 6, 11, 12, 20, 21, 28]
    },
    {
      id: 'tvaroslovie',
      icon: 'feather',
      name: 'Slovné druhy a tvaroslovie',
      questionIds: [5, 7, 13, 19, 23, 24, 25, 29, 30]
    },
    {
      id: 'skladba_literatura',
      icon: 'quote',
      name: 'Skladba a literatúra',
      questionIds: [14, 17, 18, 26, 27]
    }
  ]
};
