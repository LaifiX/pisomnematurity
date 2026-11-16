// Zdieľanie stránky ([data-share]) a pridanie aplikácie na plochu ([data-install])
// – spoločné pre úvodnú stránku aj všetky testy + registrácia service workera (offline režim).
(function () {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').catch(() => {}));
  }

  const ua = navigator.userAgent || '';
  const isIos =
    /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isAndroid = /android/i.test(ua);
  const isMacSafari =
    !isIos && /macintosh/i.test(ua) && /safari/i.test(ua) && !/chrome|chromium|edg|opr|firefox/i.test(ua);
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  const CHECK_SVG_PATH = '<path d="M20 6 9 17l-5-5"/>';
  const CLOSE_SVG =
    '<svg class="hp-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

  let deferredPrompt = null;
  let installModal = null;
  let lastInstallTrigger = null;
  let toastEl = null;
  let toastTimer = null;

  function isStandalone() {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      window.matchMedia('(display-mode: window-controls-overlay)').matches ||
      window.navigator.standalone === true
    );
  }

  function showToast(message) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 't9-toast hidden no-print';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    toastEl.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      if (toastEl) toastEl.classList.add('hidden');
    }, 2600);
  }

  function syncInstallButtons() {
    const installed = isStandalone();
    document.querySelectorAll('[data-install]').forEach((el) => {
      const kind = el.getAttribute('data-install') || 'any';
      const fits = kind === 'any' || (kind === 'mobile' ? isTouch : !isTouch);
      const hide = installed || !fits;
      el.hidden = hide;
      el.classList.toggle('hidden', hide);
    });
    document.querySelectorAll('[data-install-text]').forEach((el) => {
      el.hidden = installed;
      el.classList.toggle('hidden', installed);
    });
  }

  function getInstallStepsHtml() {
    if (isIos) {
      return `
        <ol class="hp-install-steps">
          <li>V&nbsp;lište prehliadača ťukni na&nbsp;ikonu <strong>Zdieľať</strong> (štvorček so&nbsp;šípkou nahor).</li>
          <li>Posuň ponuku nižšie a&nbsp;vyber možnosť <strong>Pridať na&nbsp;plochu</strong>.</li>
          <li>Potvrď ťuknutím na&nbsp;<strong>Pridať</strong>&nbsp;– ikona <strong>T9 Slovenčina</strong> sa&nbsp;objaví priamo na&nbsp;ploche.</li>
        </ol>`;
    }
    if (isAndroid) {
      return `
        <ol class="hp-install-steps">
          <li>Ťukni na&nbsp;ponuku prehliadača <strong>⋮</strong> (tri bodky v&nbsp;rohu obrazovky).</li>
          <li>Vyber možnosť <strong>Inštalovať aplikáciu</strong> alebo <strong>Pridať na&nbsp;plochu</strong>.</li>
          <li>Potvrď pridanie&nbsp;– na&nbsp;ploche telefónu pribudne ikona <strong>T9 Slovenčina</strong>.</li>
        </ol>`;
    }
    if (isMacSafari) {
      return `
        <ol class="hp-install-steps">
          <li>V&nbsp;hornej lište prehliadača Safari klikni na&nbsp;<strong>Súbor</strong>.</li>
          <li>Vyber možnosť <strong>Pridať do&nbsp;Docku…</strong> a&nbsp;potvrď tlačidlom <strong>Pridať</strong>.</li>
          <li>Aplikácia <strong>T9 Slovenčina</strong> sa&nbsp;uloží do&nbsp;Docku a&nbsp;otvorí sa&nbsp;vo&nbsp;vlastnom okne.</li>
        </ol>`;
    }
    return `
      <ol class="hp-install-steps">
        <li>V&nbsp;prehliadači <strong>Chrome</strong> alebo <strong>Edge</strong> klikni na&nbsp;ikonu <strong>Inštalovať</strong> vpravo v&nbsp;adresnom riadku (alebo otvor menu <strong>⋮ → Uložiť a&nbsp;zdieľať → Inštalovať stránku ako aplikáciu</strong>).</li>
        <li>Potvrď tlačidlom <strong>Inštalovať</strong>&nbsp;– na&nbsp;ploche a&nbsp;v&nbsp;ponuke Štart pribudne ikona <strong>T9 Slovenčina</strong>.</li>
        <li>Vo&nbsp;<strong>Firefoxe</strong> si môžeš stránku pridať na&nbsp;plochu pretiahnutím ikony vľavo v&nbsp;adresnom riadku priamo na&nbsp;pracovnú plochu.</li>
      </ol>`;
  }

  function closeInstallModal() {
    if (!installModal || installModal.classList.contains('hidden')) return;
    installModal.classList.add('hidden');
    document.body.style.overflow = '';
    if (window.T9Sound) window.T9Sound.play('close');
    if (lastInstallTrigger && typeof lastInstallTrigger.focus === 'function') {
      lastInstallTrigger.focus();
    }
  }

  function openInstallModal(triggerEl) {
    lastInstallTrigger = triggerEl || null;
    if (!installModal) {
      installModal = document.createElement('div');
      installModal.id = 'installAppModal';
      installModal.className = 'modal-backdrop hidden no-print';
      installModal.setAttribute('role', 'dialog');
      installModal.setAttribute('aria-modal', 'true');
      installModal.setAttribute('aria-labelledby', 'installAppModalTitle');
      installModal.innerHTML = `
        <div class="modal-window hp-install-modal">
          <div class="modal-header">
            <div class="modal-title-group">
              <span class="brand-mark hp-install-mark" aria-hidden="true">T9</span>
              <div>
                <span class="modal-eyebrow">Aplikácia v zariadení</span>
                <h3 id="installAppModalTitle">Pridať na plochu</h3>
              </div>
            </div>
            <button type="button" class="modal-close-btn" data-install-close aria-label="Zavrieť">${CLOSE_SVG}</button>
          </div>
          <div class="modal-body">
            ${getInstallStepsHtml()}
            <p class="hp-install-note">
              Po&nbsp;pridaní sa&nbsp;stránka otvára ako samostatná aplikácia bez&nbsp;panelov prehliadača a&nbsp;už otvorené testy fungujú aj&nbsp;bez&nbsp;internetu.
            </p>
          </div>
          <div class="modal-footer">
            <div class="modal-footer-right">
              <button type="button" class="hp-btn hp-btn-primary hp-btn-sm" data-install-close>Rozumiem</button>
            </div>
          </div>
        </div>`;
      document.body.appendChild(installModal);
      installModal.addEventListener('click', (e) => {
        if (e.target === installModal || e.target.closest('[data-install-close]')) {
          closeInstallModal();
        }
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !installModal.classList.contains('hidden')) {
          e.stopPropagation();
          closeInstallModal();
        }
      });
    }
    installModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (window.T9Sound) window.T9Sound.play('open');
    const closeBtn = installModal.querySelector('[data-install-close]');
    if (closeBtn) closeBtn.focus();
  }

  async function copyTextToClipboard(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (e) {}
    }
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      ta.style.pointerEvents = 'none';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch (e) {
      return false;
    }
  }

  function markButtonCopied(btn) {
    const labelEl = btn.querySelector('[data-share-label]');
    const svgEl = btn.querySelector('svg');
    if (!btn.dataset.origLabel && labelEl) {
      btn.dataset.origLabel = labelEl.textContent || '';
    }
    if (!btn.dataset.origSvg && svgEl) {
      btn.dataset.origSvg = svgEl.innerHTML;
    }
    if (labelEl) labelEl.textContent = 'Skopírované!';
    if (svgEl) svgEl.innerHTML = CHECK_SVG_PATH;
    btn.classList.add('is-copied');

    if (btn._copyTimer) clearTimeout(btn._copyTimer);
    btn._copyTimer = setTimeout(() => {
      if (labelEl && btn.dataset.origLabel) labelEl.textContent = btn.dataset.origLabel;
      if (svgEl && btn.dataset.origSvg) svgEl.innerHTML = btn.dataset.origSvg;
      btn.classList.remove('is-copied');
    }, 2400);
  }

  async function handleShare(btn) {
    const url = btn.getAttribute('data-share-url') || window.location.origin + window.location.pathname;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const metaDesc = document.querySelector('meta[name="description"]');
    const title = btn.getAttribute('data-share-title') || (ogTitle && ogTitle.content) || document.title;
    const text = btn.getAttribute('data-share-text') || (metaDesc && metaDesc.content) || '';

    if (typeof navigator.share === 'function') {
      const payload = text ? { title, text, url } : { title, url };
      const canUseNative = typeof navigator.canShare !== 'function' || navigator.canShare(payload);
      if (canUseNative) {
        try {
          await navigator.share(payload);
          return;
        } catch (err) {
          if (err && err.name === 'AbortError') return;
        }
      }
    }

    const copied = await copyTextToClipboard(url);
    if (copied) {
      if (window.T9Sound) window.T9Sound.play('on');
      markButtonCopied(btn);
      showToast('Odkaz na stránku bol skopírovaný do schránky.');
    } else {
      window.prompt('Skopíruj odkaz na stránku:', url);
    }
  }

  syncInstallButtons();

  const standaloneMedia = window.matchMedia('(display-mode: standalone)');
  if (standaloneMedia && typeof standaloneMedia.addEventListener === 'function') {
    standaloneMedia.addEventListener('change', syncInstallButtons);
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    syncInstallButtons();
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    closeInstallModal();
    syncInstallButtons();
    showToast('Aplikácia T9 Slovenčina bola pridaná na plochu.');
  });

  document.addEventListener('click', async (e) => {
    const target = e.target;
    if (!target || typeof target.closest !== 'function') return;

    const shareBtn = target.closest('[data-share]');
    if (shareBtn) {
      e.preventDefault();
      await handleShare(shareBtn);
      return;
    }

    const installBtn = target.closest('[data-install]');
    if (!installBtn) return;
    e.preventDefault();

    if (deferredPrompt) {
      const promptEvent = deferredPrompt;
      deferredPrompt = null;
      try {
        promptEvent.prompt();
        const choice = await promptEvent.userChoice;
        if (choice && choice.outcome === 'accepted') {
          syncInstallButtons();
        }
        return;
      } catch (err) {}
    }

    openInstallModal(installBtn);
  });
})();
