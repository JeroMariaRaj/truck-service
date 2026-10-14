/* ==========================================================================
   TITAN DIESEL - RTL / LTR DIRECTION MANAGER
   Persistent Local Storage & Document Direction Control
   ========================================================================== */

(function () {
  'use strict';

  const STORAGE_KEY = 'titan_direction';
  const DIR_LTR = 'ltr';
  const DIR_RTL = 'rtl';

  function getPreferredDirection() {
    return localStorage.getItem(STORAGE_KEY) || DIR_LTR;
  }

  function applyDirection(dir) {
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', dir === DIR_RTL ? 'ar' : 'en');
    localStorage.setItem(STORAGE_KEY, dir);
    updateRtlToggleUI(dir);
  }

  function updateRtlToggleUI(dir) {
    const toggleBtns = document.querySelectorAll('.rtl-toggle-btn');
    toggleBtns.forEach(btn => {
      const textSpan = btn.querySelector('.btn-label');
      if (dir === DIR_RTL) {
        if (textSpan) textSpan.textContent = 'LTR';
        btn.setAttribute('aria-label', 'Switch to Left to Right layout');
        btn.setAttribute('title', 'Switch to Left to Right layout');
      } else {
        if (textSpan) textSpan.textContent = 'RTL';
        btn.setAttribute('aria-label', 'Switch to Right to Left layout');
        btn.setAttribute('title', 'Switch to Right to Left layout');
      }
    });
  }

  function toggleDirection() {
    const currentDir = document.documentElement.getAttribute('dir') || DIR_LTR;
    const nextDir = currentDir === DIR_LTR ? DIR_RTL : DIR_LTR;
    applyDirection(nextDir);
  }

  // Initialize immediately
  const initialDir = getPreferredDirection();
  document.documentElement.setAttribute('dir', initialDir);
  document.documentElement.setAttribute('lang', initialDir === DIR_RTL ? 'ar' : 'en');

  document.addEventListener('DOMContentLoaded', function () {
    updateRtlToggleUI(initialDir);
    const toggleBtns = document.querySelectorAll('.rtl-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', toggleDirection);
    });
  });

  window.TitanRTL = {
    get: () => document.documentElement.getAttribute('dir') || DIR_LTR,
    set: applyDirection,
    toggle: toggleDirection
  };
})();
