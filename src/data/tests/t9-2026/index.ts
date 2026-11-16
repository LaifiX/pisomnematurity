import type { TestModuleData } from '../../types';
import { passages, diagrams } from './passages';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';

export const testModule2026: TestModuleData = {
  slug: 't9-2026',
  passages,
  diagrams,
  questions: [...questionsPart1, ...questionsPart2],
  stepperGroups: [
    { label: 'Ukážka 1 · Doprava', fromIndex: 0, toIndex: 6 },
    { label: 'Ukážka 2 · Knižná hra', fromIndex: 7, toIndex: 13 },
    { label: 'Ukážka 3 · Stratený svet', fromIndex: 14, toIndex: 20 },
    { label: 'Jazyk, štýl a piesne', fromIndex: 21, toIndex: 29 }
  ],
  topicGroups: [
    {
      id: 'porozumenie',
      icon: 'book',
      name: 'Čítanie s porozumením',
      questionIds: [1, 2, 3, 8, 9, 15, 16, 17, 29]
    },
    {
      id: 'pravopis_lexika',
      icon: 'spellcheck',
      name: 'Pravopis, hláskoslovie a lexikológia',
      questionIds: [5, 6, 7, 18, 20, 24, 28]
    },
    {
      id: 'tvaroslovie',
      icon: 'feather',
      name: 'Slovné druhy a tvaroslovie',
      questionIds: [11, 12, 13, 14, 19, 21, 25, 26, 27, 30]
    },
    {
      id: 'skladba_literatura',
      icon: 'quote',
      name: 'Skladba a literatúra',
      questionIds: [4, 10, 22, 23]
    }
  ]
};
