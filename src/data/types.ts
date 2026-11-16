export interface OptionItem {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface SolutionStep {
  title: string;
  text: string;
}

export interface StepperGroup {
  label: string;
  fromIndex: number; // 0-based inclusive
  toIndex: number; // 0-based inclusive
}

export interface SharedPassage {
  label: string; // e.g. 'Ukážka 1 · vzťahuje sa na úlohy 01 – 07'
  html: string;
}

export interface QuestionData {
  id: number;
  code: string; // '01' .. '30'
  type: 'choice' | 'text';
  category: string;
  sharedContextId?: string;
  diagramId?: string;
  questionText: string;
  questionTextAfter?: string;
  fillSentenceHtml?: string; // sentence with the {{blank}} placeholder where the text input is rendered
  placeholder?: string;
  options?: OptionItem[];
  correctAnswerDisplay: string;
  acceptedAnswers: string[];
  /** kľúč: „prihliadať na vecnú správnosť, uznať aj odpoveď s pravopisnými chybami“ – porovnáva sa bez diakritiky a veľkosti písmen */
  lenient?: boolean;
  caseSensitive?: boolean; // default false: capital/small first letter is ignored unless set
  caseHint?: string; // feedback when the answer differs only in capital/small letters (caseSensitive tasks)
  commonMistakes?: { pattern: string; hint: string }[]; // typical wrong answer (regex source, case-insensitive) + targeted feedback
  orderedWords?: string[]; // exact list of words in the required order; any punctuation/space separators are accepted
  unorderedWords?: string[]; // exact list of words in any order; any punctuation/space separators are accepted
  footnote?: string;
  hint: string;
  solutionSteps: SolutionStep[];
  solutionConclusion: string;
}

export interface TopicGroup {
  id: string;
  icon: string;
  name: string;
  questionIds: number[];
}

export interface TestModuleData {
  slug: string;
  questions: QuestionData[];
  passages: Record<string, SharedPassage>;
  diagrams: Record<string, string>;
  stepperGroups: StepperGroup[];
  topicGroups: TopicGroup[];
}
