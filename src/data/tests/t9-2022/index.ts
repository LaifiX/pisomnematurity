import type { TestModuleData } from '../../types';
import { passages, diagrams } from './passages';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';

export const testModule2022: TestModuleData = {
  slug: 't9-2022',
  passages,
  diagrams,
  questions: [...questionsPart1, ...questionsPart2],
  stepperGroups: [
    { label: 'Ukážka 1 · Triedenie odpadu', fromIndex: 0, toIndex: 6 },
    { label: 'Ukážka 2 · Čarodejník', fromIndex: 7, toIndex: 13 },
    { label: 'Ukážka 3 · Dobrovoľníctvo', fromIndex: 14, toIndex: 20 },
    { label: 'Jazyk, poézia a bájka', fromIndex: 21, toIndex: 29 }
  ],
  topicGroups: [
    {
      id: 'porozumenie',
      icon: 'book',
      name: 'Čítanie s porozumením',
      questionIds: [1, 2, 3, 8, 9, 10, 13, 15, 16, 17, 21, 27]
    },
    {
      id: 'pravopis_lexika',
      icon: 'spellcheck',
      name: 'Pravopis, hláskoslovie a lexikológia',
      questionIds: [4, 7, 14, 18, 19, 23, 28]
    },
    {
      id: 'tvaroslovie',
      icon: 'feather',
      name: 'Slovné druhy a tvaroslovie',
      questionIds: [5, 6, 11, 12, 24, 26, 29]
    },
    {
      id: 'skladba_literatura',
      icon: 'quote',
      name: 'Skladba a literatúra',
      questionIds: [20, 22, 25, 30]
    }
  ]
};
