import type { TestModuleData } from '../../types';
import { passages, diagrams } from './passages';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';

export const testModule2023: TestModuleData = {
  slug: 't9-2023',
  passages,
  diagrams,
  questions: [...questionsPart1, ...questionsPart2],
  stepperGroups: [
    { label: 'Ukážka 1 · Odpad v moriach', fromIndex: 0, toIndex: 6 },
    { label: 'Ukážka 2 · Spoločnosť Lego', fromIndex: 7, toIndex: 13 },
    { label: 'Ukážka 3 · 20 000 míľ pod morom', fromIndex: 14, toIndex: 20 },
    { label: 'Jazyk a literatúra', fromIndex: 21, toIndex: 29 }
  ],
  topicGroups: [
    {
      id: 'porozumenie',
      icon: 'book',
      name: 'Čítanie s porozumením',
      questionIds: [1, 2, 3, 4, 8, 9, 10, 15]
    },
    {
      id: 'pravopis_lexika',
      icon: 'spellcheck',
      name: 'Pravopis, hláskoslovie a lexikológia',
      questionIds: [11, 12, 13, 17, 18, 26, 27, 29]
    },
    {
      id: 'tvaroslovie',
      icon: 'feather',
      name: 'Slovné druhy a tvaroslovie',
      questionIds: [5, 6, 7, 14, 21, 23, 25]
    },
    {
      id: 'skladba_literatura',
      icon: 'quote',
      name: 'Skladba a literatúra',
      questionIds: [16, 19, 20, 22, 24, 28, 30]
    }
  ]
};
