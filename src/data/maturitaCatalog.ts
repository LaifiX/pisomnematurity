// Zoznam testov pre hlavnú stránku – odvodený z testsCatalog.ts, aby sa ročník zapínal na jednom mieste
// (status: 'ready' v testsCatalog.ts). Štruktúra testu podľa Špecifikácie NIVaM: 100 minút, 8 ukážok, 64 úloh.
import { testsCatalog } from './testsCatalog';

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

export const maturitaCatalog: MaturitaTest[] = testsCatalog.map((t) => ({
  slug: t.slug,
  year: t.year,
  schoolYear: t.schoolYear,
  questionsCount: t.questionsCount,
  choiceCount: t.choiceCount,
  openCount: t.openCount,
  passagesCount: 8,
  durationMinutes: t.durationMinutes,
  status: t.status
}));
