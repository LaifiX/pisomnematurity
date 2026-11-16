// Testy externej časti maturitnej skúšky (EČ MS) zo slovenského jazyka a literatúry.
// Štruktúra podľa Špecifikácie testov NIVaM 2025/2026: 100 minút, 8 ukážok, 64 úloh
// (40 s výberom zo štyroch možností, 24 s krátkou odpoveďou), pri každej ukážke 5 + 3 úlohy.
// Zdrojové PDF testov a kľúčov sú v priečinku zdroje-nivam/ (nie je v gite).
export interface MaturitaTest {
  slug: string;
  year: number;
  schoolYear: string;
  questionsCount: number;
  choiceCount: number;
  openCount: number;
  passagesCount: number;
  durationMinutes: number;
  status: 'ready' | 'coming_soon';
}

const base = { questionsCount: 64, choiceCount: 40, openCount: 24, passagesCount: 8, durationMinutes: 100 };

export const maturitaCatalog: MaturitaTest[] = [
  { slug: 'ms-2026', year: 2026, schoolYear: '2025/2026', status: 'coming_soon', ...base },
  { slug: 'ms-2025', year: 2025, schoolYear: '2024/2025', status: 'coming_soon', ...base },
  { slug: 'ms-2024', year: 2024, schoolYear: '2023/2024', status: 'coming_soon', ...base },
  { slug: 'ms-2023', year: 2023, schoolYear: '2022/2023', status: 'coming_soon', ...base },
  { slug: 'ms-2022', year: 2022, schoolYear: '2021/2022', status: 'ready', ...base }
];
