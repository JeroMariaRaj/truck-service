/* ==========================================================================
   TITAN DIESEL - MAIN CONTROLLER
   Back to Top, Dynamic Year, Tooltips, System Initializations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // 1. Dynamic Copyright Year
  const yearSpans = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(el => {
    el.textContent = currentYear;
  });

  // 2. Back To Top Floating Button
  let backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) {
    backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top of page');
    backToTopBtn.innerHTML = '<i class="bi bi-chevron-up"></i>';
    document.body.appendChild(backToTopBtn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 3. Initialize Bootstrap Tooltips if Bootstrap is present
  if (typeof bootstrap !== 'undefined') {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  }

  // 4. Smooth Anchor Scrolling with Sticky Header Offset
  document.querySelectorAll('a[href^="#"]:not([href="#"]):not([data-bs-toggle])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 85;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });
});
