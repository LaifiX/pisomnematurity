// Jemné zvuky rozhrania (Web Audio API, bez zvukových súborov) – spoločné pre úvodnú stránku aj test.
// Stav zapnuté/vypnuté je v localStorage (monitorsjl_sound_muted), takže prepínač na oboch stránkach je zosúladený.
// Použitie: T9Sound.play('tap' | 'select' | 'correct' | 'wrong' | 'finish' | 'open' | 'close' | 'on', index?)
(function () {
  var KEY = 'monitorsjl_sound_muted';
  var muted = false;
  try {
    muted = localStorage.getItem(KEY) === '1';
  } catch (e) {}

  var ctx = null;
  var master = null;
  var lastAt = 0;
  var listeners = [];

  function getCtx() {
    if (muted) return null;
    if (!ctx) {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      ctx = new Ctx();
      // Spoločná hlasitosť a mäkký filter, aby zvuky nepôsobili ostro
      var filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 3200;
      master = ctx.createGain();
      master.gain.value = 0.9;
      master.connect(filter);
      filter.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume().catch(function () {});
    return ctx;
  }

  // Tón s krátkym nábehom (bez praskania) a prirodzeným doznievaním
  function note(c, freq, start, dur, opts) {
    opts = opts || {};
    var t0 = c.currentTime + start;
    var peak = opts.gain || 0.05;
    var osc = c.createOscillator();
    var g = c.createGain();
    osc.type = opts.type || 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    if (opts.to) osc.frequency.exponentialRampToValueAtTime(opts.to, t0 + dur * 0.8);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak, t0 + (opts.attack || 0.006));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g);
    g.connect(master);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  // Zvonček: základný tón + tichý vyšší alikvót (pripomína marimbu)
  function bell(c, freq, start, dur, gain) {
    note(c, freq, start, dur, { gain: gain });
    note(c, freq * 2.01, start, dur * 0.5, { gain: gain * 0.22 });
  }

  // Pentatonika C dur – možnosti A, B, C, D znejú ako rôzne tóny jednej melódie
  var PENTA = [523.25, 587.33, 659.25, 783.99, 880];

  var SOUNDS = {
    tap: function (c) {
      note(c, 740, 0, 0.07, { to: 520, gain: 0.03 });
    },
    select: function (c, i) {
      var f = PENTA[(typeof i === 'number' ? i : 2) % PENTA.length];
      bell(c, f, 0, 0.22, 0.045);
    },
    open: function (c) {
      note(c, 520, 0, 0.12, { to: 700, gain: 0.025 });
    },
    close: function (c) {
      note(c, 640, 0, 0.1, { to: 470, gain: 0.022 });
    },
    on: function (c) {
      bell(c, 659.25, 0, 0.16, 0.035);
      bell(c, 880, 0.08, 0.22, 0.035);
    },
    correct: function (c) {
      bell(c, 659.25, 0, 0.3, 0.05);
      bell(c, 987.77, 0.09, 0.42, 0.045);
    },
    wrong: function (c) {
      note(c, 330, 0, 0.22, { type: 'triangle', to: 262, gain: 0.05 });
      note(c, 262, 0.12, 0.26, { type: 'triangle', to: 220, gain: 0.04 });
    },
    finish: function (c) {
      bell(c, 523.25, 0, 0.3, 0.045);
      bell(c, 659.25, 0.1, 0.3, 0.045);
      bell(c, 783.99, 0.2, 0.32, 0.045);
      bell(c, 1046.5, 0.32, 0.6, 0.04);
    }
  };
  SOUNDS.click = SOUNDS.tap;

  function play(kind, i) {
    var c = getCtx();
    if (!c || !SOUNDS[kind]) return;
    lastAt = Date.now();
    try {
      SOUNDS[kind](c, i);
    } catch (e) {}
  }

  function setMuted(v) {
    muted = !!v;
    try {
      localStorage.setItem(KEY, muted ? '1' : '0');
    } catch (e) {}
    listeners.forEach(function (fn) {
      fn(muted);
    });
    if (!muted) play('on');
  }

  // Druhá karta prehliadača zmenila nastavenie
  window.addEventListener('storage', function (e) {
    if (e.key !== KEY) return;
    muted = e.newValue === '1';
    listeners.forEach(function (fn) {
      fn(muted);
    });
  });

  window.T9Sound = {
    play: play,
    isMuted: function () {
      return muted;
    },
    setMuted: setMuted,
    toggle: function () {
      setMuted(!muted);
    },
    onChange: function (fn) {
      listeners.push(fn);
    },
    // Prednostne zahraný zvuk (napr. výber odpovede) nemá prekryť všeobecné ťuknutie
    playedRecently: function (ms) {
      return Date.now() - lastAt < (ms || 90);
    }
  };

  // Ťuknutie pri kliknutí na tlačidlo, ak tlačidlo nemá vlastný zvuk (data-sfx="none" ho vypne)
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('button, .hp-btn, [data-sfx]') : null;
    if (!el || el.disabled || el.getAttribute('data-sfx') === 'none') return;
    if (window.T9Sound.playedRecently()) return;
    play(el.getAttribute('data-sfx') || 'tap');
  });
})();
