/* ==========================================================================
   TITAN DIESEL - THEME MANAGER (DARK / LIGHT MODE)
   Persistent Local Storage & Operating System Preference Detection
   ========================================================================== */

(function () {
  'use strict';

  const STORAGE_KEY = 'titan_theme';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  // Determine initial theme: stored preference -> OS preference -> fallback to dark
  function getPreferredTheme() {
    const storedTheme = localStorage.getItem(STORAGE_KEY);
    if (storedTheme) {
      return storedTheme;
    }
    // Default to dark theme for industrial workshop look, unless OS explicitly requests light
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return THEME_LIGHT;
    }
    return THEME_DARK;
  }

  // Apply theme to document
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateThemeToggleUI(theme);
  }

  // Update button icons and title attributes
  function updateThemeToggleUI(theme) {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      const icon = btn.querySelector('i');
      if (theme === THEME_LIGHT) {
        if (icon) icon.className = 'bi bi-moon-stars-fill';
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
        btn.setAttribute('title', 'Switch to Dark Mode');
      } else {
        if (icon) icon.className = 'bi bi-sun-fill';
        btn.setAttribute('aria-label', 'Switch to Light Mode');
        btn.setAttribute('title', 'Switch to Light Mode');
      }
    });
  }

  // Toggle between dark and light
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || THEME_DARK;
    const nextTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    applyTheme(nextTheme);
  }

  // Initialize immediately to prevent flash of wrong theme
  const initialTheme = getPreferredTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  // Bind DOM events once ready
  document.addEventListener('DOMContentLoaded', function () {
    updateThemeToggleUI(initialTheme);
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });

    // Listen for OS system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? THEME_LIGHT : THEME_DARK);
        }
      });
    }
  });

  window.TitanTheme = {
    get: () => document.documentElement.getAttribute('data-theme') || THEME_DARK,
    set: applyTheme,
    toggle: toggleTheme
  };
})();
