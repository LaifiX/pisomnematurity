// Slohové útvary písomnej formy internej časti maturitnej skúšky (PFIČ MS) zo SJL.
// Zoznam podľa Špecifikácie testov NIVaM 2025/2026: 150 minút, výber 1 zo 4 tém, rozsah 1,5 – 3 strany.
// Obsah podstránok doplníme z prezentácií Petra Beňa; `short` je len krátky popis na kartu.
export interface SlohovyUtvar {
  slug: string;
  name: string;
  short: string;
}

export const slohoveUtvary: SlohovyUtvar[] = [
  { slug: 'uvaha', name: 'Úvaha', short: 'Zamyslenie nad problémom, vlastný postoj a argumenty.' },
  { slug: 'charakteristika', name: 'Charakteristika osoby', short: 'Vonkajšie aj vnútorné vlastnosti, priama aj nepriama.' },
  { slug: 'umelecky-opis', name: 'Umelecký opis', short: 'Subjektívny obraz miesta, osoby či veci cez zmysly.' },
  { slug: 'rozpravanie', name: 'Rozprávanie', short: 'Príbeh s dejovou líniou, napätím a priamou rečou.' },
  { slug: 'diskusny-prispevok', name: 'Diskusný príspevok', short: 'Reakcia v diskusii, argumenty a kontakt s publikom.' },
  { slug: 'beletrizovany-zivotopis', name: 'Beletrizovaný životopis', short: 'Životný príbeh osobnosti podaný umeleckým štýlom.' },
  { slug: 'vyklad', name: 'Výklad', short: 'Vysvetlenie javu, jeho príčin a súvislostí.' },
  { slug: 'slavnostny-prejav', name: 'Slávnostný prejav', short: 'Rečnícky prejav k príležitosti, oslovenie a pátos.' }
];
