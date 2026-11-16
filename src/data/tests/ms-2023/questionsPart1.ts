import type { QuestionData } from '../../types';

// Úlohy 01 – 32. Odpovede podľa kľúča NIVaM (zdroje-nivam/MS2023-kluc-SJL.pdf).
const L = 'Literatúra – teória a dejiny';
const P = 'Čítanie s porozumením';
const J = 'Pravopis, zvuková rovina a lexikológia';
const S = 'Morfológia, skladba a štylistika';
void L; void J; void S;

export const questionsPart1: QuestionData[] = [
  {
    id: 1,
    code: '01',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_1',
    questionText: 'ZADANIE ÚLOHY 01',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 2,
    code: '02',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_1',
    questionText: 'ZADANIE ÚLOHY 02',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 3,
    code: '03',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_1',
    questionText: 'ZADANIE ÚLOHY 03',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 4,
    code: '04',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_1',
    questionText: 'ZADANIE ÚLOHY 04',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 5,
    code: '05',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_1',
    questionText: 'ZADANIE ÚLOHY 05',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 6,
    code: '06',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_1',
    questionText: 'ZADANIE ÚLOHY 06',
    type: 'text',
    placeholder: 'Napíš odpoveď',
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'], // všetky varianty z kľúča (lomka = alternatíva)
    // lenient: true, // ak kľúč píše „uznať aj odpoveď s pravopisnými chybami“
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 7,
    code: '07',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_1',
    questionText: 'ZADANIE ÚLOHY 07',
    type: 'text',
    placeholder: 'Napíš odpoveď',
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'], // všetky varianty z kľúča (lomka = alternatíva)
    // lenient: true, // ak kľúč píše „uznať aj odpoveď s pravopisnými chybami“
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 8,
    code: '08',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_1',
    questionText: 'ZADANIE ÚLOHY 08',
    type: 'text',
    placeholder: 'Napíš odpoveď',
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'], // všetky varianty z kľúča (lomka = alternatíva)
    // lenient: true, // ak kľúč píše „uznať aj odpoveď s pravopisnými chybami“
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 9,
    code: '09',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_2',
    questionText: 'ZADANIE ÚLOHY 09',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 10,
    code: '10',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_2',
    questionText: 'ZADANIE ÚLOHY 10',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 11,
    code: '11',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_2',
    questionText: 'ZADANIE ÚLOHY 11',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 12,
    code: '12',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_2',
    questionText: 'ZADANIE ÚLOHY 12',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 13,
    code: '13',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_2',
    questionText: 'ZADANIE ÚLOHY 13',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 14,
    code: '14',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_2',
    questionText: 'ZADANIE ÚLOHY 14',
    type: 'text',
    placeholder: 'Napíš odpoveď',
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'], // všetky varianty z kľúča (lomka = alternatíva)
    // lenient: true, // ak kľúč píše „uznať aj odpoveď s pravopisnými chybami“
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 15,
    code: '15',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_2',
    questionText: 'ZADANIE ÚLOHY 15',
    type: 'text',
    placeholder: 'Napíš odpoveď',
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'], // všetky varianty z kľúča (lomka = alternatíva)
    // lenient: true, // ak kľúč píše „uznať aj odpoveď s pravopisnými chybami“
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 16,
    code: '16',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_2',
    questionText: 'ZADANIE ÚLOHY 16',
    type: 'text',
    placeholder: 'Napíš odpoveď',
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'], // všetky varianty z kľúča (lomka = alternatíva)
    // lenient: true, // ak kľúč píše „uznať aj odpoveď s pravopisnými chybami“
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 17,
    code: '17',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_3',
    questionText: 'ZADANIE ÚLOHY 17',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 18,
    code: '18',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_3',
    questionText: 'ZADANIE ÚLOHY 18',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 19,
    code: '19',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_3',
    questionText: 'ZADANIE ÚLOHY 19',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 20,
    code: '20',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_3',
    questionText: 'ZADANIE ÚLOHY 20',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 21,
    code: '21',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_3',
    questionText: 'ZADANIE ÚLOHY 21',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 22,
    code: '22',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_3',
    questionText: 'ZADANIE ÚLOHY 22',
    type: 'text',
    placeholder: 'Napíš odpoveď',
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'], // všetky varianty z kľúča (lomka = alternatíva)
    // lenient: true, // ak kľúč píše „uznať aj odpoveď s pravopisnými chybami“
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 23,
    code: '23',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_3',
    questionText: 'ZADANIE ÚLOHY 23',
    type: 'text',
    placeholder: 'Napíš odpoveď',
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'], // všetky varianty z kľúča (lomka = alternatíva)
    // lenient: true, // ak kľúč píše „uznať aj odpoveď s pravopisnými chybami“
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 24,
    code: '24',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_3',
    questionText: 'ZADANIE ÚLOHY 24',
    type: 'text',
    placeholder: 'Napíš odpoveď',
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'], // všetky varianty z kľúča (lomka = alternatíva)
    // lenient: true, // ak kľúč píše „uznať aj odpoveď s pravopisnými chybami“
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 25,
    code: '25',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_4',
    questionText: 'ZADANIE ÚLOHY 25',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 26,
    code: '26',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_4',
    questionText: 'ZADANIE ÚLOHY 26',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 27,
    code: '27',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_4',
    questionText: 'ZADANIE ÚLOHY 27',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 28,
    code: '28',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_4',
    questionText: 'ZADANIE ÚLOHY 28',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 29,
    code: '29',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_4',
    questionText: 'ZADANIE ÚLOHY 29',
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 30,
    code: '30',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_4',
    questionText: 'ZADANIE ÚLOHY 30',
    type: 'text',
    placeholder: 'Napíš odpoveď',
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'], // všetky varianty z kľúča (lomka = alternatíva)
    // lenient: true, // ak kľúč píše „uznať aj odpoveď s pravopisnými chybami“
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 31,
    code: '31',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_4',
    questionText: 'ZADANIE ÚLOHY 31',
    type: 'text',
    placeholder: 'Napíš odpoveď',
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'], // všetky varianty z kľúča (lomka = alternatíva)
    // lenient: true, // ak kľúč píše „uznať aj odpoveď s pravopisnými chybami“
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  },
  {
    id: 32,
    code: '32',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: 'ukazka_4',
    questionText: 'ZADANIE ÚLOHY 32',
    type: 'text',
    placeholder: 'Napíš odpoveď',
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'], // všetky varianty z kľúča (lomka = alternatíva)
    // lenient: true, // ak kľúč píše „uznať aj odpoveď s pravopisnými chybami“
    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'
  }
];
