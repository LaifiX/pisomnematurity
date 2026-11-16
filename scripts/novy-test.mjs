// Šablóna nového ročníka maturitného testu: node scripts/novy-test.mjs 2023  (alebo npm run novy-test -- 2023)
// Vytvorí src/data/tests/ms-<rok>/ s 8 ukážkami a 64 úlohami (pri každej ukážke 5 s výberom A – D a 3 s krátkou
// odpoveďou – podľa Špecifikácie NIVaM) a zaregistruje modul v src/data/tests/index.ts.
// Ročník sa na stránke zobrazí až po prepnutí status: 'ready' v src/data/testsCatalog.ts.
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const year = Number(process.argv[2]);
if (!Number.isInteger(year) || year < 2000 || year > 2100) {
  console.error('Použitie: npm run novy-test -- 2023');
  process.exit(1);
}
const slug = `ms-${year}`;
const dir = join('src', 'data', 'tests', slug);
if (existsSync(dir)) {
  console.error(`Priečinok ${dir} už existuje – nič som neprepísal.`);
  process.exit(1);
}
mkdirSync(dir, { recursive: true });

const pad = (n) => String(n).padStart(2, '0');
const passages = Array.from({ length: 8 }, (_, i) => {
  const from = i * 8 + 1;
  return `  ukazka_${i + 1}: {
    label: 'Ukážka ${i + 1} · AUTOR – NÁZOV (úlohy ${pad(from)} – ${pad(from + 7)})',
    html: \`
      <div class="passage-box">
        <div class="passage-badge">Ukážka ${i + 1}</div>
        <p class="passage-author">AUTOR</p>
        <h3 class="passage-title">NÁZOV</h3>
        <p class="passage-note">(úryvok)</p>
        <p>TEXT UKÁŽKY – odsek po odseku; zvýraznené časti: <strong class="hl">…</strong>; verše: <div class="passage-poem">…<br /></div></p>
      </div>
    \`
  }`;
}).join(',\n');

writeFileSync(
  join(dir, 'passages.ts'),
  `import type { SharedPassage } from '../../types';

// Maturita ${year}, riadny termín – test EČ MS zo SJL. Prepis podľa PDF NIVaM (zdroje-nivam/MS${year}-test-SJL.pdf).
export const passages: Record<string, SharedPassage> = {
${passages}
};

export const diagrams: Record<string, string> = {};
`
);

const question = (id) => {
  const inPassage = (id - 1) % 8; // 0–4 výber, 5–7 krátka odpoveď
  const ctx = `ukazka_${Math.floor((id - 1) / 8) + 1}`;
  const base = `    id: ${id},
    code: '${pad(id)}',
    category: P, // P / L / J / S – oblasť pre výsledky
    sharedContextId: '${ctx}',
    questionText: 'ZADANIE ÚLOHY ${pad(id)}',`;
  const tail = `    hint: 'NÁPOVEDA – kde v texte hľadať alebo na aké pravidlo myslieť, bez prezradenia odpovede.',
    solutionSteps: [
      { title: 'Krok 1', text: 'POSTUP' },
      { title: 'Krok 2', text: 'PREČO NIE OSTATNÉ / AKO HODNOTÍ KĽÚČ' }
    ],
    solutionConclusion: 'Správna odpoveď je ?.'`;
  if (inPassage < 5)
    return `  {
${base}
    type: 'choice',
    options: [
      { key: 'A', text: '' },
      { key: 'B', text: '' },
      { key: 'C', text: '' },
      { key: 'D', text: '' }
    ],
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'],
${tail}
  }`;
  return `  {
${base}
    type: 'text',
    placeholder: 'Napíš odpoveď',
    correctAnswerDisplay: '?',
    acceptedAnswers: ['?'], // všetky varianty z kľúča (lomka = alternatíva)
    // lenient: true, // ak kľúč píše „uznať aj odpoveď s pravopisnými chybami“
${tail}
  }`;
};

const header = (from, to) => `import type { QuestionData } from '../../types';

// Úlohy ${pad(from)} – ${pad(to)}. Odpovede podľa kľúča NIVaM (zdroje-nivam/MS${year}-kluc-SJL.pdf).
const L = 'Literatúra – teória a dejiny';
const P = 'Čítanie s porozumením';
const J = 'Pravopis, zvuková rovina a lexikológia';
const S = 'Morfológia, skladba a štylistika';
void L; void J; void S;
`;
writeFileSync(join(dir, 'questionsPart1.ts'), `${header(1, 32)}
export const questionsPart1: QuestionData[] = [
${Array.from({ length: 32 }, (_, i) => question(i + 1)).join(',\n')}
];
`);
writeFileSync(join(dir, 'questionsPart2.ts'), `${header(33, 64)}
export const questionsPart2: QuestionData[] = [
${Array.from({ length: 32 }, (_, i) => question(i + 33)).join(',\n')}
];
`);

const varName = `testModuleMs${year}`;
writeFileSync(
  join(dir, 'index.ts'),
  `import type { TestModuleData } from '../../types';
import { passages, diagrams } from './passages';
import { questionsPart1 } from './questionsPart1';
import { questionsPart2 } from './questionsPart2';

// Maturita ${year}, riadny termín – test EČ MS zo SJL
export const ${varName}: TestModuleData = {
  slug: '${slug}',
  passages,
  diagrams,
  questions: [...questionsPart1, ...questionsPart2],
  stepperGroups: [
${Array.from({ length: 8 }, (_, i) => `    { label: 'Ukážka ${i + 1} · AUTOR', fromIndex: ${i * 8}, toIndex: ${i * 8 + 7} }`).join(',\n')}
  ],
  // každá úloha patrí do práve jednej skupiny (id skupín sa nemenia – viažu sa na ikony)
  topicGroups: [
    { id: 'porozumenie', icon: 'book', name: 'Čítanie s porozumením', questionIds: [] },
    { id: 'skladba_literatura', icon: 'quote', name: 'Literatúra – teória a dejiny', questionIds: [] },
    { id: 'pravopis_lexika', icon: 'spellcheck', name: 'Pravopis, zvuková rovina a lexikológia', questionIds: [] },
    { id: 'tvaroslovie', icon: 'feather', name: 'Morfológia, skladba a štylistika', questionIds: [] }
  ]
};
`
);

// registrácia v src/data/tests/index.ts
const idx = join('src', 'data', 'tests', 'index.ts');
let src = readFileSync(idx, 'utf8');
src = src.replace(/(import \{ testModuleMs\d+ \} from '\.\/ms-\d+';\n)(?!import)/, `$1import { ${varName} } from './${slug}';\n`);
src = src.replace(/(export const testsDataBySlug[^{]*\{\n)/, `$1  '${slug}': ${varName},\n`);
writeFileSync(idx, src);

console.log(`Hotovo: ${dir} (8 ukážok, 64 úloh) a zápis v ${idx}.`);
console.log(`Ďalej: prepíš ukážky a úlohy, doplň topicGroups, potom v src/data/testsCatalog.ts prepni '${slug}' na status: 'ready' a spusti npm run build && npm run check.`);
