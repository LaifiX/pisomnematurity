import type { SharedPassage } from '../../types';

// Maturita 2023, riadny termín – test EČ MS zo SJL. Prepis podľa PDF NIVaM (zdroje-nivam/MS2023-test-SJL.pdf).
export const passages: Record<string, SharedPassage> = {
  ukazka_1: {
    label: 'Ukážka 1 · AUTOR – NÁZOV (úlohy 01 – 08)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 1</div>
        <p class="passage-author">AUTOR</p>
        <h3 class="passage-title">NÁZOV</h3>
        <p class="passage-note">(úryvok)</p>
        <p>TEXT UKÁŽKY – odsek po odseku; zvýraznené časti: <strong class="hl">…</strong>; verše: <div class="passage-poem">…<br /></div></p>
      </div>
    `
  },
  ukazka_2: {
    label: 'Ukážka 2 · AUTOR – NÁZOV (úlohy 09 – 16)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 2</div>
        <p class="passage-author">AUTOR</p>
        <h3 class="passage-title">NÁZOV</h3>
        <p class="passage-note">(úryvok)</p>
        <p>TEXT UKÁŽKY – odsek po odseku; zvýraznené časti: <strong class="hl">…</strong>; verše: <div class="passage-poem">…<br /></div></p>
      </div>
    `
  },
  ukazka_3: {
    label: 'Ukážka 3 · AUTOR – NÁZOV (úlohy 17 – 24)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 3</div>
        <p class="passage-author">AUTOR</p>
        <h3 class="passage-title">NÁZOV</h3>
        <p class="passage-note">(úryvok)</p>
        <p>TEXT UKÁŽKY – odsek po odseku; zvýraznené časti: <strong class="hl">…</strong>; verše: <div class="passage-poem">…<br /></div></p>
      </div>
    `
  },
  ukazka_4: {
    label: 'Ukážka 4 · AUTOR – NÁZOV (úlohy 25 – 32)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 4</div>
        <p class="passage-author">AUTOR</p>
        <h3 class="passage-title">NÁZOV</h3>
        <p class="passage-note">(úryvok)</p>
        <p>TEXT UKÁŽKY – odsek po odseku; zvýraznené časti: <strong class="hl">…</strong>; verše: <div class="passage-poem">…<br /></div></p>
      </div>
    `
  },
  ukazka_5: {
    label: 'Ukážka 5 · AUTOR – NÁZOV (úlohy 33 – 40)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 5</div>
        <p class="passage-author">AUTOR</p>
        <h3 class="passage-title">NÁZOV</h3>
        <p class="passage-note">(úryvok)</p>
        <p>TEXT UKÁŽKY – odsek po odseku; zvýraznené časti: <strong class="hl">…</strong>; verše: <div class="passage-poem">…<br /></div></p>
      </div>
    `
  },
  ukazka_6: {
    label: 'Ukážka 6 · AUTOR – NÁZOV (úlohy 41 – 48)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 6</div>
        <p class="passage-author">AUTOR</p>
        <h3 class="passage-title">NÁZOV</h3>
        <p class="passage-note">(úryvok)</p>
        <p>TEXT UKÁŽKY – odsek po odseku; zvýraznené časti: <strong class="hl">…</strong>; verše: <div class="passage-poem">…<br /></div></p>
      </div>
    `
  },
  ukazka_7: {
    label: 'Ukážka 7 · AUTOR – NÁZOV (úlohy 49 – 56)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 7</div>
        <p class="passage-author">AUTOR</p>
        <h3 class="passage-title">NÁZOV</h3>
        <p class="passage-note">(úryvok)</p>
        <p>TEXT UKÁŽKY – odsek po odseku; zvýraznené časti: <strong class="hl">…</strong>; verše: <div class="passage-poem">…<br /></div></p>
      </div>
    `
  },
  ukazka_8: {
    label: 'Ukážka 8 · AUTOR – NÁZOV (úlohy 57 – 64)',
    html: `
      <div class="passage-box">
        <div class="passage-badge">Ukážka 8</div>
        <p class="passage-author">AUTOR</p>
        <h3 class="passage-title">NÁZOV</h3>
        <p class="passage-note">(úryvok)</p>
        <p>TEXT UKÁŽKY – odsek po odseku; zvýraznené časti: <strong class="hl">…</strong>; verše: <div class="passage-poem">…<br /></div></p>
      </div>
    `
  }
};

export const diagrams: Record<string, string> = {};
