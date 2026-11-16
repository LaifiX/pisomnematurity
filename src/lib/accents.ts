// Odtiene ročníkov – jediný zdroj pravdy pre farby, ktoré nejdú cez CSS
// (theme-color lišty prehliadača v mobile, konfety). CSS verzie sú v global.css (.acc-*).
export type AccentName = 'malina' | 'vino' | 'slivka' | 'atrament' | 'jedla';

export const ACCENTS: Record<AccentName, { base: string; soft: string }> = {
  malina: { base: '#b1255e', soft: '#eda7b9' },
  vino: { base: '#84203b', soft: '#efa7b1' },
  slivka: { base: '#87317e', soft: '#dfaad6' },
  atrament: { base: '#325496', soft: '#a0bef5' },
  jedla: { base: '#1a6e4d', soft: '#8bcfad' }
};
