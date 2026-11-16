import type { TestModuleData } from '../../types';
import { passages, diagrams } from './passages';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';

export const testModule2024: TestModuleData = {
  slug: 't9-2024',
  passages,
  diagrams,
  questions: [...questionsPart1, ...questionsPart2],
  stepperGroups: [
    { label: 'Ukážka 1 · Paralympiáda', fromIndex: 0, toIndex: 6 },
    { label: 'Ukážka 2 · S. Hawking', fromIndex: 7, toIndex: 13 },
    { label: 'Ukážka 3 · Kareta obyčajná', fromIndex: 14, toIndex: 20 },
    { label: 'Bájka, pieseň a jazyk', fromIndex: 21, toIndex: 29 }
  ],
  topicGroups: [
    {
      id: 'porozumenie',
      icon: 'book',
      name: 'Čítanie s porozumením',
      questionIds: [1, 2, 8, 9, 15, 16, 17, 18, 26]
    },
    {
      id: 'pravopis_lexika',
      icon: 'spellcheck',
      name: 'Pravopis, hláskoslovie a lexikológia',
      questionIds: [3, 4, 6, 7, 11, 13, 24, 27, 29]
    },
    {
      id: 'tvaroslovie',
      icon: 'feather',
      name: 'Slovné druhy a tvaroslovie',
      questionIds: [5, 12, 14, 19, 20, 21, 23, 25, 30]
    },
    {
      id: 'skladba_literatura',
      icon: 'quote',
      name: 'Skladba a literatúra',
      questionIds: [10, 22, 28]
    }
  ]
};
